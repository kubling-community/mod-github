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
import SecurityAndAnalysis from './SecurityAndAnalysis';

/**
 * The WebhookSecurityAndAnalysisChangesFrom model module.
 * @module model/WebhookSecurityAndAnalysisChangesFrom
 * @version 1.1.4
 */
class WebhookSecurityAndAnalysisChangesFrom {
    /**
     * Constructs a new <code>WebhookSecurityAndAnalysisChangesFrom</code>.
     * @alias module:model/WebhookSecurityAndAnalysisChangesFrom
     */
    constructor() { 
        
        WebhookSecurityAndAnalysisChangesFrom.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookSecurityAndAnalysisChangesFrom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSecurityAndAnalysisChangesFrom} obj Optional instance to populate.
     * @return {module:model/WebhookSecurityAndAnalysisChangesFrom} The populated <code>WebhookSecurityAndAnalysisChangesFrom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSecurityAndAnalysisChangesFrom();

            if (data.hasOwnProperty('security_and_analysis')) {
                obj['security_and_analysis'] = SecurityAndAnalysis.constructFromObject(data['security_and_analysis']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookSecurityAndAnalysisChangesFrom</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookSecurityAndAnalysisChangesFrom</code>.
     */
    static validateJSON(data) {
        // validate the optional field `security_and_analysis`
        if (data['security_and_analysis']) { // data not null
          SecurityAndAnalysis.validateJSON(data['security_and_analysis']);
        }

        return true;
    }


}



/**
 * @member {module:model/SecurityAndAnalysis} security_and_analysis
 */
WebhookSecurityAndAnalysisChangesFrom.prototype['security_and_analysis'] = undefined;






export default WebhookSecurityAndAnalysisChangesFrom;

