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
import NullableSimpleUser from './NullableSimpleUser';

/**
 * The Status model module.
 * @module model/Status
 * @version 1.1.4
 */
class Status {
    /**
     * Constructs a new <code>Status</code>.
     * The status of a commit.
     * @alias module:model/Status
     * @param url {String} 
     * @param avatarUrl {String} 
     * @param id {Number} 
     * @param nodeId {String} 
     * @param state {String} 
     * @param description {String} 
     * @param targetUrl {String} 
     * @param context {String} 
     * @param createdAt {String} 
     * @param updatedAt {String} 
     * @param creator {module:model/NullableSimpleUser} 
     */
    constructor(url, avatarUrl, id, nodeId, state, description, targetUrl, context, createdAt, updatedAt, creator) { 
        
        Status.initialize(this, url, avatarUrl, id, nodeId, state, description, targetUrl, context, createdAt, updatedAt, creator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, avatarUrl, id, nodeId, state, description, targetUrl, context, createdAt, updatedAt, creator) { 
        obj['url'] = url;
        obj['avatar_url'] = avatarUrl;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['state'] = state;
        obj['description'] = description;
        obj['target_url'] = targetUrl;
        obj['context'] = context;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['creator'] = creator;
    }

    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Status} obj Optional instance to populate.
     * @return {module:model/Status} The populated <code>Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('target_url')) {
                obj['target_url'] = ApiClient.convertToType(data['target_url'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = NullableSimpleUser.constructFromObject(data['creator']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Status</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Status</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Status.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['avatar_url'] && !(typeof data['avatar_url'] === 'string' || data['avatar_url'] instanceof String)) {
            throw new Error("Expected the field `avatar_url` to be a primitive type in the JSON string but got " + data['avatar_url']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['target_url'] && !(typeof data['target_url'] === 'string' || data['target_url'] instanceof String)) {
            throw new Error("Expected the field `target_url` to be a primitive type in the JSON string but got " + data['target_url']);
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // validate the optional field `creator`
        if (data['creator']) { // data not null
          NullableSimpleUser.validateJSON(data['creator']);
        }

        return true;
    }


}

Status.RequiredProperties = ["url", "avatar_url", "id", "node_id", "state", "description", "target_url", "context", "created_at", "updated_at", "creator"];

/**
 * @member {String} url
 */
Status.prototype['url'] = undefined;

/**
 * @member {String} avatar_url
 */
Status.prototype['avatar_url'] = undefined;

/**
 * @member {Number} id
 */
Status.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
Status.prototype['node_id'] = undefined;

/**
 * @member {String} state
 */
Status.prototype['state'] = undefined;

/**
 * @member {String} description
 */
Status.prototype['description'] = undefined;

/**
 * @member {String} target_url
 */
Status.prototype['target_url'] = undefined;

/**
 * @member {String} context
 */
Status.prototype['context'] = undefined;

/**
 * @member {String} created_at
 */
Status.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Status.prototype['updated_at'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} creator
 */
Status.prototype['creator'] = undefined;






export default Status;

