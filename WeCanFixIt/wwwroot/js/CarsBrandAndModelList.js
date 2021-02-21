$(function () {
    $('#BrandId').change(function () {
        var url = 'CarsBrand/GetCarsModel';
        var dllsource = '#BrandId';
        $.getJSON(url, { id: $(dllsource).val() }, function (data) {
            var items = '';
            $('#ModelId').empty();
            $.each(data, function (i, product) {
                items += "<option value='" + product.value + "'>" + product.text + "</option>";
            });
            $('#ModelId').html(items);

        })


       

    })
});