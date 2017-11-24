function selectFile(fileName, anchor) {
    $('.nav-item').removeClass("active")
    $("#" + fileName).addClass("navItem active")
    $('#content').load(fileName + ".html", function () {
        if (anchor != undefined) {
            var href = $("#" + anchor).get(0)
            if (href) {
                href.scrollIntoView()
            }
        }
        scrollBy(0, -100)
    })
}
