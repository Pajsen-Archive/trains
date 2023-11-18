// Limit scope pollution from any deprecated API
(function() {

var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function( ua ) {
ua = ua.toLowerCase();

var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
/(msie) ([\w.]+)/.exec( ua ) ||
ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
[];

return {
browser: match[ 1 ] || "",
version: match[ 2 ] || "0"
};
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
browser[ matched.browser ] = true;
browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
browser.webkit = true;
} else if ( browser.webkit ) {
browser.safari = true;
}

jQuery.browser = browser;

jQuery.sub = function() {
function jQuerySub( selector, context ) {
return new jQuerySub.fn.init( selector, context );
}
jQuery.extend( true, jQuerySub, this );
jQuerySub.superclass = this;
jQuerySub.fn = jQuerySub.prototype = this();
jQuerySub.fn.constructor = jQuerySub;
jQuerySub.sub = this.sub;
jQuerySub.fn.init = function init( selector, context ) {
if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
context = jQuerySub( context );
}

return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
};
jQuerySub.fn.init.prototype = jQuerySub.fn;
var rootjQuerySub = jQuerySub(document);
return jQuerySub;
};

})(); function ggtrPromotions(obj,event_label){
return true;
}

function tm(event, obj){
var href = (typeof obj !== "undefined" && typeof $(obj).attr("href") !== "undefined") ? $(obj).attr("href") : "/user/creatorsignupnow";

if($("body").hasClass("n_i_p")){
console.log("TM Event: " + event);
console.log("Redirect to: " + href);
document.location=href;
}

if(typeof dataLayer !== 'undefined'){
dataLayer.push({ 
'event': event, 
'eventCallback' : function() { document.location=href; } 
});
}

return false;
}

function tmSignupSuccess(user_id){
if($("body").hasClass("n_i_p")){
console.log("sign_up_success_DL: " + user_id);
}
if(typeof dataLayer !== 'undefined'){
dataLayer.push({
'event':'sign_up_success_DL',
'user_id': user_id
});
}
}

function tmSignup(discriminator){
if($("body").hasClass("n_i_p")){
console.log("TM discriminator: " + discriminator);
return true;
}

if(typeof dataLayer !== "undefined"){
dataLayer.push({
'event':'sign_up_specific_method_button_click_DL',
'selected_sign_up_method': discriminator
});
}
}

function tmUploadSuccess(user_id){
if($("body").hasClass("n_i_p")){
console.log("sign_up_first_photo_upload_DL: " + user_id);
}
if(typeof dataLayer !== 'undefined'){
dataLayer.push({
'event':'sign_up_first_photo_upload_DL',
'user_id': user_id
});
}
}

function tmComplete(user_id){
if($("body").hasClass("n_i_p")){
console.log("sign_up_first_photo_upload_DL: " + user_id);
}
if(typeof dataLayer !== 'undefined'){
dataLayer.push({
'event':'membership_purchase_success_DL',
'user_id': user_id
});
}
}(function($) {
$('a[data-reveal-id]').on('click', function(e) {
e.preventDefault();
var modalLocation = $(this).attr('data-reveal-id');
$('#'+modalLocation).reveal($(this).data());
});
$.fn.reveal = function(options) {


var defaults = {
animation: 'fadeAndPop',
animationspeed: 300,
closeonbackgroundclick: true,
dismissmodalclass: 'close-reveal-modal',
closeOnEsc: true,
close: function(){}
}; 

var options = $.extend({}, defaults, options); 

return this.each(function() {

var modal = $(this),
topMeasure= parseInt(modal.css('top')),
topOffset = modal.height() + topMeasure,
locked = false,
modalBG = $('.reveal-modal-bg');


if(modalBG.length == 0) {
modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
}

modal.bind('reveal:open', function () {
modalBG.unbind('click.modalEvent');
$('.' + options.dismissmodalclass).unbind('click.modalEvent');
if(!locked) {
lockModal();
if(options.animation == "fadeAndPop") {
modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
modalBG.fadeIn(options.animationspeed/2);
modal.delay(options.animationspeed/2).animate({
"top": $(document).scrollTop()+topMeasure + 'px',
"opacity" : 1
}, options.animationspeed,unlockModal());
}
if(options.animation == "fade") {
modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
modalBG.fadeIn(options.animationspeed/2);
modal.delay(options.animationspeed/2).animate({
"opacity" : 1
}, options.animationspeed,unlockModal());
} 
if(options.animation == "none") {
modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
modalBG.css({"display":"block"});
unlockModal()
}
if(options.animation == "none2") {
modal.css({'visibility' : 'visible'});
modalBG.css({"display":"block"});
unlockModal()
}
}
modal.unbind('reveal:open');
}); 

modal.bind('reveal:close', function () {
if(!locked) {
lockModal();

if($('#purchase-popup').hasClass('dont-miss')) {
$('#purchase-popup').removeClass('pop_open');
$('body').css({ overflow: 'auto' });
$('#purchase-popup').fadeOut(1000);
}

if(options.animation == "fadeAndPop") {
modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
modal.animate({
"top":$(document).scrollTop()-topOffset + 'px',
"opacity" : 0
}, options.animationspeed/2, function() {
modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
unlockModal();
});
}
if(options.animation == "fade") {
modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
modal.animate({
"opacity" : 0
}, options.animationspeed, function() {
modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
unlockModal();
});
}
if(options.animation == "none") {
modal.css({'visibility' : 'hidden', 'top' : topMeasure});
modalBG.css({'display' : 'none'});
}
if(options.animation == "none2") {
modal.css({'visibility' : 'hidden'});
modalBG.css({'display' : 'none'});
}
options.close();
}
modal.unbind('reveal:close');
});

modal.trigger('reveal:open')

var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
modal.trigger('reveal:close')
});

if(options.closeonbackgroundclick) {
modalBG.css({"cursor":"pointer"})
modalBG.bind('click.modalEvent', function () {
modal.trigger('reveal:close')
});
}
$('body').keyup(function(e) {
if ( options.closeOnEsc ) {
//
// Did the escape key get triggered?
//
if ( e.which === 27 ) { // 27 is the keycode for the Escape key
//
// Escape key was triggered.
// Trigger the modal 'close' event.
//
modal.trigger( 'reveal:close' );
}
}
});

function unlockModal() { 
locked = false;
}
function lockModal() {
locked = true;
}

});
}
})(jQuery);

function closeNavLeft(){
var mainContent = $('#wrapper.wide');
var navbarContent = $('.navbarMenu');

$('#wrapper').animate({opacity: 1}, 250, function() {
$('#wrapper').removeClass('openMenu');
$('body').removeClass('openMenu').css({ background: '#FFF' });
$('footer').show();
});

$(".navbarMenu").css({'overflow':'hidden'});
$(".navbarMenu").animate({marginLeft:'-100%'},250, function() {
$(this).hide();
});

if($("html").hasClass("mobile")){
$(".featured-contest-bg").css("position","fixed");
}
}
function openNavLeft(){
//if($("html").hasClass("mobile")){
$(".featured-contest-bg").css("position","absolute");
//}
var mainContent = $('#wrapper.wide');
var navbarContent = $('.navbarMenu');

/*mainContent.bind('touchmove',function(e){
e.preventDefault();
});*/

$('body').addClass('openMenu').css({ background: '#000'});
$('footer').hide();
$('#wrapper').addClass('openMenu').css({ background: '#FFF' }).animate({opacity: 0.6}, 350, function() {
$(".logged-out footer, .logged-out #ambassadors").hide();
navbarContent.css({ display: 'inline', position: 'absolute', marginLeft: '-100%', width:'100%' }).animate({marginLeft:0},250, function() {
$(this).css({ overflow: 'auto' });
});
});
}
$('.column_x.navbar').on("click",function(e){
e.preventDefault();
var navbarContent = $('.navbarMenu');

var orientation = ($(window).height() < $(window).width())?'landscape':'portrait';

if(navbarContent.css('display') != "none"){
$(this).css({opacity:1});
closeNavLeft(orientation);
}
else{
$(this).css({opacity:0.6});
openNavLeft(orientation);
}
});

var the_action = "click";
if($('.mobile').length > 0) {
the_action = "touchend";
}

$('.navbarMenu .navbarclose, .navbarMenu .navbarexit').on(the_action,function(e){
trigerCloseNavLeft();
});

$('.navbarMenuRight .navbarclose, .navbarMenuRight .navbarexit').on(the_action,function(e){
trigerCloseNavRight();
});

function trigerCloseNavLeft() {
var orientation= ($(window).height() < $(window).width())?'landscape':'portrait';
closeNavLeft(orientation);
}

function trigerCloseNavRight() {
var orientation= ($(window).height() < $(window).width())?'landscape':'portrait';
closeNavRight(orientation);
$('.user_navigation').css({opacity:1});
}


$(document).ready(function(){

$('a.categoryPC').parent().css('background-color','#000');


// ON CLICK any item.. Close nav
$('.navbarMenu ul.box-menu a, .navbarMenu .navbarMenuClose').on("click",function(){
if(!$(this).parent().hasClass('has-drop')) {
closeNavLeft();
}
});
$('.user_navigation ul.box-menu a').on("click",function(){
//closeNavRight(($(window).height() < $(window).width())?'landscape':'portrait');
});

$('.navbarMenu .imgCancel').on("click",function(e){
e.preventDefault();
var orientation= ($(window).height() < $(window).width())?'landscape':'portrait';
closeNavLeft(orientation);

});

if(!$('body').hasClass('logo-signature')) {
$('.mobileNavbar .user_navigation, .mobile .logged-in .normalNavbar .user_navigation .box-menu a').on("click",function(e){
e.preventDefault();
var navbarContent = $('.navbarMenuRight');
var orientation= ($(window).height() < $(window).width())?'landscape':'portrait';

if(navbarContent.css('display') !== "none"){
$(this).css({opacity:1});
closeNavRight(orientation);
}else{
$(this).css({opacity:0.3});
openNavRight(orientation);
}

});
}
});

function closeNavRight(orientation){
$('#wrapper').animate({opacity: 1}, 250, function() {
$('#wrapper').css({ overflow: 'auto', height: 'auto' })
$('body').css({ background: '#FFF', height: 'auto', overflow: 'auto'});
$('footer').show();
});

$(".navbarMenuRight").animate({ left:'100%' },250, function() {
$(this).hide().css('overflow','hidden');
});
}

function openNavRight(orientation){
var mainContent = $('#wrapper.wide');
var navbarContent = $('.navbarMenuRight');

/*mainContent.bind('touchmove',function(e){
e.preventDefault();
});*/

$('body').css({ background: '#000', height: '100%', overflow: 'hidden'});
$('footer').hide();

$('#wrapper').css({ background: '#FFF', overflow: 'hidden', height: '100%' }).animate({opacity: 0.6}, 350, function() {
navbarContent.css({ position: 'absolute', width:'100%', left: '100%', display: 'block' }).animate({ left: 0 }, 250, function() {
$(this).css({ overflow: 'auto' });
});
});
}$(document).ready(function() {
if($('body').hasClass('reward-points')) {

setTimeout(function(){ callReveal("#modal"); }, 5000);

} else {
callReveal("#modal");
}
});

var revealSpeed = 600;

function callReveal(selector,closeonbackgroundclick, closeOnEsc, callbackOnClose, animation){

if(typeof(animation)==='undefined'){
animation = 'fade';
}

if($("body").hasClass("welcome4")){//) !$().reveal) {
return;//Reveal is not loaded...
}

if(closeonbackgroundclick !== false){
closeonbackgroundclick = true;
}

if(closeonbackgroundclick !== false){
closeOnEsc = true;
}
if(typeof callbackOnClose==="undefined" || callbackOnClose===""){
callbackOnClose= function(){};
}

$(selector).reveal({
animation: animation, // fade, fadeAndPop, none
animationspeed: revealSpeed,
closeonbackgroundclick: closeonbackgroundclick, // if you click background will modal close?
closeOnEsc: closeOnEsc,
dismissmodalclass: 'reveal-close',
close: defaultCallbackOnClose
});

revealSpeed = 600;

function defaultCallbackOnClose(){
if (typeof callbackOnClose === "function") callbackOnClose();
//var fn = window[callbackOnClose];
//if (typeof fn === "function") fn();
//else callbackOnClose;
}
}var tt_elements = [];
var tt_elements_queue = [];

var is_photo_page = ($('#main_image').length > 0);

function tt_init(){
if(is_photo_page && !$('#main_image').hasClass("tt_visible")){
$('#main_image').data("tt_visible",0);
var obj = new Object();
obj.element = $('#main_image');
obj.start = 0;
obj.total = 0;
tt_elements.push(obj);
}
$('.tt_tmp').each(function(){
if(!$(this).hasClass("tt_visible")){
$(this).data("tt_visible",0);
var obj = new Object();
obj.element = this;
obj.start = 0;
obj.total = 0;
tt_elements.push(obj);
}
});
}

$(window).scroll(function(){
tt_Do();
});
$(document).ready(function(){
tt_Do();
});

function tt_post(obj){
obj.id = 0;

var str= $(obj.element).attr("src"); 
var regex= /mediafiles\/\d+\/\d+\/\d+/;

if (typeof str !='undefined'&&str.match(regex)) { // Did it match?
str = str.replace(regex, "");
obj.id = Number((str.match(/\/\d+/))[0].match(/\d+/)[0]);
}

tt_post_id(obj.id,obj.total);
}

function tt_post_id(id,total){

if(!is_photo_page){
tt_elements_queue.push({'id':id,'total':total});
return;
}

if( !isNaN(id) && id > 0 && total >0){
if($("body").hasClass("n_i_p")){
console.log("key="+id + "&seconds=" + total);
return;
}
$.get( "https://mh8061p5ld.execute-api.us-east-1.amazonaws.com/default/tt_photo_v2?key="+id + "&seconds=" + total);
}
}

function tt_Do(){
$(tt_elements).each(function(){
if(tt_isScrolledIntoView($(this.element)) && ($(this.element).data("tt_visible") == 0)){
$(this.element).data("tt_visible",1);
this.start = Math.round(new Date().getTime()/1000);
}
else if( !tt_isScrolledIntoView($(this.element)) && $(this.element).data("tt_visible") == 1){
$(this.element).data("tt_visible",0);
var v_s = Math.round(new Date().getTime()/1000) - this.start;
if(v_s > 0 ){
this.total += v_s;
}
this.start=0;
if(this.total>0){
var ojbtt = new Object();
ojbtt.total = this.total;
ojbtt.element = this.element;
ojbtt.total = this.total;
tt_post(ojbtt)
this.total = 0;
}
}
});
}

function tt_isScrolledIntoView(elem){
var $elem = $(elem);
var $window = $(window);

var docViewTop = $window.scrollTop();
var docViewBottom = docViewTop + $window.height();

var elemTop = $elem.offset().top + 50;
var elemBottom = elemTop + $elem.height() - 50;

if(is_photo_page && docViewTop < 300){
return true;
}


if($elem.height() > 400){
elemBottom = elemTop + $elem.height() - ($elem.height()/4);
}

return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


const tt_beforeunload = function() {
//Photo page
if( is_photo_page ){
var v_s = Math.round(new Date().getTime()/1000) - tt_elements[0].start;
if(v_s > 0 ){
tt_elements[0].total += v_s;
}
tt_elements[0].start=0;
if(tt_elements[0].total>0){
var ojbtt = new Object();
ojbtt.total = tt_elements[0].total;
ojbtt.element = tt_elements[0].element;
ojbtt.total = tt_elements[0].total;
tt_post(ojbtt);
tt_elements[0].total = 0;
}
return true;
}
if(typeof tt_interval !=="undefined"){
clearInterval(tt_interval);
}
tt_process_queue();

//Galeries
tt_elements.forEach(function(obj,index, object){
if(obj.start > 0){
var v_s = Math.round(new Date().getTime()/1000) - obj.start;
obj.total += v_s;
obj.start =0;
$(obj.element).data("tt_visible",3);
tt_post(obj);
}
tt_process_queue();
});

};

tt_init();
tt_Do();

if(!$('html').hasClass('sf')) {
window.addEventListener('beforeunload', tt_beforeunload);
}

var tt_interval;
if(!is_photo_page){
tt_interval = window.setInterval( tt_process_queue, 3000);
}else{
//FIRST VIEW!
var ojbtt = new Object();
ojbtt.total = 2;
ojbtt.element = tt_elements[0].element;
tt_post(ojbtt);
}

function tt_process_queue(){
var _elements = tt_elements_queue; 
tt_elements_queue = [];

if(_elements.length === 0){
return;
}

var url_post = "https://mh8061p5ld.execute-api.us-east-1.amazonaws.com/default/tt_photo_v2?key=1&seconds=1&json=" + encodeURIComponent(JSON.stringify(_elements)) ;
if($("body").hasClass("n_i_p")){
console.log(JSON.stringify(_elements));
return;
}
$.get( url_post );

}function gaTimming(category, eventname, secs){
// Feature detects Navigation Timing API support.
if (window.performance) {
// Gets the number of milliseconds since page load
// (and rounds the result since the value must be an integer).
var timeSincePageLoad = Math.round(performance.now());
if(typeof(secs)!=='undefined'){
timeSincePageLoad = secs;
}

if(typeof ga != "undefined"){
// Sends the timing hit to Google Analytics.
ga('send', 'timing', category , eventname, timeSincePageLoad);
}else{
console.log({'category':category , 'eventname':eventname, 'timeSincePageLoad':timeSincePageLoad});
}
}
}var en = {
access_granted: "Access granted!",
acrylic_options: "ACRYLIC OPTIONS",
add_photo_collection: "Add photo to collection",
all_contests: "All contests",
almost_there: "Almost there, the sky is the limit for your imagination.",
and_much_more: "and much more",
and_spaces: " and ",
are_you_sure: "Are you sure?",
be_inspired: "Be inspired",
billed_monthly_cancel_anytime: "Billed monthly. Cancel anytime.",
billing_address: 'Billing address',
bonus_how_to_become: "Bonus: How to Become a Better Photographer (A $39 Value)",
browse_photo_contests: "Browse photo contests",
build_your_photography_brand: "It’s your time to shine",
camera_rank: "Camera Rank: ",
cancel_upload: "cancel upload",
cancel: "Cancel",
cancelling_your_subscription: "Cancelling your subscription will remove the following features", // User membership cancelling
capture_the_magic_embrace_your_passion: "Capture the magic, embrace your passion, and make every click count. This is your moment!",
card_number: 'Card number',
change_image: "Change image",
city: 'City',
collection_exists: 'The collection already exists',
color: "COLOR",
complete_my_purchase: 'Complete my purchase',
confirm: "Confirm",
congrats: "Congrats!",
continue: "Continue",
country: 'Country',
create_collection: "Create Collection",
create_new_collection: "Create new collection",
create_your_profile: "Create your profile",
credit_card_payments_are_unavailable: "We apologize for any inconvenience as credit card payments are currently unavailable. Please try again in a few minutes.",
cvv_did_not_pass_verification: "CVV did not pass verification. <br />Please try again.",
day_left:"day left",
days_left:"days left",
delete: "Delete",
description_collection: "Description of collection",
description: "Description",
done: "Done",
dont_stop_now: "Don't stop now, having your photos in the top is a step away.",
edit: "Edit",
enhance_your_photography_skills: "Enhance Your Photography Skills with This Course <br><br> Within 24 to 48 hours you will receive an email with your access credentials. In the meantime, explore these new opportunities to share your photos with chances to win awesome prizes in the process.",
entries_per_day: "Entries per day",
error_creating_apple_client: "Error creating apple client:",
error_creating_paypal_checkout: "Error creating PayPal Checkout",
error_loading_security_form: "Error loading security form.",
error_please_try_again: "Error. Please try again.",
error_removing_payment_method: "Error removing your payment method.",
error_replacing_default_method: "Error replacing default method.",
expiration_month: 'Expiration month',
expiration_year: 'Expiration year',
explore: 'Explore',
expired: 'Expired',
exposure_boost_3x: "3X Exposure boost",
families_at_the_beach: "families at the beach",
fine_art_high_quality: "Fine art high quality canvas surface ",
first_name: 'First name',
follow: "Follow", // Coins: mycoins/leaderboard
following: "Following",
free_bonus: "Free Bonus - Only available for the next 20 minutes: How to Become a Better Photographer (A $39 Value)",
friends_hiking: "friends hiking",
get_a_high_resolution: "Get a high resolution version of the photo",
get_it_all_today: "Get it all today. Offer ends soon.",
get_started_by_sharing: "Get started by sharing your <br/>first photo and unlock all the contests.",
get_the_allcontest_pass: "Get The All-Contests Pass",
get_the_pro_plus: "Get the membership for only",
got_it: "Got it",
high_quality_archival: "High-quality archival inks on fine art papers",
hours: "Hours",
i_dont_want_the_offer: "I don\'t want this special offer.",
inches: "(Inches)",
information_incorrect_incomplete: "Some information is incorrect or incomplete. <br />Please try again.",
infused_dyes: "Infused dyes into 100% aluminum sheets.",
invalid_email_address: "Invalid email address",
is_the_card_valid: "Some information is incorrect. Is the card valid? <br />Please try again.",
its_your_time_to_shine: "It’s your time to shine!",
kodak_endura: "Kodak Endura premier fine-grain printing paper.",
last_name: 'Last name',
learn_more: "Learn more",
let_the_magic_begin: "Let the magic begin",
loading_please_wait: "Loading, please wait..",
location_rank: "Location Rank: ", // Ranks
looking_good: "Looking good!", // Sign up and welcome
make_private: "Make private",
make_public: "Make public",
mins: "Minutes",
monthly_plans: "Special Offer - Only $9.99/month<br/> Enjoy unlimited access!", // Upgrade
more_entries_per_contest: "More entries per contest",
name_collection: "Name of collection",
name: "Name",
network_error: "Network error! <br />Please try again.",
new_password: "New Password ",
new_username: "New Username ", // User settings profile
no_participants_yet: "No participants yet", // Challenges
no_photos_yet: "No photos yet, let’s change that.",
no_subscription_no_bounds: "No subscription. No bounds.",
no_thanks: "No thanks",
not_in_top_10: "Not in the Top 10%",
notifications:'Notifications',
now_you_are_ready: "Now you are ready!",
one_more_step: "One more step: Enter your email address below to receive your access credentials.",
over_100_contests: "Over 100 contests are calling YOUR name!",
payment_failed: 'Payment failed. It happens, just try again now, or after a couple of minutes.<br><br> If the error persists, please contact us at <a href="mailto:members@viewbug.com">members@viewbug.com</a> and we\'ll get you sorted in no time.',
payment_successful: "Payment successful!",
pending:"Pending",
people_at_a_party: "people at a party", // Gigs
photo_by: "Photo By ",
photo: "Photo", // Collections
photographers: " photographers.",
photos: "Photos",
pinpoint_location_of_the_submissions: "We are unable to pinpoint the exact location of the submissions. Why? Data can often be inadvertently removed -- tools like editing software may cause this.",
pinpoint_location_of_your_submission: "We are unable to pinpoint the exact location of your submission. Why? Data can often be inadvertently removed -- tools like editing software may cause this.",
please_correct_fields: "Please correct the following fields:",
please_try_again_br: "<br /><br />Please try again.",
please_try_again: "Please try again",
please_wait: "Please wait..",
postal_code: 'Postal code',
postal_zip_code: "Postal/ZIP code", // User settings billing
printed_directly: "Printed directly on to maple surfaced wood board.",
private_for_pro: "Private collections are only available for PRO members.",
private: "Private",
processing_payment: "Processing payment...",
publish_your_portfolio: "Publish your portfolio",
purchase_agreement: "Purchase agreement",
remove_from_profile: "Remove from profile",
request:"Request",
save_50_now: "Save 50% Now",
save: "Save",
say_hi: "Say Hi", // Members
secs: "Seconds",
select_3_photography_types: "You must select at least 3 types of photography",
select_ability_level: "Please select your ability level", // User settings customize experience
send:"Send",
sent: "Sent",
set_my_preferences: "Set my preferences",
show_in_profile: "Show in profile",
show_the_payment_sheet: "Show the payment sheet",
showcase_your_best_photos: "Showcase your best photos.<br> Get exposure, prizes and be rewarded.",
sign_up: "Sign Up",
size: "SIZE",
sizes: "SIZES",
skateboarders_doing_stunts: "skateboarders doing stunts",
some_information_is_incomplete: "Some information is incomplete or incorrect. <br />Please try again.",
something_went_wrong: "Oops.. something went wrong!.",
start_your_free_month: "Start your free month",
start_your_free_trial: "Start Your Free Trial",
stay_in_the_game: "Stay in the game with this limited-time offer.",
step2_3: "Step 2/3",
step3_3: "Step 3/3",
success: "Success",
thank_you_you_will_receive_your_access: "Thank you, you will receive your access details via email within 24 to 48 hours.<br><br>In the meantime, get inspired on what to photograph next.",
the_top_is_around_the_corner: "The top is around the corner, we cannot wait to see more of your photos.",
this_offer_is_not_available: "This offer is NOT available at any other time or place!",
this_photo_will_be_added: "This photo will be added to your profile",
total_entries: "Total entries",
tourists_in_your_city: "tourists in your city",
try_again: "Try again",
turn_your_photos_into: "Turn your photos into beautifully framed wall art. ",
type: "TYPE", // Print
unable_to_process_your_payment: "Oops! Unable to process your payment.",
unlimited_contests: "Unlimited contests",
unlimited_uploads: "Unlimited uploads",
unlock_all_the_contests: "Unlock all the contests",
unlock_them_all: "UNLOCK them all for one incredibly low price, with no subscription.",
unsubscribe_from_all_emails: "Are you sure you want to unsubscribe from all emails?", // User settings notifications
unsubscribe_from_all: "Unsubscribe from all",
update_collection: "Update collection",
upload_from_computer: "Upload From Computer", // Upload /upload
upload_from_device: "Upload From Device",
uploading_process_cancelled: "Uploading process cancelled by user.",
use_another_challenge_title: 'Use another Challenge Title.',
verify_camera_used: "We are unable to verify the camera used to shoot your submission. Why? Data can often be inadvertently removed -- tools like editing software may cause this.",
view_all:'View All',
we_are_sorry_to_see_you_go: "We're sorry to see you go.<br><div>Your renewal has been cancelled and<br /> you will not be charged once your membership expires.</div>",
we_got_your_photo: 'We got your photo, you are now entered in our<span class="mobile-complete"></span> photo of the week contest',
we_want_to_make_sure_we_can_notify: "We want to make sure we can notify you if you win a prize or award.",
within_24_to_48_hours: "Within 24 to 48 hours you will receive an email with your access credentials.<br><br> In the meantime, signup to VIEWBUG for FREE and be inspired.",
yes_i_want_it: "Yes, I want it!",
get_one_time_offer: "Get One-Time Offer!",
yes: "Yes",
you_are_getting_closer: "You are getting closer, keep it up.",
you_are_on_a_roll: "You are on a roll, stay creative!",
you_can_now_enjoy_the_perks: "Awesome!<br><div>You can now enjoy the perks and full benefits of your membership without any interruptions.<br /> Get started by browsing these BIG opportunities closing soon!</div>",
you_can_select_up_to_1: "You can only select up to 1 ability level",
you_have_taken_the_first_step: "You have taken the first step towards a world of awesomeness.",
you_need_to_add_short_blurb: 'You need to add <span class="span-block-600">a Short Blurb.',
you_need_to_add_title: 'You need to <span class="span-block-600">add a title.</span>',
you_need_to_choose_banner: 'You need to choose <span class="span-block-600">a Challenge Banner.',
you_need_to_choose_category: 'You need to choose <span class="span-block-600">at least 1 category.',
your_best_photo_performed_well: "Your best photo performed well. Keep up the good job!",
your_own_website: "Your own website",
your_photography_is_ready: "Your photography is ready to be in the top, explore more contests today.",
your_photos_popular: "Your photos are becoming popular, keep sharing them.",
};

function Language(lang)
{
var __construct = function() { if (eval('typeof ' + lang) == 'undefined') {lang = "en"; }return; } ;

this._gt = function(str, defaultStr) {

var retStr = eval('eval(lang).' + str);
if (typeof retStr != 'undefined')
{
return retStr.replace(/&lsquo;/g, "'");;
} else {
if (typeof defaultStr != 'undefined')
{
return defaultStr.replace(/&lsquo;/g, "'");
} else {
return eval('en.' + str);
}
}
};
}
if(typeof lang === "undefined"){
var lang = "en";
}
var translator = new Language(lang);
var langPath = (lang!=="en") ? "/" + lang : "";


function changelang(lang){
let link = document.querySelector("[hreflang="+lang+"]").attributes["href"];
if(typeof link !== "undefined"){
let redto = link.nodeValue;
redto = redto.replace("dev.com","dev.vb2");
if(redto.indexOf("?")===-1){
document.location = redto + "?set_locale=" + lang;
}else{
document.location= redto + "&set_locale=" + lang;;
}
}
}
document.addEventListener("DOMContentLoaded", function(event) { 
jQuery("li.langs_flag").on("click", function(e) {
jQuery(".langs_flag").toggleClass("clicked");
});

});

$(document).ready(function() {
$('#domaininput').focus();

//Prevents right clicking on entire page
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});

if($('body.portfolios .normalNavbar column .box-menu .button.signup').length > 0){
$('body.portfolios .normalNavbar column .box-menu .first a').attr('href','https://websites.viewbug.com/settings');
}

//Shows popup for purchased print
if($('body').hasClass('saleprints')){
if($('body').hasClass('successpp')){
successPrintPayment();
}
//cleans invoice param from url
window.history.pushState({}, document.title, "/prints");
}

//Show instructions video on landing page
/*$('#instructions.landing .icon-instructions').click(function(e){
$.get("/portfolio/settings/instructions",
function(resp){
$('#main_content .content').append(resp);
$('#video-instructive-landing').fadeIn(500);
//$('.explore-view-more').removeClass('loading-challenges').html('Load more');
}
);
});*/

/*if($(window).height() <= 760){
$('#video-instructive-landing h1').css({'margin-top':'10px'});
}else{
$('#video-instructive-landing h1').css({'margin-top':'100px'});
}
$('#video-instructive-landing').fadeIn(500);*/

if($('#top_upgrade_special .img-over').length > 0){
overimPosition();
}

/*$('.upgradenow_learn_more').click(function(e) {
$('html, body').animate({
scrollTop: $('#icons_features').offset().top
}, 750);
});*/

$(document).on('click','.dwn-photo', function(e) {
e.preventDefault();
return;
//downloadPhotoPopup(this);
});

//Hides cover on customize
if($('body').hasClass('istemp')){
$('.istemp .content .loading-cover').fadeOut(200);
}

//Secondary envent on buy print click, to prevent double scroll
/*if($('#sellphoto').length > 0 && !$('html').hasClass('mobile')){
$(document).on('click','#profile-cover-user .buy-print', function(e) {
$('#profile-cover-user').css({'overflow':'hidden'});
});

$(document).on('click','#profile-cover-user #purchaseheadertitle .pay_close', function(e) {
$('#profile-cover-user').css({'overflow':'auto'});
});
}*/

btnPosition();
});


$(window).resize(function() {
if($('#top_upgrade_special .img-over').length > 0){
overimPosition();
}
btnPosition();

if($('body').hasClass('clientcollection')){
//Download popup
smallScreen();
resizeCollectionPopPortfolio();
}
});


function successPrintPayment(from){
$('#sellphoto').fadeOut(300);
var h1text = 'Thank you!';
var invoice = $('#bg-pop-msgbuyprint').attr('data-invoice');
var buyem = $('#bg-pop-msgbuyprint').attr('data-buyem');
var text = 'Your print will be ready soon.';
if(typeof(invoice)!=='undefined' && typeof(buyem)!=='undefined'){
text = 'Your print will be ready soon.<br/> Invoice: '+invoice+' <br/> Email sent to: '+buyem;
$('#bg-pop-msgbuyprint').addClass('printpurchased');
}
if(typeof(from)!=='undefined' && from == 'down'){
h1text = 'Great selection!';
text = 'Your download will be ready soon.'
text = 'We\'ll email you the link to download <br/> your photos within 24 to 48 hours :)'
}
$('#bg-pop-msgbuyprint #msgbuyprint h1').html(h1text)
$('#bg-pop-msgbuyprint #msgbuyprint p').html(text)
$('#bg-pop-msgbuyprint').fadeIn(500);
}

//Close video instructive
function closeVideoIns(obj){
if($('#instructions .icon-instructions').hasClass('wiz')){
location.reload();
}
$('.complete-screen-popup, #bg-pop-msgbuyprint').fadeOut(500);
setTimeout(function() {
$('.share-pp, .instr-pp').remove();
}, 500);
}

function overimPosition(){
/*var ww = $(window).width();
var imgw = $('#top_upgrade_special .img-over').width();
var left = (ww - imgw)/2;
$('#top_upgrade_special .img-over').css({'left':left});*/
}

function showInstructuionsPopup(param){
$.get("/portfolio/settings/instructions",
function(resp){
$('#main_content section.content').append(resp);
if(param > 1){
$('.complete-screen-popup.instr-pp .video-text iframe').attr('src','https://www.youtube.com/embed/uABvSuzad6E?rel=0&modestbranding=1');
$('.complete-screen-popup.instr-pp .contents .contact-help').html('<div class="contact-help"><p>Need more help? <a href="http://help.viewbug.com/" target="_blank">Contact us!</a></p></div>');
}
$('.complete-screen-popup.instr-pp').fadeIn(500);
}
);
}

function btnPosition(){
if($('column .signature-thumb')){
var relw = $('columns > column.signature-thumb a .relative img').width();
var btnw = $('columns > column.signature-thumb a .overlay').width();
var op = (relw-btnw)/2;
$('column.signature-thumb a .overlay').css({'margin-left':op+'px'});
}
}

function downloadPhotoPopup(obj){
//openPhotoSale();
var screen = '';
if($(window).width() < 600){
screen = '&small';
}

var photo_id = 0;
var pw = 0;
var ph = 0;
var album_id = 0;
if($('body').hasClass('likinth') || $('#profile-cover-user').hasClass('highlight-theme')){
var imginfo = $(obj).parent('a').children('img');
photo_id = $(obj).attr('id').replace('dwn-','');
pw = imginfo.attr('orw');
ph = imginfo.attr('orh');
if($('#profile-cover-user').hasClass('highlight-theme')){
album_id = $('.pp-highlight-gallery #content .photo-gallery-container').attr('al');
}else{
album_id = $('#profile-cover-user .gallery').attr('alb');
}
}else if($('#profile-cover-user').hasClass('josselin-theme') || $('#profile-cover-user').hasClass('cascade')){
var imginfo = $(obj).parent('.thumbnail-photo');
photo_id = imginfo.attr('id');
pw = imginfo.children('input').attr('orw');
ph = imginfo.children('input').attr('orh');
album_id = $('#profile-cover-user .photo-gallery-container').attr('al');
}else{
//Get album_id from attribute
if($('#profile-cover-user').hasClass('horizline-theme')){
album_id = $('#horizline-content .photo-gallery-container ul').attr('id');
}else if($('#profile-cover-user').hasClass('panorama-theme')){
album_id = $('#panorama-content .panorama-gallery ul').attr('id');
}else if($('#profile-cover-user').hasClass('ciera-theme')){
album_id = $('#theme-content .photo-gallery-container ul').attr('id');
}else if($('#profile-cover-user').hasClass('chance-theme')){
album_id = $('#chance-content .photo-gallery-container ul').attr('id');
}else if($('#profile-cover-user').hasClass('panorama-theme')){
album_id = $('#panorama-content .panorama-gallery ul').attr('id');
}else if($('#profile-cover-user').hasClass('aura-theme')){
album_id = $('#aura-content .photo-gallery-container ul').attr('id');
}

photo_id = $(obj).parent('li').attr('id');
var media_data = $(obj).parent('li').children('#media_data');
pw = media_data.attr('orw');
ph = media_data.attr('orh');
}

if(photo_id === 0){
return;
}

var geturl = "/settings/getsalepopup?md="+photo_id+"&alb="+album_id;
$.get(geturl,function(resp){
var container_id = '#profile-cover-user';
$(container_id).append(resp);
if(ph > pw){
$(container_id+' .sale-container').addClass('vert');
}

$('body').addClass('apply_sale_resize');
$(container_id+' .sale-container').attr('photo_id',photo_id);
resizeCollectionPopPortfolio();
$(container_id+' .sale-container').animate({opacity:1},500); 
loadBraintree();
smallScreenPort();
}
);

}


function resizeCollectionPopPortfolio() {
if($('body').hasClass('apply_sale_resize')) {

var photoelem = $('#profile-cover-user .sale-container').attr('photo_id');
var listelem = $('.photo-gallery-container ul li#'+photoelem);
var last_img_height = $(listelem).children('#media_data').attr('orh');
var last_img_width = $(listelem).children('#media_data').attr('orw');

if($('#orig_width').length > 0) {
last_img_width = $('#orig_width').val();
last_img_height = $('#orig_height').val();
}

var container_width = $('.photo-container').width();
var container_height = $('.photo-container').height();
var available_width = container_width - 401;

var img_ratio = last_img_height / last_img_width;
var img_width = available_width;
var img_height = available_width * img_ratio;

if(container_height < img_height) {
img_height = container_height;
img_ratio = last_img_width / last_img_height;
img_width = container_height * img_ratio;
}

if($(window).width() > 965){
$('.photo-container .bg-img-container').width(img_width);
$('.photo-container .bg-img').width(img_width).height(img_height);
}
}
}

function smallScreenPort(){
/*if($(window).height() < 800 || $(window).width() < 600){
$('.sale-container').addClass('smlscrn');
}else{
$('.sale-container').removeClass('smlscrn');
}
if($(window).height() < 800){
$('.sale-container').addClass('scrhght');
}*/
}/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
;(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
if ($.fn.cycle.debug)
log(s);
}
function log() {
/*global console */
if (window.console && console.log)
console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
return el.cyclePause;
};


// the options arg can be...
//a number- indicates an immediate transition should occur to the given slide index
//a string- 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//an object - properties to control the slideshow
//
// the arg2 arg can be...
//the name of an fx (only used in conjunction with a numeric value for 'options')
//the value true (only used in first arg == 'resume') and indicates
// that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
var o = { s: this.selector, c: this.context };

// in 1.3+ we can fix mistakes with the ready state
if (this.length === 0 && options != 'stop') {
if (!$.isReady && o.s) {
log('DOM not ready, queuing slideshow');
$(function() {
$(o.s,o.c).cycle(options,arg2);
});
return this;
}
// is your DOM ready?http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
return this;
}

// iterate the matched nodeset
return this.each(function() {
var opts = handleArguments(this, options, arg2);
if (opts === false)
return;

opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;

// stop existing slideshow for this container (if there is one)
if (this.cycleTimeout)
clearTimeout(this.cycleTimeout);
this.cycleTimeout = this.cyclePause = 0;
this.cycleStop = 0; // issue #108

var $cont = $(this);
var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
var els = $slides.get();

if (els.length < 2) {
log('terminating; too few slides: ' + els.length);
return;
}

var opts2 = buildOptions($cont, $slides, els, opts, o);
if (opts2 === false)
return;

var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

// if it's an auto slideshow, kick it off
if (startTime) {
startTime += (opts2.delay || 0);
if (startTime < 10)
startTime = 10;
debug('first timeout: ' + startTime);
this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
}
});
};

function triggerPause(cont, byHover, onPager) {
var opts = $(cont).data('cycle.opts');
if (!opts)
return;
var paused = !!cont.cyclePause;
if (paused && opts.paused)
opts.paused(cont, opts, byHover, onPager);
else if (!paused && opts.resumed)
opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
if (cont.cycleStop === undefined)
cont.cycleStop = 0;
if (options === undefined || options === null)
options = {};
if (options.constructor == String) {
switch(options) {
case 'destroy':
case 'stop':
var opts = $(cont).data('cycle.opts');
if (!opts)
return false;
cont.cycleStop++; // callbacks look for change
if (cont.cycleTimeout)
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout = 0;
if (opts.elements)
$(opts.elements).stop();
$(cont).removeData('cycle.opts');
if (options == 'destroy')
destroy(cont, opts);
return false;
case 'toggle':
cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
checkInstantResume(cont.cyclePause, arg2, cont);
triggerPause(cont);
return false;
case 'pause':
cont.cyclePause = 1;
triggerPause(cont);
return false;
case 'resume':
cont.cyclePause = 0;
checkInstantResume(false, arg2, cont);
triggerPause(cont);
return false;
case 'prev':
case 'next':
opts = $(cont).data('cycle.opts');
if (!opts) {
log('options not found, "prev/next" ignored');
return false;
}
if (typeof arg2 == 'string') 
opts.oneTimeFx = arg2;
$.fn.cycle[options](opts);
return false;
default:
options = { fx: options };
}
return options;
}
else if (options.constructor == Number) {
// go to the requested slide
var num = options;
options = $(cont).data('cycle.opts');
if (!options) {
log('options not found, can not advance slide');
return false;
}
if (num < 0 || num >= options.elements.length) {
log('invalid slide index: ' + num);
return false;
}
options.nextSlide = num;
if (cont.cycleTimeout) {
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout = 0;
}
if (typeof arg2 == 'string')
options.oneTimeFx = arg2;
go(options.elements, options, 1, num >= options.currSlide);
return false;
}
return options;

function checkInstantResume(isPaused, arg2, cont) {
if (!isPaused && arg2 === true) { // resume now!
var options = $(cont).data('cycle.opts');
if (!options) {
log('options not found, can not resume');
return false;
}
if (cont.cycleTimeout) {
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout = 0;
}
go(options.elements, options, 1, !options.backwards);
}
}
}

function removeFilter(el, opts) {
if (!$.support.opacity && opts.cleartype && el.style.filter) {
try { el.style.removeAttribute('filter'); }
catch(smother) {} // handle old opera versions
}
}

// unbind event handlers
function destroy(cont, opts) {
if (opts.next)
$(opts.next).unbind(opts.prevNextEvent);
if (opts.prev)
$(opts.prev).unbind(opts.prevNextEvent);

if (opts.pager || opts.pagerAnchorBuilder)
$.each(opts.pagerAnchors || [], function() {
this.unbind().remove();
});
opts.pagerAnchors = null;
$(cont).unbind('mouseenter.cycle mouseleave.cycle');
if (opts.destroy) // callback
opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
var startingSlideSpecified;
// support metadata plugin (v1.0 and v2.0)
var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
if (meta)
opts = $.extend(opts, meta);
if (opts.autostop)
opts.countdown = opts.autostopCount || els.length;

var cont = $cont[0];
$cont.data('cycle.opts', opts);
opts.$cont = $cont;
opts.stopCount = cont.cycleStop;
opts.elements = els;
opts.before = opts.before ? [opts.before] : [];
opts.after = opts.after ? [opts.after] : [];

// push some after callbacks
if (!$.support.opacity && opts.cleartype)
opts.after.push(function() { removeFilter(this, opts); });
if (opts.continuous)
opts.after.push(function() { go(els,opts,0,!opts.backwards); });

saveOriginalOpts(opts);

// clearType corrections
if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
clearTypeFix($slides);

// container requires non-static position so that slides can be position within
if ($cont.css('position') == 'static')
$cont.css('position', 'relative');
if (opts.width)
$cont.width(opts.width);
if (opts.height && opts.height != 'auto')
$cont.height(opts.height);

if (opts.startingSlide !== undefined) {
opts.startingSlide = parseInt(opts.startingSlide,10);
if (opts.startingSlide >= els.length || opts.startSlide < 0)
opts.startingSlide = 0; // catch bogus input
else 
startingSlideSpecified = true;
}
else if (opts.backwards)
opts.startingSlide = els.length - 1;
else
opts.startingSlide = 0;

// if random, mix up the slide array
if (opts.random) {
opts.randomMap = [];
for (var i = 0; i < els.length; i++)
opts.randomMap.push(i);
opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
if (startingSlideSpecified) {
// try to find the specified starting slide and if found set start slide index in the map accordingly
for ( var cnt = 0; cnt < els.length; cnt++ ) {
if ( opts.startingSlide == opts.randomMap[cnt] ) {
opts.randomIndex = cnt;
}
}
}
else {
opts.randomIndex = 1;
opts.startingSlide = opts.randomMap[1];
}
}
else if (opts.startingSlide >= els.length)
opts.startingSlide = 0; // catch bogus input
opts.currSlide = opts.startingSlide || 0;
var first = opts.startingSlide;

// set position and zIndex on all the slides
$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
var z;
if (opts.backwards)
z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
else
z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
$(this).css('z-index', z);
});

// make sure first slide is visible
$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
removeFilter(els[first], opts);

// stretch slides
if (opts.fit) {
if (!opts.aspect) {
if (opts.width)
$slides.width(opts.width);
if (opts.height && opts.height != 'auto')
$slides.height(opts.height);
} else {
$slides.each(function(){
var $slide = $(this);
var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
if( opts.width && $slide.width() != opts.width ) {
$slide.width( opts.width );
$slide.height( opts.width / ratio );
}

if( opts.height && $slide.height() < opts.height ) {
$slide.height( opts.height );
$slide.width( opts.height * ratio );
}
});
}
}

if (opts.center && ((!opts.fit) || opts.aspect)) {
$slides.each(function(){
var $slide = $(this);
$slide.css({
"margin-left": opts.width ?
((opts.width - $slide.width()) / 2) + "px" :
0,
"margin-top": opts.height ?
((opts.height - $slide.height()) / 2) + "px" :
0
});
});
}

