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
 * The WebhooksProjectColumn model module.
 * @module model/WebhooksProjectColumn
 * @version 1.1.4
 */
class WebhooksProjectColumn {
    /**
     * Constructs a new <code>WebhooksProjectColumn</code>.
     * @alias module:model/WebhooksProjectColumn
     * @param cardsUrl {String} 
     * @param createdAt {Date} 
     * @param id {Number} The unique identifier of the project column
     * @param name {String} Name of the project column
     * @param nodeId {String} 
     * @param projectUrl {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url) { 
        
        WebhooksProjectColumn.initialize(this, cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url) { 
        obj['cards_url'] = cardsUrl;
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['project_url'] = projectUrl;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhooksProjectColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksProjectColumn} obj Optional instance to populate.
     * @return {module:model/WebhooksProjectColumn} The populated <code>WebhooksProjectColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksProjectColumn();

            if (data.hasOwnProperty('after_id')) {
                obj['after_id'] = ApiClient.convertToType(data['after_id'], 'Number');
            }
            if (data.hasOwnProperty('cards_url')) {
                obj['cards_url'] = ApiClient.convertToType(data['cards_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
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
            if (data.hasOwnProperty('project_url')) {
                obj['project_url'] = ApiClient.convertToType(data['project_url'], 'String');
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
     * Validates the JSON data with respect to <code>WebhooksProjectColumn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksProjectColumn</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksProjectColumn.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cards_url'] && !(typeof data['cards_url'] === 'string' || data['cards_url'] instanceof String)) {
            throw new Error("Expected the field `cards_url` to be a primitive type in the JSON string but got " + data['cards_url']);
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
        if (data['project_url'] && !(typeof data['project_url'] === 'string' || data['project_url'] instanceof String)) {
            throw new Error("Expected the field `project_url` to be a primitive type in the JSON string but got " + data['project_url']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhooksProjectColumn.RequiredProperties = ["cards_url", "created_at", "id", "name", "node_id", "project_url", "updated_at", "url"];

/**
 * @member {Number} after_id
 */
WebhooksProjectColumn.prototype['after_id'] = undefined;

/**
 * @member {String} cards_url
 */
WebhooksProjectColumn.prototype['cards_url'] = undefined;

/**
 * @member {Date} created_at
 */
WebhooksProjectColumn.prototype['created_at'] = undefined;

/**
 * The unique identifier of the project column
 * @member {Number} id
 */
WebhooksProjectColumn.prototype['id'] = undefined;

/**
 * Name of the project column
 * @member {String} name
 */
WebhooksProjectColumn.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
WebhooksProjectColumn.prototype['node_id'] = undefined;

/**
 * @member {String} project_url
 */
WebhooksProjectColumn.prototype['project_url'] = undefined;

/**
 * @member {Date} updated_at
 */
WebhooksProjectColumn.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
WebhooksProjectColumn.prototype['url'] = undefined;






export default WebhooksProjectColumn;

