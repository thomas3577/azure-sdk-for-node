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
 * A machine in a migration project.
 *
 * @extends models['BaseResource']
 */
class Machine extends models['BaseResource'] {
  /**
   * Create a Machine.
   * @member {string} [id] Path reference to this machine.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines/{machineName}
   * @member {string} [name] Name of the machine. It is a GUID which is unique
   * identifier of machine in private data center. For user-readable name, we
   * have a displayName property on this machine.
   * @member {string} [eTag] For optimistic concurrency control.
   * @member {string} [type] Type of the object =
   * [Microsoft.Migrate/projects/machines].
   * @member {string} [bootType] Boot type of the machine. Possible values
   * include: 'Unknown', 'EFI', 'BIOS'
   * @member {string} [datacenterContainer] Container defined in the management
   * solution that this machine is part of in the datacenter.
   * @member {string} [datacenterManagementServer] Name of the server hosting
   * the datacenter management solution.
   * @member {string} [datacenterMachineId] ID of the machine as tracked by the
   * datacenter management solution.
   * @member {string} [datacenterManagementServerId] ID of the server hosting
   * the datacenter management solution.
   * @member {string} [description] Description of the machine
   * @member {string} [displayName] User readable name of the machine as
   * defined by the user in their private datacenter.
   * @member {number} [megabytesOfMemory] Memory in Megabytes.
   * @member {number} [numberOfCores] Processor count.
   * @member {string} [operatingSystem] Operating System of the machine.
   * @member {array} [groups] List of references to the groups that the machine
   * is member of.
   * @member {date} [createdTimestamp] Time when this machine was created.
   * Date-Time represented in ISO-8601 format.
   * @member {date} [updatedTimestamp] Time when this machine was last updated.
   * Date-Time represented in ISO-8601 format.
   * @member {date} [discoveredTimestamp] Time when this machine was discovered
   * by Azure Migrate agent. Date-Time represented in ISO-8601 format.
   * @member {object} [disks] Dictionary of disks attached to the machine. Key
   * is ID of disk. Value is a disk object
   * @member {object} [networkAdapters] Dictionary of network adapters attached
   * to the machine. Key is ID of network adapter. Value is a network adapter
   * object
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Machine
   *
   * @returns {object} metadata of Machine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Machine',
      type: {
        name: 'Composite',
        className: 'Machine',
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
          eTag: {
            required: false,
            serializedName: 'eTag',
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
          bootType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.bootType',
            type: {
              name: 'String'
            }
          },
          datacenterContainer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterContainer',
            type: {
              name: 'String'
            }
          },
          datacenterManagementServer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterManagementServer',
            type: {
              name: 'String'
            }
          },
          datacenterMachineId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterMachineId',
            type: {
              name: 'String'
            }
          },
          datacenterManagementServerId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterManagementServerId',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          megabytesOfMemory: {
            required: false,
            readOnly: true,
            serializedName: 'properties.megabytesOfMemory',
            type: {
              name: 'Number'
            }
          },
          numberOfCores: {
            required: false,
            readOnly: true,
            serializedName: 'properties.numberOfCores',
            type: {
              name: 'Number'
            }
          },
          operatingSystem: {
            required: false,
            readOnly: true,
            serializedName: 'properties.operatingSystem',
            type: {
              name: 'String'
            }
          },
          groups: {
            required: false,
            readOnly: true,
            serializedName: 'properties.groups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          createdTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          updatedTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          discoveredTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.discoveredTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          disks: {
            required: false,
            readOnly: true,
            serializedName: 'properties.disks',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'DiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'Disk'
                  }
              }
            }
          },
          networkAdapters: {
            required: false,
            readOnly: true,
            serializedName: 'properties.networkAdapters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NetworkAdapterElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkAdapter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Machine;
