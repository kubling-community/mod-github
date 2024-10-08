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
import MarketplacePurchase1 from './MarketplacePurchase1';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhooksMarketplacePurchase from './WebhooksMarketplacePurchase';

/**
 * The WebhookMarketplacePurchasePendingChange model module.
 * @module model/WebhookMarketplacePurchasePendingChange
 * @version 1.1.4
 */
class WebhookMarketplacePurchasePendingChange {
    /**
     * Constructs a new <code>WebhookMarketplacePurchasePendingChange</code>.
     * @alias module:model/WebhookMarketplacePurchasePendingChange
     * @param action {module:model/WebhookMarketplacePurchasePendingChange.ActionEnum} 
     * @param effectiveDate {String} 
     * @param marketplacePurchase {module:model/WebhooksMarketplacePurchase} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, effectiveDate, marketplacePurchase, sender) { 
        
        WebhookMarketplacePurchasePendingChange.initialize(this, action, effectiveDate, marketplacePurchase, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, effectiveDate, marketplacePurchase, sender) { 
        obj['action'] = action;
        obj['effective_date'] = effectiveDate;
        obj['marketplace_purchase'] = marketplacePurchase;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookMarketplacePurchasePendingChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookMarketplacePurchasePendingChange} obj Optional instance to populate.
     * @return {module:model/WebhookMarketplacePurchasePendingChange} The populated <code>WebhookMarketplacePurchasePendingChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookMarketplacePurchasePendingChange();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('effective_date')) {
                obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('marketplace_purchase')) {
                obj['marketplace_purchase'] = WebhooksMarketplacePurchase.constructFromObject(data['marketplace_purchase']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('previous_marketplace_purchase')) {
                obj['previous_marketplace_purchase'] = MarketplacePurchase1.constructFromObject(data['previous_marketplace_purchase']);
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
     * Validates the JSON data with respect to <code>WebhookMarketplacePurchasePendingChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookMarketplacePurchasePendingChange</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookMarketplacePurchasePendingChange.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['effective_date'] && !(typeof data['effective_date'] === 'string' || data['effective_date'] instanceof String)) {
            throw new Error("Expected the field `effective_date` to be a primitive type in the JSON string but got " + data['effective_date']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `marketplace_purchase`
        if (data['marketplace_purchase']) { // data not null
          WebhooksMarketplacePurchase.validateJSON(data['marketplace_purchase']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `previous_marketplace_purchase`
        if (data['previous_marketplace_purchase']) { // data not null
          MarketplacePurchase1.validateJSON(data['previous_marketplace_purchase']);
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

WebhookMarketplacePurchasePendingChange.RequiredProperties = ["action", "effective_date", "marketplace_purchase", "sender"];

/**
 * @member {module:model/WebhookMarketplacePurchasePendingChange.ActionEnum} action
 */
WebhookMarketplacePurchasePendingChange.prototype['action'] = undefined;

/**
 * @member {String} effective_date
 */
WebhookMarketplacePurchasePendingChange.prototype['effective_date'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookMarketplacePurchasePendingChange.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookMarketplacePurchasePendingChange.prototype['installation'] = undefined;

/**
 * @member {module:model/WebhooksMarketplacePurchase} marketplace_purchase
 */
WebhookMarketplacePurchasePendingChange.prototype['marketplace_purchase'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookMarketplacePurchasePendingChange.prototype['organization'] = undefined;

/**
 * @member {module:model/MarketplacePurchase1} previous_marketplace_purchase
 */
WebhookMarketplacePurchasePendingChange.prototype['previous_marketplace_purchase'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookMarketplacePurchasePendingChange.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookMarketplacePurchasePendingChange.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookMarketplacePurchasePendingChange['ActionEnum'] = {

    /**
     * value: "pending_change"
     * @const
     */
    "pending_change": "pending_change"
};



export default WebhookMarketplacePurchasePendingChange;

