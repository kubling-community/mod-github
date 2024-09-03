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
 * The WebhookMilestoneEditedChangesTitle model module.
 * @module model/WebhookMilestoneEditedChangesTitle
 * @version 1.1.4
 */
class WebhookMilestoneEditedChangesTitle {
    /**
     * Constructs a new <code>WebhookMilestoneEditedChangesTitle</code>.
     * @alias module:model/WebhookMilestoneEditedChangesTitle
     * @param from {String} The previous version of the title if the action was `edited`.
     */
    constructor(from) { 
        
        WebhookMilestoneEditedChangesTitle.initialize(this, from);
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
     * Constructs a <code>WebhookMilestoneEditedChangesTitle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookMilestoneEditedChangesTitle} obj Optional instance to populate.
     * @return {module:model/WebhookMilestoneEditedChangesTitle} The populated <code>WebhookMilestoneEditedChangesTitle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookMilestoneEditedChangesTitle();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookMilestoneEditedChangesTitle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookMilestoneEditedChangesTitle</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookMilestoneEditedChangesTitle.RequiredProperties) {
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

WebhookMilestoneEditedChangesTitle.RequiredProperties = ["from"];

/**
 * The previous version of the title if the action was `edited`.
 * @member {String} from
 */
WebhookMilestoneEditedChangesTitle.prototype['from'] = undefined;






export default WebhookMilestoneEditedChangesTitle;

