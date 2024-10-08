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
 * The DeploymentBranchPolicySettings model module.
 * @module model/DeploymentBranchPolicySettings
 * @version 1.1.4
 */
class DeploymentBranchPolicySettings {
    /**
     * Constructs a new <code>DeploymentBranchPolicySettings</code>.
     * The type of deployment branch policy for this environment. To allow all branches to deploy, set to &#x60;null&#x60;.
     * @alias module:model/DeploymentBranchPolicySettings
     * @param protectedBranches {Boolean} Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`.
     * @param customBranchPolicies {Boolean} Whether only branches that match the specified name patterns can deploy to this environment.  If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`.
     */
    constructor(protectedBranches, customBranchPolicies) { 
        
        DeploymentBranchPolicySettings.initialize(this, protectedBranches, customBranchPolicies);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, protectedBranches, customBranchPolicies) { 
        obj['protected_branches'] = protectedBranches;
        obj['custom_branch_policies'] = customBranchPolicies;
    }

    /**
     * Constructs a <code>DeploymentBranchPolicySettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentBranchPolicySettings} obj Optional instance to populate.
     * @return {module:model/DeploymentBranchPolicySettings} The populated <code>DeploymentBranchPolicySettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentBranchPolicySettings();

            if (data.hasOwnProperty('protected_branches')) {
                obj['protected_branches'] = ApiClient.convertToType(data['protected_branches'], 'Boolean');
            }
            if (data.hasOwnProperty('custom_branch_policies')) {
                obj['custom_branch_policies'] = ApiClient.convertToType(data['custom_branch_policies'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentBranchPolicySettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentBranchPolicySettings</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeploymentBranchPolicySettings.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DeploymentBranchPolicySettings.RequiredProperties = ["protected_branches", "custom_branch_policies"];

/**
 * Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`.
 * @member {Boolean} protected_branches
 */
DeploymentBranchPolicySettings.prototype['protected_branches'] = undefined;

/**
 * Whether only branches that match the specified name patterns can deploy to this environment.  If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`.
 * @member {Boolean} custom_branch_policies
 */
DeploymentBranchPolicySettings.prototype['custom_branch_policies'] = undefined;






export default DeploymentBranchPolicySettings;

