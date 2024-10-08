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
import NullableSimpleUser from './NullableSimpleUser';
import ReactionRollup from './ReactionRollup';

/**
 * The TeamDiscussionComment model module.
 * @module model/TeamDiscussionComment
 * @version 1.1.4
 */
class TeamDiscussionComment {
    /**
     * Constructs a new <code>TeamDiscussionComment</code>.
     * A reply to a discussion within a team.
     * @alias module:model/TeamDiscussionComment
     * @param author {module:model/NullableSimpleUser} 
     * @param body {String} The main text of the comment.
     * @param bodyHtml {String} 
     * @param bodyVersion {String} The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     * @param createdAt {Date} 
     * @param lastEditedAt {Date} 
     * @param discussionUrl {String} 
     * @param htmlUrl {String} 
     * @param nodeId {String} 
     * @param number {Number} The unique sequence number of a team discussion comment.
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(author, body, bodyHtml, bodyVersion, createdAt, lastEditedAt, discussionUrl, htmlUrl, nodeId, number, updatedAt, url) { 
        
        TeamDiscussionComment.initialize(this, author, body, bodyHtml, bodyVersion, createdAt, lastEditedAt, discussionUrl, htmlUrl, nodeId, number, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, body, bodyHtml, bodyVersion, createdAt, lastEditedAt, discussionUrl, htmlUrl, nodeId, number, updatedAt, url) { 
        obj['author'] = author;
        obj['body'] = body;
        obj['body_html'] = bodyHtml;
        obj['body_version'] = bodyVersion;
        obj['created_at'] = createdAt;
        obj['last_edited_at'] = lastEditedAt;
        obj['discussion_url'] = discussionUrl;
        obj['html_url'] = htmlUrl;
        obj['node_id'] = nodeId;
        obj['number'] = number;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>TeamDiscussionComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamDiscussionComment} obj Optional instance to populate.
     * @return {module:model/TeamDiscussionComment} The populated <code>TeamDiscussionComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamDiscussionComment();

            if (data.hasOwnProperty('author')) {
                obj['author'] = NullableSimpleUser.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('body_html')) {
                obj['body_html'] = ApiClient.convertToType(data['body_html'], 'String');
            }
            if (data.hasOwnProperty('body_version')) {
                obj['body_version'] = ApiClient.convertToType(data['body_version'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('last_edited_at')) {
                obj['last_edited_at'] = ApiClient.convertToType(data['last_edited_at'], 'Date');
            }
            if (data.hasOwnProperty('discussion_url')) {
                obj['discussion_url'] = ApiClient.convertToType(data['discussion_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = ReactionRollup.constructFromObject(data['reactions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamDiscussionComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamDiscussionComment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TeamDiscussionComment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `author`
        if (data['author']) { // data not null
          NullableSimpleUser.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['body_html'] && !(typeof data['body_html'] === 'string' || data['body_html'] instanceof String)) {
            throw new Error("Expected the field `body_html` to be a primitive type in the JSON string but got " + data['body_html']);
        }
        // ensure the json data is a string
        if (data['body_version'] && !(typeof data['body_version'] === 'string' || data['body_version'] instanceof String)) {
            throw new Error("Expected the field `body_version` to be a primitive type in the JSON string but got " + data['body_version']);
        }
        // ensure the json data is a string
        if (data['discussion_url'] && !(typeof data['discussion_url'] === 'string' || data['discussion_url'] instanceof String)) {
            throw new Error("Expected the field `discussion_url` to be a primitive type in the JSON string but got " + data['discussion_url']);
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
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `reactions`
        if (data['reactions']) { // data not null
          ReactionRollup.validateJSON(data['reactions']);
        }

        return true;
    }


}

TeamDiscussionComment.RequiredProperties = ["author", "body", "body_html", "body_version", "created_at", "last_edited_at", "discussion_url", "html_url", "node_id", "number", "updated_at", "url"];

/**
 * @member {module:model/NullableSimpleUser} author
 */
TeamDiscussionComment.prototype['author'] = undefined;

/**
 * The main text of the comment.
 * @member {String} body
 */
TeamDiscussionComment.prototype['body'] = undefined;

/**
 * @member {String} body_html
 */
TeamDiscussionComment.prototype['body_html'] = undefined;

/**
 * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
 * @member {String} body_version
 */
TeamDiscussionComment.prototype['body_version'] = undefined;

/**
 * @member {Date} created_at
 */
TeamDiscussionComment.prototype['created_at'] = undefined;

/**
 * @member {Date} last_edited_at
 */
TeamDiscussionComment.prototype['last_edited_at'] = undefined;

/**
 * @member {String} discussion_url
 */
TeamDiscussionComment.prototype['discussion_url'] = undefined;

/**
 * @member {String} html_url
 */
TeamDiscussionComment.prototype['html_url'] = undefined;

/**
 * @member {String} node_id
 */
TeamDiscussionComment.prototype['node_id'] = undefined;

/**
 * The unique sequence number of a team discussion comment.
 * @member {Number} number
 */
TeamDiscussionComment.prototype['number'] = undefined;

/**
 * @member {Date} updated_at
 */
TeamDiscussionComment.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
TeamDiscussionComment.prototype['url'] = undefined;

/**
 * @member {module:model/ReactionRollup} reactions
 */
TeamDiscussionComment.prototype['reactions'] = undefined;






export default TeamDiscussionComment;

