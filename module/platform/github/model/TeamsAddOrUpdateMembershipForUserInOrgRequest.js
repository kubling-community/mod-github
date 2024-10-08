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
 * The TeamsAddOrUpdateMembershipForUserInOrgRequest model module.
 * @module model/TeamsAddOrUpdateMembershipForUserInOrgRequest
 * @version 1.1.4
 */
class TeamsAddOrUpdateMembershipForUserInOrgRequest {
    /**
     * Constructs a new <code>TeamsAddOrUpdateMembershipForUserInOrgRequest</code>.
     * @alias module:model/TeamsAddOrUpdateMembershipForUserInOrgRequest
     */
    constructor() { 
        
        TeamsAddOrUpdateMembershipForUserInOrgRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamsAddOrUpdateMembershipForUserInOrgRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamsAddOrUpdateMembershipForUserInOrgRequest} obj Optional instance to populate.
     * @return {module:model/TeamsAddOrUpdateMembershipForUserInOrgRequest} The populated <code>TeamsAddOrUpdateMembershipForUserInOrgRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamsAddOrUpdateMembershipForUserInOrgRequest();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamsAddOrUpdateMembershipForUserInOrgRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamsAddOrUpdateMembershipForUserInOrgRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}



/**
 * The role that this user should have in the team.
 * @member {module:model/TeamsAddOrUpdateMembershipForUserInOrgRequest.RoleEnum} role
 * @default 'member'
 */
TeamsAddOrUpdateMembershipForUserInOrgRequest.prototype['role'] = 'member';





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
TeamsAddOrUpdateMembershipForUserInOrgRequest['RoleEnum'] = {

    /**
     * value: "member"
     * @const
     */
    "member": "member",

    /**
     * value: "maintainer"
     * @const
     */
    "maintainer": "maintainer"
};



export default TeamsAddOrUpdateMembershipForUserInOrgRequest;

