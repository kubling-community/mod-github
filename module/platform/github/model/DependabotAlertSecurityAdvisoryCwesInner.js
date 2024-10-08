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
 * The DependabotAlertSecurityAdvisoryCwesInner model module.
 * @module model/DependabotAlertSecurityAdvisoryCwesInner
 * @version 1.1.4
 */
class DependabotAlertSecurityAdvisoryCwesInner {
    /**
     * Constructs a new <code>DependabotAlertSecurityAdvisoryCwesInner</code>.
     * A CWE weakness assigned to the advisory.
     * @alias module:model/DependabotAlertSecurityAdvisoryCwesInner
     * @param cweId {String} The unique CWE ID.
     * @param name {String} The short, plain text name of the CWE.
     */
    constructor(cweId, name) { 
        
        DependabotAlertSecurityAdvisoryCwesInner.initialize(this, cweId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cweId, name) { 
        obj['cwe_id'] = cweId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DependabotAlertSecurityAdvisoryCwesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependabotAlertSecurityAdvisoryCwesInner} obj Optional instance to populate.
     * @return {module:model/DependabotAlertSecurityAdvisoryCwesInner} The populated <code>DependabotAlertSecurityAdvisoryCwesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependabotAlertSecurityAdvisoryCwesInner();

            if (data.hasOwnProperty('cwe_id')) {
                obj['cwe_id'] = ApiClient.convertToType(data['cwe_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DependabotAlertSecurityAdvisoryCwesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DependabotAlertSecurityAdvisoryCwesInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DependabotAlertSecurityAdvisoryCwesInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cwe_id'] && !(typeof data['cwe_id'] === 'string' || data['cwe_id'] instanceof String)) {
            throw new Error("Expected the field `cwe_id` to be a primitive type in the JSON string but got " + data['cwe_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

DependabotAlertSecurityAdvisoryCwesInner.RequiredProperties = ["cwe_id", "name"];

/**
 * The unique CWE ID.
 * @member {String} cwe_id
 */
DependabotAlertSecurityAdvisoryCwesInner.prototype['cwe_id'] = undefined;

/**
 * The short, plain text name of the CWE.
 * @member {String} name
 */
DependabotAlertSecurityAdvisoryCwesInner.prototype['name'] = undefined;






export default DependabotAlertSecurityAdvisoryCwesInner;

