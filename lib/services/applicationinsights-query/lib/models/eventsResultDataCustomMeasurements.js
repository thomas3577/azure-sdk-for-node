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
 * Custom measurements of the event
 *
 */
class EventsResultDataCustomMeasurements {
  /**
   * Create a EventsResultDataCustomMeasurements.
   * @member {object} [additionalProperties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventsResultDataCustomMeasurements
   *
   * @returns {object} metadata of EventsResultDataCustomMeasurements
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'eventsResultData_customMeasurements',
      type: {
        name: 'Composite',
        className: 'EventsResultDataCustomMeasurements',
        modelProperties: {
          additionalProperties: {
            required: false,
            serializedName: 'additionalProperties',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsResultDataCustomMeasurements;