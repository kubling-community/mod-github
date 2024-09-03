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
 * The CodeScanningUploadSarifRequest model module.
 * @module model/CodeScanningUploadSarifRequest
 * @version 1.1.4
 */
class CodeScanningUploadSarifRequest {
    /**
     * Constructs a new <code>CodeScanningUploadSarifRequest</code>.
     * @alias module:model/CodeScanningUploadSarifRequest
     * @param commitSha {String} The SHA of the commit to which the analysis you are uploading relates.
     * @param ref {String} The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
     * @param sarif {String} A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see \"[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning).\"
     */
    constructor(commitSha, ref, sarif) { 
        
        CodeScanningUploadSarifRequest.initialize(this, commitSha, ref, sarif);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commitSha, ref, sarif) { 
        obj['commit_sha'] = commitSha;
        obj['ref'] = ref;
        obj['sarif'] = sarif;
    }

    /**
     * Constructs a <code>CodeScanningUploadSarifRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningUploadSarifRequest} obj Optional instance to populate.
     * @return {module:model/CodeScanningUploadSarifRequest} The populated <code>CodeScanningUploadSarifRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeScanningUploadSarifRequest();

            if (data.hasOwnProperty('commit_sha')) {
                obj['commit_sha'] = ApiClient.convertToType(data['commit_sha'], 'String');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('sarif')) {
                obj['sarif'] = ApiClient.convertToType(data['sarif'], 'String');
            }
            if (data.hasOwnProperty('checkout_uri')) {
                obj['checkout_uri'] = ApiClient.convertToType(data['checkout_uri'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('tool_name')) {
                obj['tool_name'] = ApiClient.convertToType(data['tool_name'], 'String');
            }
            if (data.hasOwnProperty('validate')) {
                obj['validate'] = ApiClient.convertToType(data['validate'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeScanningUploadSarifRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeScanningUploadSarifRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodeScanningUploadSarifRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['commit_sha'] && !(typeof data['commit_sha'] === 'string' || data['commit_sha'] instanceof String)) {
            throw new Error("Expected the field `commit_sha` to be a primitive type in the JSON string but got " + data['commit_sha']);
        }
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }
        // ensure the json data is a string
        if (data['sarif'] && !(typeof data['sarif'] === 'string' || data['sarif'] instanceof String)) {
            throw new Error("Expected the field `sarif` to be a primitive type in the JSON string but got " + data['sarif']);
        }
        // ensure the json data is a string
        if (data['checkout_uri'] && !(typeof data['checkout_uri'] === 'string' || data['checkout_uri'] instanceof String)) {
            throw new Error("Expected the field `checkout_uri` to be a primitive type in the JSON string but got " + data['checkout_uri']);
        }
        // ensure the json data is a string
        if (data['tool_name'] && !(typeof data['tool_name'] === 'string' || data['tool_name'] instanceof String)) {
            throw new Error("Expected the field `tool_name` to be a primitive type in the JSON string but got " + data['tool_name']);
        }

        return true;
    }


}

CodeScanningUploadSarifRequest.RequiredProperties = ["commit_sha", "ref", "sarif"];

/**
 * The SHA of the commit to which the analysis you are uploading relates.
 * @member {String} commit_sha
 */
CodeScanningUploadSarifRequest.prototype['commit_sha'] = undefined;

/**
 * The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
 * @member {String} ref
 */
CodeScanningUploadSarifRequest.prototype['ref'] = undefined;

/**
 * A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see \"[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning).\"
 * @member {String} sarif
 */
CodeScanningUploadSarifRequest.prototype['sarif'] = undefined;

/**
 * The base directory used in the analysis, as it appears in the SARIF file. This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
 * @member {String} checkout_uri
 */
CodeScanningUploadSarifRequest.prototype['checkout_uri'] = undefined;

/**
 * The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {Date} started_at
 */
CodeScanningUploadSarifRequest.prototype['started_at'] = undefined;

/**
 * The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to \"API\". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.
 * @member {String} tool_name
 */
CodeScanningUploadSarifRequest.prototype['tool_name'] = undefined;

/**
 * Whether the SARIF file will be validated according to the code scanning specifications. This parameter is intended to help integrators ensure that the uploaded SARIF files are correctly rendered by code scanning.
 * @member {Boolean} validate
 */
CodeScanningUploadSarifRequest.prototype['validate'] = undefined;






export default CodeScanningUploadSarifRequest;

