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
 * The WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel model module.
 * @module model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel
 * @version 1.1.4
 */
class WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel {
    /**
     * Constructs a new <code>WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel</code>.
     * @alias module:model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel
     * @param from {module:model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.FromEnum} 
     */
    constructor(from) { 
        
        WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.initialize(this, from);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from) { 
        obj['from'] = from;
    }

    /**
     * Constructs a <code>WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel} obj Optional instance to populate.
     * @return {module:model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel} The populated <code>WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }

        return true;
    }


}

WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.RequiredProperties = ["from"];

/**
 * @member {module:model/WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.FromEnum} from
 */
WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel.prototype['from'] = undefined;





/**
 * Allowed values for the <code>from</code> property.
 * @enum {String}
 * @readonly
 */
WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel['FromEnum'] = {

    /**
     * value: "off"
     * @const
     */
    "off": "off",

    /**
     * value: "non_admins"
     * @const
     */
    "non_admins": "non_admins",

    /**
     * value: "everyone"
     * @const
     */
    "everyone": "everyone"
};



export default WebhookBranchProtectionRuleEditedChangesLinearHistoryRequirementEnforcementLevel;

