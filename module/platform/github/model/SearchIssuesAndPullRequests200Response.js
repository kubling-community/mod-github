/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueSearchResultItem from './IssueSearchResultItem';

/**
 * The SearchIssuesAndPullRequests200Response model module.
 * @module model/SearchIssuesAndPullRequests200Response
 * @version 1.1.4
 */
class SearchIssuesAndPullRequests200Response {
    /**
     * Constructs a new <code>SearchIssuesAndPullRequests200Response</code>.
     * @alias module:model/SearchIssuesAndPullRequests200Response
     * @param totalCount {Number} 
     * @param incompleteResults {Boolean} 
     * @param items {Array.<module:model/IssueSearchResultItem>} 
     */
    constructor(totalCount, incompleteResults, items) { 
        
        SearchIssuesAndPullRequests200Response.initialize(this, totalCount, incompleteResults, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, incompleteResults, items) { 
        obj['total_count'] = totalCount;
        obj['incomplete_results'] = incompleteResults;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>SearchIssuesAndPullRequests200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchIssuesAndPullRequests200Response} obj Optional instance to populate.
     * @return {module:model/SearchIssuesAndPullRequests200Response} The populated <code>SearchIssuesAndPullRequests200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchIssuesAndPullRequests200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('incomplete_results')) {
                obj['incomplete_results'] = ApiClient.convertToType(data['incomplete_results'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [IssueSearchResultItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchIssuesAndPullRequests200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchIssuesAndPullRequests200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchIssuesAndPullRequests200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                IssueSearchResultItem.validateJSON(item);
            };
        }

        return true;
    }


}

SearchIssuesAndPullRequests200Response.RequiredProperties = ["total_count", "incomplete_results", "items"];

/**
 * @member {Number} total_count
 */
SearchIssuesAndPullRequests200Response.prototype['total_count'] = undefined;

/**
 * @member {Boolean} incomplete_results
 */
SearchIssuesAndPullRequests200Response.prototype['incomplete_results'] = undefined;

/**
 * @member {Array.<module:model/IssueSearchResultItem>} items
 */
SearchIssuesAndPullRequests200Response.prototype['items'] = undefined;






export default SearchIssuesAndPullRequests200Response;

