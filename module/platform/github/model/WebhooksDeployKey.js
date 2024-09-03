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
 * The WebhooksDeployKey model module.
 * @module model/WebhooksDeployKey
 * @version 1.1.4
 */
class WebhooksDeployKey {
    /**
     * Constructs a new <code>WebhooksDeployKey</code>.
     * The [&#x60;deploy key&#x60;](https://docs.github.com/rest/deploy-keys/deploy-keys#get-a-deploy-key) resource.
     * @alias module:model/WebhooksDeployKey
     * @param createdAt {String} 
     * @param id {Number} 
     * @param key {String} 
     * @param readOnly {Boolean} 
     * @param title {String} 
     * @param url {String} 
     * @param verified {Boolean} 
     */
    constructor(createdAt, id, key, readOnly, title, url, verified) { 
        
        WebhooksDeployKey.initialize(this, createdAt, id, key, readOnly, title, url, verified);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, id, key, readOnly, title, url, verified) { 
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['key'] = key;
        obj['read_only'] = readOnly;
        obj['title'] = title;
        obj['url'] = url;
        obj['verified'] = verified;
    }

    /**
     * Constructs a <code>WebhooksDeployKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksDeployKey} obj Optional instance to populate.
     * @return {module:model/WebhooksDeployKey} The populated <code>WebhooksDeployKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksDeployKey();

            if (data.hasOwnProperty('added_by')) {
                obj['added_by'] = ApiClient.convertToType(data['added_by'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('last_used')) {
                obj['last_used'] = ApiClient.convertToType(data['last_used'], 'String');
            }
            if (data.hasOwnProperty('read_only')) {
                obj['read_only'] = ApiClient.convertToType(data['read_only'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksDeployKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksDeployKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksDeployKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['added_by'] && !(typeof data['added_by'] === 'string' || data['added_by'] instanceof String)) {
            throw new Error("Expected the field `added_by` to be a primitive type in the JSON string but got " + data['added_by']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['last_used'] && !(typeof data['last_used'] === 'string' || data['last_used'] instanceof String)) {
            throw new Error("Expected the field `last_used` to be a primitive type in the JSON string but got " + data['last_used']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhooksDeployKey.RequiredProperties = ["created_at", "id", "key", "read_only", "title", "url", "verified"];

/**
 * @member {String} added_by
 */
WebhooksDeployKey.prototype['added_by'] = undefined;

/**
 * @member {String} created_at
 */
WebhooksDeployKey.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
WebhooksDeployKey.prototype['id'] = undefined;

/**
 * @member {String} key
 */
WebhooksDeployKey.prototype['key'] = undefined;

/**
 * @member {String} last_used
 */
WebhooksDeployKey.prototype['last_used'] = undefined;

/**
 * @member {Boolean} read_only
 */
WebhooksDeployKey.prototype['read_only'] = undefined;

/**
 * @member {String} title
 */
WebhooksDeployKey.prototype['title'] = undefined;

/**
 * @member {String} url
 */
WebhooksDeployKey.prototype['url'] = undefined;

/**
 * @member {Boolean} verified
 */
WebhooksDeployKey.prototype['verified'] = undefined;






export default WebhooksDeployKey;

