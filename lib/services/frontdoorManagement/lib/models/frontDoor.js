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
 * Front Door represents a collection of backend endpoints to route traffic to
 * along with rules that specify how traffic is sent there.
 *
 * @extends models['Resource']
 */
class FrontDoor extends models['Resource'] {
  /**
   * Create a FrontDoor.
   * @member {string} [friendlyName] A friendly name for the frontDoor
   * @member {array} [routingRules] Routing rules associated with this Front
   * Door.
   * @member {array} [loadBalancingSettings] Load balancing settings associated
   * with this Front Door instance.
   * @member {array} [healthProbeSettings] Health probe settings associated
   * with this Front Door instance.
   * @member {array} [backendPools] Backend pools available to routing rules.
   * @member {array} [frontendEndpoints] Frontend endpoints available to
   * routing rules.
   * @member {string} [enabledState] Operational status of the Front Door load
   * balancer. Permitted values are 'Enabled' or 'Disabled'. Possible values
   * include: 'Enabled', 'Disabled'
   * @member {string} [resourceState] Resource status of the Front Door.
   * Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   * @member {string} [provisioningState] Provisioning state of the Front Door.
   * @member {string} [cname] The host that each frontendEndpoint must CNAME
   * to.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FrontDoor
   *
   * @returns {object} metadata of FrontDoor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FrontDoor',
      type: {
        name: 'Composite',
        className: 'FrontDoor',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
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
          friendlyName: {
            required: false,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          routingRules: {
            required: false,
            serializedName: 'properties.routingRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoutingRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoutingRule'
                  }
              }
            }
          },
          loadBalancingSettings: {
            required: false,
            serializedName: 'properties.loadBalancingSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LoadBalancingSettingsModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'LoadBalancingSettingsModel'
                  }
              }
            }
          },
          healthProbeSettings: {
            required: false,
            serializedName: 'properties.healthProbeSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthProbeSettingsModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthProbeSettingsModel'
                  }
              }
            }
          },
          backendPools: {
            required: false,
            serializedName: 'properties.backendPools',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BackendPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'BackendPool'
                  }
              }
            }
          },
          frontendEndpoints: {
            required: false,
            serializedName: 'properties.frontendEndpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FrontendEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'FrontendEndpoint'
                  }
              }
            }
          },
          enabledState: {
            required: false,
            serializedName: 'properties.enabledState',
            type: {
              name: 'String'
            }
          },
          resourceState: {
            required: false,
            serializedName: 'properties.resourceState',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          cname: {
            required: false,
            readOnly: true,
            serializedName: 'properties.cname',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FrontDoor;
