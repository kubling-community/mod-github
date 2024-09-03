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
 * The OrgMembershipPermissions model module.
 * @module model/OrgMembershipPermissions
 * @version 1.1.4
 */
class OrgMembershipPermissions {
    /**
     * Constructs a new <code>OrgMembershipPermissions</code>.
     * @alias module:model/OrgMembershipPermissions
     * @param canCreateRepository {Boolean} 
     */
    constructor(canCreateRepository) { 
        
        OrgMembershipPermissions.initialize(this, canCreateRepository);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, canCreateRepository) { 
        obj['can_create_repository'] = canCreateRepository;
    }

    /**
     * Constructs a <code>OrgMembershipPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgMembershipPermissions} obj Optional instance to populate.
     * @return {module:model/OrgMembershipPermissions} The populated <code>OrgMembershipPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgMembershipPermissions();

            if (data.hasOwnProperty('can_create_repository')) {
                obj['can_create_repository'] = ApiClient.convertToType(data['can_create_repository'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgMembershipPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgMembershipPermissions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrgMembershipPermissions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

OrgMembershipPermissions.RequiredProperties = ["can_create_repository"];

/**
 * @member {Boolean} can_create_repository
 */
OrgMembershipPermissions.prototype['can_create_repository'] = undefined;






export default OrgMembershipPermissions;

