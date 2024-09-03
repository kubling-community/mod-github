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
import FileCommitContentLinks from './FileCommitContentLinks';

/**
 * The FileCommitContent model module.
 * @module model/FileCommitContent
 * @version 1.1.4
 */
class FileCommitContent {
    /**
     * Constructs a new <code>FileCommitContent</code>.
     * @alias module:model/FileCommitContent
     */
    constructor() { 
        
        FileCommitContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileCommitContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitContent} obj Optional instance to populate.
     * @return {module:model/FileCommitContent} The populated <code>FileCommitContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileCommitContent();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('git_url')) {
                obj['git_url'] = ApiClient.convertToType(data['git_url'], 'String');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = FileCommitContentLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileCommitContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileCommitContent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['git_url'] && !(typeof data['git_url'] === 'string' || data['git_url'] instanceof String)) {
            throw new Error("Expected the field `git_url` to be a primitive type in the JSON string but got " + data['git_url']);
        }
        // ensure the json data is a string
        if (data['download_url'] && !(typeof data['download_url'] === 'string' || data['download_url'] instanceof String)) {
            throw new Error("Expected the field `download_url` to be a primitive type in the JSON string but got " + data['download_url']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          FileCommitContentLinks.validateJSON(data['_links']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
FileCommitContent.prototype['name'] = undefined;

/**
 * @member {String} path
 */
FileCommitContent.prototype['path'] = undefined;

/**
 * @member {String} sha
 */
FileCommitContent.prototype['sha'] = undefined;

/**
 * @member {Number} size
 */
FileCommitContent.prototype['size'] = undefined;

/**
 * @member {String} url
 */
FileCommitContent.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
FileCommitContent.prototype['html_url'] = undefined;

/**
 * @member {String} git_url
 */
FileCommitContent.prototype['git_url'] = undefined;

/**
 * @member {String} download_url
 */
FileCommitContent.prototype['download_url'] = undefined;

/**
 * @member {String} type
 */
FileCommitContent.prototype['type'] = undefined;

/**
 * @member {module:model/FileCommitContentLinks} _links
 */
FileCommitContent.prototype['_links'] = undefined;






export default FileCommitContent;

