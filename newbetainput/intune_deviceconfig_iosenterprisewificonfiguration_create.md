﻿# Create iosEnterpriseWiFiConfiguration

> **Important:** APIs under the /beta version in Microsoft Graph are in preview and are subject to change. Use of these APIs in production applications is not supported.

> **Note:** Using the Microsoft Graph APIs to configure Intune controls and policies still requires that the Intune service is [correctly licensed](https://go.microsoft.com/fwlink/?linkid=839381) by the customer.

Create a new [iosEnterpriseWiFiConfiguration](../resources/intune_deviceconfig_iosenterprisewificonfiguration.md) object.
## Prerequisites
One of the following [permission scopes](https://developer.microsoft.com/en-us/graph/docs/authorization/permission_scopes) is required to execute this API:

*DeviceManagementConfiguration.ReadWrite.All*
## HTTP Request
<!-- {
  "blockType": "ignored"
}
-->
```http
POST /deviceManagement/deviceConfigurations
```

## Request headers
|Header|Value|
|---|---|
|Authorization|Bearer &lt;token&gt; Required.|
|Accept|application/json|

## Request body
In the request body, supply a JSON representation of a iosEnterpriseWiFiConfiguration object.
The following table shows the properties that are required when you create a iosEnterpriseWiFiConfiguration.

|Property|Type|Description|
|---|---|---|
|id|String|Key of the entity. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|lastModifiedDateTime|DateTimeOffset|DateTime the object was last modified. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|assignmentStatus|String|Read-only. DateTime the object was last modified. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|assignmentProgress|String|Read-only. DateTime the object was last modified. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|assignmentErrorMessage|String|Read-only. DateTime the object was last modified. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|createdDateTime|DateTimeOffset|DateTime the object was created. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|description|String|Admin provided description of the Device Configuration. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|displayName|String|Admin provided name of the device configuration. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|version|Int32|Version of the device configuration. Inherited from [deviceConfiguration](../resources/intune_deviceconfig_deviceconfiguration.md)|
|networkName|String|Network Name Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|ssid|String|This is the name of the Wi-Fi network that is broadcast to all devices. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|connectAutomatically|Boolean|Connect automatically when this network is in range. Setting this to true will skip the user prompt and automatically connect the device to Wi-Fi network. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|connectWhenNetworkNameIsHidden|Boolean|Connect when the network is not broadcasting its name (SSID). When set to true, this profile forces the device to connect to a network that doesn't broadcast its SSID to all devices. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|wiFiSecurityType|String|Indicates whether Wi-Fi endpoint uses an EAP based security type. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md) Possible values are: `open`, `wpaPersonal`, `wpaEnterprise`, `wep`.|
|proxySettings|String|Proxy Type for this Wi-Fi connection Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md) Possible values are: `none`, `manual`, `automatic`.|
|proxyManualAddress|String|IP Address or DNS hostname of the proxy server when manual configuration is selected. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|proxyManualPort|Int32|Port of the proxy server when manual configuration is selected. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|proxyAutomaticConfigurationUrl|String|URL of the proxy server automatic configuration script when automatic configuration is selected. This URL is typically the location of PAC (Proxy Auto Configuration) file. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|preSharedKey|String|This is the pre-shared key for WPA Personal Wi-Fi network. Inherited from [iosWiFiConfiguration](../resources/intune_deviceconfig_ioswificonfiguration.md)|
|eapType|String|Extensible Authentication Protocol (EAP). Indicates the type of EAP protocol set on the the Wi-Fi endpoint (router). Possible values are: `eapTls`, `leap`, `eapSim`, `eapTtls`, `peap`, `eapFast`.|
|eapFastConfiguration|String|EAP-FAST Configuration Option when EAP-FAST is the selected EAP Type. Possible values are: `noProtectedAccessCredential`, `useProtectedAccessCredential`, `useProtectedAccessCredentialAndProvision`, `useProtectedAccessCredentialAndProvisionAnonymously`.|
|trustedServerCertificateNames|String collection|Trusted server certificate names when EAP Type is configured to EAP-TLS/TTLS/FAST or PEAP. This is the common name used in the certificates issued by your trusted certificate authority (CA). If you provide this information, you can bypass the dynamic trust dialog that is displayed on end users' devices when they connect to this Wi-Fi network.|
|authenticationMethod|String|Authentication Method when EAP Type is configured to PEAP or EAP-TTLS. Possible values are: `certificate`, `usernameAndPassword`.|
|innerAuthenticationProtocolForEapTtls|String|Non-EAP Method for Authentication when EAP Type is EAP-TTLS and Authenticationmethod is Username and Password. Possible values are: `unencryptedPassword`, `challengeHandshakeAuthenticationProtocol`, `microsoftChap`, `microsoftChapVersionTwo`.|
|outerIdentityPrivacyTemporaryValue|String|Enable identity privacy (Outer Identity) when EAP Type is configured to EAP - TTLS, EAP - FAST or PEAP. This property masks usernames with the text you enter. For example, if you use 'anonymous', each user that authenticates with this Wi-Fi connection using their real username is displayed as 'anonymous'.|

## Response
If successful, this method returns a `201 Created` response code and a [iosEnterpriseWiFiConfiguration](../resources/intune_deviceconfig_iosenterprisewificonfiguration.md) object in the response body.

## Example
### Request
Here is an example of the request.
```http
POST https://graph.microsoft.com/beta/deviceManagement/deviceConfigurations
Content-type: application/json
Content-length: 1222

{
  "@odata.type": "#microsoft.graph.iosEnterpriseWiFiConfiguration",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "assignmentStatus": "Assignment Status value",
  "assignmentProgress": "Assignment Progress value",
  "assignmentErrorMessage": "Assignment Error Message value",
  "description": "Description value",
  "displayName": "Display Name value",
  "version": 7,
  "networkName": "Network Name value",
  "ssid": "Ssid value",
  "connectAutomatically": true,
  "connectWhenNetworkNameIsHidden": true,
  "wiFiSecurityType": "wpaPersonal",
  "proxySettings": "manual",
  "proxyManualAddress": "Proxy Manual Address value",
  "proxyManualPort": 15,
  "proxyAutomaticConfigurationUrl": "https://example.com/proxyAutomaticConfigurationUrl/",
  "preSharedKey": "Pre Shared Key value",
  "eapType": "leap",
  "eapFastConfiguration": "useProtectedAccessCredential",
  "trustedServerCertificateNames": [
    "Trusted Server Certificate Names value"
  ],
  "authenticationMethod": "usernameAndPassword",
  "innerAuthenticationProtocolForEapTtls": "challengeHandshakeAuthenticationProtocol",
  "outerIdentityPrivacyTemporaryValue": "Outer Identity Privacy Temporary Value value"
}
```

### Response
Here is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 1330

{
  "@odata.type": "#microsoft.graph.iosEnterpriseWiFiConfiguration",
  "id": "7593f7ba-f7ba-7593-baf7-9375baf79375",
  "lastModifiedDateTime": "2017-01-01T00:00:35.1329464-08:00",
  "assignmentStatus": "Assignment Status value",
  "assignmentProgress": "Assignment Progress value",
  "assignmentErrorMessage": "Assignment Error Message value",
  "createdDateTime": "2017-01-01T00:02:43.5775965-08:00",
  "description": "Description value",
  "displayName": "Display Name value",
  "version": 7,
  "networkName": "Network Name value",
  "ssid": "Ssid value",
  "connectAutomatically": true,
  "connectWhenNetworkNameIsHidden": true,
  "wiFiSecurityType": "wpaPersonal",
  "proxySettings": "manual",
  "proxyManualAddress": "Proxy Manual Address value",
  "proxyManualPort": 15,
  "proxyAutomaticConfigurationUrl": "https://example.com/proxyAutomaticConfigurationUrl/",
  "preSharedKey": "Pre Shared Key value",
  "eapType": "leap",
  "eapFastConfiguration": "useProtectedAccessCredential",
  "trustedServerCertificateNames": [
    "Trusted Server Certificate Names value"
  ],
  "authenticationMethod": "usernameAndPassword",
  "innerAuthenticationProtocolForEapTtls": "challengeHandshakeAuthenticationProtocol",
  "outerIdentityPrivacyTemporaryValue": "Outer Identity Privacy Temporary Value value"
}
```



