﻿# Create managedDeviceMobileAppProvisioningConfigurationDeviceStatus

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Create a new [managedDeviceMobileAppProvisioningConfigurationDeviceStatus](../resources/intune_apps_manageddevicemobileappprovisioningconfigurationdevicestatus.md) object.
## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              |
|:--------------------|:---------------------------------------------------------|
|Delegated (work or school account) | DeviceManagementApps.ReadWrite.All    |
|Delegated (personal Microsoft account) | Not supported.    |
|Application | Not supported. |

## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfigurationId}/deviceStatuses/
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer {token}. Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a managedDeviceMobileAppProvisioningConfigurationDeviceStatus object.
The following table shows the properties that are required when you create a managedDeviceMobileAppProvisioningConfigurationDeviceStatus.

|Property|Type|Description|
|---|---|---|
|id|String|Key of the entity.|
|deviceDisplayName|String|Device name of the DevicePolicyStatus.|
|status|String|Compliance status of the policy report. Possible values are: `unknown`, `notApplicable`, `compliant`, `remediated`, `nonCompliant`, `error`, `conflict`.|
|lastReportedDateTime|DateTimeOffset|Last modified date time of the policy report.|
|userPrincipalName|String|UserPrincipalName.|

## Response

If successful, this method returns a `201 Created` response code and a [managedDeviceMobileAppProvisioningConfigurationDeviceStatus](../resources/intune_apps_manageddevicemobileappprovisioningconfigurationdevicestatus.md) object in the response body.

## Example

##### Request

Here is an example of the request.
```http
POST https://graph.microsoft.com/beta/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfigurationId}/deviceStatuses/
Content-type: application/json
Content-length: 301

{
  "@odata.type": "#microsoft.graph.managedDeviceMobileAppProvisioningConfigurationDeviceStatus",
  "deviceDisplayName": "Device Display Name value",
  "status": "notApplicable",
  "lastReportedDateTime": "2017-01-01T00:00:17.7769392-08:00",
  "userPrincipalName": "User Principal Name value"
}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 350

{
  "@odata.type": "#microsoft.graph.managedDeviceMobileAppProvisioningConfigurationDeviceStatus",
  "id": "e09b54b6-54b6-e09b-b654-9be0b6549be0",
  "deviceDisplayName": "Device Display Name value",
  "status": "notApplicable",
  "lastReportedDateTime": "2017-01-01T00:00:17.7769392-08:00",
  "userPrincipalName": "User Principal Name value"
}
```



