
// Budget Controller
var budgetController = ( () => {

})();


// UI Controller
var UIController = ( () => {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    }

    return {
        getinput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: () => {
            return DOMstrings;
        }
    };

})();


// Global App Controller
var controller = ((budgetCtrl, UICtrl) => {

    var setupEventListeners = () => {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })


    }


    var ctrlAddItem = () => {

        // 1. Get the filled input data
        var input = UIController.getinput();
        console.log(input)

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: () => {
            console.log('Started')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init()