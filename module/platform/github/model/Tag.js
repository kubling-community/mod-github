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
import ShortBranchCommit from './ShortBranchCommit';

/**
 * The Tag model module.
 * @module model/Tag
 * @version 1.1.4
 */
class Tag {
    /**
     * Constructs a new <code>Tag</code>.
     * Tag
     * @alias module:model/Tag
     * @param name {String} 
     * @param commit {module:model/ShortBranchCommit} 
     * @param zipballUrl {String} 
     * @param tarballUrl {String} 
     * @param nodeId {String} 
     */
    constructor(name, commit, zipballUrl, tarballUrl, nodeId) { 
        
        Tag.initialize(this, name, commit, zipballUrl, tarballUrl, nodeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, commit, zipballUrl, tarballUrl, nodeId) { 
        obj['name'] = name;
        obj['commit'] = commit;
        obj['zipball_url'] = zipballUrl;
        obj['tarball_url'] = tarballUrl;
        obj['node_id'] = nodeId;
    }

    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tag();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = ShortBranchCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('zipball_url')) {
                obj['zipball_url'] = ApiClient.convertToType(data['zipball_url'], 'String');
            }
            if (data.hasOwnProperty('tarball_url')) {
                obj['tarball_url'] = ApiClient.convertToType(data['tarball_url'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Tag</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Tag</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Tag.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `commit`
        if (data['commit']) { // data not null
          ShortBranchCommit.validateJSON(data['commit']);
        }
        // ensure the json data is a string
        if (data['zipball_url'] && !(typeof data['zipball_url'] === 'string' || data['zipball_url'] instanceof String)) {
            throw new Error("Expected the field `zipball_url` to be a primitive type in the JSON string but got " + data['zipball_url']);
        }
        // ensure the json data is a string
        if (data['tarball_url'] && !(typeof data['tarball_url'] === 'string' || data['tarball_url'] instanceof String)) {
            throw new Error("Expected the field `tarball_url` to be a primitive type in the JSON string but got " + data['tarball_url']);
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }

        return true;
    }


}

Tag.RequiredProperties = ["name", "commit", "zipball_url", "tarball_url", "node_id"];

/**
 * @member {String} name
 */
Tag.prototype['name'] = undefined;

/**
 * @member {module:model/ShortBranchCommit} commit
 */
Tag.prototype['commit'] = undefined;

/**
 * @member {String} zipball_url
 */
Tag.prototype['zipball_url'] = undefined;

/**
 * @member {String} tarball_url
 */
Tag.prototype['tarball_url'] = undefined;

/**
 * @member {String} node_id
 */
Tag.prototype['node_id'] = undefined;






export default Tag;

