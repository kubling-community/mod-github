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
import ActionsDefaultWorkflowPermissions from './ActionsDefaultWorkflowPermissions';

/**
 * The ActionsGetDefaultWorkflowPermissions model module.
 * @module model/ActionsGetDefaultWorkflowPermissions
 * @version 1.1.4
 */
class ActionsGetDefaultWorkflowPermissions {
    /**
     * Constructs a new <code>ActionsGetDefaultWorkflowPermissions</code>.
     * @alias module:model/ActionsGetDefaultWorkflowPermissions
     * @param defaultWorkflowPermissions {module:model/ActionsDefaultWorkflowPermissions} 
     * @param canApprovePullRequestReviews {Boolean} Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
     */
    constructor(defaultWorkflowPermissions, canApprovePullRequestReviews) { 
        
        ActionsGetDefaultWorkflowPermissions.initialize(this, defaultWorkflowPermissions, canApprovePullRequestReviews);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultWorkflowPermissions, canApprovePullRequestReviews) { 
        obj['default_workflow_permissions'] = defaultWorkflowPermissions;
        obj['can_approve_pull_request_reviews'] = canApprovePullRequestReviews;
    }

    /**
     * Constructs a <code>ActionsGetDefaultWorkflowPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsGetDefaultWorkflowPermissions} obj Optional instance to populate.
     * @return {module:model/ActionsGetDefaultWorkflowPermissions} The populated <code>ActionsGetDefaultWorkflowPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsGetDefaultWorkflowPermissions();

            if (data.hasOwnProperty('default_workflow_permissions')) {
                obj['default_workflow_permissions'] = ActionsDefaultWorkflowPermissions.constructFromObject(data['default_workflow_permissions']);
            }
            if (data.hasOwnProperty('can_approve_pull_request_reviews')) {
                obj['can_approve_pull_request_reviews'] = ApiClient.convertToType(data['can_approve_pull_request_reviews'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsGetDefaultWorkflowPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsGetDefaultWorkflowPermissions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsGetDefaultWorkflowPermissions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ActionsGetDefaultWorkflowPermissions.RequiredProperties = ["default_workflow_permissions", "can_approve_pull_request_reviews"];

/**
 * @member {module:model/ActionsDefaultWorkflowPermissions} default_workflow_permissions
 */
ActionsGetDefaultWorkflowPermissions.prototype['default_workflow_permissions'] = undefined;

/**
 * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
 * @member {Boolean} can_approve_pull_request_reviews
 */
ActionsGetDefaultWorkflowPermissions.prototype['can_approve_pull_request_reviews'] = undefined;






export default ActionsGetDefaultWorkflowPermissions;

