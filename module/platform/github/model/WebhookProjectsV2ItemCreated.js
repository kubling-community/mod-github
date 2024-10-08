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
import OrganizationSimpleWebhooks from './OrganizationSimpleWebhooks';
import ProjectsV2Item from './ProjectsV2Item';
import SimpleInstallation from './SimpleInstallation';
import SimpleUserWebhooks from './SimpleUserWebhooks';

/**
 * The WebhookProjectsV2ItemCreated model module.
 * @module model/WebhookProjectsV2ItemCreated
 * @version 1.1.4
 */
class WebhookProjectsV2ItemCreated {
    /**
     * Constructs a new <code>WebhookProjectsV2ItemCreated</code>.
     * @alias module:model/WebhookProjectsV2ItemCreated
     * @param action {module:model/WebhookProjectsV2ItemCreated.ActionEnum} 
     * @param organization {module:model/OrganizationSimpleWebhooks} 
     * @param projectsV2Item {module:model/ProjectsV2Item} 
     * @param sender {module:model/SimpleUserWebhooks} 
     */
    constructor(action, organization, projectsV2Item, sender) { 
        
        WebhookProjectsV2ItemCreated.initialize(this, action, organization, projectsV2Item, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, organization, projectsV2Item, sender) { 
        obj['action'] = action;
        obj['organization'] = organization;
        obj['projects_v2_item'] = projectsV2Item;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>WebhookProjectsV2ItemCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectsV2ItemCreated} obj Optional instance to populate.
     * @return {module:model/WebhookProjectsV2ItemCreated} The populated <code>WebhookProjectsV2ItemCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjectsV2ItemCreated();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('installation')) {
                obj['installation'] = SimpleInstallation.constructFromObject(data['installation']);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimpleWebhooks.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('projects_v2_item')) {
                obj['projects_v2_item'] = ProjectsV2Item.constructFromObject(data['projects_v2_item']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = SimpleUserWebhooks.constructFromObject(data['sender']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookProjectsV2ItemCreated</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookProjectsV2ItemCreated</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookProjectsV2ItemCreated.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `installation`
        if (data['installation']) { // data not null
          SimpleInstallation.validateJSON(data['installation']);
        }
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          OrganizationSimpleWebhooks.validateJSON(data['organization']);
        }
        // validate the optional field `projects_v2_item`
        if (data['projects_v2_item']) { // data not null
          ProjectsV2Item.validateJSON(data['projects_v2_item']);
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          SimpleUserWebhooks.validateJSON(data['sender']);
        }

        return true;
    }


}

WebhookProjectsV2ItemCreated.RequiredProperties = ["action", "organization", "projects_v2_item", "sender"];

/**
 * @member {module:model/WebhookProjectsV2ItemCreated.ActionEnum} action
 */
WebhookProjectsV2ItemCreated.prototype['action'] = undefined;

/**
 * @member {module:model/SimpleInstallation} installation
 */
WebhookProjectsV2ItemCreated.prototype['installation'] = undefined;

/**
 * @member {module:model/OrganizationSimpleWebhooks} organization
 */
WebhookProjectsV2ItemCreated.prototype['organization'] = undefined;

/**
 * @member {module:model/ProjectsV2Item} projects_v2_item
 */
WebhookProjectsV2ItemCreated.prototype['projects_v2_item'] = undefined;

/**
 * @member {module:model/SimpleUserWebhooks} sender
 */
WebhookProjectsV2ItemCreated.prototype['sender'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
WebhookProjectsV2ItemCreated['ActionEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created"
};



export default WebhookProjectsV2ItemCreated;

