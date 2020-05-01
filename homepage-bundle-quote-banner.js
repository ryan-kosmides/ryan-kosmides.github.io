$(document).ready(function(){$('.mvt-step2').hide();$('.mvt-hero-icons a').on('click',function(e){if(e.which===13||e.type==='click'){e.preventDefault();if($(this).hasClass('active')){clearForm()}else{showBundleOptions($(this).data('cat'))}}});$('.mvt-bundles a').on('click keypress',function(e){if(e.which===13||e.type==='click'){e.preventDefault();$(this).toggleClass('active').blur();if($(this).data('cat')==='Ho'){$('.mvt-bundle-renters').toggleClass('disabled')}else if($(this).data('cat')==='Re'){$('.mvt-bundle-home').toggleClass('disabled')}}});$('.mvt-hero-back a').on('click keypress',function(e){if(e.which===13||e.type==='click'){e.preventDefault();clearForm()}});$('.mvt-btn-go').on('click keypress',function(e){if(e.which===13||e.type==='click'){e.preventDefault();window.location.href=$('.mvt-select').val()}});$('.mvt-btn-next').on('click keypress',function(e){if(e.which===13||e.type==='click'){e.preventDefault();var zipbox;if($(this).parent().find('.zip-field').length>0){zipbox=$(this).parent().find('.zip-field')}else{zipbox=$(".mvt-hero-zip .zip-field")}
if(isValidUSZip(zipbox.val())){redirectVisitor()}else{zipbox.focus().parent().addClass('invalid')}}});$('.bundle-banner-quote-support .zip-field').on('blur',function(){if(isValidUSZip($(this).val())||$(this).val()===''){$('.bundle-banner-quote-support .zip-field').val($(this).val()).parent().removeClass('invalid')}else{$(this).parent().addClass('invalid')}});$('.bundle-banner-quote-support .zip-field').bind('input',function(){if($(this).val().length>=5&&isValidUSZip($(this).val())){$(this).parent().removeClass('invalid');$(this).blur()}})});function redirectVisitor(){var products=[];$('.mvt-bundles > a.active, .mvt-hero-icons > a.active').each(function(){if($.inArray($(this).data('cat'),products)==-1){products.push($(this).data('cat'))}});var url='https://purchase.allstate.com/onlineshopping/?zipcode='+$('.zip-field').val()+'&Product='+products.join("-")+'&intcid=/home/home.aspx|hero|Quote|190507|'+products.join("");window.location.href=url}
function clearForm(){$('.mvt-hero-icons a').removeClass('active').show();$('.mvt-step2').hide();$('.mvt-step1, .retrieve').show();$('.bundle-banner-quote-support .disabled').removeClass('disabled');$('.bundle-banner-quote-support .active').removeClass('active')}
function showBundleOptions(cat){$('.mvt-hero-icons a[data-cat='+cat+']').addClass('active');$('.mvt-hero-icons a:not(.active)').hide();$('.mvt-step2').show();$('.mvt-step1, .retrieve').hide();$('.mvt-bundle-home, .mvt-bundle-auto, .mvt-bundle-renters, .mvt-bundle-life, .mvt-bundle-moto, .mvt-bundle-atv').hide();if(cat==='Ho'||cat==='Re'){$('.mvt-bundle-auto, .mvt-bundle-life, .mvt-bundle-moto, .mvt-bundle-atv').show()}else if(cat=='Au'){$('.mvt-bundle-home, .mvt-bundle-renters, .mvt-bundle-life, .mvt-bundle-moto, .mvt-bundle-atv').show()}else if(cat=='TLF'){$('.mvt-bundle-home, .mvt-bundle-renters, .mvt-bundle-auto, .mvt-bundle-moto, .mvt-bundle-atv').show()}else if(cat=='Mo'){$('.mvt-bundle-home, .mvt-bundle-renters, .mvt-bundle-auto, .mvt-bundle-atv, .mvt-bundle-life').show()}else if(cat=='Or'){$('.mvt-bundle-home, .mvt-bundle-renters, .mvt-bundle-auto, .mvt-bundle-moto, .mvt-bundle-life').show()}
$('.mvt-hero-zip .zip-field').focus();if((bsCommon.userLocationJson()!=null)&&(bsCommon.userLocationJson()!=undefined)){$('#quote-zip').val(bsCommon.userLocationJson().PostalCode)}
globalEvents.Event("userLocationUpdated").subscribe(function(){if((bsCommon.userLocationJson()!=null)&&(bsCommon.userLocationJson()!=undefined)){$('#quote-zip').val(bsCommon.userLocationJson().PostalCode)}})}
function isValidUSZip(sZip){return/^\d{5}(-\d{4})?$/.test(sZip)}