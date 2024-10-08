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
import CodeScanningVariantAnalysisLanguage from './CodeScanningVariantAnalysisLanguage';

/**
 * The CodeScanningCreateVariantAnalysisRequest model module.
 * @module model/CodeScanningCreateVariantAnalysisRequest
 * @version 1.1.4
 */
class CodeScanningCreateVariantAnalysisRequest {
    /**
     * Constructs a new <code>CodeScanningCreateVariantAnalysisRequest</code>.
     * @alias module:model/CodeScanningCreateVariantAnalysisRequest
     */
    constructor() { 
        
        CodeScanningCreateVariantAnalysisRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['language'] = language;
        obj['query_pack'] = queryPack;
    }

    /**
     * Constructs a <code>CodeScanningCreateVariantAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningCreateVariantAnalysisRequest} obj Optional instance to populate.
     * @return {module:model/CodeScanningCreateVariantAnalysisRequest} The populated <code>CodeScanningCreateVariantAnalysisRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningCreateVariantAnalysisRequest();

            if (data.hasOwnProperty('language')) {
                obj['language'] = CodeScanningVariantAnalysisLanguage.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('query_pack')) {
                obj['query_pack'] = ApiClient.convertToType(data['query_pack'], 'String');
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], ['String']);
            }
            if (data.hasOwnProperty('repository_lists')) {
                obj['repository_lists'] = ApiClient.convertToType(data['repository_lists'], ['String']);
            }
            if (data.hasOwnProperty('repository_owners')) {
                obj['repository_owners'] = ApiClient.convertToType(data['repository_owners'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningCreateVariantAnalysisRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningCreateVariantAnalysisRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodeScanningCreateVariantAnalysisRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['query_pack'] && !(typeof data['query_pack'] === 'string' || data['query_pack'] instanceof String)) {
            throw new Error("Expected the field `query_pack` to be a primitive type in the JSON string but got " + data['query_pack']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repositories'])) {
            throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repository_lists'])) {
            throw new Error("Expected the field `repository_lists` to be an array in the JSON data but got " + data['repository_lists']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repository_owners'])) {
            throw new Error("Expected the field `repository_owners` to be an array in the JSON data but got " + data['repository_owners']);
        }

        return true;
    }


}

CodeScanningCreateVariantAnalysisRequest.RequiredProperties = ["language", "query_pack"];

/**
 * @member {module:model/CodeScanningVariantAnalysisLanguage} language
 */
CodeScanningCreateVariantAnalysisRequest.prototype['language'] = undefined;

/**
 * A Base64-encoded tarball containing a CodeQL query and all its dependencies
 * @member {String} query_pack
 */
CodeScanningCreateVariantAnalysisRequest.prototype['query_pack'] = undefined;

/**
 * List of repository names (in the form `owner/repo-name`) to run the query against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.
 * @member {Array.<String>} repositories
 */
CodeScanningCreateVariantAnalysisRequest.prototype['repositories'] = undefined;

/**
 * List of repository lists to run the query against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.
 * @member {Array.<String>} repository_lists
 */
CodeScanningCreateVariantAnalysisRequest.prototype['repository_lists'] = undefined;

/**
 * List of organization or user names whose repositories the query should be run against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.
 * @member {Array.<String>} repository_owners
 */
CodeScanningCreateVariantAnalysisRequest.prototype['repository_owners'] = undefined;






export default CodeScanningCreateVariantAnalysisRequest;

