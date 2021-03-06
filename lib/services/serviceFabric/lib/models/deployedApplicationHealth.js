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
 * Information about the health of an application deployed on a Service Fabric
 * node.
 *
 * @extends models['EntityHealth']
 */
class DeployedApplicationHealth extends models['EntityHealth'] {
  /**
   * Create a DeployedApplicationHealth.
   * @property {string} [name] Name of the application deployed on the node
   * whose health information is described by this object.
   * @property {string} [nodeName] Name of the node where this application is
   * deployed.
   * @property {array} [deployedServicePackageHealthStates] Deployed service
   * package health states for the current deployed application as found in the
   * health store.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedApplicationHealth
   *
   * @returns {object} metadata of DeployedApplicationHealth
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedApplicationHealth',
      type: {
        name: 'Composite',
        className: 'DeployedApplicationHealth',
        modelProperties: {
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          healthEvents: {
            required: false,
            serializedName: 'HealthEvents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthEventElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthEvent'
                  }
              }
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthEvaluationWrapperElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthEvaluationWrapper'
                  }
              }
            }
          },
          healthStatistics: {
            required: false,
            serializedName: 'HealthStatistics',
            type: {
              name: 'Composite',
              className: 'HealthStatistics'
            }
          },
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: false,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          deployedServicePackageHealthStates: {
            required: false,
            serializedName: 'DeployedServicePackageHealthStates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeployedServicePackageHealthStateElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeployedServicePackageHealthState'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedApplicationHealth;
