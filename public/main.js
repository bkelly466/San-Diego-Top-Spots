$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function(data){
        $.each(data, function(index, value) {
            let spots = $("#spots");
            let mapUrl = "https://www.google.com/maps?q=" + value.location;
            let row = "<tr>" +
                "<td>" + value.name + "</td>" +
                "<td>" + value.description + "</td>" +
                "<td>" + 
                    "<a href='" + mapUrl + "' target='_blank' rel='noopener noreferrer'>" + 
                        "Map" +
                    "</a>" + 
                "</td>" +
                "</tr>";
                
            spots.append(row);
        });
    });
});