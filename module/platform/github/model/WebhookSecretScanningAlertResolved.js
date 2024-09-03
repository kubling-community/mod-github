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
import SecretScanningAlertWebhook from './SecretScanningAlertWebhook';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookSecretScanningAlertResolved model module.
 * @module model/WebhookSecretScanningAlertResolved
 * @version 1.1.4
 */
class WebhookSecretScanningAlertResolved {
    /**
     * Constructs a new <code>WebhookSecretScanningAlertResolved</code>.
     * @alias module:model/WebhookSecretScanningAlertResolved
     * @param action {module:model/WebhookSecretScanningAlertResolved.ActionEnum} 
     * @param alert {module:model/SecretScanningAlertWebhook} 
     * @param repository {module:model/RepositoryWebhooks} 
     */
    constructor(action, alert, repository) { 
        
        WebhookSecretScanningAlertResolved.initialize(this, action, alert, repository);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, alert, repository) { 
        obj['action'] = action;
        obj['alert'] = alert;
        obj['repository'] = repository;
    }

    /**
     * Constructs a <code>WebhookSecretScanningAlertResolved</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSecretScanningAlertResolved} obj Optional instance to populate.
     * @return {module:model/WebhookSecretScanningAlertResolved} The populated <code>WebhookSecretScanningAlertResolved</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSecretScanningAlertResolved();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('alert')) {
                obj['alert'] = SecretScanningAlertWebhook.constructFromObject(data['alert']);
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
     * Validates the JSON data with respect to <code>WebhookSecretScanningAlertResolved</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookSecretScanningAlertResolved</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookSecretScanningAlertResolved.RequiredProperties) {
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
          SecretScanningAlertWebhook.validateJSON(data['alert']);
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

WebhookSecretScanningAlertResolved.RequiredProperties = ["action", "alert", "repository"];

/**
 * @member {module:model/WebhookSecretScanningAlertResolved.ActionEnum} action
 */
WebhookSecretScanningAlertResolved.prototype['action'] = undefined;

/**
 * @member {module:model/SecretScanningAlertWebhook} alert
 */
WebhookSecretScanningAlertResolved.prototype['alert'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookSecretScanningAlertResolved.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookSecretScanningAlertResolved.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookSecretScanningAlertResolved.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookSecretScanningAlertResolved.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookSecretScanningAlertResolved.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSecretScanningAlertResolved['ActionEnum'] = {

    /**
     * value: "resolved"
     * @const
     */
    "resolved": "resolved"
};



export default WebhookSecretScanningAlertResolved;

