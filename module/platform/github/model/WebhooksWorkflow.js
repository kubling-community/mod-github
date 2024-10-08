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
 * The WebhooksWorkflow model module.
 * @module model/WebhooksWorkflow
 * @version 1.1.4
 */
class WebhooksWorkflow {
    /**
     * Constructs a new <code>WebhooksWorkflow</code>.
     * @alias module:model/WebhooksWorkflow
     * @param badgeUrl {String} 
     * @param createdAt {Date} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param path {String} 
     * @param state {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url) { 
        
        WebhooksWorkflow.initialize(this, badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url) { 
        obj['badge_url'] = badgeUrl;
        obj['created_at'] = createdAt;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['path'] = path;
        obj['state'] = state;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhooksWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksWorkflow} obj Optional instance to populate.
     * @return {module:model/WebhooksWorkflow} The populated <code>WebhooksWorkflow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksWorkflow();

            if (data.hasOwnProperty('badge_url')) {
                obj['badge_url'] = ApiClient.convertToType(data['badge_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksWorkflow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksWorkflow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksWorkflow.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['badge_url'] && !(typeof data['badge_url'] === 'string' || data['badge_url'] instanceof String)) {
            throw new Error("Expected the field `badge_url` to be a primitive type in the JSON string but got " + data['badge_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhooksWorkflow.RequiredProperties = ["badge_url", "created_at", "html_url", "id", "name", "node_id", "path", "state", "updated_at", "url"];

/**
 * @member {String} badge_url
 */
WebhooksWorkflow.prototype['badge_url'] = undefined;

/**
 * @member {Date} created_at
 */
WebhooksWorkflow.prototype['created_at'] = undefined;

/**
 * @member {String} html_url
 */
WebhooksWorkflow.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhooksWorkflow.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WebhooksWorkflow.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
WebhooksWorkflow.prototype['node_id'] = undefined;

/**
 * @member {String} path
 */
WebhooksWorkflow.prototype['path'] = undefined;

/**
 * @member {String} state
 */
WebhooksWorkflow.prototype['state'] = undefined;

/**
 * @member {Date} updated_at
 */
WebhooksWorkflow.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
WebhooksWorkflow.prototype['url'] = undefined;






export default WebhooksWorkflow;

