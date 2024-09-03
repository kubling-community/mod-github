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
 * The CodeScanningAlertInstanceMessage model module.
 * @module model/CodeScanningAlertInstanceMessage
 * @version 1.1.4
 */
class CodeScanningAlertInstanceMessage {
    /**
     * Constructs a new <code>CodeScanningAlertInstanceMessage</code>.
     * @alias module:model/CodeScanningAlertInstanceMessage
     */
    constructor() { 
        
        CodeScanningAlertInstanceMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeScanningAlertInstanceMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningAlertInstanceMessage} obj Optional instance to populate.
     * @return {module:model/CodeScanningAlertInstanceMessage} The populated <code>CodeScanningAlertInstanceMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningAlertInstanceMessage();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningAlertInstanceMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningAlertInstanceMessage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}



/**
 * @member {String} text
 */
CodeScanningAlertInstanceMessage.prototype['text'] = undefined;






export default CodeScanningAlertInstanceMessage;

