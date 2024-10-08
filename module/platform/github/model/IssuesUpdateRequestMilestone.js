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
 * The IssuesUpdateRequestMilestone model module.
 * @module model/IssuesUpdateRequestMilestone
 * @version 1.1.4
 */
class IssuesUpdateRequestMilestone {
    /**
     * Constructs a new <code>IssuesUpdateRequestMilestone</code>.
     * @alias module:model/IssuesUpdateRequestMilestone
     * @param {(module:model/Number|module:model/String)} instance The actual instance to initialize IssuesUpdateRequestMilestone.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate string
            if (!(typeof instance === 'string')) {
                throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        // The `number` of the milestone to associate this issue with or use `null` to remove the current milestone. Only users with push access can set the milestone for issues. Without push access to the repository, milestone changes are silently dropped.
        try {
            // validate integer
            if (!(typeof instance === 'number' && instance % 1 === 0)) {
                throw new Error("Invalid value. Must be integer. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into Number
            errorMessages.push("Failed to construct Number: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `IssuesUpdateRequestMilestone` with oneOf schemas Number, String. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `IssuesUpdateRequestMilestone` with oneOf schemas Number, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>IssuesUpdateRequestMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesUpdateRequestMilestone} obj Optional instance to populate.
     * @return {module:model/IssuesUpdateRequestMilestone} The populated <code>IssuesUpdateRequestMilestone</code> instance.
     */
    static constructFromObject(data, obj) {
        return new IssuesUpdateRequestMilestone(data);
    }

    /**
     * Gets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @return {(module:model/Number|module:model/String)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @param {(module:model/Number|module:model/String)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = IssuesUpdateRequestMilestone.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of IssuesUpdateRequestMilestone from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/IssuesUpdateRequestMilestone} An instance of IssuesUpdateRequestMilestone.
     */
    static fromJSON = function(json_string){
        return IssuesUpdateRequestMilestone.constructFromObject(JSON.parse(json_string));
    }
}


IssuesUpdateRequestMilestone.OneOf = ["Number", "String"];

export default IssuesUpdateRequestMilestone;

