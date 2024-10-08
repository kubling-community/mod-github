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
 * The ReactionsCreateForCommitCommentRequest model module.
 * @module model/ReactionsCreateForCommitCommentRequest
 * @version 1.1.4
 */
class ReactionsCreateForCommitCommentRequest {
    /**
     * Constructs a new <code>ReactionsCreateForCommitCommentRequest</code>.
     * @alias module:model/ReactionsCreateForCommitCommentRequest
     * @param content {module:model/ReactionsCreateForCommitCommentRequest.ContentEnum} The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the commit comment.
     */
    constructor(content) { 
        
        ReactionsCreateForCommitCommentRequest.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>ReactionsCreateForCommitCommentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactionsCreateForCommitCommentRequest} obj Optional instance to populate.
     * @return {module:model/ReactionsCreateForCommitCommentRequest} The populated <code>ReactionsCreateForCommitCommentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReactionsCreateForCommitCommentRequest();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReactionsCreateForCommitCommentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReactionsCreateForCommitCommentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReactionsCreateForCommitCommentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }

        return true;
    }


}

ReactionsCreateForCommitCommentRequest.RequiredProperties = ["content"];

/**
 * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the commit comment.
 * @member {module:model/ReactionsCreateForCommitCommentRequest.ContentEnum} content
 */
ReactionsCreateForCommitCommentRequest.prototype['content'] = undefined;





/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
ReactionsCreateForCommitCommentRequest['ContentEnum'] = {

    /**
     * value: "+1"
     * @const
     */
    "+1": "+1",

    /**
     * value: "-1"
     * @const
     */
    "-1": "-1",

    /**
     * value: "laugh"
     * @const
     */
    "laugh": "laugh",

    /**
     * value: "confused"
     * @const
     */
    "confused": "confused",

    /**
     * value: "heart"
     * @const
     */
    "heart": "heart",

    /**
     * value: "hooray"
     * @const
     */
    "hooray": "hooray",

    /**
     * value: "rocket"
     * @const
     */
    "rocket": "rocket",

    /**
     * value: "eyes"
     * @const
     */
    "eyes": "eyes"
};



export default ReactionsCreateForCommitCommentRequest;

