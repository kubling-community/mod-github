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
import WebhookProjectEditedChangesBody from './WebhookProjectEditedChangesBody';
import WebhookProjectEditedChangesName from './WebhookProjectEditedChangesName';

/**
 * The WebhookProjectEditedChanges model module.
 * @module model/WebhookProjectEditedChanges
 * @version 1.1.4
 */
class WebhookProjectEditedChanges {
    /**
     * Constructs a new <code>WebhookProjectEditedChanges</code>.
     * The changes to the project if the action was &#x60;edited&#x60;.
     * @alias module:model/WebhookProjectEditedChanges
     */
    constructor() { 
        
        WebhookProjectEditedChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookProjectEditedChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectEditedChanges} obj Optional instance to populate.
     * @return {module:model/WebhookProjectEditedChanges} The populated <code>WebhookProjectEditedChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectEditedChanges();

            if (data.hasOwnProperty('body')) {
                obj['body'] = WebhookProjectEditedChangesBody.constructFromObject(data['body']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = WebhookProjectEditedChangesName.constructFromObject(data['name']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectEditedChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectEditedChanges</code>.
     */
    static validateJSON(data) {
        // validate the optional field `body`
        if (data['body']) { // data not null
          WebhookProjectEditedChangesBody.validateJSON(data['body']);
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          WebhookProjectEditedChangesName.validateJSON(data['name']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookProjectEditedChangesBody} body
 */
WebhookProjectEditedChanges.prototype['body'] = undefined;

/**
 * @member {module:model/WebhookProjectEditedChangesName} name
 */
WebhookProjectEditedChanges.prototype['name'] = undefined;






export default WebhookProjectEditedChanges;

