$(() => {
    let template = $('#template').html();
    Mustache.parse(template);
    let rendered = Mustache.render(template, { talks: data });
    $('.article-headline').html(rendered);
});
