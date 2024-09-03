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
import Runner from './Runner';

/**
 * The ActionsListSelfHostedRunnersForOrg200Response model module.
 * @module model/ActionsListSelfHostedRunnersForOrg200Response
 * @version 1.1.4
 */
class ActionsListSelfHostedRunnersForOrg200Response {
    /**
     * Constructs a new <code>ActionsListSelfHostedRunnersForOrg200Response</code>.
     * @alias module:model/ActionsListSelfHostedRunnersForOrg200Response
     * @param totalCount {Number} 
     * @param runners {Array.<module:model/Runner>} 
     */
    constructor(totalCount, runners) { 
        
        ActionsListSelfHostedRunnersForOrg200Response.initialize(this, totalCount, runners);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, runners) { 
        obj['total_count'] = totalCount;
        obj['runners'] = runners;
    }

    /**
     * Constructs a <code>ActionsListSelfHostedRunnersForOrg200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListSelfHostedRunnersForOrg200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListSelfHostedRunnersForOrg200Response} The populated <code>ActionsListSelfHostedRunnersForOrg200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListSelfHostedRunnersForOrg200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('runners')) {
                obj['runners'] = ApiClient.convertToType(data['runners'], [Runner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListSelfHostedRunnersForOrg200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListSelfHostedRunnersForOrg200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListSelfHostedRunnersForOrg200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['runners']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['runners'])) {
                throw new Error("Expected the field `runners` to be an array in the JSON data but got " + data['runners']);
            }
            // validate the optional field `runners` (array)
            for (const item of data['runners']) {
                Runner.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListSelfHostedRunnersForOrg200Response.RequiredProperties = ["total_count", "runners"];

/**
 * @member {Number} total_count
 */
ActionsListSelfHostedRunnersForOrg200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Runner>} runners
 */
ActionsListSelfHostedRunnersForOrg200Response.prototype['runners'] = undefined;






export default ActionsListSelfHostedRunnersForOrg200Response;

