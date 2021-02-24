document.addEventListener("DOMContentLoaded", function () {
    const endpoint = '/CarsBrand/GetChoosed'
    $(function () {
        $.getJSON(endpoint, function (data) {
            let choosedElement = data.data[0].modelName;
       






        })
       

    })
 

});