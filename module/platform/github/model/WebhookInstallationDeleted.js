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
import Installation from './Installation';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhooksRepositoriesInner from './WebhooksRepositoriesInner';

/**
 * The WebhookInstallationDeleted model module.
 * @module model/WebhookInstallationDeleted
 * @version 1.1.4
 */
class WebhookInstallationDeleted {
    /**
     * Constructs a new <code>WebhookInstallationDeleted</code>.
     * @alias module:model/WebhookInstallationDeleted
     * @param action {module:model/WebhookInstallationDeleted.ActionEnum} 
     * @param installation {module:model/Installation} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, installation, sender) { 
        
        WebhookInstallationDeleted.initialize(this, action, installation, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, installation, sender) { 
        obj['action'] = action;
        obj['installation'] = installation;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookInstallationDeleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookInstallationDeleted} obj Optional instance to populate.
     * @return {module:model/WebhookInstallationDeleted} The populated <code>WebhookInstallationDeleted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookInstallationDeleted();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = Installation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [WebhooksRepositoriesInner]);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], Object);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookInstallationDeleted</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookInstallationDeleted</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookInstallationDeleted.RequiredProperties) {
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
          Installation.validateJSON(data['installation']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        if (data['repositories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['repositories'])) {
                throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
            }
            // validate the optional field `repositories` (array)
            for (const item of data['repositories']) {
                WebhooksRepositoriesInner.validateJSON(item);
            };
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

WebhookInstallationDeleted.RequiredProperties = ["action", "installation", "sender"];

/**
 * @member {module:model/WebhookInstallationDeleted.ActionEnum} action
 */
WebhookInstallationDeleted.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookInstallationDeleted.prototype['enterprise'] = undefined;

/**
 * @member {module:model/Installation} installation
 */
WebhookInstallationDeleted.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookInstallationDeleted.prototype['organization'] = undefined;

/**
 * An array of repository objects that the installation can access.
 * @member {Array.<module:model/WebhooksRepositoriesInner>} repositories
 */
WebhookInstallationDeleted.prototype['repositories'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookInstallationDeleted.prototype['repository'] = undefined;

/**
 * @member {Object} requester
 */
WebhookInstallationDeleted.prototype['requester'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookInstallationDeleted.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookInstallationDeleted['ActionEnum'] = {

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"
};



export default WebhookInstallationDeleted;

