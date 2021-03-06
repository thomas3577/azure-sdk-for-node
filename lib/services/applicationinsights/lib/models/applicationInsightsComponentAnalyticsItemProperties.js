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
 * A set of properties that can be defined in the context of a specific item
 * type. Each type may have its own properties.
 *
 */
class ApplicationInsightsComponentAnalyticsItemProperties {
  /**
   * Create a ApplicationInsightsComponentAnalyticsItemProperties.
   * @member {string} [functionAlias] A function alias, used when the type of
   * the item is Function
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationInsightsComponentAnalyticsItemProperties
   *
   * @returns {object} metadata of ApplicationInsightsComponentAnalyticsItemProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationInsightsComponentAnalyticsItemProperties',
      type: {
        name: 'Composite',
        className: 'ApplicationInsightsComponentAnalyticsItemProperties',
        modelProperties: {
          functionAlias: {
            required: false,
            serializedName: 'functionAlias',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationInsightsComponentAnalyticsItemProperties;
