var data = [
  {
    name: "2호광장점",
    address: "전라남도 목포시 영산로 253, (용당동)",
    tel: "02-123-1111"
  },
  {
    name: "VIC마켓금천점",
    address: "서울특별시 금천구 두산로 71, (독산동,롯데마트금천점)",
    tel: "02-123-1111"
  },
  {
    name: "VIC마켓도봉점",
    address: "서울특별시 도봉구 마들로 645, (방학동,빅마켓도봉점)",
    tel: "02-956-3600"
  },
  {
    name: "VIC마켓신영통점",
    address: "경기도 화성시 삼성1로 333, (반월동,롯데마트)",
    tel: "031-205-7575"
  },
  {
    name: "가락점",
    address: "서울특별시 송파구 중대로 222, (가락동)",
    tel: "02-409-6036"
  }
];

$("#s").on("submit", function(e) {
  e.preventDefault();
  console.log($("#addr").val());
  var search_name = $("#addr").val();

  // 자료 검색
  var html = "";
  var isData = false; // 데이터 유무 플래그
  if (search_name !== "") {
    for (var i = 0; i < data.length; i++) {
      if (data[i].address.indexOf(search_name) !== -1) {
        // show_data(i);
        isData = true;
        console.log(data[i].name.indexOf(search_name));
        console.log(data[i].address);
        html += `
          <tr>
            <th>${data[i].name}</th>
            <td>${data[i].address}</td>
            <td>${data[i].tel}</td>
          </tr>
        `;
      } else {
        isData = false;
      }
    }

    // 검색 데이터 출력
    $("#result div")
      .empty()
      .append("<table border=1>" + html + "</table>");
    if (isData == false) {
      $("#result div")
        .empty()
        .append("<p>해당 자료가 존재하지 않습니다.</p>");
    }
  } else {
    alert("값을 입력해 주세요!");
  }
});


var test_func = () => 'ES6'
console.log(test_func())