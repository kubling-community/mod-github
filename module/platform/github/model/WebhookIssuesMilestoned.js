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
import Issue5 from './Issue5';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhooksMilestone from './WebhooksMilestone';

/**
 * The WebhookIssuesMilestoned model module.
 * @module model/WebhookIssuesMilestoned
 * @version 1.1.4
 */
class WebhookIssuesMilestoned {
    /**
     * Constructs a new <code>WebhookIssuesMilestoned</code>.
     * @alias module:model/WebhookIssuesMilestoned
     * @param action {module:model/WebhookIssuesMilestoned.ActionEnum} 
     * @param issue {module:model/Issue5} 
     * @param milestone {module:model/WebhooksMilestone} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, issue, milestone, repository, sender) { 
        
        WebhookIssuesMilestoned.initialize(this, action, issue, milestone, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, issue, milestone, repository, sender) { 
        obj['action'] = action;
        obj['issue'] = issue;
        obj['milestone'] = milestone;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookIssuesMilestoned</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookIssuesMilestoned} obj Optional instance to populate.
     * @return {module:model/WebhookIssuesMilestoned} The populated <code>WebhookIssuesMilestoned</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookIssuesMilestoned();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = Issue5.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = WebhooksMilestone.constructFromObject(data['milestone']);
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookIssuesMilestoned</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookIssuesMilestoned</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookIssuesMilestoned.RequiredProperties) {
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
        // validate the optional field `issue`
        if (data['issue']) { // data not null
          Issue5.validateJSON(data['issue']);
        }
        // validate the optional field `milestone`
        if (data['milestone']) { // data not null
          WebhooksMilestone.validateJSON(data['milestone']);
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

WebhookIssuesMilestoned.RequiredProperties = ["action", "issue", "milestone", "repository", "sender"];

/**
 * @member {module:model/WebhookIssuesMilestoned.ActionEnum} action
 */
WebhookIssuesMilestoned.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookIssuesMilestoned.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookIssuesMilestoned.prototype['installation'] = undefined;

/**
 * @member {module:model/Issue5} issue
 */
WebhookIssuesMilestoned.prototype['issue'] = undefined;

/**
 * @member {module:model/WebhooksMilestone} milestone
 */
WebhookIssuesMilestoned.prototype['milestone'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookIssuesMilestoned.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookIssuesMilestoned.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookIssuesMilestoned.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookIssuesMilestoned['ActionEnum'] = {

    /**
     * value: "milestoned"
     * @const
     */
    "milestoned": "milestoned"
};



export default WebhookIssuesMilestoned;

