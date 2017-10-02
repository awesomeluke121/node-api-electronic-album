$(function() {
    $.getJSON("photos.json", function(data) {
        var i = 0;
        function run() {
            if (i >= data.length) {
                i = 0;
            }//重新換頁跳回第一張圖
            $("#image").fadeOut(function() {
                $(this).attr("src", data[i][0]).fadeIn();
                $("#text").text(data[i][1]);
                i++;
            });
        }
        setInterval(run, 3000);
        run();
    });
});