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
 * The ContentTreeEntriesInnerLinks model module.
 * @module model/ContentTreeEntriesInnerLinks
 * @version 1.1.4
 */
class ContentTreeEntriesInnerLinks {
    /**
     * Constructs a new <code>ContentTreeEntriesInnerLinks</code>.
     * @alias module:model/ContentTreeEntriesInnerLinks
     * @param git {String} 
     * @param html {String} 
     * @param self {String} 
     */
    constructor(git, html, self) { 
        
        ContentTreeEntriesInnerLinks.initialize(this, git, html, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, git, html, self) { 
        obj['git'] = git;
        obj['html'] = html;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>ContentTreeEntriesInnerLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentTreeEntriesInnerLinks} obj Optional instance to populate.
     * @return {module:model/ContentTreeEntriesInnerLinks} The populated <code>ContentTreeEntriesInnerLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentTreeEntriesInnerLinks();

            if (data.hasOwnProperty('git')) {
                obj['git'] = ApiClient.convertToType(data['git'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentTreeEntriesInnerLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentTreeEntriesInnerLinks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContentTreeEntriesInnerLinks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['git'] && !(typeof data['git'] === 'string' || data['git'] instanceof String)) {
            throw new Error("Expected the field `git` to be a primitive type in the JSON string but got " + data['git']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}

ContentTreeEntriesInnerLinks.RequiredProperties = ["git", "html", "self"];

/**
 * @member {String} git
 */
ContentTreeEntriesInnerLinks.prototype['git'] = undefined;

/**
 * @member {String} html
 */
ContentTreeEntriesInnerLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
ContentTreeEntriesInnerLinks.prototype['self'] = undefined;






export default ContentTreeEntriesInnerLinks;

