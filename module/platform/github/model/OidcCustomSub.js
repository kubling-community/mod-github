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
 * The OidcCustomSub model module.
 * @module model/OidcCustomSub
 * @version 1.1.4
 */
class OidcCustomSub {
    /**
     * Constructs a new <code>OidcCustomSub</code>.
     * Actions OIDC Subject customization
     * @alias module:model/OidcCustomSub
     * @param includeClaimKeys {Array.<String>} Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
     */
    constructor(includeClaimKeys) { 
        
        OidcCustomSub.initialize(this, includeClaimKeys);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, includeClaimKeys) { 
        obj['include_claim_keys'] = includeClaimKeys;
    }

    /**
     * Constructs a <code>OidcCustomSub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OidcCustomSub} obj Optional instance to populate.
     * @return {module:model/OidcCustomSub} The populated <code>OidcCustomSub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OidcCustomSub();

            if (data.hasOwnProperty('include_claim_keys')) {
                obj['include_claim_keys'] = ApiClient.convertToType(data['include_claim_keys'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OidcCustomSub</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OidcCustomSub</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OidcCustomSub.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['include_claim_keys'])) {
            throw new Error("Expected the field `include_claim_keys` to be an array in the JSON data but got " + data['include_claim_keys']);
        }

        return true;
    }


}

OidcCustomSub.RequiredProperties = ["include_claim_keys"];

/**
 * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
 * @member {Array.<String>} include_claim_keys
 */
OidcCustomSub.prototype['include_claim_keys'] = undefined;






export default OidcCustomSub;

