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
import CodeScanningVariantAnalysisStatus from './CodeScanningVariantAnalysisStatus';
import SimpleRepository from './SimpleRepository';

/**
 * The CodeScanningVariantAnalysisRepoTask model module.
 * @module model/CodeScanningVariantAnalysisRepoTask
 * @version 1.1.4
 */
class CodeScanningVariantAnalysisRepoTask {
    /**
     * Constructs a new <code>CodeScanningVariantAnalysisRepoTask</code>.
     * @alias module:model/CodeScanningVariantAnalysisRepoTask
     * @param repository {module:model/SimpleRepository} 
     * @param analysisStatus {module:model/CodeScanningVariantAnalysisStatus} 
     */
    constructor(repository, analysisStatus) { 
        
        CodeScanningVariantAnalysisRepoTask.initialize(this, repository, analysisStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repository, analysisStatus) { 
        obj['repository'] = repository;
        obj['analysis_status'] = analysisStatus;
    }

    /**
     * Constructs a <code>CodeScanningVariantAnalysisRepoTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningVariantAnalysisRepoTask} obj Optional instance to populate.
     * @return {module:model/CodeScanningVariantAnalysisRepoTask} The populated <code>CodeScanningVariantAnalysisRepoTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningVariantAnalysisRepoTask();

            if (data.hasOwnProperty('repository')) {
                obj['repository'] = SimpleRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('analysis_status')) {
                obj['analysis_status'] = CodeScanningVariantAnalysisStatus.constructFromObject(data['analysis_status']);
            }
            if (data.hasOwnProperty('artifact_size_in_bytes')) {
                obj['artifact_size_in_bytes'] = ApiClient.convertToType(data['artifact_size_in_bytes'], 'Number');
            }
            if (data.hasOwnProperty('result_count')) {
                obj['result_count'] = ApiClient.convertToType(data['result_count'], 'Number');
            }
            if (data.hasOwnProperty('failure_message')) {
                obj['failure_message'] = ApiClient.convertToType(data['failure_message'], 'String');
            }
            if (data.hasOwnProperty('database_commit_sha')) {
                obj['database_commit_sha'] = ApiClient.convertToType(data['database_commit_sha'], 'String');
            }
            if (data.hasOwnProperty('source_location_prefix')) {
                obj['source_location_prefix'] = ApiClient.convertToType(data['source_location_prefix'], 'String');
            }
            if (data.hasOwnProperty('artifact_url')) {
                obj['artifact_url'] = ApiClient.convertToType(data['artifact_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningVariantAnalysisRepoTask</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningVariantAnalysisRepoTask</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodeScanningVariantAnalysisRepoTask.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          SimpleRepository.validateJSON(data['repository']);
        }
        // ensure the json data is a string
        if (data['failure_message'] && !(typeof data['failure_message'] === 'string' || data['failure_message'] instanceof String)) {
            throw new Error("Expected the field `failure_message` to be a primitive type in the JSON string but got " + data['failure_message']);
        }
        // ensure the json data is a string
        if (data['database_commit_sha'] && !(typeof data['database_commit_sha'] === 'string' || data['database_commit_sha'] instanceof String)) {
            throw new Error("Expected the field `database_commit_sha` to be a primitive type in the JSON string but got " + data['database_commit_sha']);
        }
        // ensure the json data is a string
        if (data['source_location_prefix'] && !(typeof data['source_location_prefix'] === 'string' || data['source_location_prefix'] instanceof String)) {
            throw new Error("Expected the field `source_location_prefix` to be a primitive type in the JSON string but got " + data['source_location_prefix']);
        }
        // ensure the json data is a string
        if (data['artifact_url'] && !(typeof data['artifact_url'] === 'string' || data['artifact_url'] instanceof String)) {
            throw new Error("Expected the field `artifact_url` to be a primitive type in the JSON string but got " + data['artifact_url']);
        }

        return true;
    }


}

CodeScanningVariantAnalysisRepoTask.RequiredProperties = ["repository", "analysis_status"];

/**
 * @member {module:model/SimpleRepository} repository
 */
CodeScanningVariantAnalysisRepoTask.prototype['repository'] = undefined;

/**
 * @member {module:model/CodeScanningVariantAnalysisStatus} analysis_status
 */
CodeScanningVariantAnalysisRepoTask.prototype['analysis_status'] = undefined;

/**
 * The size of the artifact. This is only available for successful analyses.
 * @member {Number} artifact_size_in_bytes
 */
CodeScanningVariantAnalysisRepoTask.prototype['artifact_size_in_bytes'] = undefined;

/**
 * The number of results in the case of a successful analysis. This is only available for successful analyses.
 * @member {Number} result_count
 */
CodeScanningVariantAnalysisRepoTask.prototype['result_count'] = undefined;

/**
 * The reason of the failure of this repo task. This is only available if the repository task has failed.
 * @member {String} failure_message
 */
CodeScanningVariantAnalysisRepoTask.prototype['failure_message'] = undefined;

/**
 * The SHA of the commit the CodeQL database was built against. This is only available for successful analyses.
 * @member {String} database_commit_sha
 */
CodeScanningVariantAnalysisRepoTask.prototype['database_commit_sha'] = undefined;

/**
 * The source location prefix to use. This is only available for successful analyses.
 * @member {String} source_location_prefix
 */
CodeScanningVariantAnalysisRepoTask.prototype['source_location_prefix'] = undefined;

/**
 * The URL of the artifact. This is only available for successful analyses.
 * @member {String} artifact_url
 */
CodeScanningVariantAnalysisRepoTask.prototype['artifact_url'] = undefined;






export default CodeScanningVariantAnalysisRepoTask;

