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
import WebhookDiscussionCommentEditedChangesBody from './WebhookDiscussionCommentEditedChangesBody';

/**
 * The WebhookDiscussionCommentEditedChanges model module.
 * @module model/WebhookDiscussionCommentEditedChanges
 * @version 1.1.4
 */
class WebhookDiscussionCommentEditedChanges {
    /**
     * Constructs a new <code>WebhookDiscussionCommentEditedChanges</code>.
     * @alias module:model/WebhookDiscussionCommentEditedChanges
     * @param body {module:model/WebhookDiscussionCommentEditedChangesBody} 
     */
    constructor(body) { 
        
        WebhookDiscussionCommentEditedChanges.initialize(this, body);
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
     * Constructs a <code>WebhookDiscussionCommentEditedChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDiscussionCommentEditedChanges} obj Optional instance to populate.
     * @return {module:model/WebhookDiscussionCommentEditedChanges} The populated <code>WebhookDiscussionCommentEditedChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDiscussionCommentEditedChanges();

            if (data.hasOwnProperty('body')) {
                obj['body'] = WebhookDiscussionCommentEditedChangesBody.constructFromObject(data['body']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookDiscussionCommentEditedChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookDiscussionCommentEditedChanges</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookDiscussionCommentEditedChanges.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `body`
        if (data['body']) { // data not null
          WebhookDiscussionCommentEditedChangesBody.validateJSON(data['body']);
        }

        return true;
    }


}

WebhookDiscussionCommentEditedChanges.RequiredProperties = ["body"];

/**
 * @member {module:model/WebhookDiscussionCommentEditedChangesBody} body
 */
WebhookDiscussionCommentEditedChanges.prototype['body'] = undefined;






export default WebhookDiscussionCommentEditedChanges;

