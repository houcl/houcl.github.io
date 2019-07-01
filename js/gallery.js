document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery({
            rowHeight: 200,
            maxRowHeight: 16,
            lastRow: 'nojustify',
            margins: 3,
            randomize: true
        });
    }
});