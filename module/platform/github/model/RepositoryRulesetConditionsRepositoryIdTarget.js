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
import RepositoryRulesetConditionsRepositoryIdTargetRepositoryId from './RepositoryRulesetConditionsRepositoryIdTargetRepositoryId';

/**
 * The RepositoryRulesetConditionsRepositoryIdTarget model module.
 * @module model/RepositoryRulesetConditionsRepositoryIdTarget
 * @version 1.1.4
 */
class RepositoryRulesetConditionsRepositoryIdTarget {
    /**
     * Constructs a new <code>RepositoryRulesetConditionsRepositoryIdTarget</code>.
     * Parameters for a repository ID condition
     * @alias module:model/RepositoryRulesetConditionsRepositoryIdTarget
     * @param repositoryId {module:model/RepositoryRulesetConditionsRepositoryIdTargetRepositoryId} 
     */
    constructor(repositoryId) { 
        
        RepositoryRulesetConditionsRepositoryIdTarget.initialize(this, repositoryId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryId) { 
        obj['repository_id'] = repositoryId;
    }

    /**
     * Constructs a <code>RepositoryRulesetConditionsRepositoryIdTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRulesetConditionsRepositoryIdTarget} obj Optional instance to populate.
     * @return {module:model/RepositoryRulesetConditionsRepositoryIdTarget} The populated <code>RepositoryRulesetConditionsRepositoryIdTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRulesetConditionsRepositoryIdTarget();

            if (data.hasOwnProperty('repository_id')) {
                obj['repository_id'] = RepositoryRulesetConditionsRepositoryIdTargetRepositoryId.constructFromObject(data['repository_id']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRulesetConditionsRepositoryIdTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRulesetConditionsRepositoryIdTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRulesetConditionsRepositoryIdTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `repository_id`
        if (data['repository_id']) { // data not null
          RepositoryRulesetConditionsRepositoryIdTargetRepositoryId.validateJSON(data['repository_id']);
        }

        return true;
    }


}

RepositoryRulesetConditionsRepositoryIdTarget.RequiredProperties = ["repository_id"];

/**
 * @member {module:model/RepositoryRulesetConditionsRepositoryIdTargetRepositoryId} repository_id
 */
RepositoryRulesetConditionsRepositoryIdTarget.prototype['repository_id'] = undefined;






export default RepositoryRulesetConditionsRepositoryIdTarget;

