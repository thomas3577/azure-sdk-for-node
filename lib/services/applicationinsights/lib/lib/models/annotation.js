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
 * Annotation associated with an application insights resource.
 *
 */
class Annotation {
  /**
   * Create a Annotation.
   * @member {string} [annotationName] Name of annotation
   * @member {string} [category] Category of annotation, free form
   * @member {date} [eventTime] Time when event occurred
   * @member {string} [id] Unique Id for annotation
   * @member {string} [properties] Serialized JSON object for detailed
   * properties
   * @member {string} [relatedAnnotation] Related parent annotation if any.
   * Default value: 'null' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of Annotation
   *
   * @returns {object} metadata of Annotation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Annotation',
      type: {
        name: 'Composite',
        className: 'Annotation',
        modelProperties: {
          annotationName: {
            required: false,
            serializedName: 'AnnotationName',
            type: {
              name: 'String'
            }
          },
          category: {
            required: false,
            serializedName: 'Category',
            type: {
              name: 'String'
            }
          },
          eventTime: {
            required: false,
            serializedName: 'EventTime',
            type: {
              name: 'DateTime'
            }
          },
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'Properties',
            type: {
              name: 'String'
            }
          },
          relatedAnnotation: {
            required: false,
            serializedName: 'RelatedAnnotation',
            defaultValue: 'null',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Annotation;