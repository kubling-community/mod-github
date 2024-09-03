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
 * The SimpleClassroom model module.
 * @module model/SimpleClassroom
 * @version 1.1.4
 */
class SimpleClassroom {
    /**
     * Constructs a new <code>SimpleClassroom</code>.
     * A GitHub Classroom classroom
     * @alias module:model/SimpleClassroom
     * @param id {Number} Unique identifier of the classroom.
     * @param name {String} The name of the classroom.
     * @param archived {Boolean} Returns whether classroom is archived or not.
     * @param url {String} The url of the classroom on GitHub Classroom.
     */
    constructor(id, name, archived, url) { 
        
        SimpleClassroom.initialize(this, id, name, archived, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, archived, url) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['archived'] = archived;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>SimpleClassroom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleClassroom} obj Optional instance to populate.
     * @return {module:model/SimpleClassroom} The populated <code>SimpleClassroom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleClassroom();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimpleClassroom</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimpleClassroom</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SimpleClassroom.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

SimpleClassroom.RequiredProperties = ["id", "name", "archived", "url"];

/**
 * Unique identifier of the classroom.
 * @member {Number} id
 */
SimpleClassroom.prototype['id'] = undefined;

/**
 * The name of the classroom.
 * @member {String} name
 */
SimpleClassroom.prototype['name'] = undefined;

/**
 * Returns whether classroom is archived or not.
 * @member {Boolean} archived
 */
SimpleClassroom.prototype['archived'] = undefined;

/**
 * The url of the classroom on GitHub Classroom.
 * @member {String} url
 */
SimpleClassroom.prototype['url'] = undefined;






export default SimpleClassroom;

