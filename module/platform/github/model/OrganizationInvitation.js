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
import SimpleUser from './SimpleUser';

/**
 * The OrganizationInvitation model module.
 * @module model/OrganizationInvitation
 * @version 1.1.4
 */
class OrganizationInvitation {
    /**
     * Constructs a new <code>OrganizationInvitation</code>.
     * Organization Invitation
     * @alias module:model/OrganizationInvitation
     * @param id {Number} 
     * @param login {String} 
     * @param email {String} 
     * @param role {String} 
     * @param createdAt {String} 
     * @param inviter {module:model/SimpleUser} 
     * @param teamCount {Number} 
     * @param nodeId {String} 
     * @param invitationTeamsUrl {String} 
     */
    constructor(id, login, email, role, createdAt, inviter, teamCount, nodeId, invitationTeamsUrl) { 
        
        OrganizationInvitation.initialize(this, id, login, email, role, createdAt, inviter, teamCount, nodeId, invitationTeamsUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, login, email, role, createdAt, inviter, teamCount, nodeId, invitationTeamsUrl) { 
        obj['id'] = id;
        obj['login'] = login;
        obj['email'] = email;
        obj['role'] = role;
        obj['created_at'] = createdAt;
        obj['inviter'] = inviter;
        obj['team_count'] = teamCount;
        obj['node_id'] = nodeId;
        obj['invitation_teams_url'] = invitationTeamsUrl;
    }

    /**
     * Constructs a <code>OrganizationInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationInvitation} obj Optional instance to populate.
     * @return {module:model/OrganizationInvitation} The populated <code>OrganizationInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationInvitation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('failed_at')) {
                obj['failed_at'] = ApiClient.convertToType(data['failed_at'], 'String');
            }
            if (data.hasOwnProperty('failed_reason')) {
                obj['failed_reason'] = ApiClient.convertToType(data['failed_reason'], 'String');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = SimpleUser.constructFromObject(data['inviter']);
            }
            if (data.hasOwnProperty('team_count')) {
                obj['team_count'] = ApiClient.convertToType(data['team_count'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('invitation_teams_url')) {
                obj['invitation_teams_url'] = ApiClient.convertToType(data['invitation_teams_url'], 'String');
            }
            if (data.hasOwnProperty('invitation_source')) {
                obj['invitation_source'] = ApiClient.convertToType(data['invitation_source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationInvitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationInvitation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationInvitation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['failed_at'] && !(typeof data['failed_at'] === 'string' || data['failed_at'] instanceof String)) {
            throw new Error("Expected the field `failed_at` to be a primitive type in the JSON string but got " + data['failed_at']);
        }
        // ensure the json data is a string
        if (data['failed_reason'] && !(typeof data['failed_reason'] === 'string' || data['failed_reason'] instanceof String)) {
            throw new Error("Expected the field `failed_reason` to be a primitive type in the JSON string but got " + data['failed_reason']);
        }
        // validate the optional field `inviter`
        if (data['inviter']) { // data not null
          SimpleUser.validateJSON(data['inviter']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['invitation_teams_url'] && !(typeof data['invitation_teams_url'] === 'string' || data['invitation_teams_url'] instanceof String)) {
            throw new Error("Expected the field `invitation_teams_url` to be a primitive type in the JSON string but got " + data['invitation_teams_url']);
        }
        // ensure the json data is a string
        if (data['invitation_source'] && !(typeof data['invitation_source'] === 'string' || data['invitation_source'] instanceof String)) {
            throw new Error("Expected the field `invitation_source` to be a primitive type in the JSON string but got " + data['invitation_source']);
        }

        return true;
    }


}

OrganizationInvitation.RequiredProperties = ["id", "login", "email", "role", "created_at", "inviter", "team_count", "node_id", "invitation_teams_url"];

/**
 * @member {Number} id
 */
OrganizationInvitation.prototype['id'] = undefined;

/**
 * @member {String} login
 */
OrganizationInvitation.prototype['login'] = undefined;

/**
 * @member {String} email
 */
OrganizationInvitation.prototype['email'] = undefined;

/**
 * @member {String} role
 */
OrganizationInvitation.prototype['role'] = undefined;

/**
 * @member {String} created_at
 */
OrganizationInvitation.prototype['created_at'] = undefined;

/**
 * @member {String} failed_at
 */
OrganizationInvitation.prototype['failed_at'] = undefined;

/**
 * @member {String} failed_reason
 */
OrganizationInvitation.prototype['failed_reason'] = undefined;

/**
 * @member {module:model/SimpleUser} inviter
 */
OrganizationInvitation.prototype['inviter'] = undefined;

/**
 * @member {Number} team_count
 */
OrganizationInvitation.prototype['team_count'] = undefined;

/**
 * @member {String} node_id
 */
OrganizationInvitation.prototype['node_id'] = undefined;

/**
 * @member {String} invitation_teams_url
 */
OrganizationInvitation.prototype['invitation_teams_url'] = undefined;

/**
 * @member {String} invitation_source
 */
OrganizationInvitation.prototype['invitation_source'] = undefined;






export default OrganizationInvitation;

