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

import RepositoryRulesetConditions from './RepositoryRulesetConditions';
import WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChanges from './WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChanges';

/**
 * The WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner model module.
 * @module model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner
 * @version 1.1.4
 */
class WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner {
    /**
     * Constructs a new <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner</code>.
     * @alias module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner
     */
    constructor() { 
        
        WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner} obj Optional instance to populate.
     * @return {module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner} The populated <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner();

            if (data.hasOwnProperty('condition')) {
                obj['condition'] = RepositoryRulesetConditions.constructFromObject(data['condition']);
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          RepositoryRulesetConditions.validateJSON(data['condition']);
        }
        // validate the optional field `changes`
        if (data['changes']) { // data not null
          WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChanges.validateJSON(data['changes']);
        }

        return true;
    }


}



/**
 * @member {module:model/RepositoryRulesetConditions} condition
 */
WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner.prototype['condition'] = undefined;

/**
 * @member {module:model/WebhookRepositoryRulesetEditedChangesConditionsUpdatedInnerChanges} changes
 */
WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner.prototype['changes'] = undefined;






export default WebhookRepositoryRulesetEditedChangesConditionsUpdatedInner;

