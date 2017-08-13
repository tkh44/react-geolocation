Changelog
------------

##### 2.0.0
* Action creators now receive ONE arguement, `store`. 
This expands what is possible in an action handler

* Renamed `addReducer` to `handleActions` (inspired by redux-actions)
The name no longer made sense. Returning a _new_ state from the handler is no longer required.

* Added `createActions`  (inspired by redux-actions)

Allows developer to create actions and have them available directly from the store
```js
store.createActions({
  startMediaStream: (constraints) => async store => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      store.actions.mediaStreamSuccess(stream)
    } catch (err) {
      store.actions.mediaStreamError(err)
    }
  },
  addImage: 'camera/ADD_IMAGE'
})

// ...later
store.actions.startMediaStream({ audio: true, video: true })
store.actions.addImage(image)
```

If the property of the action creator is a plain string like `addImage: 'camera/ADD_IMAGE'` you can use the name in your reducer.

```js
store.handleActions({
  [store.actions.addImage]: (state, image) => {
    state.camera.images.push(image)
  }
})
```

* Reserved event types with the prefix `$$store:`
`$$store:state:change` is fired after an action handler is called
