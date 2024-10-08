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
import WebhookRegistryPackageUpdatedRegistryPackage from './WebhookRegistryPackageUpdatedRegistryPackage';

/**
 * The WebhookRegistryPackageUpdated model module.
 * @module model/WebhookRegistryPackageUpdated
 * @version 1.1.4
 */
class WebhookRegistryPackageUpdated {
    /**
     * Constructs a new <code>WebhookRegistryPackageUpdated</code>.
     * @alias module:model/WebhookRegistryPackageUpdated
     * @param action {module:model/WebhookRegistryPackageUpdated.ActionEnum} 
     * @param registryPackage {module:model/WebhookRegistryPackageUpdatedRegistryPackage} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, registryPackage, sender) { 
        
        WebhookRegistryPackageUpdated.initialize(this, action, registryPackage, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, registryPackage, sender) { 
        obj['action'] = action;
        obj['registry_package'] = registryPackage;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookRegistryPackageUpdated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRegistryPackageUpdated} obj Optional instance to populate.
     * @return {module:model/WebhookRegistryPackageUpdated} The populated <code>WebhookRegistryPackageUpdated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRegistryPackageUpdated();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
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
            if (data.hasOwnProperty('registry_package')) {
                obj['registry_package'] = WebhookRegistryPackageUpdatedRegistryPackage.constructFromObject(data['registry_package']);
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
     * Validates the JSON data with respect to <code>WebhookRegistryPackageUpdated</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRegistryPackageUpdated</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookRegistryPackageUpdated.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
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
        // validate the optional field `registry_package`
        if (data['registry_package']) { // data not null
          WebhookRegistryPackageUpdatedRegistryPackage.validateJSON(data['registry_package']);
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

WebhookRegistryPackageUpdated.RequiredProperties = ["action", "registry_package", "sender"];

/**
 * @member {module:model/WebhookRegistryPackageUpdated.ActionEnum} action
 */
WebhookRegistryPackageUpdated.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookRegistryPackageUpdated.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookRegistryPackageUpdated.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookRegistryPackageUpdated.prototype['organization'] = undefined;

/**
 * @member {module:model/WebhookRegistryPackageUpdatedRegistryPackage} registry_package
 */
WebhookRegistryPackageUpdated.prototype['registry_package'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookRegistryPackageUpdated.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookRegistryPackageUpdated.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookRegistryPackageUpdated['ActionEnum'] = {

    /**
     * value: "updated"
     * @const
     */
    "updated": "updated"
};



export default WebhookRegistryPackageUpdated;

