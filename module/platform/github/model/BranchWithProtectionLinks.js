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
 * The BranchWithProtectionLinks model module.
 * @module model/BranchWithProtectionLinks
 * @version 1.1.4
 */
class BranchWithProtectionLinks {
    /**
     * Constructs a new <code>BranchWithProtectionLinks</code>.
     * @alias module:model/BranchWithProtectionLinks
     * @param html {String} 
     * @param self {String} 
     */
    constructor(html, self) { 
        
        BranchWithProtectionLinks.initialize(this, html, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, html, self) { 
        obj['html'] = html;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>BranchWithProtectionLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchWithProtectionLinks} obj Optional instance to populate.
     * @return {module:model/BranchWithProtectionLinks} The populated <code>BranchWithProtectionLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchWithProtectionLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BranchWithProtectionLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BranchWithProtectionLinks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BranchWithProtectionLinks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}

BranchWithProtectionLinks.RequiredProperties = ["html", "self"];

/**
 * @member {String} html
 */
BranchWithProtectionLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
BranchWithProtectionLinks.prototype['self'] = undefined;






export default BranchWithProtectionLinks;

