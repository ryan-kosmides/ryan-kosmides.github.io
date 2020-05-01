
var buttonClicks = 0;

// This function is to prevent JavaScript errors caused by Flash files calling old HitBox methods.
function hbURL(url, hb1, hb2)
{
  window.open(url, "Allstate")
  _hbPageView(hb1, hb2)
}
function hbTalk(num, hb1, hb2)
{
  webVoicePop('Template=57874'); //webVoicePop('Template='+num);
  _hbPageView(hb1, hb2)
}
// This function is a shell function to capture calls to the old HitBox functions made from Flash files.
// This can be removed once those Flash files are remediated.
function _hbPageView(param1, param2)
{
}
// End shell function.

// SCRIPT BY PRADEEP FOR wysw 9/26/2017

// clicks on arrow

$(function() {
	$(".wysw-swipe--prev").click(function() {
		  _satellite.notify("Click on arrow  ");
	      sclvCall("Click on arrow  ");
   })
});

$(function() {
	$(".wysw-swipe--next").click(function() {
			 _satellite.notify("Click on arrow  ");
	      sclvCall("Click on arrow  ");
   })
});

// get it covered
$(function() {
	$("div[class='wysw__results_teaser'] a[class='btn btn-default']").click(function() {
			 _satellite.notify("Get It Covered");
	      sclvCall("Get It Covered");
   })
});

// start over 
$(function() {
	$("div[style*=text-align] a").click(function() {
			 _satellite.notify("Start over");
	      sclvCall("Start over");
   })
});

// social icons click 
$(function() {
	$("a[class*=wysw_footer_social]").click(function() {
			 _satellite.notify("social icons click");
	      //sclvCall("Start over");
		  var n = $(this).text()
       _satellite.notify(n);
		  //alert(n);
		  //Event55(n)
   })
});

// get a quote and find an agent
$(function() {
	$("div[class='wysw__insure-cta'] a[class='btn btn-default']").click(function() {
			var text = $(this).text();
			var intc = $(this).attr('href');
  		var intc1 = intc.split("intcid=");
			var intci = intc1[1].split("&");
			var intcid = intci[0];
			_satellite.notify(intcid);
    //alert(intcid);
			
			if(text == 'Get A Quote' )
			{
				_satellite.notify("Get A Quote");
				Evar4("Get A Quote",intcid);
			}
			else if(text == 'Find An Agent')
			{
				_satellite.notify("Find An Agent");
				Evar4("Find An Agent",intcid);
			}
	    
   })
});

function sclvCall(n) {
    try {
        //_scLV(n, 1, "o")
            s.linkTrackVars = "prop12,prop13,prop14,prop15,channel";
            s.prop12 = s.pageName
            s.prop13 = n;
            s.prop14 = s.prop12 + "|" + s.prop13;
           // s.prop15 = 1;
            s.channel = digitalData.page.channel;
           // sc_hitType = '_scLV';
            s.tl(1, 'o', s.prop13);
            s.prop12 = s.prop13 = s.prop14 = ''; /* clear out props 12-14 for subsequent clicks without page reloads */
            s.c_w('SC_LINKS', '', 0); /* clear cookie so values aren't re-transmitted on page refresh */
      
    } catch (t) {
        t.message
    }
}



function Evar4(n,m) {
    try {
        s.linkTrackVars = "eVar4,prop12,prop13,prop14,prop15,channel";
		 s.eVar4 = m;
		  s.prop12 = s.pageName
            s.prop13 = n;
            s.prop14 = s.prop12 + "|" + s.prop13;
           // s.prop15 = 1;
            s.channel = digitalData.page.channel;
           // sc_hitType = '_scLV';
            s.tl(1, 'o', s.prop13);
			s.eVar4 = '';
            s.prop12 = s.prop13 = s.prop14 = ''; /* clear out props 12-14 for subsequent clicks without page reloads */
            s.c_w('SC_LINKS', '', 0); /* clear cookie so values aren't re-transmitted on page refresh */
      
    } catch (t) {
        t.message
    }
}

// function social icons

function Event55(n) {
    try {
       
		 s.linkTrackVars = "events,eVar55,prop12,prop13,prop14,prop15,channel";
		 s.linkTrackEvents = "event55";
		  s.events = "event55";
		s.eVar55 = n;
		  s.prop12 = s.pageName
            s.prop13 = n;
            s.prop14 = s.prop12 + "|" + s.prop13;
           // s.prop15 = 1;
            s.channel = digitalData.page.channel;
           // sc_hitType = '_scLV';
            s.tl(1, 'o', s.prop13);
			s.eVar55 = '';
			s.events = '';
            s.prop12 = s.prop13 = s.prop14 = ''; /* clear out props 12-14 for subsequent clicks without page reloads */
            s.c_w('SC_LINKS', '', 0); /* clear cookie so values aren't re-transmitted on page refresh */
		
		
    } catch (t) {
        t.message
    }
}

