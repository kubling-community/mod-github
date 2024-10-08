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
 * The SecretScanningLocationDiscussionComment model module.
 * @module model/SecretScanningLocationDiscussionComment
 * @version 1.1.4
 */
class SecretScanningLocationDiscussionComment {
    /**
     * Constructs a new <code>SecretScanningLocationDiscussionComment</code>.
     * Represents a &#39;discussion_comment&#39; secret scanning location type. This location type shows that a secret was detected in a comment on a discussion.
     * @alias module:model/SecretScanningLocationDiscussionComment
     * @param discussionCommentUrl {String} The API URL to get the discussion comment where the secret was detected.
     */
    constructor(discussionCommentUrl) { 
        
        SecretScanningLocationDiscussionComment.initialize(this, discussionCommentUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, discussionCommentUrl) { 
        obj['discussion_comment_url'] = discussionCommentUrl;
    }

    /**
     * Constructs a <code>SecretScanningLocationDiscussionComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretScanningLocationDiscussionComment} obj Optional instance to populate.
     * @return {module:model/SecretScanningLocationDiscussionComment} The populated <code>SecretScanningLocationDiscussionComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretScanningLocationDiscussionComment();

            if (data.hasOwnProperty('discussion_comment_url')) {
                obj['discussion_comment_url'] = ApiClient.convertToType(data['discussion_comment_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretScanningLocationDiscussionComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretScanningLocationDiscussionComment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecretScanningLocationDiscussionComment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['discussion_comment_url'] && !(typeof data['discussion_comment_url'] === 'string' || data['discussion_comment_url'] instanceof String)) {
            throw new Error("Expected the field `discussion_comment_url` to be a primitive type in the JSON string but got " + data['discussion_comment_url']);
        }

        return true;
    }


}

SecretScanningLocationDiscussionComment.RequiredProperties = ["discussion_comment_url"];

/**
 * The API URL to get the discussion comment where the secret was detected.
 * @member {String} discussion_comment_url
 */
SecretScanningLocationDiscussionComment.prototype['discussion_comment_url'] = undefined;






export default SecretScanningLocationDiscussionComment;

