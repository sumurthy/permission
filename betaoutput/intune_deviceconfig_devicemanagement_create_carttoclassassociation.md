﻿# Create cartToClassAssociation

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Create a new [cartToClassAssociation](../resources/intune_deviceconfig_carttoclassassociation.md) by posting to the cartToClassAssociations collection.
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
POST /deviceManagement/cartToClassAssociations/
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer {token}. Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a cartToClassAssociation object.
The following table shows the properties that are required when you create a cartToClassAssociation.

|Property|Type|Description|
|---|---|---|
|id|String|Key of the entity.|
|createdDateTime|DateTimeOffset|DateTime the object was created.|
|lastModifiedDateTime|DateTimeOffset|DateTime the object was last modified.|
|version|Int32|Version of the CartToClassAssociation.|
|displayName|String|Admin provided name of the device configuration.|
|description|String|Admin provided description of the CartToClassAssociation.|
|deviceCartIds|String collection|Identifiers of device carts to be associated with classes.|
|classroomIds|String collection|Identifiers of classrooms to be associated with device carts.|

## Response

If successful, this method returns a `201 Created` response code and a [cartToClassAssociation](../resources/intune_deviceconfig_carttoclassassociation.md) object in the response body.

## Example

##### Request

Here is an example of the request.
```http
POST https://graph.microsoft.com/beta/deviceManagement/cartToClassAssociations/
Content-type: application/json
Content-length: 335

{
  "@odata.type": "#microsoft.graph.cartToClassAssociation",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "version": 7,
  "displayName": "Display Name value",
  "description": "Description value",
  "deviceCartIds": [
    "Device Cart Ids value"
  ],
  "classroomIds": [
    "Classroom Ids value"
  ]
}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 443

{
  "@odata.type": "#microsoft.graph.cartToClassAssociation",
  "id": "9bdc58dd-58dd-9bdc-dd58-dc9bdd58dc9b",
  "createdDateTime": "2017-01-01T00:02:43.5775965-08:00",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "version": 7,
  "displayName": "Display Name value",
  "description": "Description value",
  "deviceCartIds": [
    "Device Cart Ids value"
  ],
  "classroomIds": [
    "Classroom Ids value"
  ]
}
```



