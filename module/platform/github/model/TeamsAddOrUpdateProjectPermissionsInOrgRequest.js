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
 * The TeamsAddOrUpdateProjectPermissionsInOrgRequest model module.
 * @module model/TeamsAddOrUpdateProjectPermissionsInOrgRequest
 * @version 1.1.4
 */
class TeamsAddOrUpdateProjectPermissionsInOrgRequest {
    /**
     * Constructs a new <code>TeamsAddOrUpdateProjectPermissionsInOrgRequest</code>.
     * @alias module:model/TeamsAddOrUpdateProjectPermissionsInOrgRequest
     */
    constructor() { 
        
        TeamsAddOrUpdateProjectPermissionsInOrgRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamsAddOrUpdateProjectPermissionsInOrgRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamsAddOrUpdateProjectPermissionsInOrgRequest} obj Optional instance to populate.
     * @return {module:model/TeamsAddOrUpdateProjectPermissionsInOrgRequest} The populated <code>TeamsAddOrUpdateProjectPermissionsInOrgRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamsAddOrUpdateProjectPermissionsInOrgRequest();

            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamsAddOrUpdateProjectPermissionsInOrgRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamsAddOrUpdateProjectPermissionsInOrgRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }

        return true;
    }


}



/**
 * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see \"[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method).\"
 * @member {module:model/TeamsAddOrUpdateProjectPermissionsInOrgRequest.PermissionEnum} permission
 */
TeamsAddOrUpdateProjectPermissionsInOrgRequest.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
TeamsAddOrUpdateProjectPermissionsInOrgRequest['PermissionEnum'] = {

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "write"
     * @const
     */
    "write": "write",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin"
};



export default TeamsAddOrUpdateProjectPermissionsInOrgRequest;

