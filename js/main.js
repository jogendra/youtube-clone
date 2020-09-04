"use strict";

// Chage Selected Item in Side Bar
let topItems = document.getElementById("topItems");
let sideItems = topItems.getElementsByClassName("side-item");
for (let i = 0; i < sideItems.length; i++) {
    sideItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-item");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active-item", "");
    }
    this.className += " active-item";
  });
}

// Generate HTML from JSON data for Left and Right single card column
function generateSideColumnHTML(data) {
    let htmlData = data.items.map(function(v,i) {
        return '<div class="card-1">' +
                '<img src="' + v.img + '">' +
               '<p class="vid-title">' + v.title + '</p>' +
               '<p class="vid-channel">' + v.channel + '</p>' +
               '<p class="vid-time-views">' + v.time + ' &middot; ' + v.views + ' views' + '</p>' +
               '</div>';
    }).join('');
    return htmlData;
}

// Populate Subscription section data
// Used https://tools.knowledgewalls.com/online-multiline-to-single-line-converter
// to convert multiline JSON to single line. multiline was not parsing
let subscriptionJSON = '{"items":[{"img":"http:\/\/i3.ytimg.com\/vi\/cmkKxNN7cs4\/maxresdefault.jpg","title":"Writing Beautiful Go Packages","channel":"Coding Tech","time":"2 years","views":69857},{"img":"http:\/\/i3.ytimg.com\/vi\/LvgVSSpwND8\/maxresdefault.jpg","title":"Concurrency in Go","channel":"Jake Wright","time":"1 year","views":249659},{"img":"http:\/\/i3.ytimg.com\/vi\/DQOc9bInpuE\/maxresdefault.jpg","title":"My Story | How I Became An Airline Pilot","channel":"Captain Walker","time":"4 months","views":51392},{"img":"http:\/\/i3.ytimg.com\/vi\/7sJQBjn_cRQ\/maxresdefault.jpg","title":"Getting Started with React Native - Beginner Tutorial","channel":"DesignCode","time":"16 months","views":73386}]}';
let subscriptionCard = document.getElementById('subsID');
let subscriptionData = JSON.parse(subscriptionJSON);
subscriptionCard.innerHTML = generateSideColumnHTML(subscriptionData);

// Populate Recommended section data
let recJSON = '{"items":[{"img":"http:\/\/i3.ytimg.com\/vi\/_YlYuNMTCc8\/maxresdefault.jpg","title":"What is an API and how do you design it?","channel":"Gaurav Sen","time":"12 months","views":263062},{"img":"http:\/\/i3.ytimg.com\/vi\/o8NPllzkFhE\/maxresdefault.jpg","title":"The mind behind Linux | Linus Torvalds","channel":"TED","time":"4 years","views":3348003},{"img":"http:\/\/i3.ytimg.com\/vi\/0qi33gLphV4\/maxresdefault.jpg","title":"Coldplay - Everyday Life (Live In Jordan)","channel":"Coldplay","time":"10 months","views":1259156},{"img":"http:\/\/i3.ytimg.com\/vi\/hD-fRaKoDOY\/maxresdefault.jpg","title":"Moderator - The World Within LP [Full Album]","channel":"Melting Records","time":"2 years","views":1101510},{"img":"http:\/\/i3.ytimg.com\/vi\/eAbDNUj8pxo\/maxresdefault.jpg","title":"Coldplay - O (Fly On) - Extended","channel":"Freelance Ghosts","time":"4 years","views":50939949}]}';
let recCard = document.getElementById('recID');
let recData = JSON.parse(recJSON);
recCard.innerHTML = generateSideColumnHTML(recData);
