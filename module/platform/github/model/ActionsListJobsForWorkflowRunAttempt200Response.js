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
import Job from './Job';

/**
 * The ActionsListJobsForWorkflowRunAttempt200Response model module.
 * @module model/ActionsListJobsForWorkflowRunAttempt200Response
 * @version 1.1.4
 */
class ActionsListJobsForWorkflowRunAttempt200Response {
    /**
     * Constructs a new <code>ActionsListJobsForWorkflowRunAttempt200Response</code>.
     * @alias module:model/ActionsListJobsForWorkflowRunAttempt200Response
     * @param totalCount {Number} 
     * @param jobs {Array.<module:model/Job>} 
     */
    constructor(totalCount, jobs) { 
        
        ActionsListJobsForWorkflowRunAttempt200Response.initialize(this, totalCount, jobs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, jobs) { 
        obj['total_count'] = totalCount;
        obj['jobs'] = jobs;
    }

    /**
     * Constructs a <code>ActionsListJobsForWorkflowRunAttempt200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsListJobsForWorkflowRunAttempt200Response} obj Optional instance to populate.
     * @return {module:model/ActionsListJobsForWorkflowRunAttempt200Response} The populated <code>ActionsListJobsForWorkflowRunAttempt200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsListJobsForWorkflowRunAttempt200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('jobs')) {
                obj['jobs'] = ApiClient.convertToType(data['jobs'], [Job]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsListJobsForWorkflowRunAttempt200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsListJobsForWorkflowRunAttempt200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsListJobsForWorkflowRunAttempt200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['jobs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['jobs'])) {
                throw new Error("Expected the field `jobs` to be an array in the JSON data but got " + data['jobs']);
            }
            // validate the optional field `jobs` (array)
            for (const item of data['jobs']) {
                Job.validateJSON(item);
            };
        }

        return true;
    }


}

ActionsListJobsForWorkflowRunAttempt200Response.RequiredProperties = ["total_count", "jobs"];

/**
 * @member {Number} total_count
 */
ActionsListJobsForWorkflowRunAttempt200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Job>} jobs
 */
ActionsListJobsForWorkflowRunAttempt200Response.prototype['jobs'] = undefined;






export default ActionsListJobsForWorkflowRunAttempt200Response;

