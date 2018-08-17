function loadHtml(id, page) {
    $('#' + id).load(page)
}

function selectUrlFile(url, fileName, anchor) {
    $('.nav-link').removeClass('active')
    $('#' + fileName).addClass('active')
    if (url !== '') {
        url += '/'
    }
    console.log(url)
    $('#content').load(url + fileName + '.html', function () {
        if (anchor != undefined) {
            var href = $('#' + anchor).get(0)
            if (href) {
                href.scrollIntoView()
            }
        }
        scrollBy(0, -120)
    })
}

function selectFile(fileName, anchor) {
    selectUrlFile('', fileName, anchor)
}

$(document).ready(function() {
    $('a.wollokLink').on('click', function(event) {
        console.println("je")
        $('#collapseThree').addClass('show')
        $('#collapseFour').addClass('show')
        var target = $(this.getAttribute('href'))
        if( target.length ) {
            event.preventDefault()
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 120
            }, 1000)
        }
    })
})

