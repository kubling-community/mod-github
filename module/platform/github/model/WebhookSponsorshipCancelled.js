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
import WebhooksSponsorship from './WebhooksSponsorship';

/**
 * The WebhookSponsorshipCancelled model module.
 * @module model/WebhookSponsorshipCancelled
 * @version 1.1.4
 */
class WebhookSponsorshipCancelled {
    /**
     * Constructs a new <code>WebhookSponsorshipCancelled</code>.
     * @alias module:model/WebhookSponsorshipCancelled
     * @param action {module:model/WebhookSponsorshipCancelled.ActionEnum} 
     * @param sender {module:model/SimpleUserWebhooks} 
     * @param sponsorship {module:model/WebhooksSponsorship} 
     */
    constructor(action, sender, sponsorship) { 
        
        WebhookSponsorshipCancelled.initialize(this, action, sender, sponsorship);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, sender, sponsorship) { 
        obj['action'] = action;
        obj['sender'] = sender;
        obj['sponsorship'] = sponsorship;
    }

    /**
     * Constructs a <code>WebhookSponsorshipCancelled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSponsorshipCancelled} obj Optional instance to populate.
     * @return {module:model/WebhookSponsorshipCancelled} The populated <code>WebhookSponsorshipCancelled</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSponsorshipCancelled();

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
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('sponsorship')) {
                obj['sponsorship'] = WebhooksSponsorship.constructFromObject(data['sponsorship']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookSponsorshipCancelled</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookSponsorshipCancelled</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookSponsorshipCancelled.RequiredProperties) {
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
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          RepositoryWebhooks.validateJSON(data['repository']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }
        // validate the optional field `sponsorship`
        if (data['sponsorship']) { // data not null
          WebhooksSponsorship.validateJSON(data['sponsorship']);
        }

        return true;
    }


}

WebhookSponsorshipCancelled.RequiredProperties = ["action", "sender", "sponsorship"];

/**
 * @member {module:model/WebhookSponsorshipCancelled.ActionEnum} action
 */
WebhookSponsorshipCancelled.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookSponsorshipCancelled.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookSponsorshipCancelled.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookSponsorshipCancelled.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookSponsorshipCancelled.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookSponsorshipCancelled.prototype['sender'] = undefined;

/**
 * @member {module:model/WebhooksSponsorship} sponsorship
 */
WebhookSponsorshipCancelled.prototype['sponsorship'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSponsorshipCancelled['ActionEnum'] = {

    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"
};



export default WebhookSponsorshipCancelled;

