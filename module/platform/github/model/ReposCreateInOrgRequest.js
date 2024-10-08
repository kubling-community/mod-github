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
 * The ReposCreateInOrgRequest model module.
 * @module model/ReposCreateInOrgRequest
 * @version 1.1.4
 */
class ReposCreateInOrgRequest {
    /**
     * Constructs a new <code>ReposCreateInOrgRequest</code>.
     * @alias module:model/ReposCreateInOrgRequest
     * @param name {String} The name of the repository.
     */
    constructor(name) { 
        
        ReposCreateInOrgRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ReposCreateInOrgRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateInOrgRequest} obj Optional instance to populate.
     * @return {module:model/ReposCreateInOrgRequest} The populated <code>ReposCreateInOrgRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateInOrgRequest();

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
            if (data.hasOwnProperty('has_issues')) {
                obj['has_issues'] = ApiClient.convertToType(data['has_issues'], 'Boolean');
            }
            if (data.hasOwnProperty('has_projects')) {
                obj['has_projects'] = ApiClient.convertToType(data['has_projects'], 'Boolean');
            }
            if (data.hasOwnProperty('has_wiki')) {
                obj['has_wiki'] = ApiClient.convertToType(data['has_wiki'], 'Boolean');
            }
            if (data.hasOwnProperty('has_downloads')) {
                obj['has_downloads'] = ApiClient.convertToType(data['has_downloads'], 'Boolean');
            }
            if (data.hasOwnProperty('is_template')) {
                obj['is_template'] = ApiClient.convertToType(data['is_template'], 'Boolean');
            }
            if (data.hasOwnProperty('team_id')) {
                obj['team_id'] = ApiClient.convertToType(data['team_id'], 'Number');
            }
            if (data.hasOwnProperty('auto_init')) {
                obj['auto_init'] = ApiClient.convertToType(data['auto_init'], 'Boolean');
            }
            if (data.hasOwnProperty('gitignore_template')) {
                obj['gitignore_template'] = ApiClient.convertToType(data['gitignore_template'], 'String');
            }
            if (data.hasOwnProperty('license_template')) {
                obj['license_template'] = ApiClient.convertToType(data['license_template'], 'String');
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
            if (data.hasOwnProperty('custom_properties')) {
                obj['custom_properties'] = ApiClient.convertToType(data['custom_properties'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateInOrgRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateInOrgRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposCreateInOrgRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        // ensure the json data is a string
        if (data['gitignore_template'] && !(typeof data['gitignore_template'] === 'string' || data['gitignore_template'] instanceof String)) {
            throw new Error("Expected the field `gitignore_template` to be a primitive type in the JSON string but got " + data['gitignore_template']);
        }
        // ensure the json data is a string
        if (data['license_template'] && !(typeof data['license_template'] === 'string' || data['license_template'] instanceof String)) {
            throw new Error("Expected the field `license_template` to be a primitive type in the JSON string but got " + data['license_template']);
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

ReposCreateInOrgRequest.RequiredProperties = ["name"];

/**
 * The name of the repository.
 * @member {String} name
 */
ReposCreateInOrgRequest.prototype['name'] = undefined;

/**
 * A short description of the repository.
 * @member {String} description
 */
ReposCreateInOrgRequest.prototype['description'] = undefined;

/**
 * A URL with more information about the repository.
 * @member {String} homepage
 */
ReposCreateInOrgRequest.prototype['homepage'] = undefined;

/**
 * Whether the repository is private.
 * @member {Boolean} private
 * @default false
 */
ReposCreateInOrgRequest.prototype['private'] = false;

/**
 * The visibility of the repository.
 * @member {module:model/ReposCreateInOrgRequest.VisibilityEnum} visibility
 */
ReposCreateInOrgRequest.prototype['visibility'] = undefined;

/**
 * Either `true` to enable issues for this repository or `false` to disable them.
 * @member {Boolean} has_issues
 * @default true
 */
ReposCreateInOrgRequest.prototype['has_issues'] = true;

/**
 * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @member {Boolean} has_projects
 * @default true
 */
ReposCreateInOrgRequest.prototype['has_projects'] = true;

/**
 * Either `true` to enable the wiki for this repository or `false` to disable it.
 * @member {Boolean} has_wiki
 * @default true
 */
ReposCreateInOrgRequest.prototype['has_wiki'] = true;

/**
 * Whether downloads are enabled.
 * @member {Boolean} has_downloads
 * @default true
 */
ReposCreateInOrgRequest.prototype['has_downloads'] = true;

/**
 * Either `true` to make this repo available as a template repository or `false` to prevent it.
 * @member {Boolean} is_template
 * @default false
 */
ReposCreateInOrgRequest.prototype['is_template'] = false;

/**
 * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @member {Number} team_id
 */
ReposCreateInOrgRequest.prototype['team_id'] = undefined;

/**
 * Pass `true` to create an initial commit with empty README.
 * @member {Boolean} auto_init
 * @default false
 */
ReposCreateInOrgRequest.prototype['auto_init'] = false;

/**
 * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, \"Haskell\".
 * @member {String} gitignore_template
 */
ReposCreateInOrgRequest.prototype['gitignore_template'] = undefined;

/**
 * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, \"mit\" or \"mpl-2.0\".
 * @member {String} license_template
 */
ReposCreateInOrgRequest.prototype['license_template'] = undefined;

/**
 * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @member {Boolean} allow_squash_merge
 * @default true
 */
ReposCreateInOrgRequest.prototype['allow_squash_merge'] = true;

/**
 * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @member {Boolean} allow_merge_commit
 * @default true
 */
ReposCreateInOrgRequest.prototype['allow_merge_commit'] = true;

/**
 * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @member {Boolean} allow_rebase_merge
 * @default true
 */
ReposCreateInOrgRequest.prototype['allow_rebase_merge'] = true;

/**
 * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
 * @member {Boolean} allow_auto_merge
 * @default false
 */
ReposCreateInOrgRequest.prototype['allow_auto_merge'] = false;

/**
 * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**
 * @member {Boolean} delete_branch_on_merge
 * @default false
 */
ReposCreateInOrgRequest.prototype['delete_branch_on_merge'] = false;

/**
 * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
 * @member {Boolean} use_squash_pr_title_as_default
 * @default false
 */
ReposCreateInOrgRequest.prototype['use_squash_pr_title_as_default'] = false;

/**
 * The default value for a squash merge commit title:  - `PR_TITLE` - default to the pull request's title. - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 * @member {module:model/ReposCreateInOrgRequest.SquashMergeCommitTitleEnum} squash_merge_commit_title
 */
ReposCreateInOrgRequest.prototype['squash_merge_commit_title'] = undefined;

/**
 * The default value for a squash merge commit message:  - `PR_BODY` - default to the pull request's body. - `COMMIT_MESSAGES` - default to the branch's commit messages. - `BLANK` - default to a blank commit message.
 * @member {module:model/ReposCreateInOrgRequest.SquashMergeCommitMessageEnum} squash_merge_commit_message
 */
ReposCreateInOrgRequest.prototype['squash_merge_commit_message'] = undefined;

/**
 * The default value for a merge commit title.  - `PR_TITLE` - default to the pull request's title. - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 * @member {module:model/ReposCreateInOrgRequest.MergeCommitTitleEnum} merge_commit_title
 */
ReposCreateInOrgRequest.prototype['merge_commit_title'] = undefined;

/**
 * The default value for a merge commit message.  - `PR_TITLE` - default to the pull request's title. - `PR_BODY` - default to the pull request's body. - `BLANK` - default to a blank commit message.
 * @member {module:model/ReposCreateInOrgRequest.MergeCommitMessageEnum} merge_commit_message
 */
ReposCreateInOrgRequest.prototype['merge_commit_message'] = undefined;

/**
 * The custom properties for the new repository. The keys are the custom property names, and the values are the corresponding custom property values.
 * @member {Object.<String, Object>} custom_properties
 */
ReposCreateInOrgRequest.prototype['custom_properties'] = undefined;





/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
ReposCreateInOrgRequest['VisibilityEnum'] = {

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
ReposCreateInOrgRequest['SquashMergeCommitTitleEnum'] = {

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
ReposCreateInOrgRequest['SquashMergeCommitMessageEnum'] = {

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
ReposCreateInOrgRequest['MergeCommitTitleEnum'] = {

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
ReposCreateInOrgRequest['MergeCommitMessageEnum'] = {

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



export default ReposCreateInOrgRequest;

