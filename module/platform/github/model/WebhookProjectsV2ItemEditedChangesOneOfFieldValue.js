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
 * The WebhookProjectsV2ItemEditedChangesOneOfFieldValue model module.
 * @module model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue
 * @version 1.1.4
 */
class WebhookProjectsV2ItemEditedChangesOneOfFieldValue {
    /**
     * Constructs a new <code>WebhookProjectsV2ItemEditedChangesOneOfFieldValue</code>.
     * @alias module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue
     */
    constructor() { 
        
        WebhookProjectsV2ItemEditedChangesOneOfFieldValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookProjectsV2ItemEditedChangesOneOfFieldValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue} obj Optional instance to populate.
     * @return {module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue} The populated <code>WebhookProjectsV2ItemEditedChangesOneOfFieldValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectsV2ItemEditedChangesOneOfFieldValue();

            if (data.hasOwnProperty('field_node_id')) {
                obj['field_node_id'] = ApiClient.convertToType(data['field_node_id'], 'String');
            }
            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectsV2ItemEditedChangesOneOfFieldValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectsV2ItemEditedChangesOneOfFieldValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field_node_id'] && !(typeof data['field_node_id'] === 'string' || data['field_node_id'] instanceof String)) {
            throw new Error("Expected the field `field_node_id` to be a primitive type in the JSON string but got " + data['field_node_id']);
        }
        // ensure the json data is a string
        if (data['field_type'] && !(typeof data['field_type'] === 'string' || data['field_type'] instanceof String)) {
            throw new Error("Expected the field `field_type` to be a primitive type in the JSON string but got " + data['field_type']);
        }

        return true;
    }


}



/**
 * @member {String} field_node_id
 */
WebhookProjectsV2ItemEditedChangesOneOfFieldValue.prototype['field_node_id'] = undefined;

/**
 * @member {String} field_type
 */
WebhookProjectsV2ItemEditedChangesOneOfFieldValue.prototype['field_type'] = undefined;






export default WebhookProjectsV2ItemEditedChangesOneOfFieldValue;

