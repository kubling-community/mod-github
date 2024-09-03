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
 * The WebhookCheckRunCreatedFormEncoded model module.
 * @module model/WebhookCheckRunCreatedFormEncoded
 * @version 1.1.4
 */
class WebhookCheckRunCreatedFormEncoded {
    /**
     * Constructs a new <code>WebhookCheckRunCreatedFormEncoded</code>.
     * The check_run.created webhook encoded with URL encoding
     * @alias module:model/WebhookCheckRunCreatedFormEncoded
     * @param payload {String} A URL-encoded string of the check_run.created JSON payload. The decoded payload is a JSON object.
     */
    constructor(payload) { 
        
        WebhookCheckRunCreatedFormEncoded.initialize(this, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payload) { 
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>WebhookCheckRunCreatedFormEncoded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookCheckRunCreatedFormEncoded} obj Optional instance to populate.
     * @return {module:model/WebhookCheckRunCreatedFormEncoded} The populated <code>WebhookCheckRunCreatedFormEncoded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookCheckRunCreatedFormEncoded();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookCheckRunCreatedFormEncoded</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookCheckRunCreatedFormEncoded</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookCheckRunCreatedFormEncoded.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['payload'] && !(typeof data['payload'] === 'string' || data['payload'] instanceof String)) {
            throw new Error("Expected the field `payload` to be a primitive type in the JSON string but got " + data['payload']);
        }

        return true;
    }


}

WebhookCheckRunCreatedFormEncoded.RequiredProperties = ["payload"];

/**
 * A URL-encoded string of the check_run.created JSON payload. The decoded payload is a JSON object.
 * @member {String} payload
 */
WebhookCheckRunCreatedFormEncoded.prototype['payload'] = undefined;






export default WebhookCheckRunCreatedFormEncoded;

