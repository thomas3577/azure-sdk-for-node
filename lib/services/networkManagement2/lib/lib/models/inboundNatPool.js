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
 * Inbound NAT pool of the load balancer.
 *
 * @extends models['SubResource']
 */
class InboundNatPool extends models['SubResource'] {
  /**
   * Create a InboundNatPool.
   * @member {object} [frontendIPConfiguration] A reference to frontend IP
   * addresses.
   * @member {string} [frontendIPConfiguration.id] Resource ID.
   * @member {string} protocol Possible values include: 'Udp', 'Tcp', 'All'
   * @member {number} frontendPortRangeStart The first port number in the range
   * of external ports that will be used to provide Inbound Nat to NICs
   * associated with a load balancer. Acceptable values range between 1 and
   * 65534.
   * @member {number} frontendPortRangeEnd The last port number in the range of
   * external ports that will be used to provide Inbound Nat to NICs associated
   * with a load balancer. Acceptable values range between 1 and 65535.
   * @member {number} backendPort The port used for internal connections on the
   * endpoint. Acceptable values are between 1 and 65535.
   * @member {number} [idleTimeoutInMinutes] The timeout for the TCP idle
   * connection. The value can be set between 4 and 30 minutes. The default
   * value is 4 minutes. This element is only used when the protocol is set to
   * TCP.
   * @member {boolean} [enableFloatingIP] Configures a virtual machine's
   * endpoint for the floating IP capability required to configure a SQL
   * AlwaysOn Availability Group. This setting is required when using the SQL
   * AlwaysOn Availability Groups in SQL server. This setting can't be changed
   * after you create the endpoint.
   * @member {string} [provisioningState] Gets the provisioning state of the
   * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @member {string} [name] The name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @member {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InboundNatPool
   *
   * @returns {object} metadata of InboundNatPool
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InboundNatPool',
      type: {
        name: 'Composite',
        className: 'InboundNatPool',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          frontendIPConfiguration: {
            required: false,
            serializedName: 'properties.frontendIPConfiguration',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          protocol: {
            required: true,
            serializedName: 'properties.protocol',
            type: {
              name: 'String'
            }
          },
          frontendPortRangeStart: {
            required: true,
            serializedName: 'properties.frontendPortRangeStart',
            type: {
              name: 'Number'
            }
          },
          frontendPortRangeEnd: {
            required: true,
            serializedName: 'properties.frontendPortRangeEnd',
            type: {
              name: 'Number'
            }
          },
          backendPort: {
            required: true,
            serializedName: 'properties.backendPort',
            type: {
              name: 'Number'
            }
          },
          idleTimeoutInMinutes: {
            required: false,
            serializedName: 'properties.idleTimeoutInMinutes',
            type: {
              name: 'Number'
            }
          },
          enableFloatingIP: {
            required: false,
            serializedName: 'properties.enableFloatingIP',
            type: {
              name: 'Boolean'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InboundNatPool;