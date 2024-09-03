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
 * The CodespaceGitStatus model module.
 * @module model/CodespaceGitStatus
 * @version 1.1.4
 */
class CodespaceGitStatus {
    /**
     * Constructs a new <code>CodespaceGitStatus</code>.
     * Details about the codespace&#39;s git repository.
     * @alias module:model/CodespaceGitStatus
     */
    constructor() { 
        
        CodespaceGitStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodespaceGitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodespaceGitStatus} obj Optional instance to populate.
     * @return {module:model/CodespaceGitStatus} The populated <code>CodespaceGitStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodespaceGitStatus();

            if (data.hasOwnProperty('ahead')) {
                obj['ahead'] = ApiClient.convertToType(data['ahead'], 'Number');
            }
            if (data.hasOwnProperty('behind')) {
                obj['behind'] = ApiClient.convertToType(data['behind'], 'Number');
            }
            if (data.hasOwnProperty('has_unpushed_changes')) {
                obj['has_unpushed_changes'] = ApiClient.convertToType(data['has_unpushed_changes'], 'Boolean');
            }
            if (data.hasOwnProperty('has_uncommitted_changes')) {
                obj['has_uncommitted_changes'] = ApiClient.convertToType(data['has_uncommitted_changes'], 'Boolean');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodespaceGitStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodespaceGitStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }

        return true;
    }


}



/**
 * The number of commits the local repository is ahead of the remote.
 * @member {Number} ahead
 */
CodespaceGitStatus.prototype['ahead'] = undefined;

/**
 * The number of commits the local repository is behind the remote.
 * @member {Number} behind
 */
CodespaceGitStatus.prototype['behind'] = undefined;

/**
 * Whether the local repository has unpushed changes.
 * @member {Boolean} has_unpushed_changes
 */
CodespaceGitStatus.prototype['has_unpushed_changes'] = undefined;

/**
 * Whether the local repository has uncommitted changes.
 * @member {Boolean} has_uncommitted_changes
 */
CodespaceGitStatus.prototype['has_uncommitted_changes'] = undefined;

/**
 * The current branch (or SHA if in detached HEAD state) of the local repository.
 * @member {String} ref
 */
CodespaceGitStatus.prototype['ref'] = undefined;






export default CodespaceGitStatus;

