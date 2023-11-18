var onClosePopup = null;
var popup_zindex = 501;

function zIndexUpdate(popup) {
if (!popup.hasClass('notifications') && popup.css('zIndex') != popup_zindex) {
popup_zindex++;
popup.css({zIndex: popup_zindex});
}
}

function popMessage(title, html, onClose, theme, toggle, is_html, id, customButtonLabel, customContainerCssInline) {

if(Array.isArray(html)){
var _html = html;
html = '';
_html.forEach(function(obj,i){
html += obj;
});
}

var popup = $('.popup'+ id ? '#'+id: '.'+theme);

if(typeof customButtonLabel=="undefined"){
customButtonLabel="Ok";
}
if(typeof customContainerCssInline=="undefined"){
customContainerCssInline = '';
}else if(customContainerCssInline!=''){
customContainerCssInline = "style='"+customContainerCssInline+"'";
}


if (toggle && popup.length) {
popup.show();
zIndexUpdate(popup);
return;
}

if (!popup.length || !toggle) {
// create popup
popup = $('<div class="popup v3">'+
'<div class="overlay"></div>'+
'<div class="container" '+customContainerCssInline+'>'+
'<div class="header">'+
'<div class="title"></div>'+
'<div class="popupx main-popupx"><a title="Close" href="javascript:"> </a></div>'+
'</div>'+
'<div class="content">'+

'</div>'+
'</div>'+
'</div>');

if (theme == 'notifications') {
$('#statusbar_wrapper').append(popup);

} else {
$('#wrapper').append(popup);
}
}
if (title === null || title==='') {
popup.find('.header > .title').remove();
//title = theme && theme == 'error' ? 'Error' : 'Message';
}

if (theme == 'system' || theme == 'warning' || theme == 'error' || theme == 'messages') {
html += '<div class="buttons">'+
'<a class="button popupx">'+customButtonLabel+'</a>'+
'</div>';
}

if (id) {
popup.attr('id', id);
}
popup.find('.header .title').html(title);
popup.find('.content:first').html(is_html ? html: (typeof html !== 'string') ? html : html.replace(/\n/g, '<br/>'));
for (c in Array('message', 'fullscreen', 'status', 'error', 'warning', 'photo', 'messages', 'notifications')) {
popup.removeClass(c);
}

popup.addClass(theme ? theme : 'message');
if (theme == 'fullscreen') {
popup.addClass('blue');
popup.find('.container').css({top: $(window).scrollTop()+50});
}
popAttachPopupXEvent(popup, onClose);

zIndexUpdate(popup);

popup.find('.container').mousedown(function(e, ee){
if ($(e.target).is('div')) {
zIndexUpdate(popup);
}
});

if(jQuery().datepick) {
$('#edit-expiration').datepick();
}
popup.show();

return popup;
}

function popError(html, onClose) {
return popMessage('Error', html, onClose, 'error');
}

function alert(html) {
return popMessage('', html, null, 'status');
}

function popStatus(html, onClose) {
return popMessage('', html, onClose, 'status');
}

function popWarning(html, onClose) {
return popMessage('', html, onClose, 'warning');
}

function popMessages(html,title) {
if(typeof title=="undefined"){
title = "";
}

return popMessage(title, html, null, 'messages');
}

function popFullscreen(title, html) {
return popMessage(title, html, null, 'fullscreen');
}

function popFullscreenHtml(title, html, id, url, theme, scroll, onClose) {
if (theme == '' || theme == null){
theme = 'fullscreen';
}

var popup = null;
if (id) {
popup = $('.popup#'+ id);

if (popup.length) {
popup.show();
zIndexUpdate(popup);
if (theme == 'fullscreen' || scroll) {
scrollTo(popup.find('.container'));
}
return;
}
}
if (!html) {
html = '<loading></loading>';
}

popup = popMessage(title, url ? '<loading></loading>': html, onClose, theme, null, true);

if (id) {
popup.attr('id', id);
}

var verticalCenterUpdate = function(popup) {
var top = parseInt(popup.find('.container').css('top').replace('px', ''));
var margin_top = -Math.round(popup.find('.container').height()*.55);
if (top + margin_top < 50) {
popup.find('.container').css('top', Math.abs(margin_top) + 50);
}
popup.find('.container').css('margin-top', margin_top);
}

if (url) {
if (typeof url == 'string') {
url = {href: url};
}
$.post(
url.href,
url.params ? url.params: null,
function(resp) {
if (resp.messages) {
popup.find('.content:first').html('');
setMessages(resp.messages, popup.find('.content:first'));

} else {
popup.find('.content:first').html(resp);
popAttachPopupXEvent(popup.find('.container'), onClose);

if (typeof attachFormEvent == 'function') {
attachFormEvent(popup.find('.content:first'));

} else if (typeof attachFormValidateEvents == 'function') {
attachFormValidateEvents(popup.find('.content:first'));
}

if (typeof attachTextAreaFieldEvent == 'function') {
attachTextAreaFieldEvent(popup.find('.content:first'));
}
}

// verticalCenterUpdate(popup);

if (url.onComplete) {
url.onComplete(resp, popup);
}

$.each($('.form-date'), function(){
$(this).datepick();
});
}
);
} else {
// verticalCenterUpdate(popup);
}

return popup;
}

