# sortByTimeAgo.js
This is a javascript plugin that takes an array of objects 
with `timeAgo` properties and sorts them from newest to oldest.

## Why
Mashing together two third party API responses and sorting them 
based on time can be a problem. What if 1 API returns strings 
like "1 minute ago", "4 hours ago", etc. and the other returns 
a timestamp which you convert to time ago. You'd have a problem. Run
your data through `sortByTimeAgo.init(data)` or `$.sortByTimeAgo(data)` 
if you prefer jQuery and they're problems are gone!

## Example
    var unsortedData = [
      {
        fileName: "x10s",
        timeAgo:  "about 2 minutes ago"
      },
      {
        fileName: "la998",
        timeAgo:  "about 32 minutes ago"
      },
      {
        fileName: "00x",
        timeAgo:  "about 45 minutes ago"
      },
      {
        fileName: "717t",
        timeAgo:  "about 1 day ago"
      },
      {
        fileName: "654s",
        timeAgo:  "about 3 weeks ago"
      },
      {
        fileName: "b512",
        timeAgo:  "about 16 hours ago"
      },
      {
        fileName: "zz22",
        timeAgo:  "about 2 hours ago"
      },
      {
        fileName: "i372",
        timeAgo:  "about 9 seconds ago"
      }
    ];
    
    // plain javascript
    var sortedData = sortByTimeAgo(unsortedData);
    
    // if using jQuery
    var sortedData = $.sortByTimeAgo(unsortedData);
    
## Contributing
This project is available under the MIT License. If you see something I did 
horribly wrong, please open a github issue or feel free to open PRs to make 
this plugin better.

## Using sortByTimeAgo.js
If you happen to find use out of this plugin and are using it on a public website, I'd
love to know. Shoot me an email at cjstewart88@gmail.com and I'll add it to the list:

- http://www.hackerreads.com/ 