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
 * The Link model module.
 * @module model/Link
 * @version 1.1.4
 */
class Link {
    /**
     * Constructs a new <code>Link</code>.
     * @alias module:model/Link
     * @param href {String} 
     */
    constructor(href) { 
        
        Link.initialize(this, href);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href) { 
        obj['href'] = href;
    }

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Link} obj Optional instance to populate.
     * @return {module:model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Link();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Link</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Link</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Link.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }

        return true;
    }


}

Link.RequiredProperties = ["href"];

/**
 * @member {String} href
 */
Link.prototype['href'] = undefined;






export default Link;

