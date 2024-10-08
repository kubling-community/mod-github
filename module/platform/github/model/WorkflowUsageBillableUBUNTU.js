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
 * The WorkflowUsageBillableUBUNTU model module.
 * @module model/WorkflowUsageBillableUBUNTU
 * @version 1.1.4
 */
class WorkflowUsageBillableUBUNTU {
    /**
     * Constructs a new <code>WorkflowUsageBillableUBUNTU</code>.
     * @alias module:model/WorkflowUsageBillableUBUNTU
     */
    constructor() { 
        
        WorkflowUsageBillableUBUNTU.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowUsageBillableUBUNTU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUsageBillableUBUNTU} obj Optional instance to populate.
     * @return {module:model/WorkflowUsageBillableUBUNTU} The populated <code>WorkflowUsageBillableUBUNTU</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowUsageBillableUBUNTU();

            if (data.hasOwnProperty('total_ms')) {
                obj['total_ms'] = ApiClient.convertToType(data['total_ms'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowUsageBillableUBUNTU</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowUsageBillableUBUNTU</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} total_ms
 */
WorkflowUsageBillableUBUNTU.prototype['total_ms'] = undefined;






export default WorkflowUsageBillableUBUNTU;

