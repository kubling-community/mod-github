export function isNull(obj) {
    return (obj === null);
}

export function isUndefinedOrNull(obj) {
    return ((obj === null) || (obj === undefined));
}

export function isNotUndefinedOrNull(obj) {
    return !isUndefinedOrNull(obj);
}

export function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}

export function isArrayEmpty(value) {
    if (!isUndefinedOrNull(value) && isArray(value))
        return (value.length === 0);
    return true;
}

export function isMapEmpty(value) {
    if (!isNull(value) && isMap(value))
        return (value.size === 0);
    return true;
}

export function cloneArray(a) {
    return [...a];
}

export function httpCliResponseContent(resp, type, apiClient) {
    return (!resp.content) ? {} : apiClient.deserialize(JSON.parse(resp.content), type);
}

export function responseIsLast(resp) {
    const ret = JSON.parse(resp.content);
    return (isNotUndefinedOrNull(ret.isLast)) ? ret.isLast : true;
}

export function functionGroupMatches(f, name) {
    return (typeof f === 'function') && (name.startsWith(f.name));
}
export function functionMatches(f, name) {
    return (typeof f === 'function') && (f.name === name);
}

export function shallReturnEmpty(err, code) {
    if (isNotUndefinedOrNull(err)) {
        if (code === 404) return true;
        throw new Error(`Code: ${code} - Message: ${err}`);
    }
    return false;
}

export function httpCallbackResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
    for (let v of data.values) {
        if (isNotUndefinedOrNull(enricher)) v = enricher(v);
        resultSet.addRow(JSON.stringify(v));
    }
}

export function httpCallbackArrayResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
    for (let v of data) {
        if (isNotUndefinedOrNull(enricher)) v = enricher(v);
        resultSet.addRow(JSON.stringify(v));
    }
}

export function httpCallbackSingleResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data)) return;
    if (isNotUndefinedOrNull(enricher)) data = enricher(data);
    resultSet.addRow(JSON.stringify(data));
}

export function baseOperationCallback(err, data, code) {
    if (isNotUndefinedOrNull(err)) throw new Error(`Code ${code} Message: ${err}`);
    affectedRows.increment();
}

export function getFiltersOfField(tableFieldName, operation, qf) {
    return qf.filters.filter((f) => f.field === tableFieldName && f.operation == operation);
}

export function getFiltersOfFieldVal(tableFieldName, operation, qf) {
    return qf.filters.filter((f) => f.field === tableFieldName && f.operation == operation).map((f) => f.value);
}

/*
    Since API supports only one single filter value in some fields, what we do as a workaround is
    skip them when the query contains multiple values and we let the Engine make the final filtering
*/
export function addUniqueFieldFilterEqualOrNothing(ops, tableFieldName, opsFieldName, qf) {
    
    const ff = getFiltersOfField(tableFieldName, "EQUAL", qf);
    if (isArrayEmpty(ff)) return ops;

    // If true, it means a query like fieldName = X AND/OR fieldName = Z
    if (ff.length > 1) return ops;

    // Otherwise, we filter by the field
    ops[opsFieldName] = ff[0].value;

    return ops;
}

export function requiresFieldFilter(ops, tableFieldName, opsFieldName, qf, message) {
    
    const ff = qf.filters.filter((f) => f.field === tableFieldName && f.operation == "EQUAL");
    if (isArrayEmpty(ff)) throw new Error(message);

    // If true, it means a query like fieldName = X AND/OR fieldName = Z
    if (ff.length > 1) return ops;

    // Otherwise, we filter by the field
    ops[opsFieldName] = ff[0];

    return ops;
}