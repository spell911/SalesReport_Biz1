$(document).ready(function () {
    //sale_types_table show data of sale types
//    var url = new URL(window.location);
//    alert(url);
    var path = window.location.pathname;
    var statarr = [];
    var urlarr = [];
    var desc_type = getQueryString('desc_type');
//    alert(path);
    //add breadcrumb li
    if (path === "/Wien_SalesReport_Biz1/sale_types.jsp") {
        statarr = ["Sale Types"];
        urlarr = ["/Wien_SalesReport_Biz1/sale_types.jsp"];
    } else if (path === "/Wien_SalesReport_Biz1/input_sale_types.jsp" || path === "/Wien_SalesReport_Biz1/") {
        statarr = ["Input Sale Types"];
        urlarr = ["/Wien_SalesReport_Biz1/input_sale_types.jsp"];
    } else if (path === "/Wien_SalesReport_Biz1/display_sale_type.jsp") {
        statarr = ["Sale Types", desc_type];
        urlarr = ["/Wien_SalesReport_Biz1/sale_types.jsp", "/Wien_SalesReport_Biz1/display_sale_type.jsp"];
    } else if (path === "/Wien_SalesReport_Biz1/add_details.jsp") {
        statarr = ["Sale Types", desc_type, "Add Sale Types: " + desc_type + ""];
        urlarr = ["/Wien_SalesReport_Biz1/sale_types.jsp", "javascript:javascript:history.go(-1)", "/Wien_SalesReport_Biz1/add_details.jsp"];
    } else {

    }
    for (var i = 0; i < statarr.length; i++) {
        $('ol').append('<li><a href=\"' + urlarr[i] + '\" >' + statarr[i] + '</a></li>');
    }
    //add
    $('#add_btn').on('click', function () {
        //redirect page
//        window.location = './add_details.jsp?code_type=' + code_type + '&desc_type=' + desc_type;
    });
    function getQueryString() {
        var key = false, res = {}, itm = null;
        // get the query string without the ?
        var qs = location.search.substring(1);
        // check for the key as an argument
        if (arguments.length > 0 && arguments[0].length > 1)
            key = arguments[0];
        // make a regex pattern to grab key/value
        var pattern = /([^&=]+)=([^&]*)/g;
        // loop the items in the query string, either
        // find a match to the argument, or build an object
        // with key/value pairs
        while (itm = pattern.exec(qs)) {
            if (key !== false && decodeURIComponent(itm[1]) === key)
                return decodeURIComponent(itm[2]);
            else if (key === false)
                res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
        }

        return key === false ? res : null;
    }
});

