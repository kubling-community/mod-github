import { functionMatches, getFiltersOfFieldVal, httpCallbackArrayResultSet, isArrayEmpty, isNotUndefinedOrNull } from "./utils/Utils";
import OrgsApi from "./platform/github/api/OrgsApi";
import { getOrgs, paginationOps } from "./utils/GitHubAPIUtils";
import ReposApi from "./platform/github/api/ReposApi";

const qfJson = JSON.parse(queryFilter.json);
var opts = paginationOps({}, qfJson);
opts.deserialize = false;

const queryHandlers = {

    GITHUB_ORG: function() {
      var api = new OrgsApi();
      api.orgsList(opts, httpCallbackArrayResultSet);          
    },
    GITHUB_CODE_REPO: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      for (let org of orgs) {
        api.reposListForOrg(org, opts, (err, data, code) => {
          httpCallbackArrayResultSet(err, data, code, (tuple) => { 
            tuple.org = org;
            return tuple;
          });
        });
      }
    },
    GITHUB_CODE_REPO_BRANCH: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListBranches(org, repo, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.org = org;
              tuple.repo = repo;
              return tuple;
            });
          });
        }
      }
    },
    GITHUB_CODE_REPO_COLLABORATOR: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListCollaborators(org, repo, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.org = org;
              tuple.repo = repo;
              return tuple;
            });
          });
        }
      }
    },
    GITHUB_CODE_REPO_CONTRIBUTOR: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListContributors(org, repo, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.org = org;
              tuple.repo = repo;
              return tuple;
            });
          });
        }
      }
    },
    GITHUB_CODE_REPO_LANGUAGE: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListLanguages(org, repo, (err, data, code) => {            
            for (let key in data){
              let tuple = {};
              tuple.org = org;
              tuple.repo = repo;
              tuple.language = key;
              tuple.bytes = data[key];
              resultSet.addRow(JSON.stringify(tuple));
            }
          });
        }
      }
    },
    GITHUB_CODE_REPO_RELEASE: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListReleases(org, repo, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.org = org;
              tuple.repo = repo;
              return tuple;
            });
          });
        }
      }
    },
    GITHUB_CODE_REPO_TAG: function() {
      var api = new ReposApi();
      var orgs = getOrgs(qfJson);
      const repos = getFiltersOfFieldVal("repo", "EQUAL", qfJson);
      if (isArrayEmpty(repos)) throw new Error("You must specify at least one 'repo'.");

      for (let org of orgs) {
        for (let repo of repos) {
          api.reposListTags(org, repo, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.org = org;
              tuple.repo = repo;
              return tuple;
            });
          });
        }
      }
    }

}

const func = Object.values(queryHandlers)
    .find(f => functionMatches(f, queryFilter.table));

if (isNotUndefinedOrNull(func)) func();