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
 * The checking result of capacity name availability.
 *
 */
class CheckCapacityNameAvailabilityResult {
  /**
   * Create a CheckCapacityNameAvailabilityResult.
   * @property {boolean} [nameAvailable] Indicator of availability of the
   * capacity name.
   * @property {string} [reason] The reason of unavailability.
   * @property {string} [message] The detailed message of the request
   * unavailability.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckCapacityNameAvailabilityResult
   *
   * @returns {object} metadata of CheckCapacityNameAvailabilityResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckCapacityNameAvailabilityResult',
      type: {
        name: 'Composite',
        className: 'CheckCapacityNameAvailabilityResult',
        modelProperties: {
          nameAvailable: {
            required: false,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckCapacityNameAvailabilityResult;