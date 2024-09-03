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
 * The AuthorizationApp model module.
 * @module model/AuthorizationApp
 * @version 1.1.4
 */
class AuthorizationApp {
    /**
     * Constructs a new <code>AuthorizationApp</code>.
     * @alias module:model/AuthorizationApp
     * @param clientId {String} 
     * @param name {String} 
     * @param url {String} 
     */
    constructor(clientId, name, url) { 
        
        AuthorizationApp.initialize(this, clientId, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, name, url) { 
        obj['client_id'] = clientId;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>AuthorizationApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorizationApp} obj Optional instance to populate.
     * @return {module:model/AuthorizationApp} The populated <code>AuthorizationApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthorizationApp();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthorizationApp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthorizationApp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthorizationApp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

AuthorizationApp.RequiredProperties = ["client_id", "name", "url"];

/**
 * @member {String} client_id
 */
AuthorizationApp.prototype['client_id'] = undefined;

/**
 * @member {String} name
 */
AuthorizationApp.prototype['name'] = undefined;

/**
 * @member {String} url
 */
AuthorizationApp.prototype['url'] = undefined;






export default AuthorizationApp;

