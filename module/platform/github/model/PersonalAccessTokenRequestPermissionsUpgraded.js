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
 * The PersonalAccessTokenRequestPermissionsUpgraded model module.
 * @module model/PersonalAccessTokenRequestPermissionsUpgraded
 * @version 1.1.4
 */
class PersonalAccessTokenRequestPermissionsUpgraded {
    /**
     * Constructs a new <code>PersonalAccessTokenRequestPermissionsUpgraded</code>.
     * Requested permissions that elevate access for a previously approved request for access, categorized by type of permission.
     * @alias module:model/PersonalAccessTokenRequestPermissionsUpgraded
     */
    constructor() { 
        
        PersonalAccessTokenRequestPermissionsUpgraded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonalAccessTokenRequestPermissionsUpgraded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonalAccessTokenRequestPermissionsUpgraded} obj Optional instance to populate.
     * @return {module:model/PersonalAccessTokenRequestPermissionsUpgraded} The populated <code>PersonalAccessTokenRequestPermissionsUpgraded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalAccessTokenRequestPermissionsUpgraded();

            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], {'String': 'String'});
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], {'String': 'String'});
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = ApiClient.convertToType(data['other'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PersonalAccessTokenRequestPermissionsUpgraded</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PersonalAccessTokenRequestPermissionsUpgraded</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, String>} organization
 */
PersonalAccessTokenRequestPermissionsUpgraded.prototype['organization'] = undefined;

/**
 * @member {Object.<String, String>} repository
 */
PersonalAccessTokenRequestPermissionsUpgraded.prototype['repository'] = undefined;

/**
 * @member {Object.<String, String>} other
 */
PersonalAccessTokenRequestPermissionsUpgraded.prototype['other'] = undefined;






export default PersonalAccessTokenRequestPermissionsUpgraded;

