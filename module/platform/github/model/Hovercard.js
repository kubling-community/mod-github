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
import HovercardContextsInner from './HovercardContextsInner';

/**
 * The Hovercard model module.
 * @module model/Hovercard
 * @version 1.1.4
 */
class Hovercard {
    /**
     * Constructs a new <code>Hovercard</code>.
     * Hovercard
     * @alias module:model/Hovercard
     * @param contexts {Array.<module:model/HovercardContextsInner>} 
     */
    constructor(contexts) { 
        
        Hovercard.initialize(this, contexts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contexts) { 
        obj['contexts'] = contexts;
    }

    /**
     * Constructs a <code>Hovercard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hovercard} obj Optional instance to populate.
     * @return {module:model/Hovercard} The populated <code>Hovercard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Hovercard();

            if (data.hasOwnProperty('contexts')) {
                obj['contexts'] = ApiClient.convertToType(data['contexts'], [HovercardContextsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Hovercard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Hovercard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Hovercard.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['contexts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contexts'])) {
                throw new Error("Expected the field `contexts` to be an array in the JSON data but got " + data['contexts']);
            }
            // validate the optional field `contexts` (array)
            for (const item of data['contexts']) {
                HovercardContextsInner.validateJSON(item);
            };
        }

        return true;
    }


}

Hovercard.RequiredProperties = ["contexts"];

/**
 * @member {Array.<module:model/HovercardContextsInner>} contexts
 */
Hovercard.prototype['contexts'] = undefined;






export default Hovercard;

