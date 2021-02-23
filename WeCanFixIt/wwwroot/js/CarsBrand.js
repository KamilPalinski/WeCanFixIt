let choosedModel;
const endpoint = 'CarsBrand/GetCarsModel';
const btn = document.getElementById("Submit");
$(function () {
    $('#BrandId').change(function () {
        $('#ModelId').prop("disabled", false);
        const source = '#BrandId';
        $.getJSON(endpoint, { id: $(source).val() }, function (data) {
            let items = '';
            $('#ModelId').empty();
            $.each(data, function (i, product) {
                items += "<option value='" + product.value + "'>" + product.text + "</option>";
            });
            $('#ModelId').html(items);
        })
    })
});
$(function add(sel) {
    choosedModel = sel;
}
)

btn.addEventListener("click", function () {
    console.log(choosedModel)
});

