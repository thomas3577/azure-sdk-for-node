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
 * A WebHDFS exception thrown when an unexpected error occurs during an
 * operation. Thrown when a 500 error response code is returned (Internal
 * server error).
 *
 * @extends models['AdlsRemoteException']
 */
class AdlsRuntimeException extends models['AdlsRemoteException'] {
  /**
   * Create a AdlsRuntimeException.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AdlsRuntimeException
   *
   * @returns {object} metadata of AdlsRuntimeException
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RuntimeException',
      type: {
        name: 'Composite',
        className: 'AdlsRuntimeException',
        modelProperties: {
          javaClassName: {
            required: false,
            readOnly: true,
            serializedName: 'javaClassName',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          exception: {
            required: true,
            serializedName: 'exception',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AdlsRuntimeException;