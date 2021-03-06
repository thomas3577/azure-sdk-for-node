/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A list of Azure SQL job agents.
 */
class JobAgentListResult extends Array {
  /**
   * Create a JobAgentListResult.
   * @member {string} [nextLink] Link to retrieve next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobAgentListResult
   *
   * @returns {object} metadata of JobAgentListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobAgentListResult',
      type: {
        name: 'Composite',
        className: 'JobAgentListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobAgentElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobAgent'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobAgentListResult;
