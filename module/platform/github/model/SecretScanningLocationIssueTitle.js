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
 * The SecretScanningLocationIssueTitle model module.
 * @module model/SecretScanningLocationIssueTitle
 * @version 1.1.4
 */
class SecretScanningLocationIssueTitle {
    /**
     * Constructs a new <code>SecretScanningLocationIssueTitle</code>.
     * Represents an &#39;issue_title&#39; secret scanning location type. This location type shows that a secret was detected in the title of an issue.
     * @alias module:model/SecretScanningLocationIssueTitle
     * @param issueTitleUrl {String} The API URL to get the issue where the secret was detected.
     */
    constructor(issueTitleUrl) { 
        
        SecretScanningLocationIssueTitle.initialize(this, issueTitleUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTitleUrl) { 
        obj['issue_title_url'] = issueTitleUrl;
    }

    /**
     * Constructs a <code>SecretScanningLocationIssueTitle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretScanningLocationIssueTitle} obj Optional instance to populate.
     * @return {module:model/SecretScanningLocationIssueTitle} The populated <code>SecretScanningLocationIssueTitle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretScanningLocationIssueTitle();

            if (data.hasOwnProperty('issue_title_url')) {
                obj['issue_title_url'] = ApiClient.convertToType(data['issue_title_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretScanningLocationIssueTitle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretScanningLocationIssueTitle</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecretScanningLocationIssueTitle.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['issue_title_url'] && !(typeof data['issue_title_url'] === 'string' || data['issue_title_url'] instanceof String)) {
            throw new Error("Expected the field `issue_title_url` to be a primitive type in the JSON string but got " + data['issue_title_url']);
        }

        return true;
    }


}

SecretScanningLocationIssueTitle.RequiredProperties = ["issue_title_url"];

/**
 * The API URL to get the issue where the secret was detected.
 * @member {String} issue_title_url
 */
SecretScanningLocationIssueTitle.prototype['issue_title_url'] = undefined;






export default SecretScanningLocationIssueTitle;

