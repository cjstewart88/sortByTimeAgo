var sortByTimeAgo = (function () {
  var unsortedData  = [],
      sortedData    = [],
      separatedData = { secondsAgo: [], minutesAgo: [], hoursAgo: [], daysAgo: [], 
                        weeksAgo: [], monthsAgo: [], yearsAgo: [] };
      
  var separateData = function () {
    var categories    = ["second", "minute", "hour", "day", "week", "month", "year"];
    
    for (var udi = 0; udi < unsortedData.length; udi++) {
      var peiceOfData = unsortedData[udi];
      var timeAgo     = peiceOfData.timeAgo;
      
      for (var ci = 0; ci < categories.length; ci++) {
        var category = categories[ci];
        
        if (timeAgo.indexOf(category) != -1) {
          separatedData[category + "sAgo"].push(peiceOfData);
        }
      }
    }  
    
    return sortData();
  }
  
  var sortData = function () {
    for (var category in separatedData) {
      separatedData[category].sort(function (a, b) {
        var aTimeAgo = a.timeAgo.match(/\d+/);
        var bTimeAgo = b.timeAgo.match(/\d+/);

        return parseInt(aTimeAgo == null ? 0 : aTimeAgo[0]) - parseInt(bTimeAgo == null ? 0 : bTimeAgo[0]);
      }); 
    }
    
    return joinData();
  }
  
  var joinData = function () {
    return sortedData.concat(separatedData.secondsAgo, separatedData.minutesAgo, separatedData.hoursAgo, 
                             separatedData.daysAgo, separatedData.weeksAgo, separatedData.monthsAgo,
                             separatedData.yearsAgo);
  }
  
  return {
    init: function (data) {
      unsortedData = data;
      return separateData();
    }
  };
})();