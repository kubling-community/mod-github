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
import App from './App';
import Label from './Label';
import Milestone from './Milestone';
import Reactions from './Reactions';
import User1 from './User1';
import WebhooksIssuePullRequest from './WebhooksIssuePullRequest';

/**
 * The WebhooksIssue model module.
 * @module model/WebhooksIssue
 * @version 1.1.4
 */
class WebhooksIssue {
    /**
     * Constructs a new <code>WebhooksIssue</code>.
     * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
     * @alias module:model/WebhooksIssue
     * @param activeLockReason {module:model/WebhooksIssue.ActiveLockReasonEnum} 
     * @param assignees {Array.<module:model/User1>} 
     * @param authorAssociation {module:model/WebhooksIssue.AuthorAssociationEnum} How the author is associated with the repository.
     * @param body {String} Contents of the issue
     * @param closedAt {Date} 
     * @param comments {Number} 
     * @param commentsUrl {String} 
     * @param createdAt {Date} 
     * @param eventsUrl {String} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param labelsUrl {String} 
     * @param milestone {module:model/Milestone} 
     * @param nodeId {String} 
     * @param number {Number} 
     * @param reactions {module:model/Reactions} 
     * @param repositoryUrl {String} 
     * @param title {String} Title of the issue
     * @param updatedAt {Date} 
     * @param url {String} URL for the issue
     * @param user {module:model/User1} 
     */
    constructor(activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, title, updatedAt, url, user) { 
        
        WebhooksIssue.initialize(this, activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, title, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activeLockReason, assignees, authorAssociation, body, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labelsUrl, milestone, nodeId, number, reactions, repositoryUrl, title, updatedAt, url, user) { 
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
        obj['title'] = title;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>WebhooksIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksIssue} obj Optional instance to populate.
     * @return {module:model/WebhooksIssue} The populated <code>WebhooksIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksIssue();

            if (data.hasOwnProperty('active_lock_reason')) {
                obj['active_lock_reason'] = ApiClient.convertToType(data['active_lock_reason'], 'String');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = User1.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], [User1]);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'Date');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'Number');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
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
                obj['labels'] = ApiClient.convertToType(data['labels'], [Label]);
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = Milestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('performed_via_github_app')) {
                obj['performed_via_github_app'] = App.constructFromObject(data['performed_via_github_app']);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = WebhooksIssuePullRequest.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = Reactions.constructFromObject(data['reactions']);
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
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User1.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksIssue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksIssue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksIssue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['active_lock_reason'] && !(typeof data['active_lock_reason'] === 'string' || data['active_lock_reason'] instanceof String)) {
            throw new Error("Expected the field `active_lock_reason` to be a primitive type in the JSON string but got " + data['active_lock_reason']);
        }
        // validate the optional field `assignee`
        if (data['assignee']) { // data not null
          User1.validateJSON(data['assignee']);
        }
        if (data['assignees']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['assignees'])) {
                throw new Error("Expected the field `assignees` to be an array in the JSON data but got " + data['assignees']);
            }
            // validate the optional field `assignees` (array)
            for (const item of data['assignees']) {
                User1.validateJSON(item);
            };
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
        if (data['comments_url'] && !(typeof data['comments_url'] === 'string' || data['comments_url'] instanceof String)) {
            throw new Error("Expected the field `comments_url` to be a primitive type in the JSON string but got " + data['comments_url']);
        }
        // ensure the json data is a string
        if (data['events_url'] && !(typeof data['events_url'] === 'string' || data['events_url'] instanceof String)) {
            throw new Error("Expected the field `events_url` to be a primitive type in the JSON string but got " + data['events_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        if (data['labels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['labels'])) {
                throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
            }
            // validate the optional field `labels` (array)
            for (const item of data['labels']) {
                Label.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['labels_url'] && !(typeof data['labels_url'] === 'string' || data['labels_url'] instanceof String)) {
            throw new Error("Expected the field `labels_url` to be a primitive type in the JSON string but got " + data['labels_url']);
        }
        // validate the optional field `milestone`
        if (data['milestone']) { // data not null
          Milestone.validateJSON(data['milestone']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // validate the optional field `performed_via_github_app`
        if (data['performed_via_github_app']) { // data not null
          App.validateJSON(data['performed_via_github_app']);
        }
        // validate the optional field `pull_request`
        if (data['pull_request']) { // data not null
          WebhooksIssuePullRequest.validateJSON(data['pull_request']);
        }
        // validate the optional field `reactions`
        if (data['reactions']) { // data not null
          Reactions.validateJSON(data['reactions']);
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
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          User1.validateJSON(data['user']);
        }

        return true;
    }


}

WebhooksIssue.RequiredProperties = ["active_lock_reason", "assignees", "author_association", "body", "closed_at", "comments", "comments_url", "created_at", "events_url", "html_url", "id", "labels_url", "milestone", "node_id", "number", "reactions", "repository_url", "title", "updated_at", "url", "user"];

/**
 * @member {module:model/WebhooksIssue.ActiveLockReasonEnum} active_lock_reason
 */
WebhooksIssue.prototype['active_lock_reason'] = undefined;

/**
 * @member {module:model/User1} assignee
 */
WebhooksIssue.prototype['assignee'] = undefined;

/**
 * @member {Array.<module:model/User1>} assignees
 */
WebhooksIssue.prototype['assignees'] = undefined;

/**
 * How the author is associated with the repository.
 * @member {module:model/WebhooksIssue.AuthorAssociationEnum} author_association
 */
WebhooksIssue.prototype['author_association'] = undefined;

/**
 * Contents of the issue
 * @member {String} body
 */
WebhooksIssue.prototype['body'] = undefined;

/**
 * @member {Date} closed_at
 */
WebhooksIssue.prototype['closed_at'] = undefined;

/**
 * @member {Number} comments
 */
WebhooksIssue.prototype['comments'] = undefined;

/**
 * @member {String} comments_url
 */
WebhooksIssue.prototype['comments_url'] = undefined;

/**
 * @member {Date} created_at
 */
WebhooksIssue.prototype['created_at'] = undefined;

/**
 * @member {Boolean} draft
 */
WebhooksIssue.prototype['draft'] = undefined;

/**
 * @member {String} events_url
 */
WebhooksIssue.prototype['events_url'] = undefined;

/**
 * @member {String} html_url
 */
WebhooksIssue.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhooksIssue.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/Label>} labels
 */
WebhooksIssue.prototype['labels'] = undefined;

/**
 * @member {String} labels_url
 */
WebhooksIssue.prototype['labels_url'] = undefined;

/**
 * @member {Boolean} locked
 */
WebhooksIssue.prototype['locked'] = undefined;

/**
 * @member {module:model/Milestone} milestone
 */
WebhooksIssue.prototype['milestone'] = undefined;

/**
 * @member {String} node_id
 */
WebhooksIssue.prototype['node_id'] = undefined;

/**
 * @member {Number} number
 */
WebhooksIssue.prototype['number'] = undefined;

/**
 * @member {module:model/App} performed_via_github_app
 */
WebhooksIssue.prototype['performed_via_github_app'] = undefined;

/**
 * @member {module:model/WebhooksIssuePullRequest} pull_request
 */
WebhooksIssue.prototype['pull_request'] = undefined;

/**
 * @member {module:model/Reactions} reactions
 */
WebhooksIssue.prototype['reactions'] = undefined;

/**
 * @member {String} repository_url
 */
WebhooksIssue.prototype['repository_url'] = undefined;

/**
 * State of the issue; either 'open' or 'closed'
 * @member {module:model/WebhooksIssue.StateEnum} state
 */
WebhooksIssue.prototype['state'] = undefined;

/**
 * @member {String} state_reason
 */
WebhooksIssue.prototype['state_reason'] = undefined;

/**
 * @member {String} timeline_url
 */
WebhooksIssue.prototype['timeline_url'] = undefined;

/**
 * Title of the issue
 * @member {String} title
 */
WebhooksIssue.prototype['title'] = undefined;

/**
 * @member {Date} updated_at
 */
WebhooksIssue.prototype['updated_at'] = undefined;

/**
 * URL for the issue
 * @member {String} url
 */
WebhooksIssue.prototype['url'] = undefined;

/**
 * @member {module:model/User1} user
 */
WebhooksIssue.prototype['user'] = undefined;





/**
 * Allowed values for the <code>active_lock_reason</code> property.
 * @enum {String}
 * @readonly
 */
WebhooksIssue['ActiveLockReasonEnum'] = {

    /**
     * value: "resolved"
     * @const
     */
    "resolved": "resolved",

    /**
     * value: "off-topic"
     * @const
     */
    "off-topic": "off-topic",

    /**
     * value: "too heated"
     * @const
     */
    "too heated": "too heated",

    /**
     * value: "spam"
     * @const
     */
    "spam": "spam",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>author_association</code> property.
 * @enum {String}
 * @readonly
 */
WebhooksIssue['AuthorAssociationEnum'] = {

    /**
     * value: "COLLABORATOR"
     * @const
     */
    "COLLABORATOR": "COLLABORATOR",

    /**
     * value: "CONTRIBUTOR"
     * @const
     */
    "CONTRIBUTOR": "CONTRIBUTOR",

    /**
     * value: "FIRST_TIMER"
     * @const
     */
    "FIRST_TIMER": "FIRST_TIMER",

    /**
     * value: "FIRST_TIME_CONTRIBUTOR"
     * @const
     */
    "FIRST_TIME_CONTRIBUTOR": "FIRST_TIME_CONTRIBUTOR",

    /**
     * value: "MANNEQUIN"
     * @const
     */
    "MANNEQUIN": "MANNEQUIN",

    /**
     * value: "MEMBER"
     * @const
     */
    "MEMBER": "MEMBER",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "OWNER"
     * @const
     */
    "OWNER": "OWNER"
};


/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
WebhooksIssue['StateEnum'] = {

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



export default WebhooksIssue;

