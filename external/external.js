var PointmaticID = 'sdfSARefsdSDasd';
(function pm(d){
    var n = d.getElementsByTagName('script')[0], s = d.createElement('script');
    s.async = true;
    s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//cdn.pointmatic.ru/pm.js';
    n.parentNode.insertBefore(s, n);
    console.log(PointmaticID);
})(document);