function construstTimeTable(timeTable, talksData, majorsData) {
  return timeTable.map(d => {
    let talk = talksData.filter(talk => talk.name.startsWith(d.name))[0];
    let major = majorsData.filter(major => major.name.startsWith(d.name))[0];
    return {time: d.time, name: talk.name, title: talk.title, major: major.major};
  });
}


$(() => {
  let talksData = JSON.parse(data.replace("\n", ""));
  let majorsData = JSON.parse(major);
  let firstTable = JSON.parse(firstDay);
  let secondTable = JSON.parse(secondDay);

  let firstDayTable = construstTimeTable(firstTable, talksData, majorsData);
  let secondDayTable = construstTimeTable(secondTable, talksData, majorsData);

  let template = $('#template').html();
  Mustache.parse(template);
  let renderedFirst = Mustache.render(template, {table: firstDayTable, header: "5/20(土)"});
  let renderedSecond = Mustache.render(template, {table: secondDayTable, header: "5/21(日)"});
  $('.article-headline').html(renderedFirst + "<br />" + renderedSecond);
});
