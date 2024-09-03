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
import User from './User';

/**
 * The WebhookPackagePublishedPackagePackageVersionRelease model module.
 * @module model/WebhookPackagePublishedPackagePackageVersionRelease
 * @version 1.1.4
 */
class WebhookPackagePublishedPackagePackageVersionRelease {
    /**
     * Constructs a new <code>WebhookPackagePublishedPackagePackageVersionRelease</code>.
     * @alias module:model/WebhookPackagePublishedPackagePackageVersionRelease
     * @param author {module:model/User} 
     * @param createdAt {String} 
     * @param draft {Boolean} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param prerelease {Boolean} 
     * @param publishedAt {String} 
     * @param tagName {String} 
     * @param targetCommitish {String} 
     * @param url {String} 
     */
    constructor(author, createdAt, draft, htmlUrl, id, name, prerelease, publishedAt, tagName, targetCommitish, url) { 
        
        WebhookPackagePublishedPackagePackageVersionRelease.initialize(this, author, createdAt, draft, htmlUrl, id, name, prerelease, publishedAt, tagName, targetCommitish, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, createdAt, draft, htmlUrl, id, name, prerelease, publishedAt, tagName, targetCommitish, url) { 
        obj['author'] = author;
        obj['created_at'] = createdAt;
        obj['draft'] = draft;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['prerelease'] = prerelease;
        obj['published_at'] = publishedAt;
        obj['tag_name'] = tagName;
        obj['target_commitish'] = targetCommitish;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhookPackagePublishedPackagePackageVersionRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookPackagePublishedPackagePackageVersionRelease} obj Optional instance to populate.
     * @return {module:model/WebhookPackagePublishedPackagePackageVersionRelease} The populated <code>WebhookPackagePublishedPackagePackageVersionRelease</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookPackagePublishedPackagePackageVersionRelease();

            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
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
            if (data.hasOwnProperty('prerelease')) {
                obj['prerelease'] = ApiClient.convertToType(data['prerelease'], 'Boolean');
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'String');
            }
            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('target_commitish')) {
                obj['target_commitish'] = ApiClient.convertToType(data['target_commitish'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookPackagePublishedPackagePackageVersionRelease</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookPackagePublishedPackagePackageVersionRelease</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookPackagePublishedPackagePackageVersionRelease.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `author`
        if (data['author']) { // data not null
          User.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
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
        if (data['published_at'] && !(typeof data['published_at'] === 'string' || data['published_at'] instanceof String)) {
            throw new Error("Expected the field `published_at` to be a primitive type in the JSON string but got " + data['published_at']);
        }
        // ensure the json data is a string
        if (data['tag_name'] && !(typeof data['tag_name'] === 'string' || data['tag_name'] instanceof String)) {
            throw new Error("Expected the field `tag_name` to be a primitive type in the JSON string but got " + data['tag_name']);
        }
        // ensure the json data is a string
        if (data['target_commitish'] && !(typeof data['target_commitish'] === 'string' || data['target_commitish'] instanceof String)) {
            throw new Error("Expected the field `target_commitish` to be a primitive type in the JSON string but got " + data['target_commitish']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhookPackagePublishedPackagePackageVersionRelease.RequiredProperties = ["author", "created_at", "draft", "html_url", "id", "name", "prerelease", "published_at", "tag_name", "target_commitish", "url"];

/**
 * @member {module:model/User} author
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['author'] = undefined;

/**
 * @member {String} created_at
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['created_at'] = undefined;

/**
 * @member {Boolean} draft
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['draft'] = undefined;

/**
 * @member {String} html_url
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['name'] = undefined;

/**
 * @member {Boolean} prerelease
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['prerelease'] = undefined;

/**
 * @member {String} published_at
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['published_at'] = undefined;

/**
 * @member {String} tag_name
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['tag_name'] = undefined;

/**
 * @member {String} target_commitish
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['target_commitish'] = undefined;

/**
 * @member {String} url
 */
WebhookPackagePublishedPackagePackageVersionRelease.prototype['url'] = undefined;






export default WebhookPackagePublishedPackagePackageVersionRelease;

