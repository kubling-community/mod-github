import { 
  functionMatches, 
  getFiltersOfFieldVal, 
  httpCallbackArrayResultSet, 
  isArrayEmpty, 
  isNotUndefinedOrNull 
} from "./utils/Utils";
import OrgsApi from "./platform/github/api/OrgsApi";
import ReposApi from "./platform/github/api/ReposApi";
import { getOrgs, paginationOps } from "./utils/GitHubAPIUtils";

const qfJson = JSON.parse(queryFilter.json);
const opts = {
  ...paginationOps({}, qfJson),
  deserialize: false,
};

// Common function to iterate over orgs and repos
const processRepos = (apiMethod, tupleTransformer) => {
  const orgs = getOrgs(qfJson);
  const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
  if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

  orgs.forEach(org => {
    repos.forEach(repo => {
      apiMethod(org, repo, opts, (err, data, code) => {
        httpCallbackArrayResultSet(err, data, code, tupleTransformer(org, repo));
      });
    });
  });
};

// Query Handlers
const queryHandlers = {
  GITHUB_ORG: () => {
    const api = new OrgsApi();
    api.orgsList(opts, httpCallbackArrayResultSet);
  },
  GITHUB_CODE_REPO: () => {
    const api = new ReposApi();
    const orgs = getOrgs(qfJson);
    orgs.forEach(org => {
      api.reposListForOrg(org, opts, (err, data, code) => {
        httpCallbackArrayResultSet(err, data, code, tuple => {
          tuple.org = org;
          return tuple;
        });
      });
    });
  },
  GITHUB_CODE_REPO_BRANCH: () => {
    const api = new ReposApi();
    processRepos(api.reposListBranches.bind(api), (org, repo) => tuple => {
      tuple.org = org;
      tuple.repo = repo;
      return tuple;
    });
  },
  GITHUB_CODE_REPO_COLLABORATOR: () => {
    const api = new ReposApi();
    processRepos(api.reposListCollaborators.bind(api), (org, repo) => tuple => {
      tuple.org = org;
      tuple.repo = repo;
      return tuple;
    });
  },
  GITHUB_CODE_REPO_CONTRIBUTOR: () => {
    const api = new ReposApi();
    processRepos(api.reposListContributors.bind(api), (org, repo) => tuple => {
      tuple.org = org;
      tuple.repo = repo;
      return tuple;
    });
  },
  GITHUB_CODE_REPO_LANGUAGE: () => {
    const api = new ReposApi();
    const orgs = getOrgs(qfJson);
    const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
    if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

    orgs.forEach(org => {
      repos.forEach(repo => {
        api.reposListLanguages(org, repo, (err, data, code) => {
          Object.entries(data).forEach(([key, bytes]) => {
            const tuple = { org, repo, language: key, bytes };
            resultSet.addRow(JSON.stringify(tuple));
          });
        });
      });
    });
  },
  GITHUB_CODE_REPO_RELEASE: () => {
    const api = new ReposApi();
    processRepos(api.reposListReleases.bind(api), (org, repo) => tuple => {
      tuple.org = org;
      tuple.repo = repo;
      return tuple;
    });
  },
  GITHUB_CODE_REPO_TAG: () => {
    const api = new ReposApi();
    processRepos(api.reposListTags.bind(api), (org, repo) => tuple => {
      tuple.org = org;
      tuple.repo = repo;
      return tuple;
    });
  },
};

// Find and execute the corresponding handler
const func = Object.entries(queryHandlers)
  .find(([key]) => functionMatches(key, queryFilter.table))?.[1];

if (isNotUndefinedOrNull(func)) func();