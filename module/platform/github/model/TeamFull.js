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
import NullableTeamSimple from './NullableTeamSimple';
import TeamOrganization from './TeamOrganization';

/**
 * The TeamFull model module.
 * @module model/TeamFull
 * @version 1.1.4
 */
class TeamFull {
    /**
     * Constructs a new <code>TeamFull</code>.
     * Groups of organization members that gives permissions on specified repositories.
     * @alias module:model/TeamFull
     * @param id {Number} Unique identifier of the team
     * @param nodeId {String} 
     * @param url {String} URL for the team
     * @param htmlUrl {String} 
     * @param name {String} Name of the team
     * @param slug {String} 
     * @param description {String} 
     * @param permission {String} Permission that the team will have for its repositories
     * @param membersUrl {String} 
     * @param repositoriesUrl {String} 
     * @param membersCount {Number} 
     * @param reposCount {Number} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param organization {module:model/TeamOrganization} 
     */
    constructor(id, nodeId, url, htmlUrl, name, slug, description, permission, membersUrl, repositoriesUrl, membersCount, reposCount, createdAt, updatedAt, organization) { 
        
        TeamFull.initialize(this, id, nodeId, url, htmlUrl, name, slug, description, permission, membersUrl, repositoriesUrl, membersCount, reposCount, createdAt, updatedAt, organization);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nodeId, url, htmlUrl, name, slug, description, permission, membersUrl, repositoriesUrl, membersCount, reposCount, createdAt, updatedAt, organization) { 
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['name'] = name;
        obj['slug'] = slug;
        obj['description'] = description;
        obj['permission'] = permission;
        obj['members_url'] = membersUrl;
        obj['repositories_url'] = repositoriesUrl;
        obj['members_count'] = membersCount;
        obj['repos_count'] = reposCount;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['organization'] = organization;
    }

    /**
     * Constructs a <code>TeamFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamFull} obj Optional instance to populate.
     * @return {module:model/TeamFull} The populated <code>TeamFull</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamFull();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
            }
            if (data.hasOwnProperty('notification_setting')) {
                obj['notification_setting'] = ApiClient.convertToType(data['notification_setting'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('members_url')) {
                obj['members_url'] = ApiClient.convertToType(data['members_url'], 'String');
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = NullableTeamSimple.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('members_count')) {
                obj['members_count'] = ApiClient.convertToType(data['members_count'], 'Number');
            }
            if (data.hasOwnProperty('repos_count')) {
                obj['repos_count'] = ApiClient.convertToType(data['repos_count'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = TeamOrganization.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('ldap_dn')) {
                obj['ldap_dn'] = ApiClient.convertToType(data['ldap_dn'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamFull</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamFull</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TeamFull.RequiredProperties) {
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
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        // ensure the json data is a string
        if (data['members_url'] && !(typeof data['members_url'] === 'string' || data['members_url'] instanceof String)) {
            throw new Error("Expected the field `members_url` to be a primitive type in the JSON string but got " + data['members_url']);
        }
        // ensure the json data is a string
        if (data['repositories_url'] && !(typeof data['repositories_url'] === 'string' || data['repositories_url'] instanceof String)) {
            throw new Error("Expected the field `repositories_url` to be a primitive type in the JSON string but got " + data['repositories_url']);
        }
        // validate the optional field `parent`
        if (data['parent']) { // data not null
          NullableTeamSimple.validateJSON(data['parent']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          TeamOrganization.validateJSON(data['organization']);
        }
        // ensure the json data is a string
        if (data['ldap_dn'] && !(typeof data['ldap_dn'] === 'string' || data['ldap_dn'] instanceof String)) {
            throw new Error("Expected the field `ldap_dn` to be a primitive type in the JSON string but got " + data['ldap_dn']);
        }

        return true;
    }


}

TeamFull.RequiredProperties = ["id", "node_id", "url", "html_url", "name", "slug", "description", "permission", "members_url", "repositories_url", "members_count", "repos_count", "created_at", "updated_at", "organization"];

/**
 * Unique identifier of the team
 * @member {Number} id
 */
TeamFull.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
TeamFull.prototype['node_id'] = undefined;

/**
 * URL for the team
 * @member {String} url
 */
TeamFull.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
TeamFull.prototype['html_url'] = undefined;

/**
 * Name of the team
 * @member {String} name
 */
TeamFull.prototype['name'] = undefined;

/**
 * @member {String} slug
 */
TeamFull.prototype['slug'] = undefined;

/**
 * @member {String} description
 */
TeamFull.prototype['description'] = undefined;

/**
 * The level of privacy this team should have
 * @member {module:model/TeamFull.PrivacyEnum} privacy
 */
TeamFull.prototype['privacy'] = undefined;

/**
 * The notification setting the team has set
 * @member {module:model/TeamFull.NotificationSettingEnum} notification_setting
 */
TeamFull.prototype['notification_setting'] = undefined;

/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */
TeamFull.prototype['permission'] = undefined;

/**
 * @member {String} members_url
 */
TeamFull.prototype['members_url'] = undefined;

/**
 * @member {String} repositories_url
 */
TeamFull.prototype['repositories_url'] = undefined;

/**
 * @member {module:model/NullableTeamSimple} parent
 */
TeamFull.prototype['parent'] = undefined;

/**
 * @member {Number} members_count
 */
TeamFull.prototype['members_count'] = undefined;

/**
 * @member {Number} repos_count
 */
TeamFull.prototype['repos_count'] = undefined;

/**
 * @member {Date} created_at
 */
TeamFull.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
TeamFull.prototype['updated_at'] = undefined;

/**
 * @member {module:model/TeamOrganization} organization
 */
TeamFull.prototype['organization'] = undefined;

/**
 * Distinguished Name (DN) that team maps to within LDAP environment
 * @member {String} ldap_dn
 */
TeamFull.prototype['ldap_dn'] = undefined;





/**
 * Allowed values for the <code>privacy</code> property.
 * @enum {String}
 * @readonly
 */
TeamFull['PrivacyEnum'] = {

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",

    /**
     * value: "secret"
     * @const
     */
    "secret": "secret"
};


/**
 * Allowed values for the <code>notification_setting</code> property.
 * @enum {String}
 * @readonly
 */
TeamFull['NotificationSettingEnum'] = {

    /**
     * value: "notifications_enabled"
     * @const
     */
    "enabled": "notifications_enabled",

    /**
     * value: "notifications_disabled"
     * @const
     */
    "disabled": "notifications_disabled"
};



export default TeamFull;

