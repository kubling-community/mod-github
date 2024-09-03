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
 * The CheckAutomatedSecurityFixes model module.
 * @module model/CheckAutomatedSecurityFixes
 * @version 1.1.4
 */
class CheckAutomatedSecurityFixes {
    /**
     * Constructs a new <code>CheckAutomatedSecurityFixes</code>.
     * Check Automated Security Fixes
     * @alias module:model/CheckAutomatedSecurityFixes
     * @param enabled {Boolean} Whether automated security fixes are enabled for the repository.
     * @param paused {Boolean} Whether automated security fixes are paused for the repository.
     */
    constructor(enabled, paused) { 
        
        CheckAutomatedSecurityFixes.initialize(this, enabled, paused);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, paused) { 
        obj['enabled'] = enabled;
        obj['paused'] = paused;
    }

    /**
     * Constructs a <code>CheckAutomatedSecurityFixes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckAutomatedSecurityFixes} obj Optional instance to populate.
     * @return {module:model/CheckAutomatedSecurityFixes} The populated <code>CheckAutomatedSecurityFixes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckAutomatedSecurityFixes();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckAutomatedSecurityFixes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckAutomatedSecurityFixes</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckAutomatedSecurityFixes.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

CheckAutomatedSecurityFixes.RequiredProperties = ["enabled", "paused"];

/**
 * Whether automated security fixes are enabled for the repository.
 * @member {Boolean} enabled
 */
CheckAutomatedSecurityFixes.prototype['enabled'] = undefined;

/**
 * Whether automated security fixes are paused for the repository.
 * @member {Boolean} paused
 */
CheckAutomatedSecurityFixes.prototype['paused'] = undefined;






export default CheckAutomatedSecurityFixes;

