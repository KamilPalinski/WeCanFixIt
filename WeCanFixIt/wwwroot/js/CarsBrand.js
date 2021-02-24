const endpoint = 'CarsBrand/GetCarsModel';
$(function () {
    $('#Submit').click(function () {
        if (document.getElementById("BrandId").value === "0") {
            $('#error-brand-and-model').css("display", "flex");
        }
        else {
            $('#Submit').prop("type", "submit");
        }
    })

    $('#BrandId').change(function () {
        $('#ModelId').prop("disabled", false);
        $('#Submit').prop("disabled", false);
        $('#error-brand-and-model').css("display", "none");
        const source = '#BrandId';
        $.getJSON(endpoint, { id: $(source).val() }, function (data) {
            let items = '';
            $('#ModelId').empty();
            $.each(data, function (i, model) {
                items += "<option value='" + model.text + "'>" + model.text + "</option>";
            });
            $('#ModelId').html(items);
        })
    })
});

console.log(document.getElementById("BrandId").value);



