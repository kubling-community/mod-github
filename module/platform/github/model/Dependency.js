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
import Metadata1 from './Metadata1';

/**
 * The Dependency model module.
 * @module model/Dependency
 * @version 1.1.4
 */
class Dependency {
    /**
     * Constructs a new <code>Dependency</code>.
     * @alias module:model/Dependency
     */
    constructor() { 
        
        Dependency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dependency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dependency} obj Optional instance to populate.
     * @return {module:model/Dependency} The populated <code>Dependency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dependency();

            if (data.hasOwnProperty('package_url')) {
                obj['package_url'] = ApiClient.convertToType(data['package_url'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Metadata1});
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Dependency</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Dependency</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['package_url'] && !(typeof data['package_url'] === 'string' || data['package_url'] instanceof String)) {
            throw new Error("Expected the field `package_url` to be a primitive type in the JSON string but got " + data['package_url']);
        }
        // ensure the json data is a string
        if (data['relationship'] && !(typeof data['relationship'] === 'string' || data['relationship'] instanceof String)) {
            throw new Error("Expected the field `relationship` to be a primitive type in the JSON string but got " + data['relationship']);
        }
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dependencies'])) {
            throw new Error("Expected the field `dependencies` to be an array in the JSON data but got " + data['dependencies']);
        }

        return true;
    }


}



/**
 * Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
 * @member {String} package_url
 */
Dependency.prototype['package_url'] = undefined;

/**
 * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
 * @member {Object.<String, module:model/Metadata1>} metadata
 */
Dependency.prototype['metadata'] = undefined;

/**
 * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
 * @member {module:model/Dependency.RelationshipEnum} relationship
 */
Dependency.prototype['relationship'] = undefined;

/**
 * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
 * @member {module:model/Dependency.ScopeEnum} scope
 */
Dependency.prototype['scope'] = undefined;

/**
 * Array of package-url (PURLs) of direct child dependencies.
 * @member {Array.<String>} dependencies
 */
Dependency.prototype['dependencies'] = undefined;





/**
 * Allowed values for the <code>relationship</code> property.
 * @enum {String}
 * @readonly
 */
Dependency['RelationshipEnum'] = {

    /**
     * value: "direct"
     * @const
     */
    "direct": "direct",

    /**
     * value: "indirect"
     * @const
     */
    "indirect": "indirect"
};


/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
Dependency['ScopeEnum'] = {

    /**
     * value: "runtime"
     * @const
     */
    "runtime": "runtime",

    /**
     * value: "development"
     * @const
     */
    "development": "development"
};



export default Dependency;

