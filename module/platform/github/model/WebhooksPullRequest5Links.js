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
import Link from './Link';

/**
 * The WebhooksPullRequest5Links model module.
 * @module model/WebhooksPullRequest5Links
 * @version 1.1.4
 */
class WebhooksPullRequest5Links {
    /**
     * Constructs a new <code>WebhooksPullRequest5Links</code>.
     * @alias module:model/WebhooksPullRequest5Links
     * @param comments {module:model/Link} 
     * @param commits {module:model/Link} 
     * @param html {module:model/Link} 
     * @param issue {module:model/Link} 
     * @param reviewComment {module:model/Link} 
     * @param reviewComments {module:model/Link} 
     * @param self {module:model/Link} 
     * @param statuses {module:model/Link} 
     */
    constructor(comments, commits, html, issue, reviewComment, reviewComments, self, statuses) { 
        
        WebhooksPullRequest5Links.initialize(this, comments, commits, html, issue, reviewComment, reviewComments, self, statuses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, comments, commits, html, issue, reviewComment, reviewComments, self, statuses) { 
        obj['comments'] = comments;
        obj['commits'] = commits;
        obj['html'] = html;
        obj['issue'] = issue;
        obj['review_comment'] = reviewComment;
        obj['review_comments'] = reviewComments;
        obj['self'] = self;
        obj['statuses'] = statuses;
    }

    /**
     * Constructs a <code>WebhooksPullRequest5Links</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksPullRequest5Links} obj Optional instance to populate.
     * @return {module:model/WebhooksPullRequest5Links} The populated <code>WebhooksPullRequest5Links</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksPullRequest5Links();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = Link.constructFromObject(data['comments']);
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = Link.constructFromObject(data['commits']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = Link.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = Link.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('review_comment')) {
                obj['review_comment'] = Link.constructFromObject(data['review_comment']);
            }
            if (data.hasOwnProperty('review_comments')) {
                obj['review_comments'] = Link.constructFromObject(data['review_comments']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = Link.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = Link.constructFromObject(data['statuses']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksPullRequest5Links</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksPullRequest5Links</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhooksPullRequest5Links.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `comments`
        if (data['comments']) { // data not null
          Link.validateJSON(data['comments']);
        }
        // validate the optional field `commits`
        if (data['commits']) { // data not null
          Link.validateJSON(data['commits']);
        }
        // validate the optional field `html`
        if (data['html']) { // data not null
          Link.validateJSON(data['html']);
        }
        // validate the optional field `issue`
        if (data['issue']) { // data not null
          Link.validateJSON(data['issue']);
        }
        // validate the optional field `review_comment`
        if (data['review_comment']) { // data not null
          Link.validateJSON(data['review_comment']);
        }
        // validate the optional field `review_comments`
        if (data['review_comments']) { // data not null
          Link.validateJSON(data['review_comments']);
        }
        // validate the optional field `self`
        if (data['self']) { // data not null
          Link.validateJSON(data['self']);
        }
        // validate the optional field `statuses`
        if (data['statuses']) { // data not null
          Link.validateJSON(data['statuses']);
        }

        return true;
    }


}

WebhooksPullRequest5Links.RequiredProperties = ["comments", "commits", "html", "issue", "review_comment", "review_comments", "self", "statuses"];

/**
 * @member {module:model/Link} comments
 */
WebhooksPullRequest5Links.prototype['comments'] = undefined;

/**
 * @member {module:model/Link} commits
 */
WebhooksPullRequest5Links.prototype['commits'] = undefined;

/**
 * @member {module:model/Link} html
 */
WebhooksPullRequest5Links.prototype['html'] = undefined;

/**
 * @member {module:model/Link} issue
 */
WebhooksPullRequest5Links.prototype['issue'] = undefined;

/**
 * @member {module:model/Link} review_comment
 */
WebhooksPullRequest5Links.prototype['review_comment'] = undefined;

/**
 * @member {module:model/Link} review_comments
 */
WebhooksPullRequest5Links.prototype['review_comments'] = undefined;

/**
 * @member {module:model/Link} self
 */
WebhooksPullRequest5Links.prototype['self'] = undefined;

/**
 * @member {module:model/Link} statuses
 */
WebhooksPullRequest5Links.prototype['statuses'] = undefined;






export default WebhooksPullRequest5Links;

