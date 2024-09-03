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
import RepositoryRuleCommitMessagePatternParameters from './RepositoryRuleCommitMessagePatternParameters';

/**
 * The RepositoryRuleCommitMessagePattern model module.
 * @module model/RepositoryRuleCommitMessagePattern
 * @version 1.1.4
 */
class RepositoryRuleCommitMessagePattern {
    /**
     * Constructs a new <code>RepositoryRuleCommitMessagePattern</code>.
     * Parameters to be used for the commit_message_pattern rule
     * @alias module:model/RepositoryRuleCommitMessagePattern
     * @param type {module:model/RepositoryRuleCommitMessagePattern.TypeEnum} 
     */
    constructor(type) { 
        
        RepositoryRuleCommitMessagePattern.initialize(this, type);
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
     * Constructs a <code>RepositoryRuleCommitMessagePattern</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleCommitMessagePattern} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleCommitMessagePattern} The populated <code>RepositoryRuleCommitMessagePattern</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleCommitMessagePattern();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = RepositoryRuleCommitMessagePatternParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleCommitMessagePattern</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleCommitMessagePattern</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleCommitMessagePattern.RequiredProperties) {
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
          RepositoryRuleCommitMessagePatternParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}

RepositoryRuleCommitMessagePattern.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRuleCommitMessagePattern.TypeEnum} type
 */
RepositoryRuleCommitMessagePattern.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryRuleCommitMessagePatternParameters} parameters
 */
RepositoryRuleCommitMessagePattern.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleCommitMessagePattern['TypeEnum'] = {

    /**
     * value: "commit_message_pattern"
     * @const
     */
    "commit_message_pattern": "commit_message_pattern"
};



export default RepositoryRuleCommitMessagePattern;

