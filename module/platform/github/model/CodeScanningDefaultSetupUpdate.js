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
 * The CodeScanningDefaultSetupUpdate model module.
 * @module model/CodeScanningDefaultSetupUpdate
 * @version 1.1.4
 */
class CodeScanningDefaultSetupUpdate {
    /**
     * Constructs a new <code>CodeScanningDefaultSetupUpdate</code>.
     * Configuration for code scanning default setup.
     * @alias module:model/CodeScanningDefaultSetupUpdate
     */
    constructor() { 
        
        CodeScanningDefaultSetupUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeScanningDefaultSetupUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningDefaultSetupUpdate} obj Optional instance to populate.
     * @return {module:model/CodeScanningDefaultSetupUpdate} The populated <code>CodeScanningDefaultSetupUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningDefaultSetupUpdate();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('query_suite')) {
                obj['query_suite'] = ApiClient.convertToType(data['query_suite'], 'String');
            }
            if (data.hasOwnProperty('languages')) {
                obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningDefaultSetupUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningDefaultSetupUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['query_suite'] && !(typeof data['query_suite'] === 'string' || data['query_suite'] instanceof String)) {
            throw new Error("Expected the field `query_suite` to be a primitive type in the JSON string but got " + data['query_suite']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['languages'])) {
            throw new Error("Expected the field `languages` to be an array in the JSON data but got " + data['languages']);
        }

        return true;
    }


}



/**
 * The desired state of code scanning default setup.
 * @member {module:model/CodeScanningDefaultSetupUpdate.StateEnum} state
 */
CodeScanningDefaultSetupUpdate.prototype['state'] = undefined;

/**
 * CodeQL query suite to be used.
 * @member {module:model/CodeScanningDefaultSetupUpdate.QuerySuiteEnum} query_suite
 */
CodeScanningDefaultSetupUpdate.prototype['query_suite'] = undefined;

/**
 * CodeQL languages to be analyzed.
 * @member {Array.<module:model/CodeScanningDefaultSetupUpdate.LanguagesEnum>} languages
 */
CodeScanningDefaultSetupUpdate.prototype['languages'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CodeScanningDefaultSetupUpdate['StateEnum'] = {

    /**
     * value: "configured"
     * @const
     */
    "configured": "configured",

    /**
     * value: "not-configured"
     * @const
     */
    "not-configured": "not-configured"
};


/**
 * Allowed values for the <code>query_suite</code> property.
 * @enum {String}
 * @readonly
 */
CodeScanningDefaultSetupUpdate['QuerySuiteEnum'] = {

    /**
     * value: "default"
     * @const
     */
    "default": "default",

    /**
     * value: "extended"
     * @const
     */
    "extended": "extended"
};


/**
 * Allowed values for the <code>languages</code> property.
 * @enum {String}
 * @readonly
 */
CodeScanningDefaultSetupUpdate['LanguagesEnum'] = {

    /**
     * value: "c-cpp"
     * @const
     */
    "c-cpp": "c-cpp",

    /**
     * value: "csharp"
     * @const
     */
    "csharp": "csharp",

    /**
     * value: "go"
     * @const
     */
    "go": "go",

    /**
     * value: "java-kotlin"
     * @const
     */
    "java-kotlin": "java-kotlin",

    /**
     * value: "javascript-typescript"
     * @const
     */
    "javascript-typescript": "javascript-typescript",

    /**
     * value: "python"
     * @const
     */
    "python": "python",

    /**
     * value: "ruby"
     * @const
     */
    "ruby": "ruby",

    /**
     * value: "swift"
     * @const
     */
    "swift": "swift"
};



export default CodeScanningDefaultSetupUpdate;

