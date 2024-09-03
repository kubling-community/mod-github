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
import ReposUpdateRequestSecurityAndAnalysis from './ReposUpdateRequestSecurityAndAnalysis';

/**
 * The ReposUpdateRequest model module.
 * @module model/ReposUpdateRequest
 * @version 1.1.4
 */
class ReposUpdateRequest {
    /**
     * Constructs a new <code>ReposUpdateRequest</code>.
     * @alias module:model/ReposUpdateRequest
     */
    constructor() { 
        
        ReposUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposUpdateRequest} obj Optional instance to populate.
     * @return {module:model/ReposUpdateRequest} The populated <code>ReposUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposUpdateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('security_and_analysis')) {
                obj['security_and_analysis'] = ReposUpdateRequestSecurityAndAnalysis.constructFromObject(data['security_and_analysis']);
            }
            if (data.hasOwnProperty('has_issues')) {
                obj['has_issues'] = ApiClient.convertToType(data['has_issues'], 'Boolean');
            }
            if (data.hasOwnProperty('has_projects')) {
                obj['has_projects'] = ApiClient.convertToType(data['has_projects'], 'Boolean');
            }
            if (data.hasOwnProperty('has_wiki')) {
                obj['has_wiki'] = ApiClient.convertToType(data['has_wiki'], 'Boolean');
            }
            if (data.hasOwnProperty('is_template')) {
                obj['is_template'] = ApiClient.convertToType(data['is_template'], 'Boolean');
            }
            if (data.hasOwnProperty('default_branch')) {
                obj['default_branch'] = ApiClient.convertToType(data['default_branch'], 'String');
            }
            if (data.hasOwnProperty('allow_squash_merge')) {
                obj['allow_squash_merge'] = ApiClient.convertToType(data['allow_squash_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_merge_commit')) {
                obj['allow_merge_commit'] = ApiClient.convertToType(data['allow_merge_commit'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_rebase_merge')) {
                obj['allow_rebase_merge'] = ApiClient.convertToType(data['allow_rebase_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_auto_merge')) {
                obj['allow_auto_merge'] = ApiClient.convertToType(data['allow_auto_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_branch_on_merge')) {
                obj['delete_branch_on_merge'] = ApiClient.convertToType(data['delete_branch_on_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_update_branch')) {
                obj['allow_update_branch'] = ApiClient.convertToType(data['allow_update_branch'], 'Boolean');
            }
            if (data.hasOwnProperty('use_squash_pr_title_as_default')) {
                obj['use_squash_pr_title_as_default'] = ApiClient.convertToType(data['use_squash_pr_title_as_default'], 'Boolean');
            }
            if (data.hasOwnProperty('squash_merge_commit_title')) {
                obj['squash_merge_commit_title'] = ApiClient.convertToType(data['squash_merge_commit_title'], 'String');
            }
            if (data.hasOwnProperty('squash_merge_commit_message')) {
                obj['squash_merge_commit_message'] = ApiClient.convertToType(data['squash_merge_commit_message'], 'String');
            }
            if (data.hasOwnProperty('merge_commit_title')) {
                obj['merge_commit_title'] = ApiClient.convertToType(data['merge_commit_title'], 'String');
            }
            if (data.hasOwnProperty('merge_commit_message')) {
                obj['merge_commit_message'] = ApiClient.convertToType(data['merge_commit_message'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_forking')) {
                obj['allow_forking'] = ApiClient.convertToType(data['allow_forking'], 'Boolean');
            }
            if (data.hasOwnProperty('web_commit_signoff_required')) {
                obj['web_commit_signoff_required'] = ApiClient.convertToType(data['web_commit_signoff_required'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposUpdateRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['homepage'] && !(typeof data['homepage'] === 'string' || data['homepage'] instanceof String)) {
            throw new Error("Expected the field `homepage` to be a primitive type in the JSON string but got " + data['homepage']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }
        // validate the optional field `security_and_analysis`
        if (data['security_and_analysis']) { // data not null
          ReposUpdateRequestSecurityAndAnalysis.validateJSON(data['security_and_analysis']);
        }
        // ensure the json data is a string
        if (data['default_branch'] && !(typeof data['default_branch'] === 'string' || data['default_branch'] instanceof String)) {
            throw new Error("Expected the field `default_branch` to be a primitive type in the JSON string but got " + data['default_branch']);
        }
        // ensure the json data is a string
        if (data['squash_merge_commit_title'] && !(typeof data['squash_merge_commit_title'] === 'string' || data['squash_merge_commit_title'] instanceof String)) {
            throw new Error("Expected the field `squash_merge_commit_title` to be a primitive type in the JSON string but got " + data['squash_merge_commit_title']);
        }
        // ensure the json data is a string
        if (data['squash_merge_commit_message'] && !(typeof data['squash_merge_commit_message'] === 'string' || data['squash_merge_commit_message'] instanceof String)) {
            throw new Error("Expected the field `squash_merge_commit_message` to be a primitive type in the JSON string but got " + data['squash_merge_commit_message']);
        }
        // ensure the json data is a string
        if (data['merge_commit_title'] && !(typeof data['merge_commit_title'] === 'string' || data['merge_commit_title'] instanceof String)) {
            throw new Error("Expected the field `merge_commit_title` to be a primitive type in the JSON string but got " + data['merge_commit_title']);
        }
        // ensure the json data is a string
        if (data['merge_commit_message'] && !(typeof data['merge_commit_message'] === 'string' || data['merge_commit_message'] instanceof String)) {
            throw new Error("Expected the field `merge_commit_message` to be a primitive type in the JSON string but got " + data['merge_commit_message']);
        }

        return true;
    }


}



/**
 * The name of the repository.
 * @member {String} name
 */
ReposUpdateRequest.prototype['name'] = undefined;

/**
 * A short description of the repository.
 * @member {String} description
 */
ReposUpdateRequest.prototype['description'] = undefined;

/**
 * A URL with more information about the repository.
 * @member {String} homepage
 */
ReposUpdateRequest.prototype['homepage'] = undefined;

/**
 * Either `true` to make the repository private or `false` to make it public. Default: `false`.   **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
 * @member {Boolean} private
 * @default false
 */
ReposUpdateRequest.prototype['private'] = false;

/**
 * The visibility of the repository.
 * @member {module:model/ReposUpdateRequest.VisibilityEnum} visibility
 */
ReposUpdateRequest.prototype['visibility'] = undefined;

/**
 * @member {module:model/ReposUpdateRequestSecurityAndAnalysis} security_and_analysis
 */
ReposUpdateRequest.prototype['security_and_analysis'] = undefined;

/**
 * Either `true` to enable issues for this repository or `false` to disable them.
 * @member {Boolean} has_issues
 * @default true
 */
ReposUpdateRequest.prototype['has_issues'] = true;

/**
 * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @member {Boolean} has_projects
 * @default true
 */
ReposUpdateRequest.prototype['has_projects'] = true;

/**
 * Either `true` to enable the wiki for this repository or `false` to disable it.
 * @member {Boolean} has_wiki
 * @default true
 */
ReposUpdateRequest.prototype['has_wiki'] = true;

/**
 * Either `true` to make this repo available as a template repository or `false` to prevent it.
 * @member {Boolean} is_template
 * @default false
 */
ReposUpdateRequest.prototype['is_template'] = false;

/**
 * Updates the default branch for this repository.
 * @member {String} default_branch
 */
ReposUpdateRequest.prototype['default_branch'] = undefined;

/**
 * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @member {Boolean} allow_squash_merge
 * @default true
 */
ReposUpdateRequest.prototype['allow_squash_merge'] = true;

/**
 * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @member {Boolean} allow_merge_commit
 * @default true
 */
ReposUpdateRequest.prototype['allow_merge_commit'] = true;

/**
 * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @member {Boolean} allow_rebase_merge
 * @default true
 */
ReposUpdateRequest.prototype['allow_rebase_merge'] = true;

/**
 * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
 * @member {Boolean} allow_auto_merge
 * @default false
 */
ReposUpdateRequest.prototype['allow_auto_merge'] = false;

/**
 * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
 * @member {Boolean} delete_branch_on_merge
 * @default false
 */
ReposUpdateRequest.prototype['delete_branch_on_merge'] = false;

/**
 * Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
 * @member {Boolean} allow_update_branch
 * @default false
 */
ReposUpdateRequest.prototype['allow_update_branch'] = false;

/**
 * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
 * @member {Boolean} use_squash_pr_title_as_default
 * @default false
 */
ReposUpdateRequest.prototype['use_squash_pr_title_as_default'] = false;

/**
 * The default value for a squash merge commit title:  - `PR_TITLE` - default to the pull request's title. - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 * @member {module:model/ReposUpdateRequest.SquashMergeCommitTitleEnum} squash_merge_commit_title
 */
ReposUpdateRequest.prototype['squash_merge_commit_title'] = undefined;

/**
 * The default value for a squash merge commit message:  - `PR_BODY` - default to the pull request's body. - `COMMIT_MESSAGES` - default to the branch's commit messages. - `BLANK` - default to a blank commit message.
 * @member {module:model/ReposUpdateRequest.SquashMergeCommitMessageEnum} squash_merge_commit_message
 */
ReposUpdateRequest.prototype['squash_merge_commit_message'] = undefined;

/**
 * The default value for a merge commit title.  - `PR_TITLE` - default to the pull request's title. - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 * @member {module:model/ReposUpdateRequest.MergeCommitTitleEnum} merge_commit_title
 */
ReposUpdateRequest.prototype['merge_commit_title'] = undefined;

/**
 * The default value for a merge commit message.  - `PR_TITLE` - default to the pull request's title. - `PR_BODY` - default to the pull request's body. - `BLANK` - default to a blank commit message.
 * @member {module:model/ReposUpdateRequest.MergeCommitMessageEnum} merge_commit_message
 */
ReposUpdateRequest.prototype['merge_commit_message'] = undefined;

/**
 * Whether to archive this repository. `false` will unarchive a previously archived repository.
 * @member {Boolean} archived
 * @default false
 */
ReposUpdateRequest.prototype['archived'] = false;

/**
 * Either `true` to allow private forks, or `false` to prevent private forks.
 * @member {Boolean} allow_forking
 * @default false
 */
ReposUpdateRequest.prototype['allow_forking'] = false;

/**
 * Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.
 * @member {Boolean} web_commit_signoff_required
 * @default false
 */
ReposUpdateRequest.prototype['web_commit_signoff_required'] = false;





/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRequest['VisibilityEnum'] = {

    /**
     * value: "public"
     * @const
     */
    "public": "public",

    /**
     * value: "private"
     * @const
     */
    "private": "private"
};


/**
 * Allowed values for the <code>squash_merge_commit_title</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRequest['SquashMergeCommitTitleEnum'] = {

    /**
     * value: "PR_TITLE"
     * @const
     */
    "PR_TITLE": "PR_TITLE",

    /**
     * value: "COMMIT_OR_PR_TITLE"
     * @const
     */
    "COMMIT_OR_PR_TITLE": "COMMIT_OR_PR_TITLE"
};


/**
 * Allowed values for the <code>squash_merge_commit_message</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRequest['SquashMergeCommitMessageEnum'] = {

    /**
     * value: "PR_BODY"
     * @const
     */
    "PR_BODY": "PR_BODY",

    /**
     * value: "COMMIT_MESSAGES"
     * @const
     */
    "COMMIT_MESSAGES": "COMMIT_MESSAGES",

    /**
     * value: "BLANK"
     * @const
     */
    "BLANK": "BLANK"
};


/**
 * Allowed values for the <code>merge_commit_title</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRequest['MergeCommitTitleEnum'] = {

    /**
     * value: "PR_TITLE"
     * @const
     */
    "PR_TITLE": "PR_TITLE",

    /**
     * value: "MERGE_MESSAGE"
     * @const
     */
    "MERGE_MESSAGE": "MERGE_MESSAGE"
};


/**
 * Allowed values for the <code>merge_commit_message</code> property.
 * @enum {String}
 * @readonly
 */
ReposUpdateRequest['MergeCommitMessageEnum'] = {

    /**
     * value: "PR_BODY"
     * @const
     */
    "PR_BODY": "PR_BODY",

    /**
     * value: "PR_TITLE"
     * @const
     */
    "PR_TITLE": "PR_TITLE",

    /**
     * value: "BLANK"
     * @const
     */
    "BLANK": "BLANK"
};



export default ReposUpdateRequest;

