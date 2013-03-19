(function() {
    "use strict";
    var main,
        activeTab;

    main = function() {
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
        //builds array that stores categories
        var categoryArray = [];
        var createCategoryList = function(category) {
            if (categoryArray.indexOf(category)===-1){     
                categoryArray.push(category);
            };
            return categoryArray;
        };
        
        //add tasks to category
        var listCategories = function(categoryArray) {
            $("#catTab").click(function() {
              alert("working!"+ categoryArray.length);
              for (var z = 0; z> categoryArray.length; z++) {
                   $("#categoryList").append("<ul>" + "<li>" + categoryArray(z) + " </li>");  
              };
            });
        };
        
        var addTasksToCategories = function(){
            $("#categoryList").empty();
            categoryArray.forEach(function(){
                $("#categoryList").append("<p>" + category + "</p>");
                todos.forEach(function(todo){
                    todo.categories.forEach(function(category){
                        if (categoryArray.indexOf(category)!==-1){
                            $("#categoryList").append("<ul>" + "<li>" + description + " </li>");
                        };
                    });
                });
            });
        };
         
        var buildAddTab = function(){
          $("#tab3").click(function(){
              alert("hi there@!");
              $("addTasks").append("<input type='text' class='new_task' id='nTask' placeholder='task'><br>");
              $("addTasks").append("<input type='text' class='new_task' id='nCategory' placeholder='categories'><br>");
              $("addTasks").append("<button class='submit'>Submit</button>");
              $("addTasks").append("<p>If a task has more than one category, please separate with a comma.</p>");
              console.log("addTab: Hi There!");
              });  
        };
        
        $.getJSON("all.json", function(todos) {
            todos.forEach(function(todo) {
                $("#tasks").append("<p>" + todo.description + "<button id='remove'>Remove</button>" + " </p>");
                todo.categories.forEach(function(category) {
                   $("#tasks").append("<ul>" + "<li>" + category + " </li>");
                   createCategoryList(category);                   
                });       
            });
            //tests to make sure array is correct
            for (var i = 0; i < categoryArray.length; i++) {
                        console.log(categoryArray[i]);
                    };
        });
        activeTab($(".tabs .tab"));//calls activeTab function
        //buildCategoryTab(category);
        buildAddTab();
        addTasksToCategories();
        listCategories(categoryArray);
    };

    $(document).ready(main);
}());