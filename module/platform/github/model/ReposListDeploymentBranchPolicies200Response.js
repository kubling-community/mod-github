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
import DeploymentBranchPolicy from './DeploymentBranchPolicy';

/**
 * The ReposListDeploymentBranchPolicies200Response model module.
 * @module model/ReposListDeploymentBranchPolicies200Response
 * @version 1.1.4
 */
class ReposListDeploymentBranchPolicies200Response {
    /**
     * Constructs a new <code>ReposListDeploymentBranchPolicies200Response</code>.
     * @alias module:model/ReposListDeploymentBranchPolicies200Response
     * @param totalCount {Number} The number of deployment branch policies for the environment.
     * @param branchPolicies {Array.<module:model/DeploymentBranchPolicy>} 
     */
    constructor(totalCount, branchPolicies) { 
        
        ReposListDeploymentBranchPolicies200Response.initialize(this, totalCount, branchPolicies);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, branchPolicies) { 
        obj['total_count'] = totalCount;
        obj['branch_policies'] = branchPolicies;
    }

    /**
     * Constructs a <code>ReposListDeploymentBranchPolicies200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposListDeploymentBranchPolicies200Response} obj Optional instance to populate.
     * @return {module:model/ReposListDeploymentBranchPolicies200Response} The populated <code>ReposListDeploymentBranchPolicies200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposListDeploymentBranchPolicies200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('branch_policies')) {
                obj['branch_policies'] = ApiClient.convertToType(data['branch_policies'], [DeploymentBranchPolicy]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposListDeploymentBranchPolicies200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposListDeploymentBranchPolicies200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReposListDeploymentBranchPolicies200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['branch_policies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['branch_policies'])) {
                throw new Error("Expected the field `branch_policies` to be an array in the JSON data but got " + data['branch_policies']);
            }
            // validate the optional field `branch_policies` (array)
            for (const item of data['branch_policies']) {
                DeploymentBranchPolicy.validateJSON(item);
            };
        }

        return true;
    }


}

ReposListDeploymentBranchPolicies200Response.RequiredProperties = ["total_count", "branch_policies"];

/**
 * The number of deployment branch policies for the environment.
 * @member {Number} total_count
 */
ReposListDeploymentBranchPolicies200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/DeploymentBranchPolicy>} branch_policies
 */
ReposListDeploymentBranchPolicies200Response.prototype['branch_policies'] = undefined;






export default ReposListDeploymentBranchPolicies200Response;

