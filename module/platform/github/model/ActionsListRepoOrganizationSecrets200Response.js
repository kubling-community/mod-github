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
import ActionsSecret from './ActionsSecret';

/**
 * The ActionsListRepoOrganizationSecrets200Response model module.
 * @module model/ActionsListRepoOrganizationSecrets200Response
 * @version 1.1.4
 */
class ActionsListRepoOrganizationSecrets200Response {
    /**
     * Constructs a new <code>ActionsListRepoOrganizationSecrets200Response</code>.
     * @alias module:model/ActionsListRepoOrganizationSecrets200Response
     * @param totalCount {Number} 
     * @param secrets {Array.<module:model/ActionsSecret>} 
     */
    constructor(totalCount, secrets) { 
        
        ActionsListRepoOrganizationSecrets200Response.initialize(this, totalCount, secrets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, secrets) { 
        obj['total_count'] = totalCount;
        obj['secrets'] = secrets;
    }

    /**
     * Constructs a <code>ActionsListRepoOrganizationSecrets200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListRepoOrganizationSecrets200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListRepoOrganizationSecrets200Response} The populated <code>ActionsListRepoOrganizationSecrets200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListRepoOrganizationSecrets200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('secrets')) {
                obj['secrets'] = ApiClient.convertToType(data['secrets'], [ActionsSecret]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListRepoOrganizationSecrets200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListRepoOrganizationSecrets200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListRepoOrganizationSecrets200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['secrets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['secrets'])) {
                throw new Error("Expected the field `secrets` to be an array in the JSON data but got " + data['secrets']);
            }
            // validate the optional field `secrets` (array)
            for (const item of data['secrets']) {
                ActionsSecret.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListRepoOrganizationSecrets200Response.RequiredProperties = ["total_count", "secrets"];

/**
 * @member {Number} total_count
 */
ActionsListRepoOrganizationSecrets200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/ActionsSecret>} secrets
 */
ActionsListRepoOrganizationSecrets200Response.prototype['secrets'] = undefined;






export default ActionsListRepoOrganizationSecrets200Response;

