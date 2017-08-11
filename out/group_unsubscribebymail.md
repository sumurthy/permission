# group: unsubscribeByMail

Calling this method will prevent the current user from receiving email notifications
for this group about new posts, events, and files in that group. Supported for only Office 365 groups. 
## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).


|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | Group.ReadWrite.All    | 
|Delegated (personal Microsoft account) | Not supported.    | 
|Application | Group.ReadWrite.All | 

## HTTP request
<!-- { "blockType": "ignored" } -->
```http
POST /groups/{id}/unsubscribeByMail
```
## Request headers
| Header       | Value |
|:---------------|:--------|
| Authorization  | Bearer {token}. Required.  |

## Request body

## Response
If successful, this method returns `200, OK` response code. It does not return anything in the response body.

## Example
Here is an example of how to call this API.
##### Request
Here is an example of the request.
<!-- {
  "blockType": "request",
  "name": "group_unsubscribebymail"
}-->
```http
POST https://graph.microsoft.com/v1.0/groups/{id}/unsubscribeByMail
```

##### Response
Here is an example of the response. 
<!-- {
  "blockType": "response",
  "truncated": true
} -->
```http
HTTP/1.1 200 OK
```

<!-- uuid: 8fcb5dbc-d5aa-4681-8e31-b001d5168d79
2015-10-25 14:57:30 UTC -->
<!-- {
  "type": "#page.annotation",
  "description": "group: unsubscribeByMail",
  "keywords": "",
  "section": "documentation",
  "tocPath": ""
}-->
