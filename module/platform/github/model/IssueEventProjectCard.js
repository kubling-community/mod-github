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
 * The IssueEventProjectCard model module.
 * @module model/IssueEventProjectCard
 * @version 1.1.4
 */
class IssueEventProjectCard {
    /**
     * Constructs a new <code>IssueEventProjectCard</code>.
     * Issue Event Project Card
     * @alias module:model/IssueEventProjectCard
     * @param url {String} 
     * @param id {Number} 
     * @param projectUrl {String} 
     * @param projectId {Number} 
     * @param columnName {String} 
     */
    constructor(url, id, projectUrl, projectId, columnName) { 
        
        IssueEventProjectCard.initialize(this, url, id, projectUrl, projectId, columnName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, id, projectUrl, projectId, columnName) { 
        obj['url'] = url;
        obj['id'] = id;
        obj['project_url'] = projectUrl;
        obj['project_id'] = projectId;
        obj['column_name'] = columnName;
    }

    /**
     * Constructs a <code>IssueEventProjectCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventProjectCard} obj Optional instance to populate.
     * @return {module:model/IssueEventProjectCard} The populated <code>IssueEventProjectCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventProjectCard();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project_url')) {
                obj['project_url'] = ApiClient.convertToType(data['project_url'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
            }
            if (data.hasOwnProperty('column_name')) {
                obj['column_name'] = ApiClient.convertToType(data['column_name'], 'String');
            }
            if (data.hasOwnProperty('previous_column_name')) {
                obj['previous_column_name'] = ApiClient.convertToType(data['previous_column_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueEventProjectCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueEventProjectCard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueEventProjectCard.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['project_url'] && !(typeof data['project_url'] === 'string' || data['project_url'] instanceof String)) {
            throw new Error("Expected the field `project_url` to be a primitive type in the JSON string but got " + data['project_url']);
        }
        // ensure the json data is a string
        if (data['column_name'] && !(typeof data['column_name'] === 'string' || data['column_name'] instanceof String)) {
            throw new Error("Expected the field `column_name` to be a primitive type in the JSON string but got " + data['column_name']);
        }
        // ensure the json data is a string
        if (data['previous_column_name'] && !(typeof data['previous_column_name'] === 'string' || data['previous_column_name'] instanceof String)) {
            throw new Error("Expected the field `previous_column_name` to be a primitive type in the JSON string but got " + data['previous_column_name']);
        }

        return true;
    }


}

IssueEventProjectCard.RequiredProperties = ["url", "id", "project_url", "project_id", "column_name"];

/**
 * @member {String} url
 */
IssueEventProjectCard.prototype['url'] = undefined;

/**
 * @member {Number} id
 */
IssueEventProjectCard.prototype['id'] = undefined;

/**
 * @member {String} project_url
 */
IssueEventProjectCard.prototype['project_url'] = undefined;

/**
 * @member {Number} project_id
 */
IssueEventProjectCard.prototype['project_id'] = undefined;

/**
 * @member {String} column_name
 */
IssueEventProjectCard.prototype['column_name'] = undefined;

/**
 * @member {String} previous_column_name
 */
IssueEventProjectCard.prototype['previous_column_name'] = undefined;






export default IssueEventProjectCard;

