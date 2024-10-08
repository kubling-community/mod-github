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
import DeploymentBranchPolicySettings from './DeploymentBranchPolicySettings';
import ReposCreateOrUpdateEnvironmentRequestReviewersInner from './ReposCreateOrUpdateEnvironmentRequestReviewersInner';

/**
 * The ReposCreateOrUpdateEnvironmentRequest model module.
 * @module model/ReposCreateOrUpdateEnvironmentRequest
 * @version 1.1.4
 */
class ReposCreateOrUpdateEnvironmentRequest {
    /**
     * Constructs a new <code>ReposCreateOrUpdateEnvironmentRequest</code>.
     * @alias module:model/ReposCreateOrUpdateEnvironmentRequest
     */
    constructor() { 
        
        ReposCreateOrUpdateEnvironmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposCreateOrUpdateEnvironmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateOrUpdateEnvironmentRequest} obj Optional instance to populate.
     * @return {module:model/ReposCreateOrUpdateEnvironmentRequest} The populated <code>ReposCreateOrUpdateEnvironmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateOrUpdateEnvironmentRequest();

            if (data.hasOwnProperty('wait_timer')) {
                obj['wait_timer'] = ApiClient.convertToType(data['wait_timer'], 'Number');
            }
            if (data.hasOwnProperty('prevent_self_review')) {
                obj['prevent_self_review'] = ApiClient.convertToType(data['prevent_self_review'], 'Boolean');
            }
            if (data.hasOwnProperty('reviewers')) {
                obj['reviewers'] = ApiClient.convertToType(data['reviewers'], [ReposCreateOrUpdateEnvironmentRequestReviewersInner]);
            }
            if (data.hasOwnProperty('deployment_branch_policy')) {
                obj['deployment_branch_policy'] = DeploymentBranchPolicySettings.constructFromObject(data['deployment_branch_policy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateOrUpdateEnvironmentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateOrUpdateEnvironmentRequest</code>.
     */
    static validateJSON(data) {
        if (data['reviewers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reviewers'])) {
                throw new Error("Expected the field `reviewers` to be an array in the JSON data but got " + data['reviewers']);
            }
            // validate the optional field `reviewers` (array)
            for (const item of data['reviewers']) {
                ReposCreateOrUpdateEnvironmentRequestReviewersInner.validateJSON(item);
            };
        }
        // validate the optional field `deployment_branch_policy`
        if (data['deployment_branch_policy']) { // data not null
          DeploymentBranchPolicySettings.validateJSON(data['deployment_branch_policy']);
        }

        return true;
    }


}



/**
 * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
 * @member {Number} wait_timer
 */
ReposCreateOrUpdateEnvironmentRequest.prototype['wait_timer'] = undefined;

/**
 * Whether or not a user who created the job is prevented from approving their own job.
 * @member {Boolean} prevent_self_review
 */
ReposCreateOrUpdateEnvironmentRequest.prototype['prevent_self_review'] = undefined;

/**
 * The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
 * @member {Array.<module:model/ReposCreateOrUpdateEnvironmentRequestReviewersInner>} reviewers
 */
ReposCreateOrUpdateEnvironmentRequest.prototype['reviewers'] = undefined;

/**
 * @member {module:model/DeploymentBranchPolicySettings} deployment_branch_policy
 */
ReposCreateOrUpdateEnvironmentRequest.prototype['deployment_branch_policy'] = undefined;






export default ReposCreateOrUpdateEnvironmentRequest;

