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
 * Workload specific recoverypoint, specifcally encaspulates full/diff
 * recoverypoint
 *
 * @extends models['RecoveryPoint']
 */
class AzureWorkloadRecoveryPoint extends models['RecoveryPoint'] {
  /**
   * Create a AzureWorkloadRecoveryPoint.
   * @member {date} [recoveryPointTimeInUTC] UTC time at which recoverypoint
   * was created
   * @member {string} [type] Type of restore point. Possible values include:
   * 'Invalid', 'Full', 'Log', 'Differential'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureWorkloadRecoveryPoint
   *
   * @returns {object} metadata of AzureWorkloadRecoveryPoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureWorkloadRecoveryPoint',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'objectType',
          clientName: 'objectType'
        },
        uberParent: 'RecoveryPoint',
        className: 'AzureWorkloadRecoveryPoint',
        modelProperties: {
          objectType: {
            required: true,
            serializedName: 'objectType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          recoveryPointTimeInUTC: {
            required: false,
            serializedName: 'recoveryPointTimeInUTC',
            type: {
              name: 'DateTime'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureWorkloadRecoveryPoint;