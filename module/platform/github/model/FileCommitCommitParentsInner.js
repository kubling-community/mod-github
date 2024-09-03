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
 * The FileCommitCommitParentsInner model module.
 * @module model/FileCommitCommitParentsInner
 * @version 1.1.4
 */
class FileCommitCommitParentsInner {
    /**
     * Constructs a new <code>FileCommitCommitParentsInner</code>.
     * @alias module:model/FileCommitCommitParentsInner
     */
    constructor() { 
        
        FileCommitCommitParentsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileCommitCommitParentsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitCommitParentsInner} obj Optional instance to populate.
     * @return {module:model/FileCommitCommitParentsInner} The populated <code>FileCommitCommitParentsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileCommitCommitParentsInner();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileCommitCommitParentsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileCommitCommitParentsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }

        return true;
    }


}



/**
 * @member {String} url
 */
FileCommitCommitParentsInner.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
FileCommitCommitParentsInner.prototype['html_url'] = undefined;

/**
 * @member {String} sha
 */
FileCommitCommitParentsInner.prototype['sha'] = undefined;






export default FileCommitCommitParentsInner;

