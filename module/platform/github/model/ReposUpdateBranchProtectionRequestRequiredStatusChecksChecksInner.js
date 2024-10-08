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
 * The ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner model module.
 * @module model/ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner
 * @version 1.1.4
 */
class ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner {
    /**
     * Constructs a new <code>ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner</code>.
     * @alias module:model/ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner
     * @param context {String} The name of the required check
     */
    constructor(context) { 
        
        ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner.initialize(this, context);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, context) { 
        obj['context'] = context;
    }

    /**
     * Constructs a <code>ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner} obj Optional instance to populate.
     * @return {module:model/ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner} The populated <code>ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('app_id')) {
                obj['app_id'] = ApiClient.convertToType(data['app_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }

        return true;
    }


}

ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner.RequiredProperties = ["context"];

/**
 * The name of the required check
 * @member {String} context
 */
ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner.prototype['context'] = undefined;

/**
 * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
 * @member {Number} app_id
 */
ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner.prototype['app_id'] = undefined;






export default ReposUpdateBranchProtectionRequestRequiredStatusChecksChecksInner;

