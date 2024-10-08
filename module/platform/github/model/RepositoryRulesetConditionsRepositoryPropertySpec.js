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
 * The RepositoryRulesetConditionsRepositoryPropertySpec model module.
 * @module model/RepositoryRulesetConditionsRepositoryPropertySpec
 * @version 1.1.4
 */
class RepositoryRulesetConditionsRepositoryPropertySpec {
    /**
     * Constructs a new <code>RepositoryRulesetConditionsRepositoryPropertySpec</code>.
     * Parameters for a targeting a repository property
     * @alias module:model/RepositoryRulesetConditionsRepositoryPropertySpec
     * @param name {String} The name of the repository property to target
     * @param propertyValues {Array.<String>} The values to match for the repository property
     */
    constructor(name, propertyValues) { 
        
        RepositoryRulesetConditionsRepositoryPropertySpec.initialize(this, name, propertyValues);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, propertyValues) { 
        obj['name'] = name;
        obj['property_values'] = propertyValues;
    }

    /**
     * Constructs a <code>RepositoryRulesetConditionsRepositoryPropertySpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRulesetConditionsRepositoryPropertySpec} obj Optional instance to populate.
     * @return {module:model/RepositoryRulesetConditionsRepositoryPropertySpec} The populated <code>RepositoryRulesetConditionsRepositoryPropertySpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRulesetConditionsRepositoryPropertySpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('property_values')) {
                obj['property_values'] = ApiClient.convertToType(data['property_values'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRulesetConditionsRepositoryPropertySpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRulesetConditionsRepositoryPropertySpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRulesetConditionsRepositoryPropertySpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['property_values'])) {
            throw new Error("Expected the field `property_values` to be an array in the JSON data but got " + data['property_values']);
        }

        return true;
    }


}

RepositoryRulesetConditionsRepositoryPropertySpec.RequiredProperties = ["name", "property_values"];

/**
 * The name of the repository property to target
 * @member {String} name
 */
RepositoryRulesetConditionsRepositoryPropertySpec.prototype['name'] = undefined;

/**
 * The values to match for the repository property
 * @member {Array.<String>} property_values
 */
RepositoryRulesetConditionsRepositoryPropertySpec.prototype['property_values'] = undefined;






export default RepositoryRulesetConditionsRepositoryPropertySpec;

