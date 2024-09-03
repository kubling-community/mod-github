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
 * The RateLimit model module.
 * @module model/RateLimit
 * @version 1.1.4
 */
class RateLimit {
    /**
     * Constructs a new <code>RateLimit</code>.
     * @alias module:model/RateLimit
     * @param limit {Number} 
     * @param remaining {Number} 
     * @param reset {Number} 
     * @param used {Number} 
     */
    constructor(limit, remaining, reset, used) { 
        
        RateLimit.initialize(this, limit, remaining, reset, used);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, remaining, reset, used) { 
        obj['limit'] = limit;
        obj['remaining'] = remaining;
        obj['reset'] = reset;
        obj['used'] = used;
    }

    /**
     * Constructs a <code>RateLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimit} obj Optional instance to populate.
     * @return {module:model/RateLimit} The populated <code>RateLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimit();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('remaining')) {
                obj['remaining'] = ApiClient.convertToType(data['remaining'], 'Number');
            }
            if (data.hasOwnProperty('reset')) {
                obj['reset'] = ApiClient.convertToType(data['reset'], 'Number');
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RateLimit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RateLimit</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RateLimit.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RateLimit.RequiredProperties = ["limit", "remaining", "reset", "used"];

/**
 * @member {Number} limit
 */
RateLimit.prototype['limit'] = undefined;

/**
 * @member {Number} remaining
 */
RateLimit.prototype['remaining'] = undefined;

/**
 * @member {Number} reset
 */
RateLimit.prototype['reset'] = undefined;

/**
 * @member {Number} used
 */
RateLimit.prototype['used'] = undefined;






export default RateLimit;

