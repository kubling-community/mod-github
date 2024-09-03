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
 * The PagesHealthCheckAltDomain model module.
 * @module model/PagesHealthCheckAltDomain
 * @version 1.1.4
 */
class PagesHealthCheckAltDomain {
    /**
     * Constructs a new <code>PagesHealthCheckAltDomain</code>.
     * @alias module:model/PagesHealthCheckAltDomain
     */
    constructor() { 
        
        PagesHealthCheckAltDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PagesHealthCheckAltDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagesHealthCheckAltDomain} obj Optional instance to populate.
     * @return {module:model/PagesHealthCheckAltDomain} The populated <code>PagesHealthCheckAltDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PagesHealthCheckAltDomain();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('nameservers')) {
                obj['nameservers'] = ApiClient.convertToType(data['nameservers'], 'String');
            }
            if (data.hasOwnProperty('dns_resolves')) {
                obj['dns_resolves'] = ApiClient.convertToType(data['dns_resolves'], 'Boolean');
            }
            if (data.hasOwnProperty('is_proxied')) {
                obj['is_proxied'] = ApiClient.convertToType(data['is_proxied'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cloudflare_ip')) {
                obj['is_cloudflare_ip'] = ApiClient.convertToType(data['is_cloudflare_ip'], 'Boolean');
            }
            if (data.hasOwnProperty('is_fastly_ip')) {
                obj['is_fastly_ip'] = ApiClient.convertToType(data['is_fastly_ip'], 'Boolean');
            }
            if (data.hasOwnProperty('is_old_ip_address')) {
                obj['is_old_ip_address'] = ApiClient.convertToType(data['is_old_ip_address'], 'Boolean');
            }
            if (data.hasOwnProperty('is_a_record')) {
                obj['is_a_record'] = ApiClient.convertToType(data['is_a_record'], 'Boolean');
            }
            if (data.hasOwnProperty('has_cname_record')) {
                obj['has_cname_record'] = ApiClient.convertToType(data['has_cname_record'], 'Boolean');
            }
            if (data.hasOwnProperty('has_mx_records_present')) {
                obj['has_mx_records_present'] = ApiClient.convertToType(data['has_mx_records_present'], 'Boolean');
            }
            if (data.hasOwnProperty('is_valid_domain')) {
                obj['is_valid_domain'] = ApiClient.convertToType(data['is_valid_domain'], 'Boolean');
            }
            if (data.hasOwnProperty('is_apex_domain')) {
                obj['is_apex_domain'] = ApiClient.convertToType(data['is_apex_domain'], 'Boolean');
            }
            if (data.hasOwnProperty('should_be_a_record')) {
                obj['should_be_a_record'] = ApiClient.convertToType(data['should_be_a_record'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cname_to_github_user_domain')) {
                obj['is_cname_to_github_user_domain'] = ApiClient.convertToType(data['is_cname_to_github_user_domain'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cname_to_pages_dot_github_dot_com')) {
                obj['is_cname_to_pages_dot_github_dot_com'] = ApiClient.convertToType(data['is_cname_to_pages_dot_github_dot_com'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cname_to_fastly')) {
                obj['is_cname_to_fastly'] = ApiClient.convertToType(data['is_cname_to_fastly'], 'Boolean');
            }
            if (data.hasOwnProperty('is_pointed_to_github_pages_ip')) {
                obj['is_pointed_to_github_pages_ip'] = ApiClient.convertToType(data['is_pointed_to_github_pages_ip'], 'Boolean');
            }
            if (data.hasOwnProperty('is_non_github_pages_ip_present')) {
                obj['is_non_github_pages_ip_present'] = ApiClient.convertToType(data['is_non_github_pages_ip_present'], 'Boolean');
            }
            if (data.hasOwnProperty('is_pages_domain')) {
                obj['is_pages_domain'] = ApiClient.convertToType(data['is_pages_domain'], 'Boolean');
            }
            if (data.hasOwnProperty('is_served_by_pages')) {
                obj['is_served_by_pages'] = ApiClient.convertToType(data['is_served_by_pages'], 'Boolean');
            }
            if (data.hasOwnProperty('is_valid')) {
                obj['is_valid'] = ApiClient.convertToType(data['is_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('responds_to_https')) {
                obj['responds_to_https'] = ApiClient.convertToType(data['responds_to_https'], 'Boolean');
            }
            if (data.hasOwnProperty('enforces_https')) {
                obj['enforces_https'] = ApiClient.convertToType(data['enforces_https'], 'Boolean');
            }
            if (data.hasOwnProperty('https_error')) {
                obj['https_error'] = ApiClient.convertToType(data['https_error'], 'String');
            }
            if (data.hasOwnProperty('is_https_eligible')) {
                obj['is_https_eligible'] = ApiClient.convertToType(data['is_https_eligible'], 'Boolean');
            }
            if (data.hasOwnProperty('caa_error')) {
                obj['caa_error'] = ApiClient.convertToType(data['caa_error'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PagesHealthCheckAltDomain</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PagesHealthCheckAltDomain</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // ensure the json data is a string
        if (data['nameservers'] && !(typeof data['nameservers'] === 'string' || data['nameservers'] instanceof String)) {
            throw new Error("Expected the field `nameservers` to be a primitive type in the JSON string but got " + data['nameservers']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['https_error'] && !(typeof data['https_error'] === 'string' || data['https_error'] instanceof String)) {
            throw new Error("Expected the field `https_error` to be a primitive type in the JSON string but got " + data['https_error']);
        }
        // ensure the json data is a string
        if (data['caa_error'] && !(typeof data['caa_error'] === 'string' || data['caa_error'] instanceof String)) {
            throw new Error("Expected the field `caa_error` to be a primitive type in the JSON string but got " + data['caa_error']);
        }

        return true;
    }


}



/**
 * @member {String} host
 */
PagesHealthCheckAltDomain.prototype['host'] = undefined;

/**
 * @member {String} uri
 */
PagesHealthCheckAltDomain.prototype['uri'] = undefined;

/**
 * @member {String} nameservers
 */
PagesHealthCheckAltDomain.prototype['nameservers'] = undefined;

/**
 * @member {Boolean} dns_resolves
 */
PagesHealthCheckAltDomain.prototype['dns_resolves'] = undefined;

/**
 * @member {Boolean} is_proxied
 */
PagesHealthCheckAltDomain.prototype['is_proxied'] = undefined;

/**
 * @member {Boolean} is_cloudflare_ip
 */
PagesHealthCheckAltDomain.prototype['is_cloudflare_ip'] = undefined;

/**
 * @member {Boolean} is_fastly_ip
 */
PagesHealthCheckAltDomain.prototype['is_fastly_ip'] = undefined;

/**
 * @member {Boolean} is_old_ip_address
 */
PagesHealthCheckAltDomain.prototype['is_old_ip_address'] = undefined;

/**
 * @member {Boolean} is_a_record
 */
PagesHealthCheckAltDomain.prototype['is_a_record'] = undefined;

/**
 * @member {Boolean} has_cname_record
 */
PagesHealthCheckAltDomain.prototype['has_cname_record'] = undefined;

/**
 * @member {Boolean} has_mx_records_present
 */
PagesHealthCheckAltDomain.prototype['has_mx_records_present'] = undefined;

/**
 * @member {Boolean} is_valid_domain
 */
PagesHealthCheckAltDomain.prototype['is_valid_domain'] = undefined;

/**
 * @member {Boolean} is_apex_domain
 */
PagesHealthCheckAltDomain.prototype['is_apex_domain'] = undefined;

/**
 * @member {Boolean} should_be_a_record
 */
PagesHealthCheckAltDomain.prototype['should_be_a_record'] = undefined;

/**
 * @member {Boolean} is_cname_to_github_user_domain
 */
PagesHealthCheckAltDomain.prototype['is_cname_to_github_user_domain'] = undefined;

/**
 * @member {Boolean} is_cname_to_pages_dot_github_dot_com
 */
PagesHealthCheckAltDomain.prototype['is_cname_to_pages_dot_github_dot_com'] = undefined;

/**
 * @member {Boolean} is_cname_to_fastly
 */
PagesHealthCheckAltDomain.prototype['is_cname_to_fastly'] = undefined;

/**
 * @member {Boolean} is_pointed_to_github_pages_ip
 */
PagesHealthCheckAltDomain.prototype['is_pointed_to_github_pages_ip'] = undefined;

/**
 * @member {Boolean} is_non_github_pages_ip_present
 */
PagesHealthCheckAltDomain.prototype['is_non_github_pages_ip_present'] = undefined;

/**
 * @member {Boolean} is_pages_domain
 */
PagesHealthCheckAltDomain.prototype['is_pages_domain'] = undefined;

/**
 * @member {Boolean} is_served_by_pages
 */
PagesHealthCheckAltDomain.prototype['is_served_by_pages'] = undefined;

/**
 * @member {Boolean} is_valid
 */
PagesHealthCheckAltDomain.prototype['is_valid'] = undefined;

/**
 * @member {String} reason
 */
PagesHealthCheckAltDomain.prototype['reason'] = undefined;

/**
 * @member {Boolean} responds_to_https
 */
PagesHealthCheckAltDomain.prototype['responds_to_https'] = undefined;

/**
 * @member {Boolean} enforces_https
 */
PagesHealthCheckAltDomain.prototype['enforces_https'] = undefined;

/**
 * @member {String} https_error
 */
PagesHealthCheckAltDomain.prototype['https_error'] = undefined;

/**
 * @member {Boolean} is_https_eligible
 */
PagesHealthCheckAltDomain.prototype['is_https_eligible'] = undefined;

/**
 * @member {String} caa_error
 */
PagesHealthCheckAltDomain.prototype['caa_error'] = undefined;






export default PagesHealthCheckAltDomain;

