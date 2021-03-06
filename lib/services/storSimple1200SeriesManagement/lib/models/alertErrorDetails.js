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
 * Errordetails for the alert
 *
 */
class AlertErrorDetails {
  /**
   * Create a AlertErrorDetails.
   * @member {string} [errorCode] Error code.
   * @member {string} [errorMessage] Error Message
   * @member {number} [occurences] Number of occurences.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertErrorDetails
   *
   * @returns {object} metadata of AlertErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertErrorDetails',
      type: {
        name: 'Composite',
        className: 'AlertErrorDetails',
        modelProperties: {
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'errorMessage',
            type: {
              name: 'String'
            }
          },
          occurences: {
            required: false,
            serializedName: 'occurences',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertErrorDetails;
