CREATE FOREIGN TABLE GITHUB_ORG
(
  identifier string OPTIONS(val_pk 'id'),
  login string,
  id long,
  node_id string,
  url string,
  repos_url string,
  events_url string,
  hooks_url string,
  issues_url string,
  members_url string,
  public_members_url string,
  avatar_url string,
  description string,

  PRIMARY KEY(identifier),
  UNIQUE(id)
)
OPTIONS(updatable true);

/***** BEGIN CODE REPO *****/

CREATE FOREIGN TABLE GITHUB_CODE_REPO
(
  identifier string OPTIONS(val_pk 'org+name'),
  org string, /* NRMBA */
  owner__login string,
  id integer,
  node_id string,
  name string not null,
  description string,
  private boolean,
  visibility string,
  owner__html_url string,
  owner json OPTIONS(parser_format 'asJsonPretty'),

  PRIMARY KEY(identifier),
  UNIQUE(org, id)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_BRANCH
(
  identifier string OPTIONS(val_pk 'org+repo+name'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  name string,
  "commit" json OPTIONS(parser_format 'asJsonPretty'),
  protected boolean,
  protection json OPTIONS(parser_format 'asJsonPretty'),
  protection_url string,

  PRIMARY KEY(identifier),
  UNIQUE(org, repo, name)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_COLLABORATOR
(
  identifier string OPTIONS(val_pk 'org+repo+email'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  login string,
  id long,
  email string,
  name string,
  type string,
  permissions json OPTIONS(parser_format 'asJsonPretty'),
  role_name string,

  PRIMARY KEY(identifier),
  UNIQUE(org, repo, email)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_CONTRIBUTOR
(
  identifier string OPTIONS(val_pk 'org+repo+email'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  login string,
  id long,
  email string,
  name string,
  type string,
  contributions long,

  PRIMARY KEY(identifier),
  UNIQUE(org, repo, email)
)
OPTIONS(updatable false);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_LANGUAGE
(
  identifier string OPTIONS(val_pk 'org+repo+language'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  "language" string,
  bytes long,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable false);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_RELEASE
(
  identifier string OPTIONS(val_pk 'org+repo+id'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  name string,
  id long,
  assets json OPTIONS(parser_format 'asJsonPretty'),
  assets_url string,
  author json OPTIONS(parser_format 'asJsonPretty'),
  body string,
  created_at string,
  prerelease boolean,
  published_at string,
  tag_name string,
  url string,
  zipball_url string,

  PRIMARY KEY(identifier),
  UNIQUE(org, repo, id)
)
OPTIONS(updatable false);

CREATE FOREIGN TABLE GITHUB_CODE_REPO_TAG
(
  identifier string OPTIONS(val_pk 'org+repo+name'),
  org string, /* NRMBA */
  repo string, /* NRMBA */
  name string,
  "commit" string,
  zipball_url string,
  tarball_url string,

  PRIMARY KEY(identifier),
  UNIQUE(org, repo, name)
)
OPTIONS(updatable true);

/***** END CODE REPO *****/