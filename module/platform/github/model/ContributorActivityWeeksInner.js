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
 * The ContributorActivityWeeksInner model module.
 * @module model/ContributorActivityWeeksInner
 * @version 1.1.4
 */
class ContributorActivityWeeksInner {
    /**
     * Constructs a new <code>ContributorActivityWeeksInner</code>.
     * @alias module:model/ContributorActivityWeeksInner
     */
    constructor() { 
        
        ContributorActivityWeeksInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContributorActivityWeeksInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContributorActivityWeeksInner} obj Optional instance to populate.
     * @return {module:model/ContributorActivityWeeksInner} The populated <code>ContributorActivityWeeksInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContributorActivityWeeksInner();

            if (data.hasOwnProperty('w')) {
                obj['w'] = ApiClient.convertToType(data['w'], 'Number');
            }
            if (data.hasOwnProperty('a')) {
                obj['a'] = ApiClient.convertToType(data['a'], 'Number');
            }
            if (data.hasOwnProperty('d')) {
                obj['d'] = ApiClient.convertToType(data['d'], 'Number');
            }
            if (data.hasOwnProperty('c')) {
                obj['c'] = ApiClient.convertToType(data['c'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContributorActivityWeeksInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContributorActivityWeeksInner</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} w
 */
ContributorActivityWeeksInner.prototype['w'] = undefined;

/**
 * @member {Number} a
 */
ContributorActivityWeeksInner.prototype['a'] = undefined;

/**
 * @member {Number} d
 */
ContributorActivityWeeksInner.prototype['d'] = undefined;

/**
 * @member {Number} c
 */
ContributorActivityWeeksInner.prototype['c'] = undefined;






export default ContributorActivityWeeksInner;

