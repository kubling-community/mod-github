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
 * The User2 model module.
 * @module model/User2
 * @version 1.1.4
 */
class User2 {
    /**
     * Constructs a new <code>User2</code>.
     * @alias module:model/User2
     * @param id {Number} 
     */
    constructor(id) { 
        
        User2.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>User2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User2} obj Optional instance to populate.
     * @return {module:model/User2} The populated <code>User2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User2();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('followers_url')) {
                obj['followers_url'] = ApiClient.convertToType(data['followers_url'], 'String');
            }
            if (data.hasOwnProperty('following_url')) {
                obj['following_url'] = ApiClient.convertToType(data['following_url'], 'String');
            }
            if (data.hasOwnProperty('gists_url')) {
                obj['gists_url'] = ApiClient.convertToType(data['gists_url'], 'String');
            }
            if (data.hasOwnProperty('gravatar_id')) {
                obj['gravatar_id'] = ApiClient.convertToType(data['gravatar_id'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('organizations_url')) {
                obj['organizations_url'] = ApiClient.convertToType(data['organizations_url'], 'String');
            }
            if (data.hasOwnProperty('received_events_url')) {
                obj['received_events_url'] = ApiClient.convertToType(data['received_events_url'], 'String');
            }
            if (data.hasOwnProperty('repos_url')) {
                obj['repos_url'] = ApiClient.convertToType(data['repos_url'], 'String');
            }
            if (data.hasOwnProperty('site_admin')) {
                obj['site_admin'] = ApiClient.convertToType(data['site_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('starred_url')) {
                obj['starred_url'] = ApiClient.convertToType(data['starred_url'], 'String');
            }
            if (data.hasOwnProperty('subscriptions_url')) {
                obj['subscriptions_url'] = ApiClient.convertToType(data['subscriptions_url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of User2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['avatar_url'] && !(typeof data['avatar_url'] === 'string' || data['avatar_url'] instanceof String)) {
            throw new Error("Expected the field `avatar_url` to be a primitive type in the JSON string but got " + data['avatar_url']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['events_url'] && !(typeof data['events_url'] === 'string' || data['events_url'] instanceof String)) {
            throw new Error("Expected the field `events_url` to be a primitive type in the JSON string but got " + data['events_url']);
        }
        // ensure the json data is a string
        if (data['followers_url'] && !(typeof data['followers_url'] === 'string' || data['followers_url'] instanceof String)) {
            throw new Error("Expected the field `followers_url` to be a primitive type in the JSON string but got " + data['followers_url']);
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
        if (data['gravatar_id'] && !(typeof data['gravatar_id'] === 'string' || data['gravatar_id'] instanceof String)) {
            throw new Error("Expected the field `gravatar_id` to be a primitive type in the JSON string but got " + data['gravatar_id']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['organizations_url'] && !(typeof data['organizations_url'] === 'string' || data['organizations_url'] instanceof String)) {
            throw new Error("Expected the field `organizations_url` to be a primitive type in the JSON string but got " + data['organizations_url']);
        }
        // ensure the json data is a string
        if (data['received_events_url'] && !(typeof data['received_events_url'] === 'string' || data['received_events_url'] instanceof String)) {
            throw new Error("Expected the field `received_events_url` to be a primitive type in the JSON string but got " + data['received_events_url']);
        }
        // ensure the json data is a string
        if (data['repos_url'] && !(typeof data['repos_url'] === 'string' || data['repos_url'] instanceof String)) {
            throw new Error("Expected the field `repos_url` to be a primitive type in the JSON string but got " + data['repos_url']);
        }
        // ensure the json data is a string
        if (data['starred_url'] && !(typeof data['starred_url'] === 'string' || data['starred_url'] instanceof String)) {
            throw new Error("Expected the field `starred_url` to be a primitive type in the JSON string but got " + data['starred_url']);
        }
        // ensure the json data is a string
        if (data['subscriptions_url'] && !(typeof data['subscriptions_url'] === 'string' || data['subscriptions_url'] instanceof String)) {
            throw new Error("Expected the field `subscriptions_url` to be a primitive type in the JSON string but got " + data['subscriptions_url']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

User2.RequiredProperties = ["id"];

/**
 * @member {String} avatar_url
 */
User2.prototype['avatar_url'] = undefined;

/**
 * @member {Boolean} deleted
 */
User2.prototype['deleted'] = undefined;

/**
 * @member {String} email
 */
User2.prototype['email'] = undefined;

/**
 * @member {String} events_url
 */
User2.prototype['events_url'] = undefined;

/**
 * @member {String} followers_url
 */
User2.prototype['followers_url'] = undefined;

/**
 * @member {String} following_url
 */
User2.prototype['following_url'] = undefined;

/**
 * @member {String} gists_url
 */
User2.prototype['gists_url'] = undefined;

/**
 * @member {String} gravatar_id
 */
User2.prototype['gravatar_id'] = undefined;

/**
 * @member {String} html_url
 */
User2.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
User2.prototype['id'] = undefined;

/**
 * @member {String} login
 */
User2.prototype['login'] = undefined;

/**
 * @member {String} name
 */
User2.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
User2.prototype['node_id'] = undefined;

/**
 * @member {String} organizations_url
 */
User2.prototype['organizations_url'] = undefined;

/**
 * @member {String} received_events_url
 */
User2.prototype['received_events_url'] = undefined;

/**
 * @member {String} repos_url
 */
User2.prototype['repos_url'] = undefined;

/**
 * @member {Boolean} site_admin
 */
User2.prototype['site_admin'] = undefined;

/**
 * @member {String} starred_url
 */
User2.prototype['starred_url'] = undefined;

/**
 * @member {String} subscriptions_url
 */
User2.prototype['subscriptions_url'] = undefined;

/**
 * @member {module:model/User2.TypeEnum} type
 */
User2.prototype['type'] = undefined;

/**
 * @member {String} url
 */
User2.prototype['url'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
User2['TypeEnum'] = {

    /**
     * value: "Bot"
     * @const
     */
    "Bot": "Bot",

    /**
     * value: "User"
     * @const
     */
    "User": "User",

    /**
     * value: "Organization"
     * @const
     */
    "Organization": "Organization"
};



export default User2;

