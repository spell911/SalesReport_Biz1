$(document).ready(function () {
    //sale_types_table show data of sale types

    $('#sale_types_table').dataTable({
        ajax: {
            type: "post",
            url: "json/_display_sale_types.txt",
            data: {from: "sale_types_table"},
            dataSrc: ""
        },
        columns: [
            {data: "wn"},
            {data: "mem_gp"},
            {data: "mem_lv"},
            {data: "dt"},
            {data: "del"}
        ],
        columnDefs: [
            {className: "dt-center", targets: [4]}
        ]
    });
});
