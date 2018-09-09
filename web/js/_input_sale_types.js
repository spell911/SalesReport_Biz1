$(document).ready(function () {
    //sale_types_table show data of sale types

    $('#input_sale_types_table').dataTable({
        ajax: {
            type: "post",
            url: "json/_input_sale_types.txt",
            data: {from: "input_sale_types_table"},
            dataSrc: ""
        },
        columns: [
            {data: "seq"},
            {data: "code_sale"},
            {data: "desc_sale"},
            {data: "edit_sale"},
            {data: "delete_sale"}
        ],
        columnDefs: [
            {"className": "dt-center", "targets": [0]},
            {"className": "dt-center", "targets": [3]},
            {"className": "dt-center", "targets": [4]}
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
        $.ajax({
            global: false,
            type: "post",
            url: "json/_input_sale_types.jsp",
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
                    alert("Save Success!");
                    $('#input_sale_types_table').DataTable().ajax.reload();
                } else {
                    alert("Save Failed!");
                }
            }
        });
    });
    //delete sale types
    $('#delete_btn').on('click', function () {
        var code_sale = document.getElementById("stc_d_modal").value;
        var r = confirm("Delete Sale Types Code: " + code_sale);
        if (r === true) {
            $.ajax({
                global: false,
                type: "post",
                url: "json/_delete_sale_types.jsp",
                data: {
                    code_sale: code_sale
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
        var r = confirm("Update Description Sale Types Code: " + code_sale);
        if (r === true) {
            $.ajax({
                global: false,
                type: "post",
                url: "json/_update_sale_types.jsp",
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
                    } else {
                        alert("Update Failed!");
                    }
                }
            });
        }
    });
});
