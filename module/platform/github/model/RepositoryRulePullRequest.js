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
import RepositoryRulePullRequestParameters from './RepositoryRulePullRequestParameters';

/**
 * The RepositoryRulePullRequest model module.
 * @module model/RepositoryRulePullRequest
 * @version 1.1.4
 */
class RepositoryRulePullRequest {
    /**
     * Constructs a new <code>RepositoryRulePullRequest</code>.
     * Require all commits be made to a non-target branch and submitted via a pull request before they can be merged.
     * @alias module:model/RepositoryRulePullRequest
     * @param type {module:model/RepositoryRulePullRequest.TypeEnum} 
     */
    constructor(type) { 
        
        RepositoryRulePullRequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RepositoryRulePullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRulePullRequest} obj Optional instance to populate.
     * @return {module:model/RepositoryRulePullRequest} The populated <code>RepositoryRulePullRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRulePullRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = RepositoryRulePullRequestParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRulePullRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRulePullRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRulePullRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `parameters`
        if (data['parameters']) { // data not null
          RepositoryRulePullRequestParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}

RepositoryRulePullRequest.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRulePullRequest.TypeEnum} type
 */
RepositoryRulePullRequest.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryRulePullRequestParameters} parameters
 */
RepositoryRulePullRequest.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRulePullRequest['TypeEnum'] = {

    /**
     * value: "pull_request"
     * @const
     */
    "pull_request": "pull_request"
};



export default RepositoryRulePullRequest;

