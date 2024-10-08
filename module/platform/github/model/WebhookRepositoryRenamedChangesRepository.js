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
 * The WebhookRepositoryRenamedChangesRepository model module.
 * @module model/WebhookRepositoryRenamedChangesRepository
 * @version 1.1.4
 */
class WebhookRepositoryRenamedChangesRepository {
    /**
     * Constructs a new <code>WebhookRepositoryRenamedChangesRepository</code>.
     * @alias module:model/WebhookRepositoryRenamedChangesRepository
     * @param name {module:model/WebhookDiscussionCommentEditedChangesBody} 
     */
    constructor(name) { 
        
        WebhookRepositoryRenamedChangesRepository.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WebhookRepositoryRenamedChangesRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRepositoryRenamedChangesRepository} obj Optional instance to populate.
     * @return {module:model/WebhookRepositoryRenamedChangesRepository} The populated <code>WebhookRepositoryRenamedChangesRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRepositoryRenamedChangesRepository();

            if (data.hasOwnProperty('name')) {
                obj['name'] = WebhookDiscussionCommentEditedChangesBody.constructFromObject(data['name']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRepositoryRenamedChangesRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRepositoryRenamedChangesRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookRepositoryRenamedChangesRepository.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          WebhookDiscussionCommentEditedChangesBody.validateJSON(data['name']);
        }

        return true;
    }


}

WebhookRepositoryRenamedChangesRepository.RequiredProperties = ["name"];

/**
 * @member {module:model/WebhookDiscussionCommentEditedChangesBody} name
 */
WebhookRepositoryRenamedChangesRepository.prototype['name'] = undefined;






export default WebhookRepositoryRenamedChangesRepository;

