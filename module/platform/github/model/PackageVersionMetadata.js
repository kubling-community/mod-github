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
import ContainerMetadata from './ContainerMetadata';
import DockerMetadata from './DockerMetadata';

/**
 * The PackageVersionMetadata model module.
 * @module model/PackageVersionMetadata
 * @version 1.1.4
 */
class PackageVersionMetadata {
    /**
     * Constructs a new <code>PackageVersionMetadata</code>.
     * @alias module:model/PackageVersionMetadata
     * @param packageType {module:model/PackageVersionMetadata.PackageTypeEnum} 
     */
    constructor(packageType) { 
        
        PackageVersionMetadata.initialize(this, packageType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, packageType) { 
        obj['package_type'] = packageType;
    }

    /**
     * Constructs a <code>PackageVersionMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackageVersionMetadata} obj Optional instance to populate.
     * @return {module:model/PackageVersionMetadata} The populated <code>PackageVersionMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageVersionMetadata();

            if (data.hasOwnProperty('package_type')) {
                obj['package_type'] = ApiClient.convertToType(data['package_type'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ContainerMetadata.constructFromObject(data['container']);
            }
            if (data.hasOwnProperty('docker')) {
                obj['docker'] = DockerMetadata.constructFromObject(data['docker']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PackageVersionMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PackageVersionMetadata</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PackageVersionMetadata.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['package_type'] && !(typeof data['package_type'] === 'string' || data['package_type'] instanceof String)) {
            throw new Error("Expected the field `package_type` to be a primitive type in the JSON string but got " + data['package_type']);
        }
        // validate the optional field `container`
        if (data['container']) { // data not null
          ContainerMetadata.validateJSON(data['container']);
        }
        // validate the optional field `docker`
        if (data['docker']) { // data not null
          DockerMetadata.validateJSON(data['docker']);
        }

        return true;
    }


}

PackageVersionMetadata.RequiredProperties = ["package_type"];

/**
 * @member {module:model/PackageVersionMetadata.PackageTypeEnum} package_type
 */
PackageVersionMetadata.prototype['package_type'] = undefined;

/**
 * @member {module:model/ContainerMetadata} container
 */
PackageVersionMetadata.prototype['container'] = undefined;

/**
 * @member {module:model/DockerMetadata} docker
 */
PackageVersionMetadata.prototype['docker'] = undefined;





/**
 * Allowed values for the <code>package_type</code> property.
 * @enum {String}
 * @readonly
 */
PackageVersionMetadata['PackageTypeEnum'] = {

    /**
     * value: "npm"
     * @const
     */
    "npm": "npm",

    /**
     * value: "maven"
     * @const
     */
    "maven": "maven",

    /**
     * value: "rubygems"
     * @const
     */
    "rubygems": "rubygems",

    /**
     * value: "docker"
     * @const
     */
    "docker": "docker",

    /**
     * value: "nuget"
     * @const
     */
    "nuget": "nuget",

    /**
     * value: "container"
     * @const
     */
    "container": "container"
};



export default PackageVersionMetadata;

