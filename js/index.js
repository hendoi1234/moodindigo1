$(document).ready(function () {
    $(document).mousemove(function (e) {
        //마우스커서 위치를 담을 변수
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        //이미지 움직이기
        $(".cursor").css({
            left: mouseX + "px",
            top: mouseY + "px"

        });
    });
    $(".circle").on("mouseover", function () {
        $(".black").addClass("active")
        $(".cursor").addClass("cursor-big")

    })
    $(".circle").on("mouseover", function () {
        $(".cursor").addClass("cursor-big")

    })



})

