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
import CustomPropertyValue from './CustomPropertyValue';

/**
 * The OrgRepoCustomPropertyValues model module.
 * @module model/OrgRepoCustomPropertyValues
 * @version 1.1.4
 */
class OrgRepoCustomPropertyValues {
    /**
     * Constructs a new <code>OrgRepoCustomPropertyValues</code>.
     * List of custom property values for a repository
     * @alias module:model/OrgRepoCustomPropertyValues
     * @param repositoryId {Number} 
     * @param repositoryName {String} 
     * @param repositoryFullName {String} 
     * @param properties {Array.<module:model/CustomPropertyValue>} List of custom property names and associated values
     */
    constructor(repositoryId, repositoryName, repositoryFullName, properties) { 
        
        OrgRepoCustomPropertyValues.initialize(this, repositoryId, repositoryName, repositoryFullName, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryId, repositoryName, repositoryFullName, properties) { 
        obj['repository_id'] = repositoryId;
        obj['repository_name'] = repositoryName;
        obj['repository_full_name'] = repositoryFullName;
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>OrgRepoCustomPropertyValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgRepoCustomPropertyValues} obj Optional instance to populate.
     * @return {module:model/OrgRepoCustomPropertyValues} The populated <code>OrgRepoCustomPropertyValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgRepoCustomPropertyValues();

            if (data.hasOwnProperty('repository_id')) {
                obj['repository_id'] = ApiClient.convertToType(data['repository_id'], 'Number');
            }
            if (data.hasOwnProperty('repository_name')) {
                obj['repository_name'] = ApiClient.convertToType(data['repository_name'], 'String');
            }
            if (data.hasOwnProperty('repository_full_name')) {
                obj['repository_full_name'] = ApiClient.convertToType(data['repository_full_name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CustomPropertyValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgRepoCustomPropertyValues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgRepoCustomPropertyValues</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrgRepoCustomPropertyValues.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['repository_name'] && !(typeof data['repository_name'] === 'string' || data['repository_name'] instanceof String)) {
            throw new Error("Expected the field `repository_name` to be a primitive type in the JSON string but got " + data['repository_name']);
        }
        // ensure the json data is a string
        if (data['repository_full_name'] && !(typeof data['repository_full_name'] === 'string' || data['repository_full_name'] instanceof String)) {
            throw new Error("Expected the field `repository_full_name` to be a primitive type in the JSON string but got " + data['repository_full_name']);
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                CustomPropertyValue.validateJSON(item);
            };
        }

        return true;
    }


}

OrgRepoCustomPropertyValues.RequiredProperties = ["repository_id", "repository_name", "repository_full_name", "properties"];

/**
 * @member {Number} repository_id
 */
OrgRepoCustomPropertyValues.prototype['repository_id'] = undefined;

/**
 * @member {String} repository_name
 */
OrgRepoCustomPropertyValues.prototype['repository_name'] = undefined;

/**
 * @member {String} repository_full_name
 */
OrgRepoCustomPropertyValues.prototype['repository_full_name'] = undefined;

/**
 * List of custom property names and associated values
 * @member {Array.<module:model/CustomPropertyValue>} properties
 */
OrgRepoCustomPropertyValues.prototype['properties'] = undefined;






export default OrgRepoCustomPropertyValues;

