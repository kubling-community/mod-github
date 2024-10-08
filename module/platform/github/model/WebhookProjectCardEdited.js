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
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhookProjectCardEditedChanges from './WebhookProjectCardEditedChanges';
import WebhooksProjectCard from './WebhooksProjectCard';

/**
 * The WebhookProjectCardEdited model module.
 * @module model/WebhookProjectCardEdited
 * @version 1.1.4
 */
class WebhookProjectCardEdited {
    /**
     * Constructs a new <code>WebhookProjectCardEdited</code>.
     * @alias module:model/WebhookProjectCardEdited
     * @param action {module:model/WebhookProjectCardEdited.ActionEnum} 
     * @param changes {module:model/WebhookProjectCardEditedChanges} 
     * @param projectCard {module:model/WebhooksProjectCard} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, changes, projectCard, sender) { 
        
        WebhookProjectCardEdited.initialize(this, action, changes, projectCard, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, changes, projectCard, sender) { 
        obj['action'] = action;
        obj['changes'] = changes;
        obj['project_card'] = projectCard;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookProjectCardEdited</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectCardEdited} obj Optional instance to populate.
     * @return {module:model/WebhookProjectCardEdited} The populated <code>WebhookProjectCardEdited</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectCardEdited();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = WebhookProjectCardEditedChanges.constructFromObject(data['changes']);
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
            if (data.hasOwnProperty('project_card')) {
                obj['project_card'] = WebhooksProjectCard.constructFromObject(data['project_card']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectCardEdited</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectCardEdited</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookProjectCardEdited.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `changes`
        if (data['changes']) { // data not null
          WebhookProjectCardEditedChanges.validateJSON(data['changes']);
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
        // validate the optional field `project_card`
        if (data['project_card']) { // data not null
          WebhooksProjectCard.validateJSON(data['project_card']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          RepositoryWebhooks.validateJSON(data['repository']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}

WebhookProjectCardEdited.RequiredProperties = ["action", "changes", "project_card", "sender"];

/**
 * @member {module:model/WebhookProjectCardEdited.ActionEnum} action
 */
WebhookProjectCardEdited.prototype['action'] = undefined;

/**
 * @member {module:model/WebhookProjectCardEditedChanges} changes
 */
WebhookProjectCardEdited.prototype['changes'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookProjectCardEdited.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookProjectCardEdited.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookProjectCardEdited.prototype['organization'] = undefined;

/**
 * @member {module:model/WebhooksProjectCard} project_card
 */
WebhookProjectCardEdited.prototype['project_card'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookProjectCardEdited.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookProjectCardEdited.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookProjectCardEdited['ActionEnum'] = {

    /**
     * value: "edited"
     * @const
     */
    "edited": "edited"
};



export default WebhookProjectCardEdited;

