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
 * The Blob model module.
 * @module model/Blob
 * @version 1.1.4
 */
class Blob {
    /**
     * Constructs a new <code>Blob</code>.
     * Blob
     * @alias module:model/Blob
     * @param content {String} 
     * @param encoding {String} 
     * @param url {String} 
     * @param sha {String} 
     * @param size {Number} 
     * @param nodeId {String} 
     */
    constructor(content, encoding, url, sha, size, nodeId) { 
        
        Blob.initialize(this, content, encoding, url, sha, size, nodeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content, encoding, url, sha, size, nodeId) { 
        obj['content'] = content;
        obj['encoding'] = encoding;
        obj['url'] = url;
        obj['sha'] = sha;
        obj['size'] = size;
        obj['node_id'] = nodeId;
    }

    /**
     * Constructs a <code>Blob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blob} obj Optional instance to populate.
     * @return {module:model/Blob} The populated <code>Blob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Blob();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('highlighted_content')) {
                obj['highlighted_content'] = ApiClient.convertToType(data['highlighted_content'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Blob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Blob</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Blob.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['encoding'] && !(typeof data['encoding'] === 'string' || data['encoding'] instanceof String)) {
            throw new Error("Expected the field `encoding` to be a primitive type in the JSON string but got " + data['encoding']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['highlighted_content'] && !(typeof data['highlighted_content'] === 'string' || data['highlighted_content'] instanceof String)) {
            throw new Error("Expected the field `highlighted_content` to be a primitive type in the JSON string but got " + data['highlighted_content']);
        }

        return true;
    }


}

Blob.RequiredProperties = ["content", "encoding", "url", "sha", "size", "node_id"];

/**
 * @member {String} content
 */
Blob.prototype['content'] = undefined;

/**
 * @member {String} encoding
 */
Blob.prototype['encoding'] = undefined;

/**
 * @member {String} url
 */
Blob.prototype['url'] = undefined;

/**
 * @member {String} sha
 */
Blob.prototype['sha'] = undefined;

/**
 * @member {Number} size
 */
Blob.prototype['size'] = undefined;

/**
 * @member {String} node_id
 */
Blob.prototype['node_id'] = undefined;

/**
 * @member {String} highlighted_content
 */
Blob.prototype['highlighted_content'] = undefined;






export default Blob;

