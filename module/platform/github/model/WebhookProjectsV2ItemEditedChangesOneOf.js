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
import WebhookProjectsV2ItemEditedChangesOneOfFieldValue from './WebhookProjectsV2ItemEditedChangesOneOfFieldValue';

/**
 * The WebhookProjectsV2ItemEditedChangesOneOf model module.
 * @module model/WebhookProjectsV2ItemEditedChangesOneOf
 * @version 1.1.4
 */
class WebhookProjectsV2ItemEditedChangesOneOf {
    /**
     * Constructs a new <code>WebhookProjectsV2ItemEditedChangesOneOf</code>.
     * @alias module:model/WebhookProjectsV2ItemEditedChangesOneOf
     * @param fieldValue {module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue} 
     */
    constructor(fieldValue) { 
        
        WebhookProjectsV2ItemEditedChangesOneOf.initialize(this, fieldValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldValue) { 
        obj['field_value'] = fieldValue;
    }

    /**
     * Constructs a <code>WebhookProjectsV2ItemEditedChangesOneOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectsV2ItemEditedChangesOneOf} obj Optional instance to populate.
     * @return {module:model/WebhookProjectsV2ItemEditedChangesOneOf} The populated <code>WebhookProjectsV2ItemEditedChangesOneOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectsV2ItemEditedChangesOneOf();

            if (data.hasOwnProperty('field_value')) {
                obj['field_value'] = WebhookProjectsV2ItemEditedChangesOneOfFieldValue.constructFromObject(data['field_value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectsV2ItemEditedChangesOneOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectsV2ItemEditedChangesOneOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookProjectsV2ItemEditedChangesOneOf.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `field_value`
        if (data['field_value']) { // data not null
          WebhookProjectsV2ItemEditedChangesOneOfFieldValue.validateJSON(data['field_value']);
        }

        return true;
    }


}

WebhookProjectsV2ItemEditedChangesOneOf.RequiredProperties = ["field_value"];

/**
 * @member {module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue} field_value
 */
WebhookProjectsV2ItemEditedChangesOneOf.prototype['field_value'] = undefined;






export default WebhookProjectsV2ItemEditedChangesOneOf;

