function query2page(b, c, a, e) {
    a = a == null ? 1 : a;
    e = a == null ? 1 : e;
    var d;
    try {
        d = new XMLHttpRequest
    } catch (f) {
        try {
            d = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (g) {
            try {
                d = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (h) {
                return alert("Your browser does not support AJAX!"), !1
            }
        }
    }
    d.onreadystatechange = function() {
        if (d.readyState == 4) {
            if (a == 1 || a == 2) document.getElementById(c).innerHTML = d.responseText;
            a == 2 && (W4GRB.user_rating[e] = document.getElementById("w4g_rb_rating_value-" + e).innerHTML == null ? W4GRB.average_rating[e] : document.getElementById("w4g_rb_rating_value-" + e).innerHTML, updatebox(e, W4GRB.user_rating[e]))
        }
    };
    d.open("GET", b, !0);
    d.send(null)
}

function loadbox(b) {
    for (var c = "", a = 0; a <= 100; a++) c += '<div class="w4g_rb_barblock" id="w4g_rb_n' + b + "id" + a + '" style="margin-left:' + a * 2 + 'px;" ', c += " onmouseover=\"updatebox('" + b + "'," + a + ')" ', c += ' onclick="W4GRB.user_rating[' + b + "]=" + a + ";query2page(W4GRB.query_url[" + b + "]+'&vote=" + a + "','w4g_rb_area-" + b + "')\"></div>";
    document.getElementById("rating_target-" + b).innerHTML = c
}

function updatebox(b, c) {
    c = c == null ? 50 : c;
    for (var a = 0; a <= 100; a++) {
        var e = 250 - 5 * Math.max(0, a - 50),
            d = Math.min(250, a * 5);
        a <= c ? document.getElementById("w4g_rb_n" + b + "id" + a).style.backgroundColor = "rgb(" + e + "," + d + ",0)" : document.getElementById("w4g_rb_n" + b + "id" + a).style.backgroundColor = "#555555"
    }
    document.getElementById("rating_text-" + b).innerHTML = "&nbsp;" + c + "%"
};