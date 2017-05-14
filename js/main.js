$(() => {
  let talksdata = JSON.parse(data.replace("\n", ""));
  let majorsdata = JSON.parse(major);

  let rikei = [];
  let bunkei = []

  for (let i = 0; i < talksdata.length; i++) {
    let el = talksdata[i];
    el.major = majorsdata[i].major;
    if (majorsdata[i].bunri == 0) {
      rikei.push(el);
    } else {
      bunkei.push(el);
    }
  }


  let template = $('#template').html();
  let rendered = Mustache.render(template, {rikei: rikei, bunkei: bunkei});
  $('.article-headline').html(rendered);
});
