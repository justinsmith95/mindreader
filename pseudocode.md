Have a template that remains constant through all states to display the necessary buttons and text.
Have the template hide and show different elements depending on the state
Have the state change when a button is pressed. (Conditional?)
Have the template as an object that reads false if the button hasn't been pressed, and true if the button is pressed.
Have the object check whether its 'true' or 'false' (whether the button has been pressed or not)
If the object is 'true' change the status of the object to the next page (state?), if false remain in the same state (on the same page)

Object 'MindReader' = Container/row/column: 'I can read your mind'; Round Button: 'Go'
    MindReader.state = {
        Button: false
        page: 1-6
        Reset: false
        bigText: show
        smallText: show
    }

Create a "MindReader" prototype(?) - global state or page 1?
    
    create a function(?) for MindReader to  move to the next page (page 1 to page 2, 2 to 3, etc.) when a specified button is pressed.
        - When the local mindreader.state button = true, set the page number status to +1 the current page state
    Specify the button to be pressed  individually for each page state that will set the page from 'false' to 'true'. 
    Each page other than the global page (or page 1?) will have a reset button that changes state back to the global page (or page 1?).
    - create a variable (var = reset?) that will correspond to the reset button with value 'true' or 'false'. When reset button is pressed, reset = true
    Create an if statement for if reset = true, set the mindreader status back to page 1.
    Create bigText and smallText objects that have further properties of text based on the page you're on.
        - BigText = {
            bigText1 = "i can read your mind"
            bigText2 = "Pick a number from 01-99"
            bigText3 = "Add both digits together to get a new number"
            bigText4 = "Subtract your new number from the original number"
            bigText5 = "0-Symbol, 1-newSymbol, 2-newSymbol, 3-symbol, ..."
            bigText6 = 'Correct Symbol'
        }

        -smallText = {
            smallText1 = hide 
            smallText2 = "when you have your number click next"
            smallText3 = "Ex: 14 is 1 + 4 = 5, click next to proceed"
            smallText4 = "Ex: 14 - 5 = 9, click next to proceed"
            smallText5 = "Find your new number., Note the symbol beside the number"
            smallText6 = "Your symbol is: 'Correct Symbol' "
        }

Create a "nextButton" in html in order to make an onclick function
make the onlcick function
    - if (document.getElementById("nextButton").onclick) {
        document.getElementById("nextButton") = true
    }
