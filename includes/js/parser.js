/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      //$(container).html('<h2>'+capitaliseFirstLetter(data.responseData.feed.title)+'</h2>');

      $.each(data.responseData.feed.entries, function(key, value){
        
        var thehtml = '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="a" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-first-child ui-btn-up-a">'+
        '<div class="ui-btn-inner ui-li">'+
        '<div class="ui-btn-text">'+
        '<a class="ui-link-inherit" href="'+value.link+'" target="_blank">'+
        '<img class="ui-li-thumb" src="'+value.mediaGroups[0].contents[0].url+'">'+
        '<h3>'+value.title+'</h3>'+
        '<p class="ui-li-desc">'+value.contentSnippet+'</p>'+
        '</a>'+
        '</div>'+
        '<span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>'+
        '</div>'+
        '</li>';

        $(container).append(thehtml);
      });
    }
  });
}

/**
 * Capitalizes the first letter of any string variable
 * source: http://stackoverflow.com/a/1026087/477958
 */
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
