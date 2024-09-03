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
 * The ReposCreateDeploymentRequestPayload model module.
 * @module model/ReposCreateDeploymentRequestPayload
 * @version 1.1.4
 */
class ReposCreateDeploymentRequestPayload {
    /**
     * Constructs a new <code>ReposCreateDeploymentRequestPayload</code>.
     * @alias module:model/ReposCreateDeploymentRequestPayload
     * @param {(module:model/String|module:model/{String: Object})} instance The actual instance to initialize ReposCreateDeploymentRequestPayload.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into {String: Object}
            errorMessages.push("Failed to construct {String: Object}: " + err)
        }

        // JSON payload with extra information about the deployment.
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

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ReposCreateDeploymentRequestPayload` with oneOf schemas String, {String: Object}. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ReposCreateDeploymentRequestPayload` with oneOf schemas String, {String: Object}. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ReposCreateDeploymentRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposCreateDeploymentRequestPayload} obj Optional instance to populate.
     * @return {module:model/ReposCreateDeploymentRequestPayload} The populated <code>ReposCreateDeploymentRequestPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ReposCreateDeploymentRequestPayload(data);
    }

    /**
     * Gets the actual instance, which can be <code>String</code>, <code>{String: Object}</code>.
     * @return {(module:model/String|module:model/{String: Object})} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>String</code>, <code>{String: Object}</code>.
     * @param {(module:model/String|module:model/{String: Object})} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ReposCreateDeploymentRequestPayload.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ReposCreateDeploymentRequestPayload from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ReposCreateDeploymentRequestPayload} An instance of ReposCreateDeploymentRequestPayload.
     */
    static fromJSON = function(json_string){
        return ReposCreateDeploymentRequestPayload.constructFromObject(JSON.parse(json_string));
    }
}


ReposCreateDeploymentRequestPayload.OneOf = ["String", "{String: Object}"];

export default ReposCreateDeploymentRequestPayload;

