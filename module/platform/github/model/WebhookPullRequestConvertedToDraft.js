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
import PullRequestWebhook from './PullRequestWebhook';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookPullRequestConvertedToDraft model module.
 * @module model/WebhookPullRequestConvertedToDraft
 * @version 1.1.4
 */
class WebhookPullRequestConvertedToDraft {
    /**
     * Constructs a new <code>WebhookPullRequestConvertedToDraft</code>.
     * @alias module:model/WebhookPullRequestConvertedToDraft
     * @param action {module:model/WebhookPullRequestConvertedToDraft.ActionEnum} 
     * @param number {Number} The pull request number.
     * @param pullRequest {module:model/PullRequestWebhook} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, number, pullRequest, repository, sender) { 
        
        WebhookPullRequestConvertedToDraft.initialize(this, action, number, pullRequest, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, number, pullRequest, repository, sender) { 
        obj['action'] = action;
        obj['number'] = number;
        obj['pull_request'] = pullRequest;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookPullRequestConvertedToDraft</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookPullRequestConvertedToDraft} obj Optional instance to populate.
     * @return {module:model/WebhookPullRequestConvertedToDraft} The populated <code>WebhookPullRequestConvertedToDraft</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookPullRequestConvertedToDraft();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = PullRequestWebhook.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookPullRequestConvertedToDraft</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookPullRequestConvertedToDraft</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookPullRequestConvertedToDraft.RequiredProperties) {
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
        // validate the optional field `pull_request`
        if (data['pull_request']) { // data not null
          PullRequestWebhook.validateJSON(data['pull_request']);
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

WebhookPullRequestConvertedToDraft.RequiredProperties = ["action", "number", "pull_request", "repository", "sender"];

/**
 * @member {module:model/WebhookPullRequestConvertedToDraft.ActionEnum} action
 */
WebhookPullRequestConvertedToDraft.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookPullRequestConvertedToDraft.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookPullRequestConvertedToDraft.prototype['installation'] = undefined;

/**
 * The pull request number.
 * @member {Number} number
 */
WebhookPullRequestConvertedToDraft.prototype['number'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookPullRequestConvertedToDraft.prototype['organization'] = undefined;

/**
 * @member {module:model/PullRequestWebhook} pull_request
 */
WebhookPullRequestConvertedToDraft.prototype['pull_request'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookPullRequestConvertedToDraft.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookPullRequestConvertedToDraft.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookPullRequestConvertedToDraft['ActionEnum'] = {

    /**
     * value: "converted_to_draft"
     * @const
     */
    "converted_to_draft": "converted_to_draft"
};



export default WebhookPullRequestConvertedToDraft;

