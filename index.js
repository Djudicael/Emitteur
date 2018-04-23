"use strict";
/**
 * Class creating event emmiter
 * @author Judicaël DUBRAY
 */
module.exports = class Emetteur {

    constructor() {

        /** 
         * Object storing the events name and callback function
         */
        this.events = {};
    }

    /**
     * Method the register an event 
     * This method will store the event name and function in the event object
     * @param {String} eventName 
     * @param {Function} callback 
     */
    on(eventName, callback) {
        //If there is already an event with this event name we just add the callback to the existing event
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }


    }
    /**
     * Method to invoke the event registred it take an event name and a certain number or argument.
     * Depend what it's expected by the callback
     * @param {String} eventName 
     * @param {*} arg number of argument 
     */
    trigger(eventName, ...arg) {
        //If there is any event link to the event name
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                //for each call back we will passe the argument
                callback.apply(null, arg);

            });
        }
    }

}