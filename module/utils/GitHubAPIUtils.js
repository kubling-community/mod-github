import { getFiltersOfField, isArrayEmpty, isNotUndefinedOrNull } from "./Utils";

export function paginationOps(ops, qf) {
  if (isNotUndefinedOrNull(qf.pagination)) {
      if (qf.pagination.pageSize > 0) ops.perPage = qf.pagination.pageSize;
      ops.since = qf.pagination.page;
  }
  return ops;
}

export function getOrgs(qf) {
  let orgs = getFiltersOfField("org", "EQUAL", qf);
  return (isArrayEmpty(orgs)) ? [contextVars.GITHUB_ORG] : orgs;
}