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
 * The RepositoryRuleRequiredDeploymentsParameters model module.
 * @module model/RepositoryRuleRequiredDeploymentsParameters
 * @version 1.1.4
 */
class RepositoryRuleRequiredDeploymentsParameters {
    /**
     * Constructs a new <code>RepositoryRuleRequiredDeploymentsParameters</code>.
     * @alias module:model/RepositoryRuleRequiredDeploymentsParameters
     * @param requiredDeploymentEnvironments {Array.<String>} The environments that must be successfully deployed to before branches can be merged.
     */
    constructor(requiredDeploymentEnvironments) { 
        
        RepositoryRuleRequiredDeploymentsParameters.initialize(this, requiredDeploymentEnvironments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requiredDeploymentEnvironments) { 
        obj['required_deployment_environments'] = requiredDeploymentEnvironments;
    }

    /**
     * Constructs a <code>RepositoryRuleRequiredDeploymentsParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleRequiredDeploymentsParameters} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleRequiredDeploymentsParameters} The populated <code>RepositoryRuleRequiredDeploymentsParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleRequiredDeploymentsParameters();

            if (data.hasOwnProperty('required_deployment_environments')) {
                obj['required_deployment_environments'] = ApiClient.convertToType(data['required_deployment_environments'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleRequiredDeploymentsParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleRequiredDeploymentsParameters</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleRequiredDeploymentsParameters.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['required_deployment_environments'])) {
            throw new Error("Expected the field `required_deployment_environments` to be an array in the JSON data but got " + data['required_deployment_environments']);
        }

        return true;
    }


}

RepositoryRuleRequiredDeploymentsParameters.RequiredProperties = ["required_deployment_environments"];

/**
 * The environments that must be successfully deployed to before branches can be merged.
 * @member {Array.<String>} required_deployment_environments
 */
RepositoryRuleRequiredDeploymentsParameters.prototype['required_deployment_environments'] = undefined;






export default RepositoryRuleRequiredDeploymentsParameters;

