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
import WorkflowStep3 from './WorkflowStep3';

/**
 * The WebhookWorkflowJobQueuedWorkflowJob model module.
 * @module model/WebhookWorkflowJobQueuedWorkflowJob
 * @version 1.1.4
 */
class WebhookWorkflowJobQueuedWorkflowJob {
    /**
     * Constructs a new <code>WebhookWorkflowJobQueuedWorkflowJob</code>.
     * @alias module:model/WebhookWorkflowJobQueuedWorkflowJob
     * @param checkRunUrl {String} 
     * @param completedAt {String} 
     * @param conclusion {String} 
     * @param createdAt {String} The time that the job created.
     * @param headSha {String} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param labels {Array.<String>} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param runAttempt {Number} 
     * @param runId {Number} 
     * @param runUrl {String} 
     * @param runnerGroupId {Number} 
     * @param runnerGroupName {String} 
     * @param runnerId {Number} 
     * @param runnerName {String} 
     * @param startedAt {Date} 
     * @param status {module:model/WebhookWorkflowJobQueuedWorkflowJob.StatusEnum} 
     * @param headBranch {String} The name of the current branch.
     * @param workflowName {String} The name of the workflow.
     * @param steps {Array.<module:model/WorkflowStep3>} 
     * @param url {String} 
     */
    constructor(checkRunUrl, completedAt, conclusion, createdAt, headSha, htmlUrl, id, labels, name, nodeId, runAttempt, runId, runUrl, runnerGroupId, runnerGroupName, runnerId, runnerName, startedAt, status, headBranch, workflowName, steps, url) { 
        
        WebhookWorkflowJobQueuedWorkflowJob.initialize(this, checkRunUrl, completedAt, conclusion, createdAt, headSha, htmlUrl, id, labels, name, nodeId, runAttempt, runId, runUrl, runnerGroupId, runnerGroupName, runnerId, runnerName, startedAt, status, headBranch, workflowName, steps, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, checkRunUrl, completedAt, conclusion, createdAt, headSha, htmlUrl, id, labels, name, nodeId, runAttempt, runId, runUrl, runnerGroupId, runnerGroupName, runnerId, runnerName, startedAt, status, headBranch, workflowName, steps, url) { 
        obj['check_run_url'] = checkRunUrl;
        obj['completed_at'] = completedAt;
        obj['conclusion'] = conclusion;
        obj['created_at'] = createdAt;
        obj['head_sha'] = headSha;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['labels'] = labels;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['run_attempt'] = runAttempt;
        obj['run_id'] = runId;
        obj['run_url'] = runUrl;
        obj['runner_group_id'] = runnerGroupId;
        obj['runner_group_name'] = runnerGroupName;
        obj['runner_id'] = runnerId;
        obj['runner_name'] = runnerName;
        obj['started_at'] = startedAt;
        obj['status'] = status;
        obj['head_branch'] = headBranch;
        obj['workflow_name'] = workflowName;
        obj['steps'] = steps;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhookWorkflowJobQueuedWorkflowJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookWorkflowJobQueuedWorkflowJob} obj Optional instance to populate.
     * @return {module:model/WebhookWorkflowJobQueuedWorkflowJob} The populated <code>WebhookWorkflowJobQueuedWorkflowJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookWorkflowJobQueuedWorkflowJob();

            if (data.hasOwnProperty('check_run_url')) {
                obj['check_run_url'] = ApiClient.convertToType(data['check_run_url'], 'String');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'String');
            }
            if (data.hasOwnProperty('conclusion')) {
                obj['conclusion'] = ApiClient.convertToType(data['conclusion'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('head_sha')) {
                obj['head_sha'] = ApiClient.convertToType(data['head_sha'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('run_attempt')) {
                obj['run_attempt'] = ApiClient.convertToType(data['run_attempt'], 'Number');
            }
            if (data.hasOwnProperty('run_id')) {
                obj['run_id'] = ApiClient.convertToType(data['run_id'], 'Number');
            }
            if (data.hasOwnProperty('run_url')) {
                obj['run_url'] = ApiClient.convertToType(data['run_url'], 'String');
            }
            if (data.hasOwnProperty('runner_group_id')) {
                obj['runner_group_id'] = ApiClient.convertToType(data['runner_group_id'], 'Number');
            }
            if (data.hasOwnProperty('runner_group_name')) {
                obj['runner_group_name'] = ApiClient.convertToType(data['runner_group_name'], 'String');
            }
            if (data.hasOwnProperty('runner_id')) {
                obj['runner_id'] = ApiClient.convertToType(data['runner_id'], 'Number');
            }
            if (data.hasOwnProperty('runner_name')) {
                obj['runner_name'] = ApiClient.convertToType(data['runner_name'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('head_branch')) {
                obj['head_branch'] = ApiClient.convertToType(data['head_branch'], 'String');
            }
            if (data.hasOwnProperty('workflow_name')) {
                obj['workflow_name'] = ApiClient.convertToType(data['workflow_name'], 'String');
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [WorkflowStep3]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookWorkflowJobQueuedWorkflowJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookWorkflowJobQueuedWorkflowJob</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookWorkflowJobQueuedWorkflowJob.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['check_run_url'] && !(typeof data['check_run_url'] === 'string' || data['check_run_url'] instanceof String)) {
            throw new Error("Expected the field `check_run_url` to be a primitive type in the JSON string but got " + data['check_run_url']);
        }
        // ensure the json data is a string
        if (data['completed_at'] && !(typeof data['completed_at'] === 'string' || data['completed_at'] instanceof String)) {
            throw new Error("Expected the field `completed_at` to be a primitive type in the JSON string but got " + data['completed_at']);
        }
        // ensure the json data is a string
        if (data['conclusion'] && !(typeof data['conclusion'] === 'string' || data['conclusion'] instanceof String)) {
            throw new Error("Expected the field `conclusion` to be a primitive type in the JSON string but got " + data['conclusion']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['head_sha'] && !(typeof data['head_sha'] === 'string' || data['head_sha'] instanceof String)) {
            throw new Error("Expected the field `head_sha` to be a primitive type in the JSON string but got " + data['head_sha']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['labels'])) {
            throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['run_url'] && !(typeof data['run_url'] === 'string' || data['run_url'] instanceof String)) {
            throw new Error("Expected the field `run_url` to be a primitive type in the JSON string but got " + data['run_url']);
        }
        // ensure the json data is a string
        if (data['runner_group_name'] && !(typeof data['runner_group_name'] === 'string' || data['runner_group_name'] instanceof String)) {
            throw new Error("Expected the field `runner_group_name` to be a primitive type in the JSON string but got " + data['runner_group_name']);
        }
        // ensure the json data is a string
        if (data['runner_name'] && !(typeof data['runner_name'] === 'string' || data['runner_name'] instanceof String)) {
            throw new Error("Expected the field `runner_name` to be a primitive type in the JSON string but got " + data['runner_name']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['head_branch'] && !(typeof data['head_branch'] === 'string' || data['head_branch'] instanceof String)) {
            throw new Error("Expected the field `head_branch` to be a primitive type in the JSON string but got " + data['head_branch']);
        }
        // ensure the json data is a string
        if (data['workflow_name'] && !(typeof data['workflow_name'] === 'string' || data['workflow_name'] instanceof String)) {
            throw new Error("Expected the field `workflow_name` to be a primitive type in the JSON string but got " + data['workflow_name']);
        }
        if (data['steps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['steps'])) {
                throw new Error("Expected the field `steps` to be an array in the JSON data but got " + data['steps']);
            }
            // validate the optional field `steps` (array)
            for (const item of data['steps']) {
                WorkflowStep3.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WebhookWorkflowJobQueuedWorkflowJob.RequiredProperties = ["check_run_url", "completed_at", "conclusion", "created_at", "head_sha", "html_url", "id", "labels", "name", "node_id", "run_attempt", "run_id", "run_url", "runner_group_id", "runner_group_name", "runner_id", "runner_name", "started_at", "status", "head_branch", "workflow_name", "steps", "url"];

/**
 * @member {String} check_run_url
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['check_run_url'] = undefined;

/**
 * @member {String} completed_at
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['completed_at'] = undefined;

/**
 * @member {String} conclusion
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['conclusion'] = undefined;

/**
 * The time that the job created.
 * @member {String} created_at
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['created_at'] = undefined;

/**
 * @member {String} head_sha
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['head_sha'] = undefined;

/**
 * @member {String} html_url
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['id'] = undefined;

/**
 * @member {Array.<String>} labels
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['labels'] = undefined;

/**
 * @member {String} name
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['node_id'] = undefined;

/**
 * @member {Number} run_attempt
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['run_attempt'] = undefined;

/**
 * @member {Number} run_id
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['run_id'] = undefined;

/**
 * @member {String} run_url
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['run_url'] = undefined;

/**
 * @member {Number} runner_group_id
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['runner_group_id'] = undefined;

/**
 * @member {String} runner_group_name
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['runner_group_name'] = undefined;

/**
 * @member {Number} runner_id
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['runner_id'] = undefined;

/**
 * @member {String} runner_name
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['runner_name'] = undefined;

/**
 * @member {Date} started_at
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['started_at'] = undefined;

/**
 * @member {module:model/WebhookWorkflowJobQueuedWorkflowJob.StatusEnum} status
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['status'] = undefined;

/**
 * The name of the current branch.
 * @member {String} head_branch
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['head_branch'] = undefined;

/**
 * The name of the workflow.
 * @member {String} workflow_name
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['workflow_name'] = undefined;

/**
 * @member {Array.<module:model/WorkflowStep3>} steps
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['steps'] = undefined;

/**
 * @member {String} url
 */
WebhookWorkflowJobQueuedWorkflowJob.prototype['url'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
WebhookWorkflowJobQueuedWorkflowJob['StatusEnum'] = {

    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",

    /**
     * value: "in_progress"
     * @const
     */
    "in_progress": "in_progress",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",

    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting"
};



export default WebhookWorkflowJobQueuedWorkflowJob;

