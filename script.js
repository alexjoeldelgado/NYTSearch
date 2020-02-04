$(document).ready(function(){
  $(".submitBtn").on("click", function(){
        var searchTerm = $("#searchTerm").val().trim();
        var numRecords = $("#inputNumber").val();
        var startYear = $("#searchStartYear").val().trim();
        var endYear = $("#searchEndYear").val().trim();
        $("#topArticles").empty();

        console.log(searchTerm);
        console.log(numRecords);
        console.log(startYear);
        console.log(endYear);

        var myUrl =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=8VvTbrl5xjrkq1VgI2S2sDMXTIRgz6YJ";   
    
    
    $.ajax({
            url: myUrl,
            method: "GET"
        }).then(function(response){
            for (i = 0; i < numRecords; i++){
            var articleDiv = $("<div>");
            var topArticles = $("#topArticles");
            var headline = $("<h3>").text(response.response.docs[i].headline.main);
            var summary = $("<p>").text(response.response.docs[i].abstract);
            
            articleDiv.append(headline,summary);
            topArticles.append(articleDiv);
            }
            
            console.log(response);
            
        });
  })
    

        //btn-search
        

        //btn-clear

    });