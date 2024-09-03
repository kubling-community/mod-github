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
 * The CodespacesCreateOrUpdateOrgSecretRequest model module.
 * @module model/CodespacesCreateOrUpdateOrgSecretRequest
 * @version 1.1.4
 */
class CodespacesCreateOrUpdateOrgSecretRequest {
    /**
     * Constructs a new <code>CodespacesCreateOrUpdateOrgSecretRequest</code>.
     * @alias module:model/CodespacesCreateOrUpdateOrgSecretRequest
     * @param visibility {module:model/CodespacesCreateOrUpdateOrgSecretRequest.VisibilityEnum} Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
     */
    constructor(visibility) { 
        
        CodespacesCreateOrUpdateOrgSecretRequest.initialize(this, visibility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, visibility) { 
        obj['visibility'] = visibility;
    }

    /**
     * Constructs a <code>CodespacesCreateOrUpdateOrgSecretRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespacesCreateOrUpdateOrgSecretRequest} obj Optional instance to populate.
     * @return {module:model/CodespacesCreateOrUpdateOrgSecretRequest} The populated <code>CodespacesCreateOrUpdateOrgSecretRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespacesCreateOrUpdateOrgSecretRequest();

            if (data.hasOwnProperty('encrypted_value')) {
                obj['encrypted_value'] = ApiClient.convertToType(data['encrypted_value'], 'String');
            }
            if (data.hasOwnProperty('key_id')) {
                obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('selected_repository_ids')) {
                obj['selected_repository_ids'] = ApiClient.convertToType(data['selected_repository_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespacesCreateOrUpdateOrgSecretRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespacesCreateOrUpdateOrgSecretRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespacesCreateOrUpdateOrgSecretRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['encrypted_value'] && !(typeof data['encrypted_value'] === 'string' || data['encrypted_value'] instanceof String)) {
            throw new Error("Expected the field `encrypted_value` to be a primitive type in the JSON string but got " + data['encrypted_value']);
        }
        // ensure the json data is a string
        if (data['key_id'] && !(typeof data['key_id'] === 'string' || data['key_id'] instanceof String)) {
            throw new Error("Expected the field `key_id` to be a primitive type in the JSON string but got " + data['key_id']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['selected_repository_ids'])) {
            throw new Error("Expected the field `selected_repository_ids` to be an array in the JSON data but got " + data['selected_repository_ids']);
        }

        return true;
    }


}

CodespacesCreateOrUpdateOrgSecretRequest.RequiredProperties = ["visibility"];

/**
 * The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/codespaces/organization-secrets#get-an-organization-public-key) endpoint.
 * @member {String} encrypted_value
 */
CodespacesCreateOrUpdateOrgSecretRequest.prototype['encrypted_value'] = undefined;

/**
 * The ID of the key you used to encrypt the secret.
 * @member {String} key_id
 */
CodespacesCreateOrUpdateOrgSecretRequest.prototype['key_id'] = undefined;

/**
 * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
 * @member {module:model/CodespacesCreateOrUpdateOrgSecretRequest.VisibilityEnum} visibility
 */
CodespacesCreateOrUpdateOrgSecretRequest.prototype['visibility'] = undefined;

/**
 * An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret) endpoints.
 * @member {Array.<Number>} selected_repository_ids
 */
CodespacesCreateOrUpdateOrgSecretRequest.prototype['selected_repository_ids'] = undefined;





/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
CodespacesCreateOrUpdateOrgSecretRequest['VisibilityEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "private"
     * @const
     */
    "private": "private",

    /**
     * value: "selected"
     * @const
     */
    "selected": "selected"
};



export default CodespacesCreateOrUpdateOrgSecretRequest;

