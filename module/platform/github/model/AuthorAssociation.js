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
* Enum class AuthorAssociation.
* @enum {}
* @readonly
*/
export default class AuthorAssociation {
    
        /**
         * value: "COLLABORATOR"
         * @const
         */
        "COLLABORATOR" = "COLLABORATOR";

    
        /**
         * value: "CONTRIBUTOR"
         * @const
         */
        "CONTRIBUTOR" = "CONTRIBUTOR";

    
        /**
         * value: "FIRST_TIMER"
         * @const
         */
        "FIRST_TIMER" = "FIRST_TIMER";

    
        /**
         * value: "FIRST_TIME_CONTRIBUTOR"
         * @const
         */
        "FIRST_TIME_CONTRIBUTOR" = "FIRST_TIME_CONTRIBUTOR";

    
        /**
         * value: "MANNEQUIN"
         * @const
         */
        "MANNEQUIN" = "MANNEQUIN";

    
        /**
         * value: "MEMBER"
         * @const
         */
        "MEMBER" = "MEMBER";

    
        /**
         * value: "NONE"
         * @const
         */
        "NONE" = "NONE";

    
        /**
         * value: "OWNER"
         * @const
         */
        "OWNER" = "OWNER";

    

    /**
    * Returns a <code>AuthorAssociation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AuthorAssociation} The enum <code>AuthorAssociation</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

