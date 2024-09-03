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
import Integration from './Integration';
import SimpleUser from './SimpleUser';
import Team from './Team';

/**
 * The ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances model module.
 * @module model/ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances
 * @version 1.1.4
 */
class ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances {
    /**
     * Constructs a new <code>ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances</code>.
     * @alias module:model/ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances
     * @param users {Array.<module:model/SimpleUser>} 
     * @param teams {Array.<module:model/Team>} 
     */
    constructor(users, teams) { 
        
        ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.initialize(this, users, teams);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, users, teams) { 
        obj['users'] = users;
        obj['teams'] = teams;
    }

    /**
     * Constructs a <code>ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances} The populated <code>ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [SimpleUser]);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], [Team]);
            }
            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [Integration]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                SimpleUser.validateJSON(item);
            };
        }
        if (data['teams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['teams'])) {
                throw new Error("Expected the field `teams` to be an array in the JSON data but got " + data['teams']);
            }
            // validate the optional field `teams` (array)
            for (const item of data['teams']) {
                Team.validateJSON(item);
            };
        }
        if (data['apps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['apps'])) {
                throw new Error("Expected the field `apps` to be an array in the JSON data but got " + data['apps']);
            }
            // validate the optional field `apps` (array)
            for (const item of data['apps']) {
                Integration.validateJSON(item);
            };
        }

        return true;
    }


}

ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.RequiredProperties = ["users", "teams"];

/**
 * @member {Array.<module:model/SimpleUser>} users
 */
ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.prototype['users'] = undefined;

/**
 * @member {Array.<module:model/Team>} teams
 */
ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.prototype['teams'] = undefined;

/**
 * @member {Array.<module:model/Integration>} apps
 */
ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances.prototype['apps'] = undefined;






export default ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances;

