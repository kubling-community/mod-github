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
import WebhookMetaDeletedHookConfig from './WebhookMetaDeletedHookConfig';

/**
 * The WebhookMetaDeletedHook model module.
 * @module model/WebhookMetaDeletedHook
 * @version 1.1.4
 */
class WebhookMetaDeletedHook {
    /**
     * Constructs a new <code>WebhookMetaDeletedHook</code>.
     * The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace.
     * @alias module:model/WebhookMetaDeletedHook
     * @param active {Boolean} 
     * @param config {module:model/WebhookMetaDeletedHookConfig} 
     * @param createdAt {String} 
     * @param events {Array.<module:model/WebhookMetaDeletedHook.EventsEnum>} 
     * @param id {Number} 
     * @param name {String} 
     * @param type {String} 
     * @param updatedAt {String} 
     */
    constructor(active, config, createdAt, events, id, name, type, updatedAt) { 
        
        WebhookMetaDeletedHook.initialize(this, active, config, createdAt, events, id, name, type, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, config, createdAt, events, id, name, type, updatedAt) { 
        obj['active'] = active;
        obj['config'] = config;
        obj['created_at'] = createdAt;
        obj['events'] = events;
        obj['id'] = id;
        obj['name'] = name;
        obj['type'] = type;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>WebhookMetaDeletedHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookMetaDeletedHook} obj Optional instance to populate.
     * @return {module:model/WebhookMetaDeletedHook} The populated <code>WebhookMetaDeletedHook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookMetaDeletedHook();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = WebhookMetaDeletedHookConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookMetaDeletedHook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookMetaDeletedHook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookMetaDeletedHook.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          WebhookMetaDeletedHookConfig.validateJSON(data['config']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['events'])) {
            throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}

WebhookMetaDeletedHook.RequiredProperties = ["active", "config", "created_at", "events", "id", "name", "type", "updated_at"];

/**
 * @member {Boolean} active
 */
WebhookMetaDeletedHook.prototype['active'] = undefined;

/**
 * @member {module:model/WebhookMetaDeletedHookConfig} config
 */
WebhookMetaDeletedHook.prototype['config'] = undefined;

/**
 * @member {String} created_at
 */
WebhookMetaDeletedHook.prototype['created_at'] = undefined;

/**
 * @member {Array.<module:model/WebhookMetaDeletedHook.EventsEnum>} events
 */
WebhookMetaDeletedHook.prototype['events'] = undefined;

/**
 * @member {Number} id
 */
WebhookMetaDeletedHook.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WebhookMetaDeletedHook.prototype['name'] = undefined;

/**
 * @member {String} type
 */
WebhookMetaDeletedHook.prototype['type'] = undefined;

/**
 * @member {String} updated_at
 */
WebhookMetaDeletedHook.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */
WebhookMetaDeletedHook['EventsEnum'] = {

    /**
     * value: "*"
     * @const
     */
    "STAR": "*",

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
     * value: "meta"
     * @const
     */
    "meta": "meta",

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
     * value: "package"
     * @const
     */
    "package": "package",

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
     * value: "pull_request_review_thread"
     * @const
     */
    "pull_request_review_thread": "pull_request_review_thread",

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
     * value: "repository_import"
     * @const
     */
    "repository_import": "repository_import",

    /**
     * value: "repository_vulnerability_alert"
     * @const
     */
    "repository_vulnerability_alert": "repository_vulnerability_alert",

    /**
     * value: "secret_scanning_alert"
     * @const
     */
    "secret_scanning_alert": "secret_scanning_alert",

    /**
     * value: "secret_scanning_alert_location"
     * @const
     */
    "secret_scanning_alert_location": "secret_scanning_alert_location",

    /**
     * value: "security_and_analysis"
     * @const
     */
    "security_and_analysis": "security_and_analysis",

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
     * value: "workflow_job"
     * @const
     */
    "workflow_job": "workflow_job",

    /**
     * value: "workflow_run"
     * @const
     */
    "workflow_run": "workflow_run",

    /**
     * value: "repository_dispatch"
     * @const
     */
    "repository_dispatch": "repository_dispatch",

    /**
     * value: "projects_v2_item"
     * @const
     */
    "projects_v2_item": "projects_v2_item"
};



export default WebhookMetaDeletedHook;

