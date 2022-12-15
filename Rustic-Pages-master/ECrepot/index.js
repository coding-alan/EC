var TmpVal = {
  bookStock: [
    {
      Rkey: 1,
      Title: "資訊管理",
      Author: "林東清",
      ISBN: "978-957-511-785-6",
      Year: "2022",
      Cover: "BookCover/52WIT00108.png",
      Price: 800,
    },
    {
      Rkey: 2,
      Title: "人工智慧：概念應用與管理",
      Author: "林東清",
      ISBN: "978-957-511-841-9",
      Year: "2022",
      Cover: "BookCover/52WIT01501.png",
      Price: 750,
    },
    {
      Rkey: 3,
      Title: "不動產經濟學",
      Author: "李春長",
      ISBN: "978-957-729-868-3",
      Year: "2012",
      Cover: "BookCover/52MFF02401.gif",
      Price: 600,
    },
    {
      Rkey: 4,
      Title: "物件導向系統分析與設計：結合MDA與UML",
      Author: "吳仁和",
      ISBN: "978-957-511-649-1",
      Year: "2022",
      Cover: "BookCover/52WIT00707.png",
      Price: 700,
    },
    {
      Rkey: 5,
      Title: "系統分析與設計：理論與實務應用",
      Author: "吳仁和",
      ISBN: "978-957-511-644-6",
      Year: "2022",
      Cover: "BookCover/52WIT00608.png",
      Price: 680,
    },
  ],
  Users: [
    {
      UserName: "Martin",
      PassWord: "Abc123",
      Rkey: 1,
      FirstName: "品堯",
      LastName: "黃",
      wallet: 2000,
    },
    {
      UserName: "Alan",
      PassWord: "HandsomeBoy",
      Rkey: 2,
      FirstName: "弘騰",
      LastName: "沈",
      wallet: 2000,
    },
    {
      UserName: "Judith",
      PassWord: "IamSoGood",
      Rkey: 3,
      FirstName: "文宸",
      LastName: "李",
      wallet: 2000,
    },
    {
      UserName: "M",
      PassWord: "0",
      Rkey: 4,
      FirstName: "測試",
      LastName: "測試",
      wallet: 999999,
    },
  ],
  review: [
    {
      book_Rkey: 1,
      reviewer_Rkey: 2,
      Rkey: 1,
      scrore: 5,
      Title: "資訊管理的聖經",
      content:
        "如果說你沒有學過資訊管理，那你一定要買這本，如果你有學過資訊管理，那你更要買這本，他會告訴你什麼是資訊管理。",
    },
    {
      book_Rkey: 1,
      reviewer_Rkey: 3,
      Rkey: 2,
      scrore: 5,
      Title: "非常推薦",
      content:
        "言簡意賅的統整，精準到位的圖表，再艱深的知識都能輕鬆的理解，總之，非常推薦!!",
    },
    {
      book_Rkey: 1,
      reviewer_Rkey: 1,
      Rkey: 3,
      scrore: 5,
      Title: "必買，我買了兩本",
      content:
        "林東清老師在字裡行間，引用了大量的範例，以及大家生活中常接觸到的事物，不像很多書籍只有艱深的知識，卻讓人沒有實體感，這才是我再找的資訊管理。",
    },
    {
      book_Rkey: 2,
      reviewer_Rkey: 2,
      Rkey: 1,
      scrore: 5,
      Title: "簡單卻不簡單",
      content:
        "比起坊間技術導向的專業書來說，要把AI講解給我們沒有學過的人還要聽得懂，難度非常的高，但是作者卻做到了!!",
    },
    {
      book_Rkey: 2,
      reviewer_Rkey: 3,
      Rkey: 2,
      scrore: 5,
      Title: "謝謝林東清老師",
      content:
        "看了這本書以後，決定未來要往AI的工作發展，希望有一天能造福人類。",
    },
    {
      book_Rkey: 2,
      reviewer_Rkey: 1,
      Rkey: 3,
      scrore: 5,
      Title: "好書，推薦大家購買收藏",
      content:
        "從小看了很多科幻的電影，有時候會擔心機器人會取代人類，但是這種擔心就是未知的恐懼，看了這本書以後對AI有更深的認識，了解我們要活用AI而不是排斥AI。",
    },
    {
      book_Rkey: 3,
      reviewer_Rkey: 2,
      Rkey: 1,
      scrore: 3,
      Title: "有趣的論點",
      content:
        "不動產經濟學有很多派說法，這本書綜合了國內外的相關內容，但是又有點不符合現在的現況。",
    },
    {
      book_Rkey: 3,
      reviewer_Rkey: 3,
      Rkey: 2,
      scrore: 3,
      Title: "還行吧",
      content: "作者講述了很多的例子，可以買來看看。",
    },
  ],
  cart: [
    {
      Rkey: 1,
      buyer_Rkey: 1,
      book_Rkey: 1,
      count: 2,
    },
  ],
  order: [],
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
  regist_onchange();
  // regist_Select2();
  $("#txt_LogAccount").val("m");
  $("#txt_LogPWD").val("0");
  Login();
});

