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
 * The FileCommitContentLinks model module.
 * @module model/FileCommitContentLinks
 * @version 1.1.4
 */
class FileCommitContentLinks {
    /**
     * Constructs a new <code>FileCommitContentLinks</code>.
     * @alias module:model/FileCommitContentLinks
     */
    constructor() { 
        
        FileCommitContentLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileCommitContentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitContentLinks} obj Optional instance to populate.
     * @return {module:model/FileCommitContentLinks} The populated <code>FileCommitContentLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileCommitContentLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('git')) {
                obj['git'] = ApiClient.convertToType(data['git'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileCommitContentLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileCommitContentLinks</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['git'] && !(typeof data['git'] === 'string' || data['git'] instanceof String)) {
            throw new Error("Expected the field `git` to be a primitive type in the JSON string but got " + data['git']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }

        return true;
    }


}



/**
 * @member {String} self
 */
FileCommitContentLinks.prototype['self'] = undefined;

/**
 * @member {String} git
 */
FileCommitContentLinks.prototype['git'] = undefined;

/**
 * @member {String} html
 */
FileCommitContentLinks.prototype['html'] = undefined;






export default FileCommitContentLinks;

