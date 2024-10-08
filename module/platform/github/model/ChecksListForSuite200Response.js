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
import CheckRun from './CheckRun';

/**
 * The ChecksListForSuite200Response model module.
 * @module model/ChecksListForSuite200Response
 * @version 1.1.4
 */
class ChecksListForSuite200Response {
    /**
     * Constructs a new <code>ChecksListForSuite200Response</code>.
     * @alias module:model/ChecksListForSuite200Response
     * @param totalCount {Number} 
     * @param checkRuns {Array.<module:model/CheckRun>} 
     */
    constructor(totalCount, checkRuns) { 
        
        ChecksListForSuite200Response.initialize(this, totalCount, checkRuns);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, checkRuns) { 
        obj['total_count'] = totalCount;
        obj['check_runs'] = checkRuns;
    }

    /**
     * Constructs a <code>ChecksListForSuite200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChecksListForSuite200Response} obj Optional instance to populate.
     * @return {module:model/ChecksListForSuite200Response} The populated <code>ChecksListForSuite200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChecksListForSuite200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('check_runs')) {
                obj['check_runs'] = ApiClient.convertToType(data['check_runs'], [CheckRun]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChecksListForSuite200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChecksListForSuite200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChecksListForSuite200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['check_runs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['check_runs'])) {
                throw new Error("Expected the field `check_runs` to be an array in the JSON data but got " + data['check_runs']);
            }
            // validate the optional field `check_runs` (array)
            for (const item of data['check_runs']) {
                CheckRun.validateJSON(item);
            };
        }

        return true;
    }


}

ChecksListForSuite200Response.RequiredProperties = ["total_count", "check_runs"];

/**
 * @member {Number} total_count
 */
ChecksListForSuite200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/CheckRun>} check_runs
 */
ChecksListForSuite200Response.prototype['check_runs'] = undefined;






export default ChecksListForSuite200Response;

