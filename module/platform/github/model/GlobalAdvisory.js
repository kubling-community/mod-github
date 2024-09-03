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
import GlobalAdvisoryCreditsInner from './GlobalAdvisoryCreditsInner';
import GlobalAdvisoryCvss from './GlobalAdvisoryCvss';
import GlobalAdvisoryCwesInner from './GlobalAdvisoryCwesInner';
import GlobalAdvisoryIdentifiersInner from './GlobalAdvisoryIdentifiersInner';
import Vulnerability from './Vulnerability';

/**
 * The GlobalAdvisory model module.
 * @module model/GlobalAdvisory
 * @version 1.1.4
 */
class GlobalAdvisory {
    /**
     * Constructs a new <code>GlobalAdvisory</code>.
     * A GitHub Security Advisory.
     * @alias module:model/GlobalAdvisory
     * @param ghsaId {String} The GitHub Security Advisory ID.
     * @param cveId {String} The Common Vulnerabilities and Exposures (CVE) ID.
     * @param url {String} The API URL for the advisory.
     * @param htmlUrl {String} The URL for the advisory.
     * @param repositoryAdvisoryUrl {String} The API URL for the repository advisory.
     * @param summary {String} A short summary of the advisory.
     * @param description {String} A detailed description of what the advisory entails.
     * @param type {module:model/GlobalAdvisory.TypeEnum} The type of advisory.
     * @param severity {module:model/GlobalAdvisory.SeverityEnum} The severity of the advisory.
     * @param sourceCodeLocation {String} The URL of the advisory's source code.
     * @param identifiers {Array.<module:model/GlobalAdvisoryIdentifiersInner>} 
     * @param references {Array.<String>} 
     * @param publishedAt {Date} The date and time of when the advisory was published, in ISO 8601 format.
     * @param updatedAt {Date} The date and time of when the advisory was last updated, in ISO 8601 format.
     * @param githubReviewedAt {Date} The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.
     * @param nvdPublishedAt {Date} The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. This field is only populated when the advisory is imported from the National Vulnerability Database.
     * @param withdrawnAt {Date} The date and time of when the advisory was withdrawn, in ISO 8601 format.
     * @param vulnerabilities {Array.<module:model/Vulnerability>} The products and respective version ranges affected by the advisory.
     * @param cvss {module:model/GlobalAdvisoryCvss} 
     * @param cwes {Array.<module:model/GlobalAdvisoryCwesInner>} 
     * @param credits {Array.<module:model/GlobalAdvisoryCreditsInner>} The users who contributed to the advisory.
     */
    constructor(ghsaId, cveId, url, htmlUrl, repositoryAdvisoryUrl, summary, description, type, severity, sourceCodeLocation, identifiers, references, publishedAt, updatedAt, githubReviewedAt, nvdPublishedAt, withdrawnAt, vulnerabilities, cvss, cwes, credits) { 
        
        GlobalAdvisory.initialize(this, ghsaId, cveId, url, htmlUrl, repositoryAdvisoryUrl, summary, description, type, severity, sourceCodeLocation, identifiers, references, publishedAt, updatedAt, githubReviewedAt, nvdPublishedAt, withdrawnAt, vulnerabilities, cvss, cwes, credits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ghsaId, cveId, url, htmlUrl, repositoryAdvisoryUrl, summary, description, type, severity, sourceCodeLocation, identifiers, references, publishedAt, updatedAt, githubReviewedAt, nvdPublishedAt, withdrawnAt, vulnerabilities, cvss, cwes, credits) { 
        obj['ghsa_id'] = ghsaId;
        obj['cve_id'] = cveId;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
        obj['repository_advisory_url'] = repositoryAdvisoryUrl;
        obj['summary'] = summary;
        obj['description'] = description;
        obj['type'] = type;
        obj['severity'] = severity;
        obj['source_code_location'] = sourceCodeLocation;
        obj['identifiers'] = identifiers;
        obj['references'] = references;
        obj['published_at'] = publishedAt;
        obj['updated_at'] = updatedAt;
        obj['github_reviewed_at'] = githubReviewedAt;
        obj['nvd_published_at'] = nvdPublishedAt;
        obj['withdrawn_at'] = withdrawnAt;
        obj['vulnerabilities'] = vulnerabilities;
        obj['cvss'] = cvss;
        obj['cwes'] = cwes;
        obj['credits'] = credits;
    }

    /**
     * Constructs a <code>GlobalAdvisory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalAdvisory} obj Optional instance to populate.
     * @return {module:model/GlobalAdvisory} The populated <code>GlobalAdvisory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalAdvisory();

            if (data.hasOwnProperty('ghsa_id')) {
                obj['ghsa_id'] = ApiClient.convertToType(data['ghsa_id'], 'String');
            }
            if (data.hasOwnProperty('cve_id')) {
                obj['cve_id'] = ApiClient.convertToType(data['cve_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('repository_advisory_url')) {
                obj['repository_advisory_url'] = ApiClient.convertToType(data['repository_advisory_url'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('source_code_location')) {
                obj['source_code_location'] = ApiClient.convertToType(data['source_code_location'], 'String');
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], [GlobalAdvisoryIdentifiersInner]);
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], ['String']);
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('github_reviewed_at')) {
                obj['github_reviewed_at'] = ApiClient.convertToType(data['github_reviewed_at'], 'Date');
            }
            if (data.hasOwnProperty('nvd_published_at')) {
                obj['nvd_published_at'] = ApiClient.convertToType(data['nvd_published_at'], 'Date');
            }
            if (data.hasOwnProperty('withdrawn_at')) {
                obj['withdrawn_at'] = ApiClient.convertToType(data['withdrawn_at'], 'Date');
            }
            if (data.hasOwnProperty('vulnerabilities')) {
                obj['vulnerabilities'] = ApiClient.convertToType(data['vulnerabilities'], [Vulnerability]);
            }
            if (data.hasOwnProperty('cvss')) {
                obj['cvss'] = GlobalAdvisoryCvss.constructFromObject(data['cvss']);
            }
            if (data.hasOwnProperty('cwes')) {
                obj['cwes'] = ApiClient.convertToType(data['cwes'], [GlobalAdvisoryCwesInner]);
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], [GlobalAdvisoryCreditsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalAdvisory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalAdvisory</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GlobalAdvisory.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ghsa_id'] && !(typeof data['ghsa_id'] === 'string' || data['ghsa_id'] instanceof String)) {
            throw new Error("Expected the field `ghsa_id` to be a primitive type in the JSON string but got " + data['ghsa_id']);
        }
        // ensure the json data is a string
        if (data['cve_id'] && !(typeof data['cve_id'] === 'string' || data['cve_id'] instanceof String)) {
            throw new Error("Expected the field `cve_id` to be a primitive type in the JSON string but got " + data['cve_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['repository_advisory_url'] && !(typeof data['repository_advisory_url'] === 'string' || data['repository_advisory_url'] instanceof String)) {
            throw new Error("Expected the field `repository_advisory_url` to be a primitive type in the JSON string but got " + data['repository_advisory_url']);
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
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['source_code_location'] && !(typeof data['source_code_location'] === 'string' || data['source_code_location'] instanceof String)) {
            throw new Error("Expected the field `source_code_location` to be a primitive type in the JSON string but got " + data['source_code_location']);
        }
        if (data['identifiers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['identifiers'])) {
                throw new Error("Expected the field `identifiers` to be an array in the JSON data but got " + data['identifiers']);
            }
            // validate the optional field `identifiers` (array)
            for (const item of data['identifiers']) {
                GlobalAdvisoryIdentifiersInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['references'])) {
            throw new Error("Expected the field `references` to be an array in the JSON data but got " + data['references']);
        }
        if (data['vulnerabilities']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vulnerabilities'])) {
                throw new Error("Expected the field `vulnerabilities` to be an array in the JSON data but got " + data['vulnerabilities']);
            }
            // validate the optional field `vulnerabilities` (array)
            for (const item of data['vulnerabilities']) {
                Vulnerability.validateJSON(item);
            };
        }
        // validate the optional field `cvss`
        if (data['cvss']) { // data not null
          GlobalAdvisoryCvss.validateJSON(data['cvss']);
        }
        if (data['cwes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cwes'])) {
                throw new Error("Expected the field `cwes` to be an array in the JSON data but got " + data['cwes']);
            }
            // validate the optional field `cwes` (array)
            for (const item of data['cwes']) {
                GlobalAdvisoryCwesInner.validateJSON(item);
            };
        }
        if (data['credits']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credits'])) {
                throw new Error("Expected the field `credits` to be an array in the JSON data but got " + data['credits']);
            }
            // validate the optional field `credits` (array)
            for (const item of data['credits']) {
                GlobalAdvisoryCreditsInner.validateJSON(item);
            };
        }

        return true;
    }


}

GlobalAdvisory.RequiredProperties = ["ghsa_id", "cve_id", "url", "html_url", "repository_advisory_url", "summary", "description", "type", "severity", "source_code_location", "identifiers", "references", "published_at", "updated_at", "github_reviewed_at", "nvd_published_at", "withdrawn_at", "vulnerabilities", "cvss", "cwes", "credits"];

/**
 * The GitHub Security Advisory ID.
 * @member {String} ghsa_id
 */
GlobalAdvisory.prototype['ghsa_id'] = undefined;

/**
 * The Common Vulnerabilities and Exposures (CVE) ID.
 * @member {String} cve_id
 */
GlobalAdvisory.prototype['cve_id'] = undefined;

/**
 * The API URL for the advisory.
 * @member {String} url
 */
GlobalAdvisory.prototype['url'] = undefined;

/**
 * The URL for the advisory.
 * @member {String} html_url
 */
GlobalAdvisory.prototype['html_url'] = undefined;

/**
 * The API URL for the repository advisory.
 * @member {String} repository_advisory_url
 */
GlobalAdvisory.prototype['repository_advisory_url'] = undefined;

/**
 * A short summary of the advisory.
 * @member {String} summary
 */
GlobalAdvisory.prototype['summary'] = undefined;

/**
 * A detailed description of what the advisory entails.
 * @member {String} description
 */
GlobalAdvisory.prototype['description'] = undefined;

/**
 * The type of advisory.
 * @member {module:model/GlobalAdvisory.TypeEnum} type
 */
GlobalAdvisory.prototype['type'] = undefined;

/**
 * The severity of the advisory.
 * @member {module:model/GlobalAdvisory.SeverityEnum} severity
 */
GlobalAdvisory.prototype['severity'] = undefined;

/**
 * The URL of the advisory's source code.
 * @member {String} source_code_location
 */
GlobalAdvisory.prototype['source_code_location'] = undefined;

/**
 * @member {Array.<module:model/GlobalAdvisoryIdentifiersInner>} identifiers
 */
GlobalAdvisory.prototype['identifiers'] = undefined;

/**
 * @member {Array.<String>} references
 */
GlobalAdvisory.prototype['references'] = undefined;

/**
 * The date and time of when the advisory was published, in ISO 8601 format.
 * @member {Date} published_at
 */
GlobalAdvisory.prototype['published_at'] = undefined;

/**
 * The date and time of when the advisory was last updated, in ISO 8601 format.
 * @member {Date} updated_at
 */
GlobalAdvisory.prototype['updated_at'] = undefined;

/**
 * The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.
 * @member {Date} github_reviewed_at
 */
GlobalAdvisory.prototype['github_reviewed_at'] = undefined;

/**
 * The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. This field is only populated when the advisory is imported from the National Vulnerability Database.
 * @member {Date} nvd_published_at
 */
GlobalAdvisory.prototype['nvd_published_at'] = undefined;

/**
 * The date and time of when the advisory was withdrawn, in ISO 8601 format.
 * @member {Date} withdrawn_at
 */
GlobalAdvisory.prototype['withdrawn_at'] = undefined;

/**
 * The products and respective version ranges affected by the advisory.
 * @member {Array.<module:model/Vulnerability>} vulnerabilities
 */
GlobalAdvisory.prototype['vulnerabilities'] = undefined;

/**
 * @member {module:model/GlobalAdvisoryCvss} cvss
 */
GlobalAdvisory.prototype['cvss'] = undefined;

/**
 * @member {Array.<module:model/GlobalAdvisoryCwesInner>} cwes
 */
GlobalAdvisory.prototype['cwes'] = undefined;

/**
 * The users who contributed to the advisory.
 * @member {Array.<module:model/GlobalAdvisoryCreditsInner>} credits
 */
GlobalAdvisory.prototype['credits'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GlobalAdvisory['TypeEnum'] = {

    /**
     * value: "reviewed"
     * @const
     */
    "reviewed": "reviewed",

    /**
     * value: "unreviewed"
     * @const
     */
    "unreviewed": "unreviewed",

    /**
     * value: "malware"
     * @const
     */
    "malware": "malware"
};


/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
GlobalAdvisory['SeverityEnum'] = {

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
    "low": "low",

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"
};



export default GlobalAdvisory;

