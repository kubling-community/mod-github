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
import Reactions from './Reactions';
import User from './User';
import WebhooksReviewCommentLinks from './WebhooksReviewCommentLinks';

/**
 * The PullRequestReviewComment model module.
 * @module model/PullRequestReviewComment
 * @version 1.1.4
 */
class PullRequestReviewComment {
    /**
     * Constructs a new <code>PullRequestReviewComment</code>.
     * The [comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request) itself.
     * @alias module:model/PullRequestReviewComment
     * @param links {module:model/WebhooksReviewCommentLinks} 
     * @param authorAssociation {module:model/PullRequestReviewComment.AuthorAssociationEnum} How the author is associated with the repository.
     * @param body {String} The text of the comment.
     * @param commitId {String} The SHA of the commit to which the comment applies.
     * @param createdAt {Date} 
     * @param diffHunk {String} The diff of the line that the comment refers to.
     * @param htmlUrl {String} HTML URL for the pull request review comment.
     * @param id {Number} The ID of the pull request review comment.
     * @param line {Number} The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     * @param nodeId {String} The node ID of the pull request review comment.
     * @param originalCommitId {String} The SHA of the original commit to which the comment applies.
     * @param originalLine {Number} The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     * @param originalPosition {Number} The index of the original line in the diff to which the comment applies.
     * @param originalStartLine {Number} The first line of the range for a multi-line comment.
     * @param path {String} The relative path of the file to which the comment applies.
     * @param position {Number} The line index in the diff to which the comment applies.
     * @param pullRequestReviewId {Number} The ID of the pull request review to which the comment belongs.
     * @param pullRequestUrl {String} URL for the pull request that the review comment belongs to.
     * @param reactions {module:model/Reactions} 
     * @param side {module:model/PullRequestReviewComment.SideEnum} The side of the first line of the range for a multi-line comment.
     * @param startLine {Number} The first line of the range for a multi-line comment.
     * @param startSide {module:model/PullRequestReviewComment.StartSideEnum} The side of the first line of the range for a multi-line comment.
     * @param updatedAt {Date} 
     * @param url {String} URL for the pull request review comment
     * @param user {module:model/User} 
     */
    constructor(links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, line, nodeId, originalCommitId, originalLine, originalPosition, originalStartLine, path, position, pullRequestReviewId, pullRequestUrl, reactions, side, startLine, startSide, updatedAt, url, user) { 
        
        PullRequestReviewComment.initialize(this, links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, line, nodeId, originalCommitId, originalLine, originalPosition, originalStartLine, path, position, pullRequestReviewId, pullRequestUrl, reactions, side, startLine, startSide, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, line, nodeId, originalCommitId, originalLine, originalPosition, originalStartLine, path, position, pullRequestReviewId, pullRequestUrl, reactions, side, startLine, startSide, updatedAt, url, user) { 
        obj['_links'] = links;
        obj['author_association'] = authorAssociation;
        obj['body'] = body;
        obj['commit_id'] = commitId;
        obj['created_at'] = createdAt;
        obj['diff_hunk'] = diffHunk;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['line'] = line;
        obj['node_id'] = nodeId;
        obj['original_commit_id'] = originalCommitId;
        obj['original_line'] = originalLine;
        obj['original_position'] = originalPosition;
        obj['original_start_line'] = originalStartLine;
        obj['path'] = path;
        obj['position'] = position;
        obj['pull_request_review_id'] = pullRequestReviewId;
        obj['pull_request_url'] = pullRequestUrl;
        obj['reactions'] = reactions;
        obj['side'] = side;
        obj['start_line'] = startLine;
        obj['start_side'] = startSide || 'RIGHT';
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>PullRequestReviewComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewComment} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewComment} The populated <code>PullRequestReviewComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestReviewComment();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = WebhooksReviewCommentLinks.constructFromObject(data['_links']);
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('diff_hunk')) {
                obj['diff_hunk'] = ApiClient.convertToType(data['diff_hunk'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('in_reply_to_id')) {
                obj['in_reply_to_id'] = ApiClient.convertToType(data['in_reply_to_id'], 'Number');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('original_commit_id')) {
                obj['original_commit_id'] = ApiClient.convertToType(data['original_commit_id'], 'String');
            }
            if (data.hasOwnProperty('original_line')) {
                obj['original_line'] = ApiClient.convertToType(data['original_line'], 'Number');
            }
            if (data.hasOwnProperty('original_position')) {
                obj['original_position'] = ApiClient.convertToType(data['original_position'], 'Number');
            }
            if (data.hasOwnProperty('original_start_line')) {
                obj['original_start_line'] = ApiClient.convertToType(data['original_start_line'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('pull_request_review_id')) {
                obj['pull_request_review_id'] = ApiClient.convertToType(data['pull_request_review_id'], 'Number');
            }
            if (data.hasOwnProperty('pull_request_url')) {
                obj['pull_request_url'] = ApiClient.convertToType(data['pull_request_url'], 'String');
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = Reactions.constructFromObject(data['reactions']);
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], 'String');
            }
            if (data.hasOwnProperty('start_line')) {
                obj['start_line'] = ApiClient.convertToType(data['start_line'], 'Number');
            }
            if (data.hasOwnProperty('start_side')) {
                obj['start_side'] = ApiClient.convertToType(data['start_side'], 'String');
            }
            if (data.hasOwnProperty('subject_type')) {
                obj['subject_type'] = ApiClient.convertToType(data['subject_type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PullRequestReviewComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PullRequestReviewComment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PullRequestReviewComment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          WebhooksReviewCommentLinks.validateJSON(data['_links']);
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
        if (data['diff_hunk'] && !(typeof data['diff_hunk'] === 'string' || data['diff_hunk'] instanceof String)) {
            throw new Error("Expected the field `diff_hunk` to be a primitive type in the JSON string but got " + data['diff_hunk']);
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
        if (data['original_commit_id'] && !(typeof data['original_commit_id'] === 'string' || data['original_commit_id'] instanceof String)) {
            throw new Error("Expected the field `original_commit_id` to be a primitive type in the JSON string but got " + data['original_commit_id']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['pull_request_url'] && !(typeof data['pull_request_url'] === 'string' || data['pull_request_url'] instanceof String)) {
            throw new Error("Expected the field `pull_request_url` to be a primitive type in the JSON string but got " + data['pull_request_url']);
        }
        // validate the optional field `reactions`
        if (data['reactions']) { // data not null
          Reactions.validateJSON(data['reactions']);
        }
        // ensure the json data is a string
        if (data['side'] && !(typeof data['side'] === 'string' || data['side'] instanceof String)) {
            throw new Error("Expected the field `side` to be a primitive type in the JSON string but got " + data['side']);
        }
        // ensure the json data is a string
        if (data['start_side'] && !(typeof data['start_side'] === 'string' || data['start_side'] instanceof String)) {
            throw new Error("Expected the field `start_side` to be a primitive type in the JSON string but got " + data['start_side']);
        }
        // ensure the json data is a string
        if (data['subject_type'] && !(typeof data['subject_type'] === 'string' || data['subject_type'] instanceof String)) {
            throw new Error("Expected the field `subject_type` to be a primitive type in the JSON string but got " + data['subject_type']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          User.validateJSON(data['user']);
        }

        return true;
    }


}

PullRequestReviewComment.RequiredProperties = ["_links", "author_association", "body", "commit_id", "created_at", "diff_hunk", "html_url", "id", "line", "node_id", "original_commit_id", "original_line", "original_position", "original_start_line", "path", "position", "pull_request_review_id", "pull_request_url", "reactions", "side", "start_line", "start_side", "updated_at", "url", "user"];

/**
 * @member {module:model/WebhooksReviewCommentLinks} _links
 */
PullRequestReviewComment.prototype['_links'] = undefined;

/**
 * How the author is associated with the repository.
 * @member {module:model/PullRequestReviewComment.AuthorAssociationEnum} author_association
 */
PullRequestReviewComment.prototype['author_association'] = undefined;

/**
 * The text of the comment.
 * @member {String} body
 */
PullRequestReviewComment.prototype['body'] = undefined;

/**
 * The SHA of the commit to which the comment applies.
 * @member {String} commit_id
 */
PullRequestReviewComment.prototype['commit_id'] = undefined;

/**
 * @member {Date} created_at
 */
PullRequestReviewComment.prototype['created_at'] = undefined;

/**
 * The diff of the line that the comment refers to.
 * @member {String} diff_hunk
 */
PullRequestReviewComment.prototype['diff_hunk'] = undefined;

/**
 * HTML URL for the pull request review comment.
 * @member {String} html_url
 */
PullRequestReviewComment.prototype['html_url'] = undefined;

/**
 * The ID of the pull request review comment.
 * @member {Number} id
 */
PullRequestReviewComment.prototype['id'] = undefined;

/**
 * The comment ID to reply to.
 * @member {Number} in_reply_to_id
 */
PullRequestReviewComment.prototype['in_reply_to_id'] = undefined;

/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} line
 */
PullRequestReviewComment.prototype['line'] = undefined;

/**
 * The node ID of the pull request review comment.
 * @member {String} node_id
 */
PullRequestReviewComment.prototype['node_id'] = undefined;

/**
 * The SHA of the original commit to which the comment applies.
 * @member {String} original_commit_id
 */
PullRequestReviewComment.prototype['original_commit_id'] = undefined;

/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} original_line
 */
PullRequestReviewComment.prototype['original_line'] = undefined;

/**
 * The index of the original line in the diff to which the comment applies.
 * @member {Number} original_position
 */
PullRequestReviewComment.prototype['original_position'] = undefined;

/**
 * The first line of the range for a multi-line comment.
 * @member {Number} original_start_line
 */
PullRequestReviewComment.prototype['original_start_line'] = undefined;

/**
 * The relative path of the file to which the comment applies.
 * @member {String} path
 */
PullRequestReviewComment.prototype['path'] = undefined;

/**
 * The line index in the diff to which the comment applies.
 * @member {Number} position
 */
PullRequestReviewComment.prototype['position'] = undefined;

/**
 * The ID of the pull request review to which the comment belongs.
 * @member {Number} pull_request_review_id
 */
PullRequestReviewComment.prototype['pull_request_review_id'] = undefined;

/**
 * URL for the pull request that the review comment belongs to.
 * @member {String} pull_request_url
 */
PullRequestReviewComment.prototype['pull_request_url'] = undefined;

/**
 * @member {module:model/Reactions} reactions
 */
PullRequestReviewComment.prototype['reactions'] = undefined;

/**
 * The side of the first line of the range for a multi-line comment.
 * @member {module:model/PullRequestReviewComment.SideEnum} side
 */
PullRequestReviewComment.prototype['side'] = undefined;

/**
 * The first line of the range for a multi-line comment.
 * @member {Number} start_line
 */
PullRequestReviewComment.prototype['start_line'] = undefined;

/**
 * The side of the first line of the range for a multi-line comment.
 * @member {module:model/PullRequestReviewComment.StartSideEnum} start_side
 * @default 'RIGHT'
 */
PullRequestReviewComment.prototype['start_side'] = 'RIGHT';

/**
 * The level at which the comment is targeted, can be a diff line or a file.
 * @member {module:model/PullRequestReviewComment.SubjectTypeEnum} subject_type
 */
PullRequestReviewComment.prototype['subject_type'] = undefined;

/**
 * @member {Date} updated_at
 */
PullRequestReviewComment.prototype['updated_at'] = undefined;

/**
 * URL for the pull request review comment
 * @member {String} url
 */
PullRequestReviewComment.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
PullRequestReviewComment.prototype['user'] = undefined;





/**
 * Allowed values for the <code>author_association</code> property.
 * @enum {String}
 * @readonly
 */
PullRequestReviewComment['AuthorAssociationEnum'] = {

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
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
PullRequestReviewComment['SideEnum'] = {

    /**
     * value: "LEFT"
     * @const
     */
    "LEFT": "LEFT",

    /**
     * value: "RIGHT"
     * @const
     */
    "RIGHT": "RIGHT"
};


/**
 * Allowed values for the <code>start_side</code> property.
 * @enum {String}
 * @readonly
 */
PullRequestReviewComment['StartSideEnum'] = {

    /**
     * value: "LEFT"
     * @const
     */
    "LEFT": "LEFT",

    /**
     * value: "RIGHT"
     * @const
     */
    "RIGHT": "RIGHT",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */
PullRequestReviewComment['SubjectTypeEnum'] = {

    /**
     * value: "line"
     * @const
     */
    "line": "line",

    /**
     * value: "file"
     * @const
     */
    "file": "file"
};



export default PullRequestReviewComment;

