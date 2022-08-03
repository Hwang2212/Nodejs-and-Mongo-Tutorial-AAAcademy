// Named function
function welcome() {
    console.log("Hello from node function!");
    
}
welcome();

// Arrow function
welcomeArrow = () => {
    console.log("Hellow from arrow function!");
}
welcomeArrow();

// Variable function
welcomeVariable = function () {
    console.log("Hello from variable function!!");
}
welcomeVariable()


welcomeMessage = (message)=> {
    console.log("Message: " + message);
}
welcomeMessage("Hello, node is easy!");