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
import CodespaceGitStatus from './CodespaceGitStatus';
import CodespaceRuntimeConstraints from './CodespaceRuntimeConstraints';
import FullRepository from './FullRepository';
import NullableCodespaceMachine from './NullableCodespaceMachine';
import SimpleUser from './SimpleUser';

/**
 * The CodespaceWithFullRepository model module.
 * @module model/CodespaceWithFullRepository
 * @version 1.1.4
 */
class CodespaceWithFullRepository {
    /**
     * Constructs a new <code>CodespaceWithFullRepository</code>.
     * A codespace.
     * @alias module:model/CodespaceWithFullRepository
     * @param id {Number} 
     * @param name {String} Automatically generated name of this codespace.
     * @param environmentId {String} UUID identifying this codespace's environment.
     * @param owner {module:model/SimpleUser} 
     * @param billableOwner {module:model/SimpleUser} 
     * @param repository {module:model/FullRepository} 
     * @param machine {module:model/NullableCodespaceMachine} 
     * @param prebuild {Boolean} Whether the codespace was created from a prebuild.
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param lastUsedAt {Date} Last known time this codespace was started.
     * @param state {module:model/CodespaceWithFullRepository.StateEnum} State of this codespace.
     * @param url {String} API URL for this codespace.
     * @param gitStatus {module:model/CodespaceGitStatus} 
     * @param location {module:model/CodespaceWithFullRepository.LocationEnum} The initally assigned location of a new codespace.
     * @param idleTimeoutMinutes {Number} The number of minutes of inactivity after which this codespace will be automatically stopped.
     * @param webUrl {String} URL to access this codespace on the web.
     * @param machinesUrl {String} API URL to access available alternate machine types for this codespace.
     * @param startUrl {String} API URL to start this codespace.
     * @param stopUrl {String} API URL to stop this codespace.
     * @param pullsUrl {String} API URL for the Pull Request associated with this codespace, if any.
     * @param recentFolders {Array.<String>} 
     */
    constructor(id, name, environmentId, owner, billableOwner, repository, machine, prebuild, createdAt, updatedAt, lastUsedAt, state, url, gitStatus, location, idleTimeoutMinutes, webUrl, machinesUrl, startUrl, stopUrl, pullsUrl, recentFolders) { 
        
        CodespaceWithFullRepository.initialize(this, id, name, environmentId, owner, billableOwner, repository, machine, prebuild, createdAt, updatedAt, lastUsedAt, state, url, gitStatus, location, idleTimeoutMinutes, webUrl, machinesUrl, startUrl, stopUrl, pullsUrl, recentFolders);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, environmentId, owner, billableOwner, repository, machine, prebuild, createdAt, updatedAt, lastUsedAt, state, url, gitStatus, location, idleTimeoutMinutes, webUrl, machinesUrl, startUrl, stopUrl, pullsUrl, recentFolders) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['environment_id'] = environmentId;
        obj['owner'] = owner;
        obj['billable_owner'] = billableOwner;
        obj['repository'] = repository;
        obj['machine'] = machine;
        obj['prebuild'] = prebuild;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['last_used_at'] = lastUsedAt;
        obj['state'] = state;
        obj['url'] = url;
        obj['git_status'] = gitStatus;
        obj['location'] = location;
        obj['idle_timeout_minutes'] = idleTimeoutMinutes;
        obj['web_url'] = webUrl;
        obj['machines_url'] = machinesUrl;
        obj['start_url'] = startUrl;
        obj['stop_url'] = stopUrl;
        obj['pulls_url'] = pullsUrl;
        obj['recent_folders'] = recentFolders;
    }

    /**
     * Constructs a <code>CodespaceWithFullRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespaceWithFullRepository} obj Optional instance to populate.
     * @return {module:model/CodespaceWithFullRepository} The populated <code>CodespaceWithFullRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespaceWithFullRepository();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = SimpleUser.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('billable_owner')) {
                obj['billable_owner'] = SimpleUser.constructFromObject(data['billable_owner']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = FullRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('machine')) {
                obj['machine'] = NullableCodespaceMachine.constructFromObject(data['machine']);
            }
            if (data.hasOwnProperty('devcontainer_path')) {
                obj['devcontainer_path'] = ApiClient.convertToType(data['devcontainer_path'], 'String');
            }
            if (data.hasOwnProperty('prebuild')) {
                obj['prebuild'] = ApiClient.convertToType(data['prebuild'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('git_status')) {
                obj['git_status'] = CodespaceGitStatus.constructFromObject(data['git_status']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('idle_timeout_minutes')) {
                obj['idle_timeout_minutes'] = ApiClient.convertToType(data['idle_timeout_minutes'], 'Number');
            }
            if (data.hasOwnProperty('web_url')) {
                obj['web_url'] = ApiClient.convertToType(data['web_url'], 'String');
            }
            if (data.hasOwnProperty('machines_url')) {
                obj['machines_url'] = ApiClient.convertToType(data['machines_url'], 'String');
            }
            if (data.hasOwnProperty('start_url')) {
                obj['start_url'] = ApiClient.convertToType(data['start_url'], 'String');
            }
            if (data.hasOwnProperty('stop_url')) {
                obj['stop_url'] = ApiClient.convertToType(data['stop_url'], 'String');
            }
            if (data.hasOwnProperty('publish_url')) {
                obj['publish_url'] = ApiClient.convertToType(data['publish_url'], 'String');
            }
            if (data.hasOwnProperty('pulls_url')) {
                obj['pulls_url'] = ApiClient.convertToType(data['pulls_url'], 'String');
            }
            if (data.hasOwnProperty('recent_folders')) {
                obj['recent_folders'] = ApiClient.convertToType(data['recent_folders'], ['String']);
            }
            if (data.hasOwnProperty('runtime_constraints')) {
                obj['runtime_constraints'] = CodespaceRuntimeConstraints.constructFromObject(data['runtime_constraints']);
            }
            if (data.hasOwnProperty('pending_operation')) {
                obj['pending_operation'] = ApiClient.convertToType(data['pending_operation'], 'Boolean');
            }
            if (data.hasOwnProperty('pending_operation_disabled_reason')) {
                obj['pending_operation_disabled_reason'] = ApiClient.convertToType(data['pending_operation_disabled_reason'], 'String');
            }
            if (data.hasOwnProperty('idle_timeout_notice')) {
                obj['idle_timeout_notice'] = ApiClient.convertToType(data['idle_timeout_notice'], 'String');
            }
            if (data.hasOwnProperty('retention_period_minutes')) {
                obj['retention_period_minutes'] = ApiClient.convertToType(data['retention_period_minutes'], 'Number');
            }
            if (data.hasOwnProperty('retention_expires_at')) {
                obj['retention_expires_at'] = ApiClient.convertToType(data['retention_expires_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespaceWithFullRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespaceWithFullRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespaceWithFullRepository.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['display_name'] && !(typeof data['display_name'] === 'string' || data['display_name'] instanceof String)) {
            throw new Error("Expected the field `display_name` to be a primitive type in the JSON string but got " + data['display_name']);
        }
        // ensure the json data is a string
        if (data['environment_id'] && !(typeof data['environment_id'] === 'string' || data['environment_id'] instanceof String)) {
            throw new Error("Expected the field `environment_id` to be a primitive type in the JSON string but got " + data['environment_id']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          SimpleUser.validateJSON(data['owner']);
        }
        // validate the optional field `billable_owner`
        if (data['billable_owner']) { // data not null
          SimpleUser.validateJSON(data['billable_owner']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          FullRepository.validateJSON(data['repository']);
        }
        // validate the optional field `machine`
        if (data['machine']) { // data not null
          NullableCodespaceMachine.validateJSON(data['machine']);
        }
        // ensure the json data is a string
        if (data['devcontainer_path'] && !(typeof data['devcontainer_path'] === 'string' || data['devcontainer_path'] instanceof String)) {
            throw new Error("Expected the field `devcontainer_path` to be a primitive type in the JSON string but got " + data['devcontainer_path']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `git_status`
        if (data['git_status']) { // data not null
          CodespaceGitStatus.validateJSON(data['git_status']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['web_url'] && !(typeof data['web_url'] === 'string' || data['web_url'] instanceof String)) {
            throw new Error("Expected the field `web_url` to be a primitive type in the JSON string but got " + data['web_url']);
        }
        // ensure the json data is a string
        if (data['machines_url'] && !(typeof data['machines_url'] === 'string' || data['machines_url'] instanceof String)) {
            throw new Error("Expected the field `machines_url` to be a primitive type in the JSON string but got " + data['machines_url']);
        }
        // ensure the json data is a string
        if (data['start_url'] && !(typeof data['start_url'] === 'string' || data['start_url'] instanceof String)) {
            throw new Error("Expected the field `start_url` to be a primitive type in the JSON string but got " + data['start_url']);
        }
        // ensure the json data is a string
        if (data['stop_url'] && !(typeof data['stop_url'] === 'string' || data['stop_url'] instanceof String)) {
            throw new Error("Expected the field `stop_url` to be a primitive type in the JSON string but got " + data['stop_url']);
        }
        // ensure the json data is a string
        if (data['publish_url'] && !(typeof data['publish_url'] === 'string' || data['publish_url'] instanceof String)) {
            throw new Error("Expected the field `publish_url` to be a primitive type in the JSON string but got " + data['publish_url']);
        }
        // ensure the json data is a string
        if (data['pulls_url'] && !(typeof data['pulls_url'] === 'string' || data['pulls_url'] instanceof String)) {
            throw new Error("Expected the field `pulls_url` to be a primitive type in the JSON string but got " + data['pulls_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['recent_folders'])) {
            throw new Error("Expected the field `recent_folders` to be an array in the JSON data but got " + data['recent_folders']);
        }
        // validate the optional field `runtime_constraints`
        if (data['runtime_constraints']) { // data not null
          CodespaceRuntimeConstraints.validateJSON(data['runtime_constraints']);
        }
        // ensure the json data is a string
        if (data['pending_operation_disabled_reason'] && !(typeof data['pending_operation_disabled_reason'] === 'string' || data['pending_operation_disabled_reason'] instanceof String)) {
            throw new Error("Expected the field `pending_operation_disabled_reason` to be a primitive type in the JSON string but got " + data['pending_operation_disabled_reason']);
        }
        // ensure the json data is a string
        if (data['idle_timeout_notice'] && !(typeof data['idle_timeout_notice'] === 'string' || data['idle_timeout_notice'] instanceof String)) {
            throw new Error("Expected the field `idle_timeout_notice` to be a primitive type in the JSON string but got " + data['idle_timeout_notice']);
        }

        return true;
    }


}

CodespaceWithFullRepository.RequiredProperties = ["id", "name", "environment_id", "owner", "billable_owner", "repository", "machine", "prebuild", "created_at", "updated_at", "last_used_at", "state", "url", "git_status", "location", "idle_timeout_minutes", "web_url", "machines_url", "start_url", "stop_url", "pulls_url", "recent_folders"];

/**
 * @member {Number} id
 */
CodespaceWithFullRepository.prototype['id'] = undefined;

/**
 * Automatically generated name of this codespace.
 * @member {String} name
 */
CodespaceWithFullRepository.prototype['name'] = undefined;

/**
 * Display name for this codespace.
 * @member {String} display_name
 */
CodespaceWithFullRepository.prototype['display_name'] = undefined;

/**
 * UUID identifying this codespace's environment.
 * @member {String} environment_id
 */
CodespaceWithFullRepository.prototype['environment_id'] = undefined;

/**
 * @member {module:model/SimpleUser} owner
 */
CodespaceWithFullRepository.prototype['owner'] = undefined;

/**
 * @member {module:model/SimpleUser} billable_owner
 */
CodespaceWithFullRepository.prototype['billable_owner'] = undefined;

/**
 * @member {module:model/FullRepository} repository
 */
CodespaceWithFullRepository.prototype['repository'] = undefined;

/**
 * @member {module:model/NullableCodespaceMachine} machine
 */
CodespaceWithFullRepository.prototype['machine'] = undefined;

/**
 * Path to devcontainer.json from repo root used to create Codespace.
 * @member {String} devcontainer_path
 */
CodespaceWithFullRepository.prototype['devcontainer_path'] = undefined;

/**
 * Whether the codespace was created from a prebuild.
 * @member {Boolean} prebuild
 */
