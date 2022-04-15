var i=0;
setInterval(function(){
    var titles=[
"v",
"v3",
"ve",
"ve0",
"veo",
"veo/",
"veoh",
"veoh _",
"veoh <E",
"veoh <3",
"veoh <E",
"veoh _",
"veoh",
"veo/",
"veo",
"ve0",
"ve",
"v3",
"v",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 650);
