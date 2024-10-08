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
import Team1 from './Team1';
import TeamParent from './TeamParent';
import User1 from './User1';

/**
 * The PullRequestRequestedReviewersInner model module.
 * @module model/PullRequestRequestedReviewersInner
 * @version 1.1.4
 */
class PullRequestRequestedReviewersInner {
    /**
     * Constructs a new <code>PullRequestRequestedReviewersInner</code>.
     * @alias module:model/PullRequestRequestedReviewersInner
     * @param {(module:model/Team1|module:model/User1)} instance The actual instance to initialize PullRequestRequestedReviewersInner.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "User1") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                User1.validateJSON(instance); // throw an exception if no match
                // create User1 from JS object
                this.actualInstance = User1.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into User1
            errorMessages.push("Failed to construct User1: " + err)
        }

        try {
            if (typeof instance === "Team1") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Team1.validateJSON(instance); // throw an exception if no match
                // create Team1 from JS object
                this.actualInstance = Team1.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Team1
            errorMessages.push("Failed to construct Team1: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `PullRequestRequestedReviewersInner` with oneOf schemas Team1, User1. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `PullRequestRequestedReviewersInner` with oneOf schemas Team1, User1. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>PullRequestRequestedReviewersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestRequestedReviewersInner} obj Optional instance to populate.
     * @return {module:model/PullRequestRequestedReviewersInner} The populated <code>PullRequestRequestedReviewersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        return new PullRequestRequestedReviewersInner(data);
    }

    /**
     * Gets the actual instance, which can be <code>Team1</code>, <code>User1</code>.
     * @return {(module:model/Team1|module:model/User1)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Team1</code>, <code>User1</code>.
     * @param {(module:model/Team1|module:model/User1)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = PullRequestRequestedReviewersInner.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of PullRequestRequestedReviewersInner from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/PullRequestRequestedReviewersInner} An instance of PullRequestRequestedReviewersInner.
     */
    static fromJSON = function(json_string){
        return PullRequestRequestedReviewersInner.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} avatar_url
 */
PullRequestRequestedReviewersInner.prototype['avatar_url'] = undefined;

/**
 * @member {Boolean} deleted
 */
PullRequestRequestedReviewersInner.prototype['deleted'] = undefined;

/**
 * @member {String} email
 */
PullRequestRequestedReviewersInner.prototype['email'] = undefined;

/**
 * @member {String} events_url
 */
PullRequestRequestedReviewersInner.prototype['events_url'] = undefined;

/**
 * @member {String} followers_url
 */
PullRequestRequestedReviewersInner.prototype['followers_url'] = undefined;

/**
 * @member {String} following_url
 */
PullRequestRequestedReviewersInner.prototype['following_url'] = undefined;

/**
 * @member {String} gists_url
 */
PullRequestRequestedReviewersInner.prototype['gists_url'] = undefined;

/**
 * @member {String} gravatar_id
 */
PullRequestRequestedReviewersInner.prototype['gravatar_id'] = undefined;

/**
 * @member {String} html_url
 */
PullRequestRequestedReviewersInner.prototype['html_url'] = undefined;

/**
 * Unique identifier of the team
 * @member {Number} id
 */
PullRequestRequestedReviewersInner.prototype['id'] = undefined;

/**
 * @member {String} login
 */
PullRequestRequestedReviewersInner.prototype['login'] = undefined;

/**
 * Name of the team
 * @member {String} name
 */
PullRequestRequestedReviewersInner.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
PullRequestRequestedReviewersInner.prototype['node_id'] = undefined;

/**
 * @member {String} organizations_url
 */
PullRequestRequestedReviewersInner.prototype['organizations_url'] = undefined;

/**
 * @member {String} received_events_url
 */
PullRequestRequestedReviewersInner.prototype['received_events_url'] = undefined;

/**
 * @member {String} repos_url
 */
PullRequestRequestedReviewersInner.prototype['repos_url'] = undefined;

/**
 * @member {Boolean} site_admin
 */
PullRequestRequestedReviewersInner.prototype['site_admin'] = undefined;

/**
 * @member {String} starred_url
 */
PullRequestRequestedReviewersInner.prototype['starred_url'] = undefined;

/**
 * @member {String} subscriptions_url
 */
PullRequestRequestedReviewersInner.prototype['subscriptions_url'] = undefined;

/**
 * @member {module:model/PullRequestRequestedReviewersInner.TypeEnum} type
 */
PullRequestRequestedReviewersInner.prototype['type'] = undefined;

/**
 * URL for the team
 * @member {String} url
 */
PullRequestRequestedReviewersInner.prototype['url'] = undefined;

/**
 * Description of the team
 * @member {String} description
 */
PullRequestRequestedReviewersInner.prototype['description'] = undefined;

/**
 * @member {String} members_url
 */
PullRequestRequestedReviewersInner.prototype['members_url'] = undefined;

/**
 * @member {module:model/TeamParent} parent
 */
PullRequestRequestedReviewersInner.prototype['parent'] = undefined;

/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */
PullRequestRequestedReviewersInner.prototype['permission'] = undefined;

/**
 * @member {module:model/PullRequestRequestedReviewersInner.PrivacyEnum} privacy
 */
PullRequestRequestedReviewersInner.prototype['privacy'] = undefined;

/**
 * @member {String} repositories_url
 */
PullRequestRequestedReviewersInner.prototype['repositories_url'] = undefined;

/**
 * @member {String} slug
 */
PullRequestRequestedReviewersInner.prototype['slug'] = undefined;


PullRequestRequestedReviewersInner.OneOf = ["Team1", "User1"];

export default PullRequestRequestedReviewersInner;

