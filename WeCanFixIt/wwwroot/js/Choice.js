
const endpoint = '/CarsBrand/GetChoosed'
let clicked = false;
    $(function(){
      $.getJSON(endpoint, function (data) {

        $('#body').on('click', function () {
            clicked = true;
            $('#error-categories').css("display", "none");
            $('#body-details').css("display", "flex");
            $('#suspension-details').css("display", "none");
            $('#chip-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#bodyId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}Drzwi'>Wymiana drzwi</option>
                         <option value='${data.data[0].modelName.trim()}Lampy'>Wymiana lamp</option>
                         <option value='${data.data[0].modelName.trim()}Lusterka'>Wymiana lusterek</option>
                         <option value='${data.data[0].modelName.trim()}Szyby'>Wymiana szyb</option>`;
            $('#bodyId').html(items);
        })

        $('#suspension').on('click', function () {
            clicked = true;
            $('#error-categories').css("display", "none");
            $('#submit').css("display", "flex");
            $('#suspension-details').css("display", "flex");
            $('#body-details').css("display", "none");
            $('#chip-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#suspensionId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}Kola'>Wymiana Kół</option>
                         <option value='${data.data[0].modelName.trim()}Armortyzatory'>Wymiana Armortyzatora</option>
                         <option value='${data.data[0].modelName.trim()}Sprezyny'>Wymiana Sprezyn</option>
                         <option value='${data.data[0].modelName.trim()}Hamulce'>Wymiana Hamulców</option>`;
            $('#suspensionId').html(items);
        })

        $('#chip').on('click', function () {
            clicked = true;
            $('#error-categories').css("display", "none");
            $('#submit').css("display", "flex");
            $('#chip-details').css("display", "flex");
            $('#suspension-details').css("display", "none");
            $('#body-details').css("display", "none");
            $('#engine-details').css("display", "none");
            $('#chipId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}Ecu'>Wymiana ECU</option>
                         <option value='${data.data[0].modelName.trim()}Bledy'>Kasowanie błędów</option>
                         <option value='${data.data[0].modelName.trim()}Czujniki'>Wymiana czujników</option>
                          <option value='${data.data[0].modelName.trim()}Radio'>Wymiana radia</option>`;
            $('#chipId').html(items);
        })

        $('#engine').on('click', function () {
            clicked = true;
            $('#error-categories').css("display", "none");
            $('#submit').css("display", "flex");
            $('#engine-details').css("display", "flex");
            $('#chip-details').css("display", "none");
            $('#suspension-details').css("display", "none");
            $('#body-details').css("display", "none");
            $('#engineId').empty();
            let items = `<option value='${data.data[0].modelName.trim()}Rozrzad'>Wymiana rozrządu</option>
                         <option value='${data.data[0].modelName.trim()}Filtry'>Wymiana filtrów</option>
                         <option value='${data.data[0].modelName.trim()}Olej'>Wymiana oleju</option>
                         <option value='${data.data[0].modelName.trim()}Sprzeglo'>Wymiana sprzęgła</option>`;
            $('#engineId').html(items);
    
        })

      })
        console.log(clicked);
        $('#submit1').on("click", function () {
            if (clicked === false) {
                $('#error-categories').css("display", "flex");
            }
            else{
                $('#submit1').prop("type", "submit");
            }
        })
    })



        
