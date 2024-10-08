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
import SimpleUser from './SimpleUser';

/**
 * The SimpleRepository model module.
 * @module model/SimpleRepository
 * @version 1.1.4
 */
class SimpleRepository {
    /**
     * Constructs a new <code>SimpleRepository</code>.
     * A GitHub repository.
     * @alias module:model/SimpleRepository
     * @param id {Number} A unique identifier of the repository.
     * @param nodeId {String} The GraphQL identifier of the repository.
     * @param name {String} The name of the repository.
     * @param fullName {String} The full, globally unique, name of the repository.
     * @param owner {module:model/SimpleUser} 
     * @param _private {Boolean} Whether the repository is private.
     * @param htmlUrl {String} The URL to view the repository on GitHub.com.
     * @param description {String} The repository description.
     * @param fork {Boolean} Whether the repository is a fork.
     * @param url {String} The URL to get more information about the repository from the GitHub API.
     * @param archiveUrl {String} A template for the API URL to download the repository as an archive.
     * @param assigneesUrl {String} A template for the API URL to list the available assignees for issues in the repository.
     * @param blobsUrl {String} A template for the API URL to create or retrieve a raw Git blob in the repository.
     * @param branchesUrl {String} A template for the API URL to get information about branches in the repository.
     * @param collaboratorsUrl {String} A template for the API URL to get information about collaborators of the repository.
     * @param commentsUrl {String} A template for the API URL to get information about comments on the repository.
     * @param commitsUrl {String} A template for the API URL to get information about commits on the repository.
     * @param compareUrl {String} A template for the API URL to compare two commits or refs.
     * @param contentsUrl {String} A template for the API URL to get the contents of the repository.
     * @param contributorsUrl {String} A template for the API URL to list the contributors to the repository.
     * @param deploymentsUrl {String} The API URL to list the deployments of the repository.
     * @param downloadsUrl {String} The API URL to list the downloads on the repository.
     * @param eventsUrl {String} The API URL to list the events of the repository.
     * @param forksUrl {String} The API URL to list the forks of the repository.
     * @param gitCommitsUrl {String} A template for the API URL to get information about Git commits of the repository.
     * @param gitRefsUrl {String} A template for the API URL to get information about Git refs of the repository.
     * @param gitTagsUrl {String} A template for the API URL to get information about Git tags of the repository.
     * @param issueCommentUrl {String} A template for the API URL to get information about issue comments on the repository.
     * @param issueEventsUrl {String} A template for the API URL to get information about issue events on the repository.
     * @param issuesUrl {String} A template for the API URL to get information about issues on the repository.
     * @param keysUrl {String} A template for the API URL to get information about deploy keys on the repository.
     * @param labelsUrl {String} A template for the API URL to get information about labels of the repository.
     * @param languagesUrl {String} The API URL to get information about the languages of the repository.
     * @param mergesUrl {String} The API URL to merge branches in the repository.
     * @param milestonesUrl {String} A template for the API URL to get information about milestones of the repository.
     * @param notificationsUrl {String} A template for the API URL to get information about notifications on the repository.
     * @param pullsUrl {String} A template for the API URL to get information about pull requests on the repository.
     * @param releasesUrl {String} A template for the API URL to get information about releases on the repository.
     * @param stargazersUrl {String} The API URL to list the stargazers on the repository.
     * @param statusesUrl {String} A template for the API URL to get information about statuses of a commit.
     * @param subscribersUrl {String} The API URL to list the subscribers on the repository.
     * @param subscriptionUrl {String} The API URL to subscribe to notifications for this repository.
     * @param tagsUrl {String} The API URL to get information about tags on the repository.
     * @param teamsUrl {String} The API URL to list the teams on the repository.
     * @param treesUrl {String} A template for the API URL to create or retrieve a raw Git tree of the repository.
     * @param hooksUrl {String} The API URL to list the hooks on the repository.
     */
    constructor(id, nodeId, name, fullName, owner, _private, htmlUrl, description, fork, url, archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, downloadsUrl, eventsUrl, forksUrl, gitCommitsUrl, gitRefsUrl, gitTagsUrl, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, notificationsUrl, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, hooksUrl) { 
        
        SimpleRepository.initialize(this, id, nodeId, name, fullName, owner, _private, htmlUrl, description, fork, url, archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, downloadsUrl, eventsUrl, forksUrl, gitCommitsUrl, gitRefsUrl, gitTagsUrl, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, notificationsUrl, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, hooksUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nodeId, name, fullName, owner, _private, htmlUrl, description, fork, url, archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, downloadsUrl, eventsUrl, forksUrl, gitCommitsUrl, gitRefsUrl, gitTagsUrl, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, notificationsUrl, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, hooksUrl) { 
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['name'] = name;
        obj['full_name'] = fullName;
        obj['owner'] = owner;
        obj['private'] = _private;
        obj['html_url'] = htmlUrl;
        obj['description'] = description;
        obj['fork'] = fork;
        obj['url'] = url;
        obj['archive_url'] = archiveUrl;
        obj['assignees_url'] = assigneesUrl;
        obj['blobs_url'] = blobsUrl;
        obj['branches_url'] = branchesUrl;
        obj['collaborators_url'] = collaboratorsUrl;
        obj['comments_url'] = commentsUrl;
        obj['commits_url'] = commitsUrl;
        obj['compare_url'] = compareUrl;
        obj['contents_url'] = contentsUrl;
        obj['contributors_url'] = contributorsUrl;
        obj['deployments_url'] = deploymentsUrl;
        obj['downloads_url'] = downloadsUrl;
        obj['events_url'] = eventsUrl;
        obj['forks_url'] = forksUrl;
        obj['git_commits_url'] = gitCommitsUrl;
        obj['git_refs_url'] = gitRefsUrl;
        obj['git_tags_url'] = gitTagsUrl;
        obj['issue_comment_url'] = issueCommentUrl;
        obj['issue_events_url'] = issueEventsUrl;
        obj['issues_url'] = issuesUrl;
        obj['keys_url'] = keysUrl;
        obj['labels_url'] = labelsUrl;
        obj['languages_url'] = languagesUrl;
        obj['merges_url'] = mergesUrl;
        obj['milestones_url'] = milestonesUrl;
        obj['notifications_url'] = notificationsUrl;
        obj['pulls_url'] = pullsUrl;
        obj['releases_url'] = releasesUrl;
        obj['stargazers_url'] = stargazersUrl;
        obj['statuses_url'] = statusesUrl;
        obj['subscribers_url'] = subscribersUrl;
        obj['subscription_url'] = subscriptionUrl;
        obj['tags_url'] = tagsUrl;
        obj['teams_url'] = teamsUrl;
        obj['trees_url'] = treesUrl;
        obj['hooks_url'] = hooksUrl;
    }

    /**
     * Constructs a <code>SimpleRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleRepository} obj Optional instance to populate.
     * @return {module:model/SimpleRepository} The populated <code>SimpleRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleRepository();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = SimpleUser.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fork')) {
                obj['fork'] = ApiClient.convertToType(data['fork'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('archive_url')) {
                obj['archive_url'] = ApiClient.convertToType(data['archive_url'], 'String');
            }
            if (data.hasOwnProperty('assignees_url')) {
                obj['assignees_url'] = ApiClient.convertToType(data['assignees_url'], 'String');
            }
            if (data.hasOwnProperty('blobs_url')) {
                obj['blobs_url'] = ApiClient.convertToType(data['blobs_url'], 'String');
            }
            if (data.hasOwnProperty('branches_url')) {
                obj['branches_url'] = ApiClient.convertToType(data['branches_url'], 'String');
            }
            if (data.hasOwnProperty('collaborators_url')) {
                obj['collaborators_url'] = ApiClient.convertToType(data['collaborators_url'], 'String');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('compare_url')) {
                obj['compare_url'] = ApiClient.convertToType(data['compare_url'], 'String');
            }
            if (data.hasOwnProperty('contents_url')) {
                obj['contents_url'] = ApiClient.convertToType(data['contents_url'], 'String');
            }
            if (data.hasOwnProperty('contributors_url')) {
                obj['contributors_url'] = ApiClient.convertToType(data['contributors_url'], 'String');
            }
            if (data.hasOwnProperty('deployments_url')) {
                obj['deployments_url'] = ApiClient.convertToType(data['deployments_url'], 'String');
            }
            if (data.hasOwnProperty('downloads_url')) {
                obj['downloads_url'] = ApiClient.convertToType(data['downloads_url'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('forks_url')) {
                obj['forks_url'] = ApiClient.convertToType(data['forks_url'], 'String');
            }
            if (data.hasOwnProperty('git_commits_url')) {
                obj['git_commits_url'] = ApiClient.convertToType(data['git_commits_url'], 'String');
            }
            if (data.hasOwnProperty('git_refs_url')) {
                obj['git_refs_url'] = ApiClient.convertToType(data['git_refs_url'], 'String');
            }
            if (data.hasOwnProperty('git_tags_url')) {
                obj['git_tags_url'] = ApiClient.convertToType(data['git_tags_url'], 'String');
            }
            if (data.hasOwnProperty('issue_comment_url')) {
                obj['issue_comment_url'] = ApiClient.convertToType(data['issue_comment_url'], 'String');
            }
            if (data.hasOwnProperty('issue_events_url')) {
                obj['issue_events_url'] = ApiClient.convertToType(data['issue_events_url'], 'String');
            }
            if (data.hasOwnProperty('issues_url')) {
                obj['issues_url'] = ApiClient.convertToType(data['issues_url'], 'String');
            }
            if (data.hasOwnProperty('keys_url')) {
                obj['keys_url'] = ApiClient.convertToType(data['keys_url'], 'String');
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('languages_url')) {
                obj['languages_url'] = ApiClient.convertToType(data['languages_url'], 'String');
            }
            if (data.hasOwnProperty('merges_url')) {
                obj['merges_url'] = ApiClient.convertToType(data['merges_url'], 'String');
            }
            if (data.hasOwnProperty('milestones_url')) {
                obj['milestones_url'] = ApiClient.convertToType(data['milestones_url'], 'String');
            }
            if (data.hasOwnProperty('notifications_url')) {
                obj['notifications_url'] = ApiClient.convertToType(data['notifications_url'], 'String');
            }
            if (data.hasOwnProperty('pulls_url')) {
                obj['pulls_url'] = ApiClient.convertToType(data['pulls_url'], 'String');
            }
            if (data.hasOwnProperty('releases_url')) {
                obj['releases_url'] = ApiClient.convertToType(data['releases_url'], 'String');
            }
            if (data.hasOwnProperty('stargazers_url')) {
                obj['stargazers_url'] = ApiClient.convertToType(data['stargazers_url'], 'String');
            }
            if (data.hasOwnProperty('statuses_url')) {
                obj['statuses_url'] = ApiClient.convertToType(data['statuses_url'], 'String');
            }
            if (data.hasOwnProperty('subscribers_url')) {
                obj['subscribers_url'] = ApiClient.convertToType(data['subscribers_url'], 'String');
            }
            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');
            }
            if (data.hasOwnProperty('tags_url')) {
                obj['tags_url'] = ApiClient.convertToType(data['tags_url'], 'String');
            }
            if (data.hasOwnProperty('teams_url')) {
                obj['teams_url'] = ApiClient.convertToType(data['teams_url'], 'String');
            }
            if (data.hasOwnProperty('trees_url')) {
                obj['trees_url'] = ApiClient.convertToType(data['trees_url'], 'String');
            }
            if (data.hasOwnProperty('hooks_url')) {
                obj['hooks_url'] = ApiClient.convertToType(data['hooks_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimpleRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimpleRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SimpleRepository.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['full_name'] && !(typeof data['full_name'] === 'string' || data['full_name'] instanceof String)) {
            throw new Error("Expected the field `full_name` to be a primitive type in the JSON string but got " + data['full_name']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          SimpleUser.validateJSON(data['owner']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['archive_url'] && !(typeof data['archive_url'] === 'string' || data['archive_url'] instanceof String)) {
            throw new Error("Expected the field `archive_url` to be a primitive type in the JSON string but got " + data['archive_url']);
        }
        // ensure the json data is a string
        if (data['assignees_url'] && !(typeof data['assignees_url'] === 'string' || data['assignees_url'] instanceof String)) {
            throw new Error("Expected the field `assignees_url` to be a primitive type in the JSON string but got " + data['assignees_url']);
        }
        // ensure the json data is a string
        if (data['blobs_url'] && !(typeof data['blobs_url'] === 'string' || data['blobs_url'] instanceof String)) {
            throw new Error("Expected the field `blobs_url` to be a primitive type in the JSON string but got " + data['blobs_url']);
        }
        // ensure the json data is a string
        if (data['branches_url'] && !(typeof data['branches_url'] === 'string' || data['branches_url'] instanceof String)) {
            throw new Error("Expected the field `branches_url` to be a primitive type in the JSON string but got " + data['branches_url']);
        }
        // ensure the json data is a string
        if (data['collaborators_url'] && !(typeof data['collaborators_url'] === 'string' || data['collaborators_url'] instanceof String)) {
            throw new Error("Expected the field `collaborators_url` to be a primitive type in the JSON string but got " + data['collaborators_url']);
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
        if (data['compare_url'] && !(typeof data['compare_url'] === 'string' || data['compare_url'] instanceof String)) {
            throw new Error("Expected the field `compare_url` to be a primitive type in the JSON string but got " + data['compare_url']);
        }
        // ensure the json data is a string
        if (data['contents_url'] && !(typeof data['contents_url'] === 'string' || data['contents_url'] instanceof String)) {
            throw new Error("Expected the field `contents_url` to be a primitive type in the JSON string but got " + data['contents_url']);
        }
        // ensure the json data is a string
        if (data['contributors_url'] && !(typeof data['contributors_url'] === 'string' || data['contributors_url'] instanceof String)) {
            throw new Error("Expected the field `contributors_url` to be a primitive type in the JSON string but got " + data['contributors_url']);
        }
        // ensure the json data is a string
        if (data['deployments_url'] && !(typeof data['deployments_url'] === 'string' || data['deployments_url'] instanceof String)) {
            throw new Error("Expected the field `deployments_url` to be a primitive type in the JSON string but got " + data['deployments_url']);
        }
        // ensure the json data is a string
        if (data['downloads_url'] && !(typeof data['downloads_url'] === 'string' || data['downloads_url'] instanceof String)) {
            throw new Error("Expected the field `downloads_url` to be a primitive type in the JSON string but got " + data['downloads_url']);
        }
        // ensure the json data is a string
        if (data['events_url'] && !(typeof data['events_url'] === 'string' || data['events_url'] instanceof String)) {
            throw new Error("Expected the field `events_url` to be a primitive type in the JSON string but got " + data['events_url']);
        }
        // ensure the json data is a string
        if (data['forks_url'] && !(typeof data['forks_url'] === 'string' || data['forks_url'] instanceof String)) {
            throw new Error("Expected the field `forks_url` to be a primitive type in the JSON string but got " + data['forks_url']);
        }
        // ensure the json data is a string
        if (data['git_commits_url'] && !(typeof data['git_commits_url'] === 'string' || data['git_commits_url'] instanceof String)) {
            throw new Error("Expected the field `git_commits_url` to be a primitive type in the JSON string but got " + data['git_commits_url']);
        }
        // ensure the json data is a string
        if (data['git_refs_url'] && !(typeof data['git_refs_url'] === 'string' || data['git_refs_url'] instanceof String)) {
            throw new Error("Expected the field `git_refs_url` to be a primitive type in the JSON string but got " + data['git_refs_url']);
        }
        // ensure the json data is a string
        if (data['git_tags_url'] && !(typeof data['git_tags_url'] === 'string' || data['git_tags_url'] instanceof String)) {
            throw new Error("Expected the field `git_tags_url` to be a primitive type in the JSON string but got " + data['git_tags_url']);
        }
        // ensure the json data is a string
        if (data['issue_comment_url'] && !(typeof data['issue_comment_url'] === 'string' || data['issue_comment_url'] instanceof String)) {
            throw new Error("Expected the field `issue_comment_url` to be a primitive type in the JSON string but got " + data['issue_comment_url']);
        }
        // ensure the json data is a string
        if (data['issue_events_url'] && !(typeof data['issue_events_url'] === 'string' || data['issue_events_url'] instanceof String)) {
            throw new Error("Expected the field `issue_events_url` to be a primitive type in the JSON string but got " + data['issue_events_url']);
        }
        // ensure the json data is a string
        if (data['issues_url'] && !(typeof data['issues_url'] === 'string' || data['issues_url'] instanceof String)) {
            throw new Error("Expected the field `issues_url` to be a primitive type in the JSON string but got " + data['issues_url']);
        }
        // ensure the json data is a string
        if (data['keys_url'] && !(typeof data['keys_url'] === 'string' || data['keys_url'] instanceof String)) {
            throw new Error("Expected the field `keys_url` to be a primitive type in the JSON string but got " + data['keys_url']);
        }
        // ensure the json data is a string
        if (data['labels_url'] && !(typeof data['labels_url'] === 'string' || data['labels_url'] instanceof String)) {
            throw new Error("Expected the field `labels_url` to be a primitive type in the JSON string but got " + data['labels_url']);
        }
        // ensure the json data is a string
        if (data['languages_url'] && !(typeof data['languages_url'] === 'string' || data['languages_url'] instanceof String)) {
            throw new Error("Expected the field `languages_url` to be a primitive type in the JSON string but got " + data['languages_url']);
        }
        // ensure the json data is a string
        if (data['merges_url'] && !(typeof data['merges_url'] === 'string' || data['merges_url'] instanceof String)) {
            throw new Error("Expected the field `merges_url` to be a primitive type in the JSON string but got " + data['merges_url']);
        }
        // ensure the json data is a string
        if (data['milestones_url'] && !(typeof data['milestones_url'] === 'string' || data['milestones_url'] instanceof String)) {
            throw new Error("Expected the field `milestones_url` to be a primitive type in the JSON string but got " + data['milestones_url']);
        }
        // ensure the json data is a string
        if (data['notifications_url'] && !(typeof data['notifications_url'] === 'string' || data['notifications_url'] instanceof String)) {
            throw new Error("Expected the field `notifications_url` to be a primitive type in the JSON string but got " + data['notifications_url']);
        }
        // ensure the json data is a string
        if (data['pulls_url'] && !(typeof data['pulls_url'] === 'string' || data['pulls_url'] instanceof String)) {
            throw new Error("Expected the field `pulls_url` to be a primitive type in the JSON string but got " + data['pulls_url']);
        }
        // ensure the json data is a string
        if (data['releases_url'] && !(typeof data['releases_url'] === 'string' || data['releases_url'] instanceof String)) {
            throw new Error("Expected the field `releases_url` to be a primitive type in the JSON string but got " + data['releases_url']);
        }
        // ensure the json data is a string
        if (data['stargazers_url'] && !(typeof data['stargazers_url'] === 'string' || data['stargazers_url'] instanceof String)) {
            throw new Error("Expected the field `stargazers_url` to be a primitive type in the JSON string but got " + data['stargazers_url']);
        }
        // ensure the json data is a string
        if (data['statuses_url'] && !(typeof data['statuses_url'] === 'string' || data['statuses_url'] instanceof String)) {
            throw new Error("Expected the field `statuses_url` to be a primitive type in the JSON string but got " + data['statuses_url']);
        }
        // ensure the json data is a string
        if (data['subscribers_url'] && !(typeof data['subscribers_url'] === 'string' || data['subscribers_url'] instanceof String)) {
            throw new Error("Expected the field `subscribers_url` to be a primitive type in the JSON string but got " + data['subscribers_url']);
        }
        // ensure the json data is a string
        if (data['subscription_url'] && !(typeof data['subscription_url'] === 'string' || data['subscription_url'] instanceof String)) {
            throw new Error("Expected the field `subscription_url` to be a primitive type in the JSON string but got " + data['subscription_url']);
        }
        // ensure the json data is a string
        if (data['tags_url'] && !(typeof data['tags_url'] === 'string' || data['tags_url'] instanceof String)) {
            throw new Error("Expected the field `tags_url` to be a primitive type in the JSON string but got " + data['tags_url']);
        }
        // ensure the json data is a string
        if (data['teams_url'] && !(typeof data['teams_url'] === 'string' || data['teams_url'] instanceof String)) {
            throw new Error("Expected the field `teams_url` to be a primitive type in the JSON string but got " + data['teams_url']);
        }
        // ensure the json data is a string
        if (data['trees_url'] && !(typeof data['trees_url'] === 'string' || data['trees_url'] instanceof String)) {
            throw new Error("Expected the field `trees_url` to be a primitive type in the JSON string but got " + data['trees_url']);
        }
        // ensure the json data is a string
        if (data['hooks_url'] && !(typeof data['hooks_url'] === 'string' || data['hooks_url'] instanceof String)) {
            throw new Error("Expected the field `hooks_url` to be a primitive type in the JSON string but got " + data['hooks_url']);
        }

        return true;
    }


}

SimpleRepository.RequiredProperties = ["id", "node_id", "name", "full_name", "owner", "private", "html_url", "description", "fork", "url", "archive_url", "assignees_url", "blobs_url", "branches_url", "collaborators_url", "comments_url", "commits_url", "compare_url", "contents_url", "contributors_url", "deployments_url", "downloads_url", "events_url", "forks_url", "git_commits_url", "git_refs_url", "git_tags_url", "issue_comment_url", "issue_events_url", "issues_url", "keys_url", "labels_url", "languages_url", "merges_url", "milestones_url", "notifications_url", "pulls_url", "releases_url", "stargazers_url", "statuses_url", "subscribers_url", "subscription_url", "tags_url", "teams_url", "trees_url", "hooks_url"];

/**
 * A unique identifier of the repository.
 * @member {Number} id
 */
SimpleRepository.prototype['id'] = undefined;

/**
 * The GraphQL identifier of the repository.
 * @member {String} node_id
 */
SimpleRepository.prototype['node_id'] = undefined;

/**
 * The name of the repository.
 * @member {String} name
 */
SimpleRepository.prototype['name'] = undefined;

/**
 * The full, globally unique, name of the repository.
 * @member {String} full_name
 */
SimpleRepository.prototype['full_name'] = undefined;

/**
 * @member {module:model/SimpleUser} owner
 */
SimpleRepository.prototype['owner'] = undefined;

/**
 * Whether the repository is private.
 * @member {Boolean} private
 */
SimpleRepository.prototype['private'] = undefined;

/**
 * The URL to view the repository on GitHub.com.
 * @member {String} html_url
 */
SimpleRepository.prototype['html_url'] = undefined;

/**
 * The repository description.
 * @member {String} description
 */
SimpleRepository.prototype['description'] = undefined;

/**
 * Whether the repository is a fork.
 * @member {Boolean} fork
 */
SimpleRepository.prototype['fork'] = undefined;

/**
 * The URL to get more information about the repository from the GitHub API.
 * @member {String} url
 */
SimpleRepository.prototype['url'] = undefined;

/**
 * A template for the API URL to download the repository as an archive.
 * @member {String} archive_url
 */
SimpleRepository.prototype['archive_url'] = undefined;

/**
 * A template for the API URL to list the available assignees for issues in the repository.
 * @member {String} assignees_url
 */
SimpleRepository.prototype['assignees_url'] = undefined;

/**
 * A template for the API URL to create or retrieve a raw Git blob in the repository.
 * @member {String} blobs_url
 */
SimpleRepository.prototype['blobs_url'] = undefined;

/**
 * A template for the API URL to get information about branches in the repository.
 * @member {String} branches_url
 */
SimpleRepository.prototype['branches_url'] = undefined;

/**
 * A template for the API URL to get information about collaborators of the repository.
 * @member {String} collaborators_url
 */
SimpleRepository.prototype['collaborators_url'] = undefined;

/**
 * A template for the API URL to get information about comments on the repository.
 * @member {String} comments_url
 */
SimpleRepository.prototype['comments_url'] = undefined;

/**
 * A template for the API URL to get information about commits on the repository.
 * @member {String} commits_url
 */
SimpleRepository.prototype['commits_url'] = undefined;

/**
 * A template for the API URL to compare two commits or refs.
 * @member {String} compare_url
 */
SimpleRepository.prototype['compare_url'] = undefined;

/**
 * A template for the API URL to get the contents of the repository.
 * @member {String} contents_url
 */
SimpleRepository.prototype['contents_url'] = undefined;

/**
 * A template for the API URL to list the contributors to the repository.
 * @member {String} contributors_url
 */
SimpleRepository.prototype['contributors_url'] = undefined;

/**
 * The API URL to list the deployments of the repository.
 * @member {String} deployments_url
 */
SimpleRepository.prototype['deployments_url'] = undefined;

/**
 * The API URL to list the downloads on the repository.
 * @member {String} downloads_url
 */
SimpleRepository.prototype['downloads_url'] = undefined;

/**
 * The API URL to list the events of the repository.
 * @member {String} events_url
 */
SimpleRepository.prototype['events_url'] = undefined;

/**
 * The API URL to list the forks of the repository.
 * @member {String} forks_url
 */
SimpleRepository.prototype['forks_url'] = undefined;

/**
 * A template for the API URL to get information about Git commits of the repository.
 * @member {String} git_commits_url
 */
SimpleRepository.prototype['git_commits_url'] = undefined;

/**
 * A template for the API URL to get information about Git refs of the repository.
 * @member {String} git_refs_url
 */
SimpleRepository.prototype['git_refs_url'] = undefined;

/**
 * A template for the API URL to get information about Git tags of the repository.
 * @member {String} git_tags_url
 */
SimpleRepository.prototype['git_tags_url'] = undefined;

/**
 * A template for the API URL to get information about issue comments on the repository.
 * @member {String} issue_comment_url
 */
SimpleRepository.prototype['issue_comment_url'] = undefined;

/**
 * A template for the API URL to get information about issue events on the repository.
 * @member {String} issue_events_url
 */
SimpleRepository.prototype['issue_events_url'] = undefined;

/**
 * A template for the API URL to get information about issues on the repository.
 * @member {String} issues_url
 */
SimpleRepository.prototype['issues_url'] = undefined;

/**
 * A template for the API URL to get information about deploy keys on the repository.
 * @member {String} keys_url
 */
SimpleRepository.prototype['keys_url'] = undefined;

/**
 * A template for the API URL to get information about labels of the repository.
 * @member {String} labels_url
 */
SimpleRepository.prototype['labels_url'] = undefined;

/**
 * The API URL to get information about the languages of the repository.
 * @member {String} languages_url
 */
SimpleRepository.prototype['languages_url'] = undefined;

/**
 * The API URL to merge branches in the repository.
 * @member {String} merges_url
 */
SimpleRepository.prototype['merges_url'] = undefined;

/**
 * A template for the API URL to get information about milestones of the repository.
 * @member {String} milestones_url
 */
SimpleRepository.prototype['milestones_url'] = undefined;

/**
 * A template for the API URL to get information about notifications on the repository.
 * @member {String} notifications_url
 */
SimpleRepository.prototype['notifications_url'] = undefined;

/**
 * A template for the API URL to get information about pull requests on the repository.
 * @member {String} pulls_url
 */
SimpleRepository.prototype['pulls_url'] = undefined;

/**
 * A template for the API URL to get information about releases on the repository.
 * @member {String} releases_url
 */
SimpleRepository.prototype['releases_url'] = undefined;

/**
 * The API URL to list the stargazers on the repository.
 * @member {String} stargazers_url
 */
SimpleRepository.prototype['stargazers_url'] = undefined;

/**
 * A template for the API URL to get information about statuses of a commit.
 * @member {String} statuses_url
 */
SimpleRepository.prototype['statuses_url'] = undefined;

/**
 * The API URL to list the subscribers on the repository.
 * @member {String} subscribers_url
 */
SimpleRepository.prototype['subscribers_url'] = undefined;

/**
 * The API URL to subscribe to notifications for this repository.
 * @member {String} subscription_url
 */
SimpleRepository.prototype['subscription_url'] = undefined;

/**
 * The API URL to get information about tags on the repository.
 * @member {String} tags_url
 */
SimpleRepository.prototype['tags_url'] = undefined;

/**
 * The API URL to list the teams on the repository.
 * @member {String} teams_url
 */
SimpleRepository.prototype['teams_url'] = undefined;

/**
 * A template for the API URL to create or retrieve a raw Git tree of the repository.
 * @member {String} trees_url
 */
SimpleRepository.prototype['trees_url'] = undefined;

/**
 * The API URL to list the hooks on the repository.
 * @member {String} hooks_url
 */
SimpleRepository.prototype['hooks_url'] = undefined;






export default SimpleRepository;

