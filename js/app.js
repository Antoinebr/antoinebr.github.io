var wptChrome = {
  apiKey : null,
  wptServers : null,
  serverURL : null,
  runTestURL : null,
  serverUrlReady : null,
  testedURL : null,
  init : function(){
    this.serverURL = "https://www.webpagetest.org/getLocations.php?f=json&k="+this.apiKey;
    this.runTestURL = "http://www.webpagetest.org/runtest.php?k="+this.apiKey+"&";
  },
  setApiKey : function(wptApiKey){
    if(wptApiKey !== "undefined") this.apiKey = wptApiKey;
  },
  setWptServers : function(wptServers){
    if(wptServers !== "undefined") this.wptServers = wptServers.split(',');
  },
  startTest : function(urlToTest){
    this.testedURL = urlToTest;
    this.getServer();
  },
  getTestParams: function(serverSorted){
    var params = {
      fvonly : 1,
      runs : 3,
      f : 'json',
      mobile : 1,
      video : 1,
      location : serverSorted+'.3GFast'
    };
    return $.param( params );
  },
  getServer: function(){
    var that = this;
    $.ajax({
      type: "GET",
      url: that.serverURL+that.apiKey,
      async: true,
      timeout:5000,
      dataType: 'jsonp', // JSON
      success: function(data){

        if(data.statusCode == 200){

          var servers = {};

          for (i = 0; i < that.wptServers.length; i++) {
            servers[that.wptServers[i]] = data.data[that.wptServers[i]].PendingTests.Total;
          }

          // server sorted by pending tests (first value less busy)
          var serverSorted = Object.keys(servers).sort(function(a,b){
            return servers[a]-servers[b];
          });

          console.log("The less busy server is "+serverSorted[0]);

          if(that.testedURL !== "undefined"){
            var wptParams = that.getTestParams(serverSorted[0]);
            var wptUrl = that.runTestURL+wptParams+'&url='+that.testedURL;
            that.launchTest(wptUrl);
          }else{console.log("Test URL not defined :/");}

        }

      }
    });
  },

  launchTest: function(url){
    var that = this;
    $.ajax({
      type: "POST",
      url: url,
      async: true,
      timeout:5000,
      dataType: 'jsonp',
      success: function(data){
        that.checkResult(data.data.jsonUrl);
      }
    });
  },

  checkResult : function (resultURL){
    var thisResultURL = resultURL;
    var that = this;
    console.log("check result called");
    $.ajax({
      type: "GET",
      url: resultURL,
      async: true,
      timeout:5000,
      dataType: 'jsonp', // JSON
      success: function(data){

        console.log(resultURL);
        console.log(data);
        var ajaxLoader = $('#ajax-loader');
        var statusText = $('#status');

        if(data.statusCode !== 200){
          ajaxLoader.show();
          statusText.text('');
          statusText.text(data.statusText);
          //console.log("check result re-called");
          setTimeout(function(){ that.checkResult(thisResultURL);}, 3000);
          return;
        }else{
          ajaxLoader.hide();

          $('.section-intro').hide();
          var speedindex = data.data.median.firstView.SpeedIndex;
          (speedindex < 5000) ? $('.lead-ko').show() : $('.lead-ok').show();
          $('h1 span').text(speedindex).show(); $('h1').show();

          $('#full-result').attr('href',data.data.summary).show();

          $('form').before('<img class="img-responsive img-center shadow screenshot" src="'+data.data.median.firstView.images.screenShot+'">');
          statusText.text('');

        }

      }
    });

  }

}; // end obj



console.log(QueryString);

if(QueryString.url !== "null"){

  if(QueryString.apiKey !== "undefined") wptChrome.setApiKey(QueryString.apiKey);
  if(QueryString.servers !== "undefined") wptChrome.setWptServers(QueryString.servers);

  wptChrome.init();
  wptChrome.startTest(QueryString.url);

}
