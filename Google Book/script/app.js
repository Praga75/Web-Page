$(document).ready(function() {
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeHldr = 'https://via.placeholder.com/150'
    var searchData;

    $("#search").click(function() {
        outputList.innerHTML = ""
        searchData = $("#search-box").val();

        if(searchData === "" || searchData === null) {
            displayError();
        }
        else {
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(res) {
                    console.log(res) 
                        if(res.totalItems === 0) {
                            alert("no results!... Try again");
                        }
                        else {
                            displayContent();
                            displayResults(res);
                        }
                    },
                error: function () {
                    alert("Something went wrong!.....");
                },
                  
            })
        }
$("#search-box").val("");

    });
	function displayContent() {
	var x = document.getElementById("books");
	if (x.style.display === "none") {
        x.style.display = "block";
		
    }else {
        x.style.display = "none";
    }
	}


    function displayResults(res) {
        for(var i =0;i < res.items.length; i=i+2) {
            item = res.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.authors;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier;
            bookImg1 =  (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail :placeHldr;

            item2 = res.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier;			
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr;
             
            outputList.innerHTML += '<div class="row mt-4">' + 
                                    formatOutput(bookImg1,title1,author1,publisher1,bookLink1,bookIsbn)+
                                    formatOutput(bookImg2,title2,author2,publisher2,bookLink2,bookIsbn2) +
                                    '</div>';

            
            console.log(bookIsbn2);
        }

    }

    function formatOutput(bookImg,title,author,publisher,bookLink,bookIsbn){
        var viewerUrl = 'book.html?isbn=' + bookIsbn;
		
        var htmlCard = '<div class="col-sm-6 bg">'+ 
                            '<div class="row no-gutters">'+ 
                                '<div class="col-md-4">'+ 
                                    '<img src="'+bookImg+'" class="card-img" alt="..."/>'+ 
                                '</div>'+ 
                                '<div class="col-md-8"> '+ 
                                    '<div class="card-body">'+ 
                                        '<h5 class="card-title">' + title+ '</h5>'+ 
                                        '<p class="card=text">Author: '+author+'</p>'+ 
                                        '<p class="card=text">Publisher: '+publisher+'</p>'+ 
                                        '<a target="_blank" href="'+viewerUrl+'" class="btn btn-secondary">ReadBook</a>'+ 
                                    '</div>'+ 
                                '</div>'+ 
                            '</div>'+ 
                        '</div>';
        
    
return htmlCard;
    }
function displayError() {
    alert("search item can not be empty");
}
})