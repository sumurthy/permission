﻿# deviceConfigurationDeviceActivity function

> **Important**: APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Not yet documented
## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
GET /reportsdeviceConfigurationDeviceActivity
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer &lt;token&gt; Required.|
|Accept|application/json|

## Request body
Do not supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a [report](../resources/intune_deviceconfig_report.md) in the response body.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | DeviceManagementConfiguration.Read.All    | 
|Delegated (personal Microsoft account) | Not supported.    | 
|Application | Not supported. | 

## Example

##### Request

Here is an example of the request.
```http
GET https://graph.microsoft.com/beta/reportsdeviceConfigurationDeviceActivity
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123

{
  "value": {
    "@odata.type": "microsoft.graph.report",
    "content": "<Unknown Primitive Type Edm.Stream>"
  }
}
```



