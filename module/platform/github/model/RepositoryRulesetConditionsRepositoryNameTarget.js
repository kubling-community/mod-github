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
import RepositoryRulesetConditionsRepositoryNameTargetRepositoryName from './RepositoryRulesetConditionsRepositoryNameTargetRepositoryName';

/**
 * The RepositoryRulesetConditionsRepositoryNameTarget model module.
 * @module model/RepositoryRulesetConditionsRepositoryNameTarget
 * @version 1.1.4
 */
class RepositoryRulesetConditionsRepositoryNameTarget {
    /**
     * Constructs a new <code>RepositoryRulesetConditionsRepositoryNameTarget</code>.
     * Parameters for a repository name condition
     * @alias module:model/RepositoryRulesetConditionsRepositoryNameTarget
     * @param repositoryName {module:model/RepositoryRulesetConditionsRepositoryNameTargetRepositoryName} 
     */
    constructor(repositoryName) { 
        
        RepositoryRulesetConditionsRepositoryNameTarget.initialize(this, repositoryName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryName) { 
        obj['repository_name'] = repositoryName;
    }

    /**
     * Constructs a <code>RepositoryRulesetConditionsRepositoryNameTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRulesetConditionsRepositoryNameTarget} obj Optional instance to populate.
     * @return {module:model/RepositoryRulesetConditionsRepositoryNameTarget} The populated <code>RepositoryRulesetConditionsRepositoryNameTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRulesetConditionsRepositoryNameTarget();

            if (data.hasOwnProperty('repository_name')) {
                obj['repository_name'] = RepositoryRulesetConditionsRepositoryNameTargetRepositoryName.constructFromObject(data['repository_name']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRulesetConditionsRepositoryNameTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRulesetConditionsRepositoryNameTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRulesetConditionsRepositoryNameTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `repository_name`
        if (data['repository_name']) { // data not null
          RepositoryRulesetConditionsRepositoryNameTargetRepositoryName.validateJSON(data['repository_name']);
        }

        return true;
    }


}

RepositoryRulesetConditionsRepositoryNameTarget.RequiredProperties = ["repository_name"];

/**
 * @member {module:model/RepositoryRulesetConditionsRepositoryNameTargetRepositoryName} repository_name
 */
RepositoryRulesetConditionsRepositoryNameTarget.prototype['repository_name'] = undefined;






export default RepositoryRulesetConditionsRepositoryNameTarget;

