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
import WebhookConfigInsecureSsl from './WebhookConfigInsecureSsl';

/**
 * The ReposCreateWebhookRequestConfig model module.
 * @module model/ReposCreateWebhookRequestConfig
 * @version 1.1.4
 */
class ReposCreateWebhookRequestConfig {
    /**
     * Constructs a new <code>ReposCreateWebhookRequestConfig</code>.
     * Key/value pairs to provide settings for this webhook.
     * @alias module:model/ReposCreateWebhookRequestConfig
     */
    constructor() { 
        
        ReposCreateWebhookRequestConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposCreateWebhookRequestConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateWebhookRequestConfig} obj Optional instance to populate.
     * @return {module:model/ReposCreateWebhookRequestConfig} The populated <code>ReposCreateWebhookRequestConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateWebhookRequestConfig();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('insecure_ssl')) {
                obj['insecure_ssl'] = WebhookConfigInsecureSsl.constructFromObject(data['insecure_ssl']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateWebhookRequestConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateWebhookRequestConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['content_type'] && !(typeof data['content_type'] === 'string' || data['content_type'] instanceof String)) {
            throw new Error("Expected the field `content_type` to be a primitive type in the JSON string but got " + data['content_type']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // validate the optional field `insecure_ssl`
        if (data['insecure_ssl']) { // data not null
          WebhookConfigInsecureSsl.validateJSON(data['insecure_ssl']);
        }

        return true;
    }


}



/**
 * The URL to which the payloads will be delivered.
 * @member {String} url
 */
ReposCreateWebhookRequestConfig.prototype['url'] = undefined;

/**
 * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @member {String} content_type
 */
ReposCreateWebhookRequestConfig.prototype['content_type'] = undefined;

/**
 * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
 * @member {String} secret
 */
ReposCreateWebhookRequestConfig.prototype['secret'] = undefined;

/**
 * @member {module:model/WebhookConfigInsecureSsl} insecure_ssl
 */
ReposCreateWebhookRequestConfig.prototype['insecure_ssl'] = undefined;






export default ReposCreateWebhookRequestConfig;

