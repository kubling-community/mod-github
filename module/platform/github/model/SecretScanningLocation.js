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
import SecretScanningLocationDetails from './SecretScanningLocationDetails';

/**
 * The SecretScanningLocation model module.
 * @module model/SecretScanningLocation
 * @version 1.1.4
 */
class SecretScanningLocation {
    /**
     * Constructs a new <code>SecretScanningLocation</code>.
     * @alias module:model/SecretScanningLocation
     */
    constructor() { 
        
        SecretScanningLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecretScanningLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretScanningLocation} obj Optional instance to populate.
     * @return {module:model/SecretScanningLocation} The populated <code>SecretScanningLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretScanningLocation();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = SecretScanningLocationDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretScanningLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretScanningLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `details`
        if (data['details']) { // data not null
          SecretScanningLocationDetails.validateJSON(data['details']);
        }

        return true;
    }


}



/**
 * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues, pull requests, discussions), this field identifies the type of resource where the secret was found.
 * @member {module:model/SecretScanningLocation.TypeEnum} type
 */
SecretScanningLocation.prototype['type'] = undefined;

/**
 * @member {module:model/SecretScanningLocationDetails} details
 */
SecretScanningLocation.prototype['details'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SecretScanningLocation['TypeEnum'] = {

    /**
     * value: "commit"
     * @const
     */
    "commit": "commit",

    /**
     * value: "wiki_commit"
     * @const
     */
    "wiki_commit": "wiki_commit",

    /**
     * value: "issue_title"
     * @const
     */
    "issue_title": "issue_title",

    /**
     * value: "issue_body"
     * @const
     */
    "issue_body": "issue_body",

    /**
     * value: "issue_comment"
     * @const
     */
    "issue_comment": "issue_comment",

    /**
     * value: "discussion_title"
     * @const
     */
    "discussion_title": "discussion_title",

    /**
     * value: "discussion_body"
     * @const
     */
    "discussion_body": "discussion_body",

    /**
     * value: "discussion_comment"
     * @const
     */
    "discussion_comment": "discussion_comment",

    /**
     * value: "pull_request_title"
     * @const
     */
    "pull_request_title": "pull_request_title",

    /**
     * value: "pull_request_body"
     * @const
     */
    "pull_request_body": "pull_request_body",

    /**
     * value: "pull_request_comment"
     * @const
     */
    "pull_request_comment": "pull_request_comment",

    /**
     * value: "pull_request_review"
     * @const
     */
    "pull_request_review": "pull_request_review",

    /**
     * value: "pull_request_review_comment"
     * @const
     */
    "pull_request_review_comment": "pull_request_review_comment"
};



export default SecretScanningLocation;

