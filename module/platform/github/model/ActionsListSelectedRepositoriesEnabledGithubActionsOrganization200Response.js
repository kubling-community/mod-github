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
import Repository from './Repository';

/**
 * The ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response model module.
 * @module model/ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response
 * @version 1.1.4
 */
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response {
    /**
     * Constructs a new <code>ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response</code>.
     * @alias module:model/ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response
     * @param totalCount {Number} 
     * @param repositories {Array.<module:model/Repository>} 
     */
    constructor(totalCount, repositories) { 
        
        ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response.initialize(this, totalCount, repositories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, repositories) { 
        obj['total_count'] = totalCount;
        obj['repositories'] = repositories;
    }

    /**
     * Constructs a <code>ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response} The populated <code>ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repository]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['repositories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['repositories'])) {
                throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
            }
            // validate the optional field `repositories` (array)
            for (const item of data['repositories']) {
                Repository.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response.RequiredProperties = ["total_count", "repositories"];

/**
 * @member {Number} total_count
 */
ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Repository>} repositories
 */
ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response.prototype['repositories'] = undefined;






export default ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200Response;

