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
 * The OrganizationFineGrainedPermission model module.
 * @module model/OrganizationFineGrainedPermission
 * @version 1.1.4
 */
class OrganizationFineGrainedPermission {
    /**
     * Constructs a new <code>OrganizationFineGrainedPermission</code>.
     * A fine-grained permission that protects organization resources.
     * @alias module:model/OrganizationFineGrainedPermission
     * @param name {String} 
     * @param description {String} 
     */
    constructor(name, description) { 
        
        OrganizationFineGrainedPermission.initialize(this, name, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, description) { 
        obj['name'] = name;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>OrganizationFineGrainedPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFineGrainedPermission} obj Optional instance to populate.
     * @return {module:model/OrganizationFineGrainedPermission} The populated <code>OrganizationFineGrainedPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationFineGrainedPermission();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationFineGrainedPermission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationFineGrainedPermission</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationFineGrainedPermission.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

OrganizationFineGrainedPermission.RequiredProperties = ["name", "description"];

/**
 * @member {String} name
 */
OrganizationFineGrainedPermission.prototype['name'] = undefined;

/**
 * @member {String} description
 */
OrganizationFineGrainedPermission.prototype['description'] = undefined;






export default OrganizationFineGrainedPermission;

