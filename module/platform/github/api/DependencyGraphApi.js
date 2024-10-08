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


import ApiClient from "../ApiClient";
import DependencyGraphCreateRepositorySnapshot201Response from '../model/DependencyGraphCreateRepositorySnapshot201Response';
import DependencyGraphDiffInner from '../model/DependencyGraphDiffInner';
import DependencyGraphSpdxSbom from '../model/DependencyGraphSpdxSbom';

/**
* DependencyGraph service.
* @module api/DependencyGraphApi
* @version 1.1.4
*/
export default class DependencyGraphApi {

    /**
    * Constructs a new DependencyGraphApi. 
    * @alias module:api/DependencyGraphApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the dependencyGraphCreateRepositorySnapshot operation.
     * @callback module:api/DependencyGraphApi~dependencyGraphCreateRepositorySnapshotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DependencyGraphCreateRepositorySnapshot201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a snapshot of dependencies for a repository
     * Create a new snapshot of a repository's dependencies.  The authenticated user must have access to the repository.  OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
     * @param {String} owner The account owner of the repository. The name is not case sensitive.
     * @param {String} repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param {module:model/Snapshot} snapshot 
     * @param {module:api/DependencyGraphApi~dependencyGraphCreateRepositorySnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DependencyGraphCreateRepositorySnapshot201Response}
     */
    dependencyGraphCreateRepositorySnapshot(owner, repo, snapshot, callback) {
      let postBody = snapshot;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dependencyGraphCreateRepositorySnapshot");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling dependencyGraphCreateRepositorySnapshot");
      }
      // verify the required parameter 'snapshot' is set
      if (snapshot === undefined || snapshot === null) {
        throw new Error("Missing the required parameter 'snapshot' when calling dependencyGraphCreateRepositorySnapshot");
      }

      let pathParams = {
        'owner': owner,
        'repo': repo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DependencyGraphCreateRepositorySnapshot201Response;
      return this.apiClient.callApi(
        '/repos/{owner}/{repo}/dependency-graph/snapshots', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dependencyGraphDiffRange operation.
     * @callback module:api/DependencyGraphApi~dependencyGraphDiffRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DependencyGraphDiffInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a diff of the dependencies between commits
     * Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
     * @param {String} owner The account owner of the repository. The name is not case sensitive.
     * @param {String} repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param {String} basehead The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `{base}...{head}`.
     * @param {Object} opts Optional parameters
     * @param {String} [name] The full path, relative to the repository root, of the dependency manifest file.
     * @param {module:api/DependencyGraphApi~dependencyGraphDiffRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DependencyGraphDiffInner>}
     */
    dependencyGraphDiffRange(owner, repo, basehead, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dependencyGraphDiffRange");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling dependencyGraphDiffRange");
      }
      // verify the required parameter 'basehead' is set
      if (basehead === undefined || basehead === null) {
        throw new Error("Missing the required parameter 'basehead' when calling dependencyGraphDiffRange");
      }

      let pathParams = {
        'owner': owner,
        'repo': repo,
        'basehead': basehead
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DependencyGraphDiffInner];
      return this.apiClient.callApi(
        '/repos/{owner}/{repo}/dependency-graph/compare/{basehead}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dependencyGraphExportSbom operation.
     * @callback module:api/DependencyGraphApi~dependencyGraphExportSbomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DependencyGraphSpdxSbom} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a software bill of materials (SBOM) for a repository.
     * Exports the software bill of materials (SBOM) for a repository in SPDX JSON format.
     * @param {String} owner The account owner of the repository. The name is not case sensitive.
     * @param {String} repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param {module:api/DependencyGraphApi~dependencyGraphExportSbomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DependencyGraphSpdxSbom}
     */
    dependencyGraphExportSbom(owner, repo, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dependencyGraphExportSbom");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling dependencyGraphExportSbom");
      }

      let pathParams = {
        'owner': owner,
        'repo': repo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DependencyGraphSpdxSbom;
      return this.apiClient.callApi(
        '/repos/{owner}/{repo}/dependency-graph/sbom', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
