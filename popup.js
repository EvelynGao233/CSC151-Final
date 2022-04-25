var originalColor = document.body.style.backgroundColor

// export function oriColor() {
//     return originalColor;
//    }

sessionStorage.setItem("orignalColor", originalColor);
 

if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const button_2 = document.querySelector(".button_2");
    const circle = document.querySelector(".circle");
    const circle_2 = document.querySelector(".circle_2");
    let buttonOn = false;
    let buttonOn_2 = false;
 
    // find tab id through defining a function
    function doInCurrentTab(tabCallback) {
        chrome.tabs.query(
            { currentWindow: true, active: true },
            function (tabArray) { tabCallback(tabArray[0]); }
        );
    }

    // get tab id through using the function
    var activeTabId;
    doInCurrentTab( function(tab){ activeTabId = tab.id } );

    


    


    button.addEventListener("click", () => {
        // if botton is switched to "On"
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToOriginal 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"

                    // calling the turning on file
                    chrome.scripting.executeScript(
                        {
                           
        
                        target: {tabId: activeTabId},
                     
                        files: ['appOn.js']
                    })
                
             
           
        }
        // if the button is at "Off"
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
           
                    // calling the turning off file  
                    chrome.scripting.executeScript(
                        {
                        target: {tabId: activeTabId},
                     
                        files: ['appOff.js']
                    })

        }
    })

    button_2.addEventListener("click", () => {
        // if botton is switched to "On"
        if (!buttonOn_2) {
            buttonOn_2 = true;

            button_2.style.animation = "transformToOriginal_2 1s ease-in-out 0s forwards"
            circle_2.style.animation = "moveCircleRight_2 1s ease-in-out 0s forwards"

                    // calling the turning on file
                    chrome.scripting.executeScript(
                        {
                           
        
                        target: {tabId: activeTabId},
                     
                        files: ['colorOn.js']
                    })
                
             
           
        }
        // if the button is at "Off"
        else {
            buttonOn_2 = false;
            button_2.style.animation = "transformToGreen 1s ease-in-out 0s forwards"
            circle_2.style.animation = "moveCircleLeft_2 1s ease-in-out 0s forwards"
           
                    // calling the turning off file  
                    chrome.scripting.executeScript(
                        {
                        target: {tabId: activeTabId},
                     
                        files: ['colorOff.js']
                    })

        }
    })


}