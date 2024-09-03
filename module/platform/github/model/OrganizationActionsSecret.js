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
 * The OrganizationActionsSecret model module.
 * @module model/OrganizationActionsSecret
 * @version 1.1.4
 */
class OrganizationActionsSecret {
    /**
     * Constructs a new <code>OrganizationActionsSecret</code>.
     * Secrets for GitHub Actions for an organization.
     * @alias module:model/OrganizationActionsSecret
     * @param name {String} The name of the secret.
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param visibility {module:model/OrganizationActionsSecret.VisibilityEnum} Visibility of a secret
     */
    constructor(name, createdAt, updatedAt, visibility) { 
        
        OrganizationActionsSecret.initialize(this, name, createdAt, updatedAt, visibility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, createdAt, updatedAt, visibility) { 
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['visibility'] = visibility;
    }

    /**
     * Constructs a <code>OrganizationActionsSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationActionsSecret} obj Optional instance to populate.
     * @return {module:model/OrganizationActionsSecret} The populated <code>OrganizationActionsSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationActionsSecret();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('selected_repositories_url')) {
                obj['selected_repositories_url'] = ApiClient.convertToType(data['selected_repositories_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationActionsSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationActionsSecret</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationActionsSecret.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }
        // ensure the json data is a string
        if (data['selected_repositories_url'] && !(typeof data['selected_repositories_url'] === 'string' || data['selected_repositories_url'] instanceof String)) {
            throw new Error("Expected the field `selected_repositories_url` to be a primitive type in the JSON string but got " + data['selected_repositories_url']);
        }

        return true;
    }


}

OrganizationActionsSecret.RequiredProperties = ["name", "created_at", "updated_at", "visibility"];

/**
 * The name of the secret.
 * @member {String} name
 */
OrganizationActionsSecret.prototype['name'] = undefined;

/**
 * @member {Date} created_at
 */
OrganizationActionsSecret.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
OrganizationActionsSecret.prototype['updated_at'] = undefined;

/**
 * Visibility of a secret
 * @member {module:model/OrganizationActionsSecret.VisibilityEnum} visibility
 */
OrganizationActionsSecret.prototype['visibility'] = undefined;

/**
 * @member {String} selected_repositories_url
 */
OrganizationActionsSecret.prototype['selected_repositories_url'] = undefined;





/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
OrganizationActionsSecret['VisibilityEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "private"
     * @const
     */
    "private": "private",

    /**
     * value: "selected"
     * @const
     */
    "selected": "selected"
};



export default OrganizationActionsSecret;

