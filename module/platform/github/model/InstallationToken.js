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
import AppPermissions from './AppPermissions';
import Repository from './Repository';

/**
 * The InstallationToken model module.
 * @module model/InstallationToken
 * @version 1.1.4
 */
class InstallationToken {
    /**
     * Constructs a new <code>InstallationToken</code>.
     * Authentication token for a GitHub App installed on a user or org.
     * @alias module:model/InstallationToken
     * @param token {String} 
     * @param expiresAt {String} 
     */
    constructor(token, expiresAt) { 
        
        InstallationToken.initialize(this, token, expiresAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token, expiresAt) { 
        obj['token'] = token;
        obj['expires_at'] = expiresAt;
    }

    /**
     * Constructs a <code>InstallationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallationToken} obj Optional instance to populate.
     * @return {module:model/InstallationToken} The populated <code>InstallationToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallationToken();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = AppPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repository]);
            }
            if (data.hasOwnProperty('single_file')) {
                obj['single_file'] = ApiClient.convertToType(data['single_file'], 'String');
            }
            if (data.hasOwnProperty('has_multiple_single_files')) {
                obj['has_multiple_single_files'] = ApiClient.convertToType(data['has_multiple_single_files'], 'Boolean');
            }
            if (data.hasOwnProperty('single_file_paths')) {
                obj['single_file_paths'] = ApiClient.convertToType(data['single_file_paths'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstallationToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstallationToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InstallationToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['expires_at'] && !(typeof data['expires_at'] === 'string' || data['expires_at'] instanceof String)) {
            throw new Error("Expected the field `expires_at` to be a primitive type in the JSON string but got " + data['expires_at']);
        }
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          AppPermissions.validateJSON(data['permissions']);
        }
        // ensure the json data is a string
        if (data['repository_selection'] && !(typeof data['repository_selection'] === 'string' || data['repository_selection'] instanceof String)) {
            throw new Error("Expected the field `repository_selection` to be a primitive type in the JSON string but got " + data['repository_selection']);
        }
        if (data['repositories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['repositories'])) {
                throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
            }
            // validate the optional field `repositories` (array)
            for (const item of data['repositories']) {
                Repository.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['single_file'] && !(typeof data['single_file'] === 'string' || data['single_file'] instanceof String)) {
            throw new Error("Expected the field `single_file` to be a primitive type in the JSON string but got " + data['single_file']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['single_file_paths'])) {
            throw new Error("Expected the field `single_file_paths` to be an array in the JSON data but got " + data['single_file_paths']);
        }

        return true;
    }


}

InstallationToken.RequiredProperties = ["token", "expires_at"];

/**
 * @member {String} token
 */
InstallationToken.prototype['token'] = undefined;

/**
 * @member {String} expires_at
 */
InstallationToken.prototype['expires_at'] = undefined;

/**
 * @member {module:model/AppPermissions} permissions
 */
InstallationToken.prototype['permissions'] = undefined;

/**
 * @member {module:model/InstallationToken.RepositorySelectionEnum} repository_selection
 */
InstallationToken.prototype['repository_selection'] = undefined;

/**
 * @member {Array.<module:model/Repository>} repositories
 */
InstallationToken.prototype['repositories'] = undefined;

/**
 * @member {String} single_file
 */
InstallationToken.prototype['single_file'] = undefined;

/**
 * @member {Boolean} has_multiple_single_files
 */
InstallationToken.prototype['has_multiple_single_files'] = undefined;

/**
 * @member {Array.<String>} single_file_paths
 */
InstallationToken.prototype['single_file_paths'] = undefined;





/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */
InstallationToken['RepositorySelectionEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "selected"
     * @const
     */
    "selected": "selected"
};



export default InstallationToken;

