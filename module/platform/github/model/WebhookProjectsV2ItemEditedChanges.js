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
import WebhookMemberEditedChangesPermission from './WebhookMemberEditedChangesPermission';
import WebhookProjectsV2ItemEditedChangesOneOf from './WebhookProjectsV2ItemEditedChangesOneOf';
import WebhookProjectsV2ItemEditedChangesOneOf1 from './WebhookProjectsV2ItemEditedChangesOneOf1';
import WebhookProjectsV2ItemEditedChangesOneOfFieldValue from './WebhookProjectsV2ItemEditedChangesOneOfFieldValue';

/**
 * The WebhookProjectsV2ItemEditedChanges model module.
 * @module model/WebhookProjectsV2ItemEditedChanges
 * @version 1.1.4
 */
class WebhookProjectsV2ItemEditedChanges {
    /**
     * Constructs a new <code>WebhookProjectsV2ItemEditedChanges</code>.
     * @alias module:model/WebhookProjectsV2ItemEditedChanges
     * @param {(module:model/WebhookProjectsV2ItemEditedChangesOneOf|module:model/WebhookProjectsV2ItemEditedChangesOneOf1)} instance The actual instance to initialize WebhookProjectsV2ItemEditedChanges.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "WebhookProjectsV2ItemEditedChangesOneOf") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WebhookProjectsV2ItemEditedChangesOneOf.validateJSON(instance); // throw an exception if no match
                // create WebhookProjectsV2ItemEditedChangesOneOf from JS object
                this.actualInstance = WebhookProjectsV2ItemEditedChangesOneOf.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WebhookProjectsV2ItemEditedChangesOneOf
            errorMessages.push("Failed to construct WebhookProjectsV2ItemEditedChangesOneOf: " + err)
        }

        try {
            if (typeof instance === "WebhookProjectsV2ItemEditedChangesOneOf1") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WebhookProjectsV2ItemEditedChangesOneOf1.validateJSON(instance); // throw an exception if no match
                // create WebhookProjectsV2ItemEditedChangesOneOf1 from JS object
                this.actualInstance = WebhookProjectsV2ItemEditedChangesOneOf1.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WebhookProjectsV2ItemEditedChangesOneOf1
            errorMessages.push("Failed to construct WebhookProjectsV2ItemEditedChangesOneOf1: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `WebhookProjectsV2ItemEditedChanges` with oneOf schemas WebhookProjectsV2ItemEditedChangesOneOf, WebhookProjectsV2ItemEditedChangesOneOf1. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `WebhookProjectsV2ItemEditedChanges` with oneOf schemas WebhookProjectsV2ItemEditedChangesOneOf, WebhookProjectsV2ItemEditedChangesOneOf1. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>WebhookProjectsV2ItemEditedChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjectsV2ItemEditedChanges} obj Optional instance to populate.
     * @return {module:model/WebhookProjectsV2ItemEditedChanges} The populated <code>WebhookProjectsV2ItemEditedChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        return new WebhookProjectsV2ItemEditedChanges(data);
    }

    /**
     * Gets the actual instance, which can be <code>WebhookProjectsV2ItemEditedChangesOneOf</code>, <code>WebhookProjectsV2ItemEditedChangesOneOf1</code>.
     * @return {(module:model/WebhookProjectsV2ItemEditedChangesOneOf|module:model/WebhookProjectsV2ItemEditedChangesOneOf1)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>WebhookProjectsV2ItemEditedChangesOneOf</code>, <code>WebhookProjectsV2ItemEditedChangesOneOf1</code>.
     * @param {(module:model/WebhookProjectsV2ItemEditedChangesOneOf|module:model/WebhookProjectsV2ItemEditedChangesOneOf1)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = WebhookProjectsV2ItemEditedChanges.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of WebhookProjectsV2ItemEditedChanges from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/WebhookProjectsV2ItemEditedChanges} An instance of WebhookProjectsV2ItemEditedChanges.
     */
    static fromJSON = function(json_string){
        return WebhookProjectsV2ItemEditedChanges.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/WebhookProjectsV2ItemEditedChangesOneOfFieldValue} field_value
 */
WebhookProjectsV2ItemEditedChanges.prototype['field_value'] = undefined;

/**
 * @member {module:model/WebhookMemberEditedChangesPermission} body
 */
WebhookProjectsV2ItemEditedChanges.prototype['body'] = undefined;


WebhookProjectsV2ItemEditedChanges.OneOf = ["WebhookProjectsV2ItemEditedChangesOneOf", "WebhookProjectsV2ItemEditedChangesOneOf1"];

export default WebhookProjectsV2ItemEditedChanges;

