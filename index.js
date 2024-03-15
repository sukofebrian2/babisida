module.exports.stripTags = function(html = ""){
    //<b> or </b> => "" ""
    const text = html.replace(/<[^>]+>/gi, "")
    return text
}