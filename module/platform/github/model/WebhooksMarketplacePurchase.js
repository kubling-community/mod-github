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
import WebhooksMarketplacePurchaseAccount from './WebhooksMarketplacePurchaseAccount';
import WebhooksMarketplacePurchasePlan from './WebhooksMarketplacePurchasePlan';

/**
 * The WebhooksMarketplacePurchase model module.
 * @module model/WebhooksMarketplacePurchase
 * @version 1.1.4
 */
class WebhooksMarketplacePurchase {
    /**
     * Constructs a new <code>WebhooksMarketplacePurchase</code>.
     * @alias module:model/WebhooksMarketplacePurchase
     * @param account {module:model/WebhooksMarketplacePurchaseAccount} 
     * @param billingCycle {String} 
     * @param freeTrialEndsOn {String} 
     * @param nextBillingDate {String} 
     * @param onFreeTrial {Boolean} 
     * @param plan {module:model/WebhooksMarketplacePurchasePlan} 
     * @param unitCount {Number} 
     */
    constructor(account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount) { 
        
        WebhooksMarketplacePurchase.initialize(this, account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount) { 
        obj['account'] = account;
        obj['billing_cycle'] = billingCycle;
        obj['free_trial_ends_on'] = freeTrialEndsOn;
        obj['next_billing_date'] = nextBillingDate;
        obj['on_free_trial'] = onFreeTrial;
        obj['plan'] = plan;
        obj['unit_count'] = unitCount;
    }

    /**
     * Constructs a <code>WebhooksMarketplacePurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksMarketplacePurchase} obj Optional instance to populate.
     * @return {module:model/WebhooksMarketplacePurchase} The populated <code>WebhooksMarketplacePurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksMarketplacePurchase();

            if (data.hasOwnProperty('account')) {
                obj['account'] = WebhooksMarketplacePurchaseAccount.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('billing_cycle')) {
                obj['billing_cycle'] = ApiClient.convertToType(data['billing_cycle'], 'String');
            }
            if (data.hasOwnProperty('free_trial_ends_on')) {
                obj['free_trial_ends_on'] = ApiClient.convertToType(data['free_trial_ends_on'], 'String');
            }
            if (data.hasOwnProperty('next_billing_date')) {
                obj['next_billing_date'] = ApiClient.convertToType(data['next_billing_date'], 'String');
            }
            if (data.hasOwnProperty('on_free_trial')) {
                obj['on_free_trial'] = ApiClient.convertToType(data['on_free_trial'], 'Boolean');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = WebhooksMarketplacePurchasePlan.constructFromObject(data['plan']);
            }
            if (data.hasOwnProperty('unit_count')) {
                obj['unit_count'] = ApiClient.convertToType(data['unit_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksMarketplacePurchase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksMarketplacePurchase</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksMarketplacePurchase.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `account`
        if (data['account']) { // data not null
          WebhooksMarketplacePurchaseAccount.validateJSON(data['account']);
        }
        // ensure the json data is a string
        if (data['billing_cycle'] && !(typeof data['billing_cycle'] === 'string' || data['billing_cycle'] instanceof String)) {
            throw new Error("Expected the field `billing_cycle` to be a primitive type in the JSON string but got " + data['billing_cycle']);
        }
        // ensure the json data is a string
        if (data['free_trial_ends_on'] && !(typeof data['free_trial_ends_on'] === 'string' || data['free_trial_ends_on'] instanceof String)) {
            throw new Error("Expected the field `free_trial_ends_on` to be a primitive type in the JSON string but got " + data['free_trial_ends_on']);
        }
        // ensure the json data is a string
        if (data['next_billing_date'] && !(typeof data['next_billing_date'] === 'string' || data['next_billing_date'] instanceof String)) {
            throw new Error("Expected the field `next_billing_date` to be a primitive type in the JSON string but got " + data['next_billing_date']);
        }
        // validate the optional field `plan`
        if (data['plan']) { // data not null
          WebhooksMarketplacePurchasePlan.validateJSON(data['plan']);
        }

        return true;
    }


}

WebhooksMarketplacePurchase.RequiredProperties = ["account", "billing_cycle", "free_trial_ends_on", "next_billing_date", "on_free_trial", "plan", "unit_count"];

/**
 * @member {module:model/WebhooksMarketplacePurchaseAccount} account
 */
WebhooksMarketplacePurchase.prototype['account'] = undefined;

/**
 * @member {String} billing_cycle
 */
WebhooksMarketplacePurchase.prototype['billing_cycle'] = undefined;

/**
 * @member {String} free_trial_ends_on
 */
WebhooksMarketplacePurchase.prototype['free_trial_ends_on'] = undefined;

/**
 * @member {String} next_billing_date
 */
WebhooksMarketplacePurchase.prototype['next_billing_date'] = undefined;

/**
 * @member {Boolean} on_free_trial
 */
WebhooksMarketplacePurchase.prototype['on_free_trial'] = undefined;

/**
 * @member {module:model/WebhooksMarketplacePurchasePlan} plan
 */
WebhooksMarketplacePurchase.prototype['plan'] = undefined;

/**
 * @member {Number} unit_count
 */
WebhooksMarketplacePurchase.prototype['unit_count'] = undefined;






export default WebhooksMarketplacePurchase;

