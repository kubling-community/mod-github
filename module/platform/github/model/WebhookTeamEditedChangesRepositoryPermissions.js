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
import WebhookTeamEditedChangesRepositoryPermissionsFrom from './WebhookTeamEditedChangesRepositoryPermissionsFrom';

/**
 * The WebhookTeamEditedChangesRepositoryPermissions model module.
 * @module model/WebhookTeamEditedChangesRepositoryPermissions
 * @version 1.1.4
 */
class WebhookTeamEditedChangesRepositoryPermissions {
    /**
     * Constructs a new <code>WebhookTeamEditedChangesRepositoryPermissions</code>.
     * @alias module:model/WebhookTeamEditedChangesRepositoryPermissions
     * @param from {module:model/WebhookTeamEditedChangesRepositoryPermissionsFrom} 
     */
    constructor(from) { 
        
        WebhookTeamEditedChangesRepositoryPermissions.initialize(this, from);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from) { 
        obj['from'] = from;
    }

    /**
     * Constructs a <code>WebhookTeamEditedChangesRepositoryPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookTeamEditedChangesRepositoryPermissions} obj Optional instance to populate.
     * @return {module:model/WebhookTeamEditedChangesRepositoryPermissions} The populated <code>WebhookTeamEditedChangesRepositoryPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookTeamEditedChangesRepositoryPermissions();

            if (data.hasOwnProperty('from')) {
                obj['from'] = WebhookTeamEditedChangesRepositoryPermissionsFrom.constructFromObject(data['from']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookTeamEditedChangesRepositoryPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookTeamEditedChangesRepositoryPermissions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookTeamEditedChangesRepositoryPermissions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `from`
        if (data['from']) { // data not null
          WebhookTeamEditedChangesRepositoryPermissionsFrom.validateJSON(data['from']);
        }

        return true;
    }


}

WebhookTeamEditedChangesRepositoryPermissions.RequiredProperties = ["from"];

/**
 * @member {module:model/WebhookTeamEditedChangesRepositoryPermissionsFrom} from
 */
WebhookTeamEditedChangesRepositoryPermissions.prototype['from'] = undefined;






export default WebhookTeamEditedChangesRepositoryPermissions;

