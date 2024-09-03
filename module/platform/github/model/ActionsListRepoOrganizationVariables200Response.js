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
import ActionsVariable from './ActionsVariable';

/**
 * The ActionsListRepoOrganizationVariables200Response model module.
 * @module model/ActionsListRepoOrganizationVariables200Response
 * @version 1.1.4
 */
class ActionsListRepoOrganizationVariables200Response {
    /**
     * Constructs a new <code>ActionsListRepoOrganizationVariables200Response</code>.
     * @alias module:model/ActionsListRepoOrganizationVariables200Response
     * @param totalCount {Number} 
     * @param variables {Array.<module:model/ActionsVariable>} 
     */
    constructor(totalCount, variables) { 
        
        ActionsListRepoOrganizationVariables200Response.initialize(this, totalCount, variables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, variables) { 
        obj['total_count'] = totalCount;
        obj['variables'] = variables;
    }

    /**
     * Constructs a <code>ActionsListRepoOrganizationVariables200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListRepoOrganizationVariables200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListRepoOrganizationVariables200Response} The populated <code>ActionsListRepoOrganizationVariables200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListRepoOrganizationVariables200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [ActionsVariable]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListRepoOrganizationVariables200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListRepoOrganizationVariables200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListRepoOrganizationVariables200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                ActionsVariable.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListRepoOrganizationVariables200Response.RequiredProperties = ["total_count", "variables"];

/**
 * @member {Number} total_count
 */
ActionsListRepoOrganizationVariables200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/ActionsVariable>} variables
 */
ActionsListRepoOrganizationVariables200Response.prototype['variables'] = undefined;






export default ActionsListRepoOrganizationVariables200Response;

