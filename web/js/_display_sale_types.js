$(document).ready(function () {
//    sale_types_table show data of sale types
//    var url = new URL(window.location);
    var code_type = getQueryString("code_type");
    var desc_type = getQueryString("desc_type");
    var delete_sale = "<td style=\"text-align: center;width: auto\"><a id=\"delete_btn\" href=\"#\" data-toggle=\"modal\" data-target=\"#DeleteDisplaySaleTypes_Modal\" style=\"color: red\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>";
    document.getElementById("tag_name").innerHTML = desc_type;
    document.getElementById("tag_name_s").innerHTML = desc_type;
    $('#sale_types_table').dataTable({
        ajax: {
            type: "get",
            url: "json/api/_display_sale_types.jsp",
            data: {code_sale: code_type},
            dataSrc: ""
        },
        processing: true,
        columns: [
            {data: "seq"},
            {data: "wh"},
            {data: "gm"},
            {data: "gl"},
            {data: "dt"},
            {data: ""},
            {data: "typeid"}
        ],
        columnDefs: [
            {className: "dt-center", targets: [0]},
            {className: "dt-center", targets: [5], data: null, defaultContent: delete_sale, orderable: false},
            {targets: [6], visible: false}
        ],
        language: {
            zeroRecords: "No data, pleas add some sale type.",
            processing: "<span class=\"blinker\">Loading...</span>"
        }
    });
    //delete
    $('#sale_types_table tbody').on('click', '#delete_btn', function () {
        var tr = $(this).closest('tr');
        var row = $('#sale_types_table').DataTable().row(tr);
        var wh = row.data().wh;
        var gm = row.data().gm;
        var gl = row.data().gl;
        var dt = row.data().dt;
        var typeid = row.data().typeid;
        //send value to modal
        document.getElementById("wh_d_modal").value = wh;
        document.getElementById("gm_d_modal").value = gm;
        document.getElementById("gl_d_modal").value = gl;
        document.getElementById("dt_d_modal").value = dt;
        document.getElementById("typeid_d_modal").value = typeid;
    });
    //add
    $('#add_btn').on('click', function () {
        //redirect page
        window.location = './add_details.jsp?code_type=' + code_type + '&desc_type=' + desc_type;
    });
    //del modal
    $('#del_btn_modal').on('click', function () {
        var typeid = document.getElementById("typeid_d_modal").value;
        var r = confirm("Delete this code delevery term?");
        if (r === true) {
            $.ajax({
                global: false,
                type: "post",
                url: "json/api/_delete_display_sale_types.jsp",
                data: {
                    typeid: typeid
                },
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (response) {
                    var myRec = JSON.parse(response);
                    if (myRec === 1) {
                        alert("Delete Success!");
                        $('#DeleteDisplaySaleTypes_Modal').modal('hide');
                        $('#sale_types_table').DataTable().ajax.reload();
                    } else {
                        alert("Delete Failed!");
                    }
                }
            });
        }
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
    //blink effect
    setInterval(blinker, 300);
    function blinker() {
        $('.blinker').fadeOut(300);
        $('.blinker').fadeIn(300);
    }
});
