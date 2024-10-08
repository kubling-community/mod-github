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
 * The TeamParent model module.
 * @module model/TeamParent
 * @version 1.1.4
 */
class TeamParent {
    /**
     * Constructs a new <code>TeamParent</code>.
     * @alias module:model/TeamParent
     * @param description {String} Description of the team
     * @param htmlUrl {String} 
     * @param id {Number} Unique identifier of the team
     * @param membersUrl {String} 
     * @param name {String} Name of the team
     * @param nodeId {String} 
     * @param permission {String} Permission that the team will have for its repositories
     * @param privacy {module:model/TeamParent.PrivacyEnum} 
     * @param repositoriesUrl {String} 
     * @param slug {String} 
     * @param url {String} URL for the team
     */
    constructor(description, htmlUrl, id, membersUrl, name, nodeId, permission, privacy, repositoriesUrl, slug, url) { 
        
        TeamParent.initialize(this, description, htmlUrl, id, membersUrl, name, nodeId, permission, privacy, repositoriesUrl, slug, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, htmlUrl, id, membersUrl, name, nodeId, permission, privacy, repositoriesUrl, slug, url) { 
        obj['description'] = description;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['members_url'] = membersUrl;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['permission'] = permission;
        obj['privacy'] = privacy;
        obj['repositories_url'] = repositoriesUrl;
        obj['slug'] = slug;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>TeamParent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamParent} obj Optional instance to populate.
     * @return {module:model/TeamParent} The populated <code>TeamParent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamParent();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('members_url')) {
                obj['members_url'] = ApiClient.convertToType(data['members_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamParent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamParent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TeamParent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
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
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
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
        if (data['repositories_url'] && !(typeof data['repositories_url'] === 'string' || data['repositories_url'] instanceof String)) {
            throw new Error("Expected the field `repositories_url` to be a primitive type in the JSON string but got " + data['repositories_url']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

TeamParent.RequiredProperties = ["description", "html_url", "id", "members_url", "name", "node_id", "permission", "privacy", "repositories_url", "slug", "url"];

/**
 * Description of the team
 * @member {String} description
 */
TeamParent.prototype['description'] = undefined;

/**
 * @member {String} html_url
 */
TeamParent.prototype['html_url'] = undefined;

/**
 * Unique identifier of the team
 * @member {Number} id
 */
TeamParent.prototype['id'] = undefined;

/**
 * @member {String} members_url
 */
TeamParent.prototype['members_url'] = undefined;

/**
 * Name of the team
 * @member {String} name
 */
TeamParent.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
TeamParent.prototype['node_id'] = undefined;

/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */
TeamParent.prototype['permission'] = undefined;

/**
 * @member {module:model/TeamParent.PrivacyEnum} privacy
 */
TeamParent.prototype['privacy'] = undefined;

/**
 * @member {String} repositories_url
 */
TeamParent.prototype['repositories_url'] = undefined;

/**
 * @member {String} slug
 */
TeamParent.prototype['slug'] = undefined;

/**
 * URL for the team
 * @member {String} url
 */
TeamParent.prototype['url'] = undefined;





/**
 * Allowed values for the <code>privacy</code> property.
 * @enum {String}
 * @readonly
 */
TeamParent['PrivacyEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

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



export default TeamParent;

