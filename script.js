$(document).ready(function(){
  
    var searchTerm = "hurricanes";
    var myUrl =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=8VvTbrl5xjrkq1VgI2S2sDMXTIRgz6YJ";   
    
    
    $.ajax({
            url: myUrl,
            method: "GET"
        }).then(function(response){
            console.log(response.response.docs[0].headline.main);
            console.log(response.response.docs[0].abstract);
            
            console.log(response);
        });

        //btn-search
        

        //btn-clear

    });