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
import Repository4 from './Repository4';
import User from './User';

/**
 * The PullRequestHead model module.
 * @module model/PullRequestHead
 * @version 1.1.4
 */
class PullRequestHead {
    /**
     * Constructs a new <code>PullRequestHead</code>.
     * @alias module:model/PullRequestHead
     * @param label {String} 
     * @param ref {String} 
     * @param repo {module:model/Repository4} 
     * @param sha {String} 
     * @param user {module:model/User} 
     */
    constructor(label, ref, repo, sha, user) { 
        
        PullRequestHead.initialize(this, label, ref, repo, sha, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label, ref, repo, sha, user) { 
        obj['label'] = label;
        obj['ref'] = ref;
        obj['repo'] = repo;
        obj['sha'] = sha;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>PullRequestHead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestHead} obj Optional instance to populate.
     * @return {module:model/PullRequestHead} The populated <code>PullRequestHead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestHead();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('repo')) {
                obj['repo'] = Repository4.constructFromObject(data['repo']);
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PullRequestHead</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PullRequestHead</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PullRequestHead.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }
        // validate the optional field `repo`
        if (data['repo']) { // data not null
          Repository4.validateJSON(data['repo']);
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          User.validateJSON(data['user']);
        }

        return true;
    }


}

PullRequestHead.RequiredProperties = ["label", "ref", "repo", "sha", "user"];

/**
 * @member {String} label
 */
PullRequestHead.prototype['label'] = undefined;

/**
 * @member {String} ref
 */
PullRequestHead.prototype['ref'] = undefined;

/**
 * @member {module:model/Repository4} repo
 */
PullRequestHead.prototype['repo'] = undefined;

/**
 * @member {String} sha
 */
PullRequestHead.prototype['sha'] = undefined;

/**
 * @member {module:model/User} user
 */
PullRequestHead.prototype['user'] = undefined;






export default PullRequestHead;

