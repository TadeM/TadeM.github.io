$(document).ready(function () {
    // console.log('document ready');
    $("#loader").hide();
    $(document).ajaxStart(function() { $("#loader").show(); })
    .ajaxStop(function() { $("#loader").hide(); });
    $('#btnsearch').on('click', search);
    // $('#keyword').on('input', search);

    function search() {
        //console.log($('#keyword').val());
        let searchKeyword = $('#keyword').val().trim();

        $.ajax({
            "url": `http://localhost:3000/?keyword=${searchKeyword}`, "type": "GET",
            "success": myAjaxSuccessFunction, "error": ajaxFailure
        }).always(function() {
            $("#loader").hide();
         });

        function myAjaxSuccessFunction(data) {
           let searchResult = data;
            $('.search-result').empty();
            let wordtype='';
            for (let i = 0; i < searchResult.length; i++) {
                wordtype=searchResult[i].wordtype;
                if(wordtype.trim()!==''){
                    wordtype="("+wordtype+")";
                }
                $('.search-result').append(`<p>
                <span class="number">${i + 1}</span>
                <span class="wordtype">${wordtype}</span>
                    ${searchResult[i].definition}
                </p>
                `)

            }
            // console.log(data);
            // do something with the data
        }
        function ajaxFailure(xhr, status, exception) {
            $('.search-result').html('<strong>Result not found</strong>');
        }
    }

});
