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
import SearchResultTextMatchesInner from './SearchResultTextMatchesInner';

/**
 * The UserSearchResultItem model module.
 * @module model/UserSearchResultItem
 * @version 1.1.4
 */
class UserSearchResultItem {
    /**
     * Constructs a new <code>UserSearchResultItem</code>.
     * User Search Result Item
     * @alias module:model/UserSearchResultItem
     * @param login {String} 
     * @param id {Number} 
     * @param nodeId {String} 
     * @param avatarUrl {String} 
     * @param gravatarId {String} 
     * @param url {String} 
     * @param htmlUrl {String} 
     * @param followersUrl {String} 
     * @param subscriptionsUrl {String} 
     * @param organizationsUrl {String} 
     * @param reposUrl {String} 
     * @param receivedEventsUrl {String} 
     * @param type {String} 
     * @param score {Number} 
     * @param followingUrl {String} 
     * @param gistsUrl {String} 
     * @param starredUrl {String} 
     * @param eventsUrl {String} 
     * @param siteAdmin {Boolean} 
     */
    constructor(login, id, nodeId, avatarUrl, gravatarId, url, htmlUrl, followersUrl, subscriptionsUrl, organizationsUrl, reposUrl, receivedEventsUrl, type, score, followingUrl, gistsUrl, starredUrl, eventsUrl, siteAdmin) { 
        
        UserSearchResultItem.initialize(this, login, id, nodeId, avatarUrl, gravatarId, url, htmlUrl, followersUrl, subscriptionsUrl, organizationsUrl, reposUrl, receivedEventsUrl, type, score, followingUrl, gistsUrl, starredUrl, eventsUrl, siteAdmin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, login, id, nodeId, avatarUrl, gravatarId, url, htmlUrl, followersUrl, subscriptionsUrl, organizationsUrl, reposUrl, receivedEventsUrl, type, score, followingUrl, gistsUrl, starredUrl, eventsUrl, siteAdmin) { 
        obj['login'] = login;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['avatar_url'] = avatarUrl;
        obj['gravatar_id'] = gravatarId;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['followers_url'] = followersUrl;
        obj['subscriptions_url'] = subscriptionsUrl;
        obj['organizations_url'] = organizationsUrl;
        obj['repos_url'] = reposUrl;
        obj['received_events_url'] = receivedEventsUrl;
        obj['type'] = type;
        obj['score'] = score;
        obj['following_url'] = followingUrl;
        obj['gists_url'] = gistsUrl;
        obj['starred_url'] = starredUrl;
        obj['events_url'] = eventsUrl;
        obj['site_admin'] = siteAdmin;
    }

    /**
     * Constructs a <code>UserSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserSearchResultItem} obj Optional instance to populate.
     * @return {module:model/UserSearchResultItem} The populated <code>UserSearchResultItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserSearchResultItem();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('gravatar_id')) {
                obj['gravatar_id'] = ApiClient.convertToType(data['gravatar_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('followers_url')) {
                obj['followers_url'] = ApiClient.convertToType(data['followers_url'], 'String');
            }
            if (data.hasOwnProperty('subscriptions_url')) {
                obj['subscriptions_url'] = ApiClient.convertToType(data['subscriptions_url'], 'String');
            }
            if (data.hasOwnProperty('organizations_url')) {
                obj['organizations_url'] = ApiClient.convertToType(data['organizations_url'], 'String');
            }
            if (data.hasOwnProperty('repos_url')) {
                obj['repos_url'] = ApiClient.convertToType(data['repos_url'], 'String');
            }
            if (data.hasOwnProperty('received_events_url')) {
                obj['received_events_url'] = ApiClient.convertToType(data['received_events_url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('following_url')) {
                obj['following_url'] = ApiClient.convertToType(data['following_url'], 'String');
            }
            if (data.hasOwnProperty('gists_url')) {
                obj['gists_url'] = ApiClient.convertToType(data['gists_url'], 'String');
            }
            if (data.hasOwnProperty('starred_url')) {
                obj['starred_url'] = ApiClient.convertToType(data['starred_url'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('public_repos')) {
                obj['public_repos'] = ApiClient.convertToType(data['public_repos'], 'Number');
            }
            if (data.hasOwnProperty('public_gists')) {
                obj['public_gists'] = ApiClient.convertToType(data['public_gists'], 'Number');
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], 'Number');
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = ApiClient.convertToType(data['following'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('site_admin')) {
                obj['site_admin'] = ApiClient.convertToType(data['site_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('hireable')) {
                obj['hireable'] = ApiClient.convertToType(data['hireable'], 'Boolean');
            }
            if (data.hasOwnProperty('text_matches')) {
                obj['text_matches'] = ApiClient.convertToType(data['text_matches'], [SearchResultTextMatchesInner]);
            }
            if (data.hasOwnProperty('blog')) {
                obj['blog'] = ApiClient.convertToType(data['blog'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('suspended_at')) {
                obj['suspended_at'] = ApiClient.convertToType(data['suspended_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserSearchResultItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserSearchResultItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserSearchResultItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['avatar_url'] && !(typeof data['avatar_url'] === 'string' || data['avatar_url'] instanceof String)) {
            throw new Error("Expected the field `avatar_url` to be a primitive type in the JSON string but got " + data['avatar_url']);
        }
        // ensure the json data is a string
        if (data['gravatar_id'] && !(typeof data['gravatar_id'] === 'string' || data['gravatar_id'] instanceof String)) {
            throw new Error("Expected the field `gravatar_id` to be a primitive type in the JSON string but got " + data['gravatar_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['followers_url'] && !(typeof data['followers_url'] === 'string' || data['followers_url'] instanceof String)) {
            throw new Error("Expected the field `followers_url` to be a primitive type in the JSON string but got " + data['followers_url']);
        }
        // ensure the json data is a string
        if (data['subscriptions_url'] && !(typeof data['subscriptions_url'] === 'string' || data['subscriptions_url'] instanceof String)) {
            throw new Error("Expected the field `subscriptions_url` to be a primitive type in the JSON string but got " + data['subscriptions_url']);
        }
        // ensure the json data is a string
        if (data['organizations_url'] && !(typeof data['organizations_url'] === 'string' || data['organizations_url'] instanceof String)) {
            throw new Error("Expected the field `organizations_url` to be a primitive type in the JSON string but got " + data['organizations_url']);
        }
        // ensure the json data is a string
        if (data['repos_url'] && !(typeof data['repos_url'] === 'string' || data['repos_url'] instanceof String)) {
            throw new Error("Expected the field `repos_url` to be a primitive type in the JSON string but got " + data['repos_url']);
        }
        // ensure the json data is a string
        if (data['received_events_url'] && !(typeof data['received_events_url'] === 'string' || data['received_events_url'] instanceof String)) {
            throw new Error("Expected the field `received_events_url` to be a primitive type in the JSON string but got " + data['received_events_url']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['following_url'] && !(typeof data['following_url'] === 'string' || data['following_url'] instanceof String)) {
            throw new Error("Expected the field `following_url` to be a primitive type in the JSON string but got " + data['following_url']);
        }
        // ensure the json data is a string
        if (data['gists_url'] && !(typeof data['gists_url'] === 'string' || data['gists_url'] instanceof String)) {
            throw new Error("Expected the field `gists_url` to be a primitive type in the JSON string but got " + data['gists_url']);
        }
        // ensure the json data is a string
        if (data['starred_url'] && !(typeof data['starred_url'] === 'string' || data['starred_url'] instanceof String)) {
            throw new Error("Expected the field `starred_url` to be a primitive type in the JSON string but got " + data['starred_url']);
        }
        // ensure the json data is a string
        if (data['events_url'] && !(typeof data['events_url'] === 'string' || data['events_url'] instanceof String)) {
            throw new Error("Expected the field `events_url` to be a primitive type in the JSON string but got " + data['events_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['bio'] && !(typeof data['bio'] === 'string' || data['bio'] instanceof String)) {
            throw new Error("Expected the field `bio` to be a primitive type in the JSON string but got " + data['bio']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        if (data['text_matches']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['text_matches'])) {
                throw new Error("Expected the field `text_matches` to be an array in the JSON data but got " + data['text_matches']);
            }
            // validate the optional field `text_matches` (array)
            for (const item of data['text_matches']) {
                SearchResultTextMatchesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['blog'] && !(typeof data['blog'] === 'string' || data['blog'] instanceof String)) {
            throw new Error("Expected the field `blog` to be a primitive type in the JSON string but got " + data['blog']);
        }
        // ensure the json data is a string
        if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
            throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
        }

        return true;
    }


}

UserSearchResultItem.RequiredProperties = ["login", "id", "node_id", "avatar_url", "gravatar_id", "url", "html_url", "followers_url", "subscriptions_url", "organizations_url", "repos_url", "received_events_url", "type", "score", "following_url", "gists_url", "starred_url", "events_url", "site_admin"];

/**
 * @member {String} login
 */
UserSearchResultItem.prototype['login'] = undefined;

/**
 * @member {Number} id
 */
UserSearchResultItem.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
UserSearchResultItem.prototype['node_id'] = undefined;

/**
 * @member {String} avatar_url
 */
UserSearchResultItem.prototype['avatar_url'] = undefined;

/**
 * @member {String} gravatar_id
 */
UserSearchResultItem.prototype['gravatar_id'] = undefined;

/**
 * @member {String} url
 */
UserSearchResultItem.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
UserSearchResultItem.prototype['html_url'] = undefined;

/**
 * @member {String} followers_url
 */
UserSearchResultItem.prototype['followers_url'] = undefined;

/**
 * @member {String} subscriptions_url
 */
UserSearchResultItem.prototype['subscriptions_url'] = undefined;

/**
 * @member {String} organizations_url
 */
UserSearchResultItem.prototype['organizations_url'] = undefined;

/**
 * @member {String} repos_url
 */
UserSearchResultItem.prototype['repos_url'] = undefined;

/**
 * @member {String} received_events_url
 */
UserSearchResultItem.prototype['received_events_url'] = undefined;

/**
 * @member {String} type
 */
UserSearchResultItem.prototype['type'] = undefined;

/**
 * @member {Number} score
 */
UserSearchResultItem.prototype['score'] = undefined;

/**
 * @member {String} following_url
 */
UserSearchResultItem.prototype['following_url'] = undefined;

/**
 * @member {String} gists_url
 */
UserSearchResultItem.prototype['gists_url'] = undefined;

/**
 * @member {String} starred_url
 */
UserSearchResultItem.prototype['starred_url'] = undefined;

/**
 * @member {String} events_url
 */
UserSearchResultItem.prototype['events_url'] = undefined;

/**
 * @member {Number} public_repos
 */
UserSearchResultItem.prototype['public_repos'] = undefined;

/**
 * @member {Number} public_gists
 */
UserSearchResultItem.prototype['public_gists'] = undefined;

/**
 * @member {Number} followers
 */
UserSearchResultItem.prototype['followers'] = undefined;

/**
 * @member {Number} following
 */
UserSearchResultItem.prototype['following'] = undefined;

/**
 * @member {Date} created_at
 */
UserSearchResultItem.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
UserSearchResultItem.prototype['updated_at'] = undefined;

/**
 * @member {String} name
 */
UserSearchResultItem.prototype['name'] = undefined;

/**
 * @member {String} bio
 */
UserSearchResultItem.prototype['bio'] = undefined;

/**
 * @member {String} email
 */
UserSearchResultItem.prototype['email'] = undefined;

/**
 * @member {String} location
 */
UserSearchResultItem.prototype['location'] = undefined;

/**
 * @member {Boolean} site_admin
 */
UserSearchResultItem.prototype['site_admin'] = undefined;

/**
 * @member {Boolean} hireable
 */
UserSearchResultItem.prototype['hireable'] = undefined;

/**
 * @member {Array.<module:model/SearchResultTextMatchesInner>} text_matches
 */
UserSearchResultItem.prototype['text_matches'] = undefined;

/**
 * @member {String} blog
 */
UserSearchResultItem.prototype['blog'] = undefined;

/**
 * @member {String} company
 */
UserSearchResultItem.prototype['company'] = undefined;

/**
 * @member {Date} suspended_at
 */
UserSearchResultItem.prototype['suspended_at'] = undefined;






export default UserSearchResultItem;

