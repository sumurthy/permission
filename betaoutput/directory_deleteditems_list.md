# List deleted items

> **Important**: APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

Retrieve a list of recently deleted items from [deleted items](../resources/directory.md).

Currently, deleted items functionality is only supported for the [group](../resources/group.md) and [user](../resources/user.md) resources.

## Prerequisites
One of the following **scopes** is required to execute this API: 
* For users: *User.Read.All; Directory.Read.All; User.ReadWrite.All; Directory.AccessAsUser.All*
* For groups: *Group.Read.All; Directory.Read.All; Group.ReadWrite.All; Directory.AccessAsUser.All*

## HTTP request
<!-- { "blockType": "ignored" } -->
```http 
GET /directory/deleteditems/Microsoft.Graph.Group
GET /directory/deletedItems/Microsoft.Graph.User
```

This API currently supports retrieving object types of groups (Microsoft.Graph.Group) or users (Microsoft.Graph.User) from deleted items. The type is specified as a required part of the URI. Calling GET /directory/deleteditems without a type is not supported.

## Optional query parameters
This method supports the [OData Query Parameters](http://graph.microsoft.io/docs/overview/query_parameters) to help customize the response.

## Request headers
| Name      |Description|
|:----------|:----------|
| Authorization  | Bearer &lt;code&gt; *Required*|
| Accept  | application/json |

## Request body
Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and collection of [directoryObject](../resources/directoryobject.md) objects in the response body.
## Example
##### Request

<!-- {
  "blockType": "request",
  "name": "get_deleteditems"
}-->
```http
GET https://graph.microsoft.com/beta/directory/deleteditems/Microsoft.Graph.Group
```
##### Response
Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.directoryObject",
  "isCollection": true
} -->
```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context":"https://graph.microsoft.com/beta/$metadata#groups",
  "value": [
    {
      "id":"46cc6179-19d0-473e-97ad-6ff84347bbbb",
      "displayName":"SampleGroup",
      "groupTypes":["Unified"],
      "mail":"example@contoso.com",
      "mailEnabled":true,
      "mailNickname":"Example",
      "securityEnabled":false,
      "visibility":"Public"
    }
  ]
}
```

<!-- uuid: 8fcb5dbc-d5aa-4681-8e31-b001d5168d79
2015-10-25 14:57:30 UTC -->
<!-- {
  "type": "#page.annotation",
  "description": "List deleteditems",
  "keywords": "",
  "section": "documentation",
  "tocPath": ""
}-->