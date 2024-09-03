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
import Integration from './Integration';
import MinimalRepository from './MinimalRepository';
import PullRequestMinimal from './PullRequestMinimal';

/**
 * The SimpleCheckSuite model module.
 * @module model/SimpleCheckSuite
 * @version 1.1.4
 */
class SimpleCheckSuite {
    /**
     * Constructs a new <code>SimpleCheckSuite</code>.
     * A suite of checks performed on the code of a given code change
     * @alias module:model/SimpleCheckSuite
     */
    constructor() { 
        
        SimpleCheckSuite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleCheckSuite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleCheckSuite} obj Optional instance to populate.
     * @return {module:model/SimpleCheckSuite} The populated <code>SimpleCheckSuite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleCheckSuite();

            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('app')) {
                obj['app'] = Integration.constructFromObject(data['app']);
            }
            if (data.hasOwnProperty('before')) {
                obj['before'] = ApiClient.convertToType(data['before'], 'String');
            }
            if (data.hasOwnProperty('conclusion')) {
                obj['conclusion'] = ApiClient.convertToType(data['conclusion'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('head_branch')) {
                obj['head_branch'] = ApiClient.convertToType(data['head_branch'], 'String');
            }
            if (data.hasOwnProperty('head_sha')) {
                obj['head_sha'] = ApiClient.convertToType(data['head_sha'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('pull_requests')) {
                obj['pull_requests'] = ApiClient.convertToType(data['pull_requests'], [PullRequestMinimal]);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = MinimalRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimpleCheckSuite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimpleCheckSuite</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['after'] && !(typeof data['after'] === 'string' || data['after'] instanceof String)) {
            throw new Error("Expected the field `after` to be a primitive type in the JSON string but got " + data['after']);
        }
        // validate the optional field `app`
        if (data['app']) { // data not null
          Integration.validateJSON(data['app']);
        }
        // ensure the json data is a string
        if (data['before'] && !(typeof data['before'] === 'string' || data['before'] instanceof String)) {
            throw new Error("Expected the field `before` to be a primitive type in the JSON string but got " + data['before']);
        }
        // ensure the json data is a string
        if (data['conclusion'] && !(typeof data['conclusion'] === 'string' || data['conclusion'] instanceof String)) {
            throw new Error("Expected the field `conclusion` to be a primitive type in the JSON string but got " + data['conclusion']);
        }
        // ensure the json data is a string
        if (data['head_branch'] && !(typeof data['head_branch'] === 'string' || data['head_branch'] instanceof String)) {
            throw new Error("Expected the field `head_branch` to be a primitive type in the JSON string but got " + data['head_branch']);
        }
        // ensure the json data is a string
        if (data['head_sha'] && !(typeof data['head_sha'] === 'string' || data['head_sha'] instanceof String)) {
            throw new Error("Expected the field `head_sha` to be a primitive type in the JSON string but got " + data['head_sha']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        if (data['pull_requests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['pull_requests'])) {
                throw new Error("Expected the field `pull_requests` to be an array in the JSON data but got " + data['pull_requests']);
            }
            // validate the optional field `pull_requests` (array)
            for (const item of data['pull_requests']) {
                PullRequestMinimal.validateJSON(item);
            };
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          MinimalRepository.validateJSON(data['repository']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} after
 */
SimpleCheckSuite.prototype['after'] = undefined;

/**
 * @member {module:model/Integration} app
 */
SimpleCheckSuite.prototype['app'] = undefined;

/**
 * @member {String} before
 */
SimpleCheckSuite.prototype['before'] = undefined;

/**
 * @member {module:model/SimpleCheckSuite.ConclusionEnum} conclusion
 */
SimpleCheckSuite.prototype['conclusion'] = undefined;

/**
 * @member {Date} created_at
 */
SimpleCheckSuite.prototype['created_at'] = undefined;

/**
 * @member {String} head_branch
 */
SimpleCheckSuite.prototype['head_branch'] = undefined;

/**
 * The SHA of the head commit that is being checked.
 * @member {String} head_sha
 */
SimpleCheckSuite.prototype['head_sha'] = undefined;

/**
 * @member {Number} id
 */
SimpleCheckSuite.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
SimpleCheckSuite.prototype['node_id'] = undefined;

/**
 * @member {Array.<module:model/PullRequestMinimal>} pull_requests
 */
SimpleCheckSuite.prototype['pull_requests'] = undefined;

/**
 * @member {module:model/MinimalRepository} repository
 */
SimpleCheckSuite.prototype['repository'] = undefined;

/**
 * @member {module:model/SimpleCheckSuite.StatusEnum} status
 */
SimpleCheckSuite.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
SimpleCheckSuite.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
SimpleCheckSuite.prototype['url'] = undefined;





/**
 * Allowed values for the <code>conclusion</code> property.
 * @enum {String}
 * @readonly
 */
SimpleCheckSuite['ConclusionEnum'] = {

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "failure"
     * @const
     */
    "failure": "failure",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",

    /**
     * value: "skipped"
     * @const
     */
    "skipped": "skipped",

    /**
     * value: "timed_out"
     * @const
     */
    "timed_out": "timed_out",

    /**
     * value: "action_required"
     * @const
     */
    "action_required": "action_required",

    /**
     * value: "stale"
     * @const
     */
    "stale": "stale",

    /**
     * value: "startup_failure"
     * @const
     */
    "startup_failure": "startup_failure"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SimpleCheckSuite['StatusEnum'] = {

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
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting"
};



export default SimpleCheckSuite;

