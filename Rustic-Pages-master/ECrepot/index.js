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
        //畫面切換
        $('#div_Login').hide();
        $('#div_regist').hide();
        $('#div_AfterLogin').show();
        $('#div_search').show();
        Default();
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