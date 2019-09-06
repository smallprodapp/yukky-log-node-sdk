# Yukky Log NodeJS SDk

Easy to use SDK to send log to Yukky Log !

For more informations visit https://log.yukkyapp.com/doc

## Installation

```
yarn add @smallprod/yukky-log-node-sdk
or
npm i @smallprod/yukky-log-node-sdk
```

## Initialisation

Somewhere in your code you should add this :

```
const yukkylog = require('@smallprod/yukky-log-node-sdk');
yukkylog.init('<appkey>', '<appsecret>');
```

This will initialize the SDK.

## Send some logs

### Error

To send an error log simply add this line :

```
await yukkylog.error({
  name: 'Error 404',
  tags: ['web', 'request'],
  desc: 'Not found',
  infos: err,
});
```

### Warning

To send a warning log simply add this line :

```
await yukkylog.warning({
  name: 'Error 404',
  tags: ['web', 'request'],
  desc: 'Not found',
  infos: err,
});
```

### Info

To send an info log simply add this line :

```
await yukkylog.info({
  name: 'Error 404',
  tags: ['web', 'request'],
  desc: 'Not found',
  infos: err,
});
```

### Custom

To send a custom log simply add this line :

```
await yukkylog.custom({
  type: 'page access',
  name: 'Error 404',
  tags: ['web', 'request'],
  desc: 'Not found',
  infos: err,
});
```
