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
* Enum class SecretScanningAlertResolution.
* @enum {}
* @readonly
*/
export default class SecretScanningAlertResolution {
    
        /**
         * value: "false_positive"
         * @const
         */
        "false_positive" = "false_positive";

    
        /**
         * value: "wont_fix"
         * @const
         */
        "wont_fix" = "wont_fix";

    
        /**
         * value: "revoked"
         * @const
         */
        "revoked" = "revoked";

    
        /**
         * value: "used_in_tests"
         * @const
         */
        "used_in_tests" = "used_in_tests";

    

    /**
    * Returns a <code>SecretScanningAlertResolution</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SecretScanningAlertResolution} The enum <code>SecretScanningAlertResolution</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

