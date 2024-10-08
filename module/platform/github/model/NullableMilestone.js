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
 * The NullableMilestone model module.
 * @module model/NullableMilestone
 * @version 1.1.4
 */
class NullableMilestone {
    /**
     * Constructs a new <code>NullableMilestone</code>.
     * A collection of related issues and pull requests.
     * @alias module:model/NullableMilestone
     * @param url {String} 
     * @param htmlUrl {String} 
     * @param labelsUrl {String} 
     * @param id {Number} 
     * @param nodeId {String} 
     * @param number {Number} The number of the milestone.
     * @param state {module:model/NullableMilestone.StateEnum} The state of the milestone.
     * @param title {String} The title of the milestone.
     * @param description {String} 
     * @param creator {module:model/NullableSimpleUser} 
     * @param openIssues {Number} 
     * @param closedIssues {Number} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param closedAt {Date} 
     * @param dueOn {Date} 
     */
    constructor(url, htmlUrl, labelsUrl, id, nodeId, number, state, title, description, creator, openIssues, closedIssues, createdAt, updatedAt, closedAt, dueOn) { 
        
        NullableMilestone.initialize(this, url, htmlUrl, labelsUrl, id, nodeId, number, state, title, description, creator, openIssues, closedIssues, createdAt, updatedAt, closedAt, dueOn);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, htmlUrl, labelsUrl, id, nodeId, number, state, title, description, creator, openIssues, closedIssues, createdAt, updatedAt, closedAt, dueOn) { 
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['labels_url'] = labelsUrl;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['number'] = number;
        obj['state'] = state || 'open';
        obj['title'] = title;
        obj['description'] = description;
        obj['creator'] = creator;
        obj['open_issues'] = openIssues;
        obj['closed_issues'] = closedIssues;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['closed_at'] = closedAt;
        obj['due_on'] = dueOn;
    }

    /**
     * Constructs a <code>NullableMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NullableMilestone} obj Optional instance to populate.
     * @return {module:model/NullableMilestone} The populated <code>NullableMilestone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NullableMilestone();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = NullableSimpleUser.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('open_issues')) {
                obj['open_issues'] = ApiClient.convertToType(data['open_issues'], 'Number');
            }
            if (data.hasOwnProperty('closed_issues')) {
                obj['closed_issues'] = ApiClient.convertToType(data['closed_issues'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NullableMilestone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NullableMilestone</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NullableMilestone.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['labels_url'] && !(typeof data['labels_url'] === 'string' || data['labels_url'] instanceof String)) {
            throw new Error("Expected the field `labels_url` to be a primitive type in the JSON string but got " + data['labels_url']);
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
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `creator`
        if (data['creator']) { // data not null
          NullableSimpleUser.validateJSON(data['creator']);
        }

        return true;
    }


}

NullableMilestone.RequiredProperties = ["url", "html_url", "labels_url", "id", "node_id", "number", "state", "title", "description", "creator", "open_issues", "closed_issues", "created_at", "updated_at", "closed_at", "due_on"];

/**
 * @member {String} url
 */
NullableMilestone.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
NullableMilestone.prototype['html_url'] = undefined;

/**
 * @member {String} labels_url
 */
NullableMilestone.prototype['labels_url'] = undefined;

/**
 * @member {Number} id
 */
NullableMilestone.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
NullableMilestone.prototype['node_id'] = undefined;

/**
 * The number of the milestone.
 * @member {Number} number
 */
NullableMilestone.prototype['number'] = undefined;

/**
 * The state of the milestone.
 * @member {module:model/NullableMilestone.StateEnum} state
 * @default 'open'
 */
NullableMilestone.prototype['state'] = 'open';

/**
 * The title of the milestone.
 * @member {String} title
 */
NullableMilestone.prototype['title'] = undefined;

/**
 * @member {String} description
 */
NullableMilestone.prototype['description'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} creator
 */
NullableMilestone.prototype['creator'] = undefined;

/**
 * @member {Number} open_issues
 */
NullableMilestone.prototype['open_issues'] = undefined;

/**
 * @member {Number} closed_issues
 */
NullableMilestone.prototype['closed_issues'] = undefined;

/**
 * @member {Date} created_at
 */
NullableMilestone.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
NullableMilestone.prototype['updated_at'] = undefined;

/**
 * @member {Date} closed_at
 */
NullableMilestone.prototype['closed_at'] = undefined;

/**
 * @member {Date} due_on
 */
NullableMilestone.prototype['due_on'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
NullableMilestone['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};



export default NullableMilestone;

