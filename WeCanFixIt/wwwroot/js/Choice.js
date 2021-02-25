const endpoint = '/CarsBrand/GetChoosed'

$(function () {
    $.getJSON(endpoint, function (data) {

        $('#body').on('click', function () {
            $('#body-details').css("display", "flex");
            $('#suspension-details').css("display", "none");
            $('#chip-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#bodyId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}WymianaDrzwi'>Wymiana drzwi</option>
                         <option value='${data.data[0].modelName.trim()}WymianaLamp'>Wymiana lamp</option>
                         <option value='${data.data[0].modelName.trim()}WymianaLusterek'>Wymiana lusterek</option>
                         <option value='${data.data[0].modelName.trim()}WymianaSzyb'>Wymiana szyb</option>`;
            $('#bodyId').html(items);
        })

        $('#suspension').on('click', function () {
            $('#suspension-details').css("display", "flex");
            $('#body-details').css("display", "none");
            $('#chip-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#suspensionId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}WymianaKola'>Wymiana Kół</option>
                         <option value='${data.data[0].modelName.trim()}WymianaArmortyzatora'>Wymiana Armortyzatora</option>
                         <option value='${data.data[0].modelName.trim()}WymianaSprezyn'>Wymiana Sprezyn</option>
                         <option value='${data.data[0].modelName.trim()}WymianaHamulców'>Wymiana Hamulców</option>`;
            $('#suspensionId').html(items);
        })

        $('#chip').on('click', function () {
            $('#chip-details').css("display", "flex");
            $('#suspension-details').css("display", "none");
            $('#body-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#chipId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}WymianaEcu'>Wymiana ECU</option>
                         <option value='${data.data[0].modelName.trim()}KasowanieBledow'>Kasowanie błędów</option>
                         <option value='${data.data[0].modelName.trim()}WymianaCzujnikow'>Wymiana czujników</option>
                          <option value='${data.data[0].modelName.trim()}WymianaRadia'>Wymiana radia</option>`;
            $('#chipId').html(items);
        })

        $('#engine').on('click', function () {
            $('#engine-details').css("display", "flex");
            $('#chip-details').css("display", "none");
            $('#suspension-details').css("display", "none");
            $('#body-details').css("display", "none");
            $('#engineId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}WymianaRozrzadu'>Wymiana rozrządu</option>
                         <option value='${data.data[0].modelName.trim()}KasowanieFiltrow'>Wymiana filtrów</option>
                         <option value='${data.data[0].modelName.trim()}Wymianaoleju'>Wymiana oleju</option>
                         <option value='${data.data[0].modelName.trim()}Wymianasprzegla'>Wymiana sprzęgła</option>`;
            $('#engineId').html(items);
        })
    })
})


        
