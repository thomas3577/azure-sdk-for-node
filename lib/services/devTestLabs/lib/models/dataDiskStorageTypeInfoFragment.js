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
 * Storage information about the data disks present in the custom image
 *
 */
class DataDiskStorageTypeInfoFragment {
  /**
   * Create a DataDiskStorageTypeInfoFragment.
   * @member {string} [lun] Disk Lun
   * @member {string} [storageType] Disk Storage Type. Possible values include:
   * 'Standard', 'Premium'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDiskStorageTypeInfoFragment
   *
   * @returns {object} metadata of DataDiskStorageTypeInfoFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDiskStorageTypeInfoFragment',
      type: {
        name: 'Composite',
        className: 'DataDiskStorageTypeInfoFragment',
        modelProperties: {
          lun: {
            required: false,
            serializedName: 'lun',
            type: {
              name: 'String'
            }
          },
          storageType: {
            required: false,
            serializedName: 'storageType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataDiskStorageTypeInfoFragment;