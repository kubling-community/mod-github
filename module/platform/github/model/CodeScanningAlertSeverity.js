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
* Enum class CodeScanningAlertSeverity.
* @enum {}
* @readonly
*/
export default class CodeScanningAlertSeverity {
    
        /**
         * value: "critical"
         * @const
         */
        "critical" = "critical";

    
        /**
         * value: "high"
         * @const
         */
        "high" = "high";

    
        /**
         * value: "medium"
         * @const
         */
        "medium" = "medium";

    
        /**
         * value: "low"
         * @const
         */
        "low" = "low";

    
        /**
         * value: "warning"
         * @const
         */
        "warning" = "warning";

    
        /**
         * value: "note"
         * @const
         */
        "note" = "note";

    
        /**
         * value: "error"
         * @const
         */
        "error" = "error";

    

    /**
    * Returns a <code>CodeScanningAlertSeverity</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CodeScanningAlertSeverity} The enum <code>CodeScanningAlertSeverity</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

