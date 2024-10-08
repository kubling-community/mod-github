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
 * The HovercardContextsInner model module.
 * @module model/HovercardContextsInner
 * @version 1.1.4
 */
class HovercardContextsInner {
    /**
     * Constructs a new <code>HovercardContextsInner</code>.
     * @alias module:model/HovercardContextsInner
     * @param message {String} 
     * @param octicon {String} 
     */
    constructor(message, octicon) { 
        
        HovercardContextsInner.initialize(this, message, octicon);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, octicon) { 
        obj['message'] = message;
        obj['octicon'] = octicon;
    }

    /**
     * Constructs a <code>HovercardContextsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HovercardContextsInner} obj Optional instance to populate.
     * @return {module:model/HovercardContextsInner} The populated <code>HovercardContextsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HovercardContextsInner();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('octicon')) {
                obj['octicon'] = ApiClient.convertToType(data['octicon'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HovercardContextsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HovercardContextsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of HovercardContextsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['octicon'] && !(typeof data['octicon'] === 'string' || data['octicon'] instanceof String)) {
            throw new Error("Expected the field `octicon` to be a primitive type in the JSON string but got " + data['octicon']);
        }

        return true;
    }


}

HovercardContextsInner.RequiredProperties = ["message", "octicon"];

/**
 * @member {String} message
 */
HovercardContextsInner.prototype['message'] = undefined;

/**
 * @member {String} octicon
 */
HovercardContextsInner.prototype['octicon'] = undefined;






export default HovercardContextsInner;

