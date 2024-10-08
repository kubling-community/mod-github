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
 * The SecretScanningLocationPullRequestReview model module.
 * @module model/SecretScanningLocationPullRequestReview
 * @version 1.1.4
 */
class SecretScanningLocationPullRequestReview {
    /**
     * Constructs a new <code>SecretScanningLocationPullRequestReview</code>.
     * Represents a &#39;pull_request_review&#39; secret scanning location type. This location type shows that a secret was detected in a review on a pull request.
     * @alias module:model/SecretScanningLocationPullRequestReview
     * @param pullRequestReviewUrl {String} The API URL to get the pull request review where the secret was detected.
     */
    constructor(pullRequestReviewUrl) { 
        
        SecretScanningLocationPullRequestReview.initialize(this, pullRequestReviewUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pullRequestReviewUrl) { 
        obj['pull_request_review_url'] = pullRequestReviewUrl;
    }

    /**
     * Constructs a <code>SecretScanningLocationPullRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretScanningLocationPullRequestReview} obj Optional instance to populate.
     * @return {module:model/SecretScanningLocationPullRequestReview} The populated <code>SecretScanningLocationPullRequestReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretScanningLocationPullRequestReview();

            if (data.hasOwnProperty('pull_request_review_url')) {
                obj['pull_request_review_url'] = ApiClient.convertToType(data['pull_request_review_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretScanningLocationPullRequestReview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretScanningLocationPullRequestReview</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecretScanningLocationPullRequestReview.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pull_request_review_url'] && !(typeof data['pull_request_review_url'] === 'string' || data['pull_request_review_url'] instanceof String)) {
            throw new Error("Expected the field `pull_request_review_url` to be a primitive type in the JSON string but got " + data['pull_request_review_url']);
        }

        return true;
    }


}

SecretScanningLocationPullRequestReview.RequiredProperties = ["pull_request_review_url"];

/**
 * The API URL to get the pull request review where the secret was detected.
 * @member {String} pull_request_review_url
 */
SecretScanningLocationPullRequestReview.prototype['pull_request_review_url'] = undefined;






export default SecretScanningLocationPullRequestReview;

