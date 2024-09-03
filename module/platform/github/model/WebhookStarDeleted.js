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
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookStarDeleted model module.
 * @module model/WebhookStarDeleted
 * @version 1.1.4
 */
class WebhookStarDeleted {
    /**
     * Constructs a new <code>WebhookStarDeleted</code>.
     * @alias module:model/WebhookStarDeleted
     * @param action {module:model/WebhookStarDeleted.ActionEnum} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     * @param starredAt {Object} The time the star was created. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action.
     */
    constructor(action, repository, sender, starredAt) { 
        
        WebhookStarDeleted.initialize(this, action, repository, sender, starredAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, repository, sender, starredAt) { 
        obj['action'] = action;
        obj['repository'] = repository;
        obj['sender'] = sender;
        obj['starred_at'] = starredAt;
    }

    /**
     * Constructs a <code>WebhookStarDeleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookStarDeleted} obj Optional instance to populate.
     * @return {module:model/WebhookStarDeleted} The populated <code>WebhookStarDeleted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookStarDeleted();

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
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('starred_at')) {
                obj['starred_at'] = ApiClient.convertToType(data['starred_at'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookStarDeleted</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookStarDeleted</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookStarDeleted.RequiredProperties) {
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
          RepositoryWebhooks.validateJSON(data['repository']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}

WebhookStarDeleted.RequiredProperties = ["action", "repository", "sender", "starred_at"];

/**
 * @member {module:model/WebhookStarDeleted.ActionEnum} action
 */
WebhookStarDeleted.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookStarDeleted.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookStarDeleted.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookStarDeleted.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookStarDeleted.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookStarDeleted.prototype['sender'] = undefined;

/**
 * The time the star was created. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action.
 * @member {Object} starred_at
 */
WebhookStarDeleted.prototype['starred_at'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookStarDeleted['ActionEnum'] = {

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"
};



export default WebhookStarDeleted;

