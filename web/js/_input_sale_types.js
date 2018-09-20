$(document).ready(function () {
//sale_types_table show data of sale types
    var edit_sale = "<td style=\"text-align: center;width: auto\"><a id=\"edit_btn\" href=\"#\" data-toggle=\"modal\" data-target=\"#EditSaleTypes_Modal\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>";
    var delete_sale = "<td style=\"text-align: center;width: auto\"><a id=\"delete_btn\" href=\"#\" data-toggle=\"modal\" data-target=\"#DeleteSaleTypes_Modal\" style=\"color: red\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>";
    $('#input_sale_types_table').dataTable({
        ajax: {
            type: "post",
            url: "json/api/_sale_types.jsp",
            data: {from: "input_sale_types_table"},
            dataSrc: ""
        },
        columns: [
            {data: "seq"},
            {data: "code_sale"},
            {data: "desc_sale"}
        ],
        columnDefs: [
            {"className": "dt-center", "targets": [0]},
            {"className": "dt-center", "targets": [3], data: null, defaultContent: edit_sale, orderable: false},
            {"className": "dt-center", "targets": [4], data: null, defaultContent: delete_sale, orderable: false}
        ]
    });
    //onclick ,show data on form
    //edit
    $('#input_sale_types_table tbody').on('click', '#edit_btn', function () {
        var tr = $(this).closest('tr');
        var row = $('#input_sale_types_table').DataTable().row(tr);
        var code_type = row.data().code_sale;
        var name_type = row.data().desc_sale;
        //send value to modal
        document.getElementById("stc_e_modal").value = code_type;
        document.getElementById("stn_e_modal").value = name_type;
    });
    //delete
    $('#input_sale_types_table tbody').on('click', '#delete_btn', function () {
        var tr = $(this).closest('tr');
        var row = $('#input_sale_types_table').DataTable().row(tr);
        var code_type = row.data().code_sale;
        var name_type = row.data().desc_sale;
        //send value to modal
        document.getElementById("stc_d_modal").value = code_type;
        document.getElementById("stn_d_modal").value = name_type;
    });
    //save sale types
    $('#save_btn').on('click', function () {
        var code_sale = document.getElementById("code_sale").value;
        var desc_sale = document.getElementById("desc_sale").value;
        if (code_sale === "") {
            alert("Plase input the sale type code.");
            $("#code_sale").focus();
        } else if (desc_sale === "") {
            alert("Plase input the sale type name.");
            $("#desc_sale").focus();
        } else {
            $.ajax({
                global: false,
                type: "post",
                url: "json/api/_input_sale_types.jsp",
                data: {
                    code_sale: $.trim(code_sale),
                    desc_sale: $.trim(desc_sale)
                },
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (response) {
                    var myRec = JSON.parse(response);
                    if (myRec === 1) {
                        alert("Save Success!");
                        $('#input_sale_types_table').DataTable().ajax.reload();
                    } else if (myRec === 2) {
                        alert("Sale type code: " + code_sale + ", is duplication.");
                    } else {
                        alert("Save Failed!");
                    }
                }
            });
        }
    });
//delete sale types
    $('#delete_btn').on('click', function () {
        var code_sale = document.getElementById("stc_d_modal").value;
        var r = confirm("Delete this code: " + code_sale);
        if (r === true) {
            $.ajax({
                global: false,
                type: "post",
                url: "json/api/_delete_sale_types.jsp",
                data: {
                    code_sale: $.trim(code_sale)
                },
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (response) {
                    var myRec = JSON.parse(response);
                    if (myRec === 1) {
                        alert("Delete Success!");
                        $('#DeleteSaleTypes_Modal').modal('hide');
                        $('#input_sale_types_table').DataTable().ajax.reload();
                    } else {
                        alert("Delete Failed!");
                    }
                }
            });
        }
    });
//update sale types
    $('#edit_btn').on('click', function () {
        var code_sale = document.getElementById("stc_e_modal").value;
        var desc_sale = document.getElementById("stn_e_modal").value;
        var r = confirm("Edit this Code: " + code_sale);
        if (r === true) {
            $.ajax({
                global: false,
                type: "post",
                url: "json/api/_update_sale_types.jsp",
                data: {
                    code_sale: code_sale,
                    desc_sale: desc_sale
                },
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (response) {
                    var myRec = JSON.parse(response);
                    if (myRec === 1) {
                        alert("Update Success!");
                        $('#input_sale_types_table').DataTable().ajax.reload();
                    } else if (myRec === 0) {
                        alert("Update Failed!");
                    } else {
                        alert("ERROR!");
                    }
                }
            });
        }
    });
});
