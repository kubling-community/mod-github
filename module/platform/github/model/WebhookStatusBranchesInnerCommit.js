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
 * The WebhookStatusBranchesInnerCommit model module.
 * @module model/WebhookStatusBranchesInnerCommit
 * @version 1.1.4
 */
class WebhookStatusBranchesInnerCommit {
    /**
     * Constructs a new <code>WebhookStatusBranchesInnerCommit</code>.
     * @alias module:model/WebhookStatusBranchesInnerCommit
     * @param sha {String} 
     * @param url {String} 
     */
    constructor(sha, url) { 
        
        WebhookStatusBranchesInnerCommit.initialize(this, sha, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sha, url) { 
        obj['sha'] = sha;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhookStatusBranchesInnerCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookStatusBranchesInnerCommit} obj Optional instance to populate.
     * @return {module:model/WebhookStatusBranchesInnerCommit} The populated <code>WebhookStatusBranchesInnerCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookStatusBranchesInnerCommit();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookStatusBranchesInnerCommit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookStatusBranchesInnerCommit</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookStatusBranchesInnerCommit.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhookStatusBranchesInnerCommit.RequiredProperties = ["sha", "url"];

/**
 * @member {String} sha
 */
WebhookStatusBranchesInnerCommit.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
WebhookStatusBranchesInnerCommit.prototype['url'] = undefined;






export default WebhookStatusBranchesInnerCommit;

