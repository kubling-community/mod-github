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
import Artifact from './Artifact';

/**
 * The ActionsListArtifactsForRepo200Response model module.
 * @module model/ActionsListArtifactsForRepo200Response
 * @version 1.1.4
 */
class ActionsListArtifactsForRepo200Response {
    /**
     * Constructs a new <code>ActionsListArtifactsForRepo200Response</code>.
     * @alias module:model/ActionsListArtifactsForRepo200Response
     * @param totalCount {Number} 
     * @param artifacts {Array.<module:model/Artifact>} 
     */
    constructor(totalCount, artifacts) { 
        
        ActionsListArtifactsForRepo200Response.initialize(this, totalCount, artifacts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, artifacts) { 
        obj['total_count'] = totalCount;
        obj['artifacts'] = artifacts;
    }

    /**
     * Constructs a <code>ActionsListArtifactsForRepo200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListArtifactsForRepo200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListArtifactsForRepo200Response} The populated <code>ActionsListArtifactsForRepo200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListArtifactsForRepo200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = ApiClient.convertToType(data['artifacts'], [Artifact]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListArtifactsForRepo200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListArtifactsForRepo200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListArtifactsForRepo200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['artifacts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['artifacts'])) {
                throw new Error("Expected the field `artifacts` to be an array in the JSON data but got " + data['artifacts']);
            }
            // validate the optional field `artifacts` (array)
            for (const item of data['artifacts']) {
                Artifact.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListArtifactsForRepo200Response.RequiredProperties = ["total_count", "artifacts"];

/**
 * @member {Number} total_count
 */
ActionsListArtifactsForRepo200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Artifact>} artifacts
 */
ActionsListArtifactsForRepo200Response.prototype['artifacts'] = undefined;






export default ActionsListArtifactsForRepo200Response;

