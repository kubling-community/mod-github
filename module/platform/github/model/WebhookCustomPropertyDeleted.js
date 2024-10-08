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
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhookCustomPropertyDeletedDefinition from './WebhookCustomPropertyDeletedDefinition';

/**
 * The WebhookCustomPropertyDeleted model module.
 * @module model/WebhookCustomPropertyDeleted
 * @version 1.1.4
 */
class WebhookCustomPropertyDeleted {
    /**
     * Constructs a new <code>WebhookCustomPropertyDeleted</code>.
     * @alias module:model/WebhookCustomPropertyDeleted
     * @param action {module:model/WebhookCustomPropertyDeleted.ActionEnum} 
     * @param definition {module:model/WebhookCustomPropertyDeletedDefinition} 
     * @param organization {module:model/OrganizationSimpleWebhooks} 
     */
    constructor(action, definition, organization) { 
        
        WebhookCustomPropertyDeleted.initialize(this, action, definition, organization);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, definition, organization) { 
        obj['action'] = action;
        obj['definition'] = definition;
        obj['organization'] = organization;
    }

    /**
     * Constructs a <code>WebhookCustomPropertyDeleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookCustomPropertyDeleted} obj Optional instance to populate.
     * @return {module:model/WebhookCustomPropertyDeleted} The populated <code>WebhookCustomPropertyDeleted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookCustomPropertyDeleted();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('definition')) {
                obj['definition'] = WebhookCustomPropertyDeletedDefinition.constructFromObject(data['definition']);
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookCustomPropertyDeleted</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookCustomPropertyDeleted</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookCustomPropertyDeleted.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `definition`
        if (data['definition']) { // data not null
          WebhookCustomPropertyDeletedDefinition.validateJSON(data['definition']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}

WebhookCustomPropertyDeleted.RequiredProperties = ["action", "definition", "organization"];

/**
 * @member {module:model/WebhookCustomPropertyDeleted.ActionEnum} action
 */
WebhookCustomPropertyDeleted.prototype['action'] = undefined;

/**
 * @member {module:model/WebhookCustomPropertyDeletedDefinition} definition
 */
WebhookCustomPropertyDeleted.prototype['definition'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookCustomPropertyDeleted.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookCustomPropertyDeleted.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookCustomPropertyDeleted.prototype['organization'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookCustomPropertyDeleted.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookCustomPropertyDeleted['ActionEnum'] = {

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"
};



export default WebhookCustomPropertyDeleted;

