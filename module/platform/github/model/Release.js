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
import Reactions from './Reactions';
import ReleaseAsset1 from './ReleaseAsset1';
import User from './User';

/**
 * The Release model module.
 * @module model/Release
 * @version 1.1.4
 */
class Release {
    /**
     * Constructs a new <code>Release</code>.
     * The [release](https://docs.github.com/rest/releases/releases/#get-a-release) object.
     * @alias module:model/Release
     * @param assets {Array.<module:model/ReleaseAsset1>} 
     * @param assetsUrl {String} 
     * @param author {module:model/User} 
     * @param body {String} 
     * @param createdAt {Date} 
     * @param draft {Boolean} Whether the release is a draft or published
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param prerelease {Boolean} Whether the release is identified as a prerelease or a full release.
     * @param publishedAt {Date} 
     * @param tagName {String} The name of the tag.
     * @param tarballUrl {String} 
     * @param targetCommitish {String} Specifies the commitish value that determines where the Git tag is created from.
     * @param uploadUrl {String} 
     * @param url {String} 
     * @param zipballUrl {String} 
     */
    constructor(assets, assetsUrl, author, body, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl) { 
        
        Release.initialize(this, assets, assetsUrl, author, body, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assets, assetsUrl, author, body, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl) { 
        obj['assets'] = assets;
        obj['assets_url'] = assetsUrl;
        obj['author'] = author;
        obj['body'] = body;
        obj['created_at'] = createdAt;
        obj['draft'] = draft;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['prerelease'] = prerelease;
        obj['published_at'] = publishedAt;
        obj['tag_name'] = tagName;
        obj['tarball_url'] = tarballUrl;
        obj['target_commitish'] = targetCommitish;
        obj['upload_url'] = uploadUrl;
        obj['url'] = url;
        obj['zipball_url'] = zipballUrl;
    }

    /**
     * Constructs a <code>Release</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Release} obj Optional instance to populate.
     * @return {module:model/Release} The populated <code>Release</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Release();

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [ReleaseAsset1]);
            }
            if (data.hasOwnProperty('assets_url')) {
                obj['assets_url'] = ApiClient.convertToType(data['assets_url'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('discussion_url')) {
                obj['discussion_url'] = ApiClient.convertToType(data['discussion_url'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('prerelease')) {
                obj['prerelease'] = ApiClient.convertToType(data['prerelease'], 'Boolean');
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = Reactions.constructFromObject(data['reactions']);
            }
            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('tarball_url')) {
                obj['tarball_url'] = ApiClient.convertToType(data['tarball_url'], 'String');
            }
            if (data.hasOwnProperty('target_commitish')) {
                obj['target_commitish'] = ApiClient.convertToType(data['target_commitish'], 'String');
            }
            if (data.hasOwnProperty('upload_url')) {
                obj['upload_url'] = ApiClient.convertToType(data['upload_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('zipball_url')) {
                obj['zipball_url'] = ApiClient.convertToType(data['zipball_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Release</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Release</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Release.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['assets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['assets'])) {
                throw new Error("Expected the field `assets` to be an array in the JSON data but got " + data['assets']);
            }
            // validate the optional field `assets` (array)
            for (const item of data['assets']) {
                ReleaseAsset1.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['assets_url'] && !(typeof data['assets_url'] === 'string' || data['assets_url'] instanceof String)) {
            throw new Error("Expected the field `assets_url` to be a primitive type in the JSON string but got " + data['assets_url']);
        }
        // validate the optional field `author`
        if (data['author']) { // data not null
          User.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['discussion_url'] && !(typeof data['discussion_url'] === 'string' || data['discussion_url'] instanceof String)) {
            throw new Error("Expected the field `discussion_url` to be a primitive type in the JSON string but got " + data['discussion_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // validate the optional field `reactions`
        if (data['reactions']) { // data not null
          Reactions.validateJSON(data['reactions']);
        }
        // ensure the json data is a string
        if (data['tag_name'] && !(typeof data['tag_name'] === 'string' || data['tag_name'] instanceof String)) {
            throw new Error("Expected the field `tag_name` to be a primitive type in the JSON string but got " + data['tag_name']);
        }
        // ensure the json data is a string
        if (data['tarball_url'] && !(typeof data['tarball_url'] === 'string' || data['tarball_url'] instanceof String)) {
            throw new Error("Expected the field `tarball_url` to be a primitive type in the JSON string but got " + data['tarball_url']);
        }
        // ensure the json data is a string
        if (data['target_commitish'] && !(typeof data['target_commitish'] === 'string' || data['target_commitish'] instanceof String)) {
            throw new Error("Expected the field `target_commitish` to be a primitive type in the JSON string but got " + data['target_commitish']);
        }
        // ensure the json data is a string
        if (data['upload_url'] && !(typeof data['upload_url'] === 'string' || data['upload_url'] instanceof String)) {
            throw new Error("Expected the field `upload_url` to be a primitive type in the JSON string but got " + data['upload_url']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['zipball_url'] && !(typeof data['zipball_url'] === 'string' || data['zipball_url'] instanceof String)) {
            throw new Error("Expected the field `zipball_url` to be a primitive type in the JSON string but got " + data['zipball_url']);
        }

        return true;
    }


}

Release.RequiredProperties = ["assets", "assets_url", "author", "body", "created_at", "draft", "html_url", "id", "name", "node_id", "prerelease", "published_at", "tag_name", "tarball_url", "target_commitish", "upload_url", "url", "zipball_url"];

/**
 * @member {Array.<module:model/ReleaseAsset1>} assets
 */
Release.prototype['assets'] = undefined;

/**
 * @member {String} assets_url
 */
Release.prototype['assets_url'] = undefined;

/**
 * @member {module:model/User} author
 */
Release.prototype['author'] = undefined;

/**
 * @member {String} body
 */
Release.prototype['body'] = undefined;

/**
 * @member {Date} created_at
 */
Release.prototype['created_at'] = undefined;

/**
 * @member {String} discussion_url
 */
Release.prototype['discussion_url'] = undefined;

/**
 * Whether the release is a draft or published
 * @member {Boolean} draft
 */
Release.prototype['draft'] = undefined;

/**
 * @member {String} html_url
 */
Release.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
Release.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Release.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
Release.prototype['node_id'] = undefined;

/**
 * Whether the release is identified as a prerelease or a full release.
 * @member {Boolean} prerelease
 */
Release.prototype['prerelease'] = undefined;

/**
 * @member {Date} published_at
 */
Release.prototype['published_at'] = undefined;

/**
 * @member {module:model/Reactions} reactions
 */
Release.prototype['reactions'] = undefined;

/**
 * The name of the tag.
 * @member {String} tag_name
 */
Release.prototype['tag_name'] = undefined;

/**
 * @member {String} tarball_url
 */
Release.prototype['tarball_url'] = undefined;

/**
 * Specifies the commitish value that determines where the Git tag is created from.
 * @member {String} target_commitish
 */
Release.prototype['target_commitish'] = undefined;

/**
 * @member {String} upload_url
 */
Release.prototype['upload_url'] = undefined;

/**
 * @member {String} url
 */
Release.prototype['url'] = undefined;

/**
 * @member {String} zipball_url
 */
Release.prototype['zipball_url'] = undefined;






export default Release;

