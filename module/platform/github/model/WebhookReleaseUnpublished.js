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
import WebhooksRelease1 from './WebhooksRelease1';

/**
 * The WebhookReleaseUnpublished model module.
 * @module model/WebhookReleaseUnpublished
 * @version 1.1.4
 */
class WebhookReleaseUnpublished {
    /**
     * Constructs a new <code>WebhookReleaseUnpublished</code>.
     * @alias module:model/WebhookReleaseUnpublished
     * @param action {module:model/WebhookReleaseUnpublished.ActionEnum} 
     * @param release {module:model/WebhooksRelease1} 
     * @param repository {module:model/RepositoryWebhooks} 
     */
    constructor(action, release, repository) { 
        
        WebhookReleaseUnpublished.initialize(this, action, release, repository);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, release, repository) { 
        obj['action'] = action;
        obj['release'] = release;
        obj['repository'] = repository;
    }

    /**
     * Constructs a <code>WebhookReleaseUnpublished</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookReleaseUnpublished} obj Optional instance to populate.
     * @return {module:model/WebhookReleaseUnpublished} The populated <code>WebhookReleaseUnpublished</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookReleaseUnpublished();

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
            if (data.hasOwnProperty('release')) {
                obj['release'] = WebhooksRelease1.constructFromObject(data['release']);
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
     * Validates the JSON data with respect to <code>WebhookReleaseUnpublished</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookReleaseUnpublished</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookReleaseUnpublished.RequiredProperties) {
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
        // validate the optional field `release`
        if (data['release']) { // data not null
          WebhooksRelease1.validateJSON(data['release']);
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

WebhookReleaseUnpublished.RequiredProperties = ["action", "release", "repository"];

/**
 * @member {module:model/WebhookReleaseUnpublished.ActionEnum} action
 */
WebhookReleaseUnpublished.prototype['action'] = undefined;

/**
 * @member {module:model/EnterpriseWebhooks} enterprise
 */
WebhookReleaseUnpublished.prototype['enterprise'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookReleaseUnpublished.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookReleaseUnpublished.prototype['organization'] = undefined;

/**
 * @member {module:model/WebhooksRelease1} release
 */
WebhookReleaseUnpublished.prototype['release'] = undefined;

/**
 * @member {module:model/RepositoryWebhooks} repository
 */
WebhookReleaseUnpublished.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookReleaseUnpublished.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookReleaseUnpublished['ActionEnum'] = {

    /**
     * value: "unpublished"
     * @const
     */
    "unpublished": "unpublished"
};



export default WebhookReleaseUnpublished;

