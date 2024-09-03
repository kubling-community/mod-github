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
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import PullRequest from './PullRequest';
import RepositoryWebhooks from './RepositoryWebhooks';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookDeploymentProtectionRuleRequested model module.
 * @module model/WebhookDeploymentProtectionRuleRequested
 * @version 1.1.4
 */
class WebhookDeploymentProtectionRuleRequested {
    /**
     * Constructs a new <code>WebhookDeploymentProtectionRuleRequested</code>.
     * @alias module:model/WebhookDeploymentProtectionRuleRequested
     */
    constructor() { 
        
        WebhookDeploymentProtectionRuleRequested.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookDeploymentProtectionRuleRequested</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDeploymentProtectionRuleRequested} obj Optional instance to populate.
     * @return {module:model/WebhookDeploymentProtectionRuleRequested} The populated <code>WebhookDeploymentProtectionRuleRequested</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDeploymentProtectionRuleRequested();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('deployment_callback_url')) {
                obj['deployment_callback_url'] = ApiClient.convertToType(data['deployment_callback_url'], 'String');
            }
            if (data.hasOwnProperty('deployment')) {
                obj['deployment'] = Deployment.constructFromObject(data['deployment']);
            }
            if (data.hasOwnProperty('pull_requests')) {
                obj['pull_requests'] = ApiClient.convertToType(data['pull_requests'], [PullRequest]);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookDeploymentProtectionRuleRequested</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookDeploymentProtectionRuleRequested</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['environment'] && !(typeof data['environment'] === 'string' || data['environment'] instanceof String)) {
            throw new Error("Expected the field `environment` to be a primitive type in the JSON string but got " + data['environment']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['deployment_callback_url'] && !(typeof data['deployment_callback_url'] === 'string' || data['deployment_callback_url'] instanceof String)) {
            throw new Error("Expected the field `deployment_callback_url` to be a primitive type in the JSON string but got " + data['deployment_callback_url']);
        }
        // validate the optional field `deployment`
        if (data['deployment']) { // data not null
          Deployment.validateJSON(data['deployment']);
        }
        if (data['pull_requests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['pull_requests'])) {
                throw new Error("Expected the field `pull_requests` to be an array in the JSON data but got " + data['pull_requests']);
            }
            // validate the optional field `pull_requests` (array)
            for (const item of data['pull_requests']) {
                PullRequest.validateJSON(item);
            };
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          RepositoryWebhooks.validateJSON(data['repository']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookDeploymentProtectionRuleRequested.ActionEnum} action
 */
WebhookDeploymentProtectionRuleRequested.prototype['action'] = undefined;

/**
 * The name of the environment that has the deployment protection rule.
 * @member {String} environment
 */
WebhookDeploymentProtectionRuleRequested.prototype['environment'] = undefined;

/**
 * The event that triggered the deployment protection rule.
 * @member {String} event
 */
WebhookDeploymentProtectionRuleRequested.prototype['event'] = undefined;

/**
 * The URL to review the deployment protection rule.
 * @member {String} deployment_callback_url
 */
WebhookDeploymentProtectionRuleRequested.prototype['deployment_callback_url'] = undefined;

/**
 * @member {module:model/Deployment} deployment
 */
WebhookDeploymentProtectionRuleRequested.prototype['deployment'] = undefined;

/**
 * @member {Array.<module:model/PullRequest>} pull_requests
 */
WebhookDeploymentProtectionRuleRequested.prototype['pull_requests'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookDeploymentProtectionRuleRequested.prototype['repository'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookDeploymentProtectionRuleRequested.prototype['organization'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookDeploymentProtectionRuleRequested.prototype['installation'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookDeploymentProtectionRuleRequested.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookDeploymentProtectionRuleRequested['ActionEnum'] = {

    /**
     * value: "requested"
     * @const
     */
    "requested": "requested"
};



export default WebhookDeploymentProtectionRuleRequested;

