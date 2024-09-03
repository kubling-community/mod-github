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
 * The PullRequestMergeResult model module.
 * @module model/PullRequestMergeResult
 * @version 1.1.4
 */
class PullRequestMergeResult {
    /**
     * Constructs a new <code>PullRequestMergeResult</code>.
     * Pull Request Merge Result
     * @alias module:model/PullRequestMergeResult
     * @param sha {String} 
     * @param merged {Boolean} 
     * @param message {String} 
     */
    constructor(sha, merged, message) { 
        
        PullRequestMergeResult.initialize(this, sha, merged, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sha, merged, message) { 
        obj['sha'] = sha;
        obj['merged'] = merged;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>PullRequestMergeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMergeResult} obj Optional instance to populate.
     * @return {module:model/PullRequestMergeResult} The populated <code>PullRequestMergeResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestMergeResult();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('merged')) {
                obj['merged'] = ApiClient.convertToType(data['merged'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PullRequestMergeResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PullRequestMergeResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PullRequestMergeResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

PullRequestMergeResult.RequiredProperties = ["sha", "merged", "message"];

/**
 * @member {String} sha
 */
PullRequestMergeResult.prototype['sha'] = undefined;

/**
 * @member {Boolean} merged
 */
PullRequestMergeResult.prototype['merged'] = undefined;

/**
 * @member {String} message
 */
PullRequestMergeResult.prototype['message'] = undefined;






export default PullRequestMergeResult;

