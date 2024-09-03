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
 * The GitCommitParentsInner model module.
 * @module model/GitCommitParentsInner
 * @version 1.1.4
 */
class GitCommitParentsInner {
    /**
     * Constructs a new <code>GitCommitParentsInner</code>.
     * @alias module:model/GitCommitParentsInner
     * @param sha {String} SHA for the commit
     * @param url {String} 
     * @param htmlUrl {String} 
     */
    constructor(sha, url, htmlUrl) { 
        
        GitCommitParentsInner.initialize(this, sha, url, htmlUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sha, url, htmlUrl) { 
        obj['sha'] = sha;
        obj['url'] = url;
        obj['html_url'] = htmlUrl;
    }

    /**
     * Constructs a <code>GitCommitParentsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitCommitParentsInner} obj Optional instance to populate.
     * @return {module:model/GitCommitParentsInner} The populated <code>GitCommitParentsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitCommitParentsInner();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitCommitParentsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitCommitParentsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitCommitParentsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sha'] && !(typeof data['sha'] === 'string' || data['sha'] instanceof String)) {
            throw new Error("Expected the field `sha` to be a primitive type in the JSON string but got " + data['sha']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }

        return true;
    }


}

GitCommitParentsInner.RequiredProperties = ["sha", "url", "html_url"];

/**
 * SHA for the commit
 * @member {String} sha
 */
GitCommitParentsInner.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
GitCommitParentsInner.prototype['url'] = undefined;

/**
 * @member {String} html_url
 */
GitCommitParentsInner.prototype['html_url'] = undefined;






export default GitCommitParentsInner;

