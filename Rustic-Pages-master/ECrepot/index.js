var TmpVal = {
  bookStock: [
        { Rkey: 1, Title: "Chase The Sun", Author: "Martin", ISBN: "", Year: "2008" },
        { Rkey: 2, Title: "Chase The Sun", Author: "Alan", ISBN: "", Year: "2020" },
        { Rkey: 3, Title: "Chase The Sun", Author: "Judith", ISBN: "", Year: "2010" },
  ],
  Users: [
    { UserName: "Martin", PassWord: "Abc123", Rkey: 1 },
    { UserName: "Alan", PassWord: "HandsomeBoy", Rkey: 2 },
    { UserName: "Judith", PassWord: "IamSoGood", Rkey: 3 },
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
        if (element.UserName == Account) {
          if (element.PassWord == PWD) {
            Valid = true;
            $("#hf_Rkey").val(element.Rkey);
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
        $('#div_Notice').hide();
        //把結果打開
        $('#div_result').show();
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