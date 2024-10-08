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
 * The ActionsSetDefaultWorkflowPermissions model module.
 * @module model/ActionsSetDefaultWorkflowPermissions
 * @version 1.1.4
 */
class ActionsSetDefaultWorkflowPermissions {
    /**
     * Constructs a new <code>ActionsSetDefaultWorkflowPermissions</code>.
     * @alias module:model/ActionsSetDefaultWorkflowPermissions
     */
    constructor() { 
        
        ActionsSetDefaultWorkflowPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionsSetDefaultWorkflowPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsSetDefaultWorkflowPermissions} obj Optional instance to populate.
     * @return {module:model/ActionsSetDefaultWorkflowPermissions} The populated <code>ActionsSetDefaultWorkflowPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsSetDefaultWorkflowPermissions();

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
     * Validates the JSON data with respect to <code>ActionsSetDefaultWorkflowPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsSetDefaultWorkflowPermissions</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/ActionsDefaultWorkflowPermissions} default_workflow_permissions
 */
ActionsSetDefaultWorkflowPermissions.prototype['default_workflow_permissions'] = undefined;

/**
 * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
 * @member {Boolean} can_approve_pull_request_reviews
 */
ActionsSetDefaultWorkflowPermissions.prototype['can_approve_pull_request_reviews'] = undefined;






export default ActionsSetDefaultWorkflowPermissions;

