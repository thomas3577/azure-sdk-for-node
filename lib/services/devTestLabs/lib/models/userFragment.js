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
 * Profile of a lab user.
 *
 * @extends models['UpdateResource']
 */
class UserFragment extends models['UpdateResource'] {
  /**
   * Create a UserFragment.
   * @member {object} [identity] The identity of the user.
   * @member {string} [identity.principalName] Set to the principal name / UPN
   * of the client JWT making the request.
   * @member {string} [identity.principalId] Set to the principal Id of the
   * client JWT making the request. Service principal will not have the
   * principal Id.
   * @member {string} [identity.tenantId] Set to the tenant ID of the client
   * JWT making the request.
   * @member {string} [identity.objectId] Set to the object Id of the client
   * JWT making the request. Not all users have object Id. For CSP (reseller)
   * scenarios for example, object Id is not available.
   * @member {string} [identity.appId] Set to the app Id of the client JWT
   * making the request.
   * @member {object} [secretStore] The secret store of the user.
   * @member {string} [secretStore.keyVaultUri] The URI of the user's Key
   * vault.
   * @member {string} [secretStore.keyVaultId] The ID of the user's Key vault.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UserFragment
   *
   * @returns {object} metadata of UserFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserFragment',
      type: {
        name: 'Composite',
        className: 'UserFragment',
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
          identity: {
            required: false,
            serializedName: 'properties.identity',
            type: {
              name: 'Composite',
              className: 'UserIdentityFragment'
            }
          },
          secretStore: {
            required: false,
            serializedName: 'properties.secretStore',
            type: {
              name: 'Composite',
              className: 'UserSecretStoreFragment'
            }
          }
        }
      }
    };
  }
}

module.exports = UserFragment;
