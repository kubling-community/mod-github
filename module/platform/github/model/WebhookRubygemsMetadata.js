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
import WebhookRubygemsMetadataVersionInfo from './WebhookRubygemsMetadataVersionInfo';

/**
 * The WebhookRubygemsMetadata model module.
 * @module model/WebhookRubygemsMetadata
 * @version 1.1.4
 */
class WebhookRubygemsMetadata {
    /**
     * Constructs a new <code>WebhookRubygemsMetadata</code>.
     * @alias module:model/WebhookRubygemsMetadata
     */
    constructor() { 
        
        WebhookRubygemsMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRubygemsMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRubygemsMetadata} obj Optional instance to populate.
     * @return {module:model/WebhookRubygemsMetadata} The populated <code>WebhookRubygemsMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRubygemsMetadata();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('readme')) {
                obj['readme'] = ApiClient.convertToType(data['readme'], 'String');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
            if (data.hasOwnProperty('version_info')) {
                obj['version_info'] = WebhookRubygemsMetadataVersionInfo.constructFromObject(data['version_info']);
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('repo')) {
                obj['repo'] = ApiClient.convertToType(data['repo'], 'String');
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], [{'String': 'String'}]);
            }
            if (data.hasOwnProperty('commit_oid')) {
                obj['commit_oid'] = ApiClient.convertToType(data['commit_oid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRubygemsMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRubygemsMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['readme'] && !(typeof data['readme'] === 'string' || data['readme'] instanceof String)) {
            throw new Error("Expected the field `readme` to be a primitive type in the JSON string but got " + data['readme']);
        }
        // ensure the json data is a string
        if (data['homepage'] && !(typeof data['homepage'] === 'string' || data['homepage'] instanceof String)) {
            throw new Error("Expected the field `homepage` to be a primitive type in the JSON string but got " + data['homepage']);
        }
        // validate the optional field `version_info`
        if (data['version_info']) { // data not null
          WebhookRubygemsMetadataVersionInfo.validateJSON(data['version_info']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }
        // ensure the json data is a string
        if (data['repo'] && !(typeof data['repo'] === 'string' || data['repo'] instanceof String)) {
            throw new Error("Expected the field `repo` to be a primitive type in the JSON string but got " + data['repo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dependencies'])) {
            throw new Error("Expected the field `dependencies` to be an array in the JSON data but got " + data['dependencies']);
        }
        // ensure the json data is a string
        if (data['commit_oid'] && !(typeof data['commit_oid'] === 'string' || data['commit_oid'] instanceof String)) {
            throw new Error("Expected the field `commit_oid` to be a primitive type in the JSON string but got " + data['commit_oid']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
WebhookRubygemsMetadata.prototype['name'] = undefined;

/**
 * @member {String} description
 */
WebhookRubygemsMetadata.prototype['description'] = undefined;

/**
 * @member {String} readme
 */
WebhookRubygemsMetadata.prototype['readme'] = undefined;

/**
 * @member {String} homepage
 */
WebhookRubygemsMetadata.prototype['homepage'] = undefined;

/**
 * @member {module:model/WebhookRubygemsMetadataVersionInfo} version_info
 */
WebhookRubygemsMetadata.prototype['version_info'] = undefined;

/**
 * @member {String} platform
 */
WebhookRubygemsMetadata.prototype['platform'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
WebhookRubygemsMetadata.prototype['metadata'] = undefined;

/**
 * @member {String} repo
 */
WebhookRubygemsMetadata.prototype['repo'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} dependencies
 */
WebhookRubygemsMetadata.prototype['dependencies'] = undefined;

/**
 * @member {String} commit_oid
 */
WebhookRubygemsMetadata.prototype['commit_oid'] = undefined;






export default WebhookRubygemsMetadata;

