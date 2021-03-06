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

const models = require('./index');

/**
 * The top-level response that represents a failed request.
 *
 * @extends models['Response']
 */
class ErrorResponse extends models['Response'] {
  /**
   * Create a ErrorResponse.
   * @member {array} errors A list of errors that describe the reasons why the
   * request failed.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'ErrorResponse',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          errors: {
            required: true,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorModel'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
