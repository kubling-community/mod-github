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
import TimelineReviewedEventLinksHtml from './TimelineReviewedEventLinksHtml';

/**
 * The TimelineReviewedEventLinks model module.
 * @module model/TimelineReviewedEventLinks
 * @version 1.1.4
 */
class TimelineReviewedEventLinks {
    /**
     * Constructs a new <code>TimelineReviewedEventLinks</code>.
     * @alias module:model/TimelineReviewedEventLinks
     * @param html {module:model/TimelineReviewedEventLinksHtml} 
     * @param pullRequest {module:model/TimelineReviewedEventLinksHtml} 
     */
    constructor(html, pullRequest) { 
        
        TimelineReviewedEventLinks.initialize(this, html, pullRequest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, html, pullRequest) { 
        obj['html'] = html;
        obj['pull_request'] = pullRequest;
    }

    /**
     * Constructs a <code>TimelineReviewedEventLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimelineReviewedEventLinks} obj Optional instance to populate.
     * @return {module:model/TimelineReviewedEventLinks} The populated <code>TimelineReviewedEventLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimelineReviewedEventLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = TimelineReviewedEventLinksHtml.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = TimelineReviewedEventLinksHtml.constructFromObject(data['pull_request']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimelineReviewedEventLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimelineReviewedEventLinks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimelineReviewedEventLinks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `html`
        if (data['html']) { // data not null
          TimelineReviewedEventLinksHtml.validateJSON(data['html']);
        }
        // validate the optional field `pull_request`
        if (data['pull_request']) { // data not null
          TimelineReviewedEventLinksHtml.validateJSON(data['pull_request']);
        }

        return true;
    }


}

TimelineReviewedEventLinks.RequiredProperties = ["html", "pull_request"];

/**
 * @member {module:model/TimelineReviewedEventLinksHtml} html
 */
TimelineReviewedEventLinks.prototype['html'] = undefined;

/**
 * @member {module:model/TimelineReviewedEventLinksHtml} pull_request
 */
TimelineReviewedEventLinks.prototype['pull_request'] = undefined;






export default TimelineReviewedEventLinks;

