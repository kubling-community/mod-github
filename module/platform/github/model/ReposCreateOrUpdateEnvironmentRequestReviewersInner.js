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
import DeploymentReviewerType from './DeploymentReviewerType';

/**
 * The ReposCreateOrUpdateEnvironmentRequestReviewersInner model module.
 * @module model/ReposCreateOrUpdateEnvironmentRequestReviewersInner
 * @version 1.1.4
 */
class ReposCreateOrUpdateEnvironmentRequestReviewersInner {
    /**
     * Constructs a new <code>ReposCreateOrUpdateEnvironmentRequestReviewersInner</code>.
     * @alias module:model/ReposCreateOrUpdateEnvironmentRequestReviewersInner
     */
    constructor() { 
        
        ReposCreateOrUpdateEnvironmentRequestReviewersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReposCreateOrUpdateEnvironmentRequestReviewersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateOrUpdateEnvironmentRequestReviewersInner} obj Optional instance to populate.
     * @return {module:model/ReposCreateOrUpdateEnvironmentRequestReviewersInner} The populated <code>ReposCreateOrUpdateEnvironmentRequestReviewersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposCreateOrUpdateEnvironmentRequestReviewersInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = DeploymentReviewerType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReposCreateOrUpdateEnvironmentRequestReviewersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReposCreateOrUpdateEnvironmentRequestReviewersInner</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/DeploymentReviewerType} type
 */
ReposCreateOrUpdateEnvironmentRequestReviewersInner.prototype['type'] = undefined;

/**
 * The id of the user or team who can review the deployment
 * @member {Number} id
 */
ReposCreateOrUpdateEnvironmentRequestReviewersInner.prototype['id'] = undefined;






export default ReposCreateOrUpdateEnvironmentRequestReviewersInner;

