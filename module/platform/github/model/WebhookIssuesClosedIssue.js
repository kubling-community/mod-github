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
import WebhookIssueCommentCreatedIssueAllOfReactions from './WebhookIssueCommentCreatedIssueAllOfReactions';
import WebhooksIssuePullRequest from './WebhooksIssuePullRequest';
import WebhooksSponsorshipMaintainer from './WebhooksSponsorshipMaintainer';

/**
 * The WebhookIssuesClosedIssue model module.
 * @module model/WebhookIssuesClosedIssue
 * @version 1.1.4
 */
class WebhookIssuesClosedIssue {
    /**
     * Constructs a new <code>WebhookIssuesClosedIssue</code>.
     * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
     * @alias module:model/WebhookIssuesClosedIssue
     * @param activeLockReason {String} 
     * @param assignees {Array.<Object>} 
     * @param authorAssociation {String} 
     * @param body {String} 
     * @param closedAt {String} 
     * @param comments {Number} 
     * @param commentsUrl {String} 
     * @param createdAt {String} 
     * @param eventsUrl {String} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param labelsUrl {String} 
     * @param milestone {Object} 
     * @param nodeId {String} 
     * @param number {Number} 
     * @param reactions {module:model/WebhookIssueCommentCreatedIssueAllOfReactions} 
     * @param repositoryUrl {String} 
     * @param state {module:model/WebhookIssuesClosedIssue.StateEnum} 
     * @param title {String} 
     * @param updatedAt {String} 
     * @param url {String} 
     * @param user {module:model/WebhooksSponsorshipMaintainer} 
     */
    constructor(activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, state, title, updatedAt, url, user) { 
        
        WebhookIssuesClosedIssue.initialize(this, activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, state, title, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, state, title, updatedAt, url, user) { 
        obj['active_lock_reason'] = activeLockReason;
        obj['assignees'] = assignees;
        obj['author_association'] = authorAssociation;
        obj['body'] = body;
        obj['closed_at'] = closedAt;
        obj['comments'] = comments;
        obj['comments_url'] = commentsUrl;
        obj['created_at'] = createdAt;
        obj['events_url'] = eventsUrl;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['labels_url'] = labelsUrl;
        obj['milestone'] = milestone;
        obj['node_id'] = nodeId;
        obj['number'] = number;
        obj['reactions'] = reactions;
        obj['repository_url'] = repositoryUrl;
        obj['state'] = state;
        obj['title'] = title;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>WebhookIssuesClosedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookIssuesClosedIssue} obj Optional instance to populate.
     * @return {module:model/WebhookIssuesClosedIssue} The populated <code>WebhookIssuesClosedIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookIssuesClosedIssue();

            if (data.hasOwnProperty('active_lock_reason')) {
                obj['active_lock_reason'] = ApiClient.convertToType(data['active_lock_reason'], 'String');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], Object);
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], [Object]);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'Number');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [Object]);
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = ApiClient.convertToType(data['milestone'], Object);
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('performed_via_github_app')) {
                obj['performed_via_github_app'] = ApiClient.convertToType(data['performed_via_github_app'], Object);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = WebhooksIssuePullRequest.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = WebhookIssueCommentCreatedIssueAllOfReactions.constructFromObject(data['reactions']);
            }
            if (data.hasOwnProperty('repository_url')) {
                obj['repository_url'] = ApiClient.convertToType(data['repository_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('state_reason')) {
                obj['state_reason'] = ApiClient.convertToType(data['state_reason'], 'String');
            }
            if (data.hasOwnProperty('timeline_url')) {
                obj['timeline_url'] = ApiClient.convertToType(data['timeline_url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = WebhooksSponsorshipMaintainer.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookIssuesClosedIssue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookIssuesClosedIssue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookIssuesClosedIssue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['active_lock_reason'] && !(typeof data['active_lock_reason'] === 'string' || data['active_lock_reason'] instanceof String)) {
            throw new Error("Expected the field `active_lock_reason` to be a primitive type in the JSON string but got " + data['active_lock_reason']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['assignees'])) {
            throw new Error("Expected the field `assignees` to be an array in the JSON data but got " + data['assignees']);
        }
        // ensure the json data is a string
        if (data['author_association'] && !(typeof data['author_association'] === 'string' || data['author_association'] instanceof String)) {
            throw new Error("Expected the field `author_association` to be a primitive type in the JSON string but got " + data['author_association']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['closed_at'] && !(typeof data['closed_at'] === 'string' || data['closed_at'] instanceof String)) {
            throw new Error("Expected the field `closed_at` to be a primitive type in the JSON string but got " + data['closed_at']);
        }
        // ensure the json data is a string
        if (data['comments_url'] && !(typeof data['comments_url'] === 'string' || data['comments_url'] instanceof String)) {
            throw new Error("Expected the field `comments_url` to be a primitive type in the JSON string but got " + data['comments_url']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['events_url'] && !(typeof data['events_url'] === 'string' || data['events_url'] instanceof String)) {
            throw new Error("Expected the field `events_url` to be a primitive type in the JSON string but got " + data['events_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['labels'])) {
            throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
        }
        // ensure the json data is a string
        if (data['labels_url'] && !(typeof data['labels_url'] === 'string' || data['labels_url'] instanceof String)) {
            throw new Error("Expected the field `labels_url` to be a primitive type in the JSON string but got " + data['labels_url']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // validate the optional field `pull_request`
        if (data['pull_request']) { // data not null
          WebhooksIssuePullRequest.validateJSON(data['pull_request']);
        }
        // validate the optional field `reactions`
        if (data['reactions']) { // data not null
          WebhookIssueCommentCreatedIssueAllOfReactions.validateJSON(data['reactions']);
        }
        // ensure the json data is a string
        if (data['repository_url'] && !(typeof data['repository_url'] === 'string' || data['repository_url'] instanceof String)) {
            throw new Error("Expected the field `repository_url` to be a primitive type in the JSON string but got " + data['repository_url']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['state_reason'] && !(typeof data['state_reason'] === 'string' || data['state_reason'] instanceof String)) {
            throw new Error("Expected the field `state_reason` to be a primitive type in the JSON string but got " + data['state_reason']);
        }
        // ensure the json data is a string
        if (data['timeline_url'] && !(typeof data['timeline_url'] === 'string' || data['timeline_url'] instanceof String)) {
            throw new Error("Expected the field `timeline_url` to be a primitive type in the JSON string but got " + data['timeline_url']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          WebhooksSponsorshipMaintainer.validateJSON(data['user']);
        }

        return true;
    }


}

WebhookIssuesClosedIssue.RequiredProperties = ["active_lock_reason", "assignees", "author_association", "body", "closed_at", "comments", "comments_url", "created_at", "events_url", "html_url", "id", "labels_url", "milestone", "node_id", "number", "reactions", "repository_url", "state", "title", "updated_at", "url", "user"];

/**
 * @member {String} active_lock_reason
 */
WebhookIssuesClosedIssue.prototype['active_lock_reason'] = undefined;

/**
 * @member {Object} assignee
 */
WebhookIssuesClosedIssue.prototype['assignee'] = undefined;

/**
 * @member {Array.<Object>} assignees
 */
WebhookIssuesClosedIssue.prototype['assignees'] = undefined;

/**
 * @member {String} author_association
 */
WebhookIssuesClosedIssue.prototype['author_association'] = undefined;

/**
 * @member {String} body
 */
WebhookIssuesClosedIssue.prototype['body'] = undefined;

/**
 * @member {String} closed_at
 */
WebhookIssuesClosedIssue.prototype['closed_at'] = undefined;

/**
 * @member {Number} comments
 */
WebhookIssuesClosedIssue.prototype['comments'] = undefined;

/**
 * @member {String} comments_url
 */
WebhookIssuesClosedIssue.prototype['comments_url'] = undefined;

/**
 * @member {String} created_at
 */
WebhookIssuesClosedIssue.prototype['created_at'] = undefined;

/**
 * @member {Boolean} draft
 */
WebhookIssuesClosedIssue.prototype['draft'] = undefined;

/**
 * @member {String} events_url
 */
WebhookIssuesClosedIssue.prototype['events_url'] = undefined;

/**
 * @member {String} html_url
 */
WebhookIssuesClosedIssue.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhookIssuesClosedIssue.prototype['id'] = undefined;

/**
 * @member {Array.<Object>} labels
 */
WebhookIssuesClosedIssue.prototype['labels'] = undefined;

/**
 * @member {String} labels_url
 */
WebhookIssuesClosedIssue.prototype['labels_url'] = undefined;

/**
 * @member {Boolean} locked
 */
WebhookIssuesClosedIssue.prototype['locked'] = undefined;

/**
 * @member {Object} milestone
 */
WebhookIssuesClosedIssue.prototype['milestone'] = undefined;

/**
 * @member {String} node_id
 */
WebhookIssuesClosedIssue.prototype['node_id'] = undefined;

/**
 * @member {Number} number
 */
WebhookIssuesClosedIssue.prototype['number'] = undefined;

/**
 * @member {Object} performed_via_github_app
 */
WebhookIssuesClosedIssue.prototype['performed_via_github_app'] = undefined;

/**
 * @member {module:model/WebhooksIssuePullRequest} pull_request
 */
WebhookIssuesClosedIssue.prototype['pull_request'] = undefined;

/**
 * @member {module:model/WebhookIssueCommentCreatedIssueAllOfReactions} reactions
 */
WebhookIssuesClosedIssue.prototype['reactions'] = undefined;

/**
 * @member {String} repository_url
 */
WebhookIssuesClosedIssue.prototype['repository_url'] = undefined;

/**
 * @member {module:model/WebhookIssuesClosedIssue.StateEnum} state
 */
WebhookIssuesClosedIssue.prototype['state'] = undefined;

/**
 * @member {String} state_reason
 */
WebhookIssuesClosedIssue.prototype['state_reason'] = undefined;

/**
 * @member {String} timeline_url
 */
WebhookIssuesClosedIssue.prototype['timeline_url'] = undefined;

/**
 * @member {String} title
 */
WebhookIssuesClosedIssue.prototype['title'] = undefined;

/**
 * @member {String} updated_at
 */
WebhookIssuesClosedIssue.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
WebhookIssuesClosedIssue.prototype['url'] = undefined;

/**
 * @member {module:model/WebhooksSponsorshipMaintainer} user
 */
WebhookIssuesClosedIssue.prototype['user'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
WebhookIssuesClosedIssue['StateEnum'] = {

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",

    /**
     * value: "open"
     * @const
     */
    "open": "open"
};



export default WebhookIssuesClosedIssue;

