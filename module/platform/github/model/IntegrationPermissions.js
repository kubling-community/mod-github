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
 * The IntegrationPermissions model module.
 * @module model/IntegrationPermissions
 * @version 1.1.4
 */
class IntegrationPermissions {
    /**
     * Constructs a new <code>IntegrationPermissions</code>.
     * The set of permissions for the GitHub app
     * @alias module:model/IntegrationPermissions
     * @extends Object
     */
    constructor() { 
        
        IntegrationPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationPermissions} obj Optional instance to populate.
     * @return {module:model/IntegrationPermissions} The populated <code>IntegrationPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationPermissions();

            ApiClient.constructFromObject(data, obj, 'String');
            

            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], 'String');
            }
            if (data.hasOwnProperty('checks')) {
                obj['checks'] = ApiClient.convertToType(data['checks'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], 'String');
            }
            if (data.hasOwnProperty('deployments')) {
                obj['deployments'] = ApiClient.convertToType(data['deployments'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IntegrationPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IntegrationPermissions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['issues'] && !(typeof data['issues'] === 'string' || data['issues'] instanceof String)) {
            throw new Error("Expected the field `issues` to be a primitive type in the JSON string but got " + data['issues']);
        }
        // ensure the json data is a string
        if (data['checks'] && !(typeof data['checks'] === 'string' || data['checks'] instanceof String)) {
            throw new Error("Expected the field `checks` to be a primitive type in the JSON string but got " + data['checks']);
        }
        // ensure the json data is a string
        if (data['metadata'] && !(typeof data['metadata'] === 'string' || data['metadata'] instanceof String)) {
            throw new Error("Expected the field `metadata` to be a primitive type in the JSON string but got " + data['metadata']);
        }
        // ensure the json data is a string
        if (data['contents'] && !(typeof data['contents'] === 'string' || data['contents'] instanceof String)) {
            throw new Error("Expected the field `contents` to be a primitive type in the JSON string but got " + data['contents']);
        }
        // ensure the json data is a string
        if (data['deployments'] && !(typeof data['deployments'] === 'string' || data['deployments'] instanceof String)) {
            throw new Error("Expected the field `deployments` to be a primitive type in the JSON string but got " + data['deployments']);
        }

        return true;
    }


}



/**
 * @member {String} issues
 */
IntegrationPermissions.prototype['issues'] = undefined;

/**
 * @member {String} checks
 */
IntegrationPermissions.prototype['checks'] = undefined;

/**
 * @member {String} metadata
 */
IntegrationPermissions.prototype['metadata'] = undefined;

/**
 * @member {String} contents
 */
IntegrationPermissions.prototype['contents'] = undefined;

/**
 * @member {String} deployments
 */
IntegrationPermissions.prototype['deployments'] = undefined;






export default IntegrationPermissions;

