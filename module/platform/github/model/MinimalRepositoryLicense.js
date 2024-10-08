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
 * The MinimalRepositoryLicense model module.
 * @module model/MinimalRepositoryLicense
 * @version 1.1.4
 */
class MinimalRepositoryLicense {
    /**
     * Constructs a new <code>MinimalRepositoryLicense</code>.
     * @alias module:model/MinimalRepositoryLicense
     */
    constructor() { 
        
        MinimalRepositoryLicense.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MinimalRepositoryLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MinimalRepositoryLicense} obj Optional instance to populate.
     * @return {module:model/MinimalRepositoryLicense} The populated <code>MinimalRepositoryLicense</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MinimalRepositoryLicense();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('spdx_id')) {
                obj['spdx_id'] = ApiClient.convertToType(data['spdx_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MinimalRepositoryLicense</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MinimalRepositoryLicense</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['spdx_id'] && !(typeof data['spdx_id'] === 'string' || data['spdx_id'] instanceof String)) {
            throw new Error("Expected the field `spdx_id` to be a primitive type in the JSON string but got " + data['spdx_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
MinimalRepositoryLicense.prototype['key'] = undefined;

/**
 * @member {String} name
 */
MinimalRepositoryLicense.prototype['name'] = undefined;

/**
 * @member {String} spdx_id
 */
MinimalRepositoryLicense.prototype['spdx_id'] = undefined;

/**
 * @member {String} url
 */
MinimalRepositoryLicense.prototype['url'] = undefined;

/**
 * @member {String} node_id
 */
MinimalRepositoryLicense.prototype['node_id'] = undefined;






export default MinimalRepositoryLicense;

