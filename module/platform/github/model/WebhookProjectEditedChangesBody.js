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
 * The WebhookProjectEditedChangesBody model module.
 * @module model/WebhookProjectEditedChangesBody
 * @version 1.1.4
 */
class WebhookProjectEditedChangesBody {
    /**
     * Constructs a new <code>WebhookProjectEditedChangesBody</code>.
     * @alias module:model/WebhookProjectEditedChangesBody
     * @param from {String} The previous version of the body if the action was `edited`.
     */
    constructor(from) { 
        
        WebhookProjectEditedChangesBody.initialize(this, from);
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
     * Constructs a <code>WebhookProjectEditedChangesBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectEditedChangesBody} obj Optional instance to populate.
     * @return {module:model/WebhookProjectEditedChangesBody} The populated <code>WebhookProjectEditedChangesBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectEditedChangesBody();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectEditedChangesBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectEditedChangesBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookProjectEditedChangesBody.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }

        return true;
    }


}

WebhookProjectEditedChangesBody.RequiredProperties = ["from"];

/**
 * The previous version of the body if the action was `edited`.
 * @member {String} from
 */
WebhookProjectEditedChangesBody.prototype['from'] = undefined;






export default WebhookProjectEditedChangesBody;

