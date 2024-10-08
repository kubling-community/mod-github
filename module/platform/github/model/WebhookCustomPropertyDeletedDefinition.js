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
 * The WebhookCustomPropertyDeletedDefinition model module.
 * @module model/WebhookCustomPropertyDeletedDefinition
 * @version 1.1.4
 */
class WebhookCustomPropertyDeletedDefinition {
    /**
     * Constructs a new <code>WebhookCustomPropertyDeletedDefinition</code>.
     * @alias module:model/WebhookCustomPropertyDeletedDefinition
     * @param propertyName {String} The name of the property that was deleted.
     */
    constructor(propertyName) { 
        
        WebhookCustomPropertyDeletedDefinition.initialize(this, propertyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyName) { 
        obj['property_name'] = propertyName;
    }

    /**
     * Constructs a <code>WebhookCustomPropertyDeletedDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookCustomPropertyDeletedDefinition} obj Optional instance to populate.
     * @return {module:model/WebhookCustomPropertyDeletedDefinition} The populated <code>WebhookCustomPropertyDeletedDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookCustomPropertyDeletedDefinition();

            if (data.hasOwnProperty('property_name')) {
                obj['property_name'] = ApiClient.convertToType(data['property_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookCustomPropertyDeletedDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookCustomPropertyDeletedDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookCustomPropertyDeletedDefinition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['property_name'] && !(typeof data['property_name'] === 'string' || data['property_name'] instanceof String)) {
            throw new Error("Expected the field `property_name` to be a primitive type in the JSON string but got " + data['property_name']);
        }

        return true;
    }


}

WebhookCustomPropertyDeletedDefinition.RequiredProperties = ["property_name"];

/**
 * The name of the property that was deleted.
 * @member {String} property_name
 */
WebhookCustomPropertyDeletedDefinition.prototype['property_name'] = undefined;






export default WebhookCustomPropertyDeletedDefinition;

