# 1. setImmediate vs setTimeout
setImmediate executes task immediately after the I/O event handlers in the current snapshop while setTimeout queues the task to be executed later after the specified time but after all the tasks found in the queue have been processed.

# 2. process.nextTick vs setImmediate
Use setImmediate if you want to queue the function behind whatever I/O event callbacks that are already in the event queue. Use process.nextTick to effectively queue the function at the head of the event queue so that it executes immediately after the current function completes.

# 3. Some default node modules

* **fs** - for handling file system
* **http** - for making node work like http server
* **events** - for handling events
* **assert** - for testing
* **path** - for handling file paths
* **stream** - for streaming data
* **url** - for parsing url strings
* **os** - provide info about operating system
* **timers** - execute code after specified time
* **tls** - for TLS and SSL protocols