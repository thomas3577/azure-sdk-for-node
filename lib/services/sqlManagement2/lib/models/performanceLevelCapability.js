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
 * The performance level capability.
 *
 */
class PerformanceLevelCapability {
  /**
   * Create a PerformanceLevelCapability.
   * @member {number} [value] Performance level value.
   * @member {string} [unit] Unit type used to measure performance level.
   * Possible values include: 'DTU', 'VCores'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PerformanceLevelCapability
   *
   * @returns {object} metadata of PerformanceLevelCapability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PerformanceLevelCapability',
      type: {
        name: 'Composite',
        className: 'PerformanceLevelCapability',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PerformanceLevelCapability;