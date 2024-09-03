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
 * The ProtectedBranchPullRequestReviewDismissalRestrictions model module.
 * @module model/ProtectedBranchPullRequestReviewDismissalRestrictions
 * @version 1.1.4
 */
class ProtectedBranchPullRequestReviewDismissalRestrictions {
    /**
     * Constructs a new <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code>.
     * @alias module:model/ProtectedBranchPullRequestReviewDismissalRestrictions
     */
    constructor() { 
        
        ProtectedBranchPullRequestReviewDismissalRestrictions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} The populated <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProtectedBranchPullRequestReviewDismissalRestrictions();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [SimpleUser]);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], [Team]);
            }
            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [Integration]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('users_url')) {
                obj['users_url'] = ApiClient.convertToType(data['users_url'], 'String');
            }
            if (data.hasOwnProperty('teams_url')) {
                obj['teams_url'] = ApiClient.convertToType(data['teams_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code>.
     */
    static validateJSON(data) {
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
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['users_url'] && !(typeof data['users_url'] === 'string' || data['users_url'] instanceof String)) {
            throw new Error("Expected the field `users_url` to be a primitive type in the JSON string but got " + data['users_url']);
        }
        // ensure the json data is a string
        if (data['teams_url'] && !(typeof data['teams_url'] === 'string' || data['teams_url'] instanceof String)) {
            throw new Error("Expected the field `teams_url` to be a primitive type in the JSON string but got " + data['teams_url']);
        }

        return true;
    }


}



/**
 * The list of users with review dismissal access.
 * @member {Array.<module:model/SimpleUser>} users
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['users'] = undefined;

/**
 * The list of teams with review dismissal access.
 * @member {Array.<module:model/Team>} teams
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['teams'] = undefined;

/**
 * The list of apps with review dismissal access.
 * @member {Array.<module:model/Integration>} apps
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['apps'] = undefined;

/**
 * @member {String} url
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['url'] = undefined;

/**
 * @member {String} users_url
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['users_url'] = undefined;

/**
 * @member {String} teams_url
 */
ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['teams_url'] = undefined;






export default ProtectedBranchPullRequestReviewDismissalRestrictions;