if (opts.center && !opts.fit && !opts.slideResize) {
$slides.each(function(){
var $slide = $(this);
$slide.css({
"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
});
});
}

// stretch container
var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
var maxw = 0, maxh = 0;
for(var j=0; j < els.length; j++) {
var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
if (!w) w = e.offsetWidth || e.width || $e.attr('width');
if (!h) h = e.offsetHeight || e.height || $e.attr('height');
maxw = w > maxw ? w : maxw;
maxh = h > maxh ? h : maxh;
}
if (opts.containerResize && maxw > 0 && maxh > 0)
$cont.css({width:maxw+'px',height:maxh+'px'});
if (opts.containerResizeHeight && maxh > 0)
$cont.css({height:maxh+'px'});
}

var pauseFlag = false;// https://github.com/malsup/cycle/issues/44
if (opts.pause)
$cont.bind('mouseenter.cycle', function(){
pauseFlag = true;
this.cyclePause++;
triggerPause(cont, true);
}).bind('mouseleave.cycle', function(){
if (pauseFlag)
this.cyclePause--;
triggerPause(cont, true);
});

if (supportMultiTransitions(opts) === false)
return false;

// apparently a lot of people use image slideshows without height/width attributes on the images.
// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
var requeue = false;
options.requeueAttempts = options.requeueAttempts || 0;
$slides.each(function() {
// try to get height/width of each slide
var $el = $(this);
this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

if ( $el.is('img') ) {
var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
// don't requeue for images that are still loading but have a valid size
if (loading) {
if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
requeue = true;
return false; // break each loop
}
else {
log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
}
}
}
return true;
});

if (requeue)
return false;

opts.cssBefore = opts.cssBefore || {};
opts.cssAfter = opts.cssAfter || {};
opts.cssFirst = opts.cssFirst || {};
opts.animIn = opts.animIn || {};
opts.animOut = opts.animOut || {};

$slides.not(':eq('+first+')').css(opts.cssBefore);
$($slides[first]).css(opts.cssFirst);

if (opts.timeout) {
opts.timeout = parseInt(opts.timeout,10);
// ensure that timeout and speed settings are sane
if (opts.speed.constructor == String)
opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
if (!opts.sync)
opts.speed = opts.speed / 2;

var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
while((opts.timeout - opts.speed) < buffer) // sanitize timeout
opts.timeout += opts.speed;
}
if (opts.easing)
opts.easeIn = opts.easeOut = opts.easing;
if (!opts.speedIn)
opts.speedIn = opts.speed;
if (!opts.speedOut)
opts.speedOut = opts.speed;

opts.slideCount = els.length;
opts.currSlide = opts.lastSlide = first;
if (opts.random) {
if (++opts.randomIndex == els.length)
opts.randomIndex = 0;
opts.nextSlide = opts.randomMap[opts.randomIndex];
}
else if (opts.backwards)
opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
else
opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

// run transition init fn
if (!opts.multiFx) {
var init = $.fn.cycle.transitions[opts.fx];
if ($.isFunction(init))
init($cont, $slides, opts);
else if (opts.fx != 'custom' && !opts.multiFx) {
log('unknown transition: ' + opts.fx,'; slideshow terminating');
return false;
}
}

// fire artificial events
var e0 = $slides[first];
if (!opts.skipInitializationCallbacks) {
if (opts.before.length)
opts.before[0].apply(e0, [e0, e0, opts, true]);
if (opts.after.length)
opts.after[0].apply(e0, [e0, e0, opts, true]);
}
if (opts.next)
$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
if (opts.prev)
$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
if (opts.pager || opts.pagerAnchorBuilder)
buildPager(els,opts);

exposeAddSlide(opts, els);

return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
opts.original = { before: [], after: [] };
opts.original.cssBefore = $.extend({}, opts.cssBefore);
opts.original.cssAfter= $.extend({}, opts.cssAfter);
opts.original.animIn= $.extend({}, opts.animIn);
opts.original.animOut= $.extend({}, opts.animOut);
$.each(opts.before, function() { opts.original.before.push(this); });
$.each(opts.after,function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
var i, tx, txs = $.fn.cycle.transitions;
// look for multiple effects
if (opts.fx.indexOf(',') > 0) {
opts.multiFx = true;
opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
// discard any bogus effect names
for (i=0; i < opts.fxs.length; i++) {
var fx = opts.fxs[i];
tx = txs[fx];
if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
log('discarding unknown transition: ',fx);
opts.fxs.splice(i,1);
i--;
}
}
// if we have an empty list then we threw everything away!
if (!opts.fxs.length) {
log('No valid transitions named; slideshow terminating.');
return false;
}
}
else if (opts.fx == 'all') {// auto-gen the list of transitions
opts.multiFx = true;
opts.fxs = [];
for (var p in txs) {
if (txs.hasOwnProperty(p)) {
tx = txs[p];
if (txs.hasOwnProperty(p) && $.isFunction(tx))
opts.fxs.push(p);
}
}
}
if (opts.multiFx && opts.randomizeEffects) {
// munge the fxs array to make effect selection random
var r1 = Math.floor(Math.random() * 20) + 30;
for (i = 0; i < r1; i++) {
var r2 = Math.floor(Math.random() * opts.fxs.length);
opts.fxs.push(opts.fxs.splice(r2,1)[0]);
}
debug('randomized fx sequence: ',opts.fxs);
}
return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
opts.addSlide = function(newSlide, prepend) {
var $s = $(newSlide), s = $s[0];
if (!opts.autostopCount)
opts.countdown++;
els[prepend?'unshift':'push'](s);
if (opts.els)
opts.els[prepend?'unshift':'push'](s); // shuffle needs this
opts.slideCount = els.length;

// add the slide to the random map and resort
if (opts.random) {
opts.randomMap.push(opts.slideCount-1);
opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
}

$s.css('position','absolute');
$s[prepend?'prependTo':'appendTo'](opts.$cont);

if (prepend) {
opts.currSlide++;
opts.nextSlide++;
}

if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
clearTypeFix($s);

if (opts.fit && opts.width)
$s.width(opts.width);
if (opts.fit && opts.height && opts.height != 'auto')
$s.height(opts.height);
s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

$s.css(opts.cssBefore);

if (opts.pager || opts.pagerAnchorBuilder)
$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

if ($.isFunction(opts.onAddSlide))
opts.onAddSlide($s);
else
$s.hide(); // default behavior
};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
fx = fx || opts.fx;
opts.before = []; opts.after = [];
opts.cssBefore = $.extend({}, opts.original.cssBefore);
opts.cssAfter= $.extend({}, opts.original.cssAfter);
opts.animIn= $.extend({}, opts.original.animIn);
opts.animOut= $.extend({}, opts.original.animOut);
opts.fxFn = null;
$.each(opts.original.before, function() { opts.before.push(this); });
$.each(opts.original.after,function() { opts.after.push(this); });

// re-init
var init = $.fn.cycle.transitions[fx];
if ($.isFunction(init))
init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

// opts.busy is true if we're in the middle of an animation
if (manual && opts.busy && opts.manualTrump) {
// let manual transitions requests trump active ones
debug('manualTrump in go(), stopping active transition');
$(els).stop(true,true);
opts.busy = 0;
clearTimeout(p.cycleTimeout);
}

// don't begin another timeout-based transition if there is one active
if (opts.busy) {
debug('transition active, ignoring new tx request');
return;
}


// stop cycling if we have an outstanding stop request
if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
return;

// check to see if we should stop cycling based on autostop options
if (!manual && !p.cyclePause && !opts.bounce &&
((opts.autostop && (--opts.countdown <= 0)) ||
(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
if (opts.end)
opts.end(opts);
return;
}

// if slideshow is paused, only transition on a manual trigger
var changed = false;
if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
changed = true;
var fx = opts.fx;
// keep trying to get the slide size if we don't have it yet
curr.cycleH = curr.cycleH || $(curr).height();
curr.cycleW = curr.cycleW || $(curr).width();
next.cycleH = next.cycleH || $(next).height();
next.cycleW = next.cycleW || $(next).width();

// support multiple transition types
if (opts.multiFx) {
if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
opts.lastFx = 0;
else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
opts.lastFx = opts.fxs.length - 1;
fx = opts.fxs[opts.lastFx];
}

// one-time fx overrides apply to:$('div').cycle(3,'zoom');
if (opts.oneTimeFx) {
fx = opts.oneTimeFx;
opts.oneTimeFx = null;
}

$.fn.cycle.resetState(opts, fx);

// run the before callbacks
if (opts.before.length)
$.each(opts.before, function(i,o) {
if (p.cycleStop != opts.stopCount) return;
o.apply(next, [curr, next, opts, fwd]);
});

// stage the after callacks
var after = function() {
opts.busy = 0;
$.each(opts.after, function(i,o) {
if (p.cycleStop != opts.stopCount) return;
o.apply(next, [curr, next, opts, fwd]);
});
if (!p.cycleStop) {
// queue next transition
queueNext();
}
};

debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);

// get ready to perform the transition
opts.busy = 1;
if (opts.fxFn) // fx function provided?
opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
else
$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
}
else {
queueNext();
}

if (changed || opts.nextSlide == opts.currSlide) {
// calculate the next slide
var roll;
opts.lastSlide = opts.currSlide;
if (opts.random) {
opts.currSlide = opts.nextSlide;
if (++opts.randomIndex == els.length) {
opts.randomIndex = 0;
opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
}
opts.nextSlide = opts.randomMap[opts.randomIndex];
if (opts.nextSlide == opts.currSlide)
opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
}
else if (opts.backwards) {
roll = (opts.nextSlide - 1) < 0;
if (roll && opts.bounce) {
opts.backwards = !opts.backwards;
opts.nextSlide = 1;
opts.currSlide = 0;
}
else {
opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
opts.currSlide = roll ? 0 : opts.nextSlide+1;
}
}
else { // sequence
roll = (opts.nextSlide + 1) == els.length;
if (roll && opts.bounce) {
opts.backwards = !opts.backwards;
opts.nextSlide = els.length-2;
opts.currSlide = els.length-1;
}
else {
opts.nextSlide = roll ? 0 : opts.nextSlide+1;
opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
}
}
}
if (changed && opts.pager)
opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);

function queueNext() {
// stage the next transition
var ms = 0, timeout = opts.timeout;
if (opts.timeout && !opts.continuous) {
ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
if (opts.fx == 'shuffle')
ms -= opts.speedOut;
}
else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
ms = 10;
if (ms > 0)
p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
}
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
$(pager).each(function() {
$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
});
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
if (opts.timeoutFn) {
// call user provided calc fn
var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
t += opts.speed;
debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
if (t !== false)
return t;
}
return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
var val = moveForward ? 1 : -1;
var els = opts.elements;
var p = opts.$cont[0], timeout = p.cycleTimeout;
if (timeout) {
clearTimeout(timeout);
p.cycleTimeout = 0;
}
if (opts.random && val < 0) {
// move back to the previously display slide
opts.randomIndex--;
if (--opts.randomIndex == -2)
opts.randomIndex = els.length-2;
else if (opts.randomIndex == -1)
opts.randomIndex = els.length-1;
opts.nextSlide = opts.randomMap[opts.randomIndex];
}
else if (opts.random) {
opts.nextSlide = opts.randomMap[opts.randomIndex];
}
else {
opts.nextSlide = opts.currSlide + val;
if (opts.nextSlide < 0) {
if (opts.nowrap) return false;
opts.nextSlide = els.length - 1;
}
else if (opts.nextSlide >= els.length) {
if (opts.nowrap) return false;
opts.nextSlide = 0;
}
}

var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
if ($.isFunction(cb))
cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
go(els, opts, 1, moveForward);
return false;
}

function buildPager(els, opts) {
var $p = $(opts.pager);
$.each(els, function(i,o) {
$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
});
opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
var a;
if ($.isFunction(opts.pagerAnchorBuilder)) {
a = opts.pagerAnchorBuilder(i,el);
debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
}
else
a = '<a href="#">'+(i+1)+'</a>';

if (!a)
return;
var $a = $(a);
// don't reparent if anchor is in the dom
if ($a.parents('body').length === 0) {
var arr = [];
if ($p.length > 1) {
$p.each(function() {
var $clone = $a.clone(true);
$(this).append($clone);
arr.push($clone[0]);
});
$a = $(arr);
}
else {
$a.appendTo($p);
}
}

opts.pagerAnchors =opts.pagerAnchors || [];
opts.pagerAnchors.push($a);

var pagerFn = function(e) {
e.preventDefault();
opts.nextSlide = i;
var p = opts.$cont[0], timeout = p.cycleTimeout;
if (timeout) {
clearTimeout(timeout);
p.cycleTimeout = 0;
}
var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
if ($.isFunction(cb))
cb(opts.nextSlide, els[opts.nextSlide]);
go(els,opts,1,opts.currSlide < i); // trigger the trans
//return false; // <== allow bubble
};

if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
$a.hover(pagerFn, function(){/* no-op */} );
}
else {
$a.bind(opts.pagerEvent, pagerFn);
}

if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
$a.bind('click.cycle', function(){return false;}); // suppress click

var cont = opts.$cont[0];
var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
if (opts.pauseOnPagerHover) {
$a.hover(
function() { 
pauseFlag = true;
cont.cyclePause++; 
triggerPause(cont,true,true);
}, function() { 
if (pauseFlag)
cont.cyclePause--; 
triggerPause(cont,true,true);
} 
);
}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
var hops, l = opts.lastSlide, c = opts.currSlide;
if (fwd)
hops = c > l ? c - l : opts.slideCount - l;
else
hops = c < l ? l - c : l + opts.slideCount - c;
return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
debug('applying clearType background-color hack');
function hex(s) {
s = parseInt(s,10).toString(16);
return s.length < 2 ? '0'+s : s;
}
function getBg(e) {
for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
var v = $.css(e,'background-color');
if (v && v.indexOf('rgb') >= 0 ) {
var rgb = v.match(/\d+/g);
return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}
if (v && v != 'transparent')
return v;
}
return '#ffffff';
}
$slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
$(opts.elements).not(curr).hide();
if (typeof opts.cssBefore.opacity == 'undefined')
opts.cssBefore.opacity = 1;
opts.cssBefore.display = 'block';
if (opts.slideResize && w !== false && next.cycleW > 0)
opts.cssBefore.width = next.cycleW;
if (opts.slideResize && h !== false && next.cycleH > 0)
opts.cssBefore.height = next.cycleH;
opts.cssAfter = opts.cssAfter || {};
opts.cssAfter.display = 'none';
$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
var $l = $(curr), $n = $(next);
var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
$n.css(opts.cssBefore);
if (speedOverride) {
if (typeof speedOverride == 'number')
speedIn = speedOut = speedOverride;
else
speedIn = speedOut = 1;
easeIn = easeOut = null;
}
var fn = function() {
$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
cb();
});
};
$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
$l.css(opts.cssAfter);
if (!opts.sync) 
fn();
});
if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
fade: function($cont, $slides, opts) {
$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
opts.before.push(function(curr,next,opts) {
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.opacity = 0;
});
opts.animIn= { opacity: 1 };
opts.animOut= { opacity: 0 };
opts.cssBefore = { top: 0, left: 0 };
}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
activePagerClass: 'activeSlide', // class name used for the active pager link
after:null,// transition callback (scope set to element that was shown):function(currSlideElement, nextSlideElement, options, forwardFlag)
allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
animIn:null,// properties that define how the slide animates in
animInDelay:0,// allows delay before next slide transitions in
animOut:null,// properties that define how the slide animates out
animOutDelay:0,// allows delay before current slide transitions out
aspect:false,// preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
autostop:0,// true to end slideshow after X transitions (where X == slide count)
autostopCount:0,// number of transitions (optionally used with autostop to define X)
backwards:false,// true to start slideshow at last slide and move backwards through the stack
before:null,// transition callback (scope set to element to be shown):function(currSlideElement, nextSlideElement, options, forwardFlag)
center:null,// set to true to have cycle add top/left margin to each slide (use with width and height options)
cleartype:!$.support.opacity,// true if clearType corrections should be applied (for IE)
cleartypeNoBg:false,// set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
containerResize:1,// resize container to fit largest slide
containerResizeHeight:1,// resize containers height to fit the largest slide but leave the width dynamic
continuous:0,// true to start next transition immediately after current one completes
cssAfter:null,// properties that defined the state of the slide after transitioning out
cssBefore:null,// properties that define the initial state of the slide before transitioning in
delay:0,// additional delay (in ms) for first transition (hint: can be negative)
easeIn:null,// easing for "in" transition
easeOut:null,// easing for "out" transition
easing:null,// easing method for both in and out transitions
end:null,// callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
fastOnEvent:0,// force fast transitions when triggered manually (via pager or prev/next); value == time in ms
fit:0,// force slides to fit container
fx:'fade',// name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
fxFn:null,// function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
height:'auto',// container height (if the 'fit' option is true, the slides will be set to this height as well)
manualTrump:true,// causes manual transition to stop an active transition instead of being ignored
metaAttr:'cycle',// data- attribute that holds the option data for the slideshow
next:null,// element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
nowrap:0,// true to prevent slideshow from wrapping
onPagerEvent:null,// callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
onPrevNextEvent:null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
pager:null,// element, jQuery object, or jQuery selector string for the element to use as pager container
pagerAnchorBuilder: null,// callback fn for building anchor links:function(index, DOMelement)
pagerEvent:'click.cycle', // name of event which drives the pager navigation
pause:0,// true to enable "pause on hover"
pauseOnPagerHover: 0,// true to pause when hovering over pager link
prev:null,// element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
random:0,// true for random, false for sequence (not applicable to shuffle fx)
randomizeEffects: 1,// valid when multiple effects are used; true to make the effect sequence random
requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
requeueTimeout:250,// ms delay for requeue
rev:0,// causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
shuffle:null,// coords for shuffle animation, ex: { top:15, left: 200 }
skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
slideExpr:null,// expression for selecting slides (if something other than all children is required)
slideResize:1,// force slide width/height to fixed size before every transition
speed:1000,// speed of the transition (any valid fx speed value)
speedIn:null,// speed of the 'in' transition
speedOut:null,// speed of the 'out' transition
startingSlide:undefined,// zero-based index of the first slide to be displayed
sync:1,// true if in/out transitions should occur simultaneously
timeout:4000,// milliseconds between slide transitions (0 to disable auto advance)
timeoutFn:null,// callback for determining per-slide timeout value:function(currSlideElement, nextSlideElement, options, forwardFlag)
updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
width:null// container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
"use strict";

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
opts.fxFn = function(curr,next,opts,after){
$(next).show();
$(curr).hide();
after();
};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
opts.before.push(function(curr,next,opts,w,h,rev) {
$(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
$(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
});
opts.animIn.opacity = 1;
opts.animOut.opacity = 0;
opts.cssBefore.opacity = 1;
opts.cssBefore.display = 'block';
opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var h = $cont.height();
opts.cssBefore.top = h;
opts.cssBefore.left = 0;
opts.cssFirst.top = 0;
opts.animIn.top = 0;
opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var h = $cont.height();
opts.cssFirst.top = 0;
opts.cssBefore.top = -h;
opts.cssBefore.left = 0;
opts.animIn.top = 0;
opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var w = $cont.width();
opts.cssFirst.left = 0;
opts.cssBefore.left = w;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var w = $cont.width();
opts.cssFirst.left = 0;
opts.cssBefore.left = -w;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
$cont.css('overflow','hidden').width();
opts.before.push(function(curr, next, opts, fwd) {
if (opts.rev)
fwd = !fwd;
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
});
opts.cssFirst.left = 0;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
$cont.css('overflow','hidden');
opts.before.push(function(curr, next, opts, fwd) {
if (opts.rev)
fwd = !fwd;
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
});
opts.cssFirst.top = 0;
opts.cssBefore.left = 0;
opts.animIn.top = 0;
opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$(opts.elements).not(curr).hide();
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.animIn.width = next.cycleW;
});
opts.cssBefore.left = 0;
opts.cssBefore.top = 0;
opts.cssBefore.width = 0;
opts.animIn.width = 'show';
opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$(opts.elements).not(curr).hide();
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.animIn.height = next.cycleH;
});
opts.cssBefore.left = 0;
opts.cssBefore.top = 0;
opts.cssBefore.height = 0;
opts.animIn.height = 'show';
opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
var i, w = $cont.css('overflow', 'visible').width();
$slides.css({left: 0, top: 0});
opts.before.push(function(curr,next,opts) {
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
});
// only adjust speed once!
if (!opts.speedAdjusted) {
opts.speed = opts.speed / 2; // shuffle has 2 transitions
opts.speedAdjusted = true;
}
opts.random = 0;
opts.shuffle = opts.shuffle || {left:-w, top:15};
opts.els = [];
for (i=0; i < $slides.length; i++)
opts.els.push($slides[i]);

for (i=0; i < opts.currSlide; i++)
opts.els.push(opts.els.shift());

// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
opts.fxFn = function(curr, next, opts, cb, fwd) {
if (opts.rev)
fwd = !fwd;
var $el = fwd ? $(curr) : $(next);
$(next).css(opts.cssBefore);
var count = opts.slideCount;
$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
var hops = $.fn.cycle.hopsFromLast(opts, fwd);
for (var k=0; k < hops; k++) {
if (fwd)
opts.els.push(opts.els.shift());
else
opts.els.unshift(opts.els.pop());
}
if (fwd) {
for (var i=0, len=opts.els.length; i < len; i++)
$(opts.els[i]).css('z-index', len-i+count);
}
else {
var z = $(curr).css('z-index');
$el.css('z-index', parseInt(z,10)+1+count);
}
$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
$(fwd ? this : curr).hide();
if (cb) cb();
});
});
};
$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.cssBefore.top = next.cycleH;
opts.animIn.height = next.cycleH;
opts.animOut.width = next.cycleW;
});
opts.cssFirst.top = 0;
opts.cssBefore.left = 0;
opts.cssBefore.height = 0;
opts.animIn.top = 0;
opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.animIn.height = next.cycleH;
opts.animOut.top= curr.cycleH;
});
opts.cssFirst.top = 0;
opts.cssBefore.left = 0;
opts.cssBefore.top = 0;
opts.cssBefore.height = 0;
opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.cssBefore.left = next.cycleW;
opts.animIn.width = next.cycleW;
});
opts.cssBefore.top = 0;
opts.cssBefore.width = 0;
opts.animIn.left = 0;
opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.animIn.width = next.cycleW;
opts.animOut.left = curr.cycleW;
});
$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
opts.animIn.left = 0;
opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,false,true);
opts.cssBefore.top = next.cycleH/2;
opts.cssBefore.left = next.cycleW/2;
$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
});
opts.cssFirst.top = 0;
opts.cssFirst.left = 0;
opts.cssBefore.width = 0;
opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,false);
opts.cssBefore.left = next.cycleW/2;
opts.cssBefore.top = next.cycleH/2;
$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
});
opts.cssBefore.width = 0;
opts.cssBefore.height = 0;
opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
var w = $cont.css('overflow','hidden').width();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.width = next.cycleW;
opts.animOut.left= curr.cycleW;
});
opts.cssBefore.left = w;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
var h = $cont.css('overflow','hidden').height();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.height = next.cycleH;
opts.animOut.top= curr.cycleH;
});
opts.cssBefore.top = h;
opts.cssBefore.left = 0;
opts.animIn.top = 0;
opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
var h = $cont.css('overflow','hidden').height();
var w = $cont.width();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.height = next.cycleH;
opts.animOut.top= curr.cycleH;
});
opts.cssBefore.top = h;
opts.cssBefore.left = w;
opts.animIn.top = 0;
opts.animIn.left = 0;
opts.animOut.top = h;
opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.cssBefore.left = this.cycleW/2;
opts.animIn.left = 0;
opts.animIn.width = this.cycleW;
opts.animOut.left = 0;
});
opts.cssBefore.top = 0;
opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.cssBefore.top = this.cycleH/2;
opts.animIn.top = 0;
opts.animIn.height = this.cycleH;
opts.animOut.top = 0;
});
opts.cssBefore.height = 0;
opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,false,true,true);
opts.cssBefore.left = next.cycleW/2;
opts.animIn.left = 0;
opts.animIn.width = this.cycleW;
opts.animOut.left = curr.cycleW/2;
opts.animOut.width = 0;
});
opts.cssBefore.top = 0;
opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,false,true);
opts.cssBefore.top = next.cycleH/2;
opts.animIn.top = 0;
opts.animIn.height = next.cycleH;
opts.animOut.top = curr.cycleH/2;
opts.animOut.height = 0;
});
opts.cssBefore.height = 0;
opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
var d = opts.direction || 'left';
var w = $cont.css('overflow','hidden').width();
var h = $cont.height();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts);
opts.cssAfter.display = '';
if (d == 'right')
opts.cssBefore.left = -w;
else if (d == 'up')
opts.cssBefore.top = h;
else if (d == 'down')
opts.cssBefore.top = -h;
else
opts.cssBefore.left = w;
});
opts.animIn.left = 0;
opts.animIn.top = 0;
opts.cssBefore.top = 0;
opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
var d = opts.direction || 'left';
var w = $cont.css('overflow','hidden').width();
var h = $cont.height();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
if (d == 'right')
opts.animOut.left = w;
else if (d == 'up')
opts.animOut.top = -h;
else if (d == 'down')
opts.animOut.top = h;
else
opts.animOut.left = -w;
});
opts.animIn.left = 0;
opts.animIn.top = 0;
opts.cssBefore.top = 0;
opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
var w = $cont.css('overflow','visible').width();
var h = $cont.height();
opts.before.push(function(curr, next, opts) {
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
// provide default toss settings if animOut not provided
if (!opts.animOut.left && !opts.animOut.top)
$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
else
opts.animOut.opacity = 0;
});
opts.cssBefore.left = 0;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
var w = $cont.css('overflow','hidden').width();
var h = $cont.height();
opts.cssBefore = opts.cssBefore || {};
var clip;
if (opts.clip) {
if (/l2r/.test(opts.clip))
clip = 'rect(0px 0px '+h+'px 0px)';
else if (/r2l/.test(opts.clip))
clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
else if (/t2b/.test(opts.clip))
clip = 'rect(0px '+w+'px 0px 0px)';
else if (/b2t/.test(opts.clip))
clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
else if (/zoom/.test(opts.clip)) {
var top = parseInt(h/2,10);
var left = parseInt(w/2,10);
clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
}
}

opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

var d = opts.cssBefore.clip.match(/(\d+)/g);
var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

opts.before.push(function(curr, next, opts) {
if (curr == next) return;
var $curr = $(curr), $next = $(next);
$.fn.cycle.commonReset(curr,next,opts,true,true,false);
opts.cssAfter.display = 'block';

var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
(function f() {
var tt = t ? t - parseInt(step * (t/count),10) : 0;
var ll = l ? l - parseInt(step * (l/count),10) : 0;
var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
})();
});
$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
opts.animIn= { left: 0 };
opts.animOut= { left: 0 };
};

})(jQuery);
//Add body lazy tag - to remove overflow to gallery
$("body").addClass("delayedlazy");
$(".box-pager").css("clear","both");

