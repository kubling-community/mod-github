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
 * The ReposDeleteFileRequestCommitter model module.
 * @module model/ReposDeleteFileRequestCommitter
 * @version 1.1.4
 */
class ReposDeleteFileRequestCommitter {
    /**
     * Constructs a new <code>ReposDeleteFileRequestCommitter</code>.
     * object containing information about the committer.
     * @alias module:model/ReposDeleteFileRequestCommitter
     */
    constructor() { 
        
        ReposDeleteFileRequestCommitter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposDeleteFileRequestCommitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposDeleteFileRequestCommitter} obj Optional instance to populate.
     * @return {module:model/ReposDeleteFileRequestCommitter} The populated <code>ReposDeleteFileRequestCommitter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposDeleteFileRequestCommitter();

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
     * Validates the JSON data with respect to <code>ReposDeleteFileRequestCommitter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposDeleteFileRequestCommitter</code>.
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
ReposDeleteFileRequestCommitter.prototype['name'] = undefined;

/**
 * The email of the author (or committer) of the commit
 * @member {String} email
 */
ReposDeleteFileRequestCommitter.prototype['email'] = undefined;






export default ReposDeleteFileRequestCommitter;

