# Get Drive

Retrieve the properties and relationships of a [Drive](../resources/drive.md) resource. 
A Drive is the top-level container for a file system.
Graph API allows access to the Drive resource for a user's OneDrive or OneDrive for Business, or SharePoint document libraries.

## Permissions

One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | Files.Read, Files.ReadWrite, Files.Read.All, Files.ReadWrite.All, Sites.Read.All, Sites.ReadWrite.All    | 
|Delegated (personal Microsoft account) | Files.Read, Files.ReadWrite, Files.Read.All, Files.ReadWrite.All    | 
|Application | Files.Read.All, Files.ReadWrite.All, Sites.Read.All, Sites.ReadWrite.All | 

## Get a user's OneDrive

To access a user's OneDrive or OneDrive for Business, your app must request the **drive** relationship on the [User](../resources/user.md) resource.

## HTTP request

<!-- { "blockType": "ignored" } -->

```http
GET /me/drive
GET /users/{idOrUserPrincipalName}/drive
```

## Get the document library associated with a group

To access a [Group's](../resources/group.md) default document library, your app requests the **drive** relationship on the Group.

## HTTP request

<!-- { "blockType": "ignored" } -->

```http
GET /groups/{idOrUserPrincipalName}/drive
```


## Optional query parameters

This method supports the [OData Query Parameters](http://developer.microsoft.com/en-us/graph/docs/overview/query_parameters) to help customize the response.

## Request body

Do not supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and [Drive](../resources/drive.md) resource in the response body.

## Example

##### Request

Here is an example of the request to get the sign-in user's OneDrive or OneDrive for Business.

<!-- {
  "blockType": "request",
  "name": "get_drive"
}-->
```http
GET https://graph.microsoft.com/v1.0/me/drive
```

##### Response

Here is an example of the response.

<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.drive"
} -->
```http
HTTP/1.1 200 OK
Content-type: application/json

{
    "id": "b!t18F8ybsHUq1z3LTz8xvZqP8zaSWjkFNhsME-Fepo75dTf9vQKfeRblBZjoSQrd7",
    "driveType": "business",    
    "owner": {
        "user": {
            "id": "efee1b77-fb3b-4f65-99d6-274c11914d12",
            "displayName": "Ryan Gregg"
        }
    },
    "quota": {
        "deleted": 256938,
        "remaining": 1099447353539,
        "state": "normal",
        "total": 1099511627776
    }
}
```

<!-- uuid: 8fcb5dbc-d5aa-4681-8e31-b001d5168d79
2015-10-25 14:57:30 UTC -->
<!-- {
  "type": "#page.annotation",
  "description": "Get metadata for a OneDrive, OneDrive for Business, or Office 365 group drive",
  "keywords": "drive,onedrive,default drive,group drive",
  "section": "documentation",
  "tocPath": "OneDrive/Drive/Get Drive"
}-->