// END OF SCRIPT

function ProcessMetrics(metricName)
{
  ProcessMetrics(metricName, null);
}

function ProcessMetrics(metricName, variables)
{
  console.log("Process Metric has been called");
  s.events = "";  //reset s.events to "" so it doesn't get fired again on subsequent call
  if (metricName == "GetQuote")
  {
    if (buttonClicks == 0)
    {
      var selectedValQuote = "";
      var arrQuote = variables[0].get_items();

      for (i = 0; i < arrQuote.length; i++)
      {
        if (arrQuote[i].Value == variables[0]._valDiv.value)
        {
          selectedValQuote = arrQuote[i].Text;
          break;
        }
      }

      _scLV('quote_box|' + selectedValQuote.replace('/', '_').replace(" ", "_").replace(".", "").toLowerCase() + '_start', 1, 'o');
      buttonClicks++;
    }
  }
  else if (metricName == "RetrieveQuote")
  {
    _scLV('quote_box|retrieve', 1, 'o');
  }
  else if (metricName == "FindAgentZip")
  {
    if (buttonClicks == 0)
    {
      _scLV('quote_box|find_agent', 1, 'o');
      buttonClicks++;
    }
  }
  else if (metricName == "FindAgentCityState")
  {
    if (buttonClicks == 0)
    {
      _scLV('quote_box|find_agent', 1, 'o');
      buttonClicks++;
    }
  }
  else if (metricName == "ReferAFriendRefer")
  {
    var sc = s_gi(variables[0]);

    sc.linkTrackVars = 'eVar12,eVar41,eVar44,prop21,events';
    sc.linkTrackEvents = 'event48,event59';
    sc.eVar12 = s.prop21 = variables[4] + '|' + variables[5] + '|' + variables[6] + '|' + variables[7] + '|' + variables[8] + '|' + variables[9];
    sc.eVar41 = variables[3] + '|RaF ' + variables[1] + ': Refer ' + variables[2];
    sc.eVar44 = 'RaF ' + variables[1] + ': Refer ' + variables[2];
    sc.events = 'event48,event59';
    
    sc.tl(this, 'o', 'RaF ' + variables[1] + ': Refer ' + variables[2] + ' Start');
  }
  else if (metricName == "ReferAFriendRecommend")
  {
    var sc = s_gi(variables[0]);

    sc.linkTrackVars = 'eVar12,eVar41,eVar44,prop21,events';
    sc.linkTrackEvents = 'event48,event59';
    sc.eVar12 = s.prop21 = variables[4] + '|' + variables[5] + '|' + variables[6] + '|' + variables[7] + '|' + variables[8] + '|' + variables[9];
    sc.eVar41 = variables[3] + '|RaF ' + variables[1] + ': Recommend ' + variables[2];
    sc.eVar44 = 'RaF ' + variables[1] + ': Recommend ' + variables[2];
    sc.events = 'event48,event59';

    sc.tl(this, 'o', 'RaF ' + variables[1] + ': Recommend ' + variables[2] + ' Start');
  }
  else if (metricName == "ReferAFriend")
  {
    var sc = s_gi(variables[0]);

    sc.linkTrackVars = 'eVar12,eVar41,prop21,events';
    sc.linkTrackEvents = 'event49,event60';
    sc.eVar12 = s.prop21 = variables[5] + '|' + variables[6] + '|' + variables[7] + '|' + variables[8] + '|' + variables[9] + '|' + variables[10];
    sc.eVar41 = variables[3] + '|RaF ' + variables[1] + ': ' + variables[2];
    sc.events = 'event49,event60';

    sc.tl(this, 'o', 'RaF ' + variables[1] + ': ' + variables[2] + ' ' + variables[3] + ' Complete');
    
    _scLV(s.pageName.substring(s.pageName.lastIndexOf('/') + 1) + 'ReferAFriend', 1, 'o');
  }
  else if (metricName == 'LoginHead')
  {
    if (buttonClicks == 0)
    {
      _scLV('CustLogin - Customer Login', 1, 'o');
      buttonClicks++;
    }
  }
  else if (metricName == 'Login')
  {
    if (buttonClicks == 0)
    {
      _scLV('quote_box|ccc_login', 1, 'o');
      buttonClicks++;
    }
  }
  else if (metricName == 'LoginIconTopNav') 
  {
    if (buttonClicks == 0) 
    {
        _scLV('Login|IconTopNav_login', 1, 'o');
        buttonClicks++;
     }
  }
  else if (metricName == 'LoginknownCustomer') 
  {
    if (buttonClicks == 0) 
    {
        _scLV('Login|LoginknownCustomer_login', 1, 'o');
        buttonClicks++;
     }
  }  
  else if (metricName == 'AnimateMoveLeft')
  {
    _scLV('More_content_Right', 1, '0');
  }
  else if (metricName == 'AnimateMoveRight')
  {
    _scLV('More_content_Left', 1, '0');
  }
  else if (metricName == 'AnimateButtonClick')
  {
    imgIndex = variables[0];

    _scLV('More_content_Screen' + (imgIndex + 1), 1, '0');
  }
  else if (metricName == 'AgentBanner')
  {
    _scLV(variables[0], 1, 'o');
    s.prop12 = s.prop13 = s.prop14 = s.events = s.eVar55 = '';
  }
  else if (metricName == 'CommonCostlyClaims')
  {
    _scLV(variables[0], 1, 'o');
    s.prop12 = s.prop13 = s.prop14 = s.events = s.eVar55 = '';
  }
  else if (metricName == 'CommonCostlyClaimsSocial')
  {
    s.linkTrackVars = "eVar55, events";
    s.linkTrackEvents = "event55";
    s.events = "event55";
    s.eVar55 = variables[0];
    s.tl(this, "o", variables[0]);
    s.events = s.eVar55 = "";
  }
  else if (metricName == 'PremiumGauge')
  {
    _scLV(variables[0], 1, 'o');
    s.prop12 = s.prop13 = s.prop14 = s.events = s.eVar55 = '';
  }
  else if (metricName == 'PremiumGaugeSocial')
  {
    s.linkTrackVars = "eVar55, events";
    s.linkTrackEvents = "event55";
    s.events = "event55";
    s.eVar55 = variables[0];
    s.tl(this, "o", variables[0]);
    s.events = s.eVar55 = "";
  }
  else if (metricName == 'GUIhbURL')
  {
    sc1 = variables[0];
    sc2 = variables[1];

    _scPV(sc2 + sc1);
  }
  else if (metricName == 'GUIhbTalk')
  {
    sc1 = variables[0];
    sc2 = variables[1];

    _scPV(sc2 + sc1);
  }
  else if (metricName == 'ZipOverlayEdit')
  {
    s.prop12 = s.pageName;
    s.prop13 = variables[0];
    s.prop14 = s.pageName + "|" + variables[0];
    s.prop15 = variables[1];
    
    _scLV(variables[0], variables[1], 'o');
  }
  else if (metricName == 'ZipOverlaySave')
  {
    s.prop12 = s.pageName;
    s.prop13 = variables[0];
    s.prop14 = s.pageName + "|" + variables[0];
    s.prop15 = variables[1];
    
    _scLV(variables[0], variables[1], 'o');
  }
  else if (metricName == 'agentBusinessCard')
  {
    s.linkTrackVars = "eVar41, events";
    s.linkTrackEvents = "event66";
    s.prop12 = s.pageName;
    s.prop13 = variables[0];
    s.prop14 = s.pageName + "|" + variables[0];
    s.prop15 = variables[1];
		if(variables[0] == "Agent Email")
		{
			s.eVar41 = "ACOM|Email";
			s.events = "event66";
		}
		if (variables[0] == "Agent Directions")
		{
			s.eVar41 = "ACOM|Directions";
			s.events = "event66";	
		}
		if (variables[0] == "Agent Reviews")
		{
			s.eVar41 = "ACOM|Reviews";
			s.events = "event66";
		}
    s.tl(this, "e", variables[0]);
    s.events = s.eVar41 = "";
    //_scLV(variables[0], variables[1], 'e');
  }
  else if (metricName == 'SocialWidgets')
  {
    s.linkTrackVars = "eVar55, events";
    s.linkTrackEvents = "event55";
    s.events = "event55";
    s.eVar55 = variables[0];
    s.tl(this, "o", variables[0]);
    s.events = s.eVar55 = "";
  }
  else if (metricName == 'SocialIcons')
  {
    s.linkTrackVars = "eVar55, events";
    s.linkTrackEvents = "event55";
    s.events = "event55";
    s.eVar55 = variables[0];
    s.tl(this, "o", variables[0]);
    s.events = s.eVar55 = "";
  }
  else if (metricName == 'ShareButton')
  {
    s.linkTrackVars = "eVar55,events";
    s.linkTrackEvents = "event55";
    s.events = "event55";
    s.eVar55 = variables["providers"] + "-share";
    s.tl(this, 'o', variables["providers"] + "-share");
    s.events = s.eVar55 = "";
  }
  else if (metricName == 'WhatsYourStuffWorthGetStarted')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = "Allstate Logo";
    s.prop14 = "/RentersHowMuchStuff/GetStarted|Allstate Logo";
  }
  else if (metricName == 'WhatsYourStuffWorthGetQuote')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = variables[1];
    s.prop14 = variables[2];
  }
  else if (metricName == 'WhatsYourStuffWorthFindAnAgent')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = variables[1];
    s.prop14 = variables[2];
  }
  else if (metricName == 'WhatsYourStuffWorthPrivacy')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = variables[1];
    s.prop14 = variables[2];
  }
  else if (metricName == 'WhatsYourStuffWorthTerms')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = variables[1];
    s.prop14 = variables[2];
  }
  else if (metricName == 'WhatsYourStuffWorthunderwriting')
  {
    s.pageName = variables[0];
    s.prop12 = variables[0];
    s.prop13 = variables[1];
    s.prop14 = variables[2];
  }
  else if (metricName == 'WhatsYourStuffWorthTwitter')
  {
    s.pageName = variables[0];
  }
  else if (metricName == 'WhatsYourStuffWorthFacebook')
  {
    s.pageName = variables[0];
  }
  else if (metricName == 'OpenExplore')
  {
    _scLV('Explore Allstate', 1, 'o');
  }
  else if (metricName == 'ExploreLink')
  {
    _scLV(variables[0], 'TopHat', 'o');
  }
  else if (metricName == 'CloseExplore')
  {
    _scLV('Close Explore Allstate', 1, 'o');
  }
  else if (metricName == 'SmartSearchFlyOut')
  {
    _scLV(variables[0], variables[1], 'o');
  }
  else if (metricName == 'AgentFlyOut')
  {
    _scLV(variables[0], variables[1], 'o');
  }  
  else if (metricName == 'MidNav')
  {
    _scLV(variables[0], variables[1], 'o');
  }
  else if (metricName == 'barometer')
  {
   _satellite.notify("testing", 1);
    _scLV(metricName, 1, 'o');
  }
    else if (metricName == 'explore')
  {
    _scLV(metricName, 1, 'o');
  }   
  else if (metricName == 'trend-analysis')
  {
    _scLV(metricName, 1, 'o');
  }   
  else if (metricName == 'small-business-voices')
  {
    _scLV(metricName, 1, 'o');
  }   
  else if (metricName == 'city')
  {
    _scLV(metricName, 1, 'o');
  }   
  else if (metricName == 'demographics')
  {
    _scLV(metricName, 1, 'o');
  }   
  else if (metricName == 'aboutstudy')
  {
    _scLV(metricName, 1, 'o');
  } 
  else if (metricName == 'Video')
  {
		s.linkTrackVars = 'eVar51,eVar53,events';
		s.linkTrackEvents = 'event72';
		s.eVar51 = variables[0];
		s.eVar53 = 'video';
		s.events = 'event72';
		s.tl(true,'o', variables[0]);
		s.prop12 = s.prop13 = s.prop14 = ''; /* clear out props 12-14 for subsequent clicks without page reloads */
		s.c_w('SC_LINKS', '', 0); /* clear cookie so values aren't re-transmitted on page refresh */
		s.events = s.eVar51 = s.eVar53 = "";
  } 
  else if (metricName == 'VideoEnded')
  {
		s.linkTrackVars = 'eVar51,eVar53,events';
		s.linkTrackEvents = 'event73';
		s.eVar51 = variables[0];
		s.eVar53 = 'video';
		s.events = 'event73';
		s.tl(true,'o', variables[0]);
		//s.prop12 = s.prop13 = s.prop14 = ''; /* clear out props 12-14 for subsequent clicks without page reloads */
		sc_hitType = '_scLV';  //the line above will not clear s.linkTrackVars. This sc_hitType will clear prop12-14.
    s.c_w('SC_LINKS', '', 0); /* clear cookie so values aren't re-transmitted on page refresh */
		s.events = s.eVar51 = s.eVar53 = "";
  }  
  else if (metricName == 'EventComplete')
  {
    s.linkTrackVars = 'events';
    s.linkTrackEvents = 'event62';
    s.events = 'event62';
    s.prop12 = s.pageName;
    s.prop13 = variables[0];
    s.prop14 = s.prop12 + '|' + s.prop13;
    s.tl(true, 'o', variables[0]);
    s.events = '';
  }
  else if (metricName == 'EnterpriseSearch')
  {
    s.linkTrackVars = "eVar5,prop5,events";
    s.linkTrackEvents = "event5";
    s.events = "event5";
    s.eVar5 = s.prop5 = variables[0];
    s.tl(this, "o", variables[0]);
    s.events = s.eVar5 = "";
  }
 }

/*!
//# sourceMappingURL=ProcessMetrics.min.js.map
*/





