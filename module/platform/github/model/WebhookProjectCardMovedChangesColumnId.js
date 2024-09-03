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
 * The WebhookProjectCardMovedChangesColumnId model module.
 * @module model/WebhookProjectCardMovedChangesColumnId
 * @version 1.1.4
 */
class WebhookProjectCardMovedChangesColumnId {
    /**
     * Constructs a new <code>WebhookProjectCardMovedChangesColumnId</code>.
     * @alias module:model/WebhookProjectCardMovedChangesColumnId
     * @param from {Number} 
     */
    constructor(from) { 
        
        WebhookProjectCardMovedChangesColumnId.initialize(this, from);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from) { 
        obj['from'] = from;
    }

    /**
     * Constructs a <code>WebhookProjectCardMovedChangesColumnId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectCardMovedChangesColumnId} obj Optional instance to populate.
     * @return {module:model/WebhookProjectCardMovedChangesColumnId} The populated <code>WebhookProjectCardMovedChangesColumnId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectCardMovedChangesColumnId();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectCardMovedChangesColumnId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectCardMovedChangesColumnId</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookProjectCardMovedChangesColumnId.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

WebhookProjectCardMovedChangesColumnId.RequiredProperties = ["from"];

/**
 * @member {Number} from
 */
WebhookProjectCardMovedChangesColumnId.prototype['from'] = undefined;






export default WebhookProjectCardMovedChangesColumnId;

