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
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SecretScanningAlertWebhook from './SecretScanningAlertWebhook';
import SecretScanningLocation from './SecretScanningLocation';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookSecretScanningAlertLocationCreated model module.
 * @module model/WebhookSecretScanningAlertLocationCreated
 * @version 1.1.4
 */
class WebhookSecretScanningAlertLocationCreated {
    /**
     * Constructs a new <code>WebhookSecretScanningAlertLocationCreated</code>.
     * @alias module:model/WebhookSecretScanningAlertLocationCreated
     * @param alert {module:model/SecretScanningAlertWebhook} 
     * @param location {module:model/SecretScanningLocation} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(alert, location, repository, sender) { 
        
        WebhookSecretScanningAlertLocationCreated.initialize(this, alert, location, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alert, location, repository, sender) { 
        obj['alert'] = alert;
        obj['location'] = location;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookSecretScanningAlertLocationCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSecretScanningAlertLocationCreated} obj Optional instance to populate.
     * @return {module:model/WebhookSecretScanningAlertLocationCreated} The populated <code>WebhookSecretScanningAlertLocationCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSecretScanningAlertLocationCreated();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('alert')) {
                obj['alert'] = SecretScanningAlertWebhook.constructFromObject(data['alert']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = SecretScanningLocation.constructFromObject(data['location']);
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
     * Validates the JSON data with respect to <code>WebhookSecretScanningAlertLocationCreated</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookSecretScanningAlertLocationCreated</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookSecretScanningAlertLocationCreated.RequiredProperties) {
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
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          SecretScanningLocation.validateJSON(data['location']);
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

WebhookSecretScanningAlertLocationCreated.RequiredProperties = ["alert", "location", "repository", "sender"];

/**
 * @member {module:model/WebhookSecretScanningAlertLocationCreated.ActionEnum} action
 */
WebhookSecretScanningAlertLocationCreated.prototype['action'] = undefined;

/**
 * @member {module:model/SecretScanningAlertWebhook} alert
 */
WebhookSecretScanningAlertLocationCreated.prototype['alert'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookSecretScanningAlertLocationCreated.prototype['installation'] = undefined;

/**
 * @member {module:model/SecretScanningLocation} location
 */
WebhookSecretScanningAlertLocationCreated.prototype['location'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookSecretScanningAlertLocationCreated.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookSecretScanningAlertLocationCreated.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookSecretScanningAlertLocationCreated.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSecretScanningAlertLocationCreated['ActionEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created"
};



export default WebhookSecretScanningAlertLocationCreated;

