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
 * The ReposMergeRequest model module.
 * @module model/ReposMergeRequest
 * @version 1.1.4
 */
class ReposMergeRequest {
    /**
     * Constructs a new <code>ReposMergeRequest</code>.
     * @alias module:model/ReposMergeRequest
     * @param base {String} The name of the base branch that the head will be merged into.
     * @param head {String} The head to merge. This can be a branch name or a commit SHA1.
     */
    constructor(base, head) { 
        
        ReposMergeRequest.initialize(this, base, head);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, base, head) { 
        obj['base'] = base;
        obj['head'] = head;
    }

    /**
     * Constructs a <code>ReposMergeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposMergeRequest} obj Optional instance to populate.
     * @return {module:model/ReposMergeRequest} The populated <code>ReposMergeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposMergeRequest();

            if (data.hasOwnProperty('base')) {
                obj['base'] = ApiClient.convertToType(data['base'], 'String');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = ApiClient.convertToType(data['head'], 'String');
            }
            if (data.hasOwnProperty('commit_message')) {
                obj['commit_message'] = ApiClient.convertToType(data['commit_message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposMergeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposMergeRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposMergeRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['base'] && !(typeof data['base'] === 'string' || data['base'] instanceof String)) {
            throw new Error("Expected the field `base` to be a primitive type in the JSON string but got " + data['base']);
        }
        // ensure the json data is a string
        if (data['head'] && !(typeof data['head'] === 'string' || data['head'] instanceof String)) {
            throw new Error("Expected the field `head` to be a primitive type in the JSON string but got " + data['head']);
        }
        // ensure the json data is a string
        if (data['commit_message'] && !(typeof data['commit_message'] === 'string' || data['commit_message'] instanceof String)) {
            throw new Error("Expected the field `commit_message` to be a primitive type in the JSON string but got " + data['commit_message']);
        }

        return true;
    }


}

ReposMergeRequest.RequiredProperties = ["base", "head"];

/**
 * The name of the base branch that the head will be merged into.
 * @member {String} base
 */
ReposMergeRequest.prototype['base'] = undefined;

/**
 * The head to merge. This can be a branch name or a commit SHA1.
 * @member {String} head
 */
ReposMergeRequest.prototype['head'] = undefined;

/**
 * Commit message to use for the merge commit. If omitted, a default message will be used.
 * @member {String} commit_message
 */
ReposMergeRequest.prototype['commit_message'] = undefined;






export default ReposMergeRequest;

