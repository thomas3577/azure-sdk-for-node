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
 * Information about a partition that is singleton. The services with singleton
 * partitioning scheme are effectively non-partitioned. They only have one
 * partition.
 *
 * @extends models['PartitionInformation']
 */
class SingletonPartitionInformation extends models['PartitionInformation'] {
  /**
   * Create a SingletonPartitionInformation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SingletonPartitionInformation
   *
   * @returns {object} metadata of SingletonPartitionInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Singleton',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ServicePartitionKind',
          clientName: 'servicePartitionKind'
        },
        uberParent: 'PartitionInformation',
        className: 'SingletonPartitionInformation',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          servicePartitionKind: {
            required: true,
            serializedName: 'ServicePartitionKind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SingletonPartitionInformation;
