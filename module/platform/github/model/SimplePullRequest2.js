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
import Label from './Label';
import Milestone from './Milestone';
import PullRequestAutoMerge from './PullRequestAutoMerge';
import PullRequestBase from './PullRequestBase';
import PullRequestHead from './PullRequestHead';
import PullRequestRequestedReviewersInner from './PullRequestRequestedReviewersInner';
import Team from './Team';
import User1 from './User1';
import WebhooksPullRequest5Links from './WebhooksPullRequest5Links';

/**
 * The SimplePullRequest2 model module.
 * @module model/SimplePullRequest2
 * @version 1.1.4
 */
class SimplePullRequest2 {
    /**
     * Constructs a new <code>SimplePullRequest2</code>.
     * @alias module:model/SimplePullRequest2
     * @param links {module:model/WebhooksPullRequest5Links} 
     * @param activeLockReason {module:model/SimplePullRequest2.ActiveLockReasonEnum} 
     * @param assignee {module:model/User1} 
     * @param assignees {Array.<module:model/User1>} 
     * @param authorAssociation {module:model/SimplePullRequest2.AuthorAssociationEnum} How the author is associated with the repository.
     * @param autoMerge {module:model/PullRequestAutoMerge} 
     * @param base {module:model/PullRequestBase} 
     * @param body {String} 
     * @param closedAt {String} 
     * @param commentsUrl {String} 
     * @param commitsUrl {String} 
     * @param createdAt {String} 
     * @param diffUrl {String} 
     * @param draft {Boolean} 
     * @param head {module:model/PullRequestHead} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param issueUrl {String} 
     * @param labels {Array.<module:model/Label>} 
     * @param locked {Boolean} 
     * @param mergeCommitSha {String} 
     * @param mergedAt {String} 
     * @param milestone {module:model/Milestone} 
     * @param nodeId {String} 
     * @param number {Number} 
     * @param patchUrl {String} 
     * @param requestedReviewers {Array.<module:model/PullRequestRequestedReviewersInner>} 
     * @param requestedTeams {Array.<module:model/Team>} 
     * @param reviewCommentUrl {String} 
     * @param reviewCommentsUrl {String} 
     * @param state {module:model/SimplePullRequest2.StateEnum} 
     * @param statusesUrl {String} 
     * @param title {String} 
     * @param updatedAt {String} 
     * @param url {String} 
     * @param user {module:model/User1} 
     */
    constructor(links, activeLockReason, assignee, assignees, authorAssociation, autoMerge, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, draft, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, number, patchUrl, requestedReviewers, requestedTeams, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) { 
        
        SimplePullRequest2.initialize(this, links, activeLockReason, assignee, assignees, authorAssociation, autoMerge, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, draft, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, number, patchUrl, requestedReviewers, requestedTeams, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, links, activeLockReason, assignee, assignees, authorAssociation, autoMerge, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, draft, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, number, patchUrl, requestedReviewers, requestedTeams, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) { 
        obj['_links'] = links;
        obj['active_lock_reason'] = activeLockReason;
        obj['assignee'] = assignee;
        obj['assignees'] = assignees;
        obj['author_association'] = authorAssociation;
        obj['auto_merge'] = autoMerge;
        obj['base'] = base;
        obj['body'] = body;
        obj['closed_at'] = closedAt;
        obj['comments_url'] = commentsUrl;
        obj['commits_url'] = commitsUrl;
        obj['created_at'] = createdAt;
        obj['diff_url'] = diffUrl;
        obj['draft'] = draft;
        obj['head'] = head;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['issue_url'] = issueUrl;
        obj['labels'] = labels;
        obj['locked'] = locked;
        obj['merge_commit_sha'] = mergeCommitSha;
        obj['merged_at'] = mergedAt;
        obj['milestone'] = milestone;
        obj['node_id'] = nodeId;
        obj['number'] = number;
        obj['patch_url'] = patchUrl;
        obj['requested_reviewers'] = requestedReviewers;
        obj['requested_teams'] = requestedTeams;
        obj['review_comment_url'] = reviewCommentUrl;
        obj['review_comments_url'] = reviewCommentsUrl;
        obj['state'] = state;
        obj['statuses_url'] = statusesUrl;
        obj['title'] = title;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>SimplePullRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimplePullRequest2} obj Optional instance to populate.
     * @return {module:model/SimplePullRequest2} The populated <code>SimplePullRequest2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimplePullRequest2();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = WebhooksPullRequest5Links.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('active_lock_reason')) {
                obj['active_lock_reason'] = ApiClient.convertToType(data['active_lock_reason'], 'String');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = User1.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], [User1]);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('auto_merge')) {
                obj['auto_merge'] = PullRequestAutoMerge.constructFromObject(data['auto_merge']);
            }
            if (data.hasOwnProperty('base')) {
                obj['base'] = PullRequestBase.constructFromObject(data['base']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('diff_url')) {
                obj['diff_url'] = ApiClient.convertToType(data['diff_url'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = PullRequestHead.constructFromObject(data['head']);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('issue_url')) {
                obj['issue_url'] = ApiClient.convertToType(data['issue_url'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [Label]);
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('merge_commit_sha')) {
                obj['merge_commit_sha'] = ApiClient.convertToType(data['merge_commit_sha'], 'String');
            }
            if (data.hasOwnProperty('merged_at')) {
                obj['merged_at'] = ApiClient.convertToType(data['merged_at'], 'String');
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = Milestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('patch_url')) {
                obj['patch_url'] = ApiClient.convertToType(data['patch_url'], 'String');
            }
            if (data.hasOwnProperty('requested_reviewers')) {
                obj['requested_reviewers'] = ApiClient.convertToType(data['requested_reviewers'], [PullRequestRequestedReviewersInner]);
            }
            if (data.hasOwnProperty('requested_teams')) {
                obj['requested_teams'] = ApiClient.convertToType(data['requested_teams'], [Team]);
            }
            if (data.hasOwnProperty('review_comment_url')) {
                obj['review_comment_url'] = ApiClient.convertToType(data['review_comment_url'], 'String');
            }
            if (data.hasOwnProperty('review_comments_url')) {
                obj['review_comments_url'] = ApiClient.convertToType(data['review_comments_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('statuses_url')) {
                obj['statuses_url'] = ApiClient.convertToType(data['statuses_url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User1.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimplePullRequest2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimplePullRequest2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SimplePullRequest2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          WebhooksPullRequest5Links.validateJSON(data['_links']);
        }
        // ensure the json data is a string
        if (data['active_lock_reason'] && !(typeof data['active_lock_reason'] === 'string' || data['active_lock_reason'] instanceof String)) {
            throw new Error("Expected the field `active_lock_reason` to be a primitive type in the JSON string but got " + data['active_lock_reason']);
        }
        // validate the optional field `assignee`
        if (data['assignee']) { // data not null
          User1.validateJSON(data['assignee']);
        }
        if (data['assignees']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['assignees'])) {
                throw new Error("Expected the field `assignees` to be an array in the JSON data but got " + data['assignees']);
            }
            // validate the optional field `assignees` (array)
            for (const item of data['assignees']) {
                User1.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['author_association'] && !(typeof data['author_association'] === 'string' || data['author_association'] instanceof String)) {
            throw new Error("Expected the field `author_association` to be a primitive type in the JSON string but got " + data['author_association']);
        }
        // validate the optional field `auto_merge`
        if (data['auto_merge']) { // data not null
          PullRequestAutoMerge.validateJSON(data['auto_merge']);
        }
        // validate the optional field `base`
        if (data['base']) { // data not null
          PullRequestBase.validateJSON(data['base']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['closed_at'] && !(typeof data['closed_at'] === 'string' || data['closed_at'] instanceof String)) {
            throw new Error("Expected the field `closed_at` to be a primitive type in the JSON string but got " + data['closed_at']);
        }
        // ensure the json data is a string
        if (data['comments_url'] && !(typeof data['comments_url'] === 'string' || data['comments_url'] instanceof String)) {
            throw new Error("Expected the field `comments_url` to be a primitive type in the JSON string but got " + data['comments_url']);
        }
        // ensure the json data is a string
        if (data['commits_url'] && !(typeof data['commits_url'] === 'string' || data['commits_url'] instanceof String)) {
            throw new Error("Expected the field `commits_url` to be a primitive type in the JSON string but got " + data['commits_url']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['diff_url'] && !(typeof data['diff_url'] === 'string' || data['diff_url'] instanceof String)) {
            throw new Error("Expected the field `diff_url` to be a primitive type in the JSON string but got " + data['diff_url']);
        }
        // validate the optional field `head`
        if (data['head']) { // data not null
          PullRequestHead.validateJSON(data['head']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['issue_url'] && !(typeof data['issue_url'] === 'string' || data['issue_url'] instanceof String)) {
            throw new Error("Expected the field `issue_url` to be a primitive type in the JSON string but got " + data['issue_url']);
        }
        if (data['labels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['labels'])) {
                throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
            }
            // validate the optional field `labels` (array)
            for (const item of data['labels']) {
                Label.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['merge_commit_sha'] && !(typeof data['merge_commit_sha'] === 'string' || data['merge_commit_sha'] instanceof String)) {
            throw new Error("Expected the field `merge_commit_sha` to be a primitive type in the JSON string but got " + data['merge_commit_sha']);
        }
        // ensure the json data is a string
        if (data['merged_at'] && !(typeof data['merged_at'] === 'string' || data['merged_at'] instanceof String)) {
            throw new Error("Expected the field `merged_at` to be a primitive type in the JSON string but got " + data['merged_at']);
        }
        // validate the optional field `milestone`
        if (data['milestone']) { // data not null
          Milestone.validateJSON(data['milestone']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['patch_url'] && !(typeof data['patch_url'] === 'string' || data['patch_url'] instanceof String)) {
            throw new Error("Expected the field `patch_url` to be a primitive type in the JSON string but got " + data['patch_url']);
        }
        if (data['requested_reviewers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['requested_reviewers'])) {
                throw new Error("Expected the field `requested_reviewers` to be an array in the JSON data but got " + data['requested_reviewers']);
            }
            // validate the optional field `requested_reviewers` (array)
            for (const item of data['requested_reviewers']) {
                PullRequestRequestedReviewersInner.validateJSON(item);
            };
        }
        if (data['requested_teams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['requested_teams'])) {
                throw new Error("Expected the field `requested_teams` to be an array in the JSON data but got " + data['requested_teams']);
            }
            // validate the optional field `requested_teams` (array)
            for (const item of data['requested_teams']) {
                Team.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['review_comment_url'] && !(typeof data['review_comment_url'] === 'string' || data['review_comment_url'] instanceof String)) {
            throw new Error("Expected the field `review_comment_url` to be a primitive type in the JSON string but got " + data['review_comment_url']);
        }
        // ensure the json data is a string
        if (data['review_comments_url'] && !(typeof data['review_comments_url'] === 'string' || data['review_comments_url'] instanceof String)) {
            throw new Error("Expected the field `review_comments_url` to be a primitive type in the JSON string but got " + data['review_comments_url']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['statuses_url'] && !(typeof data['statuses_url'] === 'string' || data['statuses_url'] instanceof String)) {
            throw new Error("Expected the field `statuses_url` to be a primitive type in the JSON string but got " + data['statuses_url']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          User1.validateJSON(data['user']);
        }

        return true;
    }


}

SimplePullRequest2.RequiredProperties = ["_links", "active_lock_reason", "assignee", "assignees", "author_association", "auto_merge", "base", "body", "closed_at", "comments_url", "commits_url", "created_at", "diff_url", "draft", "head", "html_url", "id", "issue_url", "labels", "locked", "merge_commit_sha", "merged_at", "milestone", "node_id", "number", "patch_url", "requested_reviewers", "requested_teams", "review_comment_url", "review_comments_url", "state", "statuses_url", "title", "updated_at", "url", "user"];

/**
 * @member {module:model/WebhooksPullRequest5Links} _links
 */
SimplePullRequest2.prototype['_links'] = undefined;

/**
 * @member {module:model/SimplePullRequest2.ActiveLockReasonEnum} active_lock_reason
 */
SimplePullRequest2.prototype['active_lock_reason'] = undefined;

/**
 * @member {module:model/User1} assignee
 */
SimplePullRequest2.prototype['assignee'] = undefined;

/**
 * @member {Array.<module:model/User1>} assignees
 */
SimplePullRequest2.prototype['assignees'] = undefined;

/**
 * How the author is associated with the repository.
 * @member {module:model/SimplePullRequest2.AuthorAssociationEnum} author_association
 */
SimplePullRequest2.prototype['author_association'] = undefined;

/**
 * @member {module:model/PullRequestAutoMerge} auto_merge
 */
SimplePullRequest2.prototype['auto_merge'] = undefined;

/**
 * @member {module:model/PullRequestBase} base
 */
SimplePullRequest2.prototype['base'] = undefined;

/**
 * @member {String} body
 */
SimplePullRequest2.prototype['body'] = undefined;

/**
 * @member {String} closed_at
 */
SimplePullRequest2.prototype['closed_at'] = undefined;

/**
 * @member {String} comments_url
 */
SimplePullRequest2.prototype['comments_url'] = undefined;

/**
 * @member {String} commits_url
 */
SimplePullRequest2.prototype['commits_url'] = undefined;

/**
 * @member {String} created_at
 */
SimplePullRequest2.prototype['created_at'] = undefined;

/**
 * @member {String} diff_url
 */
SimplePullRequest2.prototype['diff_url'] = undefined;

/**
 * @member {Boolean} draft
 */
SimplePullRequest2.prototype['draft'] = undefined;

/**
 * @member {module:model/PullRequestHead} head
 */
SimplePullRequest2.prototype['head'] = undefined;

/**
 * @member {String} html_url
 */
SimplePullRequest2.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
SimplePullRequest2.prototype['id'] = undefined;

/**
 * @member {String} issue_url
 */
SimplePullRequest2.prototype['issue_url'] = undefined;

/**
 * @member {Array.<module:model/Label>} labels
 */
SimplePullRequest2.prototype['labels'] = undefined;

/**
 * @member {Boolean} locked
 */
SimplePullRequest2.prototype['locked'] = undefined;

/**
 * @member {String} merge_commit_sha
 */
SimplePullRequest2.prototype['merge_commit_sha'] = undefined;

/**
 * @member {String} merged_at
 */
SimplePullRequest2.prototype['merged_at'] = undefined;

/**
 * @member {module:model/Milestone} milestone
 */
SimplePullRequest2.prototype['milestone'] = undefined;

/**
 * @member {String} node_id
 */
SimplePullRequest2.prototype['node_id'] = undefined;

/**
 * @member {Number} number
 */
SimplePullRequest2.prototype['number'] = undefined;

/**
 * @member {String} patch_url
 */
SimplePullRequest2.prototype['patch_url'] = undefined;

/**
 * @member {Array.<module:model/PullRequestRequestedReviewersInner>} requested_reviewers
 */
SimplePullRequest2.prototype['requested_reviewers'] = undefined;

/**
 * @member {Array.<module:model/Team>} requested_teams
 */
SimplePullRequest2.prototype['requested_teams'] = undefined;

/**
 * @member {String} review_comment_url
 */
SimplePullRequest2.prototype['review_comment_url'] = undefined;

/**
 * @member {String} review_comments_url
 */
SimplePullRequest2.prototype['review_comments_url'] = undefined;

/**
 * @member {module:model/SimplePullRequest2.StateEnum} state
 */
SimplePullRequest2.prototype['state'] = undefined;

/**
 * @member {String} statuses_url
 */
SimplePullRequest2.prototype['statuses_url'] = undefined;

/**
 * @member {String} title
 */
SimplePullRequest2.prototype['title'] = undefined;

/**
 * @member {String} updated_at
 */
SimplePullRequest2.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
SimplePullRequest2.prototype['url'] = undefined;

/**
 * @member {module:model/User1} user
 */
SimplePullRequest2.prototype['user'] = undefined;





/**
 * Allowed values for the <code>active_lock_reason</code> property.
 * @enum {String}
 * @readonly
 */
SimplePullRequest2['ActiveLockReasonEnum'] = {

    /**
     * value: "resolved"
     * @const
     */
    "resolved": "resolved",

    /**
     * value: "off-topic"
     * @const
     */
    "off-topic": "off-topic",

    /**
     * value: "too heated"
     * @const
     */
    "too heated": "too heated",

    /**
     * value: "spam"
     * @const
     */
    "spam": "spam",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>author_association</code> property.
 * @enum {String}
 * @readonly
 */
SimplePullRequest2['AuthorAssociationEnum'] = {

    /**
     * value: "COLLABORATOR"
     * @const
     */
    "COLLABORATOR": "COLLABORATOR",

    /**
     * value: "CONTRIBUTOR"
     * @const
     */
    "CONTRIBUTOR": "CONTRIBUTOR",

    /**
     * value: "FIRST_TIMER"
     * @const
     */
    "FIRST_TIMER": "FIRST_TIMER",

    /**
     * value: "FIRST_TIME_CONTRIBUTOR"
     * @const
     */
    "FIRST_TIME_CONTRIBUTOR": "FIRST_TIME_CONTRIBUTOR",

    /**
     * value: "MANNEQUIN"
     * @const
     */
    "MANNEQUIN": "MANNEQUIN",

    /**
     * value: "MEMBER"
     * @const
     */
    "MEMBER": "MEMBER",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "OWNER"
     * @const
     */
    "OWNER": "OWNER"
};


/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
SimplePullRequest2['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};



export default SimplePullRequest2;

