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
import WebhookLabelEditedChangesColor from './WebhookLabelEditedChangesColor';
import WebhookLabelEditedChangesDescription from './WebhookLabelEditedChangesDescription';
import WebhookLabelEditedChangesName from './WebhookLabelEditedChangesName';

/**
 * The WebhookLabelEditedChanges model module.
 * @module model/WebhookLabelEditedChanges
 * @version 1.1.4
 */
class WebhookLabelEditedChanges {
    /**
     * Constructs a new <code>WebhookLabelEditedChanges</code>.
     * The changes to the label if the action was &#x60;edited&#x60;.
     * @alias module:model/WebhookLabelEditedChanges
     */
    constructor() { 
        
        WebhookLabelEditedChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLabelEditedChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookLabelEditedChanges} obj Optional instance to populate.
     * @return {module:model/WebhookLabelEditedChanges} The populated <code>WebhookLabelEditedChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLabelEditedChanges();

            if (data.hasOwnProperty('color')) {
                obj['color'] = WebhookLabelEditedChangesColor.constructFromObject(data['color']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = WebhookLabelEditedChangesDescription.constructFromObject(data['description']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = WebhookLabelEditedChangesName.constructFromObject(data['name']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookLabelEditedChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookLabelEditedChanges</code>.
     */
    static validateJSON(data) {
        // validate the optional field `color`
        if (data['color']) { // data not null
          WebhookLabelEditedChangesColor.validateJSON(data['color']);
        }
        // validate the optional field `description`
        if (data['description']) { // data not null
          WebhookLabelEditedChangesDescription.validateJSON(data['description']);
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          WebhookLabelEditedChangesName.validateJSON(data['name']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookLabelEditedChangesColor} color
 */
WebhookLabelEditedChanges.prototype['color'] = undefined;

/**
 * @member {module:model/WebhookLabelEditedChangesDescription} description
 */
WebhookLabelEditedChanges.prototype['description'] = undefined;

/**
 * @member {module:model/WebhookLabelEditedChangesName} name
 */
WebhookLabelEditedChanges.prototype['name'] = undefined;






export default WebhookLabelEditedChanges;

