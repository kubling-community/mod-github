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
 * The SnapshotDetector model module.
 * @module model/SnapshotDetector
 * @version 1.1.4
 */
class SnapshotDetector {
    /**
     * Constructs a new <code>SnapshotDetector</code>.
     * A description of the detector used.
     * @alias module:model/SnapshotDetector
     * @param name {String} The name of the detector used.
     * @param version {String} The version of the detector used.
     * @param url {String} The url of the detector used.
     */
    constructor(name, version, url) { 
        
        SnapshotDetector.initialize(this, name, version, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, version, url) { 
        obj['name'] = name;
        obj['version'] = version;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>SnapshotDetector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotDetector} obj Optional instance to populate.
     * @return {module:model/SnapshotDetector} The populated <code>SnapshotDetector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotDetector();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SnapshotDetector</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnapshotDetector</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SnapshotDetector.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

SnapshotDetector.RequiredProperties = ["name", "version", "url"];

/**
 * The name of the detector used.
 * @member {String} name
 */
SnapshotDetector.prototype['name'] = undefined;

/**
 * The version of the detector used.
 * @member {String} version
 */
SnapshotDetector.prototype['version'] = undefined;

/**
 * The url of the detector used.
 * @member {String} url
 */
SnapshotDetector.prototype['url'] = undefined;






export default SnapshotDetector;

