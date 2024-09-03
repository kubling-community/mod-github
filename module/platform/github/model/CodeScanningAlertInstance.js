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
import CodeScanningAlertClassification from './CodeScanningAlertClassification';
import CodeScanningAlertInstanceMessage from './CodeScanningAlertInstanceMessage';
import CodeScanningAlertLocation from './CodeScanningAlertLocation';
import CodeScanningAlertState from './CodeScanningAlertState';

/**
 * The CodeScanningAlertInstance model module.
 * @module model/CodeScanningAlertInstance
 * @version 1.1.4
 */
class CodeScanningAlertInstance {
    /**
     * Constructs a new <code>CodeScanningAlertInstance</code>.
     * @alias module:model/CodeScanningAlertInstance
     */
    constructor() { 
        
        CodeScanningAlertInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeScanningAlertInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningAlertInstance} obj Optional instance to populate.
     * @return {module:model/CodeScanningAlertInstance} The populated <code>CodeScanningAlertInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningAlertInstance();

            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('analysis_key')) {
                obj['analysis_key'] = ApiClient.convertToType(data['analysis_key'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = CodeScanningAlertState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('commit_sha')) {
                obj['commit_sha'] = ApiClient.convertToType(data['commit_sha'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = CodeScanningAlertInstanceMessage.constructFromObject(data['message']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = CodeScanningAlertLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [CodeScanningAlertClassification]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningAlertInstance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningAlertInstance</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }
        // ensure the json data is a string
        if (data['analysis_key'] && !(typeof data['analysis_key'] === 'string' || data['analysis_key'] instanceof String)) {
            throw new Error("Expected the field `analysis_key` to be a primitive type in the JSON string but got " + data['analysis_key']);
        }
        // ensure the json data is a string
        if (data['environment'] && !(typeof data['environment'] === 'string' || data['environment'] instanceof String)) {
            throw new Error("Expected the field `environment` to be a primitive type in the JSON string but got " + data['environment']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['commit_sha'] && !(typeof data['commit_sha'] === 'string' || data['commit_sha'] instanceof String)) {
            throw new Error("Expected the field `commit_sha` to be a primitive type in the JSON string but got " + data['commit_sha']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          CodeScanningAlertInstanceMessage.validateJSON(data['message']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          CodeScanningAlertLocation.validateJSON(data['location']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['classifications'])) {
            throw new Error("Expected the field `classifications` to be an array in the JSON data but got " + data['classifications']);
        }

        return true;
    }


}



/**
 * The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`.
 * @member {String} ref
 */
CodeScanningAlertInstance.prototype['ref'] = undefined;

/**
 * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
 * @member {String} analysis_key
 */
CodeScanningAlertInstance.prototype['analysis_key'] = undefined;

/**
 * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
 * @member {String} environment
 */
CodeScanningAlertInstance.prototype['environment'] = undefined;

/**
 * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
 * @member {String} category
 */
CodeScanningAlertInstance.prototype['category'] = undefined;

/**
 * @member {module:model/CodeScanningAlertState} state
 */
CodeScanningAlertInstance.prototype['state'] = undefined;

/**
 * @member {String} commit_sha
 */
CodeScanningAlertInstance.prototype['commit_sha'] = undefined;

/**
 * @member {module:model/CodeScanningAlertInstanceMessage} message
 */
CodeScanningAlertInstance.prototype['message'] = undefined;

/**
 * @member {module:model/CodeScanningAlertLocation} location
 */
CodeScanningAlertInstance.prototype['location'] = undefined;

/**
 * @member {String} html_url
 */
CodeScanningAlertInstance.prototype['html_url'] = undefined;

/**
 * Classifications that have been applied to the file that triggered the alert. For example identifying it as documentation, or a generated file.
 * @member {Array.<module:model/CodeScanningAlertClassification>} classifications
 */
CodeScanningAlertInstance.prototype['classifications'] = undefined;






export default CodeScanningAlertInstance;

