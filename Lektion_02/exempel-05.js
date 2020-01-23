$(document).ready(function(){

    $("#myInput").on("keyup", function() {

        let $value = $(this).val().toLowerCase();
        console.log($value);
        
        $("#myTable tr").filter(function() {
    
            // console.log($(this).text().toLowerCase().indexOf($value) > -1);

            $(this).toggle(
                $(this).text().toLowerCase().indexOf($value) > -1
                )
            });
    });

});