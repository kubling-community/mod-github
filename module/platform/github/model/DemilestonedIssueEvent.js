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
import MilestonedIssueEventMilestone from './MilestonedIssueEventMilestone';
import NullableIntegration from './NullableIntegration';
import SimpleUser from './SimpleUser';

/**
 * The DemilestonedIssueEvent model module.
 * @module model/DemilestonedIssueEvent
 * @version 1.1.4
 */
class DemilestonedIssueEvent {
    /**
     * Constructs a new <code>DemilestonedIssueEvent</code>.
     * Demilestoned Issue Event
     * @alias module:model/DemilestonedIssueEvent
     * @param id {Number} 
     * @param nodeId {String} 
     * @param url {String} 
     * @param actor {module:model/SimpleUser} 
     * @param event {String} 
     * @param commitId {String} 
     * @param commitUrl {String} 
     * @param createdAt {String} 
     * @param performedViaGithubApp {module:model/NullableIntegration} 
     * @param milestone {module:model/MilestonedIssueEventMilestone} 
     */
    constructor(id, nodeId, url, actor, event, commitId, commitUrl, createdAt, performedViaGithubApp, milestone) { 
        
        DemilestonedIssueEvent.initialize(this, id, nodeId, url, actor, event, commitId, commitUrl, createdAt, performedViaGithubApp, milestone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nodeId, url, actor, event, commitId, commitUrl, createdAt, performedViaGithubApp, milestone) { 
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['url'] = url;
        obj['actor'] = actor;
        obj['event'] = event;
        obj['commit_id'] = commitId;
        obj['commit_url'] = commitUrl;
        obj['created_at'] = createdAt;
        obj['performed_via_github_app'] = performedViaGithubApp;
        obj['milestone'] = milestone;
    }

    /**
     * Constructs a <code>DemilestonedIssueEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DemilestonedIssueEvent} obj Optional instance to populate.
     * @return {module:model/DemilestonedIssueEvent} The populated <code>DemilestonedIssueEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DemilestonedIssueEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = SimpleUser.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('commit_url')) {
                obj['commit_url'] = ApiClient.convertToType(data['commit_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('performed_via_github_app')) {
                obj['performed_via_github_app'] = NullableIntegration.constructFromObject(data['performed_via_github_app']);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = MilestonedIssueEventMilestone.constructFromObject(data['milestone']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DemilestonedIssueEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DemilestonedIssueEvent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DemilestonedIssueEvent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `actor`
        if (data['actor']) { // data not null
          SimpleUser.validateJSON(data['actor']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['commit_id'] && !(typeof data['commit_id'] === 'string' || data['commit_id'] instanceof String)) {
            throw new Error("Expected the field `commit_id` to be a primitive type in the JSON string but got " + data['commit_id']);
        }
        // ensure the json data is a string
        if (data['commit_url'] && !(typeof data['commit_url'] === 'string' || data['commit_url'] instanceof String)) {
            throw new Error("Expected the field `commit_url` to be a primitive type in the JSON string but got " + data['commit_url']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // validate the optional field `performed_via_github_app`
        if (data['performed_via_github_app']) { // data not null
          NullableIntegration.validateJSON(data['performed_via_github_app']);
        }
        // validate the optional field `milestone`
        if (data['milestone']) { // data not null
          MilestonedIssueEventMilestone.validateJSON(data['milestone']);
        }

        return true;
    }


}

DemilestonedIssueEvent.RequiredProperties = ["id", "node_id", "url", "actor", "event", "commit_id", "commit_url", "created_at", "performed_via_github_app", "milestone"];

/**
 * @member {Number} id
 */
DemilestonedIssueEvent.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
DemilestonedIssueEvent.prototype['node_id'] = undefined;

/**
 * @member {String} url
 */
DemilestonedIssueEvent.prototype['url'] = undefined;

/**
 * @member {module:model/SimpleUser} actor
 */
DemilestonedIssueEvent.prototype['actor'] = undefined;

/**
 * @member {String} event
 */
DemilestonedIssueEvent.prototype['event'] = undefined;

/**
 * @member {String} commit_id
 */
DemilestonedIssueEvent.prototype['commit_id'] = undefined;

/**
 * @member {String} commit_url
 */
DemilestonedIssueEvent.prototype['commit_url'] = undefined;

/**
 * @member {String} created_at
 */
DemilestonedIssueEvent.prototype['created_at'] = undefined;

/**
 * @member {module:model/NullableIntegration} performed_via_github_app
 */
DemilestonedIssueEvent.prototype['performed_via_github_app'] = undefined;

/**
 * @member {module:model/MilestonedIssueEventMilestone} milestone
 */
DemilestonedIssueEvent.prototype['milestone'] = undefined;






export default DemilestonedIssueEvent;

