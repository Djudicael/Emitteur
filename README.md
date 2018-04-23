
Emetteur [![Build Status](https://travis-ci.org/Djudicael/Emitteur.svg?branch=master)](https://travis-ci.org/Djudicael/Emitteur)
=========

Emitteur is a event emitter implementation simplified.

## Installation

  `npm install emetteur`

## Concept
Emiteur offer two methods. One to register your event with the listener associate. And any other one to invoke the event.

```js
let  Emetteur= require('emetteur');

const eventEmitter= new Emetteur();
eventEmitter.on('myEvent', function(x) { console.log(x); });
eventEmitter.trigger('myEvent', 'event test'); 
 ``` 
  
  Output should be `event test`

## API
### `on(eventType, callback)`
Register your callback on an event. It's possible to have more than one call back for a same event.

```js
const eventEmitter= new Emetteur();
eventEmitter.on('myEvent', function(x) { console.log(x); });
eventEmitter.on('myEvent', function(x,y) { console.log(x + y); });
 ``` 

### `trigger(eventType, ...args)`
Emit your event with the trigger method. Its possible to add multiple arguments. This argument can be used for your list of callbacks.


## Author

`Judicaël DUBRAY`



 