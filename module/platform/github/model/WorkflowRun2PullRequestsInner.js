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
import CheckRunPullRequestBase from './CheckRunPullRequestBase';

/**
 * The WorkflowRun2PullRequestsInner model module.
 * @module model/WorkflowRun2PullRequestsInner
 * @version 1.1.4
 */
class WorkflowRun2PullRequestsInner {
    /**
     * Constructs a new <code>WorkflowRun2PullRequestsInner</code>.
     * @alias module:model/WorkflowRun2PullRequestsInner
     * @param base {module:model/CheckRunPullRequestBase} 
     * @param head {module:model/CheckRunPullRequestBase} 
     * @param id {Number} 
     * @param number {Number} 
     * @param url {String} 
     */
    constructor(base, head, id, number, url) { 
        
        WorkflowRun2PullRequestsInner.initialize(this, base, head, id, number, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, base, head, id, number, url) { 
        obj['base'] = base;
        obj['head'] = head;
        obj['id'] = id;
        obj['number'] = number;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WorkflowRun2PullRequestsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowRun2PullRequestsInner} obj Optional instance to populate.
     * @return {module:model/WorkflowRun2PullRequestsInner} The populated <code>WorkflowRun2PullRequestsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowRun2PullRequestsInner();

            if (data.hasOwnProperty('base')) {
                obj['base'] = CheckRunPullRequestBase.constructFromObject(data['base']);
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = CheckRunPullRequestBase.constructFromObject(data['head']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowRun2PullRequestsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowRun2PullRequestsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkflowRun2PullRequestsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `base`
        if (data['base']) { // data not null
          CheckRunPullRequestBase.validateJSON(data['base']);
        }
        // validate the optional field `head`
        if (data['head']) { // data not null
          CheckRunPullRequestBase.validateJSON(data['head']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WorkflowRun2PullRequestsInner.RequiredProperties = ["base", "head", "id", "number", "url"];

/**
 * @member {module:model/CheckRunPullRequestBase} base
 */
WorkflowRun2PullRequestsInner.prototype['base'] = undefined;

/**
 * @member {module:model/CheckRunPullRequestBase} head
 */
WorkflowRun2PullRequestsInner.prototype['head'] = undefined;

/**
 * @member {Number} id
 */
WorkflowRun2PullRequestsInner.prototype['id'] = undefined;

/**
 * @member {Number} number
 */
WorkflowRun2PullRequestsInner.prototype['number'] = undefined;

/**
 * @member {String} url
 */
WorkflowRun2PullRequestsInner.prototype['url'] = undefined;






export default WorkflowRun2PullRequestsInner;