CodespaceWithFullRepository.prototype['prebuild'] = undefined;

/**
 * @member {Date} created_at
 */
CodespaceWithFullRepository.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
CodespaceWithFullRepository.prototype['updated_at'] = undefined;

/**
 * Last known time this codespace was started.
 * @member {Date} last_used_at
 */
CodespaceWithFullRepository.prototype['last_used_at'] = undefined;

/**
 * State of this codespace.
 * @member {module:model/CodespaceWithFullRepository.StateEnum} state
 */
CodespaceWithFullRepository.prototype['state'] = undefined;

/**
 * API URL for this codespace.
 * @member {String} url
 */
CodespaceWithFullRepository.prototype['url'] = undefined;

/**
 * @member {module:model/CodespaceGitStatus} git_status
 */
CodespaceWithFullRepository.prototype['git_status'] = undefined;

/**
 * The initally assigned location of a new codespace.
 * @member {module:model/CodespaceWithFullRepository.LocationEnum} location
 */
CodespaceWithFullRepository.prototype['location'] = undefined;

/**
 * The number of minutes of inactivity after which this codespace will be automatically stopped.
 * @member {Number} idle_timeout_minutes
 */
CodespaceWithFullRepository.prototype['idle_timeout_minutes'] = undefined;

/**
 * URL to access this codespace on the web.
 * @member {String} web_url
 */
