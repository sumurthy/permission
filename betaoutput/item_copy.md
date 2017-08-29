# Copy a DriveItem

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

Creates a copy of a [driveItem](../resources/driveitem.md) (including any children) under a new parent or with a new name.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              |
|:--------------------|:---------------------------------------------------------|
|Delegated (work or school account) | Files.ReadWrite, Files.ReadWrite.All, Sites.ReadWrite.All    |
|Delegated (personal Microsoft account) | Files.ReadWrite, Files.ReadWrite.All    |
|Application | Files.ReadWrite.All, Sites.ReadWrite.All |

## HTTP request

<!-- { "blockType": "ignored" } -->
```
POST /me/drive/items/{item-id}/copy
POST /me/drive/root:/{path}:/copy
POST /groups/{group-id}/drive/items/{item-id}/copy
POST /drives/{drive-id}/items/{item-id}/copy
```

## Request body
In the request body, provide a JSON object with the following parameters.


| Name            | Value                                          | Description                                                                                                 |
|:----------------|:-----------------------------------------------|:------------------------------------------------------------------------------------------------------------|
| parentReference | [ItemReference](../resources/itemreference.md) | Optional. Reference to the parent item the copy will be created in.                                         |
| name            | string                                         | Optional. The new name for the copy. If this isn't provided, the same name will be used as the original.    |

**Note:** The _parentReference_ should include either an `id` or `path` but not both. 
If both are included, they need to reference the same item or an error will occur.

## Example

<!-- { "blockType": "request", "name": "copy-item", "scopes": "files.readwrite" } -->
```http
POST https://graph.microsoft.com/beta/me/drive/items/{item-id}/copy
Content-Type: application/json

{
  "parentReference": {
    "path": "/drive/root:/Documents"
  },
  "name": "contoso plan.docx"
}
```

## Response

Returns details about how to monitor the progress of the copy, upon accepting the request.

<!-- { "blockType": "response" } -->
```http
HTTP/1.1 202 Accepted
```

## Remarks

In many cases the copy action is performed asynchronously.
The response from the API will only indicate that the copy operation was accepted or rejected, say due to the destination filename already being in use.

**Note:** The API does not provide a method to know if the copy was successful.

<!-- {
  "type": "#page.annotation",
  "description": "Create a copy of an existing item.",
  "keywords": "copy existing item",
  "section": "documentation",
  "tocPath": "OneDrive/Item/Copy"
} -->
