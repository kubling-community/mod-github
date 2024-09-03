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
import WebhooksSecurityAdvisoryCvss from './WebhooksSecurityAdvisoryCvss';
import WebhooksSecurityAdvisoryCwesInner from './WebhooksSecurityAdvisoryCwesInner';
import WebhooksSecurityAdvisoryIdentifiersInner from './WebhooksSecurityAdvisoryIdentifiersInner';
import WebhooksSecurityAdvisoryReferencesInner from './WebhooksSecurityAdvisoryReferencesInner';
import WebhooksSecurityAdvisoryVulnerabilitiesInner from './WebhooksSecurityAdvisoryVulnerabilitiesInner';

/**
 * The WebhookSecurityAdvisoryWithdrawnSecurityAdvisory model module.
 * @module model/WebhookSecurityAdvisoryWithdrawnSecurityAdvisory
 * @version 1.1.4
 */
class WebhookSecurityAdvisoryWithdrawnSecurityAdvisory {
    /**
     * Constructs a new <code>WebhookSecurityAdvisoryWithdrawnSecurityAdvisory</code>.
     * The details of the security advisory, including summary, description, and severity.
     * @alias module:model/WebhookSecurityAdvisoryWithdrawnSecurityAdvisory
     * @param cvss {module:model/WebhooksSecurityAdvisoryCvss} 
     * @param cwes {Array.<module:model/WebhooksSecurityAdvisoryCwesInner>} 
     * @param description {String} 
     * @param ghsaId {String} 
     * @param identifiers {Array.<module:model/WebhooksSecurityAdvisoryIdentifiersInner>} 
     * @param publishedAt {String} 
     * @param references {Array.<module:model/WebhooksSecurityAdvisoryReferencesInner>} 
     * @param severity {String} 
     * @param summary {String} 
     * @param updatedAt {String} 
     * @param vulnerabilities {Array.<module:model/WebhooksSecurityAdvisoryVulnerabilitiesInner>} 
     * @param withdrawnAt {String} 
     */
    constructor(cvss, cwes, description, ghsaId, identifiers, publishedAt, references, severity, summary, updatedAt, vulnerabilities, withdrawnAt) { 
        
        WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.initialize(this, cvss, cwes, description, ghsaId, identifiers, publishedAt, references, severity, summary, updatedAt, vulnerabilities, withdrawnAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cvss, cwes, description, ghsaId, identifiers, publishedAt, references, severity, summary, updatedAt, vulnerabilities, withdrawnAt) { 
        obj['cvss'] = cvss;
        obj['cwes'] = cwes;
        obj['description'] = description;
        obj['ghsa_id'] = ghsaId;
        obj['identifiers'] = identifiers;
        obj['published_at'] = publishedAt;
        obj['references'] = references;
        obj['severity'] = severity;
        obj['summary'] = summary;
        obj['updated_at'] = updatedAt;
        obj['vulnerabilities'] = vulnerabilities;
        obj['withdrawn_at'] = withdrawnAt;
    }

    /**
     * Constructs a <code>WebhookSecurityAdvisoryWithdrawnSecurityAdvisory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSecurityAdvisoryWithdrawnSecurityAdvisory} obj Optional instance to populate.
     * @return {module:model/WebhookSecurityAdvisoryWithdrawnSecurityAdvisory} The populated <code>WebhookSecurityAdvisoryWithdrawnSecurityAdvisory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSecurityAdvisoryWithdrawnSecurityAdvisory();

            if (data.hasOwnProperty('cvss')) {
                obj['cvss'] = WebhooksSecurityAdvisoryCvss.constructFromObject(data['cvss']);
            }
            if (data.hasOwnProperty('cwes')) {
                obj['cwes'] = ApiClient.convertToType(data['cwes'], [WebhooksSecurityAdvisoryCwesInner]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ghsa_id')) {
                obj['ghsa_id'] = ApiClient.convertToType(data['ghsa_id'], 'String');
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], [WebhooksSecurityAdvisoryIdentifiersInner]);
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], [WebhooksSecurityAdvisoryReferencesInner]);
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('vulnerabilities')) {
                obj['vulnerabilities'] = ApiClient.convertToType(data['vulnerabilities'], [WebhooksSecurityAdvisoryVulnerabilitiesInner]);
            }
            if (data.hasOwnProperty('withdrawn_at')) {
                obj['withdrawn_at'] = ApiClient.convertToType(data['withdrawn_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookSecurityAdvisoryWithdrawnSecurityAdvisory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookSecurityAdvisoryWithdrawnSecurityAdvisory</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cvss`
        if (data['cvss']) { // data not null
          WebhooksSecurityAdvisoryCvss.validateJSON(data['cvss']);
        }
        if (data['cwes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cwes'])) {
                throw new Error("Expected the field `cwes` to be an array in the JSON data but got " + data['cwes']);
            }
            // validate the optional field `cwes` (array)
            for (const item of data['cwes']) {
                WebhooksSecurityAdvisoryCwesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['ghsa_id'] && !(typeof data['ghsa_id'] === 'string' || data['ghsa_id'] instanceof String)) {
            throw new Error("Expected the field `ghsa_id` to be a primitive type in the JSON string but got " + data['ghsa_id']);
        }
        if (data['identifiers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['identifiers'])) {
                throw new Error("Expected the field `identifiers` to be an array in the JSON data but got " + data['identifiers']);
            }
            // validate the optional field `identifiers` (array)
            for (const item of data['identifiers']) {
                WebhooksSecurityAdvisoryIdentifiersInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['published_at'] && !(typeof data['published_at'] === 'string' || data['published_at'] instanceof String)) {
            throw new Error("Expected the field `published_at` to be a primitive type in the JSON string but got " + data['published_at']);
        }
        if (data['references']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['references'])) {
                throw new Error("Expected the field `references` to be an array in the JSON data but got " + data['references']);
            }
            // validate the optional field `references` (array)
            for (const item of data['references']) {
                WebhooksSecurityAdvisoryReferencesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        if (data['vulnerabilities']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vulnerabilities'])) {
                throw new Error("Expected the field `vulnerabilities` to be an array in the JSON data but got " + data['vulnerabilities']);
            }
            // validate the optional field `vulnerabilities` (array)
            for (const item of data['vulnerabilities']) {
                WebhooksSecurityAdvisoryVulnerabilitiesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['withdrawn_at'] && !(typeof data['withdrawn_at'] === 'string' || data['withdrawn_at'] instanceof String)) {
            throw new Error("Expected the field `withdrawn_at` to be a primitive type in the JSON string but got " + data['withdrawn_at']);
        }

        return true;
    }


}

WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.RequiredProperties = ["cvss", "cwes", "description", "ghsa_id", "identifiers", "published_at", "references", "severity", "summary", "updated_at", "vulnerabilities", "withdrawn_at"];

/**
 * @member {module:model/WebhooksSecurityAdvisoryCvss} cvss
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['cvss'] = undefined;

/**
 * @member {Array.<module:model/WebhooksSecurityAdvisoryCwesInner>} cwes
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['cwes'] = undefined;

/**
 * @member {String} description
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['description'] = undefined;

/**
 * @member {String} ghsa_id
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['ghsa_id'] = undefined;

/**
 * @member {Array.<module:model/WebhooksSecurityAdvisoryIdentifiersInner>} identifiers
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['identifiers'] = undefined;

/**
 * @member {String} published_at
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['published_at'] = undefined;

/**
 * @member {Array.<module:model/WebhooksSecurityAdvisoryReferencesInner>} references
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['references'] = undefined;

/**
 * @member {String} severity
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['severity'] = undefined;

/**
 * @member {String} summary
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['summary'] = undefined;

/**
 * @member {String} updated_at
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/WebhooksSecurityAdvisoryVulnerabilitiesInner>} vulnerabilities
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['vulnerabilities'] = undefined;

/**
 * @member {String} withdrawn_at
 */
WebhookSecurityAdvisoryWithdrawnSecurityAdvisory.prototype['withdrawn_at'] = undefined;






export default WebhookSecurityAdvisoryWithdrawnSecurityAdvisory;

