function loadHtml(id, page) {
    $("#" + id).load(page)
}

function selectWollokDocFile(fileName, anchor) {
    selectFile("wollokDoc", fileName, anchor)
}

function selectFile(folder, fileName, anchor) {
    $('.nav-item').removeClass("active")
    $("#" + fileName).addClass("navItem active")
    $('#content').load(folder + "/" + fileName + ".html", function () {
        if (anchor != undefined) {
            var href = $("#" + anchor).get(0)
            if (href) {
                href.scrollIntoView()
            }
        }
        scrollBy(0, -120)
    })
}
