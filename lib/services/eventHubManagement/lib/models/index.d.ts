/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource definition
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * Definition of Resource
 *
 * @member {string} [location] Resource location
 * @member {object} [tags] Resource tags
 */
export interface TrackedResource extends Resource {
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * SKU parameters supplied to the create namespace operation
 *
 * @member {string} name Name of this SKU. Possible values include: 'Basic',
 * 'Standard'
 * @member {string} [tier] The billing tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard'
 * @member {number} [capacity] The Event Hubs throughput units, vaule should be
 * 0 to 20 throughput units.
 */
export interface Sku {
  name: string;
  tier?: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the EHNamespace class.
 * @constructor
 * Single Namespace item in List or Get Operation
 *
 * @member {object} [sku] Properties of sku resource
 * @member {string} [sku.name] Name of this SKU. Possible values include:
 * 'Basic', 'Standard'
 * @member {string} [sku.tier] The billing tier of this particular SKU.
 * Possible values include: 'Basic', 'Standard'
 * @member {number} [sku.capacity] The Event Hubs throughput units, vaule
 * should be 0 to 20 throughput units.
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * @member {date} [createdAt] The time the Namespace was created.
 * @member {date} [updatedAt] The time the Namespace was updated.
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * Service Bus operations.
 * @member {string} [metricId] Identifier for Azure Insights metrics.
 * @member {boolean} [isAutoInflateEnabled] Value that indicates whether
 * AutoInflate is enabled for eventhub namespace.
 * @member {number} [maximumThroughputUnits] Upper limit of throughput units
 * when AutoInflate is enabled, vaule should be within 0 to 20 throughput
 * units. ( '0' if AutoInflateEnabled = true)
 */
export interface EHNamespace extends TrackedResource {
  sku?: Sku;
  readonly provisioningState?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly serviceBusEndpoint?: string;
  readonly metricId?: string;
  isAutoInflateEnabled?: boolean;
  maximumThroughputUnits?: number;
}

/**
 * @class
 * Initializes a new instance of the AuthorizationRule class.
 * @constructor
 * Single item in a List or Get AuthorizationRule operation
 *
 * @member {array} rights The rights associated with the rule.
 */
export interface AuthorizationRule extends Resource {
  rights: string[];
}

/**
 * @class
 * Initializes a new instance of the AccessKeys class.
 * @constructor
 * Namespace/EventHub Connection String
 *
 * @member {string} [primaryConnectionString] Primary connection string of the
 * created namespace AuthorizationRule.
 * @member {string} [secondaryConnectionString] Secondary connection string of
 * the created namespace AuthorizationRule.
 * @member {string} [aliasPrimaryConnectionString] Primary connection string of
 * the alias if GEO DR is enabled
 * @member {string} [aliasSecondaryConnectionString] Secondary  connection
 * string of the alias if GEO DR is enabled
 * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [keyName] A string that describes the AuthorizationRule.
 */
export interface AccessKeys {
  readonly primaryConnectionString?: string;
  readonly secondaryConnectionString?: string;
  readonly aliasPrimaryConnectionString?: string;
  readonly aliasSecondaryConnectionString?: string;
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
  readonly keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the RegenerateAccessKeyParameters class.
 * @constructor
 * Parameters supplied to the Regenerate Authorization Rule operation,
 * specifies which key neeeds to be reset.
 *
 * @member {string} keyType The access key to regenerate. Possible values
 * include: 'PrimaryKey', 'SecondaryKey'
 * @member {string} [key] Optional, if the key value provided, is set for
 * KeyType or autogenerated Key value set for keyType
 */
export interface RegenerateAccessKeyParameters {
  keyType: string;
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the Destination class.
 * @constructor
 * Capture storage details for capture description
 *
 * @member {string} [name] Name for capture destination
 * @member {string} [storageAccountResourceId] Resource id of the storage
 * account to be used to create the blobs
 * @member {string} [blobContainer] Blob container Name
 * @member {string} [archiveNameFormat] Blob naming convention for archive,
 * e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface Destination {
  name?: string;
  storageAccountResourceId?: string;
  blobContainer?: string;
  archiveNameFormat?: string;
}

/**
 * @class
 * Initializes a new instance of the CaptureDescription class.
 * @constructor
 * Properties to configure capture description for eventhub
 *
 * @member {boolean} [enabled] A value that indicates whether capture
 * description is enabled.
 * @member {string} [encoding] Enumerates the possible values for the encoding
 * format of capture description. Note: 'AvroDeflate' will be deprecated in New
 * API Version. Possible values include: 'Avro', 'AvroDeflate'
 * @member {number} [intervalInSeconds] The time window allows you to set the
 * frequency with which the capture to Azure Blobs will happen, value should
 * between 60 to 900 seconds
 * @member {number} [sizeLimitInBytes] The size window defines the amount of
 * data built up in your Event Hub before an capture operation, value should be
 * between 10485760 to 524288000 bytes
 * @member {object} [destination] Properties of Destination where capture will
 * be stored. (Storage Account, Blob Names)
 * @member {string} [destination.name] Name for capture destination
 * @member {string} [destination.storageAccountResourceId] Resource id of the
 * storage account to be used to create the blobs
 * @member {string} [destination.blobContainer] Blob container Name
 * @member {string} [destination.archiveNameFormat] Blob naming convention for
 * archive, e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface CaptureDescription {
  enabled?: boolean;
  encoding?: string;
  intervalInSeconds?: number;
  sizeLimitInBytes?: number;
  destination?: Destination;
}

/**
 * @class
 * Initializes a new instance of the Eventhub class.
 * @constructor
 * Single item in List or Get Event Hub operation
 *
 * @member {array} [partitionIds] Current number of shards on the Event Hub.
 * @member {date} [createdAt] Exact time the Event Hub was created.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {number} [messageRetentionInDays] Number of days to retain the
 * events for this Event Hub, value should be 1 to 7 days
 * @member {number} [partitionCount] Number of partitions created for the Event
 * Hub, allowed values are from 1 to 32 partitions.
 * @member {string} [status] Enumerates the possible values for the status of
 * the Event Hub. Possible values include: 'Active', 'Disabled', 'Restoring',
 * 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting', 'Renaming',
 * 'Unknown'
 * @member {object} [captureDescription] Properties of capture description
 * @member {boolean} [captureDescription.enabled] A value that indicates
 * whether capture description is enabled.
 * @member {string} [captureDescription.encoding] Enumerates the possible
 * values for the encoding format of capture description. Note: 'AvroDeflate'
 * will be deprecated in New API Version. Possible values include: 'Avro',
 * 'AvroDeflate'
 * @member {number} [captureDescription.intervalInSeconds] The time window
 * allows you to set the frequency with which the capture to Azure Blobs will
 * happen, value should between 60 to 900 seconds
 * @member {number} [captureDescription.sizeLimitInBytes] The size window
 * defines the amount of data built up in your Event Hub before an capture
 * operation, value should be between 10485760 to 524288000 bytes
 * @member {object} [captureDescription.destination] Properties of Destination
 * where capture will be stored. (Storage Account, Blob Names)
 * @member {string} [captureDescription.destination.name] Name for capture
 * destination
 * @member {string} [captureDescription.destination.storageAccountResourceId]
 * Resource id of the storage account to be used to create the blobs
 * @member {string} [captureDescription.destination.blobContainer] Blob
 * container Name
 * @member {string} [captureDescription.destination.archiveNameFormat] Blob
 * naming convention for archive, e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface Eventhub extends Resource {
  readonly partitionIds?: string[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  messageRetentionInDays?: number;
  partitionCount?: number;
  status?: string;
  captureDescription?: CaptureDescription;
}

/**
 * @class
 * Initializes a new instance of the ConsumerGroup class.
 * @constructor
 * Single item in List or Get Consumer group operation
 *
 * @member {date} [createdAt] Exact time the message was created.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {string} [userMetadata] Usermetadata is a placeholder to store
 * user-defined string data with maximum length 1024. e.g. it can be used to
 * store descriptive data, such as list of teams and their contact information
 * also user-defined configuration settings can be stored.
 */
export interface ConsumerGroup extends Resource {
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  userMetadata?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityParameter class.
 * @constructor
 * Parameter supplied to check Namespace name availability operation
 *
 * @member {string} name Name to check the namespace name availability
 */
export interface CheckNameAvailabilityParameter {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * The Result of the CheckNameAvailability operation
 *
 * @member {string} [message] The detailed info regarding the reason associated
 * with the Namespace.
 * @member {boolean} [nameAvailable] Value indicating Namespace is
 * availability, true if the Namespace is available; otherwise, false.
 * @member {string} [reason] The reason for unavailability of a Namespace.
 * Possible values include: 'None', 'InvalidName', 'SubscriptionIsDisabled',
 * 'NameInUse', 'NameInLockdown', 'TooManyNamespaceInCurrentSubscription'
 */
export interface CheckNameAvailabilityResult {
  readonly message?: string;
  nameAvailable?: boolean;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.EventHub
 * @member {string} [resource] Resource on which the operation is performed:
 * Invoice, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * A Event Hub REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft.EventHub
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Invoice, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates EventHub service is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ArmDisasterRecovery class.
 * @constructor
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 *
 * @member {string} [provisioningState] Provisioning state of the
 * Alias(Disaster Recovery configuration) - possible values 'Accepted' or
 * 'Succeeded' or 'Failed'. Possible values include: 'Accepted', 'Succeeded',
 * 'Failed'
 * @member {string} [partnerNamespace] ARM Id of the Primary/Secondary eventhub
 * namespace name, which is part of GEO DR pairning
 * @member {string} [alternateName] Alternate name specified when alias and
 * namespace names are same.
 * @member {string} [role] role of namespace in GEO DR - possible values
 * 'Primary' or 'PrimaryNotReplicating' or 'Secondary'. Possible values
 * include: 'Primary', 'PrimaryNotReplicating', 'Secondary'
 */
export interface ArmDisasterRecovery extends Resource {
  readonly provisioningState?: string;
  partnerNamespace?: string;
  alternateName?: string;
  readonly role?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list Event Hub operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EHNamespaceListResult class.
 * @constructor
 * The response of the List Namespace operation
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of namespaces.
 */
export interface EHNamespaceListResult extends Array<EHNamespace> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AuthorizationRuleListResult class.
 * @constructor
 * The response from the List namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains an incomplete list of Authorization Rules
 */
export interface AuthorizationRuleListResult extends Array<AuthorizationRule> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ArmDisasterRecoveryListResult class.
 * @constructor
 * The result of the List Alias(Disaster Recovery configuration) operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Alias(Disaster Recovery configuration)
 */
export interface ArmDisasterRecoveryListResult extends Array<ArmDisasterRecovery> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EventHubListResult class.
 * @constructor
 * The result of the List EventHubs operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of EventHubs.
 */
export interface EventHubListResult extends Array<Eventhub> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ConsumerGroupListResult class.
 * @constructor
 * The result to the List Consumer Group operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Consumer Group
 */
export interface ConsumerGroupListResult extends Array<ConsumerGroup> {
  nextLink?: string;
}
