/*
s.registerPostTrackCallback(function() {window.evergageCustomLinksEnabled = true;});
	_satellite.notify("Evergage Custom Links Enabled",3)
*/
var evergageCancel = setInterval("evergageReady()",200)
var evergageCount = 0
function evergageReady()

{
  
  if(typeof s == "undefined"){
		evergageCount++;
		if(evergageCount == 10)evergageCancel = clearInterval(evergageCancel)
	}
	if(typeof s == "object"){
    evergageCancel = clearInterval(evergageCancel)
		s.registerPostTrackCallback(function() {window.evergageCustomLinksEnabled = true;                                  
     });
		_satellite.notify("Evergage Custom Links Enabled",3)
	}
}