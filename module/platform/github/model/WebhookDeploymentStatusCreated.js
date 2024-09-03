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
import Deployment1 from './Deployment1';
import DeploymentWorkflowRun4 from './DeploymentWorkflowRun4';
import EnterpriseWebhooks from './EnterpriseWebhooks';
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhookDeploymentStatusCreatedCheckRun from './WebhookDeploymentStatusCreatedCheckRun';
import WebhookDeploymentStatusCreatedDeploymentStatus from './WebhookDeploymentStatusCreatedDeploymentStatus';
import WebhooksWorkflow from './WebhooksWorkflow';

/**
 * The WebhookDeploymentStatusCreated model module.
 * @module model/WebhookDeploymentStatusCreated
 * @version 1.1.4
 */
class WebhookDeploymentStatusCreated {
    /**
     * Constructs a new <code>WebhookDeploymentStatusCreated</code>.
     * @alias module:model/WebhookDeploymentStatusCreated
     * @param action {module:model/WebhookDeploymentStatusCreated.ActionEnum} 
     * @param deployment {module:model/Deployment1} 
     * @param deploymentStatus {module:model/WebhookDeploymentStatusCreatedDeploymentStatus} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, deployment, deploymentStatus, repository, sender) { 
        
        WebhookDeploymentStatusCreated.initialize(this, action, deployment, deploymentStatus, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, deployment, deploymentStatus, repository, sender) { 
        obj['action'] = action;
        obj['deployment'] = deployment;
        obj['deployment_status'] = deploymentStatus;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookDeploymentStatusCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDeploymentStatusCreated} obj Optional instance to populate.
     * @return {module:model/WebhookDeploymentStatusCreated} The populated <code>WebhookDeploymentStatusCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDeploymentStatusCreated();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('check_run')) {
                obj['check_run'] = WebhookDeploymentStatusCreatedCheckRun.constructFromObject(data['check_run']);
            }
            if (data.hasOwnProperty('deployment')) {
                obj['deployment'] = Deployment1.constructFromObject(data['deployment']);
            }
            if (data.hasOwnProperty('deployment_status')) {
                obj['deployment_status'] = WebhookDeploymentStatusCreatedDeploymentStatus.constructFromObject(data['deployment_status']);
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
            if (data.hasOwnProperty('workflow')) {
                obj['workflow'] = WebhooksWorkflow.constructFromObject(data['workflow']);
            }
            if (data.hasOwnProperty('workflow_run')) {
                obj['workflow_run'] = DeploymentWorkflowRun4.constructFromObject(data['workflow_run']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookDeploymentStatusCreated</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookDeploymentStatusCreated</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookDeploymentStatusCreated.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `check_run`
        if (data['check_run']) { // data not null
          WebhookDeploymentStatusCreatedCheckRun.validateJSON(data['check_run']);
        }
        // validate the optional field `deployment`
        if (data['deployment']) { // data not null
          Deployment1.validateJSON(data['deployment']);
        }
        // validate the optional field `deployment_status`
        if (data['deployment_status']) { // data not null
          WebhookDeploymentStatusCreatedDeploymentStatus.validateJSON(data['deployment_status']);
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
        // validate the optional field `workflow`
        if (data['workflow']) { // data not null
          WebhooksWorkflow.validateJSON(data['workflow']);
        }
        // validate the optional field `workflow_run`
        if (data['workflow_run']) { // data not null
          DeploymentWorkflowRun4.validateJSON(data['workflow_run']);
        }

        return true;
    }


}

WebhookDeploymentStatusCreated.RequiredProperties = ["action", "deployment", "deployment_status", "repository", "sender"];

/**
 * @member {module:model/WebhookDeploymentStatusCreated.ActionEnum} action
 */
WebhookDeploymentStatusCreated.prototype['action'] = undefined;

/**
 * @member {module:model/WebhookDeploymentStatusCreatedCheckRun} check_run
 */
WebhookDeploymentStatusCreated.prototype['check_run'] = undefined;

/**
 * @member {module:model/Deployment1} deployment
 */
WebhookDeploymentStatusCreated.prototype['deployment'] = undefined;

/**
 * @member {module:model/WebhookDeploymentStatusCreatedDeploymentStatus} deployment_status
 */
WebhookDeploymentStatusCreated.prototype['deployment_status'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookDeploymentStatusCreated.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookDeploymentStatusCreated.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookDeploymentStatusCreated.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookDeploymentStatusCreated.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookDeploymentStatusCreated.prototype['sender'] = undefined;

/**
 * @member {module:model/WebhooksWorkflow} workflow
 */
WebhookDeploymentStatusCreated.prototype['workflow'] = undefined;

/**
 * @member {module:model/DeploymentWorkflowRun4} workflow_run
 */
WebhookDeploymentStatusCreated.prototype['workflow_run'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookDeploymentStatusCreated['ActionEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created"
};



export default WebhookDeploymentStatusCreated;

