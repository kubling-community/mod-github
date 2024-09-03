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
 * The TimelineReviewedEventLinksHtml model module.
 * @module model/TimelineReviewedEventLinksHtml
 * @version 1.1.4
 */
class TimelineReviewedEventLinksHtml {
    /**
     * Constructs a new <code>TimelineReviewedEventLinksHtml</code>.
     * @alias module:model/TimelineReviewedEventLinksHtml
     * @param href {String} 
     */
    constructor(href) { 
        
        TimelineReviewedEventLinksHtml.initialize(this, href);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href) { 
        obj['href'] = href;
    }

    /**
     * Constructs a <code>TimelineReviewedEventLinksHtml</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimelineReviewedEventLinksHtml} obj Optional instance to populate.
     * @return {module:model/TimelineReviewedEventLinksHtml} The populated <code>TimelineReviewedEventLinksHtml</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimelineReviewedEventLinksHtml();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimelineReviewedEventLinksHtml</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimelineReviewedEventLinksHtml</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimelineReviewedEventLinksHtml.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }

        return true;
    }


}

TimelineReviewedEventLinksHtml.RequiredProperties = ["href"];

/**
 * @member {String} href
 */
TimelineReviewedEventLinksHtml.prototype['href'] = undefined;






export default TimelineReviewedEventLinksHtml;

