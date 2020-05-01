_satellite.pushAsyncScript(function(event, target, $variables){
  
var script2 = document.createElement("script");		
script2.type="text/javascript";
var reportSuite=_satellite.availableTools.sc.prototype.getAccount();
//console.log("report suite is : "+s.account+"&"+s_account+"&&"+reportSuite)
script2.innerText='AdCloudEvent("97021C8B53295DF30A490D4D@AdobeOrg","'+reportSuite+'");'
document.body.append(script2);


//console.log(":::",script2,':::',document.body.lastElementChild);


});
