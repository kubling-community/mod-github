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
import WebhookPackagePublishedPackagePackageVersionNugetMetadataInnerValue from './WebhookPackagePublishedPackagePackageVersionNugetMetadataInnerValue';
import WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInnerId from './WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInnerId';

/**
 * The WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner model module.
 * @module model/WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner
 * @version 1.1.4
 */
class WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner {
    /**
     * Constructs a new <code>WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner</code>.
     * @alias module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner
     */
    constructor() { 
        
        WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner} obj Optional instance to populate.
     * @return {module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner} The populated <code>WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInnerId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = WebhookPackagePublishedPackagePackageVersionNugetMetadataInnerValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `id`
        if (data['id']) { // data not null
          WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInnerId.validateJSON(data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          WebhookPackagePublishedPackagePackageVersionNugetMetadataInnerValue.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInnerId} id
 */
WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner.prototype['name'] = undefined;

/**
 * @member {module:model/WebhookPackagePublishedPackagePackageVersionNugetMetadataInnerValue} value
 */
WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner.prototype['value'] = undefined;






export default WebhookRegistryPackagePublishedRegistryPackagePackageVersionNugetMetadataInner;

