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
 * The IssuesUpdateCommentRequest model module.
 * @module model/IssuesUpdateCommentRequest
 * @version 1.1.4
 */
class IssuesUpdateCommentRequest {
    /**
     * Constructs a new <code>IssuesUpdateCommentRequest</code>.
     * @alias module:model/IssuesUpdateCommentRequest
     * @param body {String} The contents of the comment.
     */
    constructor(body) { 
        
        IssuesUpdateCommentRequest.initialize(this, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body) { 
        obj['body'] = body;
    }

    /**
     * Constructs a <code>IssuesUpdateCommentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesUpdateCommentRequest} obj Optional instance to populate.
     * @return {module:model/IssuesUpdateCommentRequest} The populated <code>IssuesUpdateCommentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuesUpdateCommentRequest();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssuesUpdateCommentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuesUpdateCommentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssuesUpdateCommentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }

        return true;
    }


}

IssuesUpdateCommentRequest.RequiredProperties = ["body"];

/**
 * The contents of the comment.
 * @member {String} body
 */
IssuesUpdateCommentRequest.prototype['body'] = undefined;






export default IssuesUpdateCommentRequest;

