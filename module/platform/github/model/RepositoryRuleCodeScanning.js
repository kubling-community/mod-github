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
import RepositoryRuleCodeScanningParameters from './RepositoryRuleCodeScanningParameters';

/**
 * The RepositoryRuleCodeScanning model module.
 * @module model/RepositoryRuleCodeScanning
 * @version 1.1.4
 */
class RepositoryRuleCodeScanning {
    /**
     * Constructs a new <code>RepositoryRuleCodeScanning</code>.
     * Choose which tools must provide code scanning results before the reference is updated. When configured, code scanning must be enabled and have results for both the commit and the reference being updated.
     * @alias module:model/RepositoryRuleCodeScanning
     * @param type {module:model/RepositoryRuleCodeScanning.TypeEnum} 
     */
    constructor(type) { 
        
        RepositoryRuleCodeScanning.initialize(this, type);
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
     * Constructs a <code>RepositoryRuleCodeScanning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryRuleCodeScanning} obj Optional instance to populate.
     * @return {module:model/RepositoryRuleCodeScanning} The populated <code>RepositoryRuleCodeScanning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryRuleCodeScanning();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = RepositoryRuleCodeScanningParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RepositoryRuleCodeScanning</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RepositoryRuleCodeScanning</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RepositoryRuleCodeScanning.RequiredProperties) {
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
          RepositoryRuleCodeScanningParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}

RepositoryRuleCodeScanning.RequiredProperties = ["type"];

/**
 * @member {module:model/RepositoryRuleCodeScanning.TypeEnum} type
 */
RepositoryRuleCodeScanning.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryRuleCodeScanningParameters} parameters
 */
RepositoryRuleCodeScanning.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryRuleCodeScanning['TypeEnum'] = {

    /**
     * value: "code_scanning"
     * @const
     */
    "code_scanning": "code_scanning"
};



export default RepositoryRuleCodeScanning;

