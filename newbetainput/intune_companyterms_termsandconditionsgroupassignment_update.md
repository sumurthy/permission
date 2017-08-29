﻿# Update termsAndConditionsGroupAssignment

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Update the properties of a [termsAndConditionsGroupAssignment](../resources/intune_companyterms_termsandconditionsgroupassignment.md) object.
## Prerequisites
One of the following [permission scopes](https://developer.microsoft.com/en-us/graph/docs/authorization/permission_scopes) is required to execute this API:

*DeviceManagementServiceConfig.ReadWrite.All*
## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
PATCH /deviceManagement/termsAndConditions/{termsAndConditionsId}/groupAssignments/{termsAndConditionsGroupAssignmentId}
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer &lt;token&gt; Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a [termsAndConditionsGroupAssignment](../resources/intune_companyterms_termsandconditionsgroupassignment.md) object.
The following table shows the properties that are required when you create a [termsAndConditionsGroupAssignment](../resources/intune_companyterms_termsandconditionsgroupassignment.md).

|Property|Type|Description|
|---|---|---|
|id|String|Unique identifier of the entity.|
|targetGroupId|String|Unique identifier of a group that the T&C policy is assigned to.|

## Response
If successful, this method returns a `200 OK` response code and an updated [termsAndConditionsGroupAssignment](../resources/intune_companyterms_termsandconditionsgroupassignment.md) object in the response body.

## Example
### Request
Here is an example of the request.
```http
PATCH https://graph.microsoft.com/beta/deviceManagement/termsAndConditions/{termsAndConditionsId}/groupAssignments/{termsAndConditionsGroupAssignmentId}
Content-type: application/json
Content-length: 48

{
  "targetGroupId": "Target Group Id value"
}
```

### Response
Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 169

{
  "@odata.type": "#microsoft.graph.termsAndConditionsGroupAssignment",
  "id": "2eb1aab7-aab7-2eb1-b7aa-b12eb7aab12e",
  "targetGroupId": "Target Group Id value"
}
```



