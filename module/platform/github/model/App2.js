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
import App2Permissions from './App2Permissions';
import User from './User';

/**
 * The App2 model module.
 * @module model/App2
 * @version 1.1.4
 */
class App2 {
    /**
     * Constructs a new <code>App2</code>.
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     * @alias module:model/App2
     * @param createdAt {Date} 
     * @param description {String} 
     * @param externalUrl {String} 
     * @param htmlUrl {String} 
     * @param id {Number} Unique identifier of the GitHub app
     * @param name {String} The name of the GitHub app
     * @param nodeId {String} 
     * @param owner {module:model/User} 
     * @param updatedAt {Date} 
     */
    constructor(createdAt, description, externalUrl, htmlUrl, id, name, nodeId, owner, updatedAt) { 
        
        App2.initialize(this, createdAt, description, externalUrl, htmlUrl, id, name, nodeId, owner, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, description, externalUrl, htmlUrl, id, name, nodeId, owner, updatedAt) { 
        obj['created_at'] = createdAt;
        obj['description'] = description;
        obj['external_url'] = externalUrl;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['owner'] = owner;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>App2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/App2} obj Optional instance to populate.
     * @return {module:model/App2} The populated <code>App2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new App2();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('external_url')) {
                obj['external_url'] = ApiClient.convertToType(data['external_url'], 'String');
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
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = User.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = App2Permissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>App2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>App2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of App2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['events'])) {
            throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
        }
        // ensure the json data is a string
        if (data['external_url'] && !(typeof data['external_url'] === 'string' || data['external_url'] instanceof String)) {
            throw new Error("Expected the field `external_url` to be a primitive type in the JSON string but got " + data['external_url']);
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
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          User.validateJSON(data['owner']);
        }
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          App2Permissions.validateJSON(data['permissions']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }

        return true;
    }


}

App2.RequiredProperties = ["created_at", "description", "external_url", "html_url", "id", "name", "node_id", "owner", "updated_at"];

/**
 * @member {Date} created_at
 */
App2.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
App2.prototype['description'] = undefined;

/**
 * The list of events for the GitHub app
 * @member {Array.<module:model/App2.EventsEnum>} events
 */
App2.prototype['events'] = undefined;

/**
 * @member {String} external_url
 */
App2.prototype['external_url'] = undefined;

/**
 * @member {String} html_url
 */
App2.prototype['html_url'] = undefined;

/**
 * Unique identifier of the GitHub app
 * @member {Number} id
 */
App2.prototype['id'] = undefined;

/**
 * The name of the GitHub app
 * @member {String} name
 */
App2.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
App2.prototype['node_id'] = undefined;

/**
 * @member {module:model/User} owner
 */
App2.prototype['owner'] = undefined;

/**
 * @member {module:model/App2Permissions} permissions
 */
App2.prototype['permissions'] = undefined;

/**
 * The slug name of the GitHub app
 * @member {String} slug
 */
App2.prototype['slug'] = undefined;

/**
 * @member {Date} updated_at
 */
