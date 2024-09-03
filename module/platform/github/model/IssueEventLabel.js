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
 * The IssueEventLabel model module.
 * @module model/IssueEventLabel
 * @version 1.1.4
 */
class IssueEventLabel {
    /**
     * Constructs a new <code>IssueEventLabel</code>.
     * Issue Event Label
     * @alias module:model/IssueEventLabel
     * @param name {String} 
     * @param color {String} 
     */
    constructor(name, color) { 
        
        IssueEventLabel.initialize(this, name, color);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, color) { 
        obj['name'] = name;
        obj['color'] = color;
    }

    /**
     * Constructs a <code>IssueEventLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventLabel} obj Optional instance to populate.
     * @return {module:model/IssueEventLabel} The populated <code>IssueEventLabel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventLabel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueEventLabel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueEventLabel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueEventLabel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }

        return true;
    }


}

IssueEventLabel.RequiredProperties = ["name", "color"];

/**
 * @member {String} name
 */
IssueEventLabel.prototype['name'] = undefined;

/**
 * @member {String} color
 */
IssueEventLabel.prototype['color'] = undefined;






export default IssueEventLabel;