var setLazy = function() {


$(window).scroll(function(d,h) {
var tiles = $('.lazy');
var hasItems = false;
tiles.each(function(i) {
a = ($(this).offset().top+ $(this).height())/2.5;
b = $(window).scrollTop() + $(window).height();
if (a < b ) {
hasItems = true;
$(this).fadeTo(500,1);
var src = $(this).attr("data-src");
if(typeof src!="undefined" && src.length>0){
$(this).attr("src",src);
$(this).attr("data-src","");
$(this).removeAttr("data-src");
//$(this).removeAttr("height");
$(this).removeClass("lazy");
}
}
});
if(hasItems){
if(typeof(reHeight) == "function"){
reHeight();
}
}
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
var tiles = $('.lazy');
var hasItems = false;
tiles.each(function(i) {
hasItems= true;
$(this).fadeTo(500,1);
if(i<5){
var src = $(this).attr("data-src");
if(typeof src!="undefined" && src.length>0){
$(this).attr("src",src);
$(this).attr("data-src","");
$(this).removeAttr("data-src");
//$(this).removeAttr("height");
$(this).removeClass("lazy");
}
}
});
if(hasItems){
if(typeof(reHeight) == "function"){
reHeight();
}
}
}
function inWindow(s){
 var scrollTop = $(window).scrollTop();
 var windowHeight = $(window).height();
 var currentEls = $(s);
 var result = [];
 currentEls.each(function(){
var el = $(this);
var offset = el.offset();
if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
result.push(this);

 });
 return $(result);
}

$(".delayedban").animate({opacity:1},function(){ $(this).removeClass('delayedban'); });

inWindow('.lazy').fadeTo(0,1);
if(typeof(reHeight) == "function"){
reHeight();
}
}


$(document).ready( function() {
setLazy();
});
/**
 * jQuery Masonry v2.1.06
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left";var g=this.element.css("padding-"+this.horizontalDirection),h=this.element.css("padding-top");this.offset={x:g?parseInt(g,10):0,y:h?parseInt(h,10):0},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var i=this;setTimeout(function(){i.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){i.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);
$("#welcome-step1").height(Math.max.apply(Math,this.colYs));

if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);cache.tid.gallery = null;

function resetSlideshowHeight() {
if (cache.tid.gallery) {
clearTimeout(cache.tid.gallery);
}

cache.tid.gallery = setTimeout(function(){
var gallery_height = $('gallery slideshow a:first').height();
if (gallery_height) {
if (gallery_height) {
if(gallery_height > 589) {
gallery_height = 589;
}

$('gallery slideshow, gallery .spacer').height(gallery_height);
}
}
}, 0
);
}

$(window).resize(function() {
//resetSlideshowHeight();
});

$(document).ready(function(){

setTimeout(function(){
if(typeof gallery_images == "undefined"){
return;
}

$('gallery slideshow').append(gallery_images);

//Block photo when right click
$('gallery slideshow > a, gallery .box-spacer > a').mousedown(function(e) {
switch (e.which) {
case 1:
return;
break;
case 2:
case 3:
$(this).find('img').attr('src', (version == 1 ? '/vb2/public': '') +'/media/images/layout/warning/warning_slideshow.png');
$(this).addClass('why');
break;
default:
alert('You have a strange mouse');
break;
}
}).bind("contextmenu",function(e){
return false;
});

cycle_settings.after = function() {
if($('.logos-bottom').length===0){
$('gallery .by a').hide();
var txt = new String(this);
var num = txt.lastIndexOf('/')+1; 
var id = txt.slice(num);
$('gallery .spacer').attr('href','/photo/'+id);
$('#p_' + id).show();
}
};

if (!$('gallery .pager').length) {
$('gallery slideshow').after('<div class="pager">')
}

$('gallery slideshow').cycle(cycle_settings);
$('gallery loading').hide();

$('gallery .pager').not('.stopped').find('a').click(function(){
$('gallery .pager').addClass('stopped');

if ($(this).hasClass('prev')) {
if (!$('gallery .pager').hasClass('scrollRight')) {
$('gallery .pager').addClass('scrollRight').removeClass('scrollLeft');
$('gallery slideshow').cycle('scrollRight');
}
$('gallery slideshow').cycle('prev');

} else if ($(this).hasClass('next')) {
if (!$('gallery .pager').hasClass('scrollLeft')) {
$('gallery .pager').addClass('scrollLeft').removeClass('scrollRight');
$('gallery slideshow').cycle('scrollLeft');
}
$('gallery slideshow').cycle('next');

}

$('gallery slideshow').cycle('pause');
return false;
});

if ($('gallery .pager').hasClass('v3')) {
$('gallery .pager.v3 a').html('');
}

var count = 0;
cache.tid.gallery = setInterval(function(){
var gallery_height = $('gallery slideshow a:first').height();

if (gallery_height || count > 5) {
if (gallery_height < $('gallery slideshow').height()) {
$('gallery slideshow, gallery .spacer').height(gallery_height);
}
clearTimeout(cache.tid.gallery);
}
count++;
}, 500
);

if (typeof is_dev != 'undefined') {
}

try
{
if($('.top-profile-user-left').length > 0) {
doResize(); // this function is in profile.js, is for the resize of the images on the slideshow.
fixSlideshowPhotos();
}
}
catch(err) { }
}, 3000);
});
function setFollow(user_id, follow, onComplete) {
$.post(
'/user/'+ (follow ? 'follow': 'unfollow') +'/'+ user_id,
function(data) {
if (onComplete) {
onComplete(user_id);
}
}
);
}

function follow(user_id, onComplete) {
setFollow(user_id, true, onComplete);
}

function unfollow(user_id, onComplete) {
setFollow(user_id, false, onComplete);
}

var can_follow = true;

$(document).ready(function(){
addFollows();
});

function addFollows() {
$(document).on('click', '.button.follow', function(e) {
e.preventDefault();

if(!can_follow) {
e.preventDefault();
} else {
var button = $(this);
button.removeClass('disabled');
var _callback = button.attr('data-callback');
var callback=null;
if(typeof _callback=="undefined"){
_callback="";
}else{
var fn = window[_callback];
if (typeof fn === "function") {
callback = fn;
}
}

if($(this).hasClass('is-own')) {
} else {
e.preventDefault();

if (logged()) { // !button.hasClass('request-login')
if (!button.hasClass('disabled')) {
var user_id = button.attr('user_id');
if (button.hasClass('not')) {
unfollow(user_id, function(){
button.removeClass('disabled');
}
);

button.removeClass('not');
button.find('.label').html(translator._gt("follow"));

} else {
button.addClass('not');
button.find('.label').html(translator._gt("following"));

if($('body').hasClass('dashboard-user')) {
$(this).parent().children('.row-username-member').addClass('following');
}

if(_callback){
follow(user_id , callback);
}else{
follow(user_id , function(){button.removeClass('disabled');});
}
}



} else {
alert('Please wait!');
}
}
}
}
});
}var masonry_grid_numCols = 4;
var masonry_is400 = false;
var masonry_container = null;
var masonry_is_resizable = true;

function attachGalleryWaterfallEvent(container) {
//$(container).stop();
//$(container).css({ opacity: 0 });

if (typeof container == 'undefined' || !container) {
var container = '#main_content';
}

masonry_container = $(container).find('gallery.waterfall');

/*if($("body.gal400").length > 0){
masonry_container = $(container).find('gallery.waterfall400');
masonry_is400 = true;
}else*/ if($('gallery').hasClass('waterfall400')){
masonry_container = $(container).find('gallery.waterfall400');
masonry_is400 = true;
}

if (masonry_container.length) {

//Ignore re-order (resize) with expand-collapse

if ($(masonry_container).find('.expand-items').length>0){
masonry_is_resizable = false;
}

//replaceDelayedImages();
masonryLoad();

masonry_container.imagesLoaded(function() {
/*if (masonry_is_resizable && masonry_container.height()) {
masonry_container.css({minHeight: masonry_container.height()*.6});
}*/
replaceDelayedImages();
//masonryLoad();
});

masonry_container.find("div.social-icons span").click(function(e){
var l =base_url +'/photo/'+ $(this).parent().attr('media_id');
var m = '"'+$(this).parent().attr('title')+'" ' + l +' via @viewbug';
if ($(this).hasClass('fb')) {
redirect("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(l) +"&t="+ encodeURIComponent(m), 'fbshare', {layout: 'share'});
}
if ($(this).hasClass('tw')) {
redirect("http://twitter.com/share?text="+ encodeURIComponent(m) +"&url=", 'twshare', {layout: 'share'});
}
});
}

//$(container).delay(750).animate({ opacity: 1 }, 750);
}

function masonryLoad(){
if(!$('gallery').hasClass('waterfall400')){
return false;
}

if(masonry_is400){

for(var i=0; i < 6; i++){
masonry_container.removeClass("col" + i);
}

var windowWidth = $(window).width();
if($('body').hasClass('ranks') && $(window).width() >= 1200){
windowWidth = 1200;
}

var galx = 430;
var the_gutter = 16;

if( windowWidth >= 1370 && !$("html").hasClass("mobile") && !$('body').hasClass('mojoth') ){
var colsByRow = Math.floor((windowWidth - 70)/galx);
/*var the_gutter = 18;

if( windowWidth >= 1440 && !$("html").hasClass("mobile") ){
var colsByRow = Math.floor((windowWidth - 150)/galx);*/
if($('body').hasClass('photographycollection')){
galx = 380;
colsByRow = Math.floor((1200 - 45)/galx);
}

if($('body').hasClass('cierath')){ 
galx = 500;
the_gutter = 0;
if(windowWidth > 1600){
galx = 450;
}

}

if($('body').hasClass('likinth')){
//This is a theme on websites that has a big space btween images, so this gallery is special
galx = 550;
colsByRow = 2;
the_gutter = 200;
}

var cont = 0, mtop = 7;
$(".waterfall400").find("thumbnail").each(function(i,obj){
if($('body').hasClass('likinth')){
/*mtop = 7;
if(cont===1){
mtop = the_gutter;
}
$(obj).css({width:galx+"px",margin:mtop+"px 0 "+the_gutter+"px"});
cont++;*/
$(obj).css({width:galx+"px",margin:"7px 0 "+the_gutter+"px"});
}else if($('body').hasClass('cierath')){ 
$(obj).css({width:galx+"px",margin:"0"});
}else{
$(obj).css({width:galx+"px",margin:"7px 0"});

}
});

masonry_grid_numCols =colsByRow ;//Math.floor(windowWidth/colsByRow) - 6;
masonry_container.addClass("col" + masonry_grid_numCols);

if($('body').hasClass('likinth')){
displayLikinGallery(masonry_container,masonry_grid_numCols,the_gutter,galx);
}else if($('body').hasClass('cierath')){
$(masonry_container).css("width",(galx * masonry_grid_numCols) + ( masonry_grid_numCols) ).css("margin","0 auto 20px");
$('#theme-content').fadeIn(500);
setTimeout(function(){hoverThumbs();},100); 
}else{
$(masonry_container).css("width",(galx * masonry_grid_numCols) + ( 15 * masonry_grid_numCols) ).css("margin","0 auto 20px");
}

if($("body").hasClass("witop")){
$(masonry_container).css("margin-top","70px");
}
}
else if(!$("html").hasClass("mobile") || ($("html").hasClass("mobile") && windowWidth >= 768) || $('body').hasClass('ranks') || $('body').hasClass('likinth') || $('body').hasClass('cierath')){
galx=410;
the_gutter = 12;

var colsByRow = 3;
var marr = '6px';
if(windowWidth < 1000) { colsByRow = 2; marr = '12px'; }
if(windowWidth < 600){ colsByRow = 1; marr = '4px'; }

if($('body').hasClass('ranks')){
marr = '16px';
if($(window).width() > 1200) {
the_gutter = 16;
}
}else if($('body').hasClass('likinth')){//This is a theme on websites that has a big space btween images, so this gallery is special
colsByRow = 2;
the_gutter = 150;
if(windowWidth <= 1024){
colsByRow = 2;
the_gutter = 20;
if(windowWidth<=500){
colsByRow = 1; 
marr = '4px'; 
the_gutter = 4;
}
}
}else if($('body').hasClass('mojoth')){
colsByRow = 4;
the_gutter = 0;
if(windowWidth < 800){ 
colsByRow = 2;
the_gutter = 5;
}
}else if($('body').hasClass('cierath')){
the_gutter = 0;
}

var widthCell = windowWidth/colsByRow - the_gutter;
var perc = widthCell * 100 / windowWidth;
if($('body').hasClass('likinth')){
perc = widthCell * 100 / (windowWidth-the_gutter);
}

masonry_grid_numCols = colsByRow;
masonry_container.addClass("col"+masonry_grid_numCols);

//var cont = 0, mtop = 7;
var mtop1 = 7;
$(".waterfall400").find("thumbnail").each(function(i,obj){
if($('body').hasClass('likinth') &&windowWidth > 1024 ){
/*mtop = 7;
if(cont===1){
mtop = the_gutter;
}*/

$(obj).css("max-width","600px");
$(obj).css({margin:mtop1+"px 0 "+the_gutter+"px"});
$(obj).css("width",perc+"%");
//cont++;
}else{
$(obj).css("max-width","600px");
$(obj).css({margin:"3px 0 " + marr + " 0"});
$(obj).css("width",perc+"%");
if($('body').hasClass('cierath')){
$(obj).css({margin:"0"});
}
}
});

var margin = "60px auto 0";
//var thumbWidth = $(".waterfall400").find("thumbnail:first").width();
$("gallery").not('#recommended_challenge_gallery, #recommended_contest_gallery').css("width","100%");

if($('#recommended_challenge_gallery').length > 0 || $('#recommended_contest_gallery').length > 0 || $('#congallery').length > 0 || $('body').hasClass('cierath')){
margin = "0px auto 0";
}

if($('body').hasClass('likinth')){
displayLikinGallery(masonry_container,masonry_grid_numCols,the_gutter,widthCell);
}else if($('body').hasClass('mojoth')){
$("gallery").not('#recommended_challenge_gallery, #recommended_contest_gallery').css("width",masonry_grid_numCols*widthCell + masonry_grid_numCols).css("margin",margin);
$('#theme-content .photo-gallery-container').addClass('showgallery');
}else if($('body').hasClass('cierath')){
$("gallery").not('#recommended_challenge_gallery, #recommended_contest_gallery').css("width",masonry_grid_numCols*widthCell + masonry_grid_numCols).css("margin",margin);
$('#theme-content').fadeIn(500);
setTimeout(function(){hoverThumbs();},100); 
}else{
$("gallery").not('#recommended_challenge_gallery, #recommended_contest_gallery').css("width",masonry_grid_numCols*widthCell + masonry_grid_numCols * 15).css("margin",margin);
}
}
else{
var margin = "60px auto 0";
if($('#recommended_challenge_gallery').length > 0 || $('#recommended_contest_gallery').length > 0 || $('#congallery').length > 0){
margin = "0px auto 0";
}
$("gallery").not('#recommended_challenge_gallery, #recommended_contest_gallery').css("width",'100%').css("margin",margin);

$(".waterfall400").find("thumbnail").each(function(i,obj){
$(obj).css({width:"",margin:"3px 0 4px 0"});
});

the_gutter = 12;

masonry_container.removeClass("col4");

if(masonry_container.hasClass("onecol")){
masonry_grid_numCols = 1;
}
else{
$(".mobile gallery.waterfall400 thumbnail").css("width","49.5%");
if( $(window).width()>=736 && $(window).width() > $(window).height()){
masonry_grid_numCols = 3;
masonry_container.addClass("col3");
$(".mobile gallery.waterfall400 thumbnail").css("width","33%");
}else{
masonry_grid_numCols = 2;
masonry_container.addClass("col2");
}
}
}
}
if($('.stamp').length > 0 ){
if($(".top-profile-user-stuff").hasClass('hidded')) {
$(".top-profile-user-stuff").removeClass('hidded').fadeIn(1000);
}

$(".top-profile-user-stuff").removeClass("col4");
$(".top-profile-user-stuff").removeClass("col2");
$(".top-profile-user-stuff").removeClass("col3");
$(".top-profile-user-stuff").removeClass("col1");
$(".top-profile-user-stuff").addClass("col"+masonry_grid_numCols);
}
replaceDelayedImagesBy(7);

reHeight(false);

if($('body').hasClass('profile') && $('body').hasClass('owner') && $('body').hasClass('lite') && $('gallery#galinf thumbnail.upgrade-thumb').length == 0 && $('gallery#galinf thumbnail .empty-profiles').length == 0){
var upload_button = '';
if(remian_photos > 0){
upload_button = '<a href="/upload"><div class="up-btn trs">Upload photos</div></a>';
}

$('gallery#galinf .stamp').after('<thumbnail class="upgrade-thumb"><div class="content"><img src="/media/images/layout/emojis/blink_emoji.png"/><h1>Get unlimited uploads</h1><p>You have '+remian_photos+' uploads remaining <br/>until the end of this week.</p><a href="/upgrade/now"><div class="up-btn wht">Get membership</div></a>'+upload_button+'</div></thumbnail>');
}


if($('.stamp').length > 0 ){
var h_remove = 41;
if($(window).width() < 600) {
h_remove = -10;
} else if($(window).width() < 1000) {
h_remove = 36;
}

h_remove = h_remove + 140;

$('.stamp').height($('.top-profile-user-stuff').height() - h_remove);

masonry_container.masonry({
stamp: $(".stamp"),
itemSelector: 'thumbnail',
isResizable: masonry_is_resizable,
percentPosition: true,
columnWidth: 'thumbnail',
gutter: the_gutter,
transitionDuration: 0

});
}else{
masonry_container.masonry({
itemSelector: 'thumbnail',
isResizable: masonry_is_resizable,
percentPosition: true,
columnWidth: 'thumbnail',
gutter: the_gutter,
transitionDuration: 0

});
}
if($('body').hasClass('ranks')){
$('.rank-update .contest-ranks').fadeIn(500);
}

if($('body').hasClass('collection')) {
$('#collection-link').width($('#galinf').width() - 20);
}

doAdjustUserMenu();

if($('body').hasClass('challenge-page') && $('gallery.photo').hasClass('toinvite')){
placeInviteButton();
}

if($('body').hasClass('chpage-v2') && $('.challenge-entries').length > 0){
$('.challenge-entries gallery').fadeIn(500);
}

if($('.photo-contests.gallery').length > 0){

var maxw = $('gallery.waterfall400').width() - 20;
if($(window).width() < 1200){
maxw = maxw - 5;
}
$('.contest-top').css({'max-width':maxw,'opacity':'1'});
contestNameBlockSize();
}
}

function replaceDelayedImagesBy(maxInitImages){
//Load more than 3 images on big screens
if(typeof maxInitImages ==="undefined"){
maxInitImages=3;
}

if($(window).width() > 1500 && maxInitImages < 9){
maxInitImages=9;
}
var tiles = $('.lazy').fadeTo(0,0);
tiles.each(function(i) {
if(i<maxInitImages){
$(this).fadeTo(500,1);
var src = $(this).attr("data-src");
if(typeof src!="undefined" && src.length>0){
$(this).attr("src",src);
$(this).attr("data-src","");
$(this).removeAttr("data-src");
$(this).removeAttr("height");
$(this).removeClass("lazy");
}
}else{return false;}
});
}

function replaceDelayedImages($ignore_scroll){
if(typeof $ignore_scroll=="undefined"){
$ignore_scroll=false;
}


if(!$ignore_scroll){
setLazy();
}
else{
tiles = $('.lazy');

tiles.each(function(i) {
reHeight();

var src = $(this).attr("data-src");
if(typeof src!="undefined" && src.length>0){
$(this).attr("src",src);
$(this).attr("data-src","");
$(this).removeAttr("data-src");
$(this).removeAttr("height");
$(this).removeClass("lazy");
}

});
}
masonryLoad();

}
$(document).ready(function() {
if(!$('body').hasClass('ignore_masonry')) {
attachGalleryWaterfallEvent();
//masonryLoad();
if($('.breadcrumb.title').length > 0){
galleryBreancrumb();
}

masonry_container.imagesLoaded(function(){
reHeight(false);//masonry_container.masonry('resize');
});

$(window).resize(function() {
masonryLoad();
});
}
});

function reHeight(resizeMasonry){

var tiles = $('.delayed');
tiles.each(function(i) {
var width = $(this).width();
var height =( $(this).attr("data-og") /$(this).attr("data-ow") * width);

if(isNaN(height) || height===0){
$(this).height("auto");
$(this).removeAttr("height");
}
else{
$(this).height(height);
$(this).attr("height",height);
}
});

if(resizeMasonry!==false && $(masonry_container).hasClass('masonry')){
masonry_container.masonry('resize');
}

}


function doAdjustUserMenu(){
var marginleft = 0;

if($('.stamp').length > 0){
marginleft = $('.stamp').offset().left;


} else if($('#members-gallery').length > 0) {
marginleft = $('#members-gallery').offset().left;
} else if ($('.user-submissions').length > 0) {
marginleft = $('.user-submissions').offset().left;
} else {
return;
}

var w_ww = $(window).width();
var min_left = 7;

if(w_ww < 1000) {
min_left = 5;
}

if (marginleft < min_left){
marginleft = min_left;
}

if(w_ww >= 1440) {
marginleft = marginleft + 3;
}

$(".top-profile-user-stuff").css("margin-left", marginleft +'px');

$(".top-profile-user-stuff").css("width", $('gallery > thumbnail:first').outerWidth() +'px');

var $el = $('#profile-top-slideshow');
wHeight = $el.position().top + $el.outerHeight(true);

$("#profile_wrapper").css("margin-top", (wHeight) +'px');

var remove_size = 70;

$("#profile_content").css("margin-top", (wHeight + remove_size ) +'px');
}function switchPhoto(key) {
var popup = $('.popup.photo');

if(!popSlideshow[key] || !popSlideshow[key].file){
return;
}

if (!popup.hasClass('onrequest')) {
popup.addClass('onrequest');
popup.addClass('loading');

var imageContainer = popup.find('.photo div');

var image = popup.find('.photo div');



var width = popup.find('.cache .'+key).width();
var height = popup.find('.cache .'+key).height();


/* FIX BORDER */
var background = image.css("background");
var imageUrl = popSlideshow[key].file;

var imgPhoto = new Image(); 
imgPhoto.onload = function(){
width = imgPhoto.width;
height = imgPhoto.height;

popPhotoWidth = width;
popPhotoHeight = height;

image.width(width);
image.height(height);

popup.find('.container').animate({
width: width,
height: height,
marginLeft: (width/2)*-1
}
);

};
imgPhoto.src = imageUrl;
/* ****** */

popPhotoWidth = width;
popPhotoHeight = height;

image.width(width);
image.height(height);

popup.find('.container').animate({
width: width,
height: height,
marginLeft: (width/2)*-1
}
);

image.css('background-image', 'url(' + popSlideshow[key].file + ')');

var updatePhoto = function(navigation) {
if (navigation.prev){
popup.find('.arrow.left').removeClass('hide');
} else {
popup.find('.arrow.left').addClass('hide');
}

if (navigation.next){
popup.find('.arrow.right').removeClass('hide');
} else {
popup.find('.arrow.right').addClass('hide');
}

popSlideshow.prev = navigation.prev;
popSlideshow.next = navigation.next;
popSlideshow.current = navigation.current;

if (popSlideshow.prev != null && popSlideshow.prev.file) {
popup.find('.cache .prev').attr('src', popSlideshow.prev.file);
}
if (popSlideshow.next != null && popSlideshow.next.file) {
popup.find('.cache .next').attr('src', popSlideshow.next.file);
}
popup.removeClass('onrequest');

// remove loading by force
setTimeout(function(){
popup.removeClass('loading');
}, 500);
}


if (false && popSlideshow.cache[popSlideshow[key].id]) {
updatePhoto(popSlideshow.cache[popSlideshow[key].id]);

} else {
var popSlideUrl = popSlideshow.url.replace('[ID]', popSlideshow[key].id) +'/navigation';
if(typeof popSlideshow.ignore_id !=="undefined" && popSlideshow.ignore_id){
popSlideUrl = popSlideshow.url.replace(popSlideshow.current.id, popSlideshow[key].id) +'/navigation';
}
$.get(
popSlideUrl,
function(resp){
if(window.innerWidth > 1200){
resp['current']['file']= resp['current']['file'].replace("_large.","_large1300.");
if(resp['prev']['file']!=null) { resp['prev']['file']= popSlideshow['prev']['file'].replace("_large.","_large1300."); }
if(resp['next']['file']!=null) { resp['next']['file']= popSlideshow['next']['file'].replace("_large.","_large1300.");}
}
//var navigation = resp;
popSlideshow.cache[popSlideshow[key].id] = resp;
updatePhoto(popSlideshow.cache[popSlideshow[key].id]);
}
);
}
}
}

function popPhotoSlideshow() {
if (!popSlideshow.current) {
return;
}
$('#photo_slideshow').remove();

var html = '<div class="block-photo">'+
//'<loading class="photo"></loading>'+
'<div class="cache">'+
'<img class="prev" src="'+ (popSlideshow.prev ? popSlideshow.prev.file: '') +'">'+
'<img class="next" src="'+ (popSlideshow.next ? popSlideshow.next.file: '') +'">'+
'<img class="current" src="'+ popSlideshow.current.file +'">'+
'</div>'+
'<div media_id="'+ popSlideshow.current.id +'" class="protect-photo"></div>'+
'<div class="photo">'+
'<img alt="Photo" style="max-width: 926px" src="'+ popSlideshow.current.file +'">'+
'</div>'+
'</div>'+
'<div class="navigation">'+
'<a href="javascript:" class="arrow left"><span></span></a><a href="javascript:" class="arrow right"><span></span></a>'+
'</div>';

popup = popMessage('', html, function(){
if (popSlideshow.original && popSlideshow.original.id != popSlideshow.current.id){
window.location.href = popSlideshow.url.replace('[ID]', popSlideshow.current.id);
}
}, 'photo', true);

if (popup) {
popup.attr('id', 'photo_slideshow');
popup.addClass('loading');
var image = popup.find('.photo img');
image.on('load',function() {
popup.removeClass('loading');

});

var imagecurrent = popup.find('.cache .current');
imagecurrent.on('load',function() {
var width = imagecurrent.width();
popup.find('.container').css('width', width).css('margin-left', (width/2)*-1);
popup.find('.cache .current').remove();
});

if (popSlideshow.prev){
$('.arrow.left').removeClass('hide');
} else {
$('.arrow.left').addClass('hide');
}

if (popSlideshow.next){
$('.arrow.right').removeClass('hide');
} else {
$('.arrow.right').addClass('hide');
}

$('.arrow.right').on('click', function(){
switchPhoto('next');
});
$('.arrow.left').on('click', function(){
switchPhoto('prev');
});
}
return popup;
}

function popPhotoSlideshowPhoto() {
if (!popSlideshow.current) {
return;
}
$('#photo_slideshow').remove();

popPhotoWidth = $("#main_image").width();
popPhotoHeight = $("#main_image").height();

if(popPhotoWidth==null || typeof popPhotoWidth =="undefined"){
var img = new Image();
img.onload = function() { 
$(".block-photo > .photo > div").css("width",img.width).css("height",img.height) 
};
img.src = popSlideshow.current.file;
popPhotoWidth = 600;
popPhotoHeight = 600;
}

var html = ''+
'<div class="block-photo">'+
'<div class="cache">'+
'<img class="prev" src="'+ (popSlideshow.prev ? popSlideshow.prev.file: '') +'">'+
'<img class="next" src="'+ (popSlideshow.next ? popSlideshow.next.file: '') +'">'+
'<img class="current" src="'+ popSlideshow.current.file +'">'+
'</div>'+
'<div media_id="'+ popSlideshow.current.id +'" class="protect-photo"></div>'+
'<div class="photo"><div style="width: ' + popPhotoWidth + 'px; height:' + popPhotoHeight + 'px; background:url(' + popSlideshow.current.file + ') center top no-repeat;"></div></div>'+
'</div>';

popup = popMessage('', html, function(){}, 'photo', true);

if (popup) {
popup.attr('id', 'photo_slideshow');
popup.addClass('loading');
var image = popup.find('.photo div');
image.on('load',function() {
popup.removeClass('loading');

});

var imagecurrent = popup.find('.cache .current');
imagecurrent.on('load',function() {
var width = imagecurrent.width();
popup.find('.container').css('width', width).css('margin-left', (width/2)*-1);
popup.find('.cache .current').remove();
});

if (popSlideshow.prev && popSlideshow.prev.file && popSlideshow.prev.file != "/media/" ){
$('.arrow.left').removeClass('hide');
} else {
$('.arrow.left').addClass('hide');
}

if (popSlideshow.next && popSlideshow.next.file && popSlideshow.next.file != "/media/"){
$('.arrow.right').removeClass('hide');
} else {
$('.arrow.right').addClass('hide');
}

$('.arrow.right').on('click', function(){
switchPhoto('next');
});
$('.arrow.left').on('click', function(){
switchPhoto('prev');
});
}

$(".popupx.main-popupx.popupxd").hide();

if(!isMobile.any() ) {
var screenHeigth = window.screen.availHeight;
//var margin_top = window.screen.height/10;
var max_height = screenHeigth - (margin_top*2);
$(".popup.photo .container").css("width", "auto");
}
return popup;
}

var popPhotoWidth;
var popPhotoHeight;

$(document).ready(function(){
//$('.play.slideshow').on('click', function(e){
$('#profile_wrapper').on('click', '.play.slideshow', function(e){
//popPhotoSlideshowPhoto();
fancybox(e);
$('.mobile .slideshow-arrows').show();
});

$('.slideshow-arrows.slide-next').on('click', function(e){
moveFancyPhoto({ which: 39 });
$.fancybox.prev();
});

$('.slideshow-arrows.slide-prev').on('click', function(e){
moveFancyPhoto({ which: 37 });
$.fancybox.next();
});
});

$(window).on('load', function() {
popPhotoWidth = $("#main_image").width();
popPhotoHeight = $("#main_image").height();
});


var isMobile = {
Android: function() {
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function() {
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function() {
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function() {
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function() {
return navigator.userAgent.match(/IEMobile/i);
},
any: function() {
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
};



/*** FANCY BOX ****/
var key ="prev";

function fancybox(e){

initFancy();

doMoveFancyPhoto("current",true);

e.preventDefault();
return false;
}

function moveFancyPhoto(e){

key ="next";
if(e.which!=39){
key ="prev";
}

doMoveFancyPhoto(key,false);

return false;
}

function doMoveFancyPhoto(pos,doclick){

if(typeof popSlideshow=="undefined" || popSlideshow[pos]==null || !popSlideshow[pos].file){
return;
}

if((typeof view_adult != "undefined" && (!view_adult) ) && popSlideshow[pos].adult==1 ) {

doclick = false;
if($('.main_content .popup.parental').length>0 && $('.main_content .popup.parental').length>0){
$.fancybox.close();
if(!$('body').hasClass('logged-out')) {
$('.main_content .popup.parental').show();
}

return false;
}

}

if(doclick===true )
{
$("#pi_" + popSlideshow[pos].id).trigger('click');
}

var popSlideUrl = popSlideshow.url.replace('[ID]', popSlideshow[pos].id) +'/navigation';
if(typeof popSlideshow.ignore_id !=="undefined" && popSlideshow.ignore_id){
popSlideUrl = popSlideshow.url.replace(popSlideshow.original.id, popSlideshow[pos].id) +'/navigation';
}

$.ajax({
url: popSlideUrl, //popSlideshow.url.replace('[ID]', popSlideshow[pos].id) +'/navigation',
success: (function(resp){
if(resp.length == 0){
return;
}
//var navigation = resp;
popSlideshow.cache[popSlideshow[pos].id] = resp;
updateFancyPhoto(resp,doclick);

if(typeof resp.current !== "undefined" && resp.current.watermark!=null){
if($("#watermark-photo").length <1){
$("body").append('<div id="watermark-photo" style="display:none;"><img /></div>');
}
$(".fancybox-inner").append($("#watermark-photo").clone());
$(".fancybox-inner").find("#watermark-photo").attr("id",'watermark-photo-slideshow');


$("#watermark-photo-slideshow").attr("class",'').addClass("watpos" + resp.current.watermark.position);
$("#watermark-photo-slideshow").show().find("img").attr("src",'/media/' + resp.current.watermark.file);
}
})
});
}

var isFancyFirst=true;
function updateFancyPhoto(navigation,doclick) {
if(typeof navigation != "undefined" && navigation!=null && typeof navigation.current ==='undefined'){
navigation = JSON.parse(navigation);
}
if(window.innerWidth > 1200){
navigation.current.file = navigation.current.file.replace("_large.","_large1300.");
if(navigation.prev!=null) { navigation.prev.file = navigation.prev.file.replace("_large.","_large1300."); }
if(navigation.next!=null) { navigation.next.file = navigation.next.file.replace("_large.","_large1300.");}
}


popSlideshow.prev = navigation.prev;
popSlideshow.next = navigation.next;
popSlideshow.current = navigation.current;

var id=0;
id = navigation.current['id'];

$('.preloaded').remove();

if(popSlideshow.next!=null){
id = popSlideshow.next['id'];

if(typeof id !="undefined" && $("#pi_" +id).length==0){
$("#fancy_container").prepend("<a href='" + popSlideshow.next['file'] + "' class='fancyphotos' id='pi_" + id + "' rel='gallery'><img class='preloaded' data-src='" + popSlideshow.next['file'] + "'></a>");
$.fancybox.group.unshift( ({href:popSlideshow.next['file'], type:'image',isDom:true , data_id: id }));

if(doclick!==true && !isFancyFirst){
$("#pi_" + id).trigger('click'); //Force load new photos
}else{ //HACKdouble click ? second image is skipped
isFancyFirst=false;
}

}
}

if(popSlideshow.prev!=null){
id=popSlideshow.prev['id']
if(typeof id !="undefined" && $("#pi_" + id).length==0){
$("#fancy_container").append("<a href='" + popSlideshow.prev['file'] + "' class='fancyphotos' id='pi_" + id + "' rel='gallery'><img class='preloaded' data-src='" + popSlideshow.prev['file'] + "'></a>");
$.fancybox.group.push(({href:popSlideshow.prev['file'], type:'image',isDom:true, data_id: id}));
} 
}
}


$(document).ready(function(){
if($.fn.fancybox){
$(".fancyphotos").fancybox({
loop: false,
arrows:false,
closeBtn:false,
autoWidth:true,
nextEffect:'none',
prevEffect: 'none',
openEffect: 'none',
mouseWheel:false,
preload:0,
scrollOutside:false,
 }); // fancybox

$(".fancybox-inner").on("click",function(e){
var url = $(".fancybox-image").attr("style").replace("background-image:url(","").replace(");background-size:100%;","");

var id = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")).replace("_large1300","").replace("_large","").replace("_medium","");

var new_location = popSlideshow.url.replace('[ID]', id);
if(typeof popSlideshow.ignore_id !=="undefined" && popSlideshow.ignore_id){
new_location = popSlideshow.url.replace(popSlideshow.original.id, id) ;
}

//Contest fix
new_location = new_location.replace("/navigation","");
new_location = new_location.replace("?navigation&","");

window.location = new_location;

e.preventDefault();
return false;
});
}

}); // ready​​

function initLazyFancy(){
if($("body").hasClass("fancybox")){

$("body").append("<div id='fancy_container'style='display:none;'></div>");


if(typeof popSlideshow!="undefined" && popSlideshow!=null){

if($(".preloaded").length==0){
if(popSlideshow.next!=null){
$("#fancy_container").append("<a href='" + popSlideshow.next['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.next['id'] +"' data-id='" + popSlideshow.next['id'] +"' rel='gallery'><img class='preloaded lazy delayed' data-src='" + popSlideshow.next['file'] + "'></a>");
}

$("#fancy_container").append("<a href='" + popSlideshow.current['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.current['id'] +"' data-id='" + popSlideshow.current['id'] +"' rel='gallery'>11</a>");

if(popSlideshow.prev!=null){
$("#fancy_container").append("<a href='" + popSlideshow.prev['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.prev['id'] + "' data-id='" + popSlideshow.prev['id'] + "' rel='gallery'><img class='preloaded lazy delayed' data-src='" + popSlideshow.prev['file'] + "'></a>");
}
}
}
}
}

function initFancy(){

if($("body").hasClass("profile")){
return initLazyFancy();
}

if($("body").hasClass("fancybox")){

if($("#fancy_container").length ==0){
$("body").append("<div id='fancy_container'style='display:none;'></div>");


if(typeof popSlideshow!="undefined" && popSlideshow!=null){

if($(".preloaded").length==0 ){
if(popSlideshow.next!=null && typeof popSlideshow.next['id']!= "undefined"){
$("#fancy_container").append("<a href='" + popSlideshow.next['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.next['id'] +"' data-id='" + popSlideshow.next['id'] +"' rel='gallery'><img class='preloaded' data-src='" + popSlideshow.next['file'] + "'></a>");
}
$("#fancy_container").append("<a href='" + popSlideshow.current['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.current['id'] +"' data-id='" + popSlideshow.current['id'] +"' rel='gallery'></a>");
if(popSlideshow.prev!=null && typeof popSlideshow.prev['id']!= "undefined"){
$("#fancy_container").append("<a href='" + popSlideshow.prev['file'] + "' class='fancyphotos' id='pi_" + popSlideshow.prev['id'] + "' data-id='" + popSlideshow.prev['id'] + "' rel='gallery'><img class='preloaded' data-src='" + popSlideshow.prev['file'] + "'></a>");
}
}


}
}
}
}

initFancy();
var share_link = null;
var timePinterest = null;


function toggleContext(only_show, e) {

if (!only_show && !$("#toggleContext").is(':visible')) {

$("#toggleContext").css("top", e.clientY);
$("#toggleContext").css("left", e.clientX);


$("#toggleContext").show();

} else {
$("#toggleContext").hide();
}
}

$("body.photopage").bind("contextmenu", function(e) {
// Stop the context menu
toggleContext(true);
e.preventDefault();
});
$("body.photopage").bind("click", function(e) {
// Stop the context menu
toggleContext(true);
});

var currThumb = null;

$(document).ready(function(){
$('#signup-popup-gall .corner-close').on('click', function(e) {
$('body').css({ overflow:'' });
$('#signup-popup-gall, #signup-popup-bg-gall').fadeOut(500);
});

if($('.photo-wrapper .photo.parental').length > 0) {
removeImageLazy();
}

/*if($('.share.pint').length > 0) {

$('.share.pint').on('click', function(e) {
window.open($(this).attr('data-href'));
});
}*/

$('.touch-href').on('touchend', function(e) {
currThumb = $(this);
setTimeout(function(){
currThumb.attr('href', currThumb.attr('data-href'));
currThumb.removeClass('touch-href');
}, 500);
});

if($('#photo-info .block.toolbar .tools-group.tooltip-description').html() == "") {
$('#photo-info .block.toolbar .tools-group.tooltip-description').parent().hide();
}

$('li.more_belongs a').click(function() {
$(this).parent().remove();
$('.hide_belongs').removeClass('hide_belongs');
});

$('div.more_belongs a').click(function() {
$(this).parent().remove();
$('.hide_belongs_trifecta').removeClass('hide_belongs_trifecta');
});

$('a.fullscreen, .main_content .block-photo').mousedown(function(e) {



switch (e.which) {
case 1:
if ($("#toggleContext").is(':visible')) {
toggleContext(true);
e.preventDefault();
return false;
}

if ($("body").hasClass('fancybox')) {
return fancybox(e);
 }

if ($('.main_content .block-photo .photo').hasClass('parental')) {
$('.main_content .popup.parental').show();

} else {
e.preventDefault();
if (typeof(album_id) != "undefined"){
$('.play.slideshow').click();
} else {
//popPhoto('.main_content .block-photo', false);

if ($("body").hasClass('blogpost') && $("body").hasClass('logged-out')) {
//window.location.href = '/user/signup';
} else {
popPhotoSlideshowPhoto();
}
}
}
break;
case 2:
case 3:
toggleContext(false, e);
/*
if ($(this).hasClass('block-photo')) {
$('.block-photo .photo img').attr('src', (version == 1 ? '/vb2/public': '') +'/media/images/layout/warning/warning_large.png');
$('.block-photo .photo').addClass('why');
}*/
break;
default:
alert('You have a strange mouse');
break;
}
}
).bind("contextmenu", function(e) {
return false;
 });

$('.block-photo .photo.parental').click(function(e) {
if ($(this).hasClass('parental')) {
$('.main_content .popup.parental').show();
}
}
);

$('items.comments a.comment').on('click', function(e){
if($(this).attr('href') == 'javascript:') {
e.preventDefault();
if(logged()) {
var item = $(this).closest('item');

if (!item.hasClass('active')) {
$('#edit-parent_id').val(item.attr('comment_id'));

$('#media_reply_comment').slideUp(500, function() {
$('items.comments item').removeClass('active');
item.addClass('active');
$('#media_reply_comment').appendTo(item).slideDown(500, function() {
$('#media_reply_comment').find('.form-textarea').focus();
});
});

} else {
item.removeClass('active');
$('#media_reply_comment').slideUp(500);
}
}
}
});

$('items.comments a.remove').on('click', function(e) {
e.preventDefault();

var comment_id = $(this).attr('comment_id');
if(logged()) {

}
});

$('a.request-print').click(function(e) {
e.preventDefault();
if(logged()) {

}
});


$('a.feature-photo-byuser').on("click",function(e) {

console.log('clicked');

e.preventDefault();

if($('.corner-popup.active').length > 0) {
$('.corner-popup').stop().stop().fadeOut(200, function() {
//disableCornerPopup();
});
}

var caller = this;
if(is_loggedin) {
var media_id = $(this).attr('media_id');
var type = $(this).attr('type');
var is_active = $(this).attr('status');

if(typeof is_active== "undefined" || is_active!="1"){
var popup = popMessage('', 'To give this award and get more ViewBug<br />upgrade today!', null, null, null, null, 'award_upgrade');
return;
}

var dropdown_wrapper = $(this).parents("div.feature-photo-byuser-container").find("a.button");

dropdown_wrapper.parent().find('.award_popup').fadeOut(300, function() {
dropdown_wrapper.parent().removeClass('active');
});


//Award popup
if($(dropdown_wrapper).length==0){
var media_id = $(this).attr("media_id");
dropdown_wrapper = $("#btn" + media_id);
}

if($("html").hasClass("mobile") && $("body").hasClass("photopage")){
dropdown_wrapper = $(".feature-photo-byuser-container").find("a.button");
}

var level = $(this).attr('level');
if (typeof level !== "undefined") {
if (level !== "VIP") {
popMessage('Please remember', 'To select this award, you need to be a VIP member.');
return;
}
}

if(!dropdown_wrapper.hasClass('vbawarded') && !dropdown_wrapper.hasClass('ajaxfavorited')) {

dropdown_wrapper.addClass('vbawarded');

dropdown_wrapper.animate({opacity: '0.1'}, "slow", function() {
dropdown_wrapper.addClass("ajaxfavorited");
var totalpeer = dropdown_wrapper.children('.mask-ani').children('.mask-text').html();
if(totalpeer.indexOf("K") > -1) {
} else {
totalpeer = parseInt(dropdown_wrapper.children('.mask-ani').children('.mask-text').html()) + 1;
}

console.log(totalpeer);
dropdown_wrapper.children('.mask-ani').children('.mask-text').html( totalpeer );

if(dropdown_wrapper.hasClass('peerwall') && $('#peer-' + dropdown_wrapper.attr('data-id')).length > 0) {
$('#peer-' + dropdown_wrapper.attr('data-id')).html( totalpeer );
}

$('.top-buttons .top-award').addClass('awarded');
}).animate({opacity: '1'}, "slow");
}

/*$.post(

{type: type},
function(data) {
console.log(data);

if($(caller).attr("data-callback") != null && $(caller).attr("data-callback") != ""){
var fn = window[$(caller).attr("data-callback")];
if(typeof fn == "function"){
fn(data,caller);
}

}
}
);*/
}
else{
logged();
}
});


$("div.award_popup.icons column ul > li .icon-award").on("mouseenter", function() {
var idicon =$(this).attr("id");
var margin = idicon * 50;
$(this).css({'margin-left':(margin+9)+'px','margin-bottom':'8px'});
});

$("div.award_popup.icons column ul > li .icon-award").on("mouseleave", function() {
$(this).css({'margin-left':'0px','margin-bottom':'0px'});
});


$('.dropdown.menu').on("mouseenter", function() {
if(!$(this).children('a').hasClass('vbawarded') && !$(this).parent('div').hasClass('wrapper-vblikes')){
$(this).find('.award_popup.icons').stop().css('opacity', 1).fadeIn(1000);
}
});

$('.dropdown.menu').on("mouseleave", function() {
$(this).find('.award_popup.icons').stop().css('opacity', 1).fadeOut(300);
});

$('a.feature-photo').on("click",function(e) {
e.preventDefault();
if(logged()) {
var media_id = $(this).attr('media_id');
var type = $(this).attr('type');
/*$.post(

{type: type},
function(data) {
if (data && data.callback) {
eval(data.callback);

} else {
alert(data.success ? data.success: 'Photo has been featured');
}
}
);*/
}
});

$('a.moderate-photo').click(function(e) {
e.preventDefault();
if(logged()) {
/*var media_id = $(this).attr('media_id');
$.post(

{context: 'photos'},
function(data) {
alert('Thank you for notifying us.');
}
);*/

e.preventDefault();
var media_id = $(this).attr('media_id');
/*$.get(

function(data){
$('#moderatephoto').show();
$("#moderatephoto").html('<div id="moderatephoto-popup"><div id="modal"><div id="content">' + data + '</div></div></div>');
callReveal("#modal");
}
);*/
}
});

$('#sendModerate').on('click',function(e)
{
var form = $('#moderator-notification');
var data = form.serializeArray();
/*$.post(
form.attr('action'),
data,
function(data){
$('#moderatephoto').hide('slow', function() {
if(typeof data.success !="undefined"){
if(data.success){
alert('Thank you for notifying us.');
}else{
alert("Please try again later or copy link to photo and share it to <a href='mailto:members@viewbug.com'>members@viewbug.com</a>");
}
}

});
}
);*/
$(this).after('<img src="/media/images/layout/ajax-loader.gif" />');
$(this).hide();
});



$('.post-sale, .buy-print').each(function(){
$(this).attr('title', '');
});



$('#media_parental').submit(function(e) {
e.preventDefault();
var form = $(this);
var img = $('.block-photo .photo.parental img');

if (is_loggedin && $('#edit-permanent').is(':checked')) {
/*$.post(
form.attr('action'),
form.serialize(),
function(resp) {
redirect();
}
);*/

} else {
if (img.attr('parental')) {
img.attr('src', img.attr('parental')).removeAttr('parental');
if(typeof resizeMainImage!="undefined"){
resizeMainImage();
}
}
}
if(typeof view_adult!="undefined"){
view_adult=1;
}
$('.block-photo .photo.parental').removeClass('parental').find('img').css('width', 'auto');
form.closest('.popup').hide();
enableSubmit(this);

//Load next image
if(typeof replaceImage !="undefined"){
replaceImage($("html").hasClass("mobile"),true);
}
}
);

var getCommentItem = function(resp) {
if ($.browser.msie) {
var comment = $('<item></item>');

var comment_id = resp.match(/comment_id="(\d+)"/);
comment_id = comment_id[1];
comment.attr('comment_id', comment_id);

resp = resp.replace(/<[\/]*item.*?>/g, '');
resp = resp.replace('<thumbnail>', '<div class="thumbnail">');
resp = resp.replace('</thumbnail>', '</div>');

comment.html(resp);

var thumbnail = comment.find('.thumbnail');
thumbnail.replaceWith($('<thumbnail>').html(thumbnail.html()));

} else {
var comment = $(resp);
}

return comment;
}

var commentSubmit = function(form, onComplete) {
var form = $(form);
var data = form.serializeJSON();
if (logged()) {
if (checkForm(form)) {
/*$.post(
form.attr('action'),
data,
function(resp) {
var last = $('#comments > items > item:last');
var comment = getCommentItem(resp);
comment.addClass('last').addClass('hide');

if($('#comments > items > item').length == 0) {
$('#comments > items').append(comment);
last = $('#comments > items');
} else {
last.removeClass('last').after(comment);
}
$('#comments-count').html(parseInt($('#comments-count').html())+1);

form.find('textarea').addClass('empty').val('Write a comment');
setTimeout(function(){
enableSubmit(form, form.find('.form-submit, .form-facebook'));

scrollTo(last, -5, function() {
comment.slideDown(500, function(){
if (typeof onComplete != 'undefined') {
onComplete(data);
}
}
);
}
);
}, 500
);
}
);*/
} else {
enableSubmit(form, form.find('.form-submit, .form-facebook'));
}
}
}

$('#media_comment').addClass('prevent-default');
$('#media_comment').submit(function(e) {
e.preventDefault();
if($('body.challenge-page').length == 0) {
commentSubmit(this);
}
}
);

$('#media_comment .form-facebook').click(function(e) {
commentSubmit($('#media_comment'), function(data){
//Facebook Block
//alert("Function not available at this moment.");
return;
});
}
);

$('#media_reply_comment').addClass('prevent-default');
$('#media_reply_comment').submit(function(e) {
e.preventDefault();
var form = $(this);
var parent_id = $('#edit-parent_id').val();
if (logged()) {
if (checkForm(form) && parent_id > 0) {
/*$.post(
form.attr('action'),
form.serialize(),
function(resp) {
form.slideUp(500, function(){
form.find('textarea').addClass('empty').val('Write a comment');
var item = $('items.comments item[comment_id="'+ parent_id +'"]').removeClass('active');
var replies = item.find('items.replies');

var comment = getCommentItem(resp);
comment.addClass('last').addClass('hide');

if (replies.length <= 0) {
replies = $('<items></items>');
replies.addClass('replies');

item.append(replies);
}

replies.append(comment);

setTimeout(function(){
comment.slideDown();
}, 500
);
});
}
);*/
}
}
enableSubmit(form);
}
);

$('#media_reply_comment .form-reset').click(function(e) {
var form = $(this).parents('form:first');
var parent_id = $('#edit-parent_id').val();
$('items.comments item[comment_id="'+ parent_id +'"]').removeClass('active');

form.slideUp(500);
}
);

$('#edit-comment, textarea.comment').focus(function(){
logged();
});

$('#edit-link').click(function(e) {
if ($(this).attr('href').match(/my-account/)) {
return;
}
e.preventDefault();
var media_id = $(this).attr('media_id');

if (logged()) {
var button = $(this);
if (button.hasClass('loading')) {
return;
}
button.addClass('loading').find('.icon').addClass('spinner');

/*$.get(

function(response) {
button.removeClass('loading');

$('#photo-edit').html(response);
$('#photo-edit').slideDown();

//attachDatePickerEvent($('#photo-edit'));
attachFormValidateEvents($('#photo-edit'), function(e, form, valid) {
e.preventDefault();

$.post(
form.attr('action'),
form.serializeJSON(),
function(resp) {
$('#photo-edit').slideUp();
if (resp && resp.messages) {
setTimeout(function() {
setRespMessages(resp);
if (resp.messages.error) {
$('#photo-edit').slideDown();
} else {
redirect();
}
}, 500
);
}
}
);
});
}
);*/
}
});

$('#delete-photo-link').on('click', function(e) {
e.preventDefault();
/*if(logged()) {

function(resp){
if(resp.cant == 'finalist') {
popMessage('', 'Hi there, this photo has been<br /> awarded as a contest finalist.<br/><br/>If you still want to remove this photo,<br/>please contact us at <a href="mailto:members@viewbug.com">members@viewbug.com</a>', null, 'system');
} else if(resp.cant == 'chalenge') {
popMessage('', 'You have this photo as your challenge' + "'" + 's banner,<br />please wait to delete it until<br/>your challenge is closed<br/><br/>or contact us at <a href="mailto:members@viewbug.com">members@viewbug.com</a>', null, 'system');
} else {

var con_text = ($('#delete-photo-link').hasClass('cant-delete') ? 'This photo is in queue to be featured as a Hall of Fame. Do you still want to remove it?' : 'Are you sure you want to delete this photo?');
var con = confirm(con_text);
if (con) {
redirect(resp.cant ,'_parent');
}
}
});
}*/
});

$('#cancel-btn').on('click', function(e) {
e.preventDefault();
$('#photo-edit').slideUp();
$('#category_media_'+ $(this).attr('media_id')).remove();
});



//$('.post-sale').on('click',function(e) {
$(document).on('click','.post-sale',function(e) {
e.preventDefault();

var url = '';
if($('#sellphoto.website-sell').length > 0){
url = '/photo/sale?id=' + $('.img-selected').attr('id').replace("sale-","") + '&websites=true';
}else{
url = '/photo/sale?id=' + $(this).attr('id').replace("sale-","");
}
$.get(
url,
function(data){
$("#sellphoto").html('<div id="purchase-popup"><div id="modal"><div id="content">' + data + '</div></div></div>');
if($('#sellphoto.website-sell').length > 0){
$('#bg-sellphoto').fadeIn(500);
if($('#sell_photo_markup').length > 0){
$('#sellphoto.website-sell #purchase-popup #modal').addClass('photoprices');
}
//Vertically aling popup
var top = 5;
if($(window).height() >$('#photo_sale').height()){
top = ($(window).height() -$('#photo_sale').height())/2;
}
$('#sellphoto.website-sell #purchase-popup #modal').css({'top':top+'px'});

//Add classes to button
$('#purchase-popup #modal #photo_sale .a').removeClass('button');
$('#purchase-popup #modal #photo_sale .a').addClass('btn-black');
$('#purchase-popup #modal #photo_sale .a').addClass('btn-size');
$('#purchase-popup #modal #photo_sale .a').addClass('font-apple');
}

callReveal("#modal");
$('html,body').animate({scrollTop: $("#modal").offset().top},'slow');

$('#markup').focus(function() {
$number = $(this).val().replace(/\D/g,'');
$(this).val($number);
});

$('#markup').focusout(function() {
$(this).val( $(this).val() + "%");
});

$('#markup').keyup(function() {
$number = $(this).val().replace(/\D/g,'');
$(this).val($number);

$markup = $number / 100;

$.each($('.product-row'), function() {
$price = $(this).find('.product-price').val();
$markup_total = $price * $markup;
$total = parseFloat($price) + parseFloat($markup_total);

$(this).find('.product-markup').html($markup_total.toFixed(2));
$(this).find('.product-total').html($total.toFixed(2));
});
});

/*$('#post_sale').off().on('click', function() {
if(!$(this).hasClass('ignore')) {
$(this).addClass('ignore');

$markup = $('#markup').val().replace(/\D/g,'');

$.post(
'/photo/sale',
{ post_type: 'save', photo_id: $('#photo_id').val(), markup: $markup },
function(resp) {
$('#modal').trigger('reveal:close');
$('.post-sale').html("Edit Print Settings");
$('html,body').animate({scrollTop: $("body").offset().top},'slow');
}
);
}
});*/
//$('#post_sale').off().on('click', function() {
$(document).on('click','#post_sale', function() {
e.preventDefault();
if(!$(this).hasClass('ignore')) {
$(this).addClass('ignore');
$markup = $('#markup').val().replace(/\D/g,'');

$.post(
'/photo/sale',
{ post_type: 'save', photo_id: $('#photo_id').val(), markup: $markup },
function(resp) {
if($('#sellphoto.website-sell').length > 0){
$('#bg-sellphoto').click();
$('#sellphoto .reveal-modal-bg').click();
$('.sell-photos-btn .button.post-sale').addClass('disabled');
addToPrintCollection($('#photo_id').val());
}else{
$('#modal').trigger('reveal:close');
$('.post-sale').html("Edit Print Settings");
$('html,body').animate({scrollTop: $("body").offset().top},'slow');
}
}
);
}
});
}
);
});

if($('.buy-print').length>0){
$(document).on('click','.buy-print', function(e) { 
e.preventDefault();

//Prints purchases now redirects to VB for print type selection
const photoid = $(this).attr('id').replace("buy-","");
document.location = ('https://www.viewbug.com/photo/'+photoid+'/print?webprint');
return;

$.get(
'/photo/buy?id=' + $(this).attr('id').replace("buy-",""),
function(data){
if($('body.portfolio').length>0){
$("#sellphoto").show();
}
$("#sellphoto").html('<div id="purchase-popup"><div id="modal" class="payment-popup"><div class="vblogo"></div><div id="content">' + data + '</div></div></div>');
callReveal("#modal",true,true,"callbackClose");
$('html,body').animate({scrollTop: $("#modal").offset().top},'slow');

$('#select_countries').change(function() {
if($(this).val() == "NA") {
$(this).parent().parent().css('width', '100%');
} else {
$(this).parent().parent().css('width', '50%');
}

$('.select_state').parent().parent().hide();
$('#states_' + $(this).val()).parent().parent().show();
}).change();

var size = 265;
if($('#billing_address_wrapper #email').length > 0) {
size = 322;
//$('#billing_address_wrapper #email').parent().parent().width('100%');
$('#billing_address_wrapper #email').parent().parent().addClass('emailwidth');
$('#billing_address_wrapper #email').width(425);
}else{
$('#billing_address_wrapper #billing_location').addClass('noemail');
}

/*$('.required_billing').change(function() {
if($('#firstName').val() != "" && $('#lastName').val() != "" && $('#credit_card_number').val() != "" && $('#expire_month').val() != 0 && $('#expire_year').val() != 0 ) {
$('#billing_address_wrapper').animate({'height': size}, 500);
}
}).change();*/

$('#sellphoto').off().on('click','#div_print_type .form-radio',function() {
$('#div_size_description span').html($(this).val());
if($('#purchaseheadertitle').height() < 300) {
$('#purchaseheadertitle').animate({'height': 310}, 500);
$('#div_print_size').fadeIn(1500);
}

changeTotal();
if($(".canvas-preview-frame").is(":visible")){
setPrintPreview();
}
});

$('#div_print_size .form-radio').click(function() {
$('#popupheader').animate({'height': 370}, 500);
$('#div_print_qty').fadeIn(1500);
$('#purchaseheadertotal').fadeIn(1500);
changeTotal();

if($(".canvas-preview-frame").is(":visible")){
setPrintPreview();
}
else{
$("#printPreview").show();
}
});

$('#markup').focus(function() {
$number = $(this).val().replace(/\D/g,'');
$(this).val($number);
});

$('#print_qty').focusout(function() {
checkQty($(this));
changeTotal();
});

//Braintree
/*if(typeof loadBraintree!='undefined'){
loadBraintree();
}*/

$('.pay_close').on('click', function() {
if($('body.portfolio').length>0){
if($('body').hasClass('clientcollection')){
//$('#purchase-popup').fadeOut();
//$('#profile-cover-user #sellphoto').html('');
$('#purchase-popup').fadeOut(500, function() {
$(this).remove();
});
}else{
$('#purchase-popup').fadeOut();
}
}else{
$('.reveal-modal-bg').click();
}
});

$('.reveal-modal-bg').click(function() {
$('.pay_close').off('click');
});
}
);
});
}

//$('#paynow').on('click', function(e) {
$(document).on('click','#paynow', function(e) {
e.preventDefault();
if($('body').hasClass('saleprints')){

if(isDetailComplete()) {
var photo_id = $('#photo_id').val();
var detail = '#' + $("input[name='print_type']:checked").val() + '-' + $("input[name='print_size']:checked").val();
var detail_id = $(detail).attr('name');
var detail_txt = detail.replace('#','');

checkQty($('#print_qty'));
var qty = $('#print_qty').val();

var first = $('#firstName').val();
var last = $('#lastName').val();
var address1 = $('#address1').val();
var address2 = $('#address2').val();
var city = $('#city').val();
var zip = $('#billing_zip').val();
var country = $('#select_countries').val();
var state = $('#states_' + country).val();

var email = 'not';
if($('#billing_address_wrapper #email').length > 0) {
email = $('#billing_address_wrapper #email').val();
}

var price = $('#purchaseheadertotal span#totalpayment').html();

if(first && last && address1 && city && country != "NA" && email) {
if(($("#paynow").html()=="Please wait...")){
return;
}
$("#paynow").html("Please wait...");

var ad1 = address1.replace('#','');
var ad2 = address2.replace('#','');
var params = '?pid='+photo_id+'&dtl='+detail_txt+'&did='+detail_id+'&qty='+qty+'&fnm='+first+'&lnm='+last+'&ad1='+ad1+'&ad2='+ad2+'&cty='+city+'&ste='+state+'&ctr='+country+'&zip='+zip+'&eml='+email+'&prc='+price;
document.location = ('https://www.viewbug.com/upgrade/printpurchase'+params);
return;
} else {
alert('Please fill all data');
}
}else{
alert('Please select the Print Type and Size');
}

return;
}



if($('body').hasClass('photocollection-gallery') || $('body').hasClass('photographycollection') || $('body').hasClass('clientcollection')){

if($('.clientdownload #photo_collection_buy #edit-email').val() == ''){
//Add valid email validation //gg.
popMessage('Please add a valid email', 'ERROR', null, 'error');
return;
}

paynowsubmit_bt($('#photo_collection_buy'));
return;
}

if(typeof loadBraintree !='undefined'){
doPaymentBT();
return;
}

if(isDetailComplete()) {
var credit_card = $('#credit_card_number').val();
var invalid_card = false;

if(credit_card.charAt(0) != "X") {
credit_card = credit_card.replace(/\D/g,'');
if(credit_card.length != 16) {
invalid_card = true;
}
}

if(invalid_card) {
alert('Invalid Credit Card Number');
} else {
var photo_id = $('#photo_id').val();
var detail = '#' + $("input[name='print_type']:checked").val() + '-' + $("input[name='print_size']:checked").val();
var detail_id = $(detail).attr('name');

checkQty($('#print_qty'));
var qty = $('#print_qty').val();

var first = $('#firstName').val();
var last = $('#lastName').val();

var credit_card = $('#credit_card_number').val();
var month = $('#expire_month').val();
var year = $('#expire_year').val();
var type = $('#card_type').val();
var cvv = "";//$('#cvv').val();

var address1 = $('#address1').val();
var address2 = $('#address2').val();
var city = $('#city').val();
var zip = $('#zip').val();
var country = $('#select_countries').val();
var state = $('#states_' + country).val();

var email = 'not';
if($('#billing_address_wrapper #email').length > 0) {
email = $('#billing_address_wrapper #email').val();
}

if(first && last && credit_card && month && year&& address1 && city && zip && country != "NA" && email) {
if(($("#paynow").html()=="Please wait...")){
return;
}
$("#paynow").html("Please wait...");

$.post(
'/cart/checkoutphoto',
{ photo_id: photo_id, detail_id: detail_id, quantity: qty,
firstName: first, lastName: last, address1: address1, address2: address2, city: city, state: state, country: country, zip: zip,
credit_card_number: credit_card, cvv: cvv, expire_month: month, expire_year: year, card_type: type,
email: email },
function(resp) {
if(resp.success == 0) {
alert("We were unable to process your payment. Please verify and try again. If the problem persists, contact us to complete your order.");
} else {


$('#popup-clear-main').addClass('print').html('<div class="text">Thank you!<br />Your print will be ready soon.<a href="javascript:" class="continue-print">Continue browsing</a></div>').fadeIn(500);

$('.continue-print').on('click', function() {
$('#popup-clear-main').fadeOut(200, function() { $(this).html('').removeClass('print'); });
$('#modal').trigger('reveal:close');
});
}
$("#paynow").html("Pay now");
}
);

} else {
alert('Please fill all data');
}
}
} else {
alert('Please select the Print Type and Size');
}
});

$('#post_sale').on('click', function() {
if(!$(this).hasClass('ignore')) {
$(this).addClass('ignore');

$markup = $('#markup').val().replace(/\D/g,'');

/*$.post(

{ post_type: 'save', photo_id: $('#photo_id').val(), markup: $markup },
function(resp) {
if($('#sellphoto.website-sell').length > 0){
$('#bg-sellphoto').click();
$('.sell-photos-btn .button.post-sale').addClass('disabled');
addToPrintCollection($('#photo_id').val());
}else{
$('#modal').trigger('reveal:close');
$('.post-sale').html("Edit Print Settings");
$('html,body').animate({scrollTop: $("body").offset().top},'slow');
}
}
);*/
}
});

$(document).on('click','#detele_sale', function() {
if(!$(this).hasClass('ignore')) {
$(this).addClass('ignore');
$.post(
'/photo/sale',
{ post_type: 'delete', photo_id: $('#photo_id').val() },
function(resp) {
if($('#sellphoto.website-sell').length > 0){
$('#bg-sellphoto').click();
$('#sellphoto .reveal-modal-bg').click();
removeFromPrintCollection($('#photo_id').val());
}else{
$('#modal').trigger('reveal:close');
$('.post-sale').html("Post For Sale");
$('html,body').animate({scrollTop: $("body").offset().top},'slow');
}
}
);
}
});

$('.post-award').click(function(e){
e.preventDefault();
$(".soc-photo-wrapper").removeClass("hideme");
});

// When the user want to see all the peer recognitions.
$('.peer-left a').on("click",function(e){
showPeerLeft(this,e);
});

function showPeerLeft(_this,e){

if($("body").hasClass("frontpage")){
$(_this).attr("href","/photo/" + $("#phopp").attr("data-id"));
//document.location = "/photo/" + $("#phopp").attr("data-id") + "#photo-info";
openPhotoFrame(e,_this);
return;
}

var obj = $(_this).parent().parent();
var award = $(_this).attr("data-award");
var leftAwards = $(_this).attr("data-left");
var dataPage = $(_this).attr("data-page");
$(_this).parent().html("").remove();

/*

$(obj).find("loading").hide();
$(obj).append(data);
$(".hiderecogitem").css({ display: 'inline-block'});
});*/
}


$(window).scroll(function() {
if($('.popular.logged-in .div-wide').length > 0) {
 var top = $(window).scrollTop();
 if(top > 45) {
 $('.div-wide').css('margin-top','-45px');
 } else {
 $('.div-wide').css('margin-top','-' + top + 'px');
 }
}
});

$(".gall_photoscol").click(function(e){
e.preventDefault();
$("gallery.waterfall400").removeClass("onecol");
$("gallery.waterfall400").removeClass("twocols");
$("gallery.waterfall400").addClass($(this).attr("data-class"));

$(".gall_photoscol").removeClass("active");
$(this).addClass("active");

masonryLoad();

});

resizeBlockTabs();
$( window ).resize(function() {
resizeBlockTabs();
});

init_word_counter($('#edit-comment'), $('#commentbox .form-submit'), 200, ' characters left<span class="hidemelarge">, make it a critique</span>', 'Post Critique');

if($('body.photopage').length > 0) {

if($("html").hasClass("mobile")) {

$('.share-with-friends-mobile').on("click", function(event) {
/*$('#siddebar-content').find('.content').after('<div class="share-text" style="width: 100%; text-align: center;font-size: 14px;padding: 10px 0px;background-color: #77b4e5;margin-bottom: 24px; color: #fff;">\
Your friends might like this photo too. Share it!</div>');
$('.share-text').show('slow');*/
$('.share-with-friends-mobile').unbind('click');
$('.share-with-friends-mobile').removeClass('share-with-friends-mobile');
//alert('lalal');
});

} else {

$('.share-with-friends').click(function(event) {
/*$(this).after('<span style="display: none; float: right; line-height: 24px; padding: 0px 10px; color: #27A4DD; font-size: 12px; margin-top:-2px; height:30px;" class="share-text">\
 Your friends might like this photo too. Share it <img style="position: relative; top: 7px; width:21px; height:21px;" src="/media/images/layout/social_arrow.png" alt="share" /> \
 </span>');
$(this).next('.share-text').fadeIn(1200);//.show('slow');*/
$('.share-with-friends').unbind('click');
$('.share-with-friends').removeClass('share-with-friends');
});
}

}

/*$('span.pop').each(function(){
var description = $(this);
if (!description.parent().hasClass('dropdown')) {
description.tipsy({
title: function() {
return description.attr('original-title');
},
gravity: 's',
}).mouseenter(function(){
$(".tipsy-arrow").remove();
$(".tipsy-south").append('<div class="tipsy-arrow"> <img src="/vb2/public/css/images/flyout-arrow-horizontal.png" /></div>'); 
});
}
$(this).blur(function() {
$('.tipsy').hide();
});
});*/

if($('#share-photo').length > 0) {
$('#popup-clear-bg').addClass('share-photo').delay(3000).fadeIn(1000);
$('#share-photo').delay(3000).fadeIn(1000);

$('#popup-clear-bg, .pop_cont_close').on("click",function(e) {
$('#popup-clear-bg, #share-photo').fadeOut(1000);
});
}

if($("html").hasClass("mobile")){
removeImageLazy();
}

if($('.photopage.index.logged-out').length > 0) {
$('#signup-popup-bg-gall, #signup-popup-gall').delay(3000).fadeIn(1000, function() {
$('body').css({ overflow:'hidden' });
});
}
});

var wasResized=false;
function resizeBlockTabs(){

}

function checkQty(qtyy) {
$number = qtyy.val().replace(/\D/g,'');
if($number == '' || $number == 0) {
$number = 1;
}
if($number > 5) {
$number = 5;
}

qtyy.val($number);
}

function changeTotal() {
if(isDetailComplete()) {
$price_id = '#' + $("input[name='print_type']:checked").val() + '-' + $("input[name='print_size']:checked").val();
$price = $($price_id).val() * $('#print_qty').val();
$('#totalpayment').html( $price );
}
}

function isDetailComplete() {
if($("input[name='print_type']:checked").val() != undefined && $("input[name='print_size']:checked").val() != undefined) {
return true;
} else {
return false;
}
}

/*(function() {
window.PinIt = window.PinIt || { loaded:false };

if (window.PinIt.loaded) {
return;
}

window.PinIt.loaded = true;

function async_load(){
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
if (window.location.protocol == "https:")
s.src = "https://assets.pinterest.com/js/pinit.js";
else
s.src = "http://assets.pinterest.com/js/pinit.js";

var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);

timePinterest=setInterval(function(){checkCounterPinterest()},2000);
}

if (window.attachEvent)
window.attachEvent("onload", async_load);
else
window.addEventListener("load", async_load, false);
})();*/

/*function checkCounterPinterest(){
var alink = $(".pinterest a").html();

if(alink==null){
window.clearInterval(timePinterest);
return;
}

if(alink == '<img src="//assets.pinterest.com/images/pidgets/pin_it_button.png">'){
return true;
}

if(alink.indexOf("_hidden")<1){
$("#socialswraps .pinterest").css("left","-65px");
$("#socialswraps .fb-like.fb_edge_widget_with_comment.fb_iframe_widget").css("left","-145px");
} 

window.clearInterval(timePinterest);
return false;

}*/

function wallToolCallback(data,caller){
if(typeof data.error =="undefined" || data.error==""){
var type = $(caller).attr("type");
//Is Peer

var obj_sum ="";
var media_id=0;
var htmlappend ="";
var htmlprepend ="";

if(typeof type !="undefined" && type!=""){
media_id = $(caller).attr("media_id");
obj_sum = "#peer-" + media_id;

if($(obj_sum).length==0){
htmlprepend = ('<span id="peer-' + media_id + '">0 </span> <span class="desc">Peer Awards</span> &nbsp; ');
}

}
//Is LIKE
else{
media_id = $(caller).attr("data-media-id");
obj_sum = "#like-" + media_id;

if($(obj_sum).length==0){
htmlappend = ('<span id="like-' + media_id + '">0 </span> <span class="desc">Likes</span>');
}
}

var peerlikes = $("thumbnail#media-" + media_id).find(".peerlikes");

if($(peerlikes).length==0){
$(caller).find(".socials > .content").html('<div class="peerlikes"></div>');
}

$(peerlikes).prepend(htmlprepend);
$(peerlikes).append(htmlappend);

var total = parseInt($(obj_sum).text());
if(isNaN(total)){
total=0;
}


$(obj_sum).animate({opacity:'0.1'},"slow",function(){
$(obj_sum).text(total + 1);
}).animate({opacity:'1'},"slow");


}
}

function fb_like(media_href,obj,prize,media_id,picture_href,picture_caption){
fb_shareBox(media_href + "?m=feed_vote_my&p=" + prize);

return;
}

function fb_likeStats(media_href,obj,media_id,picture_href,picture_caption, share_description,types){
if(typeof share_description!=="undefined" && share_description!==""){
share_description = "ot=" + encodeURIComponent(share_description);

if(typeof types==="undefined" || types===""){
share_description = "?" + share_description;
}
else{
share_description = "&" + share_description;
}
}
else{
share_description="";
}
if(typeof types==="undefined" || types===""){
types ="";
}
fb_shareBox(media_href + types + share_description);


return;
}

function callbackClose(){
if($(".canvas-preview-frame").is(":visible")){
$(".wrapper-print_preview").remove();
}
}

if(!$("html").hasClass("mobile") && $("body").hasClass("photopage") && $(document).width() < 1250 ){
$("#main_image").css("width","100%");
}

$(window).scroll(function (event) {

var windowY = $(this).scrollTop();

if($('.logged-in .block-tabs').length > 0 && $('.mobile').length == 0) {
var nav_top = 44 - windowY;
if(nav_top < 0) {
nav_top = 0;
} else if(nav_top > 44) {
nav_top = 44;
}

$('.block-tabs').css({ top: nav_top });
}

});
/*
if ($("html").hasClass("mobile") && !$("body").hasClass("gal400")) {
$("div.dropdown.awardpopup > a").click(function(e) {
e.preventDefault();
showMobilePopupAward(false);
});
$("div.dropdown.awardpopup > a").mouseover(function(e) {
e.preventDefault();
showMobilePopupAward();

});

if ($("html").hasClass("mobile")) {
$("#award_popup").click(function(e) {
if ($("#awardpopuplayover").is(":visible")) {
hidePopupAward();
}
});
$("#award_popup").appendTo("body");
$("#awardpopuplayover").appendTo("body");
}

function showMobilePopupAward(is_resize) {

if (is_resize && !popup.is(":visible")) {
return;
}

$(".awardpopup a > span.icon").addClass("open");
$("#award_popup").css({ opacity: 1 }).show();
$("#awardpopuplayover").show();

}

function hidePopupAward() {
$(".awardpopup a > span.icon").removeClass("open");
$("#wrapper").removeClass("blur");


if (!$("html").hasClass("mobile")) {
$("#award_popup").animate({
opacity: 0
}, 500, function() {
$("#award_popup").hide();
});
}
else {
$("#award_popup").hide();
}

$("#awardpopuplayover").hide();
}
}
*/

/* AWARD POPUP */
if ($("html").hasClass("mobile") ) {
$("div.dropdown.awardpopup > a").on("click",function(e) {
e.preventDefault();
showMobilePopupAward(this,false);
});
$("div.dropdown.awardpopup > a").on("mouseover",function(e) {
e.preventDefault();
showMobilePopupAward(this);

});

if($("#awardpopuplayover").length ===0){
$("body").append(' <div id="awardpopuplayover" onclick="hidePopupAward();" style="display:none;"></div><div id="award_popup" class="award_popup" style="display:none;"></div>');
}else if($("#award_popup").length ===0){
$("body").append(' <div id="award_popup" onclick="hidePopupAward();" class="award_popup" style="display:none;"></div>');
}

//Shows popup when the users enters to the fame gallery to test icons
if($('#famex-popup-bg-gall').length > 0){
$("#awardpopuplayover").show();
$("#award_popup_exclusive").show();
}

function showMobilePopupAward(obj, is_resize) {

if(!$(obj).hasClass('vbawarded')) {
//if(is_loggedin) {
var id = $(obj).attr("data-id");
var html = $("#award_popup"+id).html();

if (is_resize && !popup.is(":visible")) {
return;
}

$("#award_popup").html(html);
//$(".awardpopup a > span.icon").addClass("open");
$("#award_popup").css({ opacity: 1 }).show();
$("#awardpopuplayover").show();


$(obj).addClass('vbawarded');
var dropdown_wrapper = $(obj);

dropdown_wrapper.animate({opacity: '0.1'}, "slow", function() {
dropdown_wrapper.addClass("ajaxfavorited");
var totalpeer = dropdown_wrapper.children('.mask-ani').children('.mask-text').html();
if(totalpeer.indexOf("K") > -1) {
} else {
totalpeer = parseInt(dropdown_wrapper.children('.mask-ani').children('.mask-text').html()) + 1;
}
dropdown_wrapper.children('.mask-ani').children('.mask-text').html( totalpeer );

if(dropdown_wrapper.hasClass('peerwall') && $('#peer-' + id).length > 0) {
$('#peer-' + id).html( totalpeer );
}

$('.top-buttons .top-award').addClass('awarded');
}).animate({opacity: '1'}, "slow");
/*$.post(

{type: 'peer_award'},
function(data) {}
);*/
//}
}
}

function hidePopupAward(obj) {
$(".awardpopup a > span.icon").removeClass("open");
$("#wrapper").removeClass("blur");

if (!$("html").hasClass("mobile")) {
$("#award_popup").animate({
opacity: 0
}, 500, function() {
$("#award_popup").hide();
});

}
else {
if($('#famex-popup-bg-gall').length > 0){
document.location.href = '/fame';
}
$("#award_popup").hide();
}

$("#awardpopuplayover").hide();
}
}

$(".social-icons").on("mouseover",function(e) {
var base = $(this).find(".feature-photo-byuser-container");
if(base.length > 0) {
var popup = $(base).find(".award_popup");

var l = $(base).offset().left;
var wp = $(popup).width();
var ww = $(window).width();

popup.css("margin-left",0);

if (ww < (wp + l)) {
popup.css("margin-left", -wp+$(base).width());
}

//Check image in bottom
var ph = $(popup).height(); //Popup Height
var wh = $(document).height();
var t = $(base).offset().top;
if(wh < (ph + t + 50)){
//alert( (ph + t) + " > " + wh);
var bh = 65;//$(base.height());
//popup.css("margin-top", - ph - bh);
}
}
});

var historyState=null;
if(history.state != null && history.state.url==location.pathname){
historyState= history.state;
window.onpopstate = function(event){
if(history.state==null){
var _id = $(".protect-photo").attr("media-id");
if(location.pathname!= ("/photo/"+_id)){

querys="bb&";
if(historyState.search!=null){
var p = historyState.search;
for (var key in p) {
if (p.hasOwnProperty(key) && typeof key!=="undefined" && ( key!="currpage" ) ) {
querys = querys + (key + "=" + p[key]) + "&";
}
}
}
document.location=location.pathname + "?" + querys +"currpage=" + historyState.page + "&pos=" + historyState.lastPos[1] + historyState.hash;
}
}
};
}


function init_word_counter(comment_box, submit_button, toggle_count, custom_text, button_toggle_text){

var toggle_critique = toggle_count;
var original_text = submit_button.val();
$('.word-count .critique-count').html(toggle_critique);
$('.word-count .critique-text').html(custom_text);

comment_box.keyup(function(event) {

var count = $(this).val().length;
var remaning = toggle_critique - count;
$('.word-count .critique-count').html(remaning);

if (remaning <= 0) {
submit_button.val(button_toggle_text);
$('.word-count').hide();

} else {

submit_button.val(original_text);

if ($('.word-count:hidden')) {
$('.word-count').show();
};
}
});
}

if(typeof removeImageLazy!=="function"){
function removeImageLazy(){

$(".delayedban").animate({opacity:1},function(){ $(this).removeClass('delayedban'); });

var tiles = $('.lazy');
tiles.each(function(i) {
$(this).fadeTo(500,1);
var src = $(this).attr("data-src");
if(typeof src!="undefined" && src.length>0){

if($(this).attr('data-waittocomplete')==='true'){
var heavyImage = new Image(); 
heavyImage.src = src;
$(this).removeClass("lazy");
$(this).removeAttr("data-src");
$(this).removeAttr("data-waittocomplete");
var obj= this;
heavyImage.onload = function() {
if($(obj).hasClass("delayed")){
$(obj).attr("src",src);
}
$(obj).removeClass('delayed');
};
return;
}

if( $(this).attr("data-nodelayedyet")=="true" ){
return;
}
$(this).attr("src",src);
$(this).attr("data-src","");
$(this).removeAttr("data-src");
$(this).removeClass("lazy");
if($('body').hasClass("photopage")){
$(this).removeAttr("height");
}
}
});

}
}

/*copied from default */
if(typeof fb_shareBox!=="function"){
function fb_shareBox(url,discriminator){

if(typeof discriminator =="undefined"){
discriminator='general';
}
var output = 'Please wait...';
window.open('','facebook-share-dialog','width=626,height=436').document.write(output);

/*

window.open(
'https://www.facebook.com/sharer/sharer.php?='+encodeURIComponent(url) + "&display=popup", 
'facebook-share-dialog', 
'width=626,height=436');
});*/

}
}

/*Gallery signup popup*/
function signupPopup(){
if (!is_loggedin) {
var url = '';
/*if($('body.profile').length > 0){
url = 'signup';
redirect(false && version == 1 ? '/' + url: '/user/'+url+'?destination='+ escape(window.location.pathname));
}else if($('body.photopage').length > 0){
url = 'login';
redirect(false && version == 1 ? '/' + url: '/user/'+url+'?destination='+ escape(window.location.pathname));
}else{
$('body').css({ overflow:'hidden' });
$('#signup-popup-bg-gall, #signup-popup-gall').show();
}*/

$('#ambassadors').hide();
}

return is_loggedin;
}

var rgba_color = $('#hidden-rgba').html();

$(document).ready(function() {
var ww = $(window).width();
imageFit(ww);

//Set album on first image
$('#panorama-content').scrollLeft(0);
$('#panorama-content .panorama-gallery').fadeIn(500);

if($('.left-container .user-logo').length > 0){
$('.left-container').addClass('wlogo');
}

//Highlights current album on left column
if($('#panorama-content .panorama-about').length > 0){
$('.albums-list ul li#abt a').addClass('selected'); 
}else{
var id = $('.panorama-gallery ul').attr('id');
$('.albums-list ul li#'+ id + ' a, .options-cover .albums ul li#'+ id + ' a').addClass('selected'); 
}

//window resizing
$(window).resize(function(){
var width = $(window).width();
imageFit(width);
});

var left = 0;
//Arrows actions for slider
$('.panorama-gallery-arrows .arrow').click(function(){
if($(this).hasClass('prev')){
if($('.panorama-gallery ul li.first.prev').length>0){
$('.panorama-gallery-arrows .arrow.prev').fadeOut(500);
$('#panorama-content .left-fixed').css({'background':'rgba('+rgba_color+',1)'});
}
$('.panorama-gallery-arrows .arrow.next').fadeIn(500);
galleryMovment('prev');
}else if($(this).hasClass('next')){
if($('.panorama-gallery ul li.last.next').length>0){$('.panorama-gallery-arrows .arrow.next').fadeOut(500);}
$('.panorama-gallery-arrows .arrow.prev').fadeIn(500);
galleryMovment('next');
$('#panorama-content .left-fixed').css({'background':'rgba('+rgba_color+',0.5)'});
}
});

//setting initial states for arrows
$('.panorama-gallery ul li').first().addClass('first current');
$('.panorama-gallery ul li').last().addClass('last');
$('.panorama-gallery ul li').first().next('.relative').addClass('next');

hideArrows(mycallbackfunc);

//Removes cover on customize settings
if($('body').hasClass('istemp')){
$('.istemp .content .loading-cover').fadeOut(200);
}
});

$('#panorama-content').scroll(function(){
if($(window).width() < 970 && !$('.options-cover').is(':visible')){
if($(this).scrollTop() > 0){
$('#panorama-content .left-fixed').css({'background':'rgba('+rgba_color+',0.5)'});
}
}
});

//fits image to gallery
function imageFit(ww){
if(parseInt(ww)>970){
var element = '';
if($('.panorama-top-mobile').is(":visible")){
element = 'panorama-top-mobile';
}else{
element = 'header';
}
$('#panorama-content .panorama-gallery ul li img').not('#watermark-photo img').height($('.panorama-gallery').height());
}else{
$('#panorama-content .panorama-gallery ul li img').not('#watermark-photo img').height('auto');
}
}

//gets parameters from url
function getQueryVariable(variable)
{
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
var pair = vars[i].split("=");
if(pair[0] == variable){return pair[1];}
}
return(false);
}

function homeLink(gohome){
window.location.href = gohome;
}

function showAlbums(obj){
if(!$(obj).hasClass('close')){
$(obj).addClass('close');
//$(obj).children('img').attr('src','/media/images/layout/close.png');
$('.ham-menu').hide();
$('.close-xbar').css({'display':'flex'});
$('.options-cover').fadeIn(500);
}else{
$(obj).removeClass('close');
$('.close-xbar').hide();
$('.ham-menu').show();
//$(obj).children('img').attr('src','/media/images/layout/navbar_icon_gr.png');
$('.options-cover').fadeOut(500);
}
}

function galleryMovment(direction){
if(direction==="prev"){
var current = $('.panorama-gallery ul li.current');
var currentId = current.attr('id');
var prv = $('#'+currentId).prev().attr('id');

//previos element is now current
$('#'+currentId).prev().addClass('current');
$('#'+currentId).prev().removeClass('prev');
//current element is now next
$('#'+currentId).removeClass('current');
$('#'+currentId).addClass('next');
//next element without class
$('#'+currentId).next('.relative').removeClass('next');
//previus from now current is previous
$('.panorama-gallery ul li.current').prev().addClass('prev');

var pos = $('.panorama-gallery ul li#'+prv).position().left;
var imgw = $('.panorama-gallery ul li#'+prv).width();
var ww = $(window).width();
var scrollpos = (ww/2)-(imgw/2)-(ww-pos-imgw)-150;
$('#panorama-content').animate( { scrollLeft: '+='+scrollpos }, 500);
}else{
var current = $('.panorama-gallery ul li.current');
var currentId = current.attr('id');
var nxt = $('#'+currentId).next('.relative').attr('id');

//next element is now current
$('#'+currentId).next('.relative').addClass('current');
$('#'+currentId).next('.relative').removeClass('next');
//current element is now previous
$('#'+currentId).removeClass('current');
$('#'+currentId).addClass('prev');
//previous element without class
$('#'+currentId).prev().removeClass('prev');
//next element from now current is next
$('.panorama-gallery ul li.current').next('.relative').addClass('next');

var pos = $('.panorama-gallery ul li#'+nxt).position().left;
var imgw = $('.panorama-gallery ul li#'+nxt).width();
var ww = $(window).width();
var scrollpos = (ww/2)-(imgw/2)-(ww-pos-imgw)-150;
$('#panorama-content').animate( { scrollLeft: '+='+scrollpos }, 500);
}
}

function hideArrows(mycallback){
$('.panorama-gallery-arrows .arrow.prev').hide();
if($('#panorama-content .panorama-gallery ul li').length < 2){
$('.panorama-gallery-arrows .arrow.next').hide();
}else{
var winw = $(window).width();
var liw = 0;
var i = 0;
$('#panorama-content .panorama-gallery ul li').each(function(){
liw += $(this).children('img').width();
if(liw > winw){
return false;
}
i++;
});
if(parseInt(liw) <= parseInt(winw)){
$('.panorama-gallery-arrows .arrow.next').hide();
}
mycallback();
}
}

function loadHeavyImages(){
$('#panorama-content .panorama-gallery ul li').each(function(){
var img = $(this).children('img');
var heavyImage = new Image();
var imgsize = '_large1300.jpg';
var imgsrc = img.attr('src');
heavyImage.src = imgsrc.replace('_medium.jpg',imgsize);

heavyImage.onload = function(){
img.attr('src',heavyImage.src);
};
});
}

function mycallbackfunc(){
var ww = $(window).width();
if(ww > 600){
loadHeavyImages();
}
}
$(document).ready(function() {
//Closes popup of enlarged photo
$('#bg-portfolio-photo').click(function(){
closeSlider();
});

//Slider arrows actions
var pos = 0;
var direction = '';
$('.portfolio-slide-container .arrow').click(function(){
pos = parseInt($('#show-portfolio-photo .current').attr('ps'));
if($(this).hasClass('prev')){
direction = 'prev';
}else{
direction = 'next';
}
prevNextImg(direction,pos);

});

var ww= $(window).width();
var wh= $(window).height();

$(window).resize(function(){
var imgw = $('#show-portfolio-photo .current').width();
var imgh = $('#show-portfolio-photo .current').height();
sliderImageResizer(imgw,imgh,wh,ww);
});
});


//****************SLIDER FUNCTIONS***********************


//Shows next or previous img
function prevNextImg(direction,pos){
var mxp = $('.photo-gallery-container .thumbnail-photo input').attr('mxp');
var limit = '';
if($('#profile-cover-user.highlight-theme').length > 0 || $('#profile-cover-user').hasClass('likin-theme') || $('#profile-cover-user').hasClass('mojo-theme')){
mxp = $('#galinf').children().first().children('.content').children('div').children('img').attr('maxpos');
}
$('.portfolio-slide-container .arrow').show();
if(direction==='next'){
if(parseInt(pos+1)===parseInt(mxp)){
limit = 'limit';
$('.portfolio-slide-container .arrow.next').hide();
}
moveNext(pos+1,limit);
}else{
if(parseInt(pos)-1===0){
limit = 'limit';
$('.portfolio-slide-container .arrow.prev').hide();
}
movePrev(pos-1,limit);
}

}

//Moves clases to show next image
function moveNext(pos,limit){
$('#show-portfolio-photo .prev').remove();
$('#show-portfolio-photo .current').hide();
$('#show-portfolio-photo .current').addClass('prev');
$('#show-portfolio-photo .current').attr('ps',parseInt(pos)-1);
$('#show-portfolio-photo .current').removeClass('current');
$('.slider-loader').fadeIn(500);
$('#show-portfolio-photo .next').fadeIn(200);
$('#show-portfolio-photo .next').addClass('current');
$('#show-portfolio-photo .next').attr('ps',parseInt(pos));
$('#show-portfolio-photo .next').removeClass('next');
$('#show-portfolio-photo').append('<div class="next">'+watermarkdiv()+'</div>');
$('#show-portfolio-photo .next').attr('ps',parseInt(pos)+1);
$('#show-portfolio-photo .next').hide();

//If img to show was not preloaded correctly
if ($('#show-portfolio-photo .current').css('background-image') === 'none'){
loadNotPreloaded(pos);
}

if(limit!=='limit'){
loadNextImg(pos);
}
}

//Moves clases to show previous image
function movePrev(pos,limit){
$('#show-portfolio-photo .next').remove();
$('#show-portfolio-photo .current').hide();
$('#show-portfolio-photo .current').addClass('next');
$('#show-portfolio-photo .current').attr('ps',parseInt(pos)+1);
$('#show-portfolio-photo .current').removeClass('current');
$('.slider-loader').fadeIn(500);
$('#show-portfolio-photo .prev').fadeIn(200);
$('#show-portfolio-photo .prev').addClass('current');
$('#show-portfolio-photo .prev').attr('ps',parseInt(pos));
$('#show-portfolio-photo .prev').removeClass('prev');
$('#show-portfolio-photo').append('<div class="prev">'+watermarkdiv()+'</div>');
$('#show-portfolio-photo .prev').attr('ps',parseInt(pos)-1);
$('#show-portfolio-photo .prev').hide();

if ($('#show-portfolio-photo .current').css('background-image') === 'none'){
loadNotPreloaded(pos);
}

if(limit!=='limit'){
loadPrevImg(pos);
}
}

//opens slider from clicked thumbnail 
function openImgSlider(selected){
$('.slider-loader').fadeIn(500);
$('#show-portfolio-photo .current').css('background-image','url()');
var waterfile = '';
var waterpos = '';
var bgimg = selected.children('img').attr('src');
var orw = selected.children('input').attr('orw');
var orh = selected.children('input').attr('orh');
var pos = selected.children('input').attr('ps');
var mxp = selected.children('input').attr('mxp');

//checks for image watermark
waterfile = selected.children('input').attr('waterfile');
waterpos = selected.children('input').attr('waterpos');
if(waterfile!==''){waterfile = '/media/'+waterfile;}
if(waterpos!==''){waterpos = 'watpos'+waterpos;}
if($('#profile-cover-user.josselin-theme').length > 0){
bgimg = selected.children('input').attr('orfile');
}

//shows slider elements
$('#bg-portfolio-photo').fadeIn(500);
$('#show-portfolio-photo').fadeIn(500);
$('.portfolio-slide-container .close-slider').fadeIn(500);

$('#show-portfolio-photo .next').hide();
$('#show-portfolio-photo .prev').hide();

showImgSlider(orw,orh,pos,mxp,bgimg,waterfile,waterpos);
}

//Shows next,previous image and control arrows
function showImgSlider(orw,orh,pos,mxp,bgimg,waterfile,waterpos){
$('.portfolio-slide-container .arrow').fadeIn(500);
sliderImageSize(orw,orh,pos,'current');
loadHeavyImg(bgimg,'current');

//shows watermartk on current image
cleanWaterMark('current');
$('.current #watermark-photo').addClass(waterpos);
$('.current #watermark-photo img').attr('src',waterfile);

if(parseInt(pos)===0){
$('.portfolio-slide-container .arrow.prev').hide();
$('#show-portfolio-photo .prev').remove();
}else{
if($('#show-portfolio-photo .prev').length === 0){
$('#show-portfolio-photo').append('<div class="prev">'+watermarkdiv()+'</div>');
cleanWaterMark('prev');
}
//preloads previous image
loadPrevImg(pos);
}
if(parseInt(pos)===parseInt(mxp)){
$('.portfolio-slide-container .arrow.next').hide();
$('#show-portfolio-photo .next').remove();
}else{
if($('#show-portfolio-photo .next').length === 0){
$('#show-portfolio-photo').append('<div class="next">'+watermarkdiv()+'</div>');
cleanWaterMark('next');
}
//preloads next image
loadNextImg(pos);
}
}

function loadNextImg(pos){
var next = '';
var imgnext = '';
var nextorw = '';
var nextorh = '';
var nextpos = '';
var waterfile = '';
var waterpos = '';
var nextpos = parseInt(pos)+1;

if($('#profile-cover-user.highlight-theme').length > 0 || $('#profile-cover-user').hasClass('likin-theme') || $('#profile-cover-user').hasClass('mojo-theme')){
next = $("#galinf").find("thumbnail .content img[pos='" + nextpos + "']");
//imgnext = next.attr('orfile');
imgnext = next.attr('src');
nextorw = next.attr('orw');
nextorh = next.attr('orh');
waterfile = next.attr('waterfile');
waterpos = next.attr('waterpos');
}else{
next = $(".photo-gallery-container").find(".thumbnail-photo[ps='" + nextpos + "']");
imgnext = next.children('img').attr('src');
if(($('.aura-theme').length > 0 || $('.chance-theme').length > 0 || $('#profile-cover-user.horizline-theme').length > 0) && typeof(imgnext) === 'undefined'){
var max = $('.photo-gallery-container ul li').first().children('input').attr('mxp');
if(nextpos < max){
imgPagination();
}
}
if($('#profile-cover-user.josselin-theme').length > 0){
imgnext = next.children('input').attr('orfile');
} 
nextorw = next.children('input').attr('orw');
nextorh = next.children('input').attr('orh');
waterfile = next.children('input').attr('waterfile');
waterpos = next.children('input').attr('waterpos');
}

//checks for watermark on photos
//if(typeof(waterfile)!== "undefined" && waterfile!==''){
if(typeof(waterfile)!== "undefined" && waterfile!=='' && typeof(waterpos)!== "undefined" && waterpos!==''){
waterfile = '/media/'+waterfile;
waterpos = 'watpos'+waterpos;
cleanWaterMark('next');
$('.next #watermark-photo').addClass(waterpos);
$('.next #watermark-photo img').attr('src',waterfile);
}

sliderImageSize(nextorw,nextorh,nextpos,'next');
if(typeof(imgnext) !== 'undefined'){
loadHeavyImg(imgnext,'next');
}
}

function loadPrevImg(pos){
var prev = '';
var imgprev = '';
var prevorw = '';
var prevorh = '';
var prevpos = '';
var waterfile = '';
var waterpos = '';
var prevpos = parseInt(pos)-1;

if($('#profile-cover-user.highlight-theme').length > 0 || $('#profile-cover-user').hasClass('likin-theme') || $('#profile-cover-user').hasClass('mojo-theme')){
if(prevpos===0){
prev= $('#galinf').children().first().children('.content').children('div').children('img');
imgprev = $('#galinf').children().first().children('.content').children('div').children('img').attr('src');
}else{
prev = $("#galinf").find("thumbnail .content img[pos='" + prevpos + "']");
imgprev = prev.attr('src');
}
prevorw = prev.attr('orw');
prevorh = prev.attr('orh');
waterfile = prev.attr('waterfile');
waterpos = prev.attr('waterpos');
}else{
prev = $(".photo-gallery-container").find(".thumbnail-photo[ps='" + prevpos + "']");
imgprev = prev.children('img').attr('src');
if($('#profile-cover-user.josselin-theme').length > 0){
imgprev = prev.children('input').attr('orfile');
}
prevorw = prev.children('input').attr('orw');
prevorh = prev.children('input').attr('orh');
waterfile = prev.children('input').attr('waterfile');
waterpos = prev.children('input').attr('waterpos'); 
}

//checks for watermark on photos
if(typeof(waterfile)!== "undefined" && waterfile!=='' && typeof(waterpos)!== "undefined" && waterpos!==''){
waterfile = '/media/'+waterfile;
waterpos = 'watpos'+waterpos;
cleanWaterMark('prev');
$('.prev #watermark-photo').addClass(waterpos);
$('.prev #watermark-photo img').attr('src',waterfile);
}

sliderImageSize(prevorw,prevorh,prevpos,'prev');
loadHeavyImg(imgprev,'prev');
}

//function loadHeavyImg(bgimg,imgposition,pos,mxp){
function loadHeavyImg(bgimg,imgposition){
var heavyImage = new Image();
var imgsize = '_large.jpg';
if($(window).width()>1200){
imgsize = '_large1300.jpg';
}else if($(window).width()<700){
imgsize = '_medium.jpg';
}
if($('#profile-cover-user.highlight-theme').length > 0 || $('#profile-cover-user').hasClass('likin-theme') || $('#profile-cover-user').hasClass('mojo-theme')){
heavyImage.src = bgimg.replace('_widepreview400.jpg',imgsize);
//heavyImage.src = bgimg.replace('.jpg',imgsize);
}else if($('#profile-cover-user.josselin-theme').length > 0 ){
heavyImage.src = bgimg.replace('_medium.jpg',imgsize);
}else if($('#profile-cover-user.aura-theme').length > 0 ){
heavyImage.src = bgimg;
}else{
heavyImage.src = bgimg.replace('_380x380.jpg',imgsize);
}

heavyImage.onload = function(){
$('#show-portfolio-photo .'+imgposition).hide();
$('#show-portfolio-photo .'+imgposition).css('background-image','url('+heavyImage.src+')');
$('#show-portfolio-photo .current').fadeIn(600);
$('.slider-loader').hide();
};
}

//Calculates the size of the image
function sliderImageSize(iw,ih,pos,imgturn){
var ratio = 0;
var ww = $(window).width();
var wh = $(window).height();
var maxw = ww * 0.7;
var maxh = wh * 0.9;
if(ww<900){
maxw = ww - 100;
}

var w = 0;
var h = 0;
var cnth = 0;
if(parseInt(iw)>= parseInt(ih)){
ratio = ih/iw;
w = maxw;
h = maxw * ratio;
if(h >= wh){
h = wh - 100;
w = h / ratio;
}
}else{
if(ww<900){
maxh = maxh - 200;
}
ratio = iw/ih;
h = maxh;
w = maxh * ratio;
}
cnth = (wh - h)/2;
var curw = $('#show-portfolio-photo .current').width();
var curh = $('#show-portfolio-photo .current').height();

$('#bg-portfolio-photo').css('min-height',maxh);
//$('#show-portfolio-photo ').css({ width:curw, height:curh});
//$('#show-portfolio-photo ').css('margin-left',(ww-curw)/2);
$('#show-portfolio-photo .'+imgturn).css({ width:w, height:h});
$('#show-portfolio-photo .'+imgturn).css('margin-top',cnth);
$('#show-portfolio-photo .'+imgturn).attr('ps',parseInt(pos));
}



function sliderImageResizer(iw,ih,orwh,orww){
var ratio = 0;
var ww = $(window).width();
var wh = $(window).height();
var maxw = ww * 0.7;
var maxh = wh * 0.9;
if(ww<900){
maxw = ww;
}
var w = 0;
var h = 0;
var cnth = 0;
var res =0;

if(parseInt(iw)> parseInt(ih)){
ratio = ih/iw;
res = orwh - wh;
w = maxw - res;
h = w * ratio;
} else {
ratio = iw/ih;
res = orww - ww;

h = maxh;
w = h * ratio;
}

cnth = (wh - h)/2;
$('#bg-portfolio-photo').css('min-height',maxh);
//$('#show-portfolio-photo ').css({ width:w, height:h});
//$('#show-portfolio-photo ').css('margin-left',(ww-w)/2);
$('#show-portfolio-photo .current').css({ width:w, height:h});
$('#show-portfolio-photo .current').css('margin-top',cnth);
}

//Closes sliders on click outside or on exit button
function closeSlider(){
$('#bg-portfolio-photo').fadeOut(500);
$('#show-portfolio-photo').fadeOut(500);
if($('body').hasClass('mojoth')){$('.portfolio-slide-container').fadeOut(500);}

$('.close-slider').fadeOut(500);
$('.portfolio-slide-container .arrow').fadeOut(500);
$('.slider-loader').hide();
cleanWaterMark('current');
cleanWaterMark('next');
cleanWaterMark('prev');
}

function loadNotPreloaded(pos){
var current = '';
var imgcurrent = '';
var orw = '';
var orh = '';
var waterfile = '';
var waterpos = '';
var mxp = 0;
if($('#profile-cover-user.highlight-theme').length > 0 || $('#profile-cover-user').hasClass('likin-theme') || $('#profile-cover-user').hasClass('mojo-theme')){
if(pos===0){
current= $('#galinf').children().first().children('.content').children('div').children('img');
imgcurrent = $('#galinf').children().first().children('.content').children('div').children('img').attr('src');
}else{
current = $("#galinf").find("thumbnail .content img[pos='" + pos + "']");
imgcurrent = current.attr('src');
}
orw = current.attr('orw');
orh = current.attr('orh');
mxp = current.attr('mxp');
waterfile = current.attr('waterfile');
waterpos = current.attr('waterpos');
}else{
current = $(".photo-gallery-container").find(".thumbnail-photo[ps='" + pos + "']");
imgcurrent = current.children('img').attr('src');
if($('#profile-cover-user.josselin-theme').length > 0){
imgcurrent = current.children('input').attr('orfile');
}
orw = current.children('input').attr('orw');
orh = current.children('input').attr('orh');
mxp = current.children('input').attr('mxp');
waterfile = current.children('input').attr('waterfile');
waterpos = current.children('input').attr('waterpos'); 
}

showImgSlider(orw,orh,pos,mxp,imgcurrent,waterfile,waterpos);
}


function watermarkdiv(){
return '<div id="watermark-photo" class=""><img src=""></div>';
}

function cleanWaterMark(pos){
$('.'+pos+' #watermark-photo').attr('class','');
$('.'+pos+' #watermark-photo img').attr('src','');
}/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
if ( typeof define === 'function' && define.amd ) {
// AMD. Register as an anonymous module.
define(['jquery'], factory);
} else if (typeof exports === 'object') {
// Node/CommonJS style for Browserify
module.exports = factory;
} else {
// Browser globals
factory(jQuery);
}
}(function ($) {

var toFix= ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
slice= Array.prototype.slice,
nullLowestDeltaTimeout, lowestDelta;

if ( $.event.fixHooks ) {
for ( var i = toFix.length; i; ) {
$.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
}
}

var special = $.event.special.mousewheel = {
version: '3.1.12',

setup: function() {
if ( this.addEventListener ) {
for ( var i = toBind.length; i; ) {
this.addEventListener( toBind[--i], handler, false );
}
} else {
this.onmousewheel = handler;
}
// Store the line height and page height for this particular element
$.data(this, 'mousewheel-line-height', special.getLineHeight(this));
$.data(this, 'mousewheel-page-height', special.getPageHeight(this));
},

teardown: function() {
if ( this.removeEventListener ) {
for ( var i = toBind.length; i; ) {
this.removeEventListener( toBind[--i], handler, false );
}
} else {
this.onmousewheel = null;
}
// Clean up the data we added to the element
$.removeData(this, 'mousewheel-line-height');
$.removeData(this, 'mousewheel-page-height');
},

getLineHeight: function(elem) {
var $elem = $(elem),
$parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
if (!$parent.length) {
$parent = $('body');
}
return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
},

getPageHeight: function(elem) {
return $(elem).height();
},

settings: {
adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
normalizeOffset: true// calls getBoundingClientRect for each event
}
};

$.fn.extend({
mousewheel: function(fn) {
return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
},

unmousewheel: function(fn) {
return this.unbind('mousewheel', fn);
}
});


function handler(event) {
var orgEvent= event || window.event,
args= slice.call(arguments, 1),
delta= 0,
deltaX= 0,
deltaY= 0,
absDelta= 0,
offsetX= 0,
offsetY= 0;
event = $.event.fix(orgEvent);
event.type = 'mousewheel';

// Old school scrollwheel delta
if ( 'detail'in orgEvent ) { deltaY = orgEvent.detail * -1;}
if ( 'wheelDelta'in orgEvent ) { deltaY = orgEvent.wheelDelta;}
if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;}
if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
deltaX = deltaY * -1;
deltaY = 0;
}

// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
delta = deltaY === 0 ? deltaX : deltaY;

// New school wheel delta (wheel event)
if ( 'deltaY' in orgEvent ) {
deltaY = orgEvent.deltaY * -1;
delta= deltaY;
}
if ( 'deltaX' in orgEvent ) {
deltaX = orgEvent.deltaX;
if ( deltaY === 0 ) { delta= deltaX * -1; }
}

// No change actually happened, no reason to go any further
if ( deltaY === 0 && deltaX === 0 ) { return; }

// Need to convert lines and pages to pixels if we aren't already in pixels
// There are three delta modes:
//* deltaMode 0 is by pixels, nothing to do
//* deltaMode 1 is by lines
//* deltaMode 2 is by pages
if ( orgEvent.deltaMode === 1 ) {
var lineHeight = $.data(this, 'mousewheel-line-height');
delta*= lineHeight;
deltaY *= lineHeight;
deltaX *= lineHeight;
} else if ( orgEvent.deltaMode === 2 ) {
var pageHeight = $.data(this, 'mousewheel-page-height');
delta*= pageHeight;
deltaY *= pageHeight;
deltaX *= pageHeight;
}

// Store lowest absolute delta to normalize the delta values
absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

if ( !lowestDelta || absDelta < lowestDelta ) {
lowestDelta = absDelta;

// Adjust older deltas if necessary
if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
lowestDelta /= 40;
}
}

// Adjust older deltas if necessary
if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
// Divide all the things by 40!
delta/= 40;
deltaX /= 40;
deltaY /= 40;
}

// Get a whole, normalized value for the deltas
delta= Math[ delta>= 1 ? 'floor' : 'ceil' ](delta/ lowestDelta);
deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

// Normalise offsetX and offsetY properties
if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
var boundingRect = this.getBoundingClientRect();
offsetX = event.clientX - boundingRect.left;
offsetY = event.clientY - boundingRect.top;
}

// Add information to the event object
event.deltaX = deltaX;
event.deltaY = deltaY;
event.deltaFactor = lowestDelta;
event.offsetX = offsetX;
event.offsetY = offsetY;
// Go ahead and set deltaMode to 0 since we converted to pixels
// Although this is a little odd since we overwrite the deltaX/Y
// properties with normalized deltas.
event.deltaMode = 0;

// Add event and delta to the front of the arguments
args.unshift(event, delta, deltaX, deltaY);

// Clearout lowestDelta after sometime to better
// handle multiple device types that give different
// a different lowestDelta
// Ex: trackpad = 3 and mouse wheel = 120
if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

return ($.event.dispatch || $.event.handle).apply(this, args);
}

function nullLowestDelta() {
lowestDelta = null;
}

function shouldAdjustOldDeltas(orgEvent, absDelta) {
// If this is an older event and the delta is divisable by 120,
// then we are assuming that the browser is treating this as an
// older mouse wheel event and that we should divide the deltas
// by 40 to try and get a more usable deltaFactor.
// Side note, this actually impacts the reported scroll distance
// in older browsers and can cause scrolling to be slower than native.
// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
}

}));
