(function ($) {
  $.sortByTimeAgo = function (data) {
    var sortedData    = [];
    
    var seperatedData = {
      minutes: [],
      hours:   [],
      days:    []
    };
    
    $.each(data, function () {
      this.timeAgo = this.timeAgo.replace("about", "");
      
      if      (this.timeAgo.indexOf("minutes")  != -1) seperatedData.minutes.push(this);
      else if (this.timeAgo.indexOf("hours")    != -1) seperatedData.hours.push(this);
      else if (this.timeAgo.indexOf("days")     != -1) seperatedData.days.push(this);
    });
    
    $.each(seperatedData, function (key, val) {
      seperatedData[key].sort(function (a, b) {
        return parseInt(a.timeAgo) - parseInt(b.timeAgo);
      });
    });
    
    $.each(data, function () {
      this.timeAgo = "about " + this.timeAgo;
    });
    
    return sortedData.concat(seperatedData.minutes, seperatedData.hours, seperatedData.days);
  };
})(jQuery);