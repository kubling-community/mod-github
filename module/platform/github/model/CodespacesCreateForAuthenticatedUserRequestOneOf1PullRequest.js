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
 * The CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest model module.
 * @module model/CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest
 * @version 1.1.4
 */
class CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest {
    /**
     * Constructs a new <code>CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest</code>.
     * Pull request number for this codespace
     * @alias module:model/CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest
     * @param pullRequestNumber {Number} Pull request number
     * @param repositoryId {Number} Repository id for this codespace
     */
    constructor(pullRequestNumber, repositoryId) { 
        
        CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest.initialize(this, pullRequestNumber, repositoryId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pullRequestNumber, repositoryId) { 
        obj['pull_request_number'] = pullRequestNumber;
        obj['repository_id'] = repositoryId;
    }

    /**
     * Constructs a <code>CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest} obj Optional instance to populate.
     * @return {module:model/CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest} The populated <code>CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest();

            if (data.hasOwnProperty('pull_request_number')) {
                obj['pull_request_number'] = ApiClient.convertToType(data['pull_request_number'], 'Number');
            }
            if (data.hasOwnProperty('repository_id')) {
                obj['repository_id'] = ApiClient.convertToType(data['repository_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest.RequiredProperties = ["pull_request_number", "repository_id"];

/**
 * Pull request number
 * @member {Number} pull_request_number
 */
CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest.prototype['pull_request_number'] = undefined;

/**
 * Repository id for this codespace
 * @member {Number} repository_id
 */
CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest.prototype['repository_id'] = undefined;






export default CodespacesCreateForAuthenticatedUserRequestOneOf1PullRequest;

