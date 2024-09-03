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
import AuthorAssociation from './AuthorAssociation';
import IssueEventDismissedReview from './IssueEventDismissedReview';
import IssueEventLabel from './IssueEventLabel';
import IssueEventMilestone from './IssueEventMilestone';
import IssueEventProjectCard from './IssueEventProjectCard';
import IssueEventRename from './IssueEventRename';
import NullableIntegration from './NullableIntegration';
import NullableIssue from './NullableIssue';
import NullableSimpleUser from './NullableSimpleUser';
import Team from './Team';

/**
 * The IssueEvent model module.
 * @module model/IssueEvent
 * @version 1.1.4
 */
class IssueEvent {
    /**
     * Constructs a new <code>IssueEvent</code>.
     * Issue Event
     * @alias module:model/IssueEvent
     * @param id {Number} 
     * @param nodeId {String} 
     * @param url {String} 
     * @param actor {module:model/NullableSimpleUser} 
     * @param event {String} 
     * @param commitId {String} 
     * @param commitUrl {String} 
     * @param createdAt {Date} 
     */
    constructor(id, nodeId, url, actor, event, commitId, commitUrl, createdAt) { 
        
        IssueEvent.initialize(this, id, nodeId, url, actor, event, commitId, commitUrl, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nodeId, url, actor, event, commitId, commitUrl, createdAt) { 
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['url'] = url;
        obj['actor'] = actor;
        obj['event'] = event;
        obj['commit_id'] = commitId;
        obj['commit_url'] = commitUrl;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>IssueEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEvent} obj Optional instance to populate.
     * @return {module:model/IssueEvent} The populated <code>IssueEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = NullableSimpleUser.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('commit_url')) {
                obj['commit_url'] = ApiClient.convertToType(data['commit_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = NullableIssue.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = IssueEventLabel.constructFromObject(data['label']);
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = NullableSimpleUser.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('assigner')) {
                obj['assigner'] = NullableSimpleUser.constructFromObject(data['assigner']);
            }
            if (data.hasOwnProperty('review_requester')) {
                obj['review_requester'] = NullableSimpleUser.constructFromObject(data['review_requester']);
            }
            if (data.hasOwnProperty('requested_reviewer')) {
                obj['requested_reviewer'] = NullableSimpleUser.constructFromObject(data['requested_reviewer']);
            }
            if (data.hasOwnProperty('requested_team')) {
                obj['requested_team'] = Team.constructFromObject(data['requested_team']);
            }
            if (data.hasOwnProperty('dismissed_review')) {
                obj['dismissed_review'] = IssueEventDismissedReview.constructFromObject(data['dismissed_review']);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = IssueEventMilestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('project_card')) {
                obj['project_card'] = IssueEventProjectCard.constructFromObject(data['project_card']);
            }
            if (data.hasOwnProperty('rename')) {
                obj['rename'] = IssueEventRename.constructFromObject(data['rename']);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = AuthorAssociation.constructFromObject(data['author_association']);
            }
            if (data.hasOwnProperty('lock_reason')) {
                obj['lock_reason'] = ApiClient.convertToType(data['lock_reason'], 'String');
            }
            if (data.hasOwnProperty('performed_via_github_app')) {
                obj['performed_via_github_app'] = NullableIntegration.constructFromObject(data['performed_via_github_app']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueEvent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueEvent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node_id'] && !(typeof data['node_id'] === 'string' || data['node_id'] instanceof String)) {
            throw new Error("Expected the field `node_id` to be a primitive type in the JSON string but got " + data['node_id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `actor`
        if (data['actor']) { // data not null
          NullableSimpleUser.validateJSON(data['actor']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['commit_id'] && !(typeof data['commit_id'] === 'string' || data['commit_id'] instanceof String)) {
            throw new Error("Expected the field `commit_id` to be a primitive type in the JSON string but got " + data['commit_id']);
        }
        // ensure the json data is a string
        if (data['commit_url'] && !(typeof data['commit_url'] === 'string' || data['commit_url'] instanceof String)) {
            throw new Error("Expected the field `commit_url` to be a primitive type in the JSON string but got " + data['commit_url']);
        }
        // validate the optional field `issue`
        if (data['issue']) { // data not null
          NullableIssue.validateJSON(data['issue']);
        }
        // validate the optional field `label`
        if (data['label']) { // data not null
          IssueEventLabel.validateJSON(data['label']);
        }
        // validate the optional field `assignee`
        if (data['assignee']) { // data not null
          NullableSimpleUser.validateJSON(data['assignee']);
        }
        // validate the optional field `assigner`
        if (data['assigner']) { // data not null
          NullableSimpleUser.validateJSON(data['assigner']);
        }
        // validate the optional field `review_requester`
        if (data['review_requester']) { // data not null
          NullableSimpleUser.validateJSON(data['review_requester']);
        }
        // validate the optional field `requested_reviewer`
        if (data['requested_reviewer']) { // data not null
          NullableSimpleUser.validateJSON(data['requested_reviewer']);
        }
        // validate the optional field `requested_team`
        if (data['requested_team']) { // data not null
          Team.validateJSON(data['requested_team']);
        }
        // validate the optional field `dismissed_review`
        if (data['dismissed_review']) { // data not null
          IssueEventDismissedReview.validateJSON(data['dismissed_review']);
        }
        // validate the optional field `milestone`
        if (data['milestone']) { // data not null
          IssueEventMilestone.validateJSON(data['milestone']);
        }
        // validate the optional field `project_card`
        if (data['project_card']) { // data not null
          IssueEventProjectCard.validateJSON(data['project_card']);
        }
        // validate the optional field `rename`
        if (data['rename']) { // data not null
          IssueEventRename.validateJSON(data['rename']);
        }
        // ensure the json data is a string
        if (data['lock_reason'] && !(typeof data['lock_reason'] === 'string' || data['lock_reason'] instanceof String)) {
            throw new Error("Expected the field `lock_reason` to be a primitive type in the JSON string but got " + data['lock_reason']);
        }
        // validate the optional field `performed_via_github_app`
        if (data['performed_via_github_app']) { // data not null
          NullableIntegration.validateJSON(data['performed_via_github_app']);
        }

        return true;
    }


}

IssueEvent.RequiredProperties = ["id", "node_id", "url", "actor", "event", "commit_id", "commit_url", "created_at"];

/**
 * @member {Number} id
 */
IssueEvent.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
IssueEvent.prototype['node_id'] = undefined;

/**
 * @member {String} url
 */
IssueEvent.prototype['url'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} actor
 */
IssueEvent.prototype['actor'] = undefined;

/**
 * @member {String} event
 */
IssueEvent.prototype['event'] = undefined;

/**
 * @member {String} commit_id
 */
IssueEvent.prototype['commit_id'] = undefined;

/**
 * @member {String} commit_url
 */
IssueEvent.prototype['commit_url'] = undefined;

/**
 * @member {Date} created_at
 */
IssueEvent.prototype['created_at'] = undefined;

/**
 * @member {module:model/NullableIssue} issue
 */
IssueEvent.prototype['issue'] = undefined;

/**
 * @member {module:model/IssueEventLabel} label
 */
IssueEvent.prototype['label'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} assignee
 */
IssueEvent.prototype['assignee'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} assigner
 */
IssueEvent.prototype['assigner'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} review_requester
 */
IssueEvent.prototype['review_requester'] = undefined;

/**
 * @member {module:model/NullableSimpleUser} requested_reviewer
 */
IssueEvent.prototype['requested_reviewer'] = undefined;

/**
 * @member {module:model/Team} requested_team
 */
IssueEvent.prototype['requested_team'] = undefined;

/**
 * @member {module:model/IssueEventDismissedReview} dismissed_review
 */
IssueEvent.prototype['dismissed_review'] = undefined;

/**
 * @member {module:model/IssueEventMilestone} milestone
 */
IssueEvent.prototype['milestone'] = undefined;

/**
 * @member {module:model/IssueEventProjectCard} project_card
 */
IssueEvent.prototype['project_card'] = undefined;

/**
 * @member {module:model/IssueEventRename} rename
 */
IssueEvent.prototype['rename'] = undefined;

/**
 * @member {module:model/AuthorAssociation} author_association
 */
IssueEvent.prototype['author_association'] = undefined;

/**
 * @member {String} lock_reason
 */
IssueEvent.prototype['lock_reason'] = undefined;

/**
 * @member {module:model/NullableIntegration} performed_via_github_app
 */
IssueEvent.prototype['performed_via_github_app'] = undefined;






export default IssueEvent;

