---
path: "/blogs/designing-a-motor-control-system"
date: "2022-07-05T04:44:25.698Z"
title: "Designing a Motor Control System"
description: "THIS is a note to design a motor control system that takes the users desired speed as input, following the tutorial from Arduino offical engineering kit."
tags: ["blog","arduino engineering kit", "simulink", "dc motor"]
featuredimage: images/WeChat5b6b617c04cf0c85fae8fe0e1527b10d.png
featuredimageAlt: "links"
---

```toc
```

## Create the Blocks
![links](images/WeChat5b6b617c04cf0c85fae8fe0e1527b10d.png)
* "Sine Wave" to simulate the speed input.
* "1-D Lookup Table" to convert the user's speed signal comming from the Sine Wave block into a PWM signal between -1 and 1.
* "Gain" block to multiplies a Simulink signal by a constant value.
* "Scope" block to visulize the output.

## Configure the Blocks
* `load motorResponse` to load the previous saved speedMono and PWMcmdMono
* We can see that the RPM is around 300. Then we configure the "Sine Wave" block as `amplitude-300, frequency-0.2`
* To configure the "1-D Lookup Table", we set Table data to PWMcmdMono and set Breakpoints to speedMono.
* "Gain" block: Amplify the PWM duty cycle to cover a range of -100 to 100, to be compatible with the motor driver later. Double-click the Gain block and set Gain to 100. Then click OK:
* To access the motor connected to the Arduino Nano Motor Carrier you need an **Arduino Device Driver block**.
![links-2](images/WeChat17b17d2dd0ddeb366d1a46c6286aabd1.png)

## Deploy the Model to Arduino
* MODELING > Model Settings: 
![config](images/WeChateb8a1a37d6a033c12d20c7308b0d7c67.png)
* Then, HARDWARE > Monitor & Tune: to build an executable and upload to hardware.

> Note: change the baud rate to 9600.