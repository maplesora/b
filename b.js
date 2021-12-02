/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

 const needCoin = "https://www.bilibili.com/plus/account/exp.php";
 const needCoin_new = "https://api.bilibili.com/x/web-interface/coin/today/exp";
 const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.41";
 const cookie = "_uuid=ACBA3705-9BB5-B99A-2C17-88DF8B6A241259010infoc; buvid3=1A4A8EDF-E7AA-427C-982E-E19685317E6013443infoc; sid=64aqudo9; blackside_state=1; rpdid=|(kRu~u~lkR0J'uYk||m)))u; LIVE_BUVID=AUTO6616201034151667; Hm_lvt_8a6e55dbd2870f0f5bc9194cddf32a02=1623420636; fingerprint3=8e28124c8d240ad185a6c0778b8a17bd; fingerprint_s=4ccf10e2bb18f452e634e9b1ff44dbee; CURRENT_QUALITY=0; DedeUserID=11278485; DedeUserID__ckMd5=017ead271d7d0a2e; SESSDATA=fdfd315e%2C1651330290%2C62b74*b1; bili_jct=c28c3763ab321e96a7a4fc945ea6fe03; bp_article_offset_11278485=589924667327618038; CURRENT_BLACKGAP=1; CURRENT_FNVAL=976; video_page_version=v_old_home; i-wanna-go-back=1; b_ut=6; fingerprint=0e4eadac5a8ad0765dc79a31087e00e8; buvid_fp=478290C9-4298-457B-B2F4-FB126F7B315E167631infoc; buvid_fp_plain=478290C9-4298-457B-B2F4-FB126F7B315E167631infoc; bp_video_offset_11278485=599601245830181944; PVID=4";
 /*const method = "POST";
 const headers = {"Field": "test-header-param"};
 const data = {"info": "abc"};
 */

 NeedCoin();

 $done();
 function NeedCoin(cookie){
    const myRequest = {
        url: needCoin,
        headers: {"cookie":cookie,"user-agent":ua}, 
    };
    $task.fetch(myRequest).then(response => {
        // response.statusCode, response.headers, response.body
        console.log(response.body);
        $notify("Title", "Subtitle", response.body); // Success!
    }, reason => {
        // reason.error
        $notify("Title", "Subtitle", reason.error); // Error!
    });
 }