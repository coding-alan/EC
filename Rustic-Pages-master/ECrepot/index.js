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
      PassWord: "Abc123",
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
    {
      UserName: "M",
      PassWord: "0",
      Rkey: 4,
      FirstName: "測試",
      LastName: "測試",
    },
  ],
  review:[
    {
      book_Rkey:1,
      reviewer_Rkey:2,
      Rkey:1,
      scrore:3,
      Title:'還行吧',
      content:'內容還可以，就是轉折有點奇怪。可以讀看看。',
    },
    {
      book_Rkey:1,
      reviewer_Rkey:3,
      Rkey:2,
      scrore:5,
      Title:'非常推薦',
      content:'如果你再找冒險類的小說，那就是這本了，一定要讀!!',
    },
    {
      book_Rkey:1,
      reviewer_Rkey:1,
      Rkey:3,
      scrore:1,
      Title:'非常糟糕',
      content:'完全不懂在寫什麼，簡直是浪費我的生命',
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
    regist_onchange();
    // regist_Select2();
    $("#txt_LogAccount").val('m');
    $("#txt_LogPWD").val('0');
    Login();
})

function regist_onclick() {
    // 登入按鈕
    $('#btn_Login').on('click',function () {
      Login();
    });
    //按enter登入
    $('#txt_LogPWD,#txt_LogAccount').keyup(function (e) {
      if (e.keyCode == 108 || e.keyCode == 13) {
        Login();
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
      search();
    });
    //按enter搜尋
    $('#txt_search').keyup(function (e) {
      if (e.keyCode == 108 || e.keyCode == 13) {
        search();
      }
    });

    //書本細項上一頁
    $('#btn_prePage').on('click',function () {
      //詳細資料關起來
      $('#div_Detail').hide();
      //搜尋頁面打開
      $('#div_result').show();
    });

    //送出評論
    $('#btn_AddReview').on('click',function () {
      //確認該填地都有填寫
      let Title = $('#txt_title').val();
      let Review = $('#txt_review').val();
      let bookRkey = $('#hf_bookRkey').val();
      let UserRkey = $('#hf_UserRkey').val();
      let score = $('input[name=score]:checked', '#div_radio').val();
      if (Title.length == 0) {
        //提醒標題要填寫
        MSG_Error('請記得要填寫標題!');
        return;
      }
      if (Review.length == 0) {
        //提醒評論要寫
        MSG_Error('請留下您寶貴的評論!');
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
        book_Rkey:parseInt(bookRkey, 10),
        reviewer_Rkey:parseInt(UserRkey, 10),
        Rkey:nowReview_Rkey,
        scrore:parseInt(score, 10),
        Title:Title,
        content:Review,
      });

      bookShow(bookRkey);

    });

    //刪除評論
    $('#btn_DeleteReview').on('click',function () {
      let Rkey = $('#hf_reviewRkey').val();
      let bookRkey = $('#hf_bookRkey').val();
      let indexOfObject = TmpVal.review.findIndex(Object => {
        return Object.Rkey == Rkey;
      });

      TmpVal.review.splice(indexOfObject,1);
      bookShow(bookRkey);
    })
}

function regist_onchange() {
  
}

function regist_Select2() {
    
}

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
  }
  else {
    alert("You have either wrong Account or Password, Please check again.");
    }
}

//預設設定欄位
function Default() {    
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
      //塞Rkey到hf中
      $('#hf_UserRkey').val(Rkey);
    }
  });
}

//搜尋用funcrion
function search() {
//詳細資料關起來
$('#div_Detail').hide();
//搜尋頁面打開
$("#div_result").show();

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
                innerHTML += '<div class="card"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><h2><a href="#" onclick="bookShow('+books.Rkey+')">'+books.Title+'</a></h2></div><div class="row">by&ensp;<a href="#">'+books.Author+'</a></div><div class="row">published '+books.Year+'</div></div></div></div></div>';
              }
            })
          });
          $('#div_result').html(innerHTML);
        }
        else{
          $("#div_Notice").html('<h2 style="margin-top: 100px;">搜尋不到您要的書，請重新搜尋。</h2>');
        }
}

function bookShow(bookRkey) {
    //詳細資料打開
    $('#div_Detail').show();
    //搜尋頁面關起來
    $('#div_result').hide();
    let haveBook = false;
    let review_count = 0;
    let review_sum = 0;
    let html_review = '';
    //先抓是誰
    let NowUser_Rkey = $('#hf_UserRkey').val();

    //先把預設打開
    $('#div_writeReview').show();
    $('#div_MyReview').hide();
    //還原預設值
    $('.CL_score').prop("checked", false);

    $('#rad_score1').prop("checked",true);
    $('#txt_title').val('');
    $('#txt_review').val('');

    TmpVal.review.forEach(function (review) {
      if (review.book_Rkey == bookRkey) {
        review_count++;
        review_sum += review.scrore;
        let userName = '';
        TmpVal.Users.forEach(function (user) {
          if (user.Rkey == review.reviewer_Rkey) {
            userName = user.UserName;
          }
        });
        if (review_count == 1 && review.reviewer_Rkey != NowUser_Rkey) {
          html_review += '<div class="card" style="width:100%;"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><label>'+userName+'&ensp;</label>&ensp;評分:&ensp;<label style="font-weight:bold;">'+review.scrore+'</label></div><div class="row"><label style="font-size:larger">'+review.Title+'</label></div><div class="row"><label>'+review.content+'</label></div></div></div></div></div>';
        }
        else if(review.reviewer_Rkey != NowUser_Rkey){
          html_review += '<div class="card" style="width:100%;margin-top: 10px;"><div class="context"><div class="card-body"><div class="col-12 col-md-auto" style="width: 100%;"><div class="row"><label>'+userName+'&ensp;</label>&ensp;評分:&ensp;<label style="font-weight:bold;">'+review.scrore+'</label></div><div class="row"><label style="font-size:larger">'+review.Title+'</label></div><div class="row"><label>'+review.content+'</label></div></div></div></div></div>';
        }
        else{
          //塞bookRkey
          $('#hf_reviewRkey').val(review.Rkey);
          $('#lb_MyReview_Account').text('您的');
          $('#lb_MyReview_Score').text(review.scrore);
          $('#lb_MyReview_Title').text(review.Title);
          $('#lb_MyReview_Content').text(review.content);
          //切換div
          $('#div_writeReview').hide();
          $('#div_MyReview').show();
        }
      }
    });
    $('#div_reviewCard').html(html_review);

    let AvgScore = 0;
    if (review_count > 0) {
      //四捨五入到小數點第二位
      AvgScore = Math.round((review_sum/review_count)*100)/100
    }    
    TmpVal.bookStock.forEach(function (book) {
        if (book.Rkey == bookRkey) {
            haveBook = true;
            //書本Rkey=>塞到hf中
            $('#hf_bookRkey').val(bookRkey);
            //書本細項
            $('#lb_bookName').text(book.Title);
            $('#detail_ISBN').text(book.ISBN);
            $('#detail_Author').text(book.Author);
            $('#detail_Year').text(book.Year);
            $('#detail_AvScore').text(AvgScore);
        }
    })
}

function test() {
  console.log('AA');
  $.ajax({
    type: "GET",
    url: "test.py",
    data: { param1: true,param2:0}
  }).done(function( o) {
     console.log(o);
  });
}

function MSG_Error(params) {
  Swal.fire({
    title: '發生錯誤!',
    text: params,
    icon: 'error',
    confirmButtonText: 'OK'
  })
}

function MSG_Correct(params) {
  Swal.fire({
    title: '執行成功!',
    text: params,
    icon: 'success',
    confirmButtonText: 'OK'
  })
}

