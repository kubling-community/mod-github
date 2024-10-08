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
import FeedLinks from './FeedLinks';

/**
 * The Feed model module.
 * @module model/Feed
 * @version 1.1.4
 */
class Feed {
    /**
     * Constructs a new <code>Feed</code>.
     * Feed
     * @alias module:model/Feed
     * @param timelineUrl {String} 
     * @param userUrl {String} 
     * @param links {module:model/FeedLinks} 
     */
    constructor(timelineUrl, userUrl, links) { 
        
        Feed.initialize(this, timelineUrl, userUrl, links);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, timelineUrl, userUrl, links) { 
        obj['timeline_url'] = timelineUrl;
        obj['user_url'] = userUrl;
        obj['_links'] = links;
    }

    /**
     * Constructs a <code>Feed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feed} obj Optional instance to populate.
     * @return {module:model/Feed} The populated <code>Feed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feed();

            if (data.hasOwnProperty('timeline_url')) {
                obj['timeline_url'] = ApiClient.convertToType(data['timeline_url'], 'String');
            }
            if (data.hasOwnProperty('user_url')) {
                obj['user_url'] = ApiClient.convertToType(data['user_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_public_url')) {
                obj['current_user_public_url'] = ApiClient.convertToType(data['current_user_public_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_url')) {
                obj['current_user_url'] = ApiClient.convertToType(data['current_user_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_actor_url')) {
                obj['current_user_actor_url'] = ApiClient.convertToType(data['current_user_actor_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_organization_url')) {
                obj['current_user_organization_url'] = ApiClient.convertToType(data['current_user_organization_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_organization_urls')) {
                obj['current_user_organization_urls'] = ApiClient.convertToType(data['current_user_organization_urls'], ['String']);
            }
            if (data.hasOwnProperty('security_advisories_url')) {
                obj['security_advisories_url'] = ApiClient.convertToType(data['security_advisories_url'], 'String');
            }
            if (data.hasOwnProperty('repository_discussions_url')) {
                obj['repository_discussions_url'] = ApiClient.convertToType(data['repository_discussions_url'], 'String');
            }
            if (data.hasOwnProperty('repository_discussions_category_url')) {
                obj['repository_discussions_category_url'] = ApiClient.convertToType(data['repository_discussions_category_url'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = FeedLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Feed</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Feed</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Feed.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['timeline_url'] && !(typeof data['timeline_url'] === 'string' || data['timeline_url'] instanceof String)) {
            throw new Error("Expected the field `timeline_url` to be a primitive type in the JSON string but got " + data['timeline_url']);
        }
        // ensure the json data is a string
        if (data['user_url'] && !(typeof data['user_url'] === 'string' || data['user_url'] instanceof String)) {
            throw new Error("Expected the field `user_url` to be a primitive type in the JSON string but got " + data['user_url']);
        }
        // ensure the json data is a string
        if (data['current_user_public_url'] && !(typeof data['current_user_public_url'] === 'string' || data['current_user_public_url'] instanceof String)) {
            throw new Error("Expected the field `current_user_public_url` to be a primitive type in the JSON string but got " + data['current_user_public_url']);
        }
        // ensure the json data is a string
        if (data['current_user_url'] && !(typeof data['current_user_url'] === 'string' || data['current_user_url'] instanceof String)) {
            throw new Error("Expected the field `current_user_url` to be a primitive type in the JSON string but got " + data['current_user_url']);
        }
        // ensure the json data is a string
        if (data['current_user_actor_url'] && !(typeof data['current_user_actor_url'] === 'string' || data['current_user_actor_url'] instanceof String)) {
            throw new Error("Expected the field `current_user_actor_url` to be a primitive type in the JSON string but got " + data['current_user_actor_url']);
        }
        // ensure the json data is a string
        if (data['current_user_organization_url'] && !(typeof data['current_user_organization_url'] === 'string' || data['current_user_organization_url'] instanceof String)) {
            throw new Error("Expected the field `current_user_organization_url` to be a primitive type in the JSON string but got " + data['current_user_organization_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['current_user_organization_urls'])) {
            throw new Error("Expected the field `current_user_organization_urls` to be an array in the JSON data but got " + data['current_user_organization_urls']);
        }
        // ensure the json data is a string
        if (data['security_advisories_url'] && !(typeof data['security_advisories_url'] === 'string' || data['security_advisories_url'] instanceof String)) {
            throw new Error("Expected the field `security_advisories_url` to be a primitive type in the JSON string but got " + data['security_advisories_url']);
        }
        // ensure the json data is a string
        if (data['repository_discussions_url'] && !(typeof data['repository_discussions_url'] === 'string' || data['repository_discussions_url'] instanceof String)) {
            throw new Error("Expected the field `repository_discussions_url` to be a primitive type in the JSON string but got " + data['repository_discussions_url']);
        }
        // ensure the json data is a string
        if (data['repository_discussions_category_url'] && !(typeof data['repository_discussions_category_url'] === 'string' || data['repository_discussions_category_url'] instanceof String)) {
            throw new Error("Expected the field `repository_discussions_category_url` to be a primitive type in the JSON string but got " + data['repository_discussions_category_url']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          FeedLinks.validateJSON(data['_links']);
        }

        return true;
    }


}

Feed.RequiredProperties = ["timeline_url", "user_url", "_links"];

/**
 * @member {String} timeline_url
 */
Feed.prototype['timeline_url'] = undefined;

/**
 * @member {String} user_url
 */
Feed.prototype['user_url'] = undefined;

/**
 * @member {String} current_user_public_url
 */
Feed.prototype['current_user_public_url'] = undefined;

/**
 * @member {String} current_user_url
 */
Feed.prototype['current_user_url'] = undefined;

/**
 * @member {String} current_user_actor_url
 */
Feed.prototype['current_user_actor_url'] = undefined;

/**
 * @member {String} current_user_organization_url
 */
Feed.prototype['current_user_organization_url'] = undefined;

/**
 * @member {Array.<String>} current_user_organization_urls
 */
Feed.prototype['current_user_organization_urls'] = undefined;

/**
 * @member {String} security_advisories_url
 */
Feed.prototype['security_advisories_url'] = undefined;

/**
 * A feed of discussions for a given repository.
 * @member {String} repository_discussions_url
 */
Feed.prototype['repository_discussions_url'] = undefined;

/**
 * A feed of discussions for a given repository and category.
 * @member {String} repository_discussions_category_url
 */
Feed.prototype['repository_discussions_category_url'] = undefined;

/**
 * @member {module:model/FeedLinks} _links
 */
Feed.prototype['_links'] = undefined;






export default Feed;

