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
import RepositoryRuleRequiredDeploymentsParameters from './RepositoryRuleRequiredDeploymentsParameters';

/**
 * The RepositoryRuleRequiredDeployments model module.
 * @module model/RepositoryRuleRequiredDeployments
 * @version 1.1.4
 */
class RepositoryRuleRequiredDeployments {
    /**
     * Constructs a new <code>RepositoryRuleRequiredDeployments</code>.
     * Choose which environments must be successfully deployed to before refs can be pushed into a ref that matches this rule.
     * @alias module:model/RepositoryRuleRequiredDeployments
     * @param type {module:model/RepositoryRuleRequiredDeployments.TypeEnum} 
     */
    constructor(type) { 
        
        RepositoryRuleRequiredDeployments.initialize(this, type);
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
     * Constructs a <code>RepositoryRuleRequiredDeployments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleRequiredDeployments} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleRequiredDeployments} The populated <code>RepositoryRuleRequiredDeployments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleRequiredDeployments();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = RepositoryRuleRequiredDeploymentsParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleRequiredDeployments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleRequiredDeployments</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleRequiredDeployments.RequiredProperties) {
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
          RepositoryRuleRequiredDeploymentsParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}

RepositoryRuleRequiredDeployments.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRuleRequiredDeployments.TypeEnum} type
 */
RepositoryRuleRequiredDeployments.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryRuleRequiredDeploymentsParameters} parameters
 */
RepositoryRuleRequiredDeployments.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleRequiredDeployments['TypeEnum'] = {

    /**
     * value: "required_deployments"
     * @const
     */
    "required_deployments": "required_deployments"
};



export default RepositoryRuleRequiredDeployments;

