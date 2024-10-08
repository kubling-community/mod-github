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
import OrgRulesetConditions from './OrgRulesetConditions';
import RepositoryRule from './RepositoryRule';
import RepositoryRuleEnforcement from './RepositoryRuleEnforcement';
import RepositoryRulesetBypassActor from './RepositoryRulesetBypassActor';

/**
 * The ReposCreateOrgRulesetRequest model module.
 * @module model/ReposCreateOrgRulesetRequest
 * @version 1.1.4
 */
class ReposCreateOrgRulesetRequest {
    /**
     * Constructs a new <code>ReposCreateOrgRulesetRequest</code>.
     * @alias module:model/ReposCreateOrgRulesetRequest
     * @param name {String} The name of the ruleset.
     * @param enforcement {module:model/RepositoryRuleEnforcement} 
     */
    constructor(name, enforcement) { 
        
        ReposCreateOrgRulesetRequest.initialize(this, name, enforcement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, enforcement) { 
        obj['name'] = name;
        obj['enforcement'] = enforcement;
    }

    /**
     * Constructs a <code>ReposCreateOrgRulesetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateOrgRulesetRequest} obj Optional instance to populate.
     * @return {module:model/ReposCreateOrgRulesetRequest} The populated <code>ReposCreateOrgRulesetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateOrgRulesetRequest();

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
                obj['conditions'] = OrgRulesetConditions.constructFromObject(data['conditions']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [RepositoryRule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateOrgRulesetRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateOrgRulesetRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposCreateOrgRulesetRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
          OrgRulesetConditions.validateJSON(data['conditions']);
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

ReposCreateOrgRulesetRequest.RequiredProperties = ["name", "enforcement"];

/**
 * The name of the ruleset.
 * @member {String} name
 */
ReposCreateOrgRulesetRequest.prototype['name'] = undefined;

/**
 * The target of the ruleset  **Note**: The `push` target is in beta and is subject to change.
 * @member {module:model/ReposCreateOrgRulesetRequest.TargetEnum} target
 */
ReposCreateOrgRulesetRequest.prototype['target'] = undefined;

/**
 * @member {module:model/RepositoryRuleEnforcement} enforcement
 */
ReposCreateOrgRulesetRequest.prototype['enforcement'] = undefined;

/**
 * The actors that can bypass the rules in this ruleset
 * @member {Array.<module:model/RepositoryRulesetBypassActor>} bypass_actors
 */
ReposCreateOrgRulesetRequest.prototype['bypass_actors'] = undefined;

/**
 * @member {module:model/OrgRulesetConditions} conditions
 */
ReposCreateOrgRulesetRequest.prototype['conditions'] = undefined;

/**
 * An array of rules within the ruleset.
 * @member {Array.<module:model/RepositoryRule>} rules
 */
ReposCreateOrgRulesetRequest.prototype['rules'] = undefined;





/**
 * Allowed values for the <code>target</code> property.
 * @enum {String}
 * @readonly
 */
ReposCreateOrgRulesetRequest['TargetEnum'] = {

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



export default ReposCreateOrgRulesetRequest;

