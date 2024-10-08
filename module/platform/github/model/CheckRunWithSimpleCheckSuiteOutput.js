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
 * The CheckRunWithSimpleCheckSuiteOutput model module.
 * @module model/CheckRunWithSimpleCheckSuiteOutput
 * @version 1.1.4
 */
class CheckRunWithSimpleCheckSuiteOutput {
    /**
     * Constructs a new <code>CheckRunWithSimpleCheckSuiteOutput</code>.
     * @alias module:model/CheckRunWithSimpleCheckSuiteOutput
     * @param annotationsCount {Number} 
     * @param annotationsUrl {String} 
     * @param summary {String} 
     * @param text {String} 
     * @param title {String} 
     */
    constructor(annotationsCount, annotationsUrl, summary, text, title) { 
        
        CheckRunWithSimpleCheckSuiteOutput.initialize(this, annotationsCount, annotationsUrl, summary, text, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, annotationsCount, annotationsUrl, summary, text, title) { 
        obj['annotations_count'] = annotationsCount;
        obj['annotations_url'] = annotationsUrl;
        obj['summary'] = summary;
        obj['text'] = text;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CheckRunWithSimpleCheckSuiteOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckRunWithSimpleCheckSuiteOutput} obj Optional instance to populate.
     * @return {module:model/CheckRunWithSimpleCheckSuiteOutput} The populated <code>CheckRunWithSimpleCheckSuiteOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckRunWithSimpleCheckSuiteOutput();

            if (data.hasOwnProperty('annotations_count')) {
                obj['annotations_count'] = ApiClient.convertToType(data['annotations_count'], 'Number');
            }
            if (data.hasOwnProperty('annotations_url')) {
                obj['annotations_url'] = ApiClient.convertToType(data['annotations_url'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckRunWithSimpleCheckSuiteOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckRunWithSimpleCheckSuiteOutput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckRunWithSimpleCheckSuiteOutput.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['annotations_url'] && !(typeof data['annotations_url'] === 'string' || data['annotations_url'] instanceof String)) {
            throw new Error("Expected the field `annotations_url` to be a primitive type in the JSON string but got " + data['annotations_url']);
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

CheckRunWithSimpleCheckSuiteOutput.RequiredProperties = ["annotations_count", "annotations_url", "summary", "text", "title"];

/**
 * @member {Number} annotations_count
 */
CheckRunWithSimpleCheckSuiteOutput.prototype['annotations_count'] = undefined;

/**
 * @member {String} annotations_url
 */
CheckRunWithSimpleCheckSuiteOutput.prototype['annotations_url'] = undefined;

/**
 * @member {String} summary
 */
CheckRunWithSimpleCheckSuiteOutput.prototype['summary'] = undefined;

/**
 * @member {String} text
 */
CheckRunWithSimpleCheckSuiteOutput.prototype['text'] = undefined;

/**
 * @member {String} title
 */
CheckRunWithSimpleCheckSuiteOutput.prototype['title'] = undefined;






export default CheckRunWithSimpleCheckSuiteOutput;

