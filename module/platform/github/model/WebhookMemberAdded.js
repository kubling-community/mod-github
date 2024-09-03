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
import WebhookMemberAddedChanges from './WebhookMemberAddedChanges';
import WebhooksUser from './WebhooksUser';

/**
 * The WebhookMemberAdded model module.
 * @module model/WebhookMemberAdded
 * @version 1.1.4
 */
class WebhookMemberAdded {
    /**
     * Constructs a new <code>WebhookMemberAdded</code>.
     * @alias module:model/WebhookMemberAdded
     * @param action {module:model/WebhookMemberAdded.ActionEnum} 
     * @param member {module:model/WebhooksUser} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, member, repository, sender) { 
        
        WebhookMemberAdded.initialize(this, action, member, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, member, repository, sender) { 
        obj['action'] = action;
        obj['member'] = member;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookMemberAdded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookMemberAdded} obj Optional instance to populate.
     * @return {module:model/WebhookMemberAdded} The populated <code>WebhookMemberAdded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookMemberAdded();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = WebhookMemberAddedChanges.constructFromObject(data['changes']);
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = WebhooksUser.constructFromObject(data['member']);
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
     * Validates the JSON data with respect to <code>WebhookMemberAdded</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookMemberAdded</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookMemberAdded.RequiredProperties) {
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
          WebhookMemberAddedChanges.validateJSON(data['changes']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `member`
        if (data['member']) { // data not null
          WebhooksUser.validateJSON(data['member']);
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

WebhookMemberAdded.RequiredProperties = ["action", "member", "repository", "sender"];

/**
 * @member {module:model/WebhookMemberAdded.ActionEnum} action
 */
WebhookMemberAdded.prototype['action'] = undefined;

/**
 * @member {module:model/WebhookMemberAddedChanges} changes
 */
WebhookMemberAdded.prototype['changes'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookMemberAdded.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookMemberAdded.prototype['installation'] = undefined;

/**
 * @member {module:model/WebhooksUser} member
 */
WebhookMemberAdded.prototype['member'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookMemberAdded.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookMemberAdded.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookMemberAdded.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookMemberAdded['ActionEnum'] = {

    /**
     * value: "added"
     * @const
     */
    "added": "added"
};



export default WebhookMemberAdded;

