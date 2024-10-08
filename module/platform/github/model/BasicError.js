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
 * The BasicError model module.
 * @module model/BasicError
 * @version 1.1.4
 */
class BasicError {
    /**
     * Constructs a new <code>BasicError</code>.
     * Basic Error
     * @alias module:model/BasicError
     */
    constructor() { 
        
        BasicError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicError} obj Optional instance to populate.
     * @return {module:model/BasicError} The populated <code>BasicError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicError();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('documentation_url')) {
                obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasicError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasicError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['documentation_url'] && !(typeof data['documentation_url'] === 'string' || data['documentation_url'] instanceof String)) {
            throw new Error("Expected the field `documentation_url` to be a primitive type in the JSON string but got " + data['documentation_url']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
BasicError.prototype['message'] = undefined;

/**
 * @member {String} documentation_url
 */
BasicError.prototype['documentation_url'] = undefined;

/**
 * @member {String} url
 */
BasicError.prototype['url'] = undefined;

/**
 * @member {String} status
 */
BasicError.prototype['status'] = undefined;






export default BasicError;

