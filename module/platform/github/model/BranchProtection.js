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
import BranchProtectionAllowForkSyncing from './BranchProtectionAllowForkSyncing';
import BranchProtectionLockBranch from './BranchProtectionLockBranch';
import BranchProtectionRequiredLinearHistory from './BranchProtectionRequiredLinearHistory';
import BranchProtectionRequiredSignatures from './BranchProtectionRequiredSignatures';
import BranchRestrictionPolicy from './BranchRestrictionPolicy';
import ProtectedBranchAdminEnforced from './ProtectedBranchAdminEnforced';
import ProtectedBranchPullRequestReview from './ProtectedBranchPullRequestReview';
import ProtectedBranchRequiredStatusCheck from './ProtectedBranchRequiredStatusCheck';

/**
 * The BranchProtection model module.
 * @module model/BranchProtection
 * @version 1.1.4
 */
class BranchProtection {
    /**
     * Constructs a new <code>BranchProtection</code>.
     * Branch Protection
     * @alias module:model/BranchProtection
     */
    constructor() { 
        
        BranchProtection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchProtection} obj Optional instance to populate.
     * @return {module:model/BranchProtection} The populated <code>BranchProtection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchProtection();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('required_status_checks')) {
                obj['required_status_checks'] = ProtectedBranchRequiredStatusCheck.constructFromObject(data['required_status_checks']);
            }
            if (data.hasOwnProperty('enforce_admins')) {
                obj['enforce_admins'] = ProtectedBranchAdminEnforced.constructFromObject(data['enforce_admins']);
            }
            if (data.hasOwnProperty('required_pull_request_reviews')) {
                obj['required_pull_request_reviews'] = ProtectedBranchPullRequestReview.constructFromObject(data['required_pull_request_reviews']);
            }
            if (data.hasOwnProperty('restrictions')) {
                obj['restrictions'] = BranchRestrictionPolicy.constructFromObject(data['restrictions']);
            }
            if (data.hasOwnProperty('required_linear_history')) {
                obj['required_linear_history'] = BranchProtectionRequiredLinearHistory.constructFromObject(data['required_linear_history']);
            }
            if (data.hasOwnProperty('allow_force_pushes')) {
                obj['allow_force_pushes'] = BranchProtectionRequiredLinearHistory.constructFromObject(data['allow_force_pushes']);
            }
            if (data.hasOwnProperty('allow_deletions')) {
                obj['allow_deletions'] = BranchProtectionRequiredLinearHistory.constructFromObject(data['allow_deletions']);
            }
            if (data.hasOwnProperty('block_creations')) {
                obj['block_creations'] = BranchProtectionRequiredLinearHistory.constructFromObject(data['block_creations']);
            }
            if (data.hasOwnProperty('required_conversation_resolution')) {
                obj['required_conversation_resolution'] = BranchProtectionRequiredLinearHistory.constructFromObject(data['required_conversation_resolution']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection_url')) {
                obj['protection_url'] = ApiClient.convertToType(data['protection_url'], 'String');
            }
            if (data.hasOwnProperty('required_signatures')) {
                obj['required_signatures'] = BranchProtectionRequiredSignatures.constructFromObject(data['required_signatures']);
            }
            if (data.hasOwnProperty('lock_branch')) {
                obj['lock_branch'] = BranchProtectionLockBranch.constructFromObject(data['lock_branch']);
            }
            if (data.hasOwnProperty('allow_fork_syncing')) {
                obj['allow_fork_syncing'] = BranchProtectionAllowForkSyncing.constructFromObject(data['allow_fork_syncing']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BranchProtection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BranchProtection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `required_status_checks`
        if (data['required_status_checks']) { // data not null
          ProtectedBranchRequiredStatusCheck.validateJSON(data['required_status_checks']);
        }
        // validate the optional field `enforce_admins`
        if (data['enforce_admins']) { // data not null
          ProtectedBranchAdminEnforced.validateJSON(data['enforce_admins']);
        }
        // validate the optional field `required_pull_request_reviews`
        if (data['required_pull_request_reviews']) { // data not null
          ProtectedBranchPullRequestReview.validateJSON(data['required_pull_request_reviews']);
        }
        // validate the optional field `restrictions`
        if (data['restrictions']) { // data not null
          BranchRestrictionPolicy.validateJSON(data['restrictions']);
        }
        // validate the optional field `required_linear_history`
        if (data['required_linear_history']) { // data not null
          BranchProtectionRequiredLinearHistory.validateJSON(data['required_linear_history']);
        }
        // validate the optional field `allow_force_pushes`
        if (data['allow_force_pushes']) { // data not null
          BranchProtectionRequiredLinearHistory.validateJSON(data['allow_force_pushes']);
        }
        // validate the optional field `allow_deletions`
        if (data['allow_deletions']) { // data not null
          BranchProtectionRequiredLinearHistory.validateJSON(data['allow_deletions']);
        }
        // validate the optional field `block_creations`
        if (data['block_creations']) { // data not null
          BranchProtectionRequiredLinearHistory.validateJSON(data['block_creations']);
        }
        // validate the optional field `required_conversation_resolution`
        if (data['required_conversation_resolution']) { // data not null
          BranchProtectionRequiredLinearHistory.validateJSON(data['required_conversation_resolution']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['protection_url'] && !(typeof data['protection_url'] === 'string' || data['protection_url'] instanceof String)) {
            throw new Error("Expected the field `protection_url` to be a primitive type in the JSON string but got " + data['protection_url']);
        }
        // validate the optional field `required_signatures`
        if (data['required_signatures']) { // data not null
          BranchProtectionRequiredSignatures.validateJSON(data['required_signatures']);
        }
        // validate the optional field `lock_branch`
        if (data['lock_branch']) { // data not null
          BranchProtectionLockBranch.validateJSON(data['lock_branch']);
        }
        // validate the optional field `allow_fork_syncing`
        if (data['allow_fork_syncing']) { // data not null
          BranchProtectionAllowForkSyncing.validateJSON(data['allow_fork_syncing']);
        }

        return true;
    }


}



/**
 * @member {String} url
 */
BranchProtection.prototype['url'] = undefined;

/**
 * @member {Boolean} enabled
 */
BranchProtection.prototype['enabled'] = undefined;

/**
 * @member {module:model/ProtectedBranchRequiredStatusCheck} required_status_checks
 */
BranchProtection.prototype['required_status_checks'] = undefined;

/**
 * @member {module:model/ProtectedBranchAdminEnforced} enforce_admins
 */
BranchProtection.prototype['enforce_admins'] = undefined;

/**
 * @member {module:model/ProtectedBranchPullRequestReview} required_pull_request_reviews
 */
BranchProtection.prototype['required_pull_request_reviews'] = undefined;

/**
 * @member {module:model/BranchRestrictionPolicy} restrictions
 */
BranchProtection.prototype['restrictions'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredLinearHistory} required_linear_history
 */
BranchProtection.prototype['required_linear_history'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredLinearHistory} allow_force_pushes
 */
BranchProtection.prototype['allow_force_pushes'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredLinearHistory} allow_deletions
 */
BranchProtection.prototype['allow_deletions'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredLinearHistory} block_creations
 */
BranchProtection.prototype['block_creations'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredLinearHistory} required_conversation_resolution
 */
BranchProtection.prototype['required_conversation_resolution'] = undefined;

/**
 * @member {String} name
 */
BranchProtection.prototype['name'] = undefined;

/**
 * @member {String} protection_url
 */
BranchProtection.prototype['protection_url'] = undefined;

/**
 * @member {module:model/BranchProtectionRequiredSignatures} required_signatures
 */
BranchProtection.prototype['required_signatures'] = undefined;

/**
 * @member {module:model/BranchProtectionLockBranch} lock_branch
 */
BranchProtection.prototype['lock_branch'] = undefined;

/**
 * @member {module:model/BranchProtectionAllowForkSyncing} allow_fork_syncing
 */
BranchProtection.prototype['allow_fork_syncing'] = undefined;






export default BranchProtection;

