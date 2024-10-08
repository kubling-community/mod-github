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

/**
 * The CombinedBillingUsage model module.
 * @module model/CombinedBillingUsage
 * @version 1.1.4
 */
class CombinedBillingUsage {
    /**
     * Constructs a new <code>CombinedBillingUsage</code>.
     * @alias module:model/CombinedBillingUsage
     * @param daysLeftInBillingCycle {Number} Numbers of days left in billing cycle.
     * @param estimatedPaidStorageForMonth {Number} Estimated storage space (GB) used in billing cycle.
     * @param estimatedStorageForMonth {Number} Estimated sum of free and paid storage space (GB) used in billing cycle.
     */
    constructor(daysLeftInBillingCycle, estimatedPaidStorageForMonth, estimatedStorageForMonth) { 
        
        CombinedBillingUsage.initialize(this, daysLeftInBillingCycle, estimatedPaidStorageForMonth, estimatedStorageForMonth);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, daysLeftInBillingCycle, estimatedPaidStorageForMonth, estimatedStorageForMonth) { 
        obj['days_left_in_billing_cycle'] = daysLeftInBillingCycle;
        obj['estimated_paid_storage_for_month'] = estimatedPaidStorageForMonth;
        obj['estimated_storage_for_month'] = estimatedStorageForMonth;
    }

    /**
     * Constructs a <code>CombinedBillingUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CombinedBillingUsage} obj Optional instance to populate.
     * @return {module:model/CombinedBillingUsage} The populated <code>CombinedBillingUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CombinedBillingUsage();

            if (data.hasOwnProperty('days_left_in_billing_cycle')) {
                obj['days_left_in_billing_cycle'] = ApiClient.convertToType(data['days_left_in_billing_cycle'], 'Number');
            }
            if (data.hasOwnProperty('estimated_paid_storage_for_month')) {
                obj['estimated_paid_storage_for_month'] = ApiClient.convertToType(data['estimated_paid_storage_for_month'], 'Number');
            }
            if (data.hasOwnProperty('estimated_storage_for_month')) {
                obj['estimated_storage_for_month'] = ApiClient.convertToType(data['estimated_storage_for_month'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CombinedBillingUsage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CombinedBillingUsage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CombinedBillingUsage.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

CombinedBillingUsage.RequiredProperties = ["days_left_in_billing_cycle", "estimated_paid_storage_for_month", "estimated_storage_for_month"];

/**
 * Numbers of days left in billing cycle.
 * @member {Number} days_left_in_billing_cycle
 */
CombinedBillingUsage.prototype['days_left_in_billing_cycle'] = undefined;

/**
 * Estimated storage space (GB) used in billing cycle.
 * @member {Number} estimated_paid_storage_for_month
 */
CombinedBillingUsage.prototype['estimated_paid_storage_for_month'] = undefined;

/**
 * Estimated sum of free and paid storage space (GB) used in billing cycle.
 * @member {Number} estimated_storage_for_month
 */
CombinedBillingUsage.prototype['estimated_storage_for_month'] = undefined;






export default CombinedBillingUsage;

