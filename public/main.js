"use strict";

// 데이터 상태 변수
var state = {
  html: '',
  isData: false,
  data: []
};
$("#s").on("submit", function (e) {
  e.preventDefault();
  console.log($("#addr").val());
  var search_name = $("#addr").val(); // 자료 검색

  $.getJSON('./src/data.json', function (data) {
    state.data = []; // 기존 상태 버퍼 삭제

    if (!state.data) state.isData = false; // 없음으로 초기화

    state.html = "";
    state.isData = false; // 데이터 유무 플래그

    if (search_name !== "") {
      for (var i = 0; i < data.length; i++) {
        if (data[i].address.indexOf(search_name) !== -1) {
          state.data.push(data[i]);
          console.log(state.data);
          state.isData = true; // 데이터가 유무 확인

          state.html += "\n          <tr>\n            <th>".concat(data[i].name, "</th>\n            <td>").concat(data[i].address, "</td>\n            <td>").concat(data[i].tel, "</td>\n          </tr>\n        ");
        }
      } // 검색 데이터 테이블로 출력


      $("#result div").empty().append("<table class='table table-striped'>" + state.html + "</table>"); // 검색 데이터가 없음

      if (!state.isData) {
        $("#result div").empty().append("<p>해당 자료가 존재하지 않습니다.</p>");
      }
    } else {
      alert("값을 입력해 주세요!");
    }
  });
}); // end submit