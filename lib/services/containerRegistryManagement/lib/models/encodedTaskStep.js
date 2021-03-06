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
 * The properties of a encoded task step.
 *
 * @extends models['TaskStepProperties']
 */
class EncodedTaskStep extends models['TaskStepProperties'] {
  /**
   * Create a EncodedTaskStep.
   * @member {string} encodedTaskContent Base64 encoded value of the
   * template/definition file content.
   * @member {string} [encodedValuesContent] Base64 encoded value of the
   * parameters/values file content.
   * @member {array} [values] The collection of overridable values that can be
   * passed when running a task.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EncodedTaskStep
   *
   * @returns {object} metadata of EncodedTaskStep
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EncodedTask',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'TaskStepProperties',
        className: 'EncodedTaskStep',
        modelProperties: {
          baseImageDependencies: {
            required: false,
            readOnly: true,
            serializedName: 'baseImageDependencies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BaseImageDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'BaseImageDependency'
                  }
              }
            }
          },
          contextPath: {
            required: false,
            serializedName: 'contextPath',
            type: {
              name: 'String'
            }
          },
          contextAccessToken: {
            required: false,
            serializedName: 'contextAccessToken',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          encodedTaskContent: {
            required: true,
            serializedName: 'encodedTaskContent',
            type: {
              name: 'String'
            }
          },
          encodedValuesContent: {
            required: false,
            serializedName: 'encodedValuesContent',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SetValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'SetValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EncodedTaskStep;
