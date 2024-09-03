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
import GistHistoryChangeStatus from './GistHistoryChangeStatus';
import NullableSimpleUser from './NullableSimpleUser';

/**
 * The GistCommit model module.
 * @module model/GistCommit
 * @version 1.1.4
 */
class GistCommit {
    /**
     * Constructs a new <code>GistCommit</code>.
     * Gist Commit
     * @alias module:model/GistCommit
     * @param url {String} 
     * @param version {String} 
     * @param user {module:model/NullableSimpleUser} 
     * @param changeStatus {module:model/GistHistoryChangeStatus} 
     * @param committedAt {Date} 
     */
    constructor(url, version, user, changeStatus, committedAt) { 
        
        GistCommit.initialize(this, url, version, user, changeStatus, committedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, version, user, changeStatus, committedAt) { 
        obj['url'] = url;
        obj['version'] = version;
        obj['user'] = user;
        obj['change_status'] = changeStatus;
        obj['committed_at'] = committedAt;
    }

    /**
     * Constructs a <code>GistCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistCommit} obj Optional instance to populate.
     * @return {module:model/GistCommit} The populated <code>GistCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GistCommit();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = NullableSimpleUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('change_status')) {
                obj['change_status'] = GistHistoryChangeStatus.constructFromObject(data['change_status']);
            }
            if (data.hasOwnProperty('committed_at')) {
                obj['committed_at'] = ApiClient.convertToType(data['committed_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GistCommit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GistCommit</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GistCommit.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          NullableSimpleUser.validateJSON(data['user']);
        }
        // validate the optional field `change_status`
        if (data['change_status']) { // data not null
          GistHistoryChangeStatus.validateJSON(data['change_status']);
        }

        return true;
    }


}

GistCommit.RequiredProperties = ["url", "version", "user", "change_status", "committed_at"];

/**
 * @member {String} url
 */
GistCommit.prototype['url'] = undefined;

/**
 * @member {String} version
 */
GistCommit.prototype['version'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} user
 */
GistCommit.prototype['user'] = undefined;

/**
 * @member {module:model/GistHistoryChangeStatus} change_status
 */
GistCommit.prototype['change_status'] = undefined;

/**
 * @member {Date} committed_at
 */
GistCommit.prototype['committed_at'] = undefined;






export default GistCommit;

