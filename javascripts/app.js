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
        
        var buildCategoryTab = function(){
          $("#tab2").click(function(){
            $("categoryList").empty("#categoryList");
            $("#categoryList").append("<button id='remove'>Remove</button>");
            console.log("categoryList: hi there");
          }); 
        }; 
        var buildAddTab = function(){
          $("#tab3").click(function(){
              $("addTasks").append("<input type='text' class='new_task' id='nTask' placeholder='task'><br>");
              $("addTasks").append("<input type='text' class='new_task' id='nCategory' placeholder='categories'><br>");
              $("addTasks").append("<button class='submit'>Submit</button>");
              $("addTasks").append("<p>If a task has more than one category, please separate with a comma.</p>");
              console.log("addTab: Hi There!");
              });  
        };
        
        $.getJSON("all.json", function(todos) {
            for (var i = 0; i < todos.length; i++) {
                console.log(todos[i]);
            };
            todos.forEach(function(todo) {
                $("#tasks").append("<p>" + todo.description + "<button id='remove'>Remove</button>" + " </p>");
                todo.categories.forEach(function(category) {
                   $("#tasks").append("<ul>" + "<li>" + category + " </li>");
                   createCategoryList(category);                   
                });       
            });
            //tests to make sure array is correct
            for (i = 0; i < categoryArray.length; i++) {
                        console.log(categoryArray[i]);
                    };
        });
        activeTab($(".tabs .tab"));//calls activeTab function
        buildCategoryTab();
        buildAddTab();
    };

    $(document).ready(main);
}());