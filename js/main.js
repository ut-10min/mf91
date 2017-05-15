$(() => {
  let talksData = JSON.parse(data.replace("\n", ""));
  let majorsData = JSON.parse(major);

  let rikei = [];
  let bunkei = []

  for (let i = 0; i < talksData.length; i++) {
    let el = talksData[i];
    el.major = majorsData[i].major;
    if (majorsData[i].bunri == 0) {
      rikei.push(el);
    } else {
      bunkei.push(el);
    }
  }


  let template = $('#template').html();
  Mustache.parse(template);
  let renderedRikei = Mustache.render(template, {talks: rikei, header: "理工系講演"});
  let renderedBunkei = Mustache.render(template, {talks: bunkei, header: "人文系講演"});
  $('.article-headline').html(renderedRikei + renderedBunkei);
});
