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
import WebhooksMembership from './WebhooksMembership';

/**
 * The WebhookOrganizationMemberRemoved model module.
 * @module model/WebhookOrganizationMemberRemoved
 * @version 1.1.4
 */
class WebhookOrganizationMemberRemoved {
    /**
     * Constructs a new <code>WebhookOrganizationMemberRemoved</code>.
     * @alias module:model/WebhookOrganizationMemberRemoved
     * @param action {module:model/WebhookOrganizationMemberRemoved.ActionEnum} 
     * @param membership {module:model/WebhooksMembership} 
     * @param organization {module:model/OrganizationSimpleWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, membership, organization, sender) { 
        
        WebhookOrganizationMemberRemoved.initialize(this, action, membership, organization, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, membership, organization, sender) { 
        obj['action'] = action;
        obj['membership'] = membership;
        obj['organization'] = organization;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookOrganizationMemberRemoved</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookOrganizationMemberRemoved} obj Optional instance to populate.
     * @return {module:model/WebhookOrganizationMemberRemoved} The populated <code>WebhookOrganizationMemberRemoved</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookOrganizationMemberRemoved();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('membership')) {
                obj['membership'] = WebhooksMembership.constructFromObject(data['membership']);
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
     * Validates the JSON data with respect to <code>WebhookOrganizationMemberRemoved</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookOrganizationMemberRemoved</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookOrganizationMemberRemoved.RequiredProperties) {
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
        // validate the optional field `membership`
        if (data['membership']) { // data not null
          WebhooksMembership.validateJSON(data['membership']);
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

WebhookOrganizationMemberRemoved.RequiredProperties = ["action", "membership", "organization", "sender"];

/**
 * @member {module:model/WebhookOrganizationMemberRemoved.ActionEnum} action
 */
WebhookOrganizationMemberRemoved.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookOrganizationMemberRemoved.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookOrganizationMemberRemoved.prototype['installation'] = undefined;

/**
 * @member {module:model/WebhooksMembership} membership
 */
WebhookOrganizationMemberRemoved.prototype['membership'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookOrganizationMemberRemoved.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookOrganizationMemberRemoved.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookOrganizationMemberRemoved.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookOrganizationMemberRemoved['ActionEnum'] = {

    /**
     * value: "member_removed"
     * @const
     */
    "member_removed": "member_removed"
};



export default WebhookOrganizationMemberRemoved;

