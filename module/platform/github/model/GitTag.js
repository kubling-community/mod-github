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
import GitTagObject from './GitTagObject';
import GitTagTagger from './GitTagTagger';
import Verification from './Verification';

/**
 * The GitTag model module.
 * @module model/GitTag
 * @version 1.1.4
 */
class GitTag {
    /**
     * Constructs a new <code>GitTag</code>.
     * Metadata for a Git tag
     * @alias module:model/GitTag
     * @param nodeId {String} 
     * @param tag {String} Name of the tag
     * @param sha {String} 
     * @param url {String} URL for the tag
     * @param message {String} Message describing the purpose of the tag
     * @param tagger {module:model/GitTagTagger} 
     * @param object {module:model/GitTagObject} 
     */
    constructor(nodeId, tag, sha, url, message, tagger, object) { 
        
        GitTag.initialize(this, nodeId, tag, sha, url, message, tagger, object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nodeId, tag, sha, url, message, tagger, object) { 
        obj['node_id'] = nodeId;
        obj['tag'] = tag;
        obj['sha'] = sha;
        obj['url'] = url;
        obj['message'] = message;
        obj['tagger'] = tagger;
        obj['object'] = object;
    }

    /**
     * Constructs a <code>GitTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTag} obj Optional instance to populate.
     * @return {module:model/GitTag} The populated <code>GitTag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitTag();

            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('tagger')) {
                obj['tagger'] = GitTagTagger.constructFromObject(data['tagger']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = GitTagObject.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('verification')) {
                obj['verification'] = Verification.constructFromObject(data['verification']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitTag</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitTag</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitTag.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `tagger`
        if (data['tagger']) { // data not null
          GitTagTagger.validateJSON(data['tagger']);
        }
        // validate the optional field `object`
        if (data['object']) { // data not null
          GitTagObject.validateJSON(data['object']);
        }
        // validate the optional field `verification`
        if (data['verification']) { // data not null
          Verification.validateJSON(data['verification']);
        }

        return true;
    }


}

GitTag.RequiredProperties = ["node_id", "tag", "sha", "url", "message", "tagger", "object"];

/**
 * @member {String} node_id
 */
GitTag.prototype['node_id'] = undefined;

/**
 * Name of the tag
 * @member {String} tag
 */
GitTag.prototype['tag'] = undefined;

/**
 * @member {String} sha
 */
GitTag.prototype['sha'] = undefined;

/**
 * URL for the tag
 * @member {String} url
 */
GitTag.prototype['url'] = undefined;

/**
 * Message describing the purpose of the tag
 * @member {String} message
 */
GitTag.prototype['message'] = undefined;

/**
 * @member {module:model/GitTagTagger} tagger
 */
GitTag.prototype['tagger'] = undefined;

/**
 * @member {module:model/GitTagObject} object
 */
GitTag.prototype['object'] = undefined;

/**
 * @member {module:model/Verification} verification
 */
GitTag.prototype['verification'] = undefined;






export default GitTag;

