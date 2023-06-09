(function($) {

  $(document).ready(function() {
  
   var iconMap = {
    'PDF': {
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/adobeacrobatreader.svg',
      color: '#DD0000' // Red color for PDF
    },
    'PowerPoint': {
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/microsoftpowerpoint.svg',
      color: '#D04500' // Orange color for PowerPoint
    },
    'Word': {
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/microsoftword.svg',
      color: '#2B579A' // Blue color for Word
    },
    'Excel': {
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/microsoftexcel.svg',
      color: '#217346' // Green color for Excel
    },
    'Video': {
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.2.1/icons/play-btn.svg',
      color: '#000000' // Black color for Video
    },
    'Audio': {
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.2.1/icons/soundwave.svg',
      color: '#000000' // Black color for Audio
    }
  };

  
  $('.activity-item').each(function() {
    var _self = $(this);
    var activityType = _self.find('.resourcelinkdetails').text().trim();
    var courseIcon = _self.find('.courseicon img');


     $.each(iconMap, function(keyword, iconObject) {
      if (activityType.toLowerCase().includes(keyword.toLowerCase())) {
        courseIcon.attr('src', iconObject.icon);
        _self.find('.activityiconcontainer.content').css('background-color', iconObject.color);
        return false; // Exit the loop after finding a match
      }
    });
  
    // Hide or remove activity type
    //_self.find('.resourcelinkdetails').remove();
  });
});


})(jQuery);
