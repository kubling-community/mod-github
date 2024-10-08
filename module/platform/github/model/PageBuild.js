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
import NullableSimpleUser from './NullableSimpleUser';
import PageBuildError from './PageBuildError';

/**
 * The PageBuild model module.
 * @module model/PageBuild
 * @version 1.1.4
 */
class PageBuild {
    /**
     * Constructs a new <code>PageBuild</code>.
     * Page Build
     * @alias module:model/PageBuild
     * @param url {String} 
     * @param status {String} 
     * @param error {module:model/PageBuildError} 
     * @param pusher {module:model/NullableSimpleUser} 
     * @param commit {String} 
     * @param duration {Number} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(url, status, error, pusher, commit, duration, createdAt, updatedAt) { 
        
        PageBuild.initialize(this, url, status, error, pusher, commit, duration, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, status, error, pusher, commit, duration, createdAt, updatedAt) { 
        obj['url'] = url;
        obj['status'] = status;
        obj['error'] = error;
        obj['pusher'] = pusher;
        obj['commit'] = commit;
        obj['duration'] = duration;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>PageBuild</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBuild} obj Optional instance to populate.
     * @return {module:model/PageBuild} The populated <code>PageBuild</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageBuild();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = PageBuildError.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('pusher')) {
                obj['pusher'] = NullableSimpleUser.constructFromObject(data['pusher']);
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = ApiClient.convertToType(data['commit'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageBuild</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageBuild</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PageBuild.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          PageBuildError.validateJSON(data['error']);
        }
        // validate the optional field `pusher`
        if (data['pusher']) { // data not null
          NullableSimpleUser.validateJSON(data['pusher']);
        }
        // ensure the json data is a string
        if (data['commit'] && !(typeof data['commit'] === 'string' || data['commit'] instanceof String)) {
            throw new Error("Expected the field `commit` to be a primitive type in the JSON string but got " + data['commit']);
        }

        return true;
    }


}

PageBuild.RequiredProperties = ["url", "status", "error", "pusher", "commit", "duration", "created_at", "updated_at"];

/**
 * @member {String} url
 */
PageBuild.prototype['url'] = undefined;

/**
 * @member {String} status
 */
PageBuild.prototype['status'] = undefined;

/**
 * @member {module:model/PageBuildError} error
 */
PageBuild.prototype['error'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} pusher
 */
PageBuild.prototype['pusher'] = undefined;

/**
 * @member {String} commit
 */
PageBuild.prototype['commit'] = undefined;

/**
 * @member {Number} duration
 */
PageBuild.prototype['duration'] = undefined;

/**
 * @member {Date} created_at
 */
PageBuild.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
PageBuild.prototype['updated_at'] = undefined;






export default PageBuild;

