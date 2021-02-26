    var count = 0;
    var checked = 0;
    function countBoxes() {
        count = $("input[type='checkbox']").length;
    }

  countBoxes();
  $(":checkbox").click(countBoxes);

    function countChecked() {
        checked = $("input:checked").length;

        var percentage = parseInt(((checked / count) * 100), 10);
        if (percentage < 30) {
            $('.progressbar-bar').css("background-color", "red");
        }
        else if (percentage >= 30 && percentage < 50) {
            $('.progressbar-bar').css("background-color", "orange");
        }
        else if (percentage >= 50 && percentage < 70) {
            $('.progressbar-bar').css("background-color", "#FFC600");
        }
        else if (percentage >= 70 && percentage < 99) {
            $('.progressbar-bar').css("background-color", "blue");
        }
        else {
            $('.progressbar-bar').css("background-color", "green");
        }
            $(".progressbar-bar").val(percentage);
        $(".progressbar-label").text(percentage + "%");

        if (percentage===100) {
            $(".modal").css("display", "block");
        }
    }

 countChecked();
$(":checkbox").click(countChecked);




