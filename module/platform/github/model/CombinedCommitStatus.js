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
import MinimalRepository from './MinimalRepository';
import SimpleCommitStatus from './SimpleCommitStatus';

/**
 * The CombinedCommitStatus model module.
 * @module model/CombinedCommitStatus
 * @version 1.1.4
 */
class CombinedCommitStatus {
    /**
     * Constructs a new <code>CombinedCommitStatus</code>.
     * Combined Commit Status
     * @alias module:model/CombinedCommitStatus
     * @param state {String} 
     * @param statuses {Array.<module:model/SimpleCommitStatus>} 
     * @param sha {String} 
     * @param totalCount {Number} 
     * @param repository {module:model/MinimalRepository} 
     * @param commitUrl {String} 
     * @param url {String} 
     */
    constructor(state, statuses, sha, totalCount, repository, commitUrl, url) { 
        
        CombinedCommitStatus.initialize(this, state, statuses, sha, totalCount, repository, commitUrl, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, statuses, sha, totalCount, repository, commitUrl, url) { 
        obj['state'] = state;
        obj['statuses'] = statuses;
        obj['sha'] = sha;
        obj['total_count'] = totalCount;
        obj['repository'] = repository;
        obj['commit_url'] = commitUrl;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>CombinedCommitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CombinedCommitStatus} obj Optional instance to populate.
     * @return {module:model/CombinedCommitStatus} The populated <code>CombinedCommitStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CombinedCommitStatus();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], [SimpleCommitStatus]);
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = MinimalRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('commit_url')) {
                obj['commit_url'] = ApiClient.convertToType(data['commit_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CombinedCommitStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CombinedCommitStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CombinedCommitStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        if (data['statuses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statuses'])) {
                throw new Error("Expected the field `statuses` to be an array in the JSON data but got " + data['statuses']);
            }
            // validate the optional field `statuses` (array)
            for (const item of data['statuses']) {
                SimpleCommitStatus.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          MinimalRepository.validateJSON(data['repository']);
        }
        // ensure the json data is a string
        if (data['commit_url'] && !(typeof data['commit_url'] === 'string' || data['commit_url'] instanceof String)) {
            throw new Error("Expected the field `commit_url` to be a primitive type in the JSON string but got " + data['commit_url']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

CombinedCommitStatus.RequiredProperties = ["state", "statuses", "sha", "total_count", "repository", "commit_url", "url"];

/**
 * @member {String} state
 */
CombinedCommitStatus.prototype['state'] = undefined;

/**
 * @member {Array.<module:model/SimpleCommitStatus>} statuses
 */
CombinedCommitStatus.prototype['statuses'] = undefined;

/**
 * @member {String} sha
 */
CombinedCommitStatus.prototype['sha'] = undefined;

/**
 * @member {Number} total_count
 */
CombinedCommitStatus.prototype['total_count'] = undefined;

/**
 * @member {module:model/MinimalRepository} repository
 */
CombinedCommitStatus.prototype['repository'] = undefined;

/**
 * @member {String} commit_url
 */
CombinedCommitStatus.prototype['commit_url'] = undefined;

/**
 * @member {String} url
 */
CombinedCommitStatus.prototype['url'] = undefined;






export default CombinedCommitStatus;

