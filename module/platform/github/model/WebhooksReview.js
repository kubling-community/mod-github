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
import User from './User';
import WebhooksReviewLinks from './WebhooksReviewLinks';

/**
 * The WebhooksReview model module.
 * @module model/WebhooksReview
 * @version 1.1.4
 */
class WebhooksReview {
    /**
     * Constructs a new <code>WebhooksReview</code>.
     * The review that was affected.
     * @alias module:model/WebhooksReview
     * @param links {module:model/WebhooksReviewLinks} 
     * @param authorAssociation {module:model/WebhooksReview.AuthorAssociationEnum} How the author is associated with the repository.
     * @param body {String} The text of the review.
     * @param commitId {String} A commit SHA for the review.
     * @param htmlUrl {String} 
     * @param id {Number} Unique identifier of the review
     * @param nodeId {String} 
     * @param pullRequestUrl {String} 
     * @param state {String} 
     * @param submittedAt {Date} 
     * @param user {module:model/User} 
     */
    constructor(links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, submittedAt, user) { 
        
        WebhooksReview.initialize(this, links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, submittedAt, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, submittedAt, user) { 
        obj['_links'] = links;
        obj['author_association'] = authorAssociation;
        obj['body'] = body;
        obj['commit_id'] = commitId;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['pull_request_url'] = pullRequestUrl;
        obj['state'] = state;
        obj['submitted_at'] = submittedAt;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>WebhooksReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksReview} obj Optional instance to populate.
     * @return {module:model/WebhooksReview} The populated <code>WebhooksReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksReview();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = WebhooksReviewLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('pull_request_url')) {
                obj['pull_request_url'] = ApiClient.convertToType(data['pull_request_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('submitted_at')) {
                obj['submitted_at'] = ApiClient.convertToType(data['submitted_at'], 'Date');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksReview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksReview</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksReview.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          WebhooksReviewLinks.validateJSON(data['_links']);
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
        if (data['commit_id'] && !(typeof data['commit_id'] === 'string' || data['commit_id'] instanceof String)) {
            throw new Error("Expected the field `commit_id` to be a primitive type in the JSON string but got " + data['commit_id']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['pull_request_url'] && !(typeof data['pull_request_url'] === 'string' || data['pull_request_url'] instanceof String)) {
            throw new Error("Expected the field `pull_request_url` to be a primitive type in the JSON string but got " + data['pull_request_url']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          User.validateJSON(data['user']);
        }

        return true;
    }


}

WebhooksReview.RequiredProperties = ["_links", "author_association", "body", "commit_id", "html_url", "id", "node_id", "pull_request_url", "state", "submitted_at", "user"];

/**
 * @member {module:model/WebhooksReviewLinks} _links
 */
WebhooksReview.prototype['_links'] = undefined;

/**
 * How the author is associated with the repository.
 * @member {module:model/WebhooksReview.AuthorAssociationEnum} author_association
 */
WebhooksReview.prototype['author_association'] = undefined;

/**
 * The text of the review.
 * @member {String} body
 */
WebhooksReview.prototype['body'] = undefined;

/**
 * A commit SHA for the review.
 * @member {String} commit_id
 */
WebhooksReview.prototype['commit_id'] = undefined;

/**
 * @member {String} html_url
 */
WebhooksReview.prototype['html_url'] = undefined;

/**
 * Unique identifier of the review
 * @member {Number} id
 */
WebhooksReview.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
WebhooksReview.prototype['node_id'] = undefined;

/**
 * @member {String} pull_request_url
 */
WebhooksReview.prototype['pull_request_url'] = undefined;

/**
 * @member {String} state
 */
WebhooksReview.prototype['state'] = undefined;

/**
 * @member {Date} submitted_at
 */
WebhooksReview.prototype['submitted_at'] = undefined;

/**
 * @member {module:model/User} user
 */
WebhooksReview.prototype['user'] = undefined;





/**
 * Allowed values for the <code>author_association</code> property.
 * @enum {String}
 * @readonly
 */
WebhooksReview['AuthorAssociationEnum'] = {

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



export default WebhooksReview;

