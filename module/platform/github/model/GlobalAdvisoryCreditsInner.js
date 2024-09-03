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
import SecurityAdvisoryCreditTypes from './SecurityAdvisoryCreditTypes';
import SimpleUser from './SimpleUser';

/**
 * The GlobalAdvisoryCreditsInner model module.
 * @module model/GlobalAdvisoryCreditsInner
 * @version 1.1.4
 */
class GlobalAdvisoryCreditsInner {
    /**
     * Constructs a new <code>GlobalAdvisoryCreditsInner</code>.
     * @alias module:model/GlobalAdvisoryCreditsInner
     * @param user {module:model/SimpleUser} 
     * @param type {module:model/SecurityAdvisoryCreditTypes} 
     */
    constructor(user, type) { 
        
        GlobalAdvisoryCreditsInner.initialize(this, user, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user, type) { 
        obj['user'] = user;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GlobalAdvisoryCreditsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalAdvisoryCreditsInner} obj Optional instance to populate.
     * @return {module:model/GlobalAdvisoryCreditsInner} The populated <code>GlobalAdvisoryCreditsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalAdvisoryCreditsInner();

            if (data.hasOwnProperty('user')) {
                obj['user'] = SimpleUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = SecurityAdvisoryCreditTypes.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalAdvisoryCreditsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalAdvisoryCreditsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GlobalAdvisoryCreditsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          SimpleUser.validateJSON(data['user']);
        }

        return true;
    }


}

GlobalAdvisoryCreditsInner.RequiredProperties = ["user", "type"];

/**
 * @member {module:model/SimpleUser} user
 */
GlobalAdvisoryCreditsInner.prototype['user'] = undefined;

/**
 * @member {module:model/SecurityAdvisoryCreditTypes} type
 */
GlobalAdvisoryCreditsInner.prototype['type'] = undefined;






export default GlobalAdvisoryCreditsInner;

