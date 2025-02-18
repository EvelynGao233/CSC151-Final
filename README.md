# Dark Mode

## Introduction

Hi! This is Dark Mode 1.0.0. Dark Mode is an extension that enables users to switch their current web page between dark mode and light mode. 

The dark theme usually applies to all of the pages, but there may be some circumstances where you only want dark mode for a specific page but maintain others in light mode. Our extension can help you by only applying for the current web page without influencing other pages. Please enjoy. :)

## Installation

The installation is pretty simple! 

Download our zip file, and go to the Google menu. 

Click on "More Tools", then "Extensions", and you will get into the page "Extension".

Click the top-left button "load unpacked" and upload our file, then you are done!

## Usage

By clicking on the top button, the page will switch to the different modes compared to the current situation.

If it is dark mode now, the page will convert to light mode and vice versa.

We also add an additional button to enable users to change the background color in the current webpage, but now we only provide only one choice for users to change the background to green. However, you can easily change into your favorite color by simply changing the color number in the colorOn.js to have your favorite color on!

## File introductions 

manifest.json: To enable our extension works, we first build manifest.json to specify the name and version of our extension, including the action and permission.

popup.html: This is the file we used to design our popup page. There are two buttons on our popup page, one for the dark theme and another one for the color changing. Here, we also call popup.js to execute the main function.

popup.js: This is the file including our main functions: the animation of the button and call different javascript files by clicking the button.

appOn.js: Convert into a different mode from the original one.

appOff.js: Convert back to the original mode.

colorOn.js: Convert background into the green.

colorOff.js: Convert back to the original color.

## Test

During the process of building our project, we focused more on the direct visual effects of our extension but didn’t consider enough about how to test it. Writing unit tests for our Chrome extension is also different from the unit tests we have written in the past assignments in this class. 

We have tried Jasmine and Jest to write the unit test, but failed to finish it because we don’t know how to set inputs for our expected outputs. 

We tried to test whether there would be two buttons and whether the color of the page would change in our pop-up. We failed to finish it because we don’t know how to set inputs for our expected outputs. Considering that we used existing CSS filter functions to change the color of the page and that we called our Javascript after the user clicked the button, it is also hard to think about how we can effectively test our program. The effect files are called after the buttons are turned on. We are thus wondering how the test should work without having turned the button on.

For the next time, we should think more about unit tests when writing our program. 

(We have included test files we tried to use)




