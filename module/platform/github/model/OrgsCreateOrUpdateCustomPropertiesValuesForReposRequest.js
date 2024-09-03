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
 * The OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest model module.
 * @module model/OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest
 * @version 1.1.4
 */
class OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest {
    /**
     * Constructs a new <code>OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest</code>.
     * @alias module:model/OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest
     * @param repositoryNames {Array.<String>} The names of repositories that the custom property values will be applied to.
     * @param properties {Array.<module:model/CustomPropertyValue>} List of custom property names and associated values to apply to the repositories.
     */
    constructor(repositoryNames, properties) { 
        
        OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest.initialize(this, repositoryNames, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryNames, properties) { 
        obj['repository_names'] = repositoryNames;
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest} obj Optional instance to populate.
     * @return {module:model/OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest} The populated <code>OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest();

            if (data.hasOwnProperty('repository_names')) {
                obj['repository_names'] = ApiClient.convertToType(data['repository_names'], ['String']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CustomPropertyValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repository_names'])) {
            throw new Error("Expected the field `repository_names` to be an array in the JSON data but got " + data['repository_names']);
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

OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest.RequiredProperties = ["repository_names", "properties"];

/**
 * The names of repositories that the custom property values will be applied to.
 * @member {Array.<String>} repository_names
 */
OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest.prototype['repository_names'] = undefined;

/**
 * List of custom property names and associated values to apply to the repositories.
 * @member {Array.<module:model/CustomPropertyValue>} properties
 */
OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest.prototype['properties'] = undefined;






export default OrgsCreateOrUpdateCustomPropertiesValuesForReposRequest;

