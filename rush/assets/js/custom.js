$(function () {
  console.log('blah');
  window.setTimeout(function () {
    $('.ghost').css('visibility', 'visible')
               .animate({ opacity: 1.0 }, 1000);
  }, 1500);
});
