(function ($) {
  $.sortByTimeAgo = function (data) {
    var sortedData    = [];
    
    var seperatedData = {
      secondsAgo: [],
      minutesAgo: [],
      hoursAgo:   [],
      daysAgo:    [],
      weeksAgo:   [],
      monthsAgo:  [],
      yearsAgo:   []
    };
    
    $.each(data, function () {
      if      (this.timeAgo.indexOf("second") != -1) seperatedData.secondsAgo.push(this);      
      else if (this.timeAgo.indexOf("minute") != -1) seperatedData.minutesAgo.push(this);
      else if (this.timeAgo.indexOf("hour")   != -1) seperatedData.hoursAgo.push(this);
      else if (this.timeAgo.indexOf("day")    != -1) seperatedData.daysAgo.push(this);
      else if (this.timeAgo.indexOf("week")   != -1) seperatedData.weeksAgo.push(this);
      else if (this.timeAgo.indexOf("month")  != -1) seperatedData.yearsAgo.push(this);
      else if (this.timeAgo.indexOf("year")   != -1) seperatedData.monthsAgo.push(this);
    });
    
    $.each(seperatedData, function () {
      this.sort(function (a, b) {
        var aTimeAgo = a.timeAgo.match(/\d+/);
        var bTimeAgo = b.timeAgo.match(/\d+/);

        return parseInt(aTimeAgo == null ? 0 : aTimeAgo[0]) - parseInt(bTimeAgo == null ? 0 : bTimeAgo[0]);
      });
    });
    
    return sortedData.concat(seperatedData.secondsAgo, 
                             seperatedData.minutesAgo, 
                             seperatedData.hoursAgo, 
                             seperatedData.daysAgo,
                             seperatedData.weeksAgo,
                             seperatedData.monthsAgo,
                             seperatedData.yearsAgo);
  };
})(jQuery);