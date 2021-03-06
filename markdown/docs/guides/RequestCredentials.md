---
title: "Requesting Credentials"
category: "uport-connect"
type: "guide"
source: "https://github.com/uport-project/uport-project.github.io/blob/develop/markdown/docs/guides/RequestCredentials.md"
---

# Requesting Credentials

Credentials are cryptographically signed messages containing information about a subject identity. They can be used by a decentralized system to authenticate users and enable interactions with data they control. uPort Connect provides convenient functions that allow your app to request credentials from a user's uPort mobile app and handle the response.

## Authenticating a user

A user can be authenticated by issuing a request for their identity calling the `requestDisclosure` method of a `uport-connect` instance. By default, this request will be displayed as a link that attempts to open the uPort app if your app is accessed through a mobile client. On non-mobile clients, the request will be displayed as a QR code that can be scanned by a uPort mobile app. To learn more about how messages are passed between your app and a uPort client, check out [uport-transports](https://github.com/uport-project/uport-transports)

Additionally, to help manage the multiple requests and responses that your flow may require, each request requires a string identifier, which is then used to fetch the proper response.  Each type of request has its own default id, which can be changed by passing a string as the second argument to the request.  For more details, see the uport-connect [reference](/uport-connect/reference/index.md).

```js
// calling with no args requests the user's identity by default
uport.requestDisclosure()
```

Once the user approves the disclosure, their identity can be received as a promise returned by calling `onResponse`. It comes in the form of a [did](https://w3c-ccg.github.io/did-spec/#decentralized-identifiers-dids) that can be found in the `res.did` attribute of the response payload. `uport-connect` guarentees that the user your app is communicating with controls the identifier that they disclosed. To learn more about this process, check out our documentation on [verifying JWTs](/did-jwt/guides/index.md#verifying-a-jwt)

```js
// Note that the default id for `requestDisclosure` is 'disclosureReq'
uport.onResponse('disclosureReq').then(payload => {
  console.log(payload)
  // {
  //   "data": undefined
  //   "id": "disclosureReq",
  //   "res": {
  //     "boxPub": undefined,
  //     "did": "did:uport:23fga3r2hh87ddhq98dhas8dz101j9f449w0",
  //   }
  // }
})
```

## Requesting specific credentials

You can request specific credentials by submitting an array of values in an array of the `requested` key of a passed object.

```js
uport.requestDisclosure({
    requested: ['name', 'avatar', 'phone', 'country'],
})
```

This allows your app to use data about the user without having to store or control it, while still being able to verify its integrity.  It's important to note that this type of verification can provide guarantees only that the data originated from a particular identity, and that it hasn't been modified since then.  This cryptographic verification cannot provide any guarantees about the _validity_ or _truth_ of the data, or that the issuing identity is controlled by a particular person or entity in the real world, and it is up to your application to do that sort of higher level verification as necessary for your particular use case.

```js
uport.onResponse('disclosureReq').then(payload => {
  console.log(payload)
  // {
  //   "data": undefined
  //   "id": "disclosureReq",
  //   "res": {
  //     "avatar": "https://ipfs.infura.io/ipfs/QmaqGAeHmwAi44T6ZrSuu3yxwiyHPxoE1rHGmKxeCuZbS7DBX",
  //     "name": "Agent Smith",
  //     "phone": "+1-231-452-3857",
  //     "country": "US",
  //     "boxPub": "dgH1devHn5MhAcph+np8MI4ZLB2kJWqRc4NTwtAj6Fs=",
  //     "publicEncKey": "dgH1devHn5MhAcph+np8MI4ZLB2kJWqRc4NTwtAj6Fs=",
  //     "did": "did:uport:23fga3r2hh87ddhq98dhas8dz101j9f449w0",
  //   }
  // }
})
```

## Enabling push notifications

Passing the option `notifications: true` will request the ability and permission for your app to make future requests to the user's uPort mobile app directly via push notifications. We encourage developers to use this for a more frictionless UX for non-mobile users of their app. For more information on push notifications work, check out our push notification service: [pututu](https://github.com/uport-project/lambda-pututu)

```js
uport.requestDisclosure({ notifications: true })

uport.onResponse('disclosureReq').then(payload => {
  // future requests will automatically be sent via push instead of QR for non-mobile app clients
})
```
