// 준비 이벤트
// html 코드를 다 읽고 나서 실행
// $(document).ready(function () {});

/* 축약 Ver. */
$(function () {
  // modal
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").click(function (event) {
    // a 태그의 링크 값 없애기
    event.preventDefault();

    // #modal 을 찾아서 display: flex 변경
    $("#modal").css("display", "flex");
    // $("#modal").show();
  });

  //.modal-box .btn-close 을 클릭했을 때
  $(".modal-box .btn-close").on("click focus", function () {
    // #modal 안보이게
    $("#modal").hide();
  });
});
