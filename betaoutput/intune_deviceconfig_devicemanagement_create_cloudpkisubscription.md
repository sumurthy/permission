﻿# Create cloudPkiSubscription

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Create a new [cloudPkiSubscription](../resources/intune_deviceconfig_cloudpkisubscription.md) by posting to the cloudPkiSubscriptions collection.
## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              |
|:--------------------|:---------------------------------------------------------|
|Delegated (work or school account) | DeviceManagementConfiguration.ReadWrite.All    |
|Delegated (personal Microsoft account) | Not supported.    |
|Application | Not supported. |

## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
POST /deviceManagement/cloudPkiSubscriptions/
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer {token}. Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a cloudPkiSubscription object.
The following table shows the properties that are required when you create a cloudPkiSubscription.

|Property|Type|Description|
|---|---|---|
|id|String|Key of the entity.|
|cloudPkiProvider|String|PKCS Certificate Template Name Possible values are: `unKnown`, `symantec`.|
|createdDateTime|DateTimeOffset|DateTime the object was created.|
|description|String|Admin provided description of the Device Configuration.|
|lastModifiedDateTime|DateTimeOffset|DateTime the object was last modified.|
|displayName|String|Admin provided name of the device configuration.|
|syncStatus|String|Last known SyncStatus of CloudPkiSubscription Possible values are: `unKnown`, `succeeded`, `failed`.|
|lastSyncError|String|Error if occurred during last sync from third party CAs|
|lastSyncDateTime|DateTimeOffset|DateTime certificate is last updated|
|credentials|[cloudPkiAdministratorCredentials](../resources/intune_deviceconfig_cloudpkiadministratorcredentials.md)|PKCS Certification Authority Name|
|trustedRootCertificate|Binary|PKCS Certificate Template Name|
|version|Int32|Version of the CloudPkiSubscription.|

## Response

If successful, this method returns a `201 Created` response code and a [cloudPkiSubscription](../resources/intune_deviceconfig_cloudpkisubscription.md) object in the response body.

## Example

##### Request

Here is an example of the request.
```http
POST https://graph.microsoft.com/beta/deviceManagement/cloudPkiSubscriptions/
Content-type: application/json
Content-length: 808

{
  "@odata.type": "#microsoft.graph.cloudPkiSubscription",
  "cloudPkiProvider": "symantec",
  "description": "Description value",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "displayName": "Display Name value",
  "syncStatus": "succeeded",
  "lastSyncError": "Last Sync Error value",
  "lastSyncDateTime": "2017-01-01T00:02:49.3205976-08:00",
  "credentials": {
    "@odata.type": "microsoft.graph.cloudPkiAdministratorCredentials",
    "adminUserName": "Admin User Name value",
    "adminPassword": "Admin Password value",
    "authenticationCertificate": "YXV0aGVudGljYXRpb25DZXJ0aWZpY2F0ZQ==",
    "authenticationCertificatePassword": "Authentication Certificate Password value"
  },
  "trustedRootCertificate": "dHJ1c3RlZFJvb3RDZXJ0aWZpY2F0ZQ==",
  "version": 7
}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 916

{
  "@odata.type": "#microsoft.graph.cloudPkiSubscription",
  "id": "ed4ad7e9-d7e9-ed4a-e9d7-4aede9d74aed",
  "cloudPkiProvider": "symantec",
  "createdDateTime": "2017-01-01T00:02:43.5775965-08:00",
  "description": "Description value",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "displayName": "Display Name value",
  "syncStatus": "succeeded",
  "lastSyncError": "Last Sync Error value",
  "lastSyncDateTime": "2017-01-01T00:02:49.3205976-08:00",
  "credentials": {
    "@odata.type": "microsoft.graph.cloudPkiAdministratorCredentials",
    "adminUserName": "Admin User Name value",
    "adminPassword": "Admin Password value",
    "authenticationCertificate": "YXV0aGVudGljYXRpb25DZXJ0aWZpY2F0ZQ==",
    "authenticationCertificatePassword": "Authentication Certificate Password value"
  },
  "trustedRootCertificate": "dHJ1c3RlZFJvb3RDZXJ0aWZpY2F0ZQ==",
  "version": 7
}
```