App2.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */
App2['EventsEnum'] = {

    /**
     * value: "branch_protection_rule"
     * @const
     */
    "branch_protection_rule": "branch_protection_rule",

    /**
     * value: "check_run"
     * @const
     */
    "check_run": "check_run",

    /**
     * value: "check_suite"
     * @const
     */
    "check_suite": "check_suite",

    /**
     * value: "code_scanning_alert"
     * @const
     */
    "code_scanning_alert": "code_scanning_alert",

    /**
     * value: "commit_comment"
     * @const
     */
    "commit_comment": "commit_comment",

    /**
     * value: "content_reference"
     * @const
     */
    "content_reference": "content_reference",

    /**
     * value: "create"
     * @const
     */
    "create": "create",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",

    /**
     * value: "deployment"
     * @const
     */
    "deployment": "deployment",

    /**
     * value: "deployment_review"
     * @const
     */
    "deployment_review": "deployment_review",

    /**
     * value: "deployment_status"
     * @const
     */
    "deployment_status": "deployment_status",

    /**
     * value: "deploy_key"
     * @const
     */
    "deploy_key": "deploy_key",

    /**
     * value: "discussion"
     * @const
     */
    "discussion": "discussion",

    /**
     * value: "discussion_comment"
     * @const
     */
    "discussion_comment": "discussion_comment",

    /**
     * value: "fork"
     * @const
     */
    "fork": "fork",

    /**
     * value: "gollum"
     * @const
     */
    "gollum": "gollum",

    /**
     * value: "issues"
     * @const
     */
    "issues": "issues",

    /**
     * value: "issue_comment"
     * @const
     */
    "issue_comment": "issue_comment",

    /**
     * value: "label"
     * @const
     */
    "label": "label",

    /**
     * value: "member"
     * @const
     */
    "member": "member",

    /**
     * value: "membership"
     * @const
     */
    "membership": "membership",

    /**
     * value: "milestone"
     * @const
     */
    "milestone": "milestone",

    /**
     * value: "organization"
     * @const
     */
    "organization": "organization",

    /**
     * value: "org_block"
     * @const
     */
    "org_block": "org_block",

    /**
     * value: "page_build"
     * @const
     */
    "page_build": "page_build",

    /**
     * value: "project"
     * @const
     */
    "project": "project",

    /**
     * value: "project_card"
     * @const
     */
    "project_card": "project_card",

    /**
     * value: "project_column"
     * @const
     */
    "project_column": "project_column",

    /**
     * value: "public"
     * @const
     */
    "public": "public",

    /**
     * value: "pull_request"
     * @const
     */
    "pull_request": "pull_request",

    /**
     * value: "pull_request_review"
     * @const
     */
    "pull_request_review": "pull_request_review",

    /**
     * value: "pull_request_review_comment"
     * @const
     */
    "pull_request_review_comment": "pull_request_review_comment",

    /**
     * value: "push"
     * @const
     */
    "push": "push",

    /**
     * value: "registry_package"
     * @const
     */
    "registry_package": "registry_package",

    /**
     * value: "release"
     * @const
     */
    "release": "release",

    /**
     * value: "repository"
     * @const
     */
    "repository": "repository",

    /**
     * value: "repository_dispatch"
     * @const
     */
    "repository_dispatch": "repository_dispatch",

    /**
     * value: "secret_scanning_alert"
     * @const
     */
    "secret_scanning_alert": "secret_scanning_alert",

    /**
     * value: "star"
     * @const
     */
    "star": "star",

    /**
     * value: "status"
     * @const
     */
    "status": "status",

    /**
     * value: "team"
     * @const
     */
    "team": "team",

    /**
     * value: "team_add"
     * @const
     */
    "team_add": "team_add",

    /**
     * value: "watch"
     * @const
     */
    "watch": "watch",

    /**
     * value: "workflow_dispatch"
     * @const
     */
    "workflow_dispatch": "workflow_dispatch",

    /**
     * value: "workflow_run"
     * @const
     */
    "workflow_run": "workflow_run",

    /**
     * value: "merge_group"
     * @const
     */
    "merge_group": "merge_group",

    /**
     * value: "pull_request_review_thread"
     * @const
     */
    "pull_request_review_thread": "pull_request_review_thread",

    /**
     * value: "workflow_job"
     * @const
     */
    "workflow_job": "workflow_job",

    /**
     * value: "merge_queue_entry"
     * @const
     */
    "merge_queue_entry": "merge_queue_entry",

    /**
     * value: "security_and_analysis"
     * @const
     */
    "security_and_analysis": "security_and_analysis",

    /**
     * value: "projects_v2_item"
     * @const
     */
    "projects_v2_item": "projects_v2_item",

    /**
     * value: "secret_scanning_alert_location"
     * @const
     */
    "secret_scanning_alert_location": "secret_scanning_alert_location"
};



export default App2;