function regist_onclick() {
  // 登入按鈕
  $("#btn_Login").on("click", function () {
    Login();
  });
  //按enter登入
  $("#txt_LogPWD,#txt_LogAccount").keyup(function (e) {
    if (e.keyCode == 108 || e.keyCode == 13) {
      Login();
    }
  });

  //登出按鈕
  $("#btn_LogOut").on("click", function () {
    //畫面切換
    $("#div_AfterLogin").hide();
    $("#div_search").hide();
    $("#div_main").hide();
    $("#div_Login").show();
    $("#div_regist").show();
    clrDefault();
  });

  //搜尋按鈕
  $("#btn_Search").on("click", function () {
    search();
    //test();
  });
  //按enter搜尋
  $("#txt_search").keyup(function (e) {
    if (e.keyCode == 108 || e.keyCode == 13) {
      search();
    }
  });

  //書本細項上一頁
  $("#btn_prePage").on("click", function () {
    //詳細資料關起來
    $("#div_Detail").hide();
    //搜尋頁面打開
    $("#div_result").show();
  });

  //送出評論
  $("#btn_AddReview").on("click", function () {
    //確認該填地都有填寫
    let Title = $("#txt_title").val();
    let Review = $("#txt_review").val();
    let bookRkey = $("#hf_bookRkey").val();
    let UserRkey = $("#hf_UserRkey").val();
    let score = $("input[name=score]:checked", "#div_radio").val();
    if (Title.length == 0) {
      //提醒標題要填寫
      MSG_Error("請記得要填寫標題!");
      return;
    }
    if (Review.length == 0) {
      //提醒評論要寫
      MSG_Error("請留下您寶貴的評論!");
      return;
    }

    let nowReview_Rkey = 0;
    TmpVal.review.forEach(function (params) {
      if (params.Rkey > nowReview_Rkey) {
        nowReview_Rkey = params.Rkey;
      }
    });

    nowReview_Rkey++;

    TmpVal.review.push({
      book_Rkey: parseInt(bookRkey, 10),
      reviewer_Rkey: parseInt(UserRkey, 10),
      Rkey: nowReview_Rkey,
      scrore: parseInt(score, 10),
      Title: Title,
      content: Review,
    });

    bookShow(bookRkey);
  });

  //刪除評論
  $("#btn_DeleteReview").on("click", function () {
    let Rkey = $("#hf_reviewRkey").val();
    let bookRkey = $("#hf_bookRkey").val();
    let indexOfObject = TmpVal.review.findIndex((Object) => {
      return Object.Rkey == Rkey;
    });

    TmpVal.review.splice(indexOfObject, 1);
    bookShow(bookRkey);
  });

  //購物車
  $("#btn_shoppingCart").on("click", function () {
    $("#modal_ShoppingCart").modal("show");
    let User_Rkey = $("#hf_UserRkey").val();
    $("#div_cart").html("");
    GainCartBook(User_Rkey);
  });

  //加到購物車
  $("#btn_Add2Cart").on("click", function () {
    //先確認是否有重複的書，如果有的話數量+1
    let haveInCart = false;
    let WantBook_Rkey = $("#hf_bookRkey").val();
    let User_Rkey = $("#hf_UserRkey").val();
    let latest_Rkey = 0;
    TmpVal.cart.forEach(function (params) {
      if (params.book_Rkey == WantBook_Rkey && params.buyer_Rkey == User_Rkey) {
        params.count += 1;
        haveInCart = true;
      }

      if (params.Rkey > latest_Rkey) {
        latest_Rkey = params.Rkey;
      }
    });
    latest_Rkey++;
    if (!haveInCart) {
      TmpVal.cart.push({
        Rkey: latest_Rkey,
        buyer_Rkey: parseInt(User_Rkey, 10),
        book_Rkey: parseInt(WantBook_Rkey, 10),
        count: 1,
      });
    }
    Refresh_CartCount();
  });

  //結帳
  $("#btn_checkOut").on("click", function () {
    let user_Rkey = $("#hf_UserRkey").val();
    //先確認是否夠代幣
    let total_count = 0;
    let wallet = 0;
    TmpVal.Users.forEach(function (params) {
      if (params.Rkey == user_Rkey) {
        wallet += params.wallet;
      }
    });
    TmpVal.cart.forEach(function (cart) {
      if (cart.buyer_Rkey == user_Rkey) {
        TmpVal.bookStock.forEach(function (book) {
          if (cart.book_Rkey == book.Rkey) {
            total_count += parseInt(cart.count, 10) * parseInt(book.Price, 10);
          }
        });
      }
    });

    if (total_count > wallet) {
      MSG_Error("您的代幣不足，請先購買代幣。");
      return;
    }

    let Rkey_Need2Delete = [];
    TmpVal.cart.forEach(function (cart) {
      if (cart.buyer_Rkey == user_Rkey) {
        //添加到Order裏面
        TmpVal.order.push(cart);
        Rkey_Need2Delete.push(cart.Rkey);
      }
    });

    //刪除購物車的資料
    Rkey_Need2Delete.forEach(function (N2D) {
      TmpVal.cart = TmpVal.cart.filter(function (params) {
        return params.Rkey != N2D;
      });
    });

    //  let indexOfObject = TmpVal.cart.findIndex((Object) => {
    //   return Object.Rkey == cart.Rkey;
    // });
    // TmpVal.cart.splice(indexOfObject, 1);

    $("#modal_ShoppingCart").modal("hide");
    Refresh_CartCount();

    MSG_Correct("結帳成功，感謝您的惠顧。");
  });

  //註冊
  $('#btn_SingUp').on('click',function () {
    let LastName = $('#txt_NewLastName').val();
    let FirstName = $('#txt_NewFirstName').val();
    let Acoount = $('#txt_NewAcoount').val();
    let Password = $('#txt_NewPassword').val();
    let nowRkey = 0;
    TmpVal.Users.forEach(function (params) {
      if (params.Rkey > nowRkey) {
        nowRkey = params.Rkey;
      }
    });

    nowRkey++;
    TmpVal.Users.push({
      UserName: Acoount,
      PassWord: Password,
      Rkey: nowRkey,
      FirstName: FirstName,
      LastName: LastName,
      wallet: 2000,
    });

    $("#txt_LogAccount").val(Acoount);
    $("#txt_LogPWD").val(Password);
    Login();
  });
}

