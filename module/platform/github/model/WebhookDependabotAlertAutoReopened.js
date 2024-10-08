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
import DependabotAlert from './DependabotAlert';
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookDependabotAlertAutoReopened model module.
 * @module model/WebhookDependabotAlertAutoReopened
 * @version 1.1.4
 */
class WebhookDependabotAlertAutoReopened {
    /**
     * Constructs a new <code>WebhookDependabotAlertAutoReopened</code>.
     * @alias module:model/WebhookDependabotAlertAutoReopened
     * @param action {module:model/WebhookDependabotAlertAutoReopened.ActionEnum} 
     * @param alert {module:model/DependabotAlert} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, alert, repository, sender) { 
        
        WebhookDependabotAlertAutoReopened.initialize(this, action, alert, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, alert, repository, sender) { 
        obj['action'] = action;
        obj['alert'] = alert;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookDependabotAlertAutoReopened</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDependabotAlertAutoReopened} obj Optional instance to populate.
     * @return {module:model/WebhookDependabotAlertAutoReopened} The populated <code>WebhookDependabotAlertAutoReopened</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDependabotAlertAutoReopened();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('alert')) {
                obj['alert'] = DependabotAlert.constructFromObject(data['alert']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
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
     * Validates the JSON data with respect to <code>WebhookDependabotAlertAutoReopened</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookDependabotAlertAutoReopened</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookDependabotAlertAutoReopened.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `alert`
        if (data['alert']) { // data not null
          DependabotAlert.validateJSON(data['alert']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
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

WebhookDependabotAlertAutoReopened.RequiredProperties = ["action", "alert", "repository", "sender"];

/**
 * @member {module:model/WebhookDependabotAlertAutoReopened.ActionEnum} action
 */
WebhookDependabotAlertAutoReopened.prototype['action'] = undefined;

/**
 * @member {module:model/DependabotAlert} alert
 */
WebhookDependabotAlertAutoReopened.prototype['alert'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookDependabotAlertAutoReopened.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookDependabotAlertAutoReopened.prototype['organization'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookDependabotAlertAutoReopened.prototype['enterprise'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookDependabotAlertAutoReopened.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookDependabotAlertAutoReopened.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookDependabotAlertAutoReopened['ActionEnum'] = {

    /**
     * value: "auto_reopened"
     * @const
     */
    "auto_reopened": "auto_reopened"
};



export default WebhookDependabotAlertAutoReopened;

