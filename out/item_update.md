# Update DriveItem properties

Update the metadata for a [DriveItem](../resources/driveitem.md) by ID or path.

You can also use update to [move an item](item_move.md) to another parent by updating the item's **parentReference** property.

## Permissions
One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).

|Permission type      | Permissions (from least to most privileged)              | 
|:--------------------|:---------------------------------------------------------| 
|Delegated (work or school account) | Files.ReadWrite, Files.ReadWrite.All, Sites.ReadWrite.All    | 
|Delegated (personal Microsoft account) | Files.ReadWrite, Files.ReadWrite.All    | 
|Application | Files.ReadWrite.All, Sites.ReadWrite.All | 

## HTTP request
<!-- { "blockType": "ignored" } -->
```http
PATCH /me/drive/items/{item-id}
PATCH /me/drive/root:/{item-path}
PATCH /drives/{drive-id}/items/{item-id}
PATCH /groups/{group-id}/drive/items/{item-id}
```

## Request headers

| Name          | Type   | Description                                                                                                                                                         |
|:--------------|:-------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| if-match      | String | If this request header is included and the eTag (or cTag) provided does not match the current eTag on the folder, a `412 Precondition Failed` response is returned. |

## Request body
In the request body, supply the values for properties that should be updated.
Existing properties that are not included in the request body will maintain their previous values or be recalculated based on changes to other property values.
For best performance your app should not include properties that haven't changed.

## Response

If successful, this method returns a `200 OK` response code and updated [DriveItem](../resources/driveitem.md) resource in the response body.

## Example
This example renames the driveItem.

<!-- {
  "blockType": "request",
  "name": "update_item"
}-->
```http
PATCH /me/drive/items/{item-id}
Content-type: application/json

{
	"name": "new-file-name.docx"
}
```

##### Response

The following example shows the response. This response is truncated for readability.

<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.driveItem"
} -->
```http
HTTP/1.1 200 OK
Content-type: application/json

{
	"id": "01NKDM7HMOJTVYMDOSXFDK2QJDXCDI3WUK",
	"name": "new-file-name.docx",
	"file": { }
}
```

<!-- uuid: 8fcb5dbc-d5aa-4681-8e31-b001d5168d79
2015-10-25 14:57:30 UTC -->
<!-- {
  "type": "#page.annotation",
  "description": "Update item",
  "keywords": "",
  "section": "documentation",
  "tocPath": "OneDrive/Item/Update item"
}-->
