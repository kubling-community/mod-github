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

/**
 * The CodeScanningDefaultSetupUpdateResponse model module.
 * @module model/CodeScanningDefaultSetupUpdateResponse
 * @version 1.1.4
 */
class CodeScanningDefaultSetupUpdateResponse {
    /**
     * Constructs a new <code>CodeScanningDefaultSetupUpdateResponse</code>.
     * You can use &#x60;run_url&#x60; to track the status of the run. This includes a property status and conclusion. You should not rely on this always being an actions workflow run object.
     * @alias module:model/CodeScanningDefaultSetupUpdateResponse
     */
    constructor() { 
        
        CodeScanningDefaultSetupUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeScanningDefaultSetupUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningDefaultSetupUpdateResponse} obj Optional instance to populate.
     * @return {module:model/CodeScanningDefaultSetupUpdateResponse} The populated <code>CodeScanningDefaultSetupUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningDefaultSetupUpdateResponse();

            if (data.hasOwnProperty('run_id')) {
                obj['run_id'] = ApiClient.convertToType(data['run_id'], 'Number');
            }
            if (data.hasOwnProperty('run_url')) {
                obj['run_url'] = ApiClient.convertToType(data['run_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningDefaultSetupUpdateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningDefaultSetupUpdateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['run_url'] && !(typeof data['run_url'] === 'string' || data['run_url'] instanceof String)) {
            throw new Error("Expected the field `run_url` to be a primitive type in the JSON string but got " + data['run_url']);
        }

        return true;
    }


}



/**
 * ID of the corresponding run.
 * @member {Number} run_id
 */
CodeScanningDefaultSetupUpdateResponse.prototype['run_id'] = undefined;

/**
 * URL of the corresponding run.
 * @member {String} run_url
 */
CodeScanningDefaultSetupUpdateResponse.prototype['run_url'] = undefined;






export default CodeScanningDefaultSetupUpdateResponse;

