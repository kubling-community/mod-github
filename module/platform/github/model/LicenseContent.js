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
import NullableLicenseSimple from './NullableLicenseSimple';

/**
 * The LicenseContent model module.
 * @module model/LicenseContent
 * @version 1.1.4
 */
class LicenseContent {
    /**
     * Constructs a new <code>LicenseContent</code>.
     * License Content
     * @alias module:model/LicenseContent
     * @param name {String} 
     * @param path {String} 
     * @param sha {String} 
     * @param size {Number} 
     * @param url {String} 
     * @param htmlUrl {String} 
     * @param gitUrl {String} 
     * @param downloadUrl {String} 
     * @param type {String} 
     * @param content {String} 
     * @param encoding {String} 
     * @param links {module:model/ContentTreeEntriesInnerLinks} 
     * @param license {module:model/NullableLicenseSimple} 
     */
    constructor(name, path, sha, size, url, htmlUrl, gitUrl, downloadUrl, type, content, encoding, links, license) { 
        
        LicenseContent.initialize(this, name, path, sha, size, url, htmlUrl, gitUrl, downloadUrl, type, content, encoding, links, license);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, path, sha, size, url, htmlUrl, gitUrl, downloadUrl, type, content, encoding, links, license) { 
        obj['name'] = name;
        obj['path'] = path;
        obj['sha'] = sha;
        obj['size'] = size;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['git_url'] = gitUrl;
        obj['download_url'] = downloadUrl;
        obj['type'] = type;
        obj['content'] = content;
        obj['encoding'] = encoding;
        obj['_links'] = links;
        obj['license'] = license;
    }

    /**
     * Constructs a <code>LicenseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseContent} obj Optional instance to populate.
     * @return {module:model/LicenseContent} The populated <code>LicenseContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseContent();

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
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ContentTreeEntriesInnerLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = NullableLicenseSimple.constructFromObject(data['license']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseContent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LicenseContent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['encoding'] && !(typeof data['encoding'] === 'string' || data['encoding'] instanceof String)) {
            throw new Error("Expected the field `encoding` to be a primitive type in the JSON string but got " + data['encoding']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          ContentTreeEntriesInnerLinks.validateJSON(data['_links']);
        }
        // validate the optional field `license`
        if (data['license']) { // data not null
          NullableLicenseSimple.validateJSON(data['license']);
        }

        return true;
    }


}

LicenseContent.RequiredProperties = ["name", "path", "sha", "size", "url", "html_url", "git_url", "download_url", "type", "content", "encoding", "_links", "license"];

/**
 * @member {String} name
 */
LicenseContent.prototype['name'] = undefined;

/**
 * @member {String} path
 */
LicenseContent.prototype['path'] = undefined;

/**
 * @member {String} sha
 */
LicenseContent.prototype['sha'] = undefined;

/**
 * @member {Number} size
 */
LicenseContent.prototype['size'] = undefined;

/**
 * @member {String} url
 */
LicenseContent.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
LicenseContent.prototype['html_url'] = undefined;

/**
 * @member {String} git_url
 */
LicenseContent.prototype['git_url'] = undefined;

/**
 * @member {String} download_url
 */
LicenseContent.prototype['download_url'] = undefined;

/**
 * @member {String} type
 */
LicenseContent.prototype['type'] = undefined;

/**
 * @member {String} content
 */
LicenseContent.prototype['content'] = undefined;

/**
 * @member {String} encoding
 */
LicenseContent.prototype['encoding'] = undefined;

/**
 * @member {module:model/ContentTreeEntriesInnerLinks} _links
 */
LicenseContent.prototype['_links'] = undefined;

/**
 * @member {module:model/NullableLicenseSimple} license
 */
LicenseContent.prototype['license'] = undefined;






export default LicenseContent;

