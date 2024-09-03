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
import Discussion from './Discussion';
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhooksLabel from './WebhooksLabel';

/**
 * The WebhookDiscussionLabeled model module.
 * @module model/WebhookDiscussionLabeled
 * @version 1.1.4
 */
class WebhookDiscussionLabeled {
    /**
     * Constructs a new <code>WebhookDiscussionLabeled</code>.
     * @alias module:model/WebhookDiscussionLabeled
     * @param action {module:model/WebhookDiscussionLabeled.ActionEnum} 
     * @param discussion {module:model/Discussion} 
     * @param label {module:model/WebhooksLabel} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, discussion, label, repository, sender) { 
        
        WebhookDiscussionLabeled.initialize(this, action, discussion, label, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, discussion, label, repository, sender) { 
        obj['action'] = action;
        obj['discussion'] = discussion;
        obj['label'] = label;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookDiscussionLabeled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDiscussionLabeled} obj Optional instance to populate.
     * @return {module:model/WebhookDiscussionLabeled} The populated <code>WebhookDiscussionLabeled</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDiscussionLabeled();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('discussion')) {
                obj['discussion'] = Discussion.constructFromObject(data['discussion']);
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = EnterpriseWebhooks.constructFromObject(data['enterprise']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
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
     * Validates the JSON data with respect to <code>WebhookDiscussionLabeled</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookDiscussionLabeled</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookDiscussionLabeled.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `discussion`
        if (data['discussion']) { // data not null
          Discussion.validateJSON(data['discussion']);
        }
        // validate the optional field `enterprise`
        if (data['enterprise']) { // data not null
          EnterpriseWebhooks.validateJSON(data['enterprise']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
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

WebhookDiscussionLabeled.RequiredProperties = ["action", "discussion", "label", "repository", "sender"];

/**
 * @member {module:model/WebhookDiscussionLabeled.ActionEnum} action
 */
WebhookDiscussionLabeled.prototype['action'] = undefined;

/**
 * @member {module:model/Discussion} discussion
 */
WebhookDiscussionLabeled.prototype['discussion'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookDiscussionLabeled.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookDiscussionLabeled.prototype['installation'] = undefined;

/**
 * @member {module:model/WebhooksLabel} label
 */
WebhookDiscussionLabeled.prototype['label'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookDiscussionLabeled.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookDiscussionLabeled.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookDiscussionLabeled.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookDiscussionLabeled['ActionEnum'] = {

    /**
     * value: "labeled"
     * @const
     */
    "labeled": "labeled"
};



export default WebhookDiscussionLabeled;

