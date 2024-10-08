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
import WebhookConfig from './WebhookConfig';

/**
 * The ReposUpdateWebhookRequest model module.
 * @module model/ReposUpdateWebhookRequest
 * @version 1.1.4
 */
class ReposUpdateWebhookRequest {
    /**
     * Constructs a new <code>ReposUpdateWebhookRequest</code>.
     * @alias module:model/ReposUpdateWebhookRequest
     */
    constructor() { 
        
        ReposUpdateWebhookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposUpdateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposUpdateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/ReposUpdateWebhookRequest} The populated <code>ReposUpdateWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposUpdateWebhookRequest();

            if (data.hasOwnProperty('config')) {
                obj['config'] = WebhookConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('add_events')) {
                obj['add_events'] = ApiClient.convertToType(data['add_events'], ['String']);
            }
            if (data.hasOwnProperty('remove_events')) {
                obj['remove_events'] = ApiClient.convertToType(data['remove_events'], ['String']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposUpdateWebhookRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposUpdateWebhookRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `config`
        if (data['config']) { // data not null
          WebhookConfig.validateJSON(data['config']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['events'])) {
            throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['add_events'])) {
            throw new Error("Expected the field `add_events` to be an array in the JSON data but got " + data['add_events']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['remove_events'])) {
            throw new Error("Expected the field `remove_events` to be an array in the JSON data but got " + data['remove_events']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookConfig} config
 */
ReposUpdateWebhookRequest.prototype['config'] = undefined;

/**
 * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
 * @member {Array.<String>} events
 */
ReposUpdateWebhookRequest.prototype['events'] = undefined;

/**
 * Determines a list of events to be added to the list of events that the Hook triggers for.
 * @member {Array.<String>} add_events
 */
ReposUpdateWebhookRequest.prototype['add_events'] = undefined;

/**
 * Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @member {Array.<String>} remove_events
 */
ReposUpdateWebhookRequest.prototype['remove_events'] = undefined;

/**
 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @member {Boolean} active
 * @default true
 */
ReposUpdateWebhookRequest.prototype['active'] = true;






export default ReposUpdateWebhookRequest;

