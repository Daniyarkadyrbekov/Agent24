(function(){
    let MainView = document.querySelector('.MainPage');
    let AboutView = document.querySelector('.AboutPage');
    let MissionView = document.querySelector('.Mission');
    let FeedBackView = document.querySelector('.FeedBack');

    AboutView.hidden = true;
    MissionView.hidden = true;
    FeedBackView.hidden = true;

    let AboutLink = document.querySelector('.AboutLink');
    let FeedBackLink = document.querySelector('.FeedBackLink');
    let MissionLink = document.querySelector('.MissionLink');

    AboutLink.addEventListener('click', function (event) {
        MainView.hidden = true;
        MissionView.hidden = true;
        FeedBackView.hidden = true;
        AboutView.hidden = false;
    });

    FeedBackLink.addEventListener('click', function (event) {
        MainView.hidden = true;
        MissionView.hidden = true;
        FeedBackView.hidden = false;
        AboutView.hidden = true;
    });

    MissionLink.addEventListener('click', function (event) {
        MainView.hidden = true;
        MissionView.hidden = false;
        FeedBackView.hidden = true;
        AboutView.hidden = true;
    });



})();
