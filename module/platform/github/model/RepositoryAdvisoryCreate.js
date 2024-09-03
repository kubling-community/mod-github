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
import RepositoryAdvisoryCreateCreditsInner from './RepositoryAdvisoryCreateCreditsInner';
import RepositoryAdvisoryCreateVulnerabilitiesInner from './RepositoryAdvisoryCreateVulnerabilitiesInner';

/**
 * The RepositoryAdvisoryCreate model module.
 * @module model/RepositoryAdvisoryCreate
 * @version 1.1.4
 */
class RepositoryAdvisoryCreate {
    /**
     * Constructs a new <code>RepositoryAdvisoryCreate</code>.
     * @alias module:model/RepositoryAdvisoryCreate
     * @param summary {String} A short summary of the advisory.
     * @param description {String} A detailed description of what the advisory impacts.
     * @param vulnerabilities {Array.<module:model/RepositoryAdvisoryCreateVulnerabilitiesInner>} A product affected by the vulnerability detailed in a repository security advisory.
     */
    constructor(summary, description, vulnerabilities) { 
        
        RepositoryAdvisoryCreate.initialize(this, summary, description, vulnerabilities);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, summary, description, vulnerabilities) { 
        obj['summary'] = summary;
        obj['description'] = description;
        obj['vulnerabilities'] = vulnerabilities;
    }

    /**
     * Constructs a <code>RepositoryAdvisoryCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryAdvisoryCreate} obj Optional instance to populate.
     * @return {module:model/RepositoryAdvisoryCreate} The populated <code>RepositoryAdvisoryCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryAdvisoryCreate();

            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cve_id')) {
                obj['cve_id'] = ApiClient.convertToType(data['cve_id'], 'String');
            }
            if (data.hasOwnProperty('vulnerabilities')) {
                obj['vulnerabilities'] = ApiClient.convertToType(data['vulnerabilities'], [RepositoryAdvisoryCreateVulnerabilitiesInner]);
            }
            if (data.hasOwnProperty('cwe_ids')) {
                obj['cwe_ids'] = ApiClient.convertToType(data['cwe_ids'], ['String']);
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], [RepositoryAdvisoryCreateCreditsInner]);
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('cvss_vector_string')) {
                obj['cvss_vector_string'] = ApiClient.convertToType(data['cvss_vector_string'], 'String');
            }
            if (data.hasOwnProperty('start_private_fork')) {
                obj['start_private_fork'] = ApiClient.convertToType(data['start_private_fork'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryAdvisoryCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryAdvisoryCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryAdvisoryCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['cve_id'] && !(typeof data['cve_id'] === 'string' || data['cve_id'] instanceof String)) {
            throw new Error("Expected the field `cve_id` to be a primitive type in the JSON string but got " + data['cve_id']);
        }
        if (data['vulnerabilities']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vulnerabilities'])) {
                throw new Error("Expected the field `vulnerabilities` to be an array in the JSON data but got " + data['vulnerabilities']);
            }
            // validate the optional field `vulnerabilities` (array)
            for (const item of data['vulnerabilities']) {
                RepositoryAdvisoryCreateVulnerabilitiesInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cwe_ids'])) {
            throw new Error("Expected the field `cwe_ids` to be an array in the JSON data but got " + data['cwe_ids']);
        }
        if (data['credits']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credits'])) {
                throw new Error("Expected the field `credits` to be an array in the JSON data but got " + data['credits']);
            }
            // validate the optional field `credits` (array)
            for (const item of data['credits']) {
                RepositoryAdvisoryCreateCreditsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['cvss_vector_string'] && !(typeof data['cvss_vector_string'] === 'string' || data['cvss_vector_string'] instanceof String)) {
            throw new Error("Expected the field `cvss_vector_string` to be a primitive type in the JSON string but got " + data['cvss_vector_string']);
        }

        return true;
    }


}

RepositoryAdvisoryCreate.RequiredProperties = ["summary", "description", "vulnerabilities"];

/**
 * A short summary of the advisory.
 * @member {String} summary
 */
RepositoryAdvisoryCreate.prototype['summary'] = undefined;

/**
 * A detailed description of what the advisory impacts.
 * @member {String} description
 */
RepositoryAdvisoryCreate.prototype['description'] = undefined;

/**
 * The Common Vulnerabilities and Exposures (CVE) ID.
 * @member {String} cve_id
 */
RepositoryAdvisoryCreate.prototype['cve_id'] = undefined;

/**
 * A product affected by the vulnerability detailed in a repository security advisory.
 * @member {Array.<module:model/RepositoryAdvisoryCreateVulnerabilitiesInner>} vulnerabilities
 */
RepositoryAdvisoryCreate.prototype['vulnerabilities'] = undefined;

/**
 * A list of Common Weakness Enumeration (CWE) IDs.
 * @member {Array.<String>} cwe_ids
 */
RepositoryAdvisoryCreate.prototype['cwe_ids'] = undefined;

/**
 * A list of users receiving credit for their participation in the security advisory.
 * @member {Array.<module:model/RepositoryAdvisoryCreateCreditsInner>} credits
 */
RepositoryAdvisoryCreate.prototype['credits'] = undefined;

/**
 * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
 * @member {module:model/RepositoryAdvisoryCreate.SeverityEnum} severity
 */
RepositoryAdvisoryCreate.prototype['severity'] = undefined;

/**
 * The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.
 * @member {String} cvss_vector_string
 */
RepositoryAdvisoryCreate.prototype['cvss_vector_string'] = undefined;

/**
 * Whether to create a temporary private fork of the repository to collaborate on a fix.
 * @member {Boolean} start_private_fork
 * @default false
 */
RepositoryAdvisoryCreate.prototype['start_private_fork'] = false;





/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryAdvisoryCreate['SeverityEnum'] = {

    /**
     * value: "critical"
     * @const
     */
    "critical": "critical",

    /**
     * value: "high"
     * @const
     */
    "high": "high",

    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",

    /**
     * value: "low"
     * @const
     */
    "low": "low"
};



export default RepositoryAdvisoryCreate;

