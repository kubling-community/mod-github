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
import WebhooksChangesBody from './WebhooksChangesBody';

/**
 * The WebhooksChanges model module.
 * @module model/WebhooksChanges
 * @version 1.1.4
 */
class WebhooksChanges {
    /**
     * Constructs a new <code>WebhooksChanges</code>.
     * The changes to the comment.
     * @alias module:model/WebhooksChanges
     */
    constructor() { 
        
        WebhooksChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksChanges} obj Optional instance to populate.
     * @return {module:model/WebhooksChanges} The populated <code>WebhooksChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksChanges();

            if (data.hasOwnProperty('body')) {
                obj['body'] = WebhooksChangesBody.constructFromObject(data['body']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksChanges</code>.
     */
    static validateJSON(data) {
        // validate the optional field `body`
        if (data['body']) { // data not null
          WebhooksChangesBody.validateJSON(data['body']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhooksChangesBody} body
 */
WebhooksChanges.prototype['body'] = undefined;






export default WebhooksChanges;

