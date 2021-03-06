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
 * An environment, which is essentially an ARM template deployment.
 *
 * @extends models['UpdateResource']
 */
class DtlEnvironmentFragment extends models['UpdateResource'] {
  /**
   * Create a DtlEnvironmentFragment.
   * @member {object} [deploymentProperties] The deployment properties of the
   * environment.
   * @member {string} [deploymentProperties.armTemplateId] The Azure Resource
   * Manager template's identifier.
   * @member {array} [deploymentProperties.parameters] The parameters of the
   * Azure Resource Manager template.
   * @member {string} [armTemplateDisplayName] The display name of the Azure
   * Resource Manager template that produced the environment.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DtlEnvironmentFragment
   *
   * @returns {object} metadata of DtlEnvironmentFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DtlEnvironmentFragment',
      type: {
        name: 'Composite',
        className: 'DtlEnvironmentFragment',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          deploymentProperties: {
            required: false,
            serializedName: 'properties.deploymentProperties',
            type: {
              name: 'Composite',
              className: 'EnvironmentDeploymentPropertiesFragment'
            }
          },
          armTemplateDisplayName: {
            required: false,
            serializedName: 'properties.armTemplateDisplayName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DtlEnvironmentFragment;
