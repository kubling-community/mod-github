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
import GpgKeyEmailsInner from './GpgKeyEmailsInner';
import GpgKeySubkeysInner from './GpgKeySubkeysInner';

/**
 * The GpgKey model module.
 * @module model/GpgKey
 * @version 1.1.4
 */
class GpgKey {
    /**
     * Constructs a new <code>GpgKey</code>.
     * A unique encryption key
     * @alias module:model/GpgKey
     * @param id {Number} 
     * @param primaryKeyId {Number} 
     * @param keyId {String} 
     * @param publicKey {String} 
     * @param emails {Array.<module:model/GpgKeyEmailsInner>} 
     * @param subkeys {Array.<module:model/GpgKeySubkeysInner>} 
     * @param canSign {Boolean} 
     * @param canEncryptComms {Boolean} 
     * @param canEncryptStorage {Boolean} 
     * @param canCertify {Boolean} 
     * @param createdAt {Date} 
     * @param expiresAt {Date} 
     * @param revoked {Boolean} 
     * @param rawKey {String} 
     */
    constructor(id, primaryKeyId, keyId, publicKey, emails, subkeys, canSign, canEncryptComms, canEncryptStorage, canCertify, createdAt, expiresAt, revoked, rawKey) { 
        
        GpgKey.initialize(this, id, primaryKeyId, keyId, publicKey, emails, subkeys, canSign, canEncryptComms, canEncryptStorage, canCertify, createdAt, expiresAt, revoked, rawKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, primaryKeyId, keyId, publicKey, emails, subkeys, canSign, canEncryptComms, canEncryptStorage, canCertify, createdAt, expiresAt, revoked, rawKey) { 
        obj['id'] = id;
        obj['primary_key_id'] = primaryKeyId;
        obj['key_id'] = keyId;
        obj['public_key'] = publicKey;
        obj['emails'] = emails;
        obj['subkeys'] = subkeys;
        obj['can_sign'] = canSign;
        obj['can_encrypt_comms'] = canEncryptComms;
        obj['can_encrypt_storage'] = canEncryptStorage;
        obj['can_certify'] = canCertify;
        obj['created_at'] = createdAt;
        obj['expires_at'] = expiresAt;
        obj['revoked'] = revoked;
        obj['raw_key'] = rawKey;
    }

    /**
     * Constructs a <code>GpgKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpgKey} obj Optional instance to populate.
     * @return {module:model/GpgKey} The populated <code>GpgKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GpgKey();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('primary_key_id')) {
                obj['primary_key_id'] = ApiClient.convertToType(data['primary_key_id'], 'Number');
            }
            if (data.hasOwnProperty('key_id')) {
                obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [GpgKeyEmailsInner]);
            }
            if (data.hasOwnProperty('subkeys')) {
                obj['subkeys'] = ApiClient.convertToType(data['subkeys'], [GpgKeySubkeysInner]);
            }
            if (data.hasOwnProperty('can_sign')) {
                obj['can_sign'] = ApiClient.convertToType(data['can_sign'], 'Boolean');
            }
            if (data.hasOwnProperty('can_encrypt_comms')) {
                obj['can_encrypt_comms'] = ApiClient.convertToType(data['can_encrypt_comms'], 'Boolean');
            }
            if (data.hasOwnProperty('can_encrypt_storage')) {
                obj['can_encrypt_storage'] = ApiClient.convertToType(data['can_encrypt_storage'], 'Boolean');
            }
            if (data.hasOwnProperty('can_certify')) {
                obj['can_certify'] = ApiClient.convertToType(data['can_certify'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('revoked')) {
                obj['revoked'] = ApiClient.convertToType(data['revoked'], 'Boolean');
            }
            if (data.hasOwnProperty('raw_key')) {
                obj['raw_key'] = ApiClient.convertToType(data['raw_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GpgKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GpgKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GpgKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['key_id'] && !(typeof data['key_id'] === 'string' || data['key_id'] instanceof String)) {
            throw new Error("Expected the field `key_id` to be a primitive type in the JSON string but got " + data['key_id']);
        }
        // ensure the json data is a string
        if (data['public_key'] && !(typeof data['public_key'] === 'string' || data['public_key'] instanceof String)) {
            throw new Error("Expected the field `public_key` to be a primitive type in the JSON string but got " + data['public_key']);
        }
        if (data['emails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['emails'])) {
                throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
            }
            // validate the optional field `emails` (array)
            for (const item of data['emails']) {
                GpgKeyEmailsInner.validateJSON(item);
            };
        }
        if (data['subkeys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subkeys'])) {
                throw new Error("Expected the field `subkeys` to be an array in the JSON data but got " + data['subkeys']);
            }
            // validate the optional field `subkeys` (array)
            for (const item of data['subkeys']) {
                GpgKeySubkeysInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['raw_key'] && !(typeof data['raw_key'] === 'string' || data['raw_key'] instanceof String)) {
            throw new Error("Expected the field `raw_key` to be a primitive type in the JSON string but got " + data['raw_key']);
        }

        return true;
    }


}

GpgKey.RequiredProperties = ["id", "primary_key_id", "key_id", "public_key", "emails", "subkeys", "can_sign", "can_encrypt_comms", "can_encrypt_storage", "can_certify", "created_at", "expires_at", "revoked", "raw_key"];

/**
 * @member {Number} id
 */
GpgKey.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GpgKey.prototype['name'] = undefined;

/**
 * @member {Number} primary_key_id
 */
GpgKey.prototype['primary_key_id'] = undefined;

/**
 * @member {String} key_id
 */
GpgKey.prototype['key_id'] = undefined;

/**
 * @member {String} public_key
 */
GpgKey.prototype['public_key'] = undefined;

/**
 * @member {Array.<module:model/GpgKeyEmailsInner>} emails
 */
GpgKey.prototype['emails'] = undefined;

/**
 * @member {Array.<module:model/GpgKeySubkeysInner>} subkeys
 */
GpgKey.prototype['subkeys'] = undefined;

/**
 * @member {Boolean} can_sign
 */
GpgKey.prototype['can_sign'] = undefined;

/**
 * @member {Boolean} can_encrypt_comms
 */
GpgKey.prototype['can_encrypt_comms'] = undefined;

/**
 * @member {Boolean} can_encrypt_storage
 */
GpgKey.prototype['can_encrypt_storage'] = undefined;

/**
 * @member {Boolean} can_certify
 */
GpgKey.prototype['can_certify'] = undefined;

/**
 * @member {Date} created_at
 */
GpgKey.prototype['created_at'] = undefined;

/**
 * @member {Date} expires_at
 */
GpgKey.prototype['expires_at'] = undefined;

/**
 * @member {Boolean} revoked
 */
GpgKey.prototype['revoked'] = undefined;

/**
 * @member {String} raw_key
 */
GpgKey.prototype['raw_key'] = undefined;






export default GpgKey;

