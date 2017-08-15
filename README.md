

# react-geolocation
🌎🛰 Declarative geolocation in React

[![npm version](https://badge.fury.io/js/react-geolocation.svg)](https://badge.fury.io/js/react-geolocation)
[![Build Status](https://travis-ci.org/tkh44/react-geolocation.svg?branch=master)](https://travis-ci.org/tkh44/react-geolocation)
[![codecov](https://codecov.io/gh/tkh44/react-geolocation/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/react-geolocation)

-   [Install](#install)
-   [Basic Demo](https://codesandbox.io/s/l5yLpYDYJ)
-   [Basic Usage](#basic-usage)
-   [Props](#props)

## Install

```bash
npm install -S react-geolocation
```

## Basic Usage
```javascript
<Geolocation
  render={({
    fetchingPosition,
    position: { coords: { latitude, longitude } = {} } = {},
    error,
    getCurrentPosition
  }) =>
    <div>
      <button onClick={getCurrentPosition}>Get Position</button>
      {error &&
        <div>
          {error.message}
        </div>}
      <pre>
        latitude: {latitude}
        longitude: {longitude}
      </pre>
    </div>}
/>
```

## Props

### [enableHighAccuracy `boolean`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy)


### [timeout `number`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/timeout)


### [maximumAge `number`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/maximumAge)


### render `function`

`render` is a function that receives an object as its only argument.

The object contains the following keys:

- fetchingPosition: `bool`
- [position](https://developer.mozilla.org/en-US/docs/Web/API/Position): `object`
- [error](https://developer.mozilla.org/en-US/docs/Web/API/PositionError): `object`
- getCurrentPosition: `function`


### lazy `boolean`

If true then the component will **not** perform the fetch on mount. 
You must use the `getCurrentPosition` named argument in order to initiate the request.

```javascript
<Geolocation 
  lazy 
  render={({getCurrentPosition, fetchingPosition}) => (
    <div>
      <button onClick={getCurrentPosition}>Get Current Position</button>
      <div>Fetching Position: {fetchingPosition}</div>
    </div>
  )}
/> 
// renders "Fetching Position: false" until the button is clicked
```


### onSuccess `function`

callback called on success. Its only argument is `position`

- https://developer.mozilla.org/en-US/docs/Web/API/Position

### onError `function`

callback called on error. Its only argument is `error`

- https://developer.mozilla.org/en-US/docs/Web/API/PositionError

