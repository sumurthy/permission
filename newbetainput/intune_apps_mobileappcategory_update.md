﻿# Update mobileAppCategory

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Update the properties of a [mobileAppCategory](../resources/intune_apps_mobileappcategory.md) object.
## Prerequisites
One of the following [permission scopes](https://developer.microsoft.com/en-us/graph/docs/authorization/permission_scopes) is required to execute this API:

*DeviceManagementApps.ReadWrite.All*
## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategoryId}
PATCH /deviceAppManagement/mobileApps/{mobileAppId}/categories/{mobileAppCategoryId}
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer &lt;token&gt; Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a [mobileAppCategory](../resources/intune_apps_mobileappcategory.md) object.
The following table shows the properties that are required when you create a [mobileAppCategory](../resources/intune_apps_mobileappcategory.md).

|Property|Type|Description|
|---|---|---|
|id|String|The key of the entity.|
|displayName|String|The name of the app category.|
|lastModifiedDateTime|DateTimeOffset|The date and time the mobileAppCategory was last modified.|

## Response
If successful, this method returns a `200 OK` response code and an updated [mobileAppCategory](../resources/intune_apps_mobileappcategory.md) object in the response body.

## Example
### Request
Here is an example of the request.
```http
PATCH https://graph.microsoft.com/beta/deviceAppManagement/mobileAppCategories/{mobileAppCategoryId}
Content-type: application/json
Content-length: 107

{
  "displayName": "Display Name value",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00"
}
```

### Response
Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 212

{
  "@odata.type": "#microsoft.graph.mobileAppCategory",
  "id": "d85d9cee-9cee-d85d-ee9c-5dd8ee9c5dd8",
  "displayName": "Display Name value",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00"
}
```



