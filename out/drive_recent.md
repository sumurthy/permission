# List recent files

List a set of items that have been recently used by the signed in user.
This collection includes items that are in the user's drive as well as items they have access to from other drives.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | Files.Read, Files.ReadWrite, Files.Read.All, Files.ReadWrite.All, Sites.Read.All, Sites.ReadWrite.All    | 
|Delegated (personal Microsoft account) | Files.Read, Files.ReadWrite, Files.Read.All, Files.ReadWrite.All    | 
|Application | Files.Read.All, Files.ReadWrite.All, Sites.Read.All, Sites.ReadWrite.All | 

## HTTP request

<!-- { "blockType": "ignored" } -->
```
GET /me/drive/recent
```

## Request body
Do not supply a request body for this method.

## Example

<!-- { "blockType": "request", "name": "drive-recent", "scopes": "files.read" } -->
```http
GET https://graph.microsoft.com/v1.0/me/drive/recent
```

## Response

This returns a collection of [DriveItem](../resources/driveitem.md) resources for items which the owner of the drive has recently accessed.
Items outside of the user's drive will include the [RemoteItem](../resources/remoteitem.md) facet, which provides information to access the shared item.


<!-- { "blockType": "response", "@odata.type": "microsoft.graph.driveItem", "isCollection": true, "truncated": true } -->
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "1312abc!1231",
      "remoteItem":
      {
        "id": "1991210caf!192",
        "name": "March Proposal.docx",
        "file": { },
        "size": 19121,
        "parentReference": {
          "driveId": "1991210caf",
          "id": "1991210caf!104"
        }
      }
    },
    {
      "id": "1312def!9943",
      "name": "Vacation.jpg",
      "file": { },
      "size": 37810,
      "parentReference": {
        "driveId": "1312def",
        "id": "1312def!123"
      }
    }
  ]
}
```

## Remarks

Some driveItems returned from the **recent** action will include the **remoteItem** facet which indicates they are items from another drive. 
To access the original driveItem object, you will need to make a request using the information provided in **remoteItem** in the following format:

<!-- {"blockType": "ignored"} -->
```http
GET https://graph.microsoft.com/v1.0/drives/{remoteItem.driveId}/items/{remoteItem.id}
```

<!-- {
  "type": "#page.annotation",
  "description": "Retrieve a list of files shared with the signed-in user.",
  "keywords": "sharedWithMe onedrive shared files",
  "section": "documentation",
  "tocPath": "OneDrive/Drive/Shared with me"
} -->
