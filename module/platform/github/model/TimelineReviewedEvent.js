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
import AuthorAssociation from './AuthorAssociation';
import SimpleUser from './SimpleUser';
import TimelineReviewedEventLinks from './TimelineReviewedEventLinks';

/**
 * The TimelineReviewedEvent model module.
 * @module model/TimelineReviewedEvent
 * @version 1.1.4
 */
class TimelineReviewedEvent {
    /**
     * Constructs a new <code>TimelineReviewedEvent</code>.
     * Timeline Reviewed Event
     * @alias module:model/TimelineReviewedEvent
     * @param event {String} 
     * @param id {Number} Unique identifier of the review
     * @param nodeId {String} 
     * @param user {module:model/SimpleUser} 
     * @param body {String} The text of the review.
     * @param state {String} 
     * @param htmlUrl {String} 
     * @param pullRequestUrl {String} 
     * @param links {module:model/TimelineReviewedEventLinks} 
     * @param commitId {String} A commit SHA for the review.
     * @param authorAssociation {module:model/AuthorAssociation} 
     */
    constructor(event, id, nodeId, user, body, state, htmlUrl, pullRequestUrl, links, commitId, authorAssociation) { 
        
        TimelineReviewedEvent.initialize(this, event, id, nodeId, user, body, state, htmlUrl, pullRequestUrl, links, commitId, authorAssociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, event, id, nodeId, user, body, state, htmlUrl, pullRequestUrl, links, commitId, authorAssociation) { 
        obj['event'] = event;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['user'] = user;
        obj['body'] = body;
        obj['state'] = state;
        obj['html_url'] = htmlUrl;
        obj['pull_request_url'] = pullRequestUrl;
        obj['_links'] = links;
        obj['commit_id'] = commitId;
        obj['author_association'] = authorAssociation;
    }

    /**
     * Constructs a <code>TimelineReviewedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimelineReviewedEvent} obj Optional instance to populate.
     * @return {module:model/TimelineReviewedEvent} The populated <code>TimelineReviewedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimelineReviewedEvent();

            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SimpleUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('pull_request_url')) {
                obj['pull_request_url'] = ApiClient.convertToType(data['pull_request_url'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = TimelineReviewedEventLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('submitted_at')) {
                obj['submitted_at'] = ApiClient.convertToType(data['submitted_at'], 'Date');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('body_html')) {
                obj['body_html'] = ApiClient.convertToType(data['body_html'], 'String');
            }
            if (data.hasOwnProperty('body_text')) {
                obj['body_text'] = ApiClient.convertToType(data['body_text'], 'String');
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = AuthorAssociation.constructFromObject(data['author_association']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimelineReviewedEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimelineReviewedEvent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimelineReviewedEvent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          SimpleUser.validateJSON(data['user']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['pull_request_url'] && !(typeof data['pull_request_url'] === 'string' || data['pull_request_url'] instanceof String)) {
            throw new Error("Expected the field `pull_request_url` to be a primitive type in the JSON string but got " + data['pull_request_url']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          TimelineReviewedEventLinks.validateJSON(data['_links']);
        }
        // ensure the json data is a string
        if (data['commit_id'] && !(typeof data['commit_id'] === 'string' || data['commit_id'] instanceof String)) {
            throw new Error("Expected the field `commit_id` to be a primitive type in the JSON string but got " + data['commit_id']);
        }
        // ensure the json data is a string
        if (data['body_html'] && !(typeof data['body_html'] === 'string' || data['body_html'] instanceof String)) {
            throw new Error("Expected the field `body_html` to be a primitive type in the JSON string but got " + data['body_html']);
        }
        // ensure the json data is a string
        if (data['body_text'] && !(typeof data['body_text'] === 'string' || data['body_text'] instanceof String)) {
            throw new Error("Expected the field `body_text` to be a primitive type in the JSON string but got " + data['body_text']);
        }

        return true;
    }


}

TimelineReviewedEvent.RequiredProperties = ["event", "id", "node_id", "user", "body", "state", "html_url", "pull_request_url", "_links", "commit_id", "author_association"];

/**
 * @member {String} event
 */
TimelineReviewedEvent.prototype['event'] = undefined;

/**
 * Unique identifier of the review
 * @member {Number} id
 */
TimelineReviewedEvent.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
TimelineReviewedEvent.prototype['node_id'] = undefined;

/**
 * @member {module:model/SimpleUser} user
 */
TimelineReviewedEvent.prototype['user'] = undefined;

/**
 * The text of the review.
 * @member {String} body
 */
TimelineReviewedEvent.prototype['body'] = undefined;

/**
 * @member {String} state
 */
TimelineReviewedEvent.prototype['state'] = undefined;

/**
 * @member {String} html_url
 */
TimelineReviewedEvent.prototype['html_url'] = undefined;

/**
 * @member {String} pull_request_url
 */
TimelineReviewedEvent.prototype['pull_request_url'] = undefined;

/**
 * @member {module:model/TimelineReviewedEventLinks} _links
 */
TimelineReviewedEvent.prototype['_links'] = undefined;

/**
 * @member {Date} submitted_at
 */
TimelineReviewedEvent.prototype['submitted_at'] = undefined;

/**
 * A commit SHA for the review.
 * @member {String} commit_id
 */
TimelineReviewedEvent.prototype['commit_id'] = undefined;

/**
 * @member {String} body_html
 */
TimelineReviewedEvent.prototype['body_html'] = undefined;

/**
 * @member {String} body_text
 */
TimelineReviewedEvent.prototype['body_text'] = undefined;

/**
 * @member {module:model/AuthorAssociation} author_association
 */
TimelineReviewedEvent.prototype['author_association'] = undefined;






export default TimelineReviewedEvent;

