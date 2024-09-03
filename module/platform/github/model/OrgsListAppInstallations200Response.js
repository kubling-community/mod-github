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
import Installation from './Installation';

/**
 * The OrgsListAppInstallations200Response model module.
 * @module model/OrgsListAppInstallations200Response
 * @version 1.1.4
 */
class OrgsListAppInstallations200Response {
    /**
     * Constructs a new <code>OrgsListAppInstallations200Response</code>.
     * @alias module:model/OrgsListAppInstallations200Response
     * @param totalCount {Number} 
     * @param installations {Array.<module:model/Installation>} 
     */
    constructor(totalCount, installations) { 
        
        OrgsListAppInstallations200Response.initialize(this, totalCount, installations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, installations) { 
        obj['total_count'] = totalCount;
        obj['installations'] = installations;
    }

    /**
     * Constructs a <code>OrgsListAppInstallations200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgsListAppInstallations200Response} obj Optional instance to populate.
     * @return {module:model/OrgsListAppInstallations200Response} The populated <code>OrgsListAppInstallations200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgsListAppInstallations200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('installations')) {
                obj['installations'] = ApiClient.convertToType(data['installations'], [Installation]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgsListAppInstallations200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgsListAppInstallations200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrgsListAppInstallations200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['installations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['installations'])) {
                throw new Error("Expected the field `installations` to be an array in the JSON data but got " + data['installations']);
            }
            // validate the optional field `installations` (array)
            for (const item of data['installations']) {
                Installation.validateJSON(item);
            };
        }

        return true;
    }


}

OrgsListAppInstallations200Response.RequiredProperties = ["total_count", "installations"];

/**
 * @member {Number} total_count
 */
OrgsListAppInstallations200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Installation>} installations
 */
OrgsListAppInstallations200Response.prototype['installations'] = undefined;






export default OrgsListAppInstallations200Response;

