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
import CodespaceMachine from './CodespaceMachine';

/**
 * The CodespacesRepoMachinesForAuthenticatedUser200Response model module.
 * @module model/CodespacesRepoMachinesForAuthenticatedUser200Response
 * @version 1.1.4
 */
class CodespacesRepoMachinesForAuthenticatedUser200Response {
    /**
     * Constructs a new <code>CodespacesRepoMachinesForAuthenticatedUser200Response</code>.
     * @alias module:model/CodespacesRepoMachinesForAuthenticatedUser200Response
     * @param totalCount {Number} 
     * @param machines {Array.<module:model/CodespaceMachine>} 
     */
    constructor(totalCount, machines) { 
        
        CodespacesRepoMachinesForAuthenticatedUser200Response.initialize(this, totalCount, machines);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, machines) { 
        obj['total_count'] = totalCount;
        obj['machines'] = machines;
    }

    /**
     * Constructs a <code>CodespacesRepoMachinesForAuthenticatedUser200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespacesRepoMachinesForAuthenticatedUser200Response} obj Optional instance to populate.
     * @return {module:model/CodespacesRepoMachinesForAuthenticatedUser200Response} The populated <code>CodespacesRepoMachinesForAuthenticatedUser200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespacesRepoMachinesForAuthenticatedUser200Response();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('machines')) {
                obj['machines'] = ApiClient.convertToType(data['machines'], [CodespaceMachine]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespacesRepoMachinesForAuthenticatedUser200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespacesRepoMachinesForAuthenticatedUser200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodespacesRepoMachinesForAuthenticatedUser200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['machines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['machines'])) {
                throw new Error("Expected the field `machines` to be an array in the JSON data but got " + data['machines']);
            }
            // validate the optional field `machines` (array)
            for (const item of data['machines']) {
                CodespaceMachine.validateJSON(item);
            };
        }

        return true;
    }


}

CodespacesRepoMachinesForAuthenticatedUser200Response.RequiredProperties = ["total_count", "machines"];

/**
 * @member {Number} total_count
 */
CodespacesRepoMachinesForAuthenticatedUser200Response.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/CodespaceMachine>} machines
 */
CodespacesRepoMachinesForAuthenticatedUser200Response.prototype['machines'] = undefined;






export default CodespacesRepoMachinesForAuthenticatedUser200Response;

