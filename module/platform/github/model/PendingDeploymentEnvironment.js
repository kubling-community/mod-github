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
 * The PendingDeploymentEnvironment model module.
 * @module model/PendingDeploymentEnvironment
 * @version 1.1.4
 */
class PendingDeploymentEnvironment {
    /**
     * Constructs a new <code>PendingDeploymentEnvironment</code>.
     * @alias module:model/PendingDeploymentEnvironment
     */
    constructor() { 
        
        PendingDeploymentEnvironment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PendingDeploymentEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingDeploymentEnvironment} obj Optional instance to populate.
     * @return {module:model/PendingDeploymentEnvironment} The populated <code>PendingDeploymentEnvironment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingDeploymentEnvironment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PendingDeploymentEnvironment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PendingDeploymentEnvironment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }

        return true;
    }


}



/**
 * The id of the environment.
 * @member {Number} id
 */
PendingDeploymentEnvironment.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
PendingDeploymentEnvironment.prototype['node_id'] = undefined;

/**
 * The name of the environment.
 * @member {String} name
 */
PendingDeploymentEnvironment.prototype['name'] = undefined;

/**
 * @member {String} url
 */
PendingDeploymentEnvironment.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
PendingDeploymentEnvironment.prototype['html_url'] = undefined;






export default PendingDeploymentEnvironment;

