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
import WebhooksIssue from './WebhooksIssue';
import WebhooksLabel from './WebhooksLabel';

/**
 * The WebhookIssuesUnlabeled model module.
 * @module model/WebhookIssuesUnlabeled
 * @version 1.1.4
 */
class WebhookIssuesUnlabeled {
    /**
     * Constructs a new <code>WebhookIssuesUnlabeled</code>.
     * @alias module:model/WebhookIssuesUnlabeled
     * @param action {module:model/WebhookIssuesUnlabeled.ActionEnum} 
     * @param issue {module:model/WebhooksIssue} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, issue, repository, sender) { 
        
        WebhookIssuesUnlabeled.initialize(this, action, issue, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, issue, repository, sender) { 
        obj['action'] = action;
        obj['issue'] = issue;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookIssuesUnlabeled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookIssuesUnlabeled} obj Optional instance to populate.
     * @return {module:model/WebhookIssuesUnlabeled} The populated <code>WebhookIssuesUnlabeled</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookIssuesUnlabeled();

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
                obj['issue'] = WebhooksIssue.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = WebhooksLabel.constructFromObject(data['label']);
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
     * Validates the JSON data with respect to <code>WebhookIssuesUnlabeled</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookIssuesUnlabeled</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookIssuesUnlabeled.RequiredProperties) {
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
          WebhooksIssue.validateJSON(data['issue']);
        }
        // validate the optional field `label`
        if (data['label']) { // data not null
          WebhooksLabel.validateJSON(data['label']);
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

WebhookIssuesUnlabeled.RequiredProperties = ["action", "issue", "repository", "sender"];

/**
 * @member {module:model/WebhookIssuesUnlabeled.ActionEnum} action
 */
WebhookIssuesUnlabeled.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookIssuesUnlabeled.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookIssuesUnlabeled.prototype['installation'] = undefined;

/**
 * @member {module:model/WebhooksIssue} issue
 */
WebhookIssuesUnlabeled.prototype['issue'] = undefined;

/**
 * @member {module:model/WebhooksLabel} label
 */
WebhookIssuesUnlabeled.prototype['label'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookIssuesUnlabeled.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookIssuesUnlabeled.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookIssuesUnlabeled.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookIssuesUnlabeled['ActionEnum'] = {

    /**
     * value: "unlabeled"
     * @const
     */
    "unlabeled": "unlabeled"
};



export default WebhookIssuesUnlabeled;

