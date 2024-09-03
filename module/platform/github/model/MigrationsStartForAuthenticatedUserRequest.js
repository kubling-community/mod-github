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
 * The MigrationsStartForAuthenticatedUserRequest model module.
 * @module model/MigrationsStartForAuthenticatedUserRequest
 * @version 1.1.4
 */
class MigrationsStartForAuthenticatedUserRequest {
    /**
     * Constructs a new <code>MigrationsStartForAuthenticatedUserRequest</code>.
     * @alias module:model/MigrationsStartForAuthenticatedUserRequest
     * @param repositories {Array.<String>} 
     */
    constructor(repositories) { 
        
        MigrationsStartForAuthenticatedUserRequest.initialize(this, repositories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositories) { 
        obj['repositories'] = repositories;
    }

    /**
     * Constructs a <code>MigrationsStartForAuthenticatedUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationsStartForAuthenticatedUserRequest} obj Optional instance to populate.
     * @return {module:model/MigrationsStartForAuthenticatedUserRequest} The populated <code>MigrationsStartForAuthenticatedUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationsStartForAuthenticatedUserRequest();

            if (data.hasOwnProperty('lock_repositories')) {
                obj['lock_repositories'] = ApiClient.convertToType(data['lock_repositories'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_metadata')) {
                obj['exclude_metadata'] = ApiClient.convertToType(data['exclude_metadata'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_git_data')) {
                obj['exclude_git_data'] = ApiClient.convertToType(data['exclude_git_data'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_attachments')) {
                obj['exclude_attachments'] = ApiClient.convertToType(data['exclude_attachments'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_releases')) {
                obj['exclude_releases'] = ApiClient.convertToType(data['exclude_releases'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_owner_projects')) {
                obj['exclude_owner_projects'] = ApiClient.convertToType(data['exclude_owner_projects'], 'Boolean');
            }
            if (data.hasOwnProperty('org_metadata_only')) {
                obj['org_metadata_only'] = ApiClient.convertToType(data['org_metadata_only'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude')) {
                obj['exclude'] = ApiClient.convertToType(data['exclude'], ['String']);
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigrationsStartForAuthenticatedUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigrationsStartForAuthenticatedUserRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MigrationsStartForAuthenticatedUserRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['exclude'])) {
            throw new Error("Expected the field `exclude` to be an array in the JSON data but got " + data['exclude']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['repositories'])) {
            throw new Error("Expected the field `repositories` to be an array in the JSON data but got " + data['repositories']);
        }

        return true;
    }


}

MigrationsStartForAuthenticatedUserRequest.RequiredProperties = ["repositories"];

/**
 * Lock the repositories being migrated at the start of the migration
 * @member {Boolean} lock_repositories
 */
MigrationsStartForAuthenticatedUserRequest.prototype['lock_repositories'] = undefined;

/**
 * Indicates whether metadata should be excluded and only git source should be included for the migration.
 * @member {Boolean} exclude_metadata
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude_metadata'] = undefined;

/**
 * Indicates whether the repository git data should be excluded from the migration.
 * @member {Boolean} exclude_git_data
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude_git_data'] = undefined;

/**
 * Do not include attachments in the migration
 * @member {Boolean} exclude_attachments
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude_attachments'] = undefined;

/**
 * Do not include releases in the migration
 * @member {Boolean} exclude_releases
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude_releases'] = undefined;

/**
 * Indicates whether projects owned by the organization or users should be excluded.
 * @member {Boolean} exclude_owner_projects
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude_owner_projects'] = undefined;

/**
 * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
 * @member {Boolean} org_metadata_only
 * @default false
 */
MigrationsStartForAuthenticatedUserRequest.prototype['org_metadata_only'] = false;

/**
 * Exclude attributes from the API response to improve performance
 * @member {Array.<module:model/MigrationsStartForAuthenticatedUserRequest.ExcludeEnum>} exclude
 */
MigrationsStartForAuthenticatedUserRequest.prototype['exclude'] = undefined;

/**
 * @member {Array.<String>} repositories
 */
MigrationsStartForAuthenticatedUserRequest.prototype['repositories'] = undefined;





/**
 * Allowed values for the <code>exclude</code> property.
 * @enum {String}
 * @readonly
 */
MigrationsStartForAuthenticatedUserRequest['ExcludeEnum'] = {

    /**
     * value: "repositories"
     * @const
     */
    "repositories": "repositories"
};



export default MigrationsStartForAuthenticatedUserRequest;

