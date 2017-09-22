# messaging-api-viber

> Messaging API client for Viber

<img src="https://www.viber.com/app/uploads/Icon_1024.png" alt="Viber" width="150" />

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)


## Installation

```sh
npm i --save messaging-api-viber
```
or
```sh
yarn add messaging-api-viber
```

<br />

## Usage

### Initialize

```js
const { ViberClient } = require('messaging-api-viber');

// get authToken from the "edit info" screen of your Public Account.
const client = ViberClient.connect(authToken);
```

<br />

## API Reference

All methods return a Promise.

<br />


## `setWebhook(url [, eventTypes])`

Example:
```js
client.setWebhook('https://4a16faff.ngrok.io/');
```

You can filter event types using optional parameter:

```js
client.setWebhook('https://4a16faff.ngrok.io/', [
  'delivered',
  'seen',
  'conversation_started',
]);
```

## `removeWebhook`

Example:
```js
client.removeWebhook();
```

## `sendMessage()`

Example:
```js
client.sendMessage();
```

## `sendText(receiver, text [, options])`

Example:
```js
client.sendText();
```

## `sendPicture`

Example:
```js
client.sendPicture();
```

## `sendVideo`

Example:
```js
client.sendVideo();
```

## `sendFile`

Example:
```js
client.sendFile();
```

## `sendContact(receiver, contact [, options])`

Example:
```js
client.sendContact();
```

## `sendLocation(receiver, location [, options])`

Example:
```js
client.sendLocation();
```

## `sendURL(receiver, url [, options])`

Example:
```js
client.sendURL();
```

## `sendSticker(receiver, stickerId [, options])`

Example:
```js
client.sendSticker();
```

## `sendCarouselContent(receiver, richMedia [, options])`

Example:
```js
client.sendCarouselContent();
```
