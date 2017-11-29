function loadHtml(id, page) {
    $("#" + id).load(page)
}

function selectFile(fileName, anchor) {
    $('.nav-link').removeClass("active")
    $("#" + fileName).addClass("active")
    $('#content').load(fileName + ".html", function () {
        if (anchor != undefined) {
            var href = $("#" + anchor).get(0)
            if (href) {
                href.scrollIntoView()
            }
        }
        scrollBy(0, -120)
    })
}

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'))
        if( target.length ) {
            event.preventDefault()
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 120
            }, 1000)
        }
    })
})

