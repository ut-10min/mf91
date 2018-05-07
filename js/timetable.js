function construstTimeTable(times, table, talkMap) {
    return times.map(function (time) {
        var speaker = table[time];
        var talk = talkMap[speaker];
        return { time: time, name: talk.name, title: talk.title, affliation: talk.affMajor + " " + talk.affMinor };
    });
}


$(function () {
    var times = Object.keys(day1).sort();
    var talkMap = {};
    for (var i = 0; i < data.length; i++) {
        if (data[i].name.indexOf("鈴木") != -1) {
            talkMap[data[i].name.replace(" ", "")] = data[i];
        } else {
            talkMap[data[i].name.substring(0, 2)] = data[i];
        }
    }
    var firstDayTable = construstTimeTable(times, day1, talkMap);
    var secondDayTable = construstTimeTable(times, day2, talkMap);

    let template = $('#template').html();
    Mustache.parse(template);
    let renderedFirst = Mustache.render(template, { table: firstDayTable, header: "5/19(土)" });
    let renderedSecond = Mustache.render(template, { table: secondDayTable, header: "5/20(日)" });
    $('.article-headline').html(renderedFirst + "<br />" + renderedSecond);
});
