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
 * The GitignoreTemplate model module.
 * @module model/GitignoreTemplate
 * @version 1.1.4
 */
class GitignoreTemplate {
    /**
     * Constructs a new <code>GitignoreTemplate</code>.
     * Gitignore Template
     * @alias module:model/GitignoreTemplate
     * @param name {String} 
     * @param source {String} 
     */
    constructor(name, source) { 
        
        GitignoreTemplate.initialize(this, name, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, source) { 
        obj['name'] = name;
        obj['source'] = source;
    }

    /**
     * Constructs a <code>GitignoreTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitignoreTemplate} obj Optional instance to populate.
     * @return {module:model/GitignoreTemplate} The populated <code>GitignoreTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitignoreTemplate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitignoreTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitignoreTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitignoreTemplate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }

        return true;
    }


}

GitignoreTemplate.RequiredProperties = ["name", "source"];

/**
 * @member {String} name
 */
GitignoreTemplate.prototype['name'] = undefined;

/**
 * @member {String} source
 */
GitignoreTemplate.prototype['source'] = undefined;






export default GitignoreTemplate;

