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
 * The GitRefObject model module.
 * @module model/GitRefObject
 * @version 1.1.4
 */
class GitRefObject {
    /**
     * Constructs a new <code>GitRefObject</code>.
     * @alias module:model/GitRefObject
     * @param type {String} 
     * @param sha {String} SHA for the reference
     * @param url {String} 
     */
    constructor(type, sha, url) { 
        
        GitRefObject.initialize(this, type, sha, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, sha, url) { 
        obj['type'] = type;
        obj['sha'] = sha;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>GitRefObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitRefObject} obj Optional instance to populate.
     * @return {module:model/GitRefObject} The populated <code>GitRefObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitRefObject();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>GitRefObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitRefObject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitRefObject.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
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

GitRefObject.RequiredProperties = ["type", "sha", "url"];

/**
 * @member {String} type
 */
GitRefObject.prototype['type'] = undefined;

/**
 * SHA for the reference
 * @member {String} sha
 */
GitRefObject.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
GitRefObject.prototype['url'] = undefined;






export default GitRefObject;

