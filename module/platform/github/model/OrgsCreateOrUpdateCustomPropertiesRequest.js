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
import OrgCustomProperty from './OrgCustomProperty';

/**
 * The OrgsCreateOrUpdateCustomPropertiesRequest model module.
 * @module model/OrgsCreateOrUpdateCustomPropertiesRequest
 * @version 1.1.4
 */
class OrgsCreateOrUpdateCustomPropertiesRequest {
    /**
     * Constructs a new <code>OrgsCreateOrUpdateCustomPropertiesRequest</code>.
     * @alias module:model/OrgsCreateOrUpdateCustomPropertiesRequest
     * @param properties {Array.<module:model/OrgCustomProperty>} The array of custom properties to create or update.
     */
    constructor(properties) { 
        
        OrgsCreateOrUpdateCustomPropertiesRequest.initialize(this, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, properties) { 
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>OrgsCreateOrUpdateCustomPropertiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgsCreateOrUpdateCustomPropertiesRequest} obj Optional instance to populate.
     * @return {module:model/OrgsCreateOrUpdateCustomPropertiesRequest} The populated <code>OrgsCreateOrUpdateCustomPropertiesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgsCreateOrUpdateCustomPropertiesRequest();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [OrgCustomProperty]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgsCreateOrUpdateCustomPropertiesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgsCreateOrUpdateCustomPropertiesRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrgsCreateOrUpdateCustomPropertiesRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                OrgCustomProperty.validateJSON(item);
            };
        }

        return true;
    }


}

OrgsCreateOrUpdateCustomPropertiesRequest.RequiredProperties = ["properties"];

/**
 * The array of custom properties to create or update.
 * @member {Array.<module:model/OrgCustomProperty>} properties
 */
OrgsCreateOrUpdateCustomPropertiesRequest.prototype['properties'] = undefined;






export default OrgsCreateOrUpdateCustomPropertiesRequest;

