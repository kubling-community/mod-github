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
import RepositoryRuleNonFastForward from './RepositoryRuleNonFastForward';
import RepositoryRuleRulesetInfo from './RepositoryRuleRulesetInfo';

/**
 * The RepositoryRuleDetailedOneOf8 model module.
 * @module model/RepositoryRuleDetailedOneOf8
 * @version 1.1.4
 */
class RepositoryRuleDetailedOneOf8 {
    /**
     * Constructs a new <code>RepositoryRuleDetailedOneOf8</code>.
     * @alias module:model/RepositoryRuleDetailedOneOf8
     * @implements module:model/RepositoryRuleNonFastForward
     * @implements module:model/RepositoryRuleRulesetInfo
     * @param type {module:model/RepositoryRuleDetailedOneOf8.TypeEnum} 
     */
    constructor(type) { 
        RepositoryRuleNonFastForward.initialize(this, type);RepositoryRuleRulesetInfo.initialize(this);
        RepositoryRuleDetailedOneOf8.initialize(this, type);
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
     * Constructs a <code>RepositoryRuleDetailedOneOf8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleDetailedOneOf8} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleDetailedOneOf8} The populated <code>RepositoryRuleDetailedOneOf8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleDetailedOneOf8();
            RepositoryRuleNonFastForward.constructFromObject(data, obj);
            RepositoryRuleRulesetInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('ruleset_source_type')) {
                obj['ruleset_source_type'] = ApiClient.convertToType(data['ruleset_source_type'], 'String');
            }
            if (data.hasOwnProperty('ruleset_source')) {
                obj['ruleset_source'] = ApiClient.convertToType(data['ruleset_source'], 'String');
            }
            if (data.hasOwnProperty('ruleset_id')) {
                obj['ruleset_id'] = ApiClient.convertToType(data['ruleset_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleDetailedOneOf8</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleDetailedOneOf8</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleDetailedOneOf8.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['ruleset_source_type'] && !(typeof data['ruleset_source_type'] === 'string' || data['ruleset_source_type'] instanceof String)) {
            throw new Error("Expected the field `ruleset_source_type` to be a primitive type in the JSON string but got " + data['ruleset_source_type']);
        }
        // ensure the json data is a string
        if (data['ruleset_source'] && !(typeof data['ruleset_source'] === 'string' || data['ruleset_source'] instanceof String)) {
            throw new Error("Expected the field `ruleset_source` to be a primitive type in the JSON string but got " + data['ruleset_source']);
        }

        return true;
    }


}

RepositoryRuleDetailedOneOf8.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRuleDetailedOneOf8.TypeEnum} type
 */
RepositoryRuleDetailedOneOf8.prototype['type'] = undefined;

/**
 * The type of source for the ruleset that includes this rule.
 * @member {module:model/RepositoryRuleDetailedOneOf8.RulesetSourceTypeEnum} ruleset_source_type
 */
RepositoryRuleDetailedOneOf8.prototype['ruleset_source_type'] = undefined;

/**
 * The name of the source of the ruleset that includes this rule.
 * @member {String} ruleset_source
 */
RepositoryRuleDetailedOneOf8.prototype['ruleset_source'] = undefined;

/**
 * The ID of the ruleset that includes this rule.
 * @member {Number} ruleset_id
 */
RepositoryRuleDetailedOneOf8.prototype['ruleset_id'] = undefined;


// Implement RepositoryRuleNonFastForward interface:
/**
 * @member {module:model/RepositoryRuleNonFastForward.TypeEnum} type
 */
RepositoryRuleNonFastForward.prototype['type'] = undefined;
// Implement RepositoryRuleRulesetInfo interface:
/**
 * The type of source for the ruleset that includes this rule.
 * @member {module:model/RepositoryRuleRulesetInfo.RulesetSourceTypeEnum} ruleset_source_type
 */
RepositoryRuleRulesetInfo.prototype['ruleset_source_type'] = undefined;
/**
 * The name of the source of the ruleset that includes this rule.
 * @member {String} ruleset_source
 */
RepositoryRuleRulesetInfo.prototype['ruleset_source'] = undefined;
/**
 * The ID of the ruleset that includes this rule.
 * @member {Number} ruleset_id
 */
RepositoryRuleRulesetInfo.prototype['ruleset_id'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleDetailedOneOf8['TypeEnum'] = {

    /**
     * value: "non_fast_forward"
     * @const
     */
    "non_fast_forward": "non_fast_forward"
};


/**
 * Allowed values for the <code>ruleset_source_type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleDetailedOneOf8['RulesetSourceTypeEnum'] = {

    /**
     * value: "Repository"
     * @const
     */
    "Repository": "Repository",

    /**
     * value: "Organization"
     * @const
     */
    "Organization": "Organization"
};



export default RepositoryRuleDetailedOneOf8;

