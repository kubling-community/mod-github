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
 * The CopilotCancelCopilotSeatAssignmentForUsersRequest model module.
 * @module model/CopilotCancelCopilotSeatAssignmentForUsersRequest
 * @version 1.1.4
 */
class CopilotCancelCopilotSeatAssignmentForUsersRequest {
    /**
     * Constructs a new <code>CopilotCancelCopilotSeatAssignmentForUsersRequest</code>.
     * @alias module:model/CopilotCancelCopilotSeatAssignmentForUsersRequest
     * @param selectedUsernames {Array.<String>} The usernames of the organization members for which to revoke access to GitHub Copilot.
     */
    constructor(selectedUsernames) { 
        
        CopilotCancelCopilotSeatAssignmentForUsersRequest.initialize(this, selectedUsernames);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, selectedUsernames) { 
        obj['selected_usernames'] = selectedUsernames;
    }

    /**
     * Constructs a <code>CopilotCancelCopilotSeatAssignmentForUsersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopilotCancelCopilotSeatAssignmentForUsersRequest} obj Optional instance to populate.
     * @return {module:model/CopilotCancelCopilotSeatAssignmentForUsersRequest} The populated <code>CopilotCancelCopilotSeatAssignmentForUsersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopilotCancelCopilotSeatAssignmentForUsersRequest();

            if (data.hasOwnProperty('selected_usernames')) {
                obj['selected_usernames'] = ApiClient.convertToType(data['selected_usernames'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopilotCancelCopilotSeatAssignmentForUsersRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopilotCancelCopilotSeatAssignmentForUsersRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CopilotCancelCopilotSeatAssignmentForUsersRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['selected_usernames'])) {
            throw new Error("Expected the field `selected_usernames` to be an array in the JSON data but got " + data['selected_usernames']);
        }

        return true;
    }


}

CopilotCancelCopilotSeatAssignmentForUsersRequest.RequiredProperties = ["selected_usernames"];

/**
 * The usernames of the organization members for which to revoke access to GitHub Copilot.
 * @member {Array.<String>} selected_usernames
 */
CopilotCancelCopilotSeatAssignmentForUsersRequest.prototype['selected_usernames'] = undefined;






export default CopilotCancelCopilotSeatAssignmentForUsersRequest;

