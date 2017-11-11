export default function debounce (func, wait, context) {
    var previousCallTime;
    var firstCall = true;
    var id; // we store the id of each setTimeout in here, so that we can cancel it later if needs be
    
    return function (newArray) {    
        var now = Date.now();
        var timeSinceLastCall = now - previousCallTime;
        var startTimer = function () {
            id = setTimeout(function () {
                func.call(context, newArray);
            }, wait)
        }

        if (firstCall) {
            // it's the first call, so we start the timer (based on the 'wait' parameter up top) which is set up to fire our 'func()' once the timer is up...
            startTimer();      
            // we set 'firstCall' to false so this 'if' block never runs again      
            firstCall = false;
            // set 'previousCall' to the time right now, so we can compare it to the timestamps of future calls
            previousCallTime = now;
            // break out of this function here, knowing that we've got our timer set up and the clock ticking down...
            return;
        }

        // if another call comes in before 1 second ('wait') is up... 
        if (timeSinceLastCall < wait) {
            // ... cancel the previous setTimeout that is waiting to fire 'func()'
            clearTimeout(id);
            // ... then restart the setTimeout 
            startTimer();
            previousCallTime = now;
        } else {
            // but if a subsequent call comes in AFTER 'wait' amount of time, then our function will have been allowed to fire. Now, we can restart the timer again.
            previousCallTime = now;
            startTimer();
        }
    }
}