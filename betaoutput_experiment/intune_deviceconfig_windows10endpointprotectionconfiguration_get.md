﻿# Get windows10EndpointProtectionConfiguration

> **Important**: APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Read properties and relationships of the [windows10EndpointProtectionConfiguration](../resources/intune_deviceconfig_windows10endpointprotectionconfiguration.md) object.
## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
GET /deviceManagement/deviceConfigurations/{deviceConfigurationId}
GET /deviceManagement/deviceConfigurations/{deviceConfigurationId}/groupAssignments/{deviceConfigurationGroupAssignmentId}/deviceConfiguration/
```

## Optional query parameters
This method supports the [OData Query Parameters](https://developer.microsoft.com/en-us/graph/docs/overview/query_parameters) to help customize the response.
## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer &lt;token&gt; Required.|
|Accept|application/json|

## Request body
Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and [windows10EndpointProtectionConfiguration](../resources/intune_deviceconfig_windows10endpointprotectionconfiguration.md) object in the response body.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | DeviceManagementConfiguration.ReadWrite.All, DeviceManagementConfiguration.Read.All    | 
|Delegated (personal Microsoft account) | Not supported.    | 
|Application | Not supported. | 

## Example

##### Request

Here is an example of the request.
```http
GET https://graph.microsoft.com/beta/deviceManagement/deviceConfigurations/{deviceConfigurationId}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 2696

{
  "value": {
    "@odata.type": "#microsoft.graph.windows10EndpointProtectionConfiguration",
    "id": "09709403-9403-0970-0394-700903947009",
    "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
    "assignmentStatus": "Assignment Status value",
    "assignmentProgress": "Assignment Progress value",
    "assignmentErrorMessage": "Assignment Error Message value",
    "createdDateTime": "2017-01-01T00:02:43.5775965-08:00",
    "description": "Description value",
    "displayName": "Display Name value",
    "version": 7,
    "bitLockerEnableStorageCardEncryptionOnMobile": true,
    "bitLockerEncryptDevice": true,
    "bitLockerSystemDrivePolicy": {
      "@odata.type": "microsoft.graph.bitLockerSystemDrivePolicy",
      "encryptionMethod": "aesCbc256",
      "startupAuthenticationRequired": true,
      "startupAuthenticationBlockWithoutTpmChip": true,
      "startupAuthenticationTpmUsage": "required",
      "startupAuthenticationTpmPinUsage": "required",
      "startupAuthenticationTpmKeyUsage": "required",
      "startupAuthenticationTpmPinAndKeyUsage": "required",
      "minimumPinLength": 0,
      "recoveryOptions": {
        "@odata.type": "microsoft.graph.bitLockerRecoveryOptions",
        "blockDataRecoveryAgent": true,
        "recoveryPasswordUsage": "required",
        "recoveryKeyUsage": "required",
        "hideRecoveryOptions": true,
        "enableRecoveryInformationSaveToStore": true,
        "recoveryInformationToStore": "passwordOnly",
        "enableBitLockerAfterRecoveryInformationToStore": true
      },
      "prebootRecoveryEnableMessageAndUrl": true,
      "prebootRecoveryMessage": "Preboot Recovery Message value",
      "prebootRecoveryUrl": "https://example.com/prebootRecoveryUrl/"
    },
    "bitLockerFixedDrivePolicy": {
      "@odata.type": "microsoft.graph.bitLockerFixedDrivePolicy",
      "encryptionMethod": "aesCbc256",
      "requireEncryptionForWriteAccess": true,
      "recoveryOptions": {
        "@odata.type": "microsoft.graph.bitLockerRecoveryOptions",
        "blockDataRecoveryAgent": true,
        "recoveryPasswordUsage": "required",
        "recoveryKeyUsage": "required",
        "hideRecoveryOptions": true,
        "enableRecoveryInformationSaveToStore": true,
        "recoveryInformationToStore": "passwordOnly",
        "enableBitLockerAfterRecoveryInformationToStore": true
      }
    },
    "bitLockerRemovableDrivePolicy": {
      "@odata.type": "microsoft.graph.bitLockerRemovableDrivePolicy",
      "encryptionMethod": "aesCbc256",
      "requireEncryptionForWriteAccess": true,
      "blockCrossOrganizationWriteAccess": true
    }
  }
}
```


