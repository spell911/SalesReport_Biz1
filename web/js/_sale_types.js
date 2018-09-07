$(document).ready(function () {
    //sale_types_table show data of sale types

    $('#sale_types_table').dataTable({
        ajax: {
            type: "post",
            url: "json/_sale_types.jsp",
            data: {from: "sale_types_table"},
            dataSrc: ""
        },
        columns: [
            {data: "seq"},
            {data: "code_sale"},
            {data: "desc_sale"},
            {data: "view_sale"}
        ],
        columnDefs: [
            {className: "dt-center", targets: [0]},
            {className: "dt-center", targets: [3]}
        ]
    });
});
