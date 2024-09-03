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
import WebhookRegistryPackagePublishedRegistryPackageOwner from './WebhookRegistryPackagePublishedRegistryPackageOwner';
import WebhookRegistryPackagePublishedRegistryPackagePackageVersion from './WebhookRegistryPackagePublishedRegistryPackagePackageVersion';
import WebhookRegistryPackagePublishedRegistryPackageRegistry from './WebhookRegistryPackagePublishedRegistryPackageRegistry';

/**
 * The WebhookRegistryPackagePublishedRegistryPackage model module.
 * @module model/WebhookRegistryPackagePublishedRegistryPackage
 * @version 1.1.4
 */
class WebhookRegistryPackagePublishedRegistryPackage {
    /**
     * Constructs a new <code>WebhookRegistryPackagePublishedRegistryPackage</code>.
     * @alias module:model/WebhookRegistryPackagePublishedRegistryPackage
     * @param createdAt {String} 
     * @param description {String} 
     * @param ecosystem {String} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param namespace {String} 
     * @param owner {module:model/WebhookRegistryPackagePublishedRegistryPackageOwner} 
     * @param packageType {String} 
     * @param packageVersion {module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersion} 
     * @param registry {module:model/WebhookRegistryPackagePublishedRegistryPackageRegistry} 
     * @param updatedAt {String} 
     */
    constructor(createdAt, description, ecosystem, htmlUrl, id, name, namespace, owner, packageType, packageVersion, registry, updatedAt) { 
        
        WebhookRegistryPackagePublishedRegistryPackage.initialize(this, createdAt, description, ecosystem, htmlUrl, id, name, namespace, owner, packageType, packageVersion, registry, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, description, ecosystem, htmlUrl, id, name, namespace, owner, packageType, packageVersion, registry, updatedAt) { 
        obj['created_at'] = createdAt;
        obj['description'] = description;
        obj['ecosystem'] = ecosystem;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['namespace'] = namespace;
        obj['owner'] = owner;
        obj['package_type'] = packageType;
        obj['package_version'] = packageVersion;
        obj['registry'] = registry;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>WebhookRegistryPackagePublishedRegistryPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRegistryPackagePublishedRegistryPackage} obj Optional instance to populate.
     * @return {module:model/WebhookRegistryPackagePublishedRegistryPackage} The populated <code>WebhookRegistryPackagePublishedRegistryPackage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRegistryPackagePublishedRegistryPackage();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ecosystem')) {
                obj['ecosystem'] = ApiClient.convertToType(data['ecosystem'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = WebhookRegistryPackagePublishedRegistryPackageOwner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('package_type')) {
                obj['package_type'] = ApiClient.convertToType(data['package_type'], 'String');
            }
            if (data.hasOwnProperty('package_version')) {
                obj['package_version'] = WebhookRegistryPackagePublishedRegistryPackagePackageVersion.constructFromObject(data['package_version']);
            }
            if (data.hasOwnProperty('registry')) {
                obj['registry'] = WebhookRegistryPackagePublishedRegistryPackageRegistry.constructFromObject(data['registry']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRegistryPackagePublishedRegistryPackage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRegistryPackagePublishedRegistryPackage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookRegistryPackagePublishedRegistryPackage.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['ecosystem'] && !(typeof data['ecosystem'] === 'string' || data['ecosystem'] instanceof String)) {
            throw new Error("Expected the field `ecosystem` to be a primitive type in the JSON string but got " + data['ecosystem']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          WebhookRegistryPackagePublishedRegistryPackageOwner.validateJSON(data['owner']);
        }
        // ensure the json data is a string
        if (data['package_type'] && !(typeof data['package_type'] === 'string' || data['package_type'] instanceof String)) {
            throw new Error("Expected the field `package_type` to be a primitive type in the JSON string but got " + data['package_type']);
        }
        // validate the optional field `package_version`
        if (data['package_version']) { // data not null
          WebhookRegistryPackagePublishedRegistryPackagePackageVersion.validateJSON(data['package_version']);
        }
        // validate the optional field `registry`
        if (data['registry']) { // data not null
          WebhookRegistryPackagePublishedRegistryPackageRegistry.validateJSON(data['registry']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}

WebhookRegistryPackagePublishedRegistryPackage.RequiredProperties = ["created_at", "description", "ecosystem", "html_url", "id", "name", "namespace", "owner", "package_type", "package_version", "registry", "updated_at"];

/**
 * @member {String} created_at
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['description'] = undefined;

/**
 * @member {String} ecosystem
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['ecosystem'] = undefined;

/**
 * @member {String} html_url
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['name'] = undefined;

/**
 * @member {String} namespace
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['namespace'] = undefined;

/**
 * @member {module:model/WebhookRegistryPackagePublishedRegistryPackageOwner} owner
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['owner'] = undefined;

/**
 * @member {String} package_type
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['package_type'] = undefined;

/**
 * @member {module:model/WebhookRegistryPackagePublishedRegistryPackagePackageVersion} package_version
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['package_version'] = undefined;

/**
 * @member {module:model/WebhookRegistryPackagePublishedRegistryPackageRegistry} registry
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['registry'] = undefined;

/**
 * @member {String} updated_at
 */
WebhookRegistryPackagePublishedRegistryPackage.prototype['updated_at'] = undefined;






export default WebhookRegistryPackagePublishedRegistryPackage;

