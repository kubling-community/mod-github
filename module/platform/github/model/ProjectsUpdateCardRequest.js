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
 * The ProjectsUpdateCardRequest model module.
 * @module model/ProjectsUpdateCardRequest
 * @version 1.1.4
 */
class ProjectsUpdateCardRequest {
    /**
     * Constructs a new <code>ProjectsUpdateCardRequest</code>.
     * @alias module:model/ProjectsUpdateCardRequest
     */
    constructor() { 
        
        ProjectsUpdateCardRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectsUpdateCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectsUpdateCardRequest} obj Optional instance to populate.
     * @return {module:model/ProjectsUpdateCardRequest} The populated <code>ProjectsUpdateCardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectsUpdateCardRequest();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectsUpdateCardRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectsUpdateCardRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }

        return true;
    }


}



/**
 * The project card's note
 * @member {String} note
 */
ProjectsUpdateCardRequest.prototype['note'] = undefined;

/**
 * Whether or not the card is archived
 * @member {Boolean} archived
 */
ProjectsUpdateCardRequest.prototype['archived'] = undefined;






export default ProjectsUpdateCardRequest;

