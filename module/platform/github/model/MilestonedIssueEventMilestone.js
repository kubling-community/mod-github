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

/**
 * The MilestonedIssueEventMilestone model module.
 * @module model/MilestonedIssueEventMilestone
 * @version 1.1.4
 */
class MilestonedIssueEventMilestone {
    /**
     * Constructs a new <code>MilestonedIssueEventMilestone</code>.
     * @alias module:model/MilestonedIssueEventMilestone
     * @param title {String} 
     */
    constructor(title) { 
        
        MilestonedIssueEventMilestone.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>MilestonedIssueEventMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MilestonedIssueEventMilestone} obj Optional instance to populate.
     * @return {module:model/MilestonedIssueEventMilestone} The populated <code>MilestonedIssueEventMilestone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MilestonedIssueEventMilestone();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MilestonedIssueEventMilestone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MilestonedIssueEventMilestone</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MilestonedIssueEventMilestone.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

MilestonedIssueEventMilestone.RequiredProperties = ["title"];

/**
 * @member {String} title
 */
MilestonedIssueEventMilestone.prototype['title'] = undefined;






export default MilestonedIssueEventMilestone;

