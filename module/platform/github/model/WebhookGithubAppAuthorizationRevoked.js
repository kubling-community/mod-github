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
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookGithubAppAuthorizationRevoked model module.
 * @module model/WebhookGithubAppAuthorizationRevoked
 * @version 1.1.4
 */
class WebhookGithubAppAuthorizationRevoked {
    /**
     * Constructs a new <code>WebhookGithubAppAuthorizationRevoked</code>.
     * @alias module:model/WebhookGithubAppAuthorizationRevoked
     * @param action {module:model/WebhookGithubAppAuthorizationRevoked.ActionEnum} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, sender) { 
        
        WebhookGithubAppAuthorizationRevoked.initialize(this, action, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, sender) { 
        obj['action'] = action;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookGithubAppAuthorizationRevoked</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookGithubAppAuthorizationRevoked} obj Optional instance to populate.
     * @return {module:model/WebhookGithubAppAuthorizationRevoked} The populated <code>WebhookGithubAppAuthorizationRevoked</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGithubAppAuthorizationRevoked();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookGithubAppAuthorizationRevoked</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookGithubAppAuthorizationRevoked</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookGithubAppAuthorizationRevoked.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}

WebhookGithubAppAuthorizationRevoked.RequiredProperties = ["action", "sender"];

/**
 * @member {module:model/WebhookGithubAppAuthorizationRevoked.ActionEnum} action
 */
WebhookGithubAppAuthorizationRevoked.prototype['action'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookGithubAppAuthorizationRevoked.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookGithubAppAuthorizationRevoked['ActionEnum'] = {

    /**
     * value: "revoked"
     * @const
     */
    "revoked": "revoked"
};



export default WebhookGithubAppAuthorizationRevoked;

