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
import AppPermissions from './AppPermissions';

/**
 * The AppsCreateInstallationAccessTokenRequest model module.
 * @module model/AppsCreateInstallationAccessTokenRequest
 * @version 1.1.4
 */
class AppsCreateInstallationAccessTokenRequest {
    /**
     * Constructs a new <code>AppsCreateInstallationAccessTokenRequest</code>.
     * @alias module:model/AppsCreateInstallationAccessTokenRequest
     */
    constructor() { 
        
        AppsCreateInstallationAccessTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppsCreateInstallationAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppsCreateInstallationAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/AppsCreateInstallationAccessTokenRequest} The populated <code>AppsCreateInstallationAccessTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppsCreateInstallationAccessTokenRequest();

            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], ['String']);
            }
            if (data.hasOwnProperty('repository_ids')) {
                obj['repository_ids'] = ApiClient.convertToType(data['repository_ids'], ['Number']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = AppPermissions.constructFromObject(data['permissions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AppsCreateInstallationAccessTokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AppsCreateInstallationAccessTokenRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['repositories'])) {
            throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repository_ids'])) {
            throw new Error("Expected the field `repository_ids` to be an array in the JSON data but got " + data['repository_ids']);
        }
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          AppPermissions.validateJSON(data['permissions']);
        }

        return true;
    }


}



/**
 * List of repository names that the token should have access to
 * @member {Array.<String>} repositories
 */
AppsCreateInstallationAccessTokenRequest.prototype['repositories'] = undefined;

/**
 * List of repository IDs that the token should have access to
 * @member {Array.<Number>} repository_ids
 */
AppsCreateInstallationAccessTokenRequest.prototype['repository_ids'] = undefined;

/**
 * @member {module:model/AppPermissions} permissions
 */
AppsCreateInstallationAccessTokenRequest.prototype['permissions'] = undefined;






export default AppsCreateInstallationAccessTokenRequest;

