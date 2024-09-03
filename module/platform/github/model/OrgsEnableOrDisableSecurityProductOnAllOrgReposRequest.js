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
 * The OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest model module.
 * @module model/OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest
 * @version 1.1.4
 */
class OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest {
    /**
     * Constructs a new <code>OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest</code>.
     * @alias module:model/OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest
     */
    constructor() { 
        
        OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest} obj Optional instance to populate.
     * @return {module:model/OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest} The populated <code>OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest();

            if (data.hasOwnProperty('query_suite')) {
                obj['query_suite'] = ApiClient.convertToType(data['query_suite'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query_suite'] && !(typeof data['query_suite'] === 'string' || data['query_suite'] instanceof String)) {
            throw new Error("Expected the field `query_suite` to be a primitive type in the JSON string but got " + data['query_suite']);
        }

        return true;
    }


}



/**
 * CodeQL query suite to be used. If you specify the `query_suite` parameter, the default setup will be configured with this query suite only on all repositories that didn't have default setup already configured. It will not change the query suite on repositories that already have default setup configured. If you don't specify any `query_suite` in your request, the preferred query suite of the organization will be applied.
 * @member {module:model/OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest.QuerySuiteEnum} query_suite
 */
OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest.prototype['query_suite'] = undefined;





/**
 * Allowed values for the <code>query_suite</code> property.
 * @enum {String}
 * @readonly
 */
OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest['QuerySuiteEnum'] = {

    /**
     * value: "default"
     * @const
     */
    "default": "default",

    /**
     * value: "extended"
     * @const
     */
    "extended": "extended"
};



export default OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest;

