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
 * The WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude model module.
 * @module model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude
 * @version 1.1.4
 */
class WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude {
    /**
     * Constructs a new <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude</code>.
     * @alias module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude
     */
    constructor() { 
        
        WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude} obj Optional instance to populate.
     * @return {module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude} The populated <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['from'])) {
            throw new Error("Expected the field `from` to be an array in the JSON data but got " + data['from']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} from
 */
WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude.prototype['from'] = undefined;






export default WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChangesInclude;

