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
 * Initializes a new instance of the StorageSyncErrorDetails class.
 * @constructor
 * Error Details object.
 *
 * @member {string} [code] Error code of the given entry.
 * @member {string} [message] Error message of the given entry.
 * @member {string} [target] Target of the given entry.
 */
export interface StorageSyncErrorDetails {
  code?: string;
  message?: string;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncError class.
 * @constructor
 * Error type
 *
 * @member {string} [code] Error code of the given entry.
 * @member {string} [message] Error message of the given entry.
 * @member {object} [details] Error details of the given entry.
 * @member {string} [details.code] Error code of the given entry.
 * @member {string} [details.message] Error message of the given entry.
 * @member {string} [details.target] Target of the given entry.
 */
export interface StorageSyncError {
  code?: string;
  message?: string;
  details?: StorageSyncErrorDetails;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Azure Resource Manager resource.
 *
 * @member {string} [id] The id of the resource.
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource
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
 * ARM tracked resource
 *
 * @member {string} [location] The location of the resource.
 * @member {object} [tags] The tags of the resource.
 */
export interface TrackedResource extends Resource {
  location?: string;
  tags?: any;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionState class.
 * @constructor
 * Subscription State object.
 *
 * @member {string} [state] State of Azure Subscription. Possible values
 * include: 'Registered', 'Unregistered', 'Warned', 'Suspended', 'Deleted'
 * @member {boolean} [istransitioning] Is Transitioning
 * @member {object} [properties] Subscription state properties.
 */
export interface SubscriptionState {
  state?: string;
  readonly istransitioning?: boolean;
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncService class.
 * @constructor
 * Storage Sync Service object.
 *
 * @member {number} [storageSyncServiceStatus] Storage Sync service status.
 * @member {string} [storageSyncServiceUid] Storage Sync service Uid
 */
export interface StorageSyncService extends BaseResource {
  readonly storageSyncServiceStatus?: number;
  readonly storageSyncServiceUid?: string;
}

/**
 * @class
 * Initializes a new instance of the SyncGroup class.
 * @constructor
 * Sync Group object.
 *
 * @member {string} [uniqueId] Unique Id
 * @member {string} [syncGroupStatus] Sync group status
 */
export interface SyncGroup extends BaseResource {
  uniqueId?: string;
  readonly syncGroupStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the CloudEndpoint class.
 * @constructor
 * Cloud Endpoint object.
 *
 * @member {string} [storageAccountKey] Storage Account access key.
 * @member {string} [storageAccount] Storage Account name.
 * @member {string} [storageAccountResourceId] Storage Account Resource Id
 * @member {string} [storageAccountShareName] Storage Account Share name
 * @member {string} [storageAccountTenantId] Storage Account Tenant Id
 * @member {string} [partnershipId] Partnership Id
 * @member {string} [friendlyName] Friendly Name
 * @member {boolean} [backupEnabled] Backup Enabled
 * @member {string} [provisioningState] CloudEndpoint Provisioning State
 * @member {string} [lastWorkflowId] CloudEndpoint lastWorkflowId
 */
export interface CloudEndpoint extends BaseResource {
  storageAccountKey?: string;
  storageAccount?: string;
  storageAccountResourceId?: string;
  storageAccountShareName?: string;
  storageAccountTenantId?: string;
  partnershipId?: string;
  friendlyName?: string;
  readonly backupEnabled?: boolean;
  provisioningState?: string;
  lastWorkflowId?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerEndpoint class.
 * @constructor
 * Server Endpoint object.
 *
 * @member {string} [serverLocalPath] Server Local path.
 * @member {string} [cloudTiering] Cloud Tiering. Possible values include:
 * 'on', 'off'
 * @member {number} [volumeFreeSpacePercent] Level of free space to be
 * maintained by Cloud Tiering if it is enabled.
 * @member {string} [friendlyName] Friendly Name
 * @member {date} [lastSyncSuccess] Last Sync Success
 * @member {string} [syncErrorState] Sync Error State
 * @member {date} [syncErrorStateTimestamp] Sync Error State Timestamp
 * @member {string} [syncErrorDirection] Sync Error Direction. Possible values
 * include: 'none', 'initialize', 'download', 'upload', 'recall'
 * @member {number} [itemUploadErrorCount] Item Upload Error Count.
 * @member {number} [itemDownloadErrorCount] Item download error count.
 * @member {string} [syncErrorContext] sync error context.
 * @member {string} [currentProgressType] current progress type. Possible
 * values include: 'none', 'initialize', 'download', 'upload', 'recall'
 * @member {number} [itemProgressCount] Item Progress Count
 * @member {number} [itemTotalCount] Item Total Count
 * @member {number} [byteProgress] Bytes in progress
 * @member {number} [totalProgress] Total progress
 * @member {number} [byteTotal] Bytes total
 * @member {string} [serverResourceId] Server Resource Id.
 * @member {string} [provisioningState] ServerEndpoint Provisioning State
 * @member {string} [lastWorkflowId] ServerEndpoint lastWorkflowId
 */
export interface ServerEndpoint extends BaseResource {
  serverLocalPath?: string;
  cloudTiering?: string;
  volumeFreeSpacePercent?: number;
  friendlyName?: string;
  lastSyncSuccess?: Date;
  syncErrorState?: string;
  syncErrorStateTimestamp?: Date;
  syncErrorDirection?: string;
  itemUploadErrorCount?: number;
  itemDownloadErrorCount?: number;
  syncErrorContext?: string;
  currentProgressType?: string;
  itemProgressCount?: number;
  itemTotalCount?: number;
  byteProgress?: number;
  totalProgress?: number;
  byteTotal?: number;
  serverResourceId?: string;
  provisioningState?: string;
  lastWorkflowId?: string;
}

/**
 * @class
 * Initializes a new instance of the RegisteredServer class.
 * @constructor
 * Registered Server resource.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [serverCertificate] Registered Server Certificate
 * @member {string} [agentVersion] Registered Server Agent Version
 * @member {string} [serverOSVersion] Registered Server OS Version
 * @member {number} [serverManagementtErrorCode] Registered Server Management
 * Error Code
 * @member {string} [lastHeartBeat] Registered Server last heart beat
 * @member {string} [provisioningState] Registered Server Provisioning State
 * @member {string} [serverRole] Registered Server serverRole
 * @member {string} [clusterId] Registered Server clusterId
 * @member {string} [clusterName] Registered Server clusterName
 * @member {string} [serverId] Registered Server serverId
 * @member {string} [storageSyncServiceUid] Registered Server
 * storageSyncServiceUid
 * @member {string} [lastWorkflowId] Registered Server lastWorkflowId
 */
export interface RegisteredServer extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  serverCertificate?: string;
  agentVersion?: string;
  serverOSVersion?: string;
  serverManagementtErrorCode?: number;
  lastHeartBeat?: string;
  provisioningState?: string;
  serverRole?: string;
  clusterId?: string;
  clusterName?: string;
  serverId?: string;
  storageSyncServiceUid?: string;
  lastWorkflowId?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourcesMoveInfo class.
 * @constructor
 * Resource Move Info.
 *
 * @member {string} [targetResourceGroup] Target resource group.
 * @member {array} [resources] Collection of Resources.
 */
export interface ResourcesMoveInfo {
  targetResourceGroup?: string;
  resources?: string[];
}

/**
 * @class
 * Initializes a new instance of the Workflow class.
 * @constructor
 * Workflow resource.
 *
 * @member {string} [lastStepName] last step name
 * @member {string} [status] workflow status. Possible values include:
 * 'active', 'expired', 'succeeded', 'aborted', 'failed'
 * @member {string} [operation] operation direction. Possible values include:
 * 'do', 'undo', 'cancel'
 * @member {string} [steps] workflow steps
 * @member {string} [lastOperationId] workflow last operation identifier.
 */
export interface Workflow extends BaseResource {
  lastStepName?: string;
  status?: string;
  operation?: string;
  steps?: string;
  lastOperationId?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayInfo class.
 * @constructor
 * The operation supported by storage sync.
 *
 * @member {string} [description] The description of the operation.
 * @member {string} [operation] The action that users can perform, based on
 * their permission level.
 * @member {string} [provider] Service provider: Microsoft StorageSync.
 * @member {string} [resource] Resource on which the operation is performed.
 */
export interface OperationDisplayInfo {
  description?: string;
  operation?: string;
  provider?: string;
  resource?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationEntity class.
 * @constructor
 * The operation supported by storage sync.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The operation supported by storage sync.
 * @member {string} [display.description] The description of the operation.
 * @member {string} [display.operation] The action that users can perform,
 * based on their permission level.
 * @member {string} [display.provider] Service provider: Microsoft StorageSync.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [origin] The origin.
 */
export interface OperationEntity {
  name?: string;
  display?: OperationDisplayInfo;
  origin?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayResource class.
 * @constructor
 * Operation Display Resource object.
 *
 * @member {string} [provider] Operation Display Resource Provider.
 * @member {string} [resource] Operation Display Resource.
 * @member {string} [operation] Operation Display Resource Operation.
 * @member {string} [description] Operation Display Resource Description.
 */
export interface OperationDisplayResource {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the RestoreFileSpec class.
 * @constructor
 * Restore file spec.
 *
 * @member {string} [path] Restore file spec path
 * @member {boolean} [isdir] Restore file spec isdir
 */
export interface RestoreFileSpec {
  path?: string;
  readonly isdir?: boolean;
}

/**
 * @class
 * Initializes a new instance of the PostRestoreRequest class.
 * @constructor
 * Post Restore Request
 *
 * @member {string} [partition] Post Restore partition.
 * @member {string} [replicaGroup] Post Restore replica group.
 * @member {string} [requestId] Post Restore request id.
 * @member {string} [azureFileShareUri] Post Restore Azure file share uri.
 * @member {string} [status] Post Restore Azure status.
 * @member {string} [sourceAzureFileShareUri] Post Restore Azure source azure
 * file share uri.
 * @member {string} [failedFileList] Post Restore Azure failed file list.
 * @member {array} [restoreFileSpec] Post Restore restore file spec array.
 */
export interface PostRestoreRequest {
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  failedFileList?: string;
  restoreFileSpec?: RestoreFileSpec[];
}

/**
 * @class
 * Initializes a new instance of the PreRestoreRequest class.
 * @constructor
 * Pre Restore request object.
 *
 * @member {string} [partition] Pre Restore partition.
 * @member {string} [replicaGroup] Pre Restore replica group.
 * @member {string} [requestId] Pre Restore request id.
 * @member {string} [azureFileShareUri] Pre Restore Azure file share uri.
 * @member {string} [status] Pre Restore Azure status.
 * @member {string} [sourceAzureFileShareUri] Pre Restore Azure source azure
 * file share uri.
 * @member {string} [backupMetadataPropertyBag] Pre Restore backup metadata
 * property bag.
 * @member {array} [restoreFileSpec] Pre Restore restore file spec array.
 * @member {number} [pauseWaitForSyncDrainTimePeriodInSeconds] Pre Restore
 * pause wait for sync drain time period in seconds.
 */
export interface PreRestoreRequest {
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  backupMetadataPropertyBag?: string;
  restoreFileSpec?: RestoreFileSpec[];
  pauseWaitForSyncDrainTimePeriodInSeconds?: number;
}

/**
 * @class
 * Initializes a new instance of the BackupRequest class.
 * @constructor
 * Backup request
 *
 * @member {string} [azureFileShare] Azure File Share.
 */
export interface BackupRequest {
  azureFileShare?: string;
}

/**
 * @class
 * Initializes a new instance of the PostBackupResponse class.
 * @constructor
 * Post Backup Response
 *
 * @member {string} [cloudEndpointName] cloud endpoint Name.
 */
export interface PostBackupResponse {
  readonly cloudEndpointName?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkflowArray class.
 * @constructor
 * Array of Workflow
 *
 * @member {array} [value] Collection of workflow items.
 */
export interface WorkflowArray {
  value?: Workflow[];
}


/**
 * @class
 * Initializes a new instance of the OperationEntityListResult class.
 * @constructor
 * The list of storage sync operations.
 *
 * @member {string} [nextLink] The link used to get the next page of
 * operations.
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncServiceArray class.
 * @constructor
 * Array of StorageSyncServices
 *
 */
export interface StorageSyncServiceArray extends Array<StorageSyncService> {
}

/**
 * @class
 * Initializes a new instance of the SyncGroupArray class.
 * @constructor
 * Array of SyncGroup
 *
 */
export interface SyncGroupArray extends Array<SyncGroup> {
}

/**
 * @class
 * Initializes a new instance of the CloudEndpointArray class.
 * @constructor
 * Array of CloudEndpoint
 *
 */
export interface CloudEndpointArray extends Array<CloudEndpoint> {
}

/**
 * @class
 * Initializes a new instance of the ServerEndpointArray class.
 * @constructor
 * Array of ServerEndpoint
 *
 */
export interface ServerEndpointArray extends Array<ServerEndpoint> {
}

/**
 * @class
 * Initializes a new instance of the RegisteredServerArray class.
 * @constructor
 * Array of RegisteredServer
 *
 */
export interface RegisteredServerArray extends Array<RegisteredServer> {
}
