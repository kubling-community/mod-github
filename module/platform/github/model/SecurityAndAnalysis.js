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
import SecurityAndAnalysisAdvancedSecurity from './SecurityAndAnalysisAdvancedSecurity';
import SecurityAndAnalysisDependabotSecurityUpdates from './SecurityAndAnalysisDependabotSecurityUpdates';

/**
 * The SecurityAndAnalysis model module.
 * @module model/SecurityAndAnalysis
 * @version 1.1.4
 */
class SecurityAndAnalysis {
    /**
     * Constructs a new <code>SecurityAndAnalysis</code>.
     * @alias module:model/SecurityAndAnalysis
     */
    constructor() { 
        
        SecurityAndAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecurityAndAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityAndAnalysis} obj Optional instance to populate.
     * @return {module:model/SecurityAndAnalysis} The populated <code>SecurityAndAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecurityAndAnalysis();

            if (data.hasOwnProperty('advanced_security')) {
                obj['advanced_security'] = SecurityAndAnalysisAdvancedSecurity.constructFromObject(data['advanced_security']);
            }
            if (data.hasOwnProperty('dependabot_security_updates')) {
                obj['dependabot_security_updates'] = SecurityAndAnalysisDependabotSecurityUpdates.constructFromObject(data['dependabot_security_updates']);
            }
            if (data.hasOwnProperty('secret_scanning')) {
                obj['secret_scanning'] = SecurityAndAnalysisAdvancedSecurity.constructFromObject(data['secret_scanning']);
            }
            if (data.hasOwnProperty('secret_scanning_push_protection')) {
                obj['secret_scanning_push_protection'] = SecurityAndAnalysisAdvancedSecurity.constructFromObject(data['secret_scanning_push_protection']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecurityAndAnalysis</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecurityAndAnalysis</code>.
     */
    static validateJSON(data) {
        // validate the optional field `advanced_security`
        if (data['advanced_security']) { // data not null
          SecurityAndAnalysisAdvancedSecurity.validateJSON(data['advanced_security']);
        }
        // validate the optional field `dependabot_security_updates`
        if (data['dependabot_security_updates']) { // data not null
          SecurityAndAnalysisDependabotSecurityUpdates.validateJSON(data['dependabot_security_updates']);
        }
        // validate the optional field `secret_scanning`
        if (data['secret_scanning']) { // data not null
          SecurityAndAnalysisAdvancedSecurity.validateJSON(data['secret_scanning']);
        }
        // validate the optional field `secret_scanning_push_protection`
        if (data['secret_scanning_push_protection']) { // data not null
          SecurityAndAnalysisAdvancedSecurity.validateJSON(data['secret_scanning_push_protection']);
        }

        return true;
    }


}



/**
 * @member {module:model/SecurityAndAnalysisAdvancedSecurity} advanced_security
 */
SecurityAndAnalysis.prototype['advanced_security'] = undefined;

/**
 * @member {module:model/SecurityAndAnalysisDependabotSecurityUpdates} dependabot_security_updates
 */
SecurityAndAnalysis.prototype['dependabot_security_updates'] = undefined;

/**
 * @member {module:model/SecurityAndAnalysisAdvancedSecurity} secret_scanning
 */
SecurityAndAnalysis.prototype['secret_scanning'] = undefined;

/**
 * @member {module:model/SecurityAndAnalysisAdvancedSecurity} secret_scanning_push_protection
 */
SecurityAndAnalysis.prototype['secret_scanning_push_protection'] = undefined;






export default SecurityAndAnalysis;

