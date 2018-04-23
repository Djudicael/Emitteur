Emetteur
=========

Emitteur is a event emitter implementation simplified.

## Installation

  `npm install emetteur`

## Concept
Emiteur offer two methods. One to register you event with the listerner associate. And an other one to invoke the event

```js
let  Emetteur= require('emetteur');

const eventEmitter= new Emetteur();
eventEmitter.on('myEvent', function(x) { console.log(x); });
eventEmitter.trigger('myEvent', 'event test'); 
 ``` 
  
  Output should be `event test`

## API
### `on(eventType, callback)`
Register your callback on a event. It's posible to have more than one call back for a same event.

```js
const eventEmitter= new Emetteur();
eventEmitter.on('myEvent', function(x) { console.log(x); });
eventEmitter.on('myEvent', function(x,y) { console.log(x + y); });
 ``` 

### `trigger(eventType, ...args)`
Emit your event with the trigger method. Its possible to add multiple arguments. This arguement can be use for your list of callbacks.


## Author

`Judicaël DUBRAY`



 