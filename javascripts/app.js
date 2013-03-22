(function() {
    "use strict";
    /*global console: false, document: false, window: false */
    var $ = window.$,
            activeTab,
            createTaskList,
            main,
            jsonSetup,
            allTask,
            allCategories,
            removeButton,
            categoryArray;
    
    
    //changes active tab
    activeTab = function(anchor) {
        anchor.click(function() {
            var target = $(this).attr("href");
            $(".active").removeClass("active");
            $(this).addClass("active");
            $("#" + target).addClass("active");
            return false;
        });
    };
    jsonSetup = function(todo) {
        allCategories = $("<ul>" + "<li>" + todo.categories + "</li>").addClass("categoryClass");
        var arraycategories = [];
        arraycategories = todo.categories;
        var joinedArray = arraycategories.join(" ");
        console.log(joinedArray);
        allTask = $("<span>" + todo.description + "</span>").addClass(joinedArray);
        removeButton = $("<button type ='button'>Remove</button>");
        $("#tasks").append(allTask).append(removeButton).append(allCategories);
        };
    main = function() {
        //gets all.json data from file
        $.getJSON("all.json", function(todos) {
            todos.forEach(function(todo) {
                jsonSetup(todo);
        });
    });
    };
        activeTab($(".tabs .tab"));//calls activeTab function

    $(document).ready(main);
}());