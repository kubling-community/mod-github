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
 * The TeamsUpdateDiscussionInOrgRequest model module.
 * @module model/TeamsUpdateDiscussionInOrgRequest
 * @version 1.1.4
 */
class TeamsUpdateDiscussionInOrgRequest {
    /**
     * Constructs a new <code>TeamsUpdateDiscussionInOrgRequest</code>.
     * @alias module:model/TeamsUpdateDiscussionInOrgRequest
     */
    constructor() { 
        
        TeamsUpdateDiscussionInOrgRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamsUpdateDiscussionInOrgRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamsUpdateDiscussionInOrgRequest} obj Optional instance to populate.
     * @return {module:model/TeamsUpdateDiscussionInOrgRequest} The populated <code>TeamsUpdateDiscussionInOrgRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamsUpdateDiscussionInOrgRequest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamsUpdateDiscussionInOrgRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamsUpdateDiscussionInOrgRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }

        return true;
    }


}



/**
 * The discussion post's title.
 * @member {String} title
 */
TeamsUpdateDiscussionInOrgRequest.prototype['title'] = undefined;

/**
 * The discussion post's body text.
 * @member {String} body
 */
TeamsUpdateDiscussionInOrgRequest.prototype['body'] = undefined;






export default TeamsUpdateDiscussionInOrgRequest;

