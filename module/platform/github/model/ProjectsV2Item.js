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
import ProjectsV2ItemContentType from './ProjectsV2ItemContentType';
import SimpleUser from './SimpleUser';

/**
 * The ProjectsV2Item model module.
 * @module model/ProjectsV2Item
 * @version 1.1.4
 */
class ProjectsV2Item {
    /**
     * Constructs a new <code>ProjectsV2Item</code>.
     * An item belonging to a project
     * @alias module:model/ProjectsV2Item
     * @param id {Number} 
     * @param contentNodeId {String} 
     * @param contentType {module:model/ProjectsV2ItemContentType} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param archivedAt {Date} 
     */
    constructor(id, contentNodeId, contentType, createdAt, updatedAt, archivedAt) { 
        
        ProjectsV2Item.initialize(this, id, contentNodeId, contentType, createdAt, updatedAt, archivedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, contentNodeId, contentType, createdAt, updatedAt, archivedAt) { 
        obj['id'] = id;
        obj['content_node_id'] = contentNodeId;
        obj['content_type'] = contentType;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['archived_at'] = archivedAt;
    }

    /**
     * Constructs a <code>ProjectsV2Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectsV2Item} obj Optional instance to populate.
     * @return {module:model/ProjectsV2Item} The populated <code>ProjectsV2Item</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectsV2Item();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('project_node_id')) {
                obj['project_node_id'] = ApiClient.convertToType(data['project_node_id'], 'String');
            }
            if (data.hasOwnProperty('content_node_id')) {
                obj['content_node_id'] = ApiClient.convertToType(data['content_node_id'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ProjectsV2ItemContentType.constructFromObject(data['content_type']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = SimpleUser.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectsV2Item</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectsV2Item</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProjectsV2Item.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['project_node_id'] && !(typeof data['project_node_id'] === 'string' || data['project_node_id'] instanceof String)) {
            throw new Error("Expected the field `project_node_id` to be a primitive type in the JSON string but got " + data['project_node_id']);
        }
        // ensure the json data is a string
        if (data['content_node_id'] && !(typeof data['content_node_id'] === 'string' || data['content_node_id'] instanceof String)) {
            throw new Error("Expected the field `content_node_id` to be a primitive type in the JSON string but got " + data['content_node_id']);
        }
        // validate the optional field `creator`
        if (data['creator']) { // data not null
          SimpleUser.validateJSON(data['creator']);
        }

        return true;
    }


}

ProjectsV2Item.RequiredProperties = ["id", "content_node_id", "content_type", "created_at", "updated_at", "archived_at"];

/**
 * @member {Number} id
 */
ProjectsV2Item.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
ProjectsV2Item.prototype['node_id'] = undefined;

/**
 * @member {String} project_node_id
 */
ProjectsV2Item.prototype['project_node_id'] = undefined;

/**
 * @member {String} content_node_id
 */
ProjectsV2Item.prototype['content_node_id'] = undefined;

/**
 * @member {module:model/ProjectsV2ItemContentType} content_type
 */
ProjectsV2Item.prototype['content_type'] = undefined;

/**
 * @member {module:model/SimpleUser} creator
 */
ProjectsV2Item.prototype['creator'] = undefined;

/**
 * @member {Date} created_at
 */
ProjectsV2Item.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ProjectsV2Item.prototype['updated_at'] = undefined;

/**
 * @member {Date} archived_at
 */
ProjectsV2Item.prototype['archived_at'] = undefined;






export default ProjectsV2Item;