function regist_onchange() {}

function regist_Select2() {}

//登入用function
function Login() {
  //比對是否正確
  let Account = $("#txt_LogAccount").val();
  let PWD = $("#txt_LogPWD").val();
  let Valid = false;

  TmpVal.Users.forEach(function (element) {
    if (element.UserName.toUpperCase() == Account.toUpperCase()) {
      if (element.PassWord == PWD) {
        Valid = true;
        $("#hf_UserRkey").val(element.Rkey);
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
    Refresh_CartCount();
  } else {
    alert("請確認帳號及密碼是否均正確。");
  }
}

//預設設定欄位
function Default() {
  $("#div_main").show();
  $("#div_Notice").show();
  $("#div_result").hide();
}

//設定使用者名稱到相對應的欄位
function setUser(Rkey) {
  TmpVal.Users.forEach(function (element) {
    if (element.Rkey == Rkey) {
      $("#lb_showName").text("Hi," + element.FirstName);
      let content =
        '<h2 style="margin-top: 100px;"> 歡迎 <label style="font-weight: bold;">' +
        element.FirstName +
        "</label> 讀者，請使用搜尋列尋找你要的書!</h2> ";
      $("#div_Notice").html(content);
      //塞Rkey到hf中
      $("#hf_UserRkey").val(Rkey);
    }
  });
}

//搜尋用funcrion
function search() {
  //詳細資料關起來
  $("#div_Detail").hide();
  //搜尋頁面打開
  $("#div_result").show();

  let Type = $("#sl2_type").val();
  let Param = $("#txt_search").val();
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
    let innerHTML = "";
    fulfill.forEach(function (pickedKey) {
      TmpVal.bookStock.forEach(function (books) {
        if (books.Rkey == pickedKey) {
          innerHTML +=
            '<div class="card"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><h2><a href="#" onclick="bookShow(' +
            books.Rkey +
            ')">' +
            books.Title +
            '</a></h2></div><div class="row">by&ensp;<a href="#" onclick="searchByAuthor(\'' +
            books.Author +
            "')\">" +
            books.Author +
            '</a></div><div class="row">published ' +
            books.Year +
            "</div></div></div></div></div>";
        }
      });
    });
    $("#div_result").html(innerHTML);
  } else {
    $("#div_Notice").html(
      '<h2 style="margin-top: 100px;">搜尋不到您要的書，請重新搜尋。</h2>'
    );
  }
}

//檢視書本詳細資料
function bookShow(bookRkey) {
  //詳細資料打開
  $("#div_Detail").show();
  //搜尋頁面關起來
  $("#div_result").hide();
  let haveBook = false;
  let review_count = 0;
  let review_sum = 0;
  let html_review = "";
  //先抓是誰
  let NowUser_Rkey = $("#hf_UserRkey").val();

  //先把預設打開
  $("#div_writeReview").show();
  $("#div_MyReview").hide();
  //還原預設值
  $(".CL_score").prop("checked", false);

  $("#rad_score1").prop("checked", true);
  $("#txt_title").val("");
  $("#txt_review").val("");

  TmpVal.review.forEach(function (review) {
    if (review.book_Rkey == bookRkey) {
      review_count++;
      review_sum += review.scrore;
      let userName = "";
      TmpVal.Users.forEach(function (user) {
        if (user.Rkey == review.reviewer_Rkey) {
          userName = user.UserName;
        }
      });
      if (review_count == 1 && review.reviewer_Rkey != NowUser_Rkey) {
        html_review +=
          '<div class="card" style="width:100%;"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><label>' +
          userName +
          '&ensp;</label>&ensp;評分:&ensp;<label style="font-weight:bold;">' +
          review.scrore +
          '</label></div><div class="row"><label style="font-size:larger">' +
          review.Title +
          '</label></div><div class="row"><label>' +
          review.content +
          "</label></div></div></div></div></div>";
      } else if (review.reviewer_Rkey != NowUser_Rkey) {
        html_review +=
          '<div class="card" style="width:100%;margin-top: 10px;"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><label>' +
          userName +
          '&ensp;</label>&ensp;評分:&ensp;<label style="font-weight:bold;">' +
          review.scrore +
          '</label></div><div class="row"><label style="font-size:larger">' +
          review.Title +
          '</label></div><div class="row"><label>' +
          review.content +
          "</label></div></div></div></div></div>";
      } else {
        //塞bookRkey
        $("#hf_reviewRkey").val(review.Rkey);
        $("#lb_MyReview_Account").text("您的");
        $("#lb_MyReview_Score").text(review.scrore);
        $("#lb_MyReview_Title").text(review.Title);
        $("#lb_MyReview_Content").text(review.content);
        //切換div
        $("#div_writeReview").hide();
        $("#div_MyReview").show();
      }
    }
  });
  $("#div_reviewCard").html(html_review);

  let AvgScore = 0;
  if (review_count > 0) {
    //四捨五入到小數點第二位
    AvgScore = Math.round((review_sum / review_count) * 100) / 100;
  }
  TmpVal.bookStock.forEach(function (book) {
    if (book.Rkey == bookRkey) {
      haveBook = true;
      //書本Rkey=>塞到hf中
      $("#hf_bookRkey").val(bookRkey);
      //書本細項
      $("#lb_bookName").text(book.Title);
      $("#detail_ISBN").text(book.ISBN);
      $("#detail_Author").text(book.Author);
      $("#detail_Year").text(book.Year);
      $("#detail_AvScore").text(AvgScore);
      //書本封面
      $("#img_Cover").attr("src", book.Cover);
    }
  });
}

function test() {
  console.log("AA");
  $.ajax({
    type: "POST",
    url: "to_database.py/insert",
    data: JSON.stringify({
      table: "Book",
      Rkey: "test",
    }),
  }).done(function (o) {
    console.log(o);
  });
}

//錯誤訊息
function MSG_Error(params) {
  Swal.fire({
    title: "發生錯誤!",
    text: params,
    icon: "error",
    confirmButtonText: "OK",
  });
}
//正確訊息
function MSG_Correct(params) {
  Swal.fire({
    title: "執行成功!",
    text: params,
    icon: "success",
    confirmButtonText: "OK",
  });
}

//更新購物車數量 1
function Refresh_CartCount() {
  //先確認全部的數量
  let User = $("#hf_UserRkey").val();
  let total_count = 0;
  TmpVal.cart.forEach(function (params) {
    if (params.buyer_Rkey == User) {
      total_count += params.count;
    }
  });
  console.log(TmpVal.cart);
  $("#cart_count").text(total_count);
}

//產生購物車品項
function GainCartBook(params) {
  let innerHML = "";
  let total_count = 0;
  TmpVal.cart.forEach(function (cart) {
    if (cart.buyer_Rkey == params) {
      TmpVal.bookStock.forEach(function (book) {
        if (cart.book_Rkey == book.Rkey) {
          innerHML +=
            '<div class="card" style="width:100%;margin-top: 10px;" id="cart_' +
            cart.Rkey +
            '><div class="context"><div class="card-body"><div class="row"><div class="col-3 col-md" style="max-width: 33%;min-width: 33%; text-align: center;"><img src="' +
            book.Cover +
            '" style="max-height: 80px;"></div><div class="col-9 col-md" style="max-width: 67%;min-width: 67%;align-items: center;display: grid;"><div class="row"><div class="col-4 col-md"><h5><label id="lb_cartName_' +
            cart.Rkey +
            '">' +
            book.Title +
            '</label></h5></div><div class="col-2 col-md"><img src="dollarPS.png" style="width:15px;">&ensp;<label id="lb_cartCost_' +
            cart.Rkey +
            '">' +
            book.Price +
            '</label></div><div class="col-6 col-md" style="min-width: 40%;"><div class="input-group"><button type="button" class="btn btn-success" id="btn_cartM_' +
            cart.Rkey +
            '" onclick="AdjustCount(\'-\',\'' + cart.Rkey + '\')">-</button>&ensp;<input type="text" class="form-control" style="text-align: center; max-width: 60px;" value="' +
            cart.count +
            '" id="txt_cartCount_' +
            cart.Rkey +
            '" readonly/>&ensp;<button type="button" class="btn btn-success" id="btn_cartP_' +
            cart.Rkey +
            '" onclick="AdjustCount(\'+\',\'' + cart.Rkey + '\')">+</button>&ensp;<button type="button" class="btn btn-outline-danger" id="btn_cart_Del_' +
            cart.Rkey +
            '" onclick="DeleteBook(\'' + cart.Rkey + '\')"><i class="fa-regular fa-trash-can"></i></button></div></div></div></div></div></div></div></div>';
          total_count += parseInt(book.Price, 10) * parseInt(cart.count, 10);
        }
      });
    }
  });
  if (innerHML != "") {
    innerHML +=
      '<div class="row" style="text-align: right;display: block;margin-top: 20px;margin-right: 10px;"><label style="font-weight: 800;">總共：</label>&ensp;<label id="lb_cartAmout">' +
      total_count +
      '</label>&ensp;&ensp;<img src="dollarPS.png" style="width:15px;"></div>';

      $('#btn_checkOut').prop('disabled',false);
  } else {
    innerHML += "購物車空空如也~";
    $('#btn_checkOut').prop('disabled',true);
  }

  $("#div_cart").html(innerHML);
}

//用作者查詢
function searchByAuthor(params) {
  console.log(params);
  $("#sl2_type").val("Author").trigger("change");
  $("#txt_search").val(params);
  search();
}

//調整書籍數量
function AdjustCount(params, Rkey) {
  let user_Rkey = $("#hf_UserRkey").val();
  switch (params) {
    case "-":
      TmpVal.cart.forEach(function (cart) {
        if (cart.Rkey == Rkey) {
          cart.count -= 1;
          if (cart.count == 0) {
            let indexOfObject = TmpVal.cart.findIndex((Object) => {
              return Object.Rkey == Rkey;
            });
        
            TmpVal.cart.splice(indexOfObject, 1);
          }
        }
      });
      break;
    case "+":
      TmpVal.cart.forEach(function (cart) {
        if (cart.Rkey == Rkey) {
          cart.count += 1;
        }
      });
      break;
  }
  GainCartBook(user_Rkey);
  Refresh_CartCount();
}

//刪除書籍
function DeleteBook(Rkey) {
  let indexOfObject = TmpVal.cart.findIndex((Object) => {
    return Object.Rkey == Rkey;
  });
  TmpVal.cart.splice(indexOfObject, 1);
  let user_Rkey = $("#hf_UserRkey").val();
  GainCartBook(user_Rkey);
  Refresh_CartCount();
}

//清空輸入框
function clrDefault() {
  $('#txt_LogAccount').val('');
  $('#txt_LogPWD').val('');
  $('#txt_NewLastName').val('');
  $('#txt_NewFirstName').val('');
  $('#txt_NewAcoount').val('');
  $('#txt_NewPassword').val('');
}
