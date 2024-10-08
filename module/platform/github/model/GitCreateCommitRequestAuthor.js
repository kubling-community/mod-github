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
 * The GitCreateCommitRequestAuthor model module.
 * @module model/GitCreateCommitRequestAuthor
 * @version 1.1.4
 */
class GitCreateCommitRequestAuthor {
    /**
     * Constructs a new <code>GitCreateCommitRequestAuthor</code>.
     * Information about the author of the commit. By default, the &#x60;author&#x60; will be the authenticated user and the current date. See the &#x60;author&#x60; and &#x60;committer&#x60; object below for details.
     * @alias module:model/GitCreateCommitRequestAuthor
     * @param name {String} The name of the author (or committer) of the commit
     * @param email {String} The email of the author (or committer) of the commit
     */
    constructor(name, email) { 
        
        GitCreateCommitRequestAuthor.initialize(this, name, email);
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
     * Constructs a <code>GitCreateCommitRequestAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitCreateCommitRequestAuthor} obj Optional instance to populate.
     * @return {module:model/GitCreateCommitRequestAuthor} The populated <code>GitCreateCommitRequestAuthor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitCreateCommitRequestAuthor();

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
     * Validates the JSON data with respect to <code>GitCreateCommitRequestAuthor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitCreateCommitRequestAuthor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitCreateCommitRequestAuthor.RequiredProperties) {
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

GitCreateCommitRequestAuthor.RequiredProperties = ["name", "email"];

/**
 * The name of the author (or committer) of the commit
 * @member {String} name
 */
GitCreateCommitRequestAuthor.prototype['name'] = undefined;

/**
 * The email of the author (or committer) of the commit
 * @member {String} email
 */
GitCreateCommitRequestAuthor.prototype['email'] = undefined;

/**
 * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {Date} date
 */
GitCreateCommitRequestAuthor.prototype['date'] = undefined;






export default GitCreateCommitRequestAuthor;

