var TmpVal = {
  bookStock: [
    {
      Rkey: 1,
      Title: "Chase The Sun",
      Author: "Martin",
      ISBN: "978-957-511-785-6",
      Year: "2008",
    },
    {
      Rkey: 2,
      Title: "Fight with The Sun",
      Author: "Alan",
      ISBN: "978-957-511-785-7",
      Year: "2020",
    },
    {
      Rkey: 3,
      Title: "Play with The Sun",
      Author: "Judith",
      ISBN: "978-957-511-785-8",
      Year: "2010",
    },
  ],
  Users: [
    {
      UserName: "Martin",
      PassWord: "0",
      Rkey: 1,
      FirstName: "品堯",
      LastName: "黃",
    },
    {
      UserName: "Alan",
      PassWord: "HandsomeBoy",
      Rkey: 2,
      FirstName: "弘騰",
      LastName: "沈",
    },
    {
      UserName: "Judith",
      PassWord: "IamSoGood",
      Rkey: 3,
      FirstName: "文宸",
      LastName: "李",
    },
  ],
};

$(function () {
    // prog_ID = "GES0051";
    // if (url.indexOf("csmc.com.tw") > 0) {
    //     apiUrl = "/GES" + "/api/GESView/" + prog_ID + "/";
    //     apiGES0051Url = "/GES" + "/api/GESView/GES0051/";
    //     wcfUrl = "/GES/";
    // }
    // else {
    //     apiUrl = "/api/GESView/" + prog_ID + "/";
    //     apiGES0051Url = "/api/GESView/GES0051/";
    //     wcfUrl = "/";
    // }
    // GetSelect2Base();
    regist_onclick();
    // regist_Select2();
})

function regist_onclick() {
    // 登入按鈕
    $('#btn_Login').on('click',function () {
      //比對是否正確
      let Account = $("#txt_LogAccount").val();
      let PWD = $("#txt_LogPWD").val();
      let Valid = false;

      TmpVal.Users.forEach(function (element) {
        if (element.UserName.toUpperCase() == Account.toUpperCase()) {
          if (element.PassWord == PWD) {
            Valid = true;
            $("#hf_Rkey").val(element.Rkey);
            setUser(element.Rkey);
          }
        }
      });

      if (Valid) {
        //畫面切換
        $("#div_Login").hide();
        $("#div_regist").hide();
        $("#div_AfterLogin").show();
        $("#div_search").show();
        Default();
      }
      else {
        alert("You have either wrong Account or Password, Please check again.");
        }
    });
    //登出按鈕
    $('#btn_LogOut').on('click',function () {
        //畫面切換
        $('#div_AfterLogin').hide();
        $('#div_search').hide();
        $('#div_main').hide();
        $('#div_Login').show();
        $('#div_regist').show();
    });
    //搜尋按鈕
    $('#btn_Search').on('click', function () {
        let Type = $('#sl2_type').val();
        let Param = $('#txt_search').val();
        //如果搜尋有結果就把notice隱藏起來
        let fulfill = [];
        switch (Type) {
          case "Title":
            TmpVal.bookStock.forEach(function (element) {
              if (element.Title.toUpperCase().includes(Param.toUpperCase())) {
                fulfill.push(element.Rkey);
              }
            });
            break;
          case "Author":
            TmpVal.bookStock.forEach(function (element) {
              if (element.Author.toUpperCase().includes(Param.toUpperCase())) {
                fulfill.push(element.Rkey);
              }
            });
            break;
          case "ISBN":
            TmpVal.bookStock.forEach(function (element) {
              if (element.ISBN.toUpperCase().includes(Param.toUpperCase())) {
                fulfill.push(element.Rkey);
              }
            });
            break;
        }
        //表示有找到東西
        if (fulfill.length > 0) {
          //關閉提示訊息
          $("#div_Notice").hide();
          //把結果打開
          $("#div_result").show();
          let innerHTML = '';
          fulfill.forEach(function (pickedKey) {
            TmpVal.bookStock.forEach(function (books) {
              if (books.Rkey == pickedKey) {
                innerHTML += '<div class="card"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><h2><a href="#" onclick="">'+books.Title+'</a></h2></div><div class="row">by&ensp;<a href="#">'+books.Author+'</a></div><div class="row">published '+books.Year+'</div></div></div></div></div>';
              }
            })
          });
          $('#div_result').html(innerHTML);
        }
        else{
          $("#div_Notice").html('<h2 style="margin-top: 100px;">搜尋不到您要的書，請重新搜尋。</h2>');
        }

        
    });
}

function regist_Select2() {
    
}

function Default() {
    //設定預設值
    $('#div_main').show();
    $('#div_Notice').show();
    $('#div_result').hide();
}

//設定使用者名稱到相對應的欄位
function setUser(Rkey) {
  TmpVal.Users.forEach(function (element) {
    if (element.Rkey == Rkey) {
      $("#lb_showName").text("Hi," + element.FirstName);
      let content = '<h2 style="margin-top: 100px;"> 歡迎 <label style="font-weight: bold;">'+element.FirstName+'</label> 讀者，請使用搜尋列尋找你要的書!</h2> ';
      $("#div_Notice").html(content);
    }
  });
}

function bookShow(bookRkey) {
    //先判斷是否有這本書
    let haveBook = false;
    TmpVal.bookStock.forEach(function (book) {
        if (book.Rkey == bookRkey) {
            haveBook = true;
        }
    })
    if (haveBook) {
        
    }
    switch (bookRkey) {
        case 1:
            
            break;
    
        default:
            break;
    }
}