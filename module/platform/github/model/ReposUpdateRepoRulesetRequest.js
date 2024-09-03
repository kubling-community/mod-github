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
import RepositoryRule from './RepositoryRule';
import RepositoryRuleEnforcement from './RepositoryRuleEnforcement';
import RepositoryRulesetBypassActor from './RepositoryRulesetBypassActor';
import RepositoryRulesetConditions from './RepositoryRulesetConditions';

/**
 * The ReposUpdateRepoRulesetRequest model module.
 * @module model/ReposUpdateRepoRulesetRequest
 * @version 1.1.4
 */
class ReposUpdateRepoRulesetRequest {
    /**
     * Constructs a new <code>ReposUpdateRepoRulesetRequest</code>.
     * @alias module:model/ReposUpdateRepoRulesetRequest
     */
    constructor() { 
        
        ReposUpdateRepoRulesetRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposUpdateRepoRulesetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposUpdateRepoRulesetRequest} obj Optional instance to populate.
     * @return {module:model/ReposUpdateRepoRulesetRequest} The populated <code>ReposUpdateRepoRulesetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposUpdateRepoRulesetRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('enforcement')) {
                obj['enforcement'] = RepositoryRuleEnforcement.constructFromObject(data['enforcement']);
            }
            if (data.hasOwnProperty('bypass_actors')) {
                obj['bypass_actors'] = ApiClient.convertToType(data['bypass_actors'], [RepositoryRulesetBypassActor]);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = RepositoryRulesetConditions.constructFromObject(data['conditions']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [RepositoryRule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposUpdateRepoRulesetRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposUpdateRepoRulesetRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        if (data['bypass_actors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bypass_actors'])) {
                throw new Error("Expected the field `bypass_actors` to be an array in the JSON data but got " + data['bypass_actors']);
            }
            // validate the optional field `bypass_actors` (array)
            for (const item of data['bypass_actors']) {
                RepositoryRulesetBypassActor.validateJSON(item);
            };
        }
        // validate the optional field `conditions`
        if (data['conditions']) { // data not null
          RepositoryRulesetConditions.validateJSON(data['conditions']);
        }
        if (data['rules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rules'])) {
                throw new Error("Expected the field `rules` to be an array in the JSON data but got " + data['rules']);
            }
            // validate the optional field `rules` (array)
            for (const item of data['rules']) {
                RepositoryRule.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The name of the ruleset.
 * @member {String} name
 */
ReposUpdateRepoRulesetRequest.prototype['name'] = undefined;

/**
 * The target of the ruleset  **Note**: The `push` target is in beta and is subject to change.
 * @member {module:model/ReposUpdateRepoRulesetRequest.TargetEnum} target
 */
ReposUpdateRepoRulesetRequest.prototype['target'] = undefined;

/**
 * @member {module:model/RepositoryRuleEnforcement} enforcement
 */
ReposUpdateRepoRulesetRequest.prototype['enforcement'] = undefined;

/**
 * The actors that can bypass the rules in this ruleset
 * @member {Array.<module:model/RepositoryRulesetBypassActor>} bypass_actors
 */
ReposUpdateRepoRulesetRequest.prototype['bypass_actors'] = undefined;

/**
 * @member {module:model/RepositoryRulesetConditions} conditions
 */
ReposUpdateRepoRulesetRequest.prototype['conditions'] = undefined;

/**
 * An array of rules within the ruleset.
 * @member {Array.<module:model/RepositoryRule>} rules
 */
ReposUpdateRepoRulesetRequest.prototype['rules'] = undefined;





/**
 * Allowed values for the <code>target</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRepoRulesetRequest['TargetEnum'] = {

    /**
     * value: "branch"
     * @const
     */
    "branch": "branch",

    /**
     * value: "tag"
     * @const
     */
    "tag": "tag",

    /**
     * value: "push"
     * @const
     */
    "push": "push"
};



export default ReposUpdateRepoRulesetRequest;

