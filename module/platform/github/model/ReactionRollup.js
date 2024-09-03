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
 * The ReactionRollup model module.
 * @module model/ReactionRollup
 * @version 1.1.4
 */
class ReactionRollup {
    /**
     * Constructs a new <code>ReactionRollup</code>.
     * @alias module:model/ReactionRollup
     * @param url {String} 
     * @param totalCount {Number} 
     * @param _1 {Number} 
     * @param _1 {Number} 
     * @param laugh {Number} 
     * @param confused {Number} 
     * @param heart {Number} 
     * @param hooray {Number} 
     * @param eyes {Number} 
     * @param rocket {Number} 
     */
    constructor(url, totalCount, _1, _2, laugh, confused, heart, hooray, eyes, rocket) { 
        
        ReactionRollup.initialize(this, url, totalCount, _1, _2, laugh, confused, heart, hooray, eyes, rocket);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, totalCount, _1, _2, laugh, confused, heart, hooray, eyes, rocket) { 
        obj['url'] = url;
        obj['total_count'] = totalCount;
        obj['+1'] = _1;
        obj['-1'] = _2;
        obj['laugh'] = laugh;
        obj['confused'] = confused;
        obj['heart'] = heart;
        obj['hooray'] = hooray;
        obj['eyes'] = eyes;
        obj['rocket'] = rocket;
    }

    /**
     * Constructs a <code>ReactionRollup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactionRollup} obj Optional instance to populate.
     * @return {module:model/ReactionRollup} The populated <code>ReactionRollup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReactionRollup();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('+1')) {
                obj['+1'] = ApiClient.convertToType(data['+1'], 'Number');
            }
            if (data.hasOwnProperty('-1')) {
                obj['-1'] = ApiClient.convertToType(data['-1'], 'Number');
            }
            if (data.hasOwnProperty('laugh')) {
                obj['laugh'] = ApiClient.convertToType(data['laugh'], 'Number');
            }
            if (data.hasOwnProperty('confused')) {
                obj['confused'] = ApiClient.convertToType(data['confused'], 'Number');
            }
            if (data.hasOwnProperty('heart')) {
                obj['heart'] = ApiClient.convertToType(data['heart'], 'Number');
            }
            if (data.hasOwnProperty('hooray')) {
                obj['hooray'] = ApiClient.convertToType(data['hooray'], 'Number');
            }
            if (data.hasOwnProperty('eyes')) {
                obj['eyes'] = ApiClient.convertToType(data['eyes'], 'Number');
            }
            if (data.hasOwnProperty('rocket')) {
                obj['rocket'] = ApiClient.convertToType(data['rocket'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReactionRollup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReactionRollup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReactionRollup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

ReactionRollup.RequiredProperties = ["url", "total_count", "+1", "-1", "laugh", "confused", "heart", "hooray", "eyes", "rocket"];

/**
 * @member {String} url
 */
ReactionRollup.prototype['url'] = undefined;

/**
 * @member {Number} total_count
 */
ReactionRollup.prototype['total_count'] = undefined;

/**
 * @member {Number} +1
 */
ReactionRollup.prototype['+1'] = undefined;

/**
 * @member {Number} -1
 */
ReactionRollup.prototype['-1'] = undefined;

/**
 * @member {Number} laugh
 */
ReactionRollup.prototype['laugh'] = undefined;

/**
 * @member {Number} confused
 */
ReactionRollup.prototype['confused'] = undefined;

/**
 * @member {Number} heart
 */
ReactionRollup.prototype['heart'] = undefined;

/**
 * @member {Number} hooray
 */
ReactionRollup.prototype['hooray'] = undefined;

/**
 * @member {Number} eyes
 */
ReactionRollup.prototype['eyes'] = undefined;

/**
 * @member {Number} rocket
 */
ReactionRollup.prototype['rocket'] = undefined;






export default ReactionRollup;

