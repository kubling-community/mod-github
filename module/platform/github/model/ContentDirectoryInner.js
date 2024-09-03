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
import ContentTreeEntriesInnerLinks from './ContentTreeEntriesInnerLinks';

/**
 * The ContentDirectoryInner model module.
 * @module model/ContentDirectoryInner
 * @version 1.1.4
 */
class ContentDirectoryInner {
    /**
     * Constructs a new <code>ContentDirectoryInner</code>.
     * @alias module:model/ContentDirectoryInner
     * @param type {module:model/ContentDirectoryInner.TypeEnum} 
     * @param size {Number} 
     * @param name {String} 
     * @param path {String} 
     * @param sha {String} 
     * @param url {String} 
     * @param gitUrl {String} 
     * @param htmlUrl {String} 
     * @param downloadUrl {String} 
     * @param links {module:model/ContentTreeEntriesInnerLinks} 
     */
    constructor(type, size, name, path, sha, url, gitUrl, htmlUrl, downloadUrl, links) { 
        
        ContentDirectoryInner.initialize(this, type, size, name, path, sha, url, gitUrl, htmlUrl, downloadUrl, links);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, size, name, path, sha, url, gitUrl, htmlUrl, downloadUrl, links) { 
        obj['type'] = type;
        obj['size'] = size;
        obj['name'] = name;
        obj['path'] = path;
        obj['sha'] = sha;
        obj['url'] = url;
        obj['git_url'] = gitUrl;
        obj['html_url'] = htmlUrl;
        obj['download_url'] = downloadUrl;
        obj['_links'] = links;
    }

    /**
     * Constructs a <code>ContentDirectoryInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentDirectoryInner} obj Optional instance to populate.
     * @return {module:model/ContentDirectoryInner} The populated <code>ContentDirectoryInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentDirectoryInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('git_url')) {
                obj['git_url'] = ApiClient.convertToType(data['git_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ContentTreeEntriesInnerLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentDirectoryInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentDirectoryInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContentDirectoryInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
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
        if (data['git_url'] && !(typeof data['git_url'] === 'string' || data['git_url'] instanceof String)) {
            throw new Error("Expected the field `git_url` to be a primitive type in the JSON string but got " + data['git_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['download_url'] && !(typeof data['download_url'] === 'string' || data['download_url'] instanceof String)) {
            throw new Error("Expected the field `download_url` to be a primitive type in the JSON string but got " + data['download_url']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          ContentTreeEntriesInnerLinks.validateJSON(data['_links']);
        }

        return true;
    }


}

ContentDirectoryInner.RequiredProperties = ["type", "size", "name", "path", "sha", "url", "git_url", "html_url", "download_url", "_links"];

/**
 * @member {module:model/ContentDirectoryInner.TypeEnum} type
 */
ContentDirectoryInner.prototype['type'] = undefined;

/**
 * @member {Number} size
 */
ContentDirectoryInner.prototype['size'] = undefined;

/**
 * @member {String} name
 */
ContentDirectoryInner.prototype['name'] = undefined;

/**
 * @member {String} path
 */
ContentDirectoryInner.prototype['path'] = undefined;

/**
 * @member {String} content
 */
ContentDirectoryInner.prototype['content'] = undefined;

/**
 * @member {String} sha
 */
ContentDirectoryInner.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
ContentDirectoryInner.prototype['url'] = undefined;

/**
 * @member {String} git_url
 */
ContentDirectoryInner.prototype['git_url'] = undefined;

/**
 * @member {String} html_url
 */
ContentDirectoryInner.prototype['html_url'] = undefined;

/**
 * @member {String} download_url
 */
ContentDirectoryInner.prototype['download_url'] = undefined;

/**
 * @member {module:model/ContentTreeEntriesInnerLinks} _links
 */
ContentDirectoryInner.prototype['_links'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ContentDirectoryInner['TypeEnum'] = {

    /**
     * value: "dir"
     * @const
     */
    "dir": "dir",

    /**
     * value: "file"
     * @const
     */
    "file": "file",

    /**
     * value: "submodule"
     * @const
     */
    "submodule": "submodule",

    /**
     * value: "symlink"
     * @const
     */
    "symlink": "symlink"
};



export default ContentDirectoryInner;

