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
 * The ActionsCacheUsageByRepository model module.
 * @module model/ActionsCacheUsageByRepository
 * @version 1.1.4
 */
class ActionsCacheUsageByRepository {
    /**
     * Constructs a new <code>ActionsCacheUsageByRepository</code>.
     * GitHub Actions Cache Usage by repository.
     * @alias module:model/ActionsCacheUsageByRepository
     * @param fullName {String} The repository owner and name for the cache usage being shown.
     * @param activeCachesSizeInBytes {Number} The sum of the size in bytes of all the active cache items in the repository.
     * @param activeCachesCount {Number} The number of active caches in the repository.
     */
    constructor(fullName, activeCachesSizeInBytes, activeCachesCount) { 
        
        ActionsCacheUsageByRepository.initialize(this, fullName, activeCachesSizeInBytes, activeCachesCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fullName, activeCachesSizeInBytes, activeCachesCount) { 
        obj['full_name'] = fullName;
        obj['active_caches_size_in_bytes'] = activeCachesSizeInBytes;
        obj['active_caches_count'] = activeCachesCount;
    }

    /**
     * Constructs a <code>ActionsCacheUsageByRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsCacheUsageByRepository} obj Optional instance to populate.
     * @return {module:model/ActionsCacheUsageByRepository} The populated <code>ActionsCacheUsageByRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsCacheUsageByRepository();

            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('active_caches_size_in_bytes')) {
                obj['active_caches_size_in_bytes'] = ApiClient.convertToType(data['active_caches_size_in_bytes'], 'Number');
            }
            if (data.hasOwnProperty('active_caches_count')) {
                obj['active_caches_count'] = ApiClient.convertToType(data['active_caches_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionsCacheUsageByRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionsCacheUsageByRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActionsCacheUsageByRepository.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['full_name'] && !(typeof data['full_name'] === 'string' || data['full_name'] instanceof String)) {
            throw new Error("Expected the field `full_name` to be a primitive type in the JSON string but got " + data['full_name']);
        }

        return true;
    }


}

ActionsCacheUsageByRepository.RequiredProperties = ["full_name", "active_caches_size_in_bytes", "active_caches_count"];

/**
 * The repository owner and name for the cache usage being shown.
 * @member {String} full_name
 */
ActionsCacheUsageByRepository.prototype['full_name'] = undefined;

/**
 * The sum of the size in bytes of all the active cache items in the repository.
 * @member {Number} active_caches_size_in_bytes
 */
ActionsCacheUsageByRepository.prototype['active_caches_size_in_bytes'] = undefined;

/**
 * The number of active caches in the repository.
 * @member {Number} active_caches_count
 */
ActionsCacheUsageByRepository.prototype['active_caches_count'] = undefined;






export default ActionsCacheUsageByRepository;

