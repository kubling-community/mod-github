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
import SponsorshipTier from './SponsorshipTier';

/**
 * The WebhooksChanges8Tier model module.
 * @module model/WebhooksChanges8Tier
 * @version 1.1.4
 */
class WebhooksChanges8Tier {
    /**
     * Constructs a new <code>WebhooksChanges8Tier</code>.
     * @alias module:model/WebhooksChanges8Tier
     * @param from {module:model/SponsorshipTier} 
     */
    constructor(from) { 
        
        WebhooksChanges8Tier.initialize(this, from);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from) { 
        obj['from'] = from;
    }

    /**
     * Constructs a <code>WebhooksChanges8Tier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksChanges8Tier} obj Optional instance to populate.
     * @return {module:model/WebhooksChanges8Tier} The populated <code>WebhooksChanges8Tier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksChanges8Tier();

            if (data.hasOwnProperty('from')) {
                obj['from'] = SponsorshipTier.constructFromObject(data['from']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksChanges8Tier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksChanges8Tier</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksChanges8Tier.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `from`
        if (data['from']) { // data not null
          SponsorshipTier.validateJSON(data['from']);
        }

        return true;
    }


}

WebhooksChanges8Tier.RequiredProperties = ["from"];

/**
 * @member {module:model/SponsorshipTier} from
 */
WebhooksChanges8Tier.prototype['from'] = undefined;






export default WebhooksChanges8Tier;

