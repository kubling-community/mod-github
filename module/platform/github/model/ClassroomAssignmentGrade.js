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
 * The ClassroomAssignmentGrade model module.
 * @module model/ClassroomAssignmentGrade
 * @version 1.1.4
 */
class ClassroomAssignmentGrade {
    /**
     * Constructs a new <code>ClassroomAssignmentGrade</code>.
     * Grade for a student or groups GitHub Classroom assignment
     * @alias module:model/ClassroomAssignmentGrade
     * @param assignmentName {String} Name of the assignment
     * @param assignmentUrl {String} URL of the assignment
     * @param starterCodeUrl {String} URL of the starter code for the assignment
     * @param githubUsername {String} GitHub username of the student
     * @param rosterIdentifier {String} Roster identifier of the student
     * @param studentRepositoryName {String} Name of the student's assignment repository
     * @param studentRepositoryUrl {String} URL of the student's assignment repository
     * @param submissionTimestamp {String} Timestamp of the student's assignment submission
     * @param pointsAwarded {Number} Number of points awarded to the student
     * @param pointsAvailable {Number} Number of points available for the assignment
     */
    constructor(assignmentName, assignmentUrl, starterCodeUrl, githubUsername, rosterIdentifier, studentRepositoryName, studentRepositoryUrl, submissionTimestamp, pointsAwarded, pointsAvailable) { 
        
        ClassroomAssignmentGrade.initialize(this, assignmentName, assignmentUrl, starterCodeUrl, githubUsername, rosterIdentifier, studentRepositoryName, studentRepositoryUrl, submissionTimestamp, pointsAwarded, pointsAvailable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assignmentName, assignmentUrl, starterCodeUrl, githubUsername, rosterIdentifier, studentRepositoryName, studentRepositoryUrl, submissionTimestamp, pointsAwarded, pointsAvailable) { 
        obj['assignment_name'] = assignmentName;
        obj['assignment_url'] = assignmentUrl;
        obj['starter_code_url'] = starterCodeUrl;
        obj['github_username'] = githubUsername;
        obj['roster_identifier'] = rosterIdentifier;
        obj['student_repository_name'] = studentRepositoryName;
        obj['student_repository_url'] = studentRepositoryUrl;
        obj['submission_timestamp'] = submissionTimestamp;
        obj['points_awarded'] = pointsAwarded;
        obj['points_available'] = pointsAvailable;
    }

    /**
     * Constructs a <code>ClassroomAssignmentGrade</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassroomAssignmentGrade} obj Optional instance to populate.
     * @return {module:model/ClassroomAssignmentGrade} The populated <code>ClassroomAssignmentGrade</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassroomAssignmentGrade();

            if (data.hasOwnProperty('assignment_name')) {
                obj['assignment_name'] = ApiClient.convertToType(data['assignment_name'], 'String');
            }
            if (data.hasOwnProperty('assignment_url')) {
                obj['assignment_url'] = ApiClient.convertToType(data['assignment_url'], 'String');
            }
            if (data.hasOwnProperty('starter_code_url')) {
                obj['starter_code_url'] = ApiClient.convertToType(data['starter_code_url'], 'String');
            }
            if (data.hasOwnProperty('github_username')) {
                obj['github_username'] = ApiClient.convertToType(data['github_username'], 'String');
            }
            if (data.hasOwnProperty('roster_identifier')) {
                obj['roster_identifier'] = ApiClient.convertToType(data['roster_identifier'], 'String');
            }
            if (data.hasOwnProperty('student_repository_name')) {
                obj['student_repository_name'] = ApiClient.convertToType(data['student_repository_name'], 'String');
            }
            if (data.hasOwnProperty('student_repository_url')) {
                obj['student_repository_url'] = ApiClient.convertToType(data['student_repository_url'], 'String');
            }
            if (data.hasOwnProperty('submission_timestamp')) {
                obj['submission_timestamp'] = ApiClient.convertToType(data['submission_timestamp'], 'String');
            }
            if (data.hasOwnProperty('points_awarded')) {
                obj['points_awarded'] = ApiClient.convertToType(data['points_awarded'], 'Number');
            }
            if (data.hasOwnProperty('points_available')) {
                obj['points_available'] = ApiClient.convertToType(data['points_available'], 'Number');
            }
            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClassroomAssignmentGrade</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClassroomAssignmentGrade</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClassroomAssignmentGrade.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['assignment_name'] && !(typeof data['assignment_name'] === 'string' || data['assignment_name'] instanceof String)) {
            throw new Error("Expected the field `assignment_name` to be a primitive type in the JSON string but got " + data['assignment_name']);
        }
        // ensure the json data is a string
        if (data['assignment_url'] && !(typeof data['assignment_url'] === 'string' || data['assignment_url'] instanceof String)) {
            throw new Error("Expected the field `assignment_url` to be a primitive type in the JSON string but got " + data['assignment_url']);
        }
        // ensure the json data is a string
        if (data['starter_code_url'] && !(typeof data['starter_code_url'] === 'string' || data['starter_code_url'] instanceof String)) {
            throw new Error("Expected the field `starter_code_url` to be a primitive type in the JSON string but got " + data['starter_code_url']);
        }
        // ensure the json data is a string
        if (data['github_username'] && !(typeof data['github_username'] === 'string' || data['github_username'] instanceof String)) {
            throw new Error("Expected the field `github_username` to be a primitive type in the JSON string but got " + data['github_username']);
        }
        // ensure the json data is a string
        if (data['roster_identifier'] && !(typeof data['roster_identifier'] === 'string' || data['roster_identifier'] instanceof String)) {
            throw new Error("Expected the field `roster_identifier` to be a primitive type in the JSON string but got " + data['roster_identifier']);
        }
        // ensure the json data is a string
        if (data['student_repository_name'] && !(typeof data['student_repository_name'] === 'string' || data['student_repository_name'] instanceof String)) {
            throw new Error("Expected the field `student_repository_name` to be a primitive type in the JSON string but got " + data['student_repository_name']);
        }
        // ensure the json data is a string
        if (data['student_repository_url'] && !(typeof data['student_repository_url'] === 'string' || data['student_repository_url'] instanceof String)) {
            throw new Error("Expected the field `student_repository_url` to be a primitive type in the JSON string but got " + data['student_repository_url']);
        }
        // ensure the json data is a string
        if (data['submission_timestamp'] && !(typeof data['submission_timestamp'] === 'string' || data['submission_timestamp'] instanceof String)) {
            throw new Error("Expected the field `submission_timestamp` to be a primitive type in the JSON string but got " + data['submission_timestamp']);
        }
        // ensure the json data is a string
        if (data['group_name'] && !(typeof data['group_name'] === 'string' || data['group_name'] instanceof String)) {
            throw new Error("Expected the field `group_name` to be a primitive type in the JSON string but got " + data['group_name']);
        }

        return true;
    }


}

ClassroomAssignmentGrade.RequiredProperties = ["assignment_name", "assignment_url", "starter_code_url", "github_username", "roster_identifier", "student_repository_name", "student_repository_url", "submission_timestamp", "points_awarded", "points_available"];

/**
 * Name of the assignment
 * @member {String} assignment_name
 */
ClassroomAssignmentGrade.prototype['assignment_name'] = undefined;

/**
 * URL of the assignment
 * @member {String} assignment_url
 */
ClassroomAssignmentGrade.prototype['assignment_url'] = undefined;

/**
 * URL of the starter code for the assignment
 * @member {String} starter_code_url
 */
ClassroomAssignmentGrade.prototype['starter_code_url'] = undefined;

/**
 * GitHub username of the student
 * @member {String} github_username
 */
ClassroomAssignmentGrade.prototype['github_username'] = undefined;

/**
 * Roster identifier of the student
 * @member {String} roster_identifier
 */
ClassroomAssignmentGrade.prototype['roster_identifier'] = undefined;

/**
 * Name of the student's assignment repository
 * @member {String} student_repository_name
 */
ClassroomAssignmentGrade.prototype['student_repository_name'] = undefined;

/**
 * URL of the student's assignment repository
 * @member {String} student_repository_url
 */
ClassroomAssignmentGrade.prototype['student_repository_url'] = undefined;

/**
 * Timestamp of the student's assignment submission
 * @member {String} submission_timestamp
 */
ClassroomAssignmentGrade.prototype['submission_timestamp'] = undefined;

/**
 * Number of points awarded to the student
 * @member {Number} points_awarded
 */
ClassroomAssignmentGrade.prototype['points_awarded'] = undefined;

/**
 * Number of points available for the assignment
 * @member {Number} points_available
 */
ClassroomAssignmentGrade.prototype['points_available'] = undefined;

/**
 * If a group assignment, name of the group the student is in
 * @member {String} group_name
 */
ClassroomAssignmentGrade.prototype['group_name'] = undefined;






export default ClassroomAssignmentGrade;

