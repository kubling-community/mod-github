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
import Deployment from './Deployment';
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhookWorkflowJobWaitingWorkflowJob from './WebhookWorkflowJobWaitingWorkflowJob';

/**
 * The WebhookWorkflowJobWaiting model module.
 * @module model/WebhookWorkflowJobWaiting
 * @version 1.1.4
 */
class WebhookWorkflowJobWaiting {
    /**
     * Constructs a new <code>WebhookWorkflowJobWaiting</code>.
     * @alias module:model/WebhookWorkflowJobWaiting
     * @param action {module:model/WebhookWorkflowJobWaiting.ActionEnum} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     * @param workflowJob {module:model/WebhookWorkflowJobWaitingWorkflowJob} 
     */
    constructor(action, repository, sender, workflowJob) { 
        
        WebhookWorkflowJobWaiting.initialize(this, action, repository, sender, workflowJob);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, repository, sender, workflowJob) { 
        obj['action'] = action;
        obj['repository'] = repository;
        obj['sender'] = sender;
        obj['workflow_job'] = workflowJob;
    }

    /**
     * Constructs a <code>WebhookWorkflowJobWaiting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookWorkflowJobWaiting} obj Optional instance to populate.
     * @return {module:model/WebhookWorkflowJobWaiting} The populated <code>WebhookWorkflowJobWaiting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookWorkflowJobWaiting();

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
            if (data.hasOwnProperty('workflow_job')) {
                obj['workflow_job'] = WebhookWorkflowJobWaitingWorkflowJob.constructFromObject(data['workflow_job']);
            }
            if (data.hasOwnProperty('deployment')) {
                obj['deployment'] = Deployment.constructFromObject(data['deployment']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookWorkflowJobWaiting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookWorkflowJobWaiting</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookWorkflowJobWaiting.RequiredProperties) {
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
        // validate the optional field `workflow_job`
        if (data['workflow_job']) { // data not null
          WebhookWorkflowJobWaitingWorkflowJob.validateJSON(data['workflow_job']);
        }
        // validate the optional field `deployment`
        if (data['deployment']) { // data not null
          Deployment.validateJSON(data['deployment']);
        }

        return true;
    }


}

WebhookWorkflowJobWaiting.RequiredProperties = ["action", "repository", "sender", "workflow_job"];

/**
 * @member {module:model/WebhookWorkflowJobWaiting.ActionEnum} action
 */
WebhookWorkflowJobWaiting.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookWorkflowJobWaiting.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookWorkflowJobWaiting.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookWorkflowJobWaiting.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookWorkflowJobWaiting.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookWorkflowJobWaiting.prototype['sender'] = undefined;

/**
 * @member {module:model/WebhookWorkflowJobWaitingWorkflowJob} workflow_job
 */
WebhookWorkflowJobWaiting.prototype['workflow_job'] = undefined;

/**
 * @member {module:model/Deployment} deployment
 */
WebhookWorkflowJobWaiting.prototype['deployment'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookWorkflowJobWaiting['ActionEnum'] = {

    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting"
};



export default WebhookWorkflowJobWaiting;

