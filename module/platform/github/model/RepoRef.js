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
 * The RepoRef model module.
 * @module model/RepoRef
 * @version 1.1.4
 */
class RepoRef {
    /**
     * Constructs a new <code>RepoRef</code>.
     * @alias module:model/RepoRef
     * @param id {Number} 
     * @param name {String} 
     * @param url {String} 
     */
    constructor(id, name, url) { 
        
        RepoRef.initialize(this, id, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, url) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>RepoRef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoRef} obj Optional instance to populate.
     * @return {module:model/RepoRef} The populated <code>RepoRef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepoRef();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepoRef</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepoRef</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepoRef.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

RepoRef.RequiredProperties = ["id", "name", "url"];

/**
 * @member {Number} id
 */
RepoRef.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RepoRef.prototype['name'] = undefined;

/**
 * @member {String} url
 */
RepoRef.prototype['url'] = undefined;






export default RepoRef;

