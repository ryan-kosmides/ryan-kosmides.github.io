<!-- Global site tag (gtag.js) - Google Analytics -->
//this rule has dependencies on two data elements

var ga_domains = [
    'allstate.com',
    'clicktoempower.org',
    'defiendetuscolores.com',
    'digitallocker.com',
    'goodhands360review.com',
    'goodhandsinsurancereview.com',
    'houseandhomesweeps.com',
    'northlightspecialty.com',
    'promotion.bassmaster.com',
    'proteccioneslajugada.com',
    'protectionisthegame.com',
    'purplepurse.com',
    'youralltimeteam.com'
  ]

var ga_l = document.location;
var ga_p = ga_l.pathname;
var ga_s = ga_l.search;
var ga_qsp = '/' + window.location.search;
var ga_url = ga_l.href;
var ga_cid = _satellite.getVar('CID');
var ga_cmp = _satellite.getVar('CMP');
var flag = ga_cid.length > 0;

if(!flag){
  if(ga_cmp.length > 0) ga_cid = ga_cmp;
  else ga_cid = "";
}
// populate the below variable in the same manner as s.pageName
var ga_vP = digitalData.page.id;
// populate the below variable in the same manner as s.channel
var ga_cH = digitalData.page.channel;
// populate the below variable in the same manner as s.prop31
var ga_URL = window.location.href;
var ga_origin = window.location.origin;
//if (s.getQueryParam('cid,att,CMP,HBX_PK,intcid,intatt', ':')){var ga_cid =s.getQueryParam('cid,att,CMP,HBX_PK,intcid,intatt', ':');}

var ga_account ='UA-46046534-1'; //development GA account ID

//new logic to write data to respective GA account
var embedScript = document.querySelector("script[src*='assets.adobedtm.com']");
if(embedScript) embedScriptSrc=embedScript.src;
if(embedScriptSrc){
  if(embedScriptSrc.indexOf('staging')!=-1||embedScriptSrc.indexOf('development')!=-1){
    //staging_script=true;
    var ga_account ='UA-46046534-1'; 
	}
  else{
    //prod_script=true;
   var ga_account ='UA-46046534-4';
  }
}  
var el = document.createElement('script');
el.src = 'https://www.googletagmanager.com/gtag/js?id='+ga_account;
el.setAttribute('style', 'width:0;height:0;border:0;border:none');
el.async= true;
document.body.appendChild(el);
  

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('set', 'linker', {'domains': ga_domains});
  gtag('js', new Date());

  gtag('config', ga_account,{
  'send_to': ga_account,
  'linker': {
    'accept_incoming': true,
    'domains': ga_domains
   },
  'page_path': ga_vP,
  'dimension1': ga_vP + ga_s,
  'dimension2': ga_cH,
  'dimension3': ga_cid,
  'dimension7': ga_url});