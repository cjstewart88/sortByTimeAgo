(function ($) {
  $.sortByTimeAgo = function (data) {
    var sortedData    = [],
        separatedData = { secondsAgo: [], minutesAgo: [], hoursAgo: [], daysAgo: [], 
                          weeksAgo: [], monthsAgo: [], yearsAgo: [] };
    
    $.each(data, function () {
      var peiceOfData = this;
      var timeAgo     = peiceOfData.timeAgo;
      
      $.each(["second", "minute", "hour", "day", "week", "month", "year"], function () {
        if (timeAgo.indexOf(this) != -1) {
          separatedData[this + "sAgo"].push(peiceOfData);
        }
      });
    });
    
    $.each(separatedData, function () {
      this.sort(function (a, b) {
        var aTimeAgo = a.timeAgo.match(/\d+/);
        var bTimeAgo = b.timeAgo.match(/\d+/);

        return parseInt(aTimeAgo == null ? 0 : aTimeAgo[0]) - parseInt(bTimeAgo == null ? 0 : bTimeAgo[0]);
      });
    });
    
    return sortedData.concat(separatedData.secondsAgo, separatedData.minutesAgo, separatedData.hoursAgo, 
                             separatedData.daysAgo, separatedData.weeksAgo, separatedData.monthsAgo,
                             separatedData.yearsAgo);
  };
})(jQuery);