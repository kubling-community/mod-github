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
import SimplePullRequest3 from './SimplePullRequest3';
import SimpleUserWebhooks from './SimpleUserWebhooks';
import WebhookPullRequestReviewThreadResolvedThread from './WebhookPullRequestReviewThreadResolvedThread';

/**
 * The WebhookPullRequestReviewThreadResolved model module.
 * @module model/WebhookPullRequestReviewThreadResolved
 * @version 1.1.4
 */
class WebhookPullRequestReviewThreadResolved {
    /**
     * Constructs a new <code>WebhookPullRequestReviewThreadResolved</code>.
     * @alias module:model/WebhookPullRequestReviewThreadResolved
     * @param action {module:model/WebhookPullRequestReviewThreadResolved.ActionEnum} 
     * @param pullRequest {module:model/SimplePullRequest3} 
     * @param repository {module:model/RepositoryWebhooks} 
     * @param thread {module:model/WebhookPullRequestReviewThreadResolvedThread} 
     */
    constructor(action, pullRequest, repository, thread) { 
        
        WebhookPullRequestReviewThreadResolved.initialize(this, action, pullRequest, repository, thread);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, pullRequest, repository, thread) { 
        obj['action'] = action;
        obj['pull_request'] = pullRequest;
        obj['repository'] = repository;
        obj['thread'] = thread;
    }

    /**
     * Constructs a <code>WebhookPullRequestReviewThreadResolved</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookPullRequestReviewThreadResolved} obj Optional instance to populate.
     * @return {module:model/WebhookPullRequestReviewThreadResolved} The populated <code>WebhookPullRequestReviewThreadResolved</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookPullRequestReviewThreadResolved();

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
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = SimplePullRequest3.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = RepositoryWebhooks.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('thread')) {
                obj['thread'] = WebhookPullRequestReviewThreadResolvedThread.constructFromObject(data['thread']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookPullRequestReviewThreadResolved</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookPullRequestReviewThreadResolved</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookPullRequestReviewThreadResolved.RequiredProperties) {
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
          SimplePullRequest3.validateJSON(data['pull_request']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          RepositoryWebhooks.validateJSON(data['repository']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }
        // validate the optional field `thread`
        if (data['thread']) { // data not null
          WebhookPullRequestReviewThreadResolvedThread.validateJSON(data['thread']);
        }

        return true;
    }


}

WebhookPullRequestReviewThreadResolved.RequiredProperties = ["action", "pull_request", "repository", "thread"];

/**
 * @member {module:model/WebhookPullRequestReviewThreadResolved.ActionEnum} action
 */
WebhookPullRequestReviewThreadResolved.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookPullRequestReviewThreadResolved.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookPullRequestReviewThreadResolved.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookPullRequestReviewThreadResolved.prototype['organization'] = undefined;

/**
 * @member {module:model/SimplePullRequest3} pull_request
 */
WebhookPullRequestReviewThreadResolved.prototype['pull_request'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookPullRequestReviewThreadResolved.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookPullRequestReviewThreadResolved.prototype['sender'] = undefined;

/**
 * @member {module:model/WebhookPullRequestReviewThreadResolvedThread} thread
 */
WebhookPullRequestReviewThreadResolved.prototype['thread'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookPullRequestReviewThreadResolved['ActionEnum'] = {

    /**
     * value: "resolved"
     * @const
     */
    "resolved": "resolved"
};



export default WebhookPullRequestReviewThreadResolved;

