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
 * The DependabotSecret model module.
 * @module model/DependabotSecret
 * @version 1.1.4
 */
class DependabotSecret {
    /**
     * Constructs a new <code>DependabotSecret</code>.
     * Set secrets for Dependabot.
     * @alias module:model/DependabotSecret
     * @param name {String} The name of the secret.
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(name, createdAt, updatedAt) { 
        
        DependabotSecret.initialize(this, name, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, createdAt, updatedAt) { 
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>DependabotSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependabotSecret} obj Optional instance to populate.
     * @return {module:model/DependabotSecret} The populated <code>DependabotSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependabotSecret();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DependabotSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DependabotSecret</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DependabotSecret.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

DependabotSecret.RequiredProperties = ["name", "created_at", "updated_at"];

/**
 * The name of the secret.
 * @member {String} name
 */
DependabotSecret.prototype['name'] = undefined;

/**
 * @member {Date} created_at
 */
DependabotSecret.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DependabotSecret.prototype['updated_at'] = undefined;






export default DependabotSecret;

