﻿# Get enterpriseCertificate

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Read properties and relationships of the [enterpriseCertificate](../resources/intune_apps_enterprisecertificate.md) object.
## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              |
|:--------------------|:---------------------------------------------------------|
|Delegated (work or school account) | DeviceManagementApps.ReadWrite.All, DeviceManagementApps.Read.All    |
|Delegated (personal Microsoft account) | Not supported.    |
|Application | Not supported. |

## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
GET /deviceAppManagement/enterpriseCerts/{enterpriseCertificateId}
```

## Optional query parameters
This method supports the [OData Query Parameters](http://developer.microsoft.com/en-us/graph/docs/overview/query_parameters) to help customize the response.
## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer {token}. Required.|
|Accept|application/json|

## Request body
Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and [enterpriseCertificate](../resources/intune_apps_enterprisecertificate.md) object in the response body.

## Example

##### Request

Here is an example of the request.
```http
GET https://graph.microsoft.com/beta/deviceAppManagement/enterpriseCerts/{enterpriseCertificateId}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 347

{
  "value": {
    "@odata.type": "#microsoft.graph.enterpriseCertificate",
    "id": "3a9320b1-20b1-3a93-b120-933ab120933a",
    "certData": "Y2VydERhdGE=",
    "issuedTo": "Issued To value",
    "issuedBy": "Issued By value",
    "certExpirationDate": "2016-12-31T23:56:39.3841403-08:00",
    "certStatus": 10,
    "certType": 8
  }
}
```



