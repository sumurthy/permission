﻿# Create managedAppStatus

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Create a new [managedAppStatus](../resources/intune_mam_managedappstatus.md) by posting to the managedAppStatuses collection.
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
POST /managedAppStatuses/
POST /deviceAppManagement/managedAppStatuses/
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer {token}. Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a managedAppStatus object.
The following table shows the properties that are required when you create a managedAppStatus.

|Property|Type|Description|
|---|---|---|
|displayName|String|Friendly name of the status report.|
|id|String|Key of the entity.|
|version|String|Version of the entity.|

## Response

If successful, this method returns a `201 Created` response code and a [managedAppStatus](../resources/intune_mam_managedappstatus.md) object in the response body.

## Example

##### Request

Here is an example of the request.
```http
POST https://graph.microsoft.com/beta/managedAppStatuses/
Content-type: application/json
Content-length: 129

{
  "@odata.type": "#microsoft.graph.managedAppStatus",
  "displayName": "Display Name value",
  "version": "Version value"
}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 178

{
  "@odata.type": "#microsoft.graph.managedAppStatus",
  "displayName": "Display Name value",
  "id": "ad1f7541-7541-ad1f-4175-1fad41751fad",
  "version": "Version value"
}
```



