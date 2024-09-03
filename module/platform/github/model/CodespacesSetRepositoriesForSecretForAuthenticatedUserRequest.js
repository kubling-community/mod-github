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
 * The CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest model module.
 * @module model/CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest
 * @version 1.1.4
 */
class CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest {
    /**
     * Constructs a new <code>CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest</code>.
     * @alias module:model/CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest
     * @param selectedRepositoryIds {Array.<Number>} An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/codespaces/secrets#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.
     */
    constructor(selectedRepositoryIds) { 
        
        CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest.initialize(this, selectedRepositoryIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, selectedRepositoryIds) { 
        obj['selected_repository_ids'] = selectedRepositoryIds;
    }

    /**
     * Constructs a <code>CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest} obj Optional instance to populate.
     * @return {module:model/CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest} The populated <code>CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest();

            if (data.hasOwnProperty('selected_repository_ids')) {
                obj['selected_repository_ids'] = ApiClient.convertToType(data['selected_repository_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['selected_repository_ids'])) {
            throw new Error("Expected the field `selected_repository_ids` to be an array in the JSON data but got " + data['selected_repository_ids']);
        }

        return true;
    }


}

CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest.RequiredProperties = ["selected_repository_ids"];

/**
 * An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/codespaces/secrets#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.
 * @member {Array.<Number>} selected_repository_ids
 */
CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest.prototype['selected_repository_ids'] = undefined;






export default CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest;

