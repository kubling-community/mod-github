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
import MinimalRepository from './MinimalRepository';
import ThreadSubject from './ThreadSubject';

/**
 * The Thread model module.
 * @module model/Thread
 * @version 1.1.4
 */
class Thread {
    /**
     * Constructs a new <code>Thread</code>.
     * Thread
     * @alias module:model/Thread
     * @param id {String} 
     * @param repository {module:model/MinimalRepository} 
     * @param subject {module:model/ThreadSubject} 
     * @param reason {String} 
     * @param unread {Boolean} 
     * @param updatedAt {String} 
     * @param lastReadAt {String} 
     * @param url {String} 
     * @param subscriptionUrl {String} 
     */
    constructor(id, repository, subject, reason, unread, updatedAt, lastReadAt, url, subscriptionUrl) { 
        
        Thread.initialize(this, id, repository, subject, reason, unread, updatedAt, lastReadAt, url, subscriptionUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, repository, subject, reason, unread, updatedAt, lastReadAt, url, subscriptionUrl) { 
        obj['id'] = id;
        obj['repository'] = repository;
        obj['subject'] = subject;
        obj['reason'] = reason;
        obj['unread'] = unread;
        obj['updated_at'] = updatedAt;
        obj['last_read_at'] = lastReadAt;
        obj['url'] = url;
        obj['subscription_url'] = subscriptionUrl;
    }

    /**
     * Constructs a <code>Thread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Thread} obj Optional instance to populate.
     * @return {module:model/Thread} The populated <code>Thread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Thread();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = MinimalRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ThreadSubject.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('unread')) {
                obj['unread'] = ApiClient.convertToType(data['unread'], 'Boolean');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('last_read_at')) {
                obj['last_read_at'] = ApiClient.convertToType(data['last_read_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Thread</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Thread</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Thread.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          MinimalRepository.validateJSON(data['repository']);
        }
        // validate the optional field `subject`
        if (data['subject']) { // data not null
          ThreadSubject.validateJSON(data['subject']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['last_read_at'] && !(typeof data['last_read_at'] === 'string' || data['last_read_at'] instanceof String)) {
            throw new Error("Expected the field `last_read_at` to be a primitive type in the JSON string but got " + data['last_read_at']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['subscription_url'] && !(typeof data['subscription_url'] === 'string' || data['subscription_url'] instanceof String)) {
            throw new Error("Expected the field `subscription_url` to be a primitive type in the JSON string but got " + data['subscription_url']);
        }

        return true;
    }


}

Thread.RequiredProperties = ["id", "repository", "subject", "reason", "unread", "updated_at", "last_read_at", "url", "subscription_url"];

/**
 * @member {String} id
 */
Thread.prototype['id'] = undefined;

/**
 * @member {module:model/MinimalRepository} repository
 */
Thread.prototype['repository'] = undefined;

/**
 * @member {module:model/ThreadSubject} subject
 */
Thread.prototype['subject'] = undefined;

/**
 * @member {String} reason
 */
Thread.prototype['reason'] = undefined;

/**
 * @member {Boolean} unread
 */
Thread.prototype['unread'] = undefined;

/**
 * @member {String} updated_at
 */
Thread.prototype['updated_at'] = undefined;

/**
 * @member {String} last_read_at
 */
Thread.prototype['last_read_at'] = undefined;

/**
 * @member {String} url
 */
Thread.prototype['url'] = undefined;

/**
 * @member {String} subscription_url
 */
Thread.prototype['subscription_url'] = undefined;






export default Thread;

