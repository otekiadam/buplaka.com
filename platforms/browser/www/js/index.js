var app1 = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
initAd();
showBannerFunc();
showInterstitialFunc();
        console.log('Received Event: ' + id);
    }
};

//initialize the goodies
function initAd(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-1675724970226756/2325251720',		//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-1675724970226756/9751807723'	//PUT ADMOB ADCODE HERE
                },
                android : {
                    banner: 'ca-app-pub-1675724970226756/2325251720',		//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-1675724970226756/9751807723'	//PUT ADMOB ADCODE HERE
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
                bannerAtTop: false, // set to true, to put banner at top
                overlap: true, // banner will overlap webview
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                // isTesting: true, // receiving test ad
                autoShow: true // auto show interstitial ad when loaded
            });

            registerAdEvents();
            window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown
            window.plugins.AdMob.requestInterstitialAd();

        } else {
            alert( 'Reklamlar hazır değil' );
        }
}
//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){
        	window.plugins.AdMob.createInterstitialView();			//REMOVE THESE 2 LINES IF USING AUTOSHOW
            window.plugins.AdMob.requestInterstitialAd();			//get the next one ready only after the current one is closed
        });
    }


//display the banner
function showBannerFunc(){
	window.plugins.AdMob.createBannerView();
}
//display the interstitial
function showInterstitialFunc(){
	window.plugins.AdMob.showInterstitialAd();
}
app1.initialize();