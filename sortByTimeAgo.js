(function ($) {
  $.sortByTimeAgo = function (data) {
    var sortedData    = [];
    
    var seperatedData = {
      secondsAgo: [],
      minutesAgo: [],
      hoursAgo:   [],
      daysAgo:    [],
      weeksAgo:   []
    };
    
    $.each(data, function () {
      if      (this.timeAgo.indexOf("second") != -1) seperatedData.secondsAgo.push(this);      
      else if (this.timeAgo.indexOf("minute") != -1) seperatedData.minutesAgo.push(this);
      else if (this.timeAgo.indexOf("hour")   != -1) seperatedData.hoursAgo.push(this);
      else if (this.timeAgo.indexOf("day")    != -1) seperatedData.daysAgo.push(this);
      else if (this.timeAgo.indexOf("week")   != -1) seperatedData.weeksAgo.push(this);
    });
    
    $.each(seperatedData, function () {
      this.sort(function (a, b) {
        return parseInt(a.timeAgo.match(/\d+/)[0]) - parseInt(b.timeAgo.match(/\d+/)[0]);
      });
    });
    
    return sortedData.concat(seperatedData.secondsAgo, 
                             seperatedData.minutesAgo, 
                             seperatedData.hoursAgo, 
                             seperatedData.daysAgo,
                             seperatedData.weeksAgo);
  };
})(jQuery);