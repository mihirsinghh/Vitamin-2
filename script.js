/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById('sidebar-button'); //returns reference to the first <button> element with ID "sidebar-button"
  const sidebar = document.getElementById('sidebar'); //returns reference to the first <aside> element with ID "sidebar"

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.

  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains('opened'); //checks to see if the element has class "opened" applied to it.

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove('opened');
      sidebarButton.innerText = '›';
      
    } else {
      // Open the sidebar
     sidebar.classList.add('opened');
     sidebarButton.innerText = '\u2039';
    }
  });
};

/**
 * Question 2
 * When the user clicks the "to-do" button, create a new <li> element containing the text that the user entered, and append it to <ul id = to-do list>. After adding, clear <input id = task-name>.
 */
const question2 = () => {
  const taskName = document.getElementById("task-name"); //gets reference to <input>
  const addTodoButton = document.getElementById("add-todo"); //gets reference to <button>
  const todoListUl = document.getElementById("todo-list"); //gets reference to <ul>

  addTodoButton.addEventListener("click", (event) => {
    const newListElement = document.createElement("li");
    newListElement.innerText = taskName.value; //sets the entry of the list element to be whatever the user typed into the input field.
    todoListUl.append(newListElement); //appends the list item to the <ul> element.
    taskName.value = "";//clears the input field.
  })
};

/**
 * Question 3
 */
const question3 = () => {
  /*
  const firstNameInput = __YOUR_CODE_HERE__;
  const lastNameInput = __YOUR_CODE_HERE__;
  const message = __YOUR_CODE_HERE__;
  */

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */

  };

  /** YOUR CODE HERE */

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => { //calls the "event" callback function when the HTML page is fully loaded. Ensure that all Javascript code is inside this function or inside a function that is called by this callback function.
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
