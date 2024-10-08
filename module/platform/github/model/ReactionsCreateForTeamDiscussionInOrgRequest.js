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
 * The ReactionsCreateForTeamDiscussionInOrgRequest model module.
 * @module model/ReactionsCreateForTeamDiscussionInOrgRequest
 * @version 1.1.4
 */
class ReactionsCreateForTeamDiscussionInOrgRequest {
    /**
     * Constructs a new <code>ReactionsCreateForTeamDiscussionInOrgRequest</code>.
     * @alias module:model/ReactionsCreateForTeamDiscussionInOrgRequest
     * @param content {module:model/ReactionsCreateForTeamDiscussionInOrgRequest.ContentEnum} The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.
     */
    constructor(content) { 
        
        ReactionsCreateForTeamDiscussionInOrgRequest.initialize(this, content);
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
     * Constructs a <code>ReactionsCreateForTeamDiscussionInOrgRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactionsCreateForTeamDiscussionInOrgRequest} obj Optional instance to populate.
     * @return {module:model/ReactionsCreateForTeamDiscussionInOrgRequest} The populated <code>ReactionsCreateForTeamDiscussionInOrgRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReactionsCreateForTeamDiscussionInOrgRequest();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReactionsCreateForTeamDiscussionInOrgRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReactionsCreateForTeamDiscussionInOrgRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReactionsCreateForTeamDiscussionInOrgRequest.RequiredProperties) {
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

ReactionsCreateForTeamDiscussionInOrgRequest.RequiredProperties = ["content"];

/**
 * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.
 * @member {module:model/ReactionsCreateForTeamDiscussionInOrgRequest.ContentEnum} content
 */
ReactionsCreateForTeamDiscussionInOrgRequest.prototype['content'] = undefined;





/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
ReactionsCreateForTeamDiscussionInOrgRequest['ContentEnum'] = {

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



export default ReactionsCreateForTeamDiscussionInOrgRequest;