CodespaceWithFullRepository.prototype['web_url'] = undefined;

/**
 * API URL to access available alternate machine types for this codespace.
 * @member {String} machines_url
 */
CodespaceWithFullRepository.prototype['machines_url'] = undefined;

/**
 * API URL to start this codespace.
 * @member {String} start_url
 */
CodespaceWithFullRepository.prototype['start_url'] = undefined;

/**
 * API URL to stop this codespace.
 * @member {String} stop_url
 */
CodespaceWithFullRepository.prototype['stop_url'] = undefined;

/**
 * API URL to publish this codespace to a new repository.
 * @member {String} publish_url
 */
CodespaceWithFullRepository.prototype['publish_url'] = undefined;

/**
 * API URL for the Pull Request associated with this codespace, if any.
 * @member {String} pulls_url
 */
CodespaceWithFullRepository.prototype['pulls_url'] = undefined;

/**
 * @member {Array.<String>} recent_folders
 */
CodespaceWithFullRepository.prototype['recent_folders'] = undefined;

/**
 * @member {module:model/CodespaceRuntimeConstraints} runtime_constraints
 */
CodespaceWithFullRepository.prototype['runtime_constraints'] = undefined;

/**
 * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
 * @member {Boolean} pending_operation
 */
CodespaceWithFullRepository.prototype['pending_operation'] = undefined;

/**
 * Text to show user when codespace is disabled by a pending operation
 * @member {String} pending_operation_disabled_reason
 */
CodespaceWithFullRepository.prototype['pending_operation_disabled_reason'] = undefined;

/**
 * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
 * @member {String} idle_timeout_notice
 */
CodespaceWithFullRepository.prototype['idle_timeout_notice'] = undefined;

/**
 * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
 * @member {Number} retention_period_minutes
 */
CodespaceWithFullRepository.prototype['retention_period_minutes'] = undefined;

/**
 * When a codespace will be auto-deleted based on the \"retention_period_minutes\" and \"last_used_at\"
 * @member {Date} retention_expires_at
 */
CodespaceWithFullRepository.prototype['retention_expires_at'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CodespaceWithFullRepository['StateEnum'] = {

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "Created"
     * @const
     */
    "Created": "Created",

    /**
     * value: "Queued"
     * @const
     */
    "Queued": "Queued",

    /**
     * value: "Provisioning"
     * @const
     */
    "Provisioning": "Provisioning",

    /**
     * value: "Available"
     * @const
     */
    "Available": "Available",

    /**
     * value: "Awaiting"
     * @const
     */
    "Awaiting": "Awaiting",

    /**
     * value: "Unavailable"
     * @const
     */
    "Unavailable": "Unavailable",

    /**
     * value: "Deleted"
     * @const
     */
    "Deleted": "Deleted",

    /**
     * value: "Moved"
     * @const
     */
    "Moved": "Moved",

    /**
     * value: "Shutdown"
     * @const
     */
    "Shutdown": "Shutdown",

    /**
     * value: "Archived"
     * @const
     */
    "Archived": "Archived",

    /**
     * value: "Starting"
     * @const
     */
    "Starting": "Starting",

    /**
     * value: "ShuttingDown"
     * @const
     */
    "ShuttingDown": "ShuttingDown",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Exporting"
     * @const
     */
    "Exporting": "Exporting",

    /**
     * value: "Updating"
     * @const
     */
    "Updating": "Updating",

    /**
     * value: "Rebuilding"
     * @const
     */
    "Rebuilding": "Rebuilding"
};


/**
 * Allowed values for the <code>location</code> property.
 * @enum {String}
 * @readonly
 */
CodespaceWithFullRepository['LocationEnum'] = {

    /**
     * value: "EastUs"
     * @const
     */
    "EastUs": "EastUs",

    /**
     * value: "SouthEastAsia"
     * @const
     */
    "SouthEastAsia": "SouthEastAsia",

    /**
     * value: "WestEurope"
     * @const
     */
    "WestEurope": "WestEurope",

    /**
     * value: "WestUs2"
     * @const
     */
    "WestUs2": "WestUs2"
};



export default CodespaceWithFullRepository;

