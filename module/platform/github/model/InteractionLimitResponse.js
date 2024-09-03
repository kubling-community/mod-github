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
import InteractionGroup from './InteractionGroup';

/**
 * The InteractionLimitResponse model module.
 * @module model/InteractionLimitResponse
 * @version 1.1.4
 */
class InteractionLimitResponse {
    /**
     * Constructs a new <code>InteractionLimitResponse</code>.
     * Interaction limit settings.
     * @alias module:model/InteractionLimitResponse
     * @param limit {module:model/InteractionGroup} 
     * @param origin {String} 
     * @param expiresAt {Date} 
     */
    constructor(limit, origin, expiresAt) { 
        
        InteractionLimitResponse.initialize(this, limit, origin, expiresAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, origin, expiresAt) { 
        obj['limit'] = limit;
        obj['origin'] = origin;
        obj['expires_at'] = expiresAt;
    }

    /**
     * Constructs a <code>InteractionLimitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteractionLimitResponse} obj Optional instance to populate.
     * @return {module:model/InteractionLimitResponse} The populated <code>InteractionLimitResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteractionLimitResponse();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = InteractionGroup.constructFromObject(data['limit']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InteractionLimitResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InteractionLimitResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InteractionLimitResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['origin'] && !(typeof data['origin'] === 'string' || data['origin'] instanceof String)) {
            throw new Error("Expected the field `origin` to be a primitive type in the JSON string but got " + data['origin']);
        }

        return true;
    }


}

InteractionLimitResponse.RequiredProperties = ["limit", "origin", "expires_at"];

/**
 * @member {module:model/InteractionGroup} limit
 */
InteractionLimitResponse.prototype['limit'] = undefined;

/**
 * @member {String} origin
 */
InteractionLimitResponse.prototype['origin'] = undefined;

/**
 * @member {Date} expires_at
 */
InteractionLimitResponse.prototype['expires_at'] = undefined;






export default InteractionLimitResponse;

