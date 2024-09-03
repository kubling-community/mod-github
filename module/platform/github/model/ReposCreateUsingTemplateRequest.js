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
 * The ReposCreateUsingTemplateRequest model module.
 * @module model/ReposCreateUsingTemplateRequest
 * @version 1.1.4
 */
class ReposCreateUsingTemplateRequest {
    /**
     * Constructs a new <code>ReposCreateUsingTemplateRequest</code>.
     * @alias module:model/ReposCreateUsingTemplateRequest
     * @param name {String} The name of the new repository.
     */
    constructor(name) { 
        
        ReposCreateUsingTemplateRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ReposCreateUsingTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateUsingTemplateRequest} obj Optional instance to populate.
     * @return {module:model/ReposCreateUsingTemplateRequest} The populated <code>ReposCreateUsingTemplateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateUsingTemplateRequest();

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('include_all_branches')) {
                obj['include_all_branches'] = ApiClient.convertToType(data['include_all_branches'], 'Boolean');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateUsingTemplateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateUsingTemplateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposCreateUsingTemplateRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

ReposCreateUsingTemplateRequest.RequiredProperties = ["name"];

/**
 * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
 * @member {String} owner
 */
ReposCreateUsingTemplateRequest.prototype['owner'] = undefined;

/**
 * The name of the new repository.
 * @member {String} name
 */
ReposCreateUsingTemplateRequest.prototype['name'] = undefined;

/**
 * A short description of the new repository.
 * @member {String} description
 */
ReposCreateUsingTemplateRequest.prototype['description'] = undefined;

/**
 * Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
 * @member {Boolean} include_all_branches
 * @default false
 */
ReposCreateUsingTemplateRequest.prototype['include_all_branches'] = false;

/**
 * Either `true` to create a new private repository or `false` to create a new public one.
 * @member {Boolean} private
 * @default false
 */
ReposCreateUsingTemplateRequest.prototype['private'] = false;






export default ReposCreateUsingTemplateRequest;

