# Experimental simulator for Mbed OS 5 applications

**Demo: https://labs.mbed.com/simulator**

![Screenshot](https://os.mbed.com/media/uploads/janjongboom/simulator2.png)

While we have worked hard to improve embedded development tooling in Mbed (e.g. via the Online Compiler), the development for microcontrollers is still very similar to how it was in the 90s. Compilation is slow, and flashing is even slower. When fixing a bug, you need to get the device into the exact state as before encountering the bug. This makes for a very slow feedback loop, which hinders productivity and often pulls you out of the zone.

To make this feedback loop much shorter, we're releasing an alpha version of the Mbed Simulator. The simulator allows you to run your Mbed OS 5 applications directly on your computer, so that you can quickly test and verify applications without flashing them on a real board. This is a valuable learning tool, as you quickly learn how Mbed works. It is also very useful for developing complex applications. Within Arm, we have been using the simulator for work on [mbed-http](https://os.mbed.com/teams/sandbox/code/mbed-http/), the Mbed LoRaWAN stack and [uTensor](http://utensor.ai/).

**Note:** The Mbed Simulator is part of [Mbed Labs](https://labs.mbed.com/). The Mbed Labs projects showcase interesting side projects developed by Mbed engineers. However, these projects are not actively supported by Arm, and may be added, removed or break at any time.

[More information in the introductionary blog post](https://os.mbed.com/blog/entry/introducing-mbed-simulator/)

## Docs

* Installation, see below.


## Installation

There are two ways of installing and running the simulator: using either Docker
or a native installation.

### Docker installation

1. Install Docker
1. Build the Docker image:  
    `docker-compose build`
1. Run the Docker image:  
    1. normally:  
        `docker-compose up`
    2. or with watcher:  
        `docker-compose run mbed-sim npm run watch`
1. The simulator can now be accessed at:  
    http://localhost:7829


Original Link: https://github.com/ARMmbed/mbed-simulator/tree/master/
All copyright are reserved by ARMmbed.
