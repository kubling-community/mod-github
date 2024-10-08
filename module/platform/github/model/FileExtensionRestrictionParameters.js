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
 * The FileExtensionRestrictionParameters model module.
 * @module model/FileExtensionRestrictionParameters
 * @version 1.1.4
 */
class FileExtensionRestrictionParameters {
    /**
     * Constructs a new <code>FileExtensionRestrictionParameters</code>.
     * @alias module:model/FileExtensionRestrictionParameters
     * @param restrictedFileExtensions {Array.<String>} The file extensions that are restricted from being pushed to the commit graph.
     */
    constructor(restrictedFileExtensions) { 
        
        FileExtensionRestrictionParameters.initialize(this, restrictedFileExtensions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, restrictedFileExtensions) { 
        obj['restricted_file_extensions'] = restrictedFileExtensions;
    }

    /**
     * Constructs a <code>FileExtensionRestrictionParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileExtensionRestrictionParameters} obj Optional instance to populate.
     * @return {module:model/FileExtensionRestrictionParameters} The populated <code>FileExtensionRestrictionParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileExtensionRestrictionParameters();

            if (data.hasOwnProperty('restricted_file_extensions')) {
                obj['restricted_file_extensions'] = ApiClient.convertToType(data['restricted_file_extensions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileExtensionRestrictionParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileExtensionRestrictionParameters</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FileExtensionRestrictionParameters.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['restricted_file_extensions'])) {
            throw new Error("Expected the field `restricted_file_extensions` to be an array in the JSON data but got " + data['restricted_file_extensions']);
        }

        return true;
    }


}

FileExtensionRestrictionParameters.RequiredProperties = ["restricted_file_extensions"];

/**
 * The file extensions that are restricted from being pushed to the commit graph.
 * @member {Array.<String>} restricted_file_extensions
 */
FileExtensionRestrictionParameters.prototype['restricted_file_extensions'] = undefined;






export default FileExtensionRestrictionParameters;

