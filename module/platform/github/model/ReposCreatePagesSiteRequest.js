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
import ReposCreatePagesSiteRequestSource from './ReposCreatePagesSiteRequestSource';

/**
 * The ReposCreatePagesSiteRequest model module.
 * @module model/ReposCreatePagesSiteRequest
 * @version 1.1.4
 */
class ReposCreatePagesSiteRequest {
    /**
     * Constructs a new <code>ReposCreatePagesSiteRequest</code>.
     * The source branch and directory used to publish your Pages site.
     * @alias module:model/ReposCreatePagesSiteRequest
     */
    constructor() { 
        
        ReposCreatePagesSiteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposCreatePagesSiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreatePagesSiteRequest} obj Optional instance to populate.
     * @return {module:model/ReposCreatePagesSiteRequest} The populated <code>ReposCreatePagesSiteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreatePagesSiteRequest();

            if (data.hasOwnProperty('build_type')) {
                obj['build_type'] = ApiClient.convertToType(data['build_type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ReposCreatePagesSiteRequestSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreatePagesSiteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreatePagesSiteRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['build_type'] && !(typeof data['build_type'] === 'string' || data['build_type'] instanceof String)) {
            throw new Error("Expected the field `build_type` to be a primitive type in the JSON string but got " + data['build_type']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          ReposCreatePagesSiteRequestSource.validateJSON(data['source']);
        }

        return true;
    }


}



/**
 * The process in which the Page will be built. Possible values are `\"legacy\"` and `\"workflow\"`.
 * @member {module:model/ReposCreatePagesSiteRequest.BuildTypeEnum} build_type
 */
ReposCreatePagesSiteRequest.prototype['build_type'] = undefined;

/**
 * @member {module:model/ReposCreatePagesSiteRequestSource} source
 */
ReposCreatePagesSiteRequest.prototype['source'] = undefined;





/**
 * Allowed values for the <code>build_type</code> property.
 * @enum {String}
 * @readonly
 */
ReposCreatePagesSiteRequest['BuildTypeEnum'] = {

    /**
     * value: "legacy"
     * @const
     */
    "legacy": "legacy",

    /**
     * value: "workflow"
     * @const
     */
    "workflow": "workflow"
};



export default ReposCreatePagesSiteRequest;

