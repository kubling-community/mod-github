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

/**
 * The PullsCreateReviewCommentRequest model module.
 * @module model/PullsCreateReviewCommentRequest
 * @version 1.1.4
 */
class PullsCreateReviewCommentRequest {
    /**
     * Constructs a new <code>PullsCreateReviewCommentRequest</code>.
     * @alias module:model/PullsCreateReviewCommentRequest
     * @param body {String} The text of the review comment.
     * @param commitId {String} The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
     * @param path {String} The relative path to the file that necessitates a comment.
     */
    constructor(body, commitId, path) { 
        
        PullsCreateReviewCommentRequest.initialize(this, body, commitId, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, commitId, path) { 
        obj['body'] = body;
        obj['commit_id'] = commitId;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>PullsCreateReviewCommentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsCreateReviewCommentRequest} obj Optional instance to populate.
     * @return {module:model/PullsCreateReviewCommentRequest} The populated <code>PullsCreateReviewCommentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullsCreateReviewCommentRequest();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('start_line')) {
                obj['start_line'] = ApiClient.convertToType(data['start_line'], 'Number');
            }
            if (data.hasOwnProperty('start_side')) {
                obj['start_side'] = ApiClient.convertToType(data['start_side'], 'String');
            }
            if (data.hasOwnProperty('in_reply_to')) {
                obj['in_reply_to'] = ApiClient.convertToType(data['in_reply_to'], 'Number');
            }
            if (data.hasOwnProperty('subject_type')) {
                obj['subject_type'] = ApiClient.convertToType(data['subject_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PullsCreateReviewCommentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PullsCreateReviewCommentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PullsCreateReviewCommentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
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

        return true;
    }


}

PullsCreateReviewCommentRequest.RequiredProperties = ["body", "commit_id", "path"];

/**
 * The text of the review comment.
 * @member {String} body
 */
PullsCreateReviewCommentRequest.prototype['body'] = undefined;

/**
 * The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
 * @member {String} commit_id
 */
PullsCreateReviewCommentRequest.prototype['commit_id'] = undefined;

/**
 * The relative path to the file that necessitates a comment.
 * @member {String} path
 */
PullsCreateReviewCommentRequest.prototype['path'] = undefined;

/**
 * **This parameter is deprecated. Use `line` instead**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. The position value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
 * @member {Number} position
 */
PullsCreateReviewCommentRequest.prototype['position'] = undefined;

/**
 * In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see \"[Diff view options](https://docs.github.com/articles/about-comparing-branches-in-pull-requests#diff-view-options)\" in the GitHub Help documentation.
 * @member {module:model/PullsCreateReviewCommentRequest.SideEnum} side
 */
PullsCreateReviewCommentRequest.prototype['side'] = undefined;

/**
 * **Required unless using `subject_type:file`**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
 * @member {Number} line
 */
PullsCreateReviewCommentRequest.prototype['line'] = undefined;

/**
 * **Required when using multi-line comments unless using `in_reply_to`**. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see \"[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation.
 * @member {Number} start_line
 */
PullsCreateReviewCommentRequest.prototype['start_line'] = undefined;

/**
 * **Required when using multi-line comments unless using `in_reply_to`**. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see \"[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation. See `side` in this table for additional context.
 * @member {module:model/PullsCreateReviewCommentRequest.StartSideEnum} start_side
 */
PullsCreateReviewCommentRequest.prototype['start_side'] = undefined;

/**
 * The ID of the review comment to reply to. To find the ID of a review comment with [\"List review comments on a pull request\"](#list-review-comments-on-a-pull-request). When specified, all parameters other than `body` in the request body are ignored.
 * @member {Number} in_reply_to
 */
PullsCreateReviewCommentRequest.prototype['in_reply_to'] = undefined;

/**
 * The level at which the comment is targeted.
 * @member {module:model/PullsCreateReviewCommentRequest.SubjectTypeEnum} subject_type
 */
PullsCreateReviewCommentRequest.prototype['subject_type'] = undefined;





/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
PullsCreateReviewCommentRequest['SideEnum'] = {

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
PullsCreateReviewCommentRequest['StartSideEnum'] = {

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
     * value: "side"
     * @const
     */
    "side": "side"
};


/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */
PullsCreateReviewCommentRequest['SubjectTypeEnum'] = {

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



export default PullsCreateReviewCommentRequest;

