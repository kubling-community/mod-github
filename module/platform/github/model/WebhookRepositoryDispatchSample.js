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
 * The WebhookRepositoryDispatchSample model module.
 * @module model/WebhookRepositoryDispatchSample
 * @version 1.1.4
 */
class WebhookRepositoryDispatchSample {
    /**
     * Constructs a new <code>WebhookRepositoryDispatchSample</code>.
     * @alias module:model/WebhookRepositoryDispatchSample
     * @param action {String} The `event_type` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
     * @param branch {String} 
     * @param clientPayload {Object.<String, Object>} The `client_payload` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
     * @param installation {module:model/SimpleInstallation} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, branch, clientPayload, installation, repository, sender) { 
        
        WebhookRepositoryDispatchSample.initialize(this, action, branch, clientPayload, installation, repository, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, branch, clientPayload, installation, repository, sender) { 
        obj['action'] = action;
        obj['branch'] = branch;
        obj['client_payload'] = clientPayload;
        obj['installation'] = installation;
        obj['repository'] = repository;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookRepositoryDispatchSample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRepositoryDispatchSample} obj Optional instance to populate.
     * @return {module:model/WebhookRepositoryDispatchSample} The populated <code>WebhookRepositoryDispatchSample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRepositoryDispatchSample();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('client_payload')) {
                obj['client_payload'] = ApiClient.convertToType(data['client_payload'], {'String': Object});
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRepositoryDispatchSample</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRepositoryDispatchSample</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookRepositoryDispatchSample.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['branch'] && !(typeof data['branch'] === 'string' || data['branch'] instanceof String)) {
            throw new Error("Expected the field `branch` to be a primitive type in the JSON string but got " + data['branch']);
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

WebhookRepositoryDispatchSample.RequiredProperties = ["action", "branch", "client_payload", "installation", "repository", "sender"];

/**
 * The `event_type` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
 * @member {String} action
 */
WebhookRepositoryDispatchSample.prototype['action'] = undefined;

/**
 * @member {String} branch
 */
WebhookRepositoryDispatchSample.prototype['branch'] = undefined;

/**
 * The `client_payload` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
 * @member {Object.<String, Object>} client_payload
 */
WebhookRepositoryDispatchSample.prototype['client_payload'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookRepositoryDispatchSample.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookRepositoryDispatchSample.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookRepositoryDispatchSample.prototype['organization'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookRepositoryDispatchSample.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookRepositoryDispatchSample.prototype['sender'] = undefined;






export default WebhookRepositoryDispatchSample;

