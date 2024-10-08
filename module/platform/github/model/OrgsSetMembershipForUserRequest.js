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
 * The OrgsSetMembershipForUserRequest model module.
 * @module model/OrgsSetMembershipForUserRequest
 * @version 1.1.4
 */
class OrgsSetMembershipForUserRequest {
    /**
     * Constructs a new <code>OrgsSetMembershipForUserRequest</code>.
     * @alias module:model/OrgsSetMembershipForUserRequest
     */
    constructor() { 
        
        OrgsSetMembershipForUserRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrgsSetMembershipForUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgsSetMembershipForUserRequest} obj Optional instance to populate.
     * @return {module:model/OrgsSetMembershipForUserRequest} The populated <code>OrgsSetMembershipForUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgsSetMembershipForUserRequest();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgsSetMembershipForUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgsSetMembershipForUserRequest</code>.
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
 * The role to give the user in the organization. Can be one of:    * `admin` - The user will become an owner of the organization.    * `member` - The user will become a non-owner member of the organization.
 * @member {module:model/OrgsSetMembershipForUserRequest.RoleEnum} role
 * @default 'member'
 */
OrgsSetMembershipForUserRequest.prototype['role'] = 'member';





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
OrgsSetMembershipForUserRequest['RoleEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "member"
     * @const
     */
    "member": "member"
};



export default OrgsSetMembershipForUserRequest;

