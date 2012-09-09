(function ($) {
  $.sortByTimeAgo = function (data) {
    var sortedData    = [];
    
    var separatedData = {
      secondsAgo: [],
      minutesAgo: [],
      hoursAgo:   [],
      daysAgo:    [],
      weeksAgo:   [],
      monthsAgo:  [],
      yearsAgo:   []
    };
    
    $.each(data, function () {
      if      (this.timeAgo.indexOf("second") != -1) separatedData.secondsAgo.push(this);      
      else if (this.timeAgo.indexOf("minute") != -1) separatedData.minutesAgo.push(this);
      else if (this.timeAgo.indexOf("hour")   != -1) separatedData.hoursAgo.push(this);
      else if (this.timeAgo.indexOf("day")    != -1) separatedData.daysAgo.push(this);
      else if (this.timeAgo.indexOf("week")   != -1) separatedData.weeksAgo.push(this);
      else if (this.timeAgo.indexOf("month")  != -1) separatedData.monthsAgo.push(this);
      else if (this.timeAgo.indexOf("year")   != -1) separatedData.yearsAgo.push(this);
    });
    
    $.each(separatedData, function () {
      this.sort(function (a, b) {
        var aTimeAgo = a.timeAgo.match(/\d+/);
        var bTimeAgo = b.timeAgo.match(/\d+/);

        return parseInt(aTimeAgo == null ? 0 : aTimeAgo[0]) - parseInt(bTimeAgo == null ? 0 : bTimeAgo[0]);
      });
    });
    
    return sortedData.concat(separatedData.secondsAgo, 
                             separatedData.minutesAgo, 
                             separatedData.hoursAgo, 
                             separatedData.daysAgo,
                             separatedData.weeksAgo,
                             separatedData.monthsAgo,
                             separatedData.yearsAgo);
  };
})(jQuery);