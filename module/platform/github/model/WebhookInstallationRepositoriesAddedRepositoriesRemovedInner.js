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
 * The WebhookInstallationRepositoriesAddedRepositoriesRemovedInner model module.
 * @module model/WebhookInstallationRepositoriesAddedRepositoriesRemovedInner
 * @version 1.1.4
 */
class WebhookInstallationRepositoriesAddedRepositoriesRemovedInner {
    /**
     * Constructs a new <code>WebhookInstallationRepositoriesAddedRepositoriesRemovedInner</code>.
     * @alias module:model/WebhookInstallationRepositoriesAddedRepositoriesRemovedInner
     */
    constructor() { 
        
        WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookInstallationRepositoriesAddedRepositoriesRemovedInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookInstallationRepositoriesAddedRepositoriesRemovedInner} obj Optional instance to populate.
     * @return {module:model/WebhookInstallationRepositoriesAddedRepositoriesRemovedInner} The populated <code>WebhookInstallationRepositoriesAddedRepositoriesRemovedInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookInstallationRepositoriesAddedRepositoriesRemovedInner();

            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookInstallationRepositoriesAddedRepositoriesRemovedInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookInstallationRepositoriesAddedRepositoriesRemovedInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['full_name'] && !(typeof data['full_name'] === 'string' || data['full_name'] instanceof String)) {
            throw new Error("Expected the field `full_name` to be a primitive type in the JSON string but got " + data['full_name']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }

        return true;
    }


}



/**
 * @member {String} full_name
 */
WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.prototype['full_name'] = undefined;

/**
 * Unique identifier of the repository
 * @member {Number} id
 */
WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.prototype['id'] = undefined;

/**
 * The name of the repository.
 * @member {String} name
 */
WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.prototype['node_id'] = undefined;

/**
 * Whether the repository is private or public.
 * @member {Boolean} private
 */
WebhookInstallationRepositoriesAddedRepositoriesRemovedInner.prototype['private'] = undefined;






export default WebhookInstallationRepositoriesAddedRepositoriesRemovedInner;