function popNotification() {
var span = $('statusbar .notifications span');
var popup = $('#notifications');

if (popup.length) {
if (popup.is(':hidden')) {
popup.show();
span.hide();

} else {
popup.hide();
}
return;
}

popup = popMessage(translator._gt("notifications"), '<loading></loading>', false, 'notifications');
popup.attr('id', 'notifications');

return popup;
}

function attachDraggableEvent(e) {
e = $(e);

// Move the e by the amount of change in the mouse position
var move = function(ev) {
if (e.data('mouseMove')) {
var changeX = ev.clientX - e.data('mouseX');
var changeY = ev.clientY - e.data('mouseY');
var newX = parseInt(e.position().left) + changeX;
var newY = parseInt(e.position().top) + changeY;
e.css('left', newX);
e.css('top', newY);
e.data('mouseX', ev.clientX);
e.data('mouseY', ev.clientY);
}
}

e.mousedown(function(ev) {
if ($(ev.target).is('div')) {
e.data('mouseMove', true);
e.data('mouseX', ev.clientX);
e.data('mouseY', ev.clientY);
}
}
);

e.parents(':last').mouseup(function() {
e.data('mouseMove', false);
});

e.mouseout(move);
e.mousemove(move);
}

function popContent(title, html, id, url) {
var popup = popFullscreenHtml(title, html, id, url);

if (popup) {
popup.addClass('size2');
popup.addClass('no-overlay');
popup.addClass('draggable');
attachDraggableEvent(popup.find('.container'));
}
}

function popPhoto(photo, toggle) {
var photo = $(photo);
var width = parseInt(photo.find('img').css('max-width').replace('px', ''));
var html = ('<div class="block-photo">'+ photo.html() +'</div>').replace(/\n/g, '');

popup = popMessage('', html, null, 'photo', toggle);
if (popup) {
popup.find('.container').css('width', width).css('margin-left', (width/2)*-1);
popup.find('.block-photo').bind("contextmenu",function(e){
return false;
});
}
return popup;
}

function popAttachPopupXEvent(container, onClose) {
if (!container) {
var container = $('.popup');
}

$(container).find('.overlay, .header .popupx, .content:first .popupx, .v3 .closeme').each(function() {
var x = $(this);
if (!x.hasClass('popupxd')) {
x.click(function(e){ 
var is_popup_collection = x.parents('.popup:first').find('.content-collections:first');
var is_popup_update = x.parents('.popup:first').find('.update-collection-popup:first');
if(is_popup_collection.hasClass('content-collections') || is_popup_update.hasClass('update-collection-popup')) { 
x.parents('.popup:first').remove(); 
if(is_popup_collection.hasClass('content-collections')) $("body").css("overflow", "visible"); 
}

if (onClosePopup && !x.hasClass('main-popupx')) {
setTimeout(function() {
onClosePopup();
x.parents('.popup:first').hide();
}, 250);
} else {
x.parents('.popup:first').fadeOut(500);//.hide();
}

if (onClose) {
onClose(x.parents('.popup:first'), x);
}
});
x.addClass('popupxd');
}
});

if (onClose) {
if (!$(container).hasClass('popup')) {
container = $(container).parents('.popup:first');
}
container.addClass('has-close');
}
}
function applyDefaultCode(){
$("div.main-popupx").trigger("click");
}

$(document).ready(function() {
popAttachPopupXEvent();

$('html').keyup(function(e){
if (e.keyCode == 27) {
// get top popup and close
var toppopup = null;
var topzindex = 0;
$('.popup:visible').each(function(){
if ($(this).css('z-index') > topzindex) {
topzindex = $(this).css('z-index');
toppopup = this;
}
});

if (toppopup && !$(toppopup).hasClass('has-close')) {
$(toppopup).children('.overlay').click();
}
}
});

$('.this-close').click(function() {
$('.reveal-modal-bg').click();
});

$('.close-adult').click(function() {
$('.match_left .popupxd').click();
});

if($('#popup-clear-main.share_joined_voting').length > 0){
$(document).on('click','.copy-cont a.copy-token',function(){
var message = document.getElementById("copy-token-input");
message.value = $('#copy-token-input').val();
message.select();
document.execCommand('copy');
});

}

});
