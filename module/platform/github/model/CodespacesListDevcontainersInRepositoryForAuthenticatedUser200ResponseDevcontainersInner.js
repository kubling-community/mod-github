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
 * The CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner model module.
 * @module model/CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner
 * @version 1.1.4
 */
class CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner {
    /**
     * Constructs a new <code>CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner</code>.
     * @alias module:model/CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner
     * @param path {String} 
     */
    constructor(path) { 
        
        CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner} obj Optional instance to populate.
     * @return {module:model/CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner} The populated <code>CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['display_name'] && !(typeof data['display_name'] === 'string' || data['display_name'] instanceof String)) {
            throw new Error("Expected the field `display_name` to be a primitive type in the JSON string but got " + data['display_name']);
        }

        return true;
    }


}

CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.RequiredProperties = ["path"];

/**
 * @member {String} path
 */
CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.prototype['path'] = undefined;

/**
 * @member {String} name
 */
CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.prototype['name'] = undefined;

/**
 * @member {String} display_name
 */
CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner.prototype['display_name'] = undefined;






export default CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ResponseDevcontainersInner;

