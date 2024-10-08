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
 * The RepositoryPermissions model module.
 * @module model/RepositoryPermissions
 * @version 1.1.4
 */
class RepositoryPermissions {
    /**
     * Constructs a new <code>RepositoryPermissions</code>.
     * @alias module:model/RepositoryPermissions
     * @param admin {Boolean} 
     * @param pull {Boolean} 
     * @param push {Boolean} 
     */
    constructor(admin, pull, push) { 
        
        RepositoryPermissions.initialize(this, admin, pull, push);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, admin, pull, push) { 
        obj['admin'] = admin;
        obj['pull'] = pull;
        obj['push'] = push;
    }

    /**
     * Constructs a <code>RepositoryPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryPermissions} obj Optional instance to populate.
     * @return {module:model/RepositoryPermissions} The populated <code>RepositoryPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryPermissions();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('maintain')) {
                obj['maintain'] = ApiClient.convertToType(data['maintain'], 'Boolean');
            }
            if (data.hasOwnProperty('pull')) {
                obj['pull'] = ApiClient.convertToType(data['pull'], 'Boolean');
            }
            if (data.hasOwnProperty('push')) {
                obj['push'] = ApiClient.convertToType(data['push'], 'Boolean');
            }
            if (data.hasOwnProperty('triage')) {
                obj['triage'] = ApiClient.convertToType(data['triage'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryPermissions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryPermissions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RepositoryPermissions.RequiredProperties = ["admin", "pull", "push"];

/**
 * @member {Boolean} admin
 */
RepositoryPermissions.prototype['admin'] = undefined;

/**
 * @member {Boolean} maintain
 */
RepositoryPermissions.prototype['maintain'] = undefined;

/**
 * @member {Boolean} pull
 */
RepositoryPermissions.prototype['pull'] = undefined;

/**
 * @member {Boolean} push
 */
RepositoryPermissions.prototype['push'] = undefined;

/**
 * @member {Boolean} triage
 */
RepositoryPermissions.prototype['triage'] = undefined;






export default RepositoryPermissions;

