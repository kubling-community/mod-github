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
 * The GitCreateTagRequestTagger model module.
 * @module model/GitCreateTagRequestTagger
 * @version 1.1.4
 */
class GitCreateTagRequestTagger {
    /**
     * Constructs a new <code>GitCreateTagRequestTagger</code>.
     * An object with information about the individual creating the tag.
     * @alias module:model/GitCreateTagRequestTagger
     * @param name {String} The name of the author of the tag
     * @param email {String} The email of the author of the tag
     */
    constructor(name, email) { 
        
        GitCreateTagRequestTagger.initialize(this, name, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, email) { 
        obj['name'] = name;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>GitCreateTagRequestTagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitCreateTagRequestTagger} obj Optional instance to populate.
     * @return {module:model/GitCreateTagRequestTagger} The populated <code>GitCreateTagRequestTagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitCreateTagRequestTagger();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitCreateTagRequestTagger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitCreateTagRequestTagger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitCreateTagRequestTagger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

GitCreateTagRequestTagger.RequiredProperties = ["name", "email"];

/**
 * The name of the author of the tag
 * @member {String} name
 */
GitCreateTagRequestTagger.prototype['name'] = undefined;

/**
 * The email of the author of the tag
 * @member {String} email
 */
GitCreateTagRequestTagger.prototype['email'] = undefined;

/**
 * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {Date} date
 */
GitCreateTagRequestTagger.prototype['date'] = undefined;






export default GitCreateTagRequestTagger;

