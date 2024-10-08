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
 * The DependabotCreateOrUpdateRepoSecretRequest model module.
 * @module model/DependabotCreateOrUpdateRepoSecretRequest
 * @version 1.1.4
 */
class DependabotCreateOrUpdateRepoSecretRequest {
    /**
     * Constructs a new <code>DependabotCreateOrUpdateRepoSecretRequest</code>.
     * @alias module:model/DependabotCreateOrUpdateRepoSecretRequest
     */
    constructor() { 
        
        DependabotCreateOrUpdateRepoSecretRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DependabotCreateOrUpdateRepoSecretRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependabotCreateOrUpdateRepoSecretRequest} obj Optional instance to populate.
     * @return {module:model/DependabotCreateOrUpdateRepoSecretRequest} The populated <code>DependabotCreateOrUpdateRepoSecretRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependabotCreateOrUpdateRepoSecretRequest();

            if (data.hasOwnProperty('encrypted_value')) {
                obj['encrypted_value'] = ApiClient.convertToType(data['encrypted_value'], 'String');
            }
            if (data.hasOwnProperty('key_id')) {
                obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DependabotCreateOrUpdateRepoSecretRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DependabotCreateOrUpdateRepoSecretRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['encrypted_value'] && !(typeof data['encrypted_value'] === 'string' || data['encrypted_value'] instanceof String)) {
            throw new Error("Expected the field `encrypted_value` to be a primitive type in the JSON string but got " + data['encrypted_value']);
        }
        // ensure the json data is a string
        if (data['key_id'] && !(typeof data['key_id'] === 'string' || data['key_id'] instanceof String)) {
            throw new Error("Expected the field `key_id` to be a primitive type in the JSON string but got " + data['key_id']);
        }

        return true;
    }


}



/**
 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/dependabot/secrets#get-a-repository-public-key) endpoint.
 * @member {String} encrypted_value
 */
DependabotCreateOrUpdateRepoSecretRequest.prototype['encrypted_value'] = undefined;

/**
 * ID of the key you used to encrypt the secret.
 * @member {String} key_id
 */
DependabotCreateOrUpdateRepoSecretRequest.prototype['key_id'] = undefined;






export default DependabotCreateOrUpdateRepoSecretRequest;

