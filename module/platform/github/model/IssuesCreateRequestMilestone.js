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
 * The IssuesCreateRequestMilestone model module.
 * @module model/IssuesCreateRequestMilestone
 * @version 1.1.4
 */
class IssuesCreateRequestMilestone {
    /**
     * Constructs a new <code>IssuesCreateRequestMilestone</code>.
     * @alias module:model/IssuesCreateRequestMilestone
     * @param {(module:model/Number|module:model/String)} instance The actual instance to initialize IssuesCreateRequestMilestone.
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

        // The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._
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
            throw new Error("Multiple matches found constructing `IssuesCreateRequestMilestone` with oneOf schemas Number, String. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `IssuesCreateRequestMilestone` with oneOf schemas Number, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>IssuesCreateRequestMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesCreateRequestMilestone} obj Optional instance to populate.
     * @return {module:model/IssuesCreateRequestMilestone} The populated <code>IssuesCreateRequestMilestone</code> instance.
     */
    static constructFromObject(data, obj) {
        return new IssuesCreateRequestMilestone(data);
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
       this.actualInstance = IssuesCreateRequestMilestone.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of IssuesCreateRequestMilestone from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/IssuesCreateRequestMilestone} An instance of IssuesCreateRequestMilestone.
     */
    static fromJSON = function(json_string){
        return IssuesCreateRequestMilestone.constructFromObject(JSON.parse(json_string));
    }
}


IssuesCreateRequestMilestone.OneOf = ["Number", "String"];

export default IssuesCreateRequestMilestone;

