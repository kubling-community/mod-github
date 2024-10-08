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
 * The WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames model module.
 * @module model/WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames
 * @version 1.1.4
 */
class WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames {
    /**
     * Constructs a new <code>WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames</code>.
     * @alias module:model/WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames
     * @param from {Array.<String>} 
     */
    constructor(from) { 
        
        WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames.initialize(this, from);
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
     * Constructs a <code>WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames} obj Optional instance to populate.
     * @return {module:model/WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames} The populated <code>WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['from'])) {
            throw new Error("Expected the field `from` to be an array in the JSON data but got " + data['from']);
        }

        return true;
    }


}

WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames.RequiredProperties = ["from"];

/**
 * @member {Array.<String>} from
 */
WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames.prototype['from'] = undefined;






export default WebhookBranchProtectionRuleEditedChangesAuthorizedActorNames;

