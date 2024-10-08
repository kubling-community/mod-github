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
import ProtectedBranchPullRequestReviewBypassPullRequestAllowances from './ProtectedBranchPullRequestReviewBypassPullRequestAllowances';
import ProtectedBranchPullRequestReviewDismissalRestrictions from './ProtectedBranchPullRequestReviewDismissalRestrictions';

/**
 * The ProtectedBranchPullRequestReview model module.
 * @module model/ProtectedBranchPullRequestReview
 * @version 1.1.4
 */
class ProtectedBranchPullRequestReview {
    /**
     * Constructs a new <code>ProtectedBranchPullRequestReview</code>.
     * Protected Branch Pull Request Review
     * @alias module:model/ProtectedBranchPullRequestReview
     * @param dismissStaleReviews {Boolean} 
     * @param requireCodeOwnerReviews {Boolean} 
     */
    constructor(dismissStaleReviews, requireCodeOwnerReviews) { 
        
        ProtectedBranchPullRequestReview.initialize(this, dismissStaleReviews, requireCodeOwnerReviews);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dismissStaleReviews, requireCodeOwnerReviews) { 
        obj['dismiss_stale_reviews'] = dismissStaleReviews;
        obj['require_code_owner_reviews'] = requireCodeOwnerReviews;
    }

    /**
     * Constructs a <code>ProtectedBranchPullRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchPullRequestReview} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchPullRequestReview} The populated <code>ProtectedBranchPullRequestReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProtectedBranchPullRequestReview();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('dismissal_restrictions')) {
                obj['dismissal_restrictions'] = ProtectedBranchPullRequestReviewDismissalRestrictions.constructFromObject(data['dismissal_restrictions']);
            }
            if (data.hasOwnProperty('bypass_pull_request_allowances')) {
                obj['bypass_pull_request_allowances'] = ProtectedBranchPullRequestReviewBypassPullRequestAllowances.constructFromObject(data['bypass_pull_request_allowances']);
            }
            if (data.hasOwnProperty('dismiss_stale_reviews')) {
                obj['dismiss_stale_reviews'] = ApiClient.convertToType(data['dismiss_stale_reviews'], 'Boolean');
            }
            if (data.hasOwnProperty('require_code_owner_reviews')) {
                obj['require_code_owner_reviews'] = ApiClient.convertToType(data['require_code_owner_reviews'], 'Boolean');
            }
            if (data.hasOwnProperty('required_approving_review_count')) {
                obj['required_approving_review_count'] = ApiClient.convertToType(data['required_approving_review_count'], 'Number');
            }
            if (data.hasOwnProperty('require_last_push_approval')) {
                obj['require_last_push_approval'] = ApiClient.convertToType(data['require_last_push_approval'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProtectedBranchPullRequestReview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProtectedBranchPullRequestReview</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProtectedBranchPullRequestReview.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `dismissal_restrictions`
        if (data['dismissal_restrictions']) { // data not null
          ProtectedBranchPullRequestReviewDismissalRestrictions.validateJSON(data['dismissal_restrictions']);
        }
        // validate the optional field `bypass_pull_request_allowances`
        if (data['bypass_pull_request_allowances']) { // data not null
          ProtectedBranchPullRequestReviewBypassPullRequestAllowances.validateJSON(data['bypass_pull_request_allowances']);
        }

        return true;
    }


}

ProtectedBranchPullRequestReview.RequiredProperties = ["dismiss_stale_reviews", "require_code_owner_reviews"];

/**
 * @member {String} url
 */
ProtectedBranchPullRequestReview.prototype['url'] = undefined;

/**
 * @member {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} dismissal_restrictions
 */
ProtectedBranchPullRequestReview.prototype['dismissal_restrictions'] = undefined;

/**
 * @member {module:model/ProtectedBranchPullRequestReviewBypassPullRequestAllowances} bypass_pull_request_allowances
 */
ProtectedBranchPullRequestReview.prototype['bypass_pull_request_allowances'] = undefined;

/**
 * @member {Boolean} dismiss_stale_reviews
 */
ProtectedBranchPullRequestReview.prototype['dismiss_stale_reviews'] = undefined;

/**
 * @member {Boolean} require_code_owner_reviews
 */
ProtectedBranchPullRequestReview.prototype['require_code_owner_reviews'] = undefined;

/**
 * @member {Number} required_approving_review_count
 */
ProtectedBranchPullRequestReview.prototype['required_approving_review_count'] = undefined;

/**
 * Whether the most recent push must be approved by someone other than the person who pushed it.
 * @member {Boolean} require_last_push_approval
 * @default false
 */
ProtectedBranchPullRequestReview.prototype['require_last_push_approval'] = false;






export default ProtectedBranchPullRequestReview;

