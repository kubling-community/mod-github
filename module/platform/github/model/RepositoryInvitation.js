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
import MinimalRepository from './MinimalRepository';
import NullableSimpleUser from './NullableSimpleUser';

/**
 * The RepositoryInvitation model module.
 * @module model/RepositoryInvitation
 * @version 1.1.4
 */
class RepositoryInvitation {
    /**
     * Constructs a new <code>RepositoryInvitation</code>.
     * Repository invitations let you manage who you collaborate with.
     * @alias module:model/RepositoryInvitation
     * @param id {Number} Unique identifier of the repository invitation.
     * @param repository {module:model/MinimalRepository} 
     * @param invitee {module:model/NullableSimpleUser} 
     * @param inviter {module:model/NullableSimpleUser} 
     * @param permissions {module:model/RepositoryInvitation.PermissionsEnum} The permission associated with the invitation.
     * @param createdAt {Date} 
     * @param url {String} URL for the repository invitation
     * @param htmlUrl {String} 
     * @param nodeId {String} 
     */
    constructor(id, repository, invitee, inviter, permissions, createdAt, url, htmlUrl, nodeId) { 
        
        RepositoryInvitation.initialize(this, id, repository, invitee, inviter, permissions, createdAt, url, htmlUrl, nodeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, repository, invitee, inviter, permissions, createdAt, url, htmlUrl, nodeId) { 
        obj['id'] = id;
        obj['repository'] = repository;
        obj['invitee'] = invitee;
        obj['inviter'] = inviter;
        obj['permissions'] = permissions;
        obj['created_at'] = createdAt;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['node_id'] = nodeId;
    }

    /**
     * Constructs a <code>RepositoryInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryInvitation} obj Optional instance to populate.
     * @return {module:model/RepositoryInvitation} The populated <code>RepositoryInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryInvitation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = MinimalRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('invitee')) {
                obj['invitee'] = NullableSimpleUser.constructFromObject(data['invitee']);
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = NullableSimpleUser.constructFromObject(data['inviter']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryInvitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryInvitation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryInvitation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          MinimalRepository.validateJSON(data['repository']);
        }
        // validate the optional field `invitee`
        if (data['invitee']) { // data not null
          NullableSimpleUser.validateJSON(data['invitee']);
        }
        // validate the optional field `inviter`
        if (data['inviter']) { // data not null
          NullableSimpleUser.validateJSON(data['inviter']);
        }
        // ensure the json data is a string
        if (data['permissions'] && !(typeof data['permissions'] === 'string' || data['permissions'] instanceof String)) {
            throw new Error("Expected the field `permissions` to be a primitive type in the JSON string but got " + data['permissions']);
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
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }

        return true;
    }


}

RepositoryInvitation.RequiredProperties = ["id", "repository", "invitee", "inviter", "permissions", "created_at", "url", "html_url", "node_id"];

/**
 * Unique identifier of the repository invitation.
 * @member {Number} id
 */
RepositoryInvitation.prototype['id'] = undefined;

/**
 * @member {module:model/MinimalRepository} repository
 */
RepositoryInvitation.prototype['repository'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} invitee
 */
RepositoryInvitation.prototype['invitee'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} inviter
 */
RepositoryInvitation.prototype['inviter'] = undefined;

/**
 * The permission associated with the invitation.
 * @member {module:model/RepositoryInvitation.PermissionsEnum} permissions
 */
RepositoryInvitation.prototype['permissions'] = undefined;

/**
 * @member {Date} created_at
 */
RepositoryInvitation.prototype['created_at'] = undefined;

/**
 * Whether or not the invitation has expired
 * @member {Boolean} expired
 */
RepositoryInvitation.prototype['expired'] = undefined;

/**
 * URL for the repository invitation
 * @member {String} url
 */
RepositoryInvitation.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
RepositoryInvitation.prototype['html_url'] = undefined;

/**
 * @member {String} node_id
 */
RepositoryInvitation.prototype['node_id'] = undefined;





/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryInvitation['PermissionsEnum'] = {

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "write"
     * @const
     */
    "write": "write",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "triage"
     * @const
     */
    "triage": "triage",

    /**
     * value: "maintain"
     * @const
     */
    "maintain": "maintain"
};



export default RepositoryInvitation;

