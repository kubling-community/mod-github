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
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import Repository14 from './Repository14';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhooksTeam1 from './WebhooksTeam1';

/**
 * The WebhookTeamAddedToRepository model module.
 * @module model/WebhookTeamAddedToRepository
 * @version 1.1.4
 */
class WebhookTeamAddedToRepository {
    /**
     * Constructs a new <code>WebhookTeamAddedToRepository</code>.
     * @alias module:model/WebhookTeamAddedToRepository
     * @param action {module:model/WebhookTeamAddedToRepository.ActionEnum} 
     * @param organization {module:model/OrganizationSimpleWebhooks} 
     * @param team {module:model/WebhooksTeam1} 
     */
    constructor(action, organization, team) { 
        
        WebhookTeamAddedToRepository.initialize(this, action, organization, team);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, organization, team) { 
        obj['action'] = action;
        obj['organization'] = organization;
        obj['team'] = team;
    }

    /**
     * Constructs a <code>WebhookTeamAddedToRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookTeamAddedToRepository} obj Optional instance to populate.
     * @return {module:model/WebhookTeamAddedToRepository} The populated <code>WebhookTeamAddedToRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookTeamAddedToRepository();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = Repository14.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = WebhooksTeam1.constructFromObject(data['team']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookTeamAddedToRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookTeamAddedToRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookTeamAddedToRepository.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          Repository14.validateJSON(data['repository']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }
        // validate the optional field `team`
        if (data['team']) { // data not null
          WebhooksTeam1.validateJSON(data['team']);
        }

        return true;
    }


}

WebhookTeamAddedToRepository.RequiredProperties = ["action", "organization", "team"];

/**
 * @member {module:model/WebhookTeamAddedToRepository.ActionEnum} action
 */
WebhookTeamAddedToRepository.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookTeamAddedToRepository.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookTeamAddedToRepository.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookTeamAddedToRepository.prototype['organization'] = undefined;

/**
 * @member {module:model/Repository14} repository
 */
WebhookTeamAddedToRepository.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookTeamAddedToRepository.prototype['sender'] = undefined;

/**
 * @member {module:model/WebhooksTeam1} team
 */
WebhookTeamAddedToRepository.prototype['team'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookTeamAddedToRepository['ActionEnum'] = {

    /**
     * value: "added_to_repository"
     * @const
     */
    "added_to_repository": "added_to_repository"
};



export default WebhookTeamAddedToRepository;

