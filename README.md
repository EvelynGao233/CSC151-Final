# Dark Mode

## Introduction

Hi! This is Dark Mode 1.0.0. Dark Mode is an extension which enables user to switch their current web page bewteen dark mode and light mode. 

The dark theme usually applies to all of the pages, but there maybe some circumstances that you only want dark mode for specific page but maintain others in light mode. Our extension can help you by only applying for current web page without influencing other pages. 

## Installation

The installation is pretty simple! 

Download our zip file, and go to google menu. 

Click on "More Tools", then "Extensions", you will get into the page of "Extension".

Click the top left button "load unpacked" and upload our file, then you are done!

## Usage

By clicking on the top button, the page will swtich to the different mode comapring to the current situation.

If it is dark mode now, the page will convert to light mode and vice versa.

We also add an addition button enable user to change the background color in current webpage, but now we only provide only one choice for user to change background into green. 

## File introductions 

manifest.json: To enable our extension works, we first build manifest.json to specify the name and version of our extension, including the action and permission.

popup.html: This is the file we used to design our popup page. There are two buttons in our popup page, one for dark theme and another one for the color chaning. In here, we also call popup.js to execute the main function.

popup.js: This is the file including our main functions: the animation of the button and call different javascript file by clicking the button.

appOn.js: Convert into different mode from the original one.

appOff.js: Convert back to original mode.

colorOn.js: Convert background into green.

colorOff.js: Convert back to original color.


