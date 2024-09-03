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
 * The NullableTeamSimple model module.
 * @module model/NullableTeamSimple
 * @version 1.1.4
 */
class NullableTeamSimple {
    /**
     * Constructs a new <code>NullableTeamSimple</code>.
     * Groups of organization members that gives permissions on specified repositories.
     * @alias module:model/NullableTeamSimple
     * @param id {Number} Unique identifier of the team
     * @param nodeId {String} 
     * @param url {String} URL for the team
     * @param membersUrl {String} 
     * @param name {String} Name of the team
     * @param description {String} Description of the team
     * @param permission {String} Permission that the team will have for its repositories
     * @param htmlUrl {String} 
     * @param repositoriesUrl {String} 
     * @param slug {String} 
     */
    constructor(id, nodeId, url, membersUrl, name, description, permission, htmlUrl, repositoriesUrl, slug) { 
        
        NullableTeamSimple.initialize(this, id, nodeId, url, membersUrl, name, description, permission, htmlUrl, repositoriesUrl, slug);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nodeId, url, membersUrl, name, description, permission, htmlUrl, repositoriesUrl, slug) { 
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['url'] = url;
        obj['members_url'] = membersUrl;
        obj['name'] = name;
        obj['description'] = description;
        obj['permission'] = permission;
        obj['html_url'] = htmlUrl;
        obj['repositories_url'] = repositoriesUrl;
        obj['slug'] = slug;
    }

    /**
     * Constructs a <code>NullableTeamSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NullableTeamSimple} obj Optional instance to populate.
     * @return {module:model/NullableTeamSimple} The populated <code>NullableTeamSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NullableTeamSimple();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('members_url')) {
                obj['members_url'] = ApiClient.convertToType(data['members_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
            }
            if (data.hasOwnProperty('notification_setting')) {
                obj['notification_setting'] = ApiClient.convertToType(data['notification_setting'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('ldap_dn')) {
                obj['ldap_dn'] = ApiClient.convertToType(data['ldap_dn'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NullableTeamSimple</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NullableTeamSimple</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NullableTeamSimple.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['members_url'] && !(typeof data['members_url'] === 'string' || data['members_url'] instanceof String)) {
            throw new Error("Expected the field `members_url` to be a primitive type in the JSON string but got " + data['members_url']);
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
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        // ensure the json data is a string
        if (data['privacy'] && !(typeof data['privacy'] === 'string' || data['privacy'] instanceof String)) {
            throw new Error("Expected the field `privacy` to be a primitive type in the JSON string but got " + data['privacy']);
        }
        // ensure the json data is a string
        if (data['notification_setting'] && !(typeof data['notification_setting'] === 'string' || data['notification_setting'] instanceof String)) {
            throw new Error("Expected the field `notification_setting` to be a primitive type in the JSON string but got " + data['notification_setting']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['repositories_url'] && !(typeof data['repositories_url'] === 'string' || data['repositories_url'] instanceof String)) {
            throw new Error("Expected the field `repositories_url` to be a primitive type in the JSON string but got " + data['repositories_url']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['ldap_dn'] && !(typeof data['ldap_dn'] === 'string' || data['ldap_dn'] instanceof String)) {
            throw new Error("Expected the field `ldap_dn` to be a primitive type in the JSON string but got " + data['ldap_dn']);
        }

        return true;
    }


}

NullableTeamSimple.RequiredProperties = ["id", "node_id", "url", "members_url", "name", "description", "permission", "html_url", "repositories_url", "slug"];

/**
 * Unique identifier of the team
 * @member {Number} id
 */
NullableTeamSimple.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
NullableTeamSimple.prototype['node_id'] = undefined;

/**
 * URL for the team
 * @member {String} url
 */
NullableTeamSimple.prototype['url'] = undefined;

/**
 * @member {String} members_url
 */
NullableTeamSimple.prototype['members_url'] = undefined;

/**
 * Name of the team
 * @member {String} name
 */
NullableTeamSimple.prototype['name'] = undefined;

/**
 * Description of the team
 * @member {String} description
 */
NullableTeamSimple.prototype['description'] = undefined;

/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */
NullableTeamSimple.prototype['permission'] = undefined;

/**
 * The level of privacy this team should have
 * @member {String} privacy
 */
NullableTeamSimple.prototype['privacy'] = undefined;

/**
 * The notification setting the team has set
 * @member {String} notification_setting
 */
NullableTeamSimple.prototype['notification_setting'] = undefined;

/**
 * @member {String} html_url
 */
NullableTeamSimple.prototype['html_url'] = undefined;

/**
 * @member {String} repositories_url
 */
NullableTeamSimple.prototype['repositories_url'] = undefined;

/**
 * @member {String} slug
 */
NullableTeamSimple.prototype['slug'] = undefined;

/**
 * Distinguished Name (DN) that team maps to within LDAP environment
 * @member {String} ldap_dn
 */
NullableTeamSimple.prototype['ldap_dn'] = undefined;






export default NullableTeamSimple;

