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
 * The ReactionsCreateForReleaseRequest model module.
 * @module model/ReactionsCreateForReleaseRequest
 * @version 1.1.4
 */
class ReactionsCreateForReleaseRequest {
    /**
     * Constructs a new <code>ReactionsCreateForReleaseRequest</code>.
     * @alias module:model/ReactionsCreateForReleaseRequest
     * @param content {module:model/ReactionsCreateForReleaseRequest.ContentEnum} The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the release.
     */
    constructor(content) { 
        
        ReactionsCreateForReleaseRequest.initialize(this, content);
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
     * Constructs a <code>ReactionsCreateForReleaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactionsCreateForReleaseRequest} obj Optional instance to populate.
     * @return {module:model/ReactionsCreateForReleaseRequest} The populated <code>ReactionsCreateForReleaseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReactionsCreateForReleaseRequest();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReactionsCreateForReleaseRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReactionsCreateForReleaseRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReactionsCreateForReleaseRequest.RequiredProperties) {
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

ReactionsCreateForReleaseRequest.RequiredProperties = ["content"];

/**
 * The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the release.
 * @member {module:model/ReactionsCreateForReleaseRequest.ContentEnum} content
 */
ReactionsCreateForReleaseRequest.prototype['content'] = undefined;





/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
ReactionsCreateForReleaseRequest['ContentEnum'] = {

    /**
     * value: "+1"
     * @const
     */
    "+1": "+1",

    /**
     * value: "laugh"
     * @const
     */
    "laugh": "laugh",

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



export default ReactionsCreateForReleaseRequest;

