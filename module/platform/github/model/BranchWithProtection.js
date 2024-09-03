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
import BranchProtection from './BranchProtection';
import BranchWithProtectionLinks from './BranchWithProtectionLinks';
import Commit from './Commit';

/**
 * The BranchWithProtection model module.
 * @module model/BranchWithProtection
 * @version 1.1.4
 */
class BranchWithProtection {
    /**
     * Constructs a new <code>BranchWithProtection</code>.
     * Branch With Protection
     * @alias module:model/BranchWithProtection
     * @param name {String} 
     * @param commit {module:model/Commit} 
     * @param links {module:model/BranchWithProtectionLinks} 
     * @param _protected {Boolean} 
     * @param protection {module:model/BranchProtection} 
     * @param protectionUrl {String} 
     */
    constructor(name, commit, links, _protected, protection, protectionUrl) { 
        
        BranchWithProtection.initialize(this, name, commit, links, _protected, protection, protectionUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, commit, links, _protected, protection, protectionUrl) { 
        obj['name'] = name;
        obj['commit'] = commit;
        obj['_links'] = links;
        obj['protected'] = _protected;
        obj['protection'] = protection;
        obj['protection_url'] = protectionUrl;
    }

    /**
     * Constructs a <code>BranchWithProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchWithProtection} obj Optional instance to populate.
     * @return {module:model/BranchWithProtection} The populated <code>BranchWithProtection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchWithProtection();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BranchWithProtectionLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('protected')) {
                obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
            }
            if (data.hasOwnProperty('protection')) {
                obj['protection'] = BranchProtection.constructFromObject(data['protection']);
            }
            if (data.hasOwnProperty('protection_url')) {
                obj['protection_url'] = ApiClient.convertToType(data['protection_url'], 'String');
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('required_approving_review_count')) {
                obj['required_approving_review_count'] = ApiClient.convertToType(data['required_approving_review_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BranchWithProtection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BranchWithProtection</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BranchWithProtection.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `commit`
        if (data['commit']) { // data not null
          Commit.validateJSON(data['commit']);
        }
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          BranchWithProtectionLinks.validateJSON(data['_links']);
        }
        // validate the optional field `protection`
        if (data['protection']) { // data not null
          BranchProtection.validateJSON(data['protection']);
        }
        // ensure the json data is a string
        if (data['protection_url'] && !(typeof data['protection_url'] === 'string' || data['protection_url'] instanceof String)) {
            throw new Error("Expected the field `protection_url` to be a primitive type in the JSON string but got " + data['protection_url']);
        }
        // ensure the json data is a string
        if (data['pattern'] && !(typeof data['pattern'] === 'string' || data['pattern'] instanceof String)) {
            throw new Error("Expected the field `pattern` to be a primitive type in the JSON string but got " + data['pattern']);
        }

        return true;
    }


}

BranchWithProtection.RequiredProperties = ["name", "commit", "_links", "protected", "protection", "protection_url"];

/**
 * @member {String} name
 */
BranchWithProtection.prototype['name'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
BranchWithProtection.prototype['commit'] = undefined;

/**
 * @member {module:model/BranchWithProtectionLinks} _links
 */
BranchWithProtection.prototype['_links'] = undefined;

/**
 * @member {Boolean} protected
 */
BranchWithProtection.prototype['protected'] = undefined;

/**
 * @member {module:model/BranchProtection} protection
 */
BranchWithProtection.prototype['protection'] = undefined;

/**
 * @member {String} protection_url
 */
BranchWithProtection.prototype['protection_url'] = undefined;

/**
 * @member {String} pattern
 */
BranchWithProtection.prototype['pattern'] = undefined;

/**
 * @member {Number} required_approving_review_count
 */
BranchWithProtection.prototype['required_approving_review_count'] = undefined;






export default BranchWithProtection;

