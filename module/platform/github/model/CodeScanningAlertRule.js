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
 * The CodeScanningAlertRule model module.
 * @module model/CodeScanningAlertRule
 * @version 1.1.4
 */
class CodeScanningAlertRule {
    /**
     * Constructs a new <code>CodeScanningAlertRule</code>.
     * @alias module:model/CodeScanningAlertRule
     */
    constructor() { 
        
        CodeScanningAlertRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeScanningAlertRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningAlertRule} obj Optional instance to populate.
     * @return {module:model/CodeScanningAlertRule} The populated <code>CodeScanningAlertRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningAlertRule();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('security_severity_level')) {
                obj['security_severity_level'] = ApiClient.convertToType(data['security_severity_level'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('full_description')) {
                obj['full_description'] = ApiClient.convertToType(data['full_description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
            if (data.hasOwnProperty('help_uri')) {
                obj['help_uri'] = ApiClient.convertToType(data['help_uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningAlertRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningAlertRule</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['security_severity_level'] && !(typeof data['security_severity_level'] === 'string' || data['security_severity_level'] instanceof String)) {
            throw new Error("Expected the field `security_severity_level` to be a primitive type in the JSON string but got " + data['security_severity_level']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['full_description'] && !(typeof data['full_description'] === 'string' || data['full_description'] instanceof String)) {
            throw new Error("Expected the field `full_description` to be a primitive type in the JSON string but got " + data['full_description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['help'] && !(typeof data['help'] === 'string' || data['help'] instanceof String)) {
            throw new Error("Expected the field `help` to be a primitive type in the JSON string but got " + data['help']);
        }
        // ensure the json data is a string
        if (data['help_uri'] && !(typeof data['help_uri'] === 'string' || data['help_uri'] instanceof String)) {
            throw new Error("Expected the field `help_uri` to be a primitive type in the JSON string but got " + data['help_uri']);
        }

        return true;
    }


}



/**
 * A unique identifier for the rule used to detect the alert.
 * @member {String} id
 */
CodeScanningAlertRule.prototype['id'] = undefined;

/**
 * The name of the rule used to detect the alert.
 * @member {String} name
 */
CodeScanningAlertRule.prototype['name'] = undefined;

/**
 * The severity of the alert.
 * @member {module:model/CodeScanningAlertRule.SeverityEnum} severity
 */
CodeScanningAlertRule.prototype['severity'] = undefined;

/**
 * The security severity of the alert.
 * @member {module:model/CodeScanningAlertRule.SecuritySeverityLevelEnum} security_severity_level
 */
CodeScanningAlertRule.prototype['security_severity_level'] = undefined;

/**
 * A short description of the rule used to detect the alert.
 * @member {String} description
 */
CodeScanningAlertRule.prototype['description'] = undefined;

/**
 * description of the rule used to detect the alert.
 * @member {String} full_description
 */
CodeScanningAlertRule.prototype['full_description'] = undefined;

/**
 * A set of tags applicable for the rule.
 * @member {Array.<String>} tags
 */
CodeScanningAlertRule.prototype['tags'] = undefined;

/**
 * Detailed documentation for the rule as GitHub Flavored Markdown.
 * @member {String} help
 */
CodeScanningAlertRule.prototype['help'] = undefined;

/**
 * A link to the documentation for the rule used to detect the alert.
 * @member {String} help_uri
 */
CodeScanningAlertRule.prototype['help_uri'] = undefined;





/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
CodeScanningAlertRule['SeverityEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "note"
     * @const
     */
    "note": "note",

    /**
     * value: "warning"
     * @const
     */
    "warning": "warning",

    /**
     * value: "error"
     * @const
     */
    "error": "error"
};


/**
 * Allowed values for the <code>security_severity_level</code> property.
 * @enum {String}
 * @readonly
 */
CodeScanningAlertRule['SecuritySeverityLevelEnum'] = {

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",

    /**
     * value: "high"
     * @const
     */
    "high": "high",

    /**
     * value: "critical"
     * @const
     */
    "critical": "critical"
};



export default CodeScanningAlertRule;

