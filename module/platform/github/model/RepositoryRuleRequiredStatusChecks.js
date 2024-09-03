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
import RepositoryRuleRequiredStatusChecksParameters from './RepositoryRuleRequiredStatusChecksParameters';

/**
 * The RepositoryRuleRequiredStatusChecks model module.
 * @module model/RepositoryRuleRequiredStatusChecks
 * @version 1.1.4
 */
class RepositoryRuleRequiredStatusChecks {
    /**
     * Constructs a new <code>RepositoryRuleRequiredStatusChecks</code>.
     * Choose which status checks must pass before the ref is updated. When enabled, commits must first be pushed to another ref where the checks pass.
     * @alias module:model/RepositoryRuleRequiredStatusChecks
     * @param type {module:model/RepositoryRuleRequiredStatusChecks.TypeEnum} 
     */
    constructor(type) { 
        
        RepositoryRuleRequiredStatusChecks.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RepositoryRuleRequiredStatusChecks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleRequiredStatusChecks} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleRequiredStatusChecks} The populated <code>RepositoryRuleRequiredStatusChecks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleRequiredStatusChecks();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = RepositoryRuleRequiredStatusChecksParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleRequiredStatusChecks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleRequiredStatusChecks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleRequiredStatusChecks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `parameters`
        if (data['parameters']) { // data not null
          RepositoryRuleRequiredStatusChecksParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}

RepositoryRuleRequiredStatusChecks.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRuleRequiredStatusChecks.TypeEnum} type
 */
RepositoryRuleRequiredStatusChecks.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryRuleRequiredStatusChecksParameters} parameters
 */
RepositoryRuleRequiredStatusChecks.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleRequiredStatusChecks['TypeEnum'] = {

    /**
     * value: "required_status_checks"
     * @const
     */
    "required_status_checks": "required_status_checks"
};



export default RepositoryRuleRequiredStatusChecks;

