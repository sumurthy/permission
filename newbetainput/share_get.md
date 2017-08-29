# Get share

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

Retrieve the properties and relationships of share object.

## Prerequisites

The following **scopes** are required to execute this API:

## HTTP request

<!-- { "blockType": "ignored" } -->

```http
GET /shares/{id}
```

## Optional query parameters

This method supports the [OData Query Parameters](http://developer.microsoft.com/en-us/graph/docs/overview/query_parameters) to help customize the response.

## Request headers

| Name          | Type   | Description               |
| :------------ | :----- | :------------------------ |
| Authorization | string | Bearer {token}. Required. |

## Request body

Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and [share](../resources/shareddriveitem.md) object in the response body.

## Example

##### Request

Here is an example of the request.

<!-- {
  "blockType": "request",
  "name": "get_share"
}-->

```http
GET https://graph.microsoft.com/beta/shares/{id}
```

##### Response

Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.

<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.sharedDriveItem"
} -->

```http
HTTP/1.1 200 OK
Content-type: application/json
Content-length: 330

{
  "id": "6B6D1017-76B8-4229-8775-980FA003F7EC",
  "name": "Shared document.docx",
  "owner": {
    "user": {
      "displayName": "Ryan Gregg",
      "id": "A5FE3621-7759-40F6-A458-BB985F075E81"
    }
  }
}
```

<!-- uuid: 8fcb5dbc-d5aa-4681-8e31-b001d5168d79
2015-10-25 14:57:30 UTC -->
<!-- {
  "type": "#page.annotation",
  "description": "Get share",
  "keywords": "",
  "section": "documentation",
  "tocPath": ""
}-->