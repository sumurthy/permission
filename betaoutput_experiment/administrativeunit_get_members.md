# Get a member

> **Important**: APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

Use this API to get a specific member (user or group) in an administrative unit.

## HTTP request

```http
GET /administrativeUnits/{id}/members/{id}
```
## Request headers
| Name      |Description|
|:----------|:----------|
| Authorization  | Bearer {token}. Required. |

## Request body
Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [user](../resources/user.md) or [group](../resources/group.md) object in the response body.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).


|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | Directory.Read.All, Directory.ReadWrite.All, Directory.AccessAsUser.All    | 
|Delegated (personal Microsoft account) | Not supported.    | 
|Application | Directory.Read.All, Directory.ReadWrite.All | 

## Example
##### Request
Here is an example of the request.

```http
GET https://graph.microsoft.com/beta/administrativeUnits/{id}/members/{id}
```

##### Response
Here is an example of the respone. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.

```http
HTTP/1.1 200 OK
Content-type: application/json
Content-length: 100

{
  "@odata.type":"#microsoft.graph.user",
  "id":"492c5308-59fd-4740-9c83-4b3db07a6d70"
  "accountEnabled":true,
  "businessPhones":[],
  "companyName":null,
  "displayName":"Demo User"
}
```