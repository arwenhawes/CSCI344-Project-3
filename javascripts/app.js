(function() {
    "use strict";
    /*global console: false, document: false, window: false */
    var $ = window.$,
        activeTab,
        main,
        jsonSetup,
        allTask,
        allCategories,
        removeButton,
        remButton,
        addTab;


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
        var joinedArray,
            arraycategories;
        arraycategories = todo.categories;
        joinedArray = arraycategories.join(" ");
        console.log(joinedArray);
        allTask = $("<span>" + todo.description + "</span>").addClass(joinedArray);
        removeButton = $("<button type ='button'>Remove</button>");
        $("#tasks").append(allTask).append(removeButton).append(allCategories);
    };
    remButton = function (element) {
        element.click(function () {
            $(this).prev().fadeOut(750, function() {
                $(this).prev().remove();
            });
            $(this).nextUntil("span").fadeOut(750, function() {
                $(this).nextUntil("span").remove();
            });
            $(this).fadeOut(5000).remove();
            return false;
        });
    };
    addTab = function() {
        var newTask,
            newCategories = [];
        newTask = $("#new_task").val();
        newCategories = $("#new_categories").val();
        console.log("task: " + newTask + " " + newCategories);
    };
    main = function() {
        //gets all.json data from file
        $.getJSON("all.json", function(todos) {
            todos.forEach(function(todo) {
                jsonSetup(todo);
                remButton(removeButton);
            });
        });
        $(".catTab").click(function() {
            $(".categoryList").append(".shopping");
        });
        $("#submit_button").click(addTab); //calls addTab 
    };
    activeTab($(".tabs .tab"));//calls activeTab function
    $(document).ready(main);
}());