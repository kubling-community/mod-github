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
 * The JobStepsInner model module.
 * @module model/JobStepsInner
 * @version 1.1.4
 */
class JobStepsInner {
    /**
     * Constructs a new <code>JobStepsInner</code>.
     * @alias module:model/JobStepsInner
     * @param status {module:model/JobStepsInner.StatusEnum} The phase of the lifecycle that the job is currently in.
     * @param conclusion {String} The outcome of the job.
     * @param name {String} The name of the job.
     * @param number {Number} 
     */
    constructor(status, conclusion, name, number) { 
        
        JobStepsInner.initialize(this, status, conclusion, name, number);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, conclusion, name, number) { 
        obj['status'] = status;
        obj['conclusion'] = conclusion;
        obj['name'] = name;
        obj['number'] = number;
    }

    /**
     * Constructs a <code>JobStepsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobStepsInner} obj Optional instance to populate.
     * @return {module:model/JobStepsInner} The populated <code>JobStepsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobStepsInner();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('conclusion')) {
                obj['conclusion'] = ApiClient.convertToType(data['conclusion'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JobStepsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JobStepsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JobStepsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['conclusion'] && !(typeof data['conclusion'] === 'string' || data['conclusion'] instanceof String)) {
            throw new Error("Expected the field `conclusion` to be a primitive type in the JSON string but got " + data['conclusion']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

JobStepsInner.RequiredProperties = ["status", "conclusion", "name", "number"];

/**
 * The phase of the lifecycle that the job is currently in.
 * @member {module:model/JobStepsInner.StatusEnum} status
 */
JobStepsInner.prototype['status'] = undefined;

/**
 * The outcome of the job.
 * @member {String} conclusion
 */
JobStepsInner.prototype['conclusion'] = undefined;

/**
 * The name of the job.
 * @member {String} name
 */
JobStepsInner.prototype['name'] = undefined;

/**
 * @member {Number} number
 */
JobStepsInner.prototype['number'] = undefined;

/**
 * The time that the step started, in ISO 8601 format.
 * @member {Date} started_at
 */
JobStepsInner.prototype['started_at'] = undefined;

/**
 * The time that the job finished, in ISO 8601 format.
 * @member {Date} completed_at
 */
JobStepsInner.prototype['completed_at'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
JobStepsInner['StatusEnum'] = {

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
    "completed": "completed"
};



export default JobStepsInner;

