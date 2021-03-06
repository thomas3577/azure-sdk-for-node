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
 * Defines an entity action.
 *
 * @extends models['ImageAction']
 */
class ImageEntityAction extends models['ImageAction'] {
  /**
   * Create a ImageEntityAction.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImageEntityAction
   *
   * @returns {object} metadata of ImageEntityAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageEntityAction',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'ImageEntityAction',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
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
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          alternateName: {
            required: false,
            readOnly: true,
            serializedName: 'alternateName',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          thumbnailUrl: {
            required: false,
            readOnly: true,
            serializedName: 'thumbnailUrl',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          datePublished: {
            required: false,
            readOnly: true,
            serializedName: 'datePublished',
            type: {
              name: 'String'
            }
          },
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          result: {
            required: false,
            readOnly: true,
            serializedName: 'result',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isTopAction: {
            required: false,
            readOnly: true,
            serializedName: 'isTopAction',
            type: {
              name: 'Boolean'
            }
          },
          serviceUrl: {
            required: false,
            readOnly: true,
            serializedName: 'serviceUrl',
            type: {
              name: 'String'
            }
          },
          actionType: {
            required: false,
            readOnly: true,
            serializedName: 'actionType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageEntityAction;
