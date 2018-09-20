$(document).ready(function () {
    //sale_types_table show data of sale types
    $('[data-toggle="tooltip"]').tooltip();
    var view_sale = "<td style=\"text-align: center;width: auto\"><a id=\"view_btn\" href=\"#\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>";
    $('#sale_types_table').dataTable({
        ajax: {
            type: "post",
            url: "json/api/_sale_types.jsp",
            data: {from: "sale_types_table"},
            dataSrc: ""
        },
        columns: [
            {data: "seq"},
            {data: "code_sale"},
            {data: "desc_sale"}
        ],
        columnDefs: [
            {className: "dt-center", targets: [0]},
            {className: "dt-center", targets: [3], data: null, defaultContent: view_sale, orderable: false}
        ]
    });

    //view
    $('#sale_types_table tbody').on('click', '#view_btn', function () {
        var tr = $(this).closest('tr');
        var row = $('#sale_types_table').DataTable().row(tr);
        var code_type = row.data().code_sale;
        var desc_type = row.data().desc_sale;
        //redirect page
        window.location = './display_sale_type.jsp?code_type=' + code_type + '&desc_type=' + desc_type;
    });

});
