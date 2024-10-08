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
* Enum class CodeScanningVariantAnalysisStatus.
* @enum {}
* @readonly
*/
export default class CodeScanningVariantAnalysisStatus {
    
        /**
         * value: "pending"
         * @const
         */
        "pending" = "pending";

    
        /**
         * value: "in_progress"
         * @const
         */
        "in_progress" = "in_progress";

    
        /**
         * value: "succeeded"
         * @const
         */
        "succeeded" = "succeeded";

    
        /**
         * value: "failed"
         * @const
         */
        "failed" = "failed";

    
        /**
         * value: "canceled"
         * @const
         */
        "canceled" = "canceled";

    
        /**
         * value: "timed_out"
         * @const
         */
        "timed_out" = "timed_out";

    

    /**
    * Returns a <code>CodeScanningVariantAnalysisStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CodeScanningVariantAnalysisStatus} The enum <code>CodeScanningVariantAnalysisStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

