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
import PendingDeploymentEnvironment from './PendingDeploymentEnvironment';
import PendingDeploymentReviewersInner from './PendingDeploymentReviewersInner';

/**
 * The PendingDeployment model module.
 * @module model/PendingDeployment
 * @version 1.1.4
 */
class PendingDeployment {
    /**
     * Constructs a new <code>PendingDeployment</code>.
     * Details of a deployment that is waiting for protection rules to pass
     * @alias module:model/PendingDeployment
     * @param environment {module:model/PendingDeploymentEnvironment} 
     * @param waitTimer {Number} The set duration of the wait timer
     * @param waitTimerStartedAt {Date} The time that the wait timer began.
     * @param currentUserCanApprove {Boolean} Whether the currently authenticated user can approve the deployment
     * @param reviewers {Array.<module:model/PendingDeploymentReviewersInner>} The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
     */
    constructor(environment, waitTimer, waitTimerStartedAt, currentUserCanApprove, reviewers) { 
        
        PendingDeployment.initialize(this, environment, waitTimer, waitTimerStartedAt, currentUserCanApprove, reviewers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment, waitTimer, waitTimerStartedAt, currentUserCanApprove, reviewers) { 
        obj['environment'] = environment;
        obj['wait_timer'] = waitTimer;
        obj['wait_timer_started_at'] = waitTimerStartedAt;
        obj['current_user_can_approve'] = currentUserCanApprove;
        obj['reviewers'] = reviewers;
    }

    /**
     * Constructs a <code>PendingDeployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingDeployment} obj Optional instance to populate.
     * @return {module:model/PendingDeployment} The populated <code>PendingDeployment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingDeployment();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = PendingDeploymentEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('wait_timer')) {
                obj['wait_timer'] = ApiClient.convertToType(data['wait_timer'], 'Number');
            }
            if (data.hasOwnProperty('wait_timer_started_at')) {
                obj['wait_timer_started_at'] = ApiClient.convertToType(data['wait_timer_started_at'], 'Date');
            }
            if (data.hasOwnProperty('current_user_can_approve')) {
                obj['current_user_can_approve'] = ApiClient.convertToType(data['current_user_can_approve'], 'Boolean');
            }
            if (data.hasOwnProperty('reviewers')) {
                obj['reviewers'] = ApiClient.convertToType(data['reviewers'], [PendingDeploymentReviewersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PendingDeployment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PendingDeployment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PendingDeployment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          PendingDeploymentEnvironment.validateJSON(data['environment']);
        }
        if (data['reviewers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reviewers'])) {
                throw new Error("Expected the field `reviewers` to be an array in the JSON data but got " + data['reviewers']);
            }
            // validate the optional field `reviewers` (array)
            for (const item of data['reviewers']) {
                PendingDeploymentReviewersInner.validateJSON(item);
            };
        }

        return true;
    }


}

PendingDeployment.RequiredProperties = ["environment", "wait_timer", "wait_timer_started_at", "current_user_can_approve", "reviewers"];

/**
 * @member {module:model/PendingDeploymentEnvironment} environment
 */
PendingDeployment.prototype['environment'] = undefined;

/**
 * The set duration of the wait timer
 * @member {Number} wait_timer
 */
PendingDeployment.prototype['wait_timer'] = undefined;

/**
 * The time that the wait timer began.
 * @member {Date} wait_timer_started_at
 */
PendingDeployment.prototype['wait_timer_started_at'] = undefined;

/**
 * Whether the currently authenticated user can approve the deployment
 * @member {Boolean} current_user_can_approve
 */
PendingDeployment.prototype['current_user_can_approve'] = undefined;

/**
 * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
 * @member {Array.<module:model/PendingDeploymentReviewersInner>} reviewers
 */
PendingDeployment.prototype['reviewers'] = undefined;






export default PendingDeployment;

