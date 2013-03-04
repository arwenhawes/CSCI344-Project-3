var main = function () {
    console.log("hi there");
    
    $.getJSON("all.json", function (todos){
        todos.forEach(function (todo) {
            console.log(todo.description);
            todo.categories.forEach(function (category){
                console.log(" " + category);
                });
        });
    });
};

$(document).ready(main);

