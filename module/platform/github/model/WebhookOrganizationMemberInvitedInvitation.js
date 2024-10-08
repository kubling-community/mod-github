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
 * The WebhookOrganizationMemberInvitedInvitation model module.
 * @module model/WebhookOrganizationMemberInvitedInvitation
 * @version 1.1.4
 */
class WebhookOrganizationMemberInvitedInvitation {
    /**
     * Constructs a new <code>WebhookOrganizationMemberInvitedInvitation</code>.
     * The invitation for the user or email if the action is &#x60;member_invited&#x60;.
     * @alias module:model/WebhookOrganizationMemberInvitedInvitation
     * @param createdAt {Date} 
     * @param email {String} 
     * @param failedAt {Date} 
     * @param failedReason {String} 
     * @param id {Number} 
     * @param invitationTeamsUrl {String} 
     * @param inviter {module:model/User} 
     * @param login {String} 
     * @param nodeId {String} 
     * @param role {String} 
     * @param teamCount {Number} 
     */
    constructor(createdAt, email, failedAt, failedReason, id, invitationTeamsUrl, inviter, login, nodeId, role, teamCount) { 
        
        WebhookOrganizationMemberInvitedInvitation.initialize(this, createdAt, email, failedAt, failedReason, id, invitationTeamsUrl, inviter, login, nodeId, role, teamCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, email, failedAt, failedReason, id, invitationTeamsUrl, inviter, login, nodeId, role, teamCount) { 
        obj['created_at'] = createdAt;
        obj['email'] = email;
        obj['failed_at'] = failedAt;
        obj['failed_reason'] = failedReason;
        obj['id'] = id;
        obj['invitation_teams_url'] = invitationTeamsUrl;
        obj['inviter'] = inviter;
        obj['login'] = login;
        obj['node_id'] = nodeId;
        obj['role'] = role;
        obj['team_count'] = teamCount;
    }

    /**
     * Constructs a <code>WebhookOrganizationMemberInvitedInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookOrganizationMemberInvitedInvitation} obj Optional instance to populate.
     * @return {module:model/WebhookOrganizationMemberInvitedInvitation} The populated <code>WebhookOrganizationMemberInvitedInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookOrganizationMemberInvitedInvitation();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('failed_at')) {
                obj['failed_at'] = ApiClient.convertToType(data['failed_at'], 'Date');
            }
            if (data.hasOwnProperty('failed_reason')) {
                obj['failed_reason'] = ApiClient.convertToType(data['failed_reason'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('invitation_teams_url')) {
                obj['invitation_teams_url'] = ApiClient.convertToType(data['invitation_teams_url'], 'String');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = User.constructFromObject(data['inviter']);
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('team_count')) {
                obj['team_count'] = ApiClient.convertToType(data['team_count'], 'Number');
            }
            if (data.hasOwnProperty('invitation_source')) {
                obj['invitation_source'] = ApiClient.convertToType(data['invitation_source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookOrganizationMemberInvitedInvitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookOrganizationMemberInvitedInvitation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookOrganizationMemberInvitedInvitation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['failed_reason'] && !(typeof data['failed_reason'] === 'string' || data['failed_reason'] instanceof String)) {
            throw new Error("Expected the field `failed_reason` to be a primitive type in the JSON string but got " + data['failed_reason']);
        }
        // ensure the json data is a string
        if (data['invitation_teams_url'] && !(typeof data['invitation_teams_url'] === 'string' || data['invitation_teams_url'] instanceof String)) {
            throw new Error("Expected the field `invitation_teams_url` to be a primitive type in the JSON string but got " + data['invitation_teams_url']);
        }
        // validate the optional field `inviter`
        if (data['inviter']) { // data not null
          User.validateJSON(data['inviter']);
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
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['invitation_source'] && !(typeof data['invitation_source'] === 'string' || data['invitation_source'] instanceof String)) {
            throw new Error("Expected the field `invitation_source` to be a primitive type in the JSON string but got " + data['invitation_source']);
        }

        return true;
    }


}

WebhookOrganizationMemberInvitedInvitation.RequiredProperties = ["created_at", "email", "failed_at", "failed_reason", "id", "invitation_teams_url", "inviter", "login", "node_id", "role", "team_count"];

/**
 * @member {Date} created_at
 */
WebhookOrganizationMemberInvitedInvitation.prototype['created_at'] = undefined;

/**
 * @member {String} email
 */
WebhookOrganizationMemberInvitedInvitation.prototype['email'] = undefined;

/**
 * @member {Date} failed_at
 */
WebhookOrganizationMemberInvitedInvitation.prototype['failed_at'] = undefined;

/**
 * @member {String} failed_reason
 */
WebhookOrganizationMemberInvitedInvitation.prototype['failed_reason'] = undefined;

/**
 * @member {Number} id
 */
WebhookOrganizationMemberInvitedInvitation.prototype['id'] = undefined;

/**
 * @member {String} invitation_teams_url
 */
WebhookOrganizationMemberInvitedInvitation.prototype['invitation_teams_url'] = undefined;

/**
 * @member {module:model/User} inviter
 */
WebhookOrganizationMemberInvitedInvitation.prototype['inviter'] = undefined;

/**
 * @member {String} login
 */
WebhookOrganizationMemberInvitedInvitation.prototype['login'] = undefined;

/**
 * @member {String} node_id
 */
WebhookOrganizationMemberInvitedInvitation.prototype['node_id'] = undefined;

/**
 * @member {String} role
 */
WebhookOrganizationMemberInvitedInvitation.prototype['role'] = undefined;

/**
 * @member {Number} team_count
 */
WebhookOrganizationMemberInvitedInvitation.prototype['team_count'] = undefined;

/**
 * @member {String} invitation_source
 */
WebhookOrganizationMemberInvitedInvitation.prototype['invitation_source'] = undefined;






export default WebhookOrganizationMemberInvitedInvitation;

