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
 * The ReposDeleteFileRequestAuthor model module.
 * @module model/ReposDeleteFileRequestAuthor
 * @version 1.1.4
 */
class ReposDeleteFileRequestAuthor {
    /**
     * Constructs a new <code>ReposDeleteFileRequestAuthor</code>.
     * object containing information about the author.
     * @alias module:model/ReposDeleteFileRequestAuthor
     */
    constructor() { 
        
        ReposDeleteFileRequestAuthor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposDeleteFileRequestAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposDeleteFileRequestAuthor} obj Optional instance to populate.
     * @return {module:model/ReposDeleteFileRequestAuthor} The populated <code>ReposDeleteFileRequestAuthor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposDeleteFileRequestAuthor();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposDeleteFileRequestAuthor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposDeleteFileRequestAuthor</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * The name of the author (or committer) of the commit
 * @member {String} name
 */
ReposDeleteFileRequestAuthor.prototype['name'] = undefined;

/**
 * The email of the author (or committer) of the commit
 * @member {String} email
 */
ReposDeleteFileRequestAuthor.prototype['email'] = undefined;






export default ReposDeleteFileRequestAuthor;

