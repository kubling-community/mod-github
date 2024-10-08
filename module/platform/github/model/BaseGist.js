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
import BaseGistFilesValue from './BaseGistFilesValue';
import NullableSimpleUser from './NullableSimpleUser';
import SimpleUser from './SimpleUser';

/**
 * The BaseGist model module.
 * @module model/BaseGist
 * @version 1.1.4
 */
class BaseGist {
    /**
     * Constructs a new <code>BaseGist</code>.
     * Base Gist
     * @alias module:model/BaseGist
     * @param url {String} 
     * @param forksUrl {String} 
     * @param commitsUrl {String} 
     * @param id {String} 
     * @param nodeId {String} 
     * @param gitPullUrl {String} 
     * @param gitPushUrl {String} 
     * @param htmlUrl {String} 
     * @param files {Object.<String, module:model/BaseGistFilesValue>} 
     * @param _public {Boolean} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param description {String} 
     * @param comments {Number} 
     * @param user {module:model/NullableSimpleUser} 
     * @param commentsUrl {String} 
     */
    constructor(url, forksUrl, commitsUrl, id, nodeId, gitPullUrl, gitPushUrl, htmlUrl, files, _public, createdAt, updatedAt, description, comments, user, commentsUrl) { 
        
        BaseGist.initialize(this, url, forksUrl, commitsUrl, id, nodeId, gitPullUrl, gitPushUrl, htmlUrl, files, _public, createdAt, updatedAt, description, comments, user, commentsUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, forksUrl, commitsUrl, id, nodeId, gitPullUrl, gitPushUrl, htmlUrl, files, _public, createdAt, updatedAt, description, comments, user, commentsUrl) { 
        obj['url'] = url;
        obj['forks_url'] = forksUrl;
        obj['commits_url'] = commitsUrl;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['git_pull_url'] = gitPullUrl;
        obj['git_push_url'] = gitPushUrl;
        obj['html_url'] = htmlUrl;
        obj['files'] = files;
        obj['public'] = _public;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['description'] = description;
        obj['comments'] = comments;
        obj['user'] = user;
        obj['comments_url'] = commentsUrl;
    }

    /**
     * Constructs a <code>BaseGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseGist} obj Optional instance to populate.
     * @return {module:model/BaseGist} The populated <code>BaseGist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseGist();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('forks_url')) {
                obj['forks_url'] = ApiClient.convertToType(data['forks_url'], 'String');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('git_pull_url')) {
                obj['git_pull_url'] = ApiClient.convertToType(data['git_pull_url'], 'String');
            }
            if (data.hasOwnProperty('git_push_url')) {
                obj['git_push_url'] = ApiClient.convertToType(data['git_push_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], {'String': BaseGistFilesValue});
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = NullableSimpleUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = SimpleUser.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('truncated')) {
                obj['truncated'] = ApiClient.convertToType(data['truncated'], 'Boolean');
            }
            if (data.hasOwnProperty('forks')) {
                obj['forks'] = ApiClient.convertToType(data['forks'], [Object]);
            }
            if (data.hasOwnProperty('history')) {
                obj['history'] = ApiClient.convertToType(data['history'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseGist</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseGist</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseGist.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['forks_url'] && !(typeof data['forks_url'] === 'string' || data['forks_url'] instanceof String)) {
            throw new Error("Expected the field `forks_url` to be a primitive type in the JSON string but got " + data['forks_url']);
        }
        // ensure the json data is a string
        if (data['commits_url'] && !(typeof data['commits_url'] === 'string' || data['commits_url'] instanceof String)) {
            throw new Error("Expected the field `commits_url` to be a primitive type in the JSON string but got " + data['commits_url']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['git_pull_url'] && !(typeof data['git_pull_url'] === 'string' || data['git_pull_url'] instanceof String)) {
            throw new Error("Expected the field `git_pull_url` to be a primitive type in the JSON string but got " + data['git_pull_url']);
        }
        // ensure the json data is a string
        if (data['git_push_url'] && !(typeof data['git_push_url'] === 'string' || data['git_push_url'] instanceof String)) {
            throw new Error("Expected the field `git_push_url` to be a primitive type in the JSON string but got " + data['git_push_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          NullableSimpleUser.validateJSON(data['user']);
        }
        // ensure the json data is a string
        if (data['comments_url'] && !(typeof data['comments_url'] === 'string' || data['comments_url'] instanceof String)) {
            throw new Error("Expected the field `comments_url` to be a primitive type in the JSON string but got " + data['comments_url']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          SimpleUser.validateJSON(data['owner']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['forks'])) {
            throw new Error("Expected the field `forks` to be an array in the JSON data but got " + data['forks']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['history'])) {
            throw new Error("Expected the field `history` to be an array in the JSON data but got " + data['history']);
        }

        return true;
    }


}

BaseGist.RequiredProperties = ["url", "forks_url", "commits_url", "id", "node_id", "git_pull_url", "git_push_url", "html_url", "files", "public", "created_at", "updated_at", "description", "comments", "user", "comments_url"];

/**
 * @member {String} url
 */
BaseGist.prototype['url'] = undefined;

/**
 * @member {String} forks_url
 */
BaseGist.prototype['forks_url'] = undefined;

/**
 * @member {String} commits_url
 */
BaseGist.prototype['commits_url'] = undefined;

/**
 * @member {String} id
 */
BaseGist.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
BaseGist.prototype['node_id'] = undefined;

/**
 * @member {String} git_pull_url
 */
BaseGist.prototype['git_pull_url'] = undefined;

/**
 * @member {String} git_push_url
 */
BaseGist.prototype['git_push_url'] = undefined;

/**
 * @member {String} html_url
 */
BaseGist.prototype['html_url'] = undefined;

/**
 * @member {Object.<String, module:model/BaseGistFilesValue>} files
 */
BaseGist.prototype['files'] = undefined;

/**
 * @member {Boolean} public
 */
BaseGist.prototype['public'] = undefined;

/**
 * @member {Date} created_at
 */
BaseGist.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
BaseGist.prototype['updated_at'] = undefined;

/**
 * @member {String} description
 */
BaseGist.prototype['description'] = undefined;

/**
 * @member {Number} comments
 */
BaseGist.prototype['comments'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} user
 */
BaseGist.prototype['user'] = undefined;

/**
 * @member {String} comments_url
 */
BaseGist.prototype['comments_url'] = undefined;

/**
 * @member {module:model/SimpleUser} owner
 */
BaseGist.prototype['owner'] = undefined;

/**
 * @member {Boolean} truncated
 */
BaseGist.prototype['truncated'] = undefined;

/**
 * @member {Array.<Object>} forks
 */
BaseGist.prototype['forks'] = undefined;

/**
 * @member {Array.<Object>} history
 */
BaseGist.prototype['history'] = undefined;






export default BaseGist;

