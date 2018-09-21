$(document).ready(function () {
//get url val
//    var url = new URL(window.location);
    var code_type = getQueryString("code_type");
    var desc_type = getQueryString("desc_type");
    document.getElementById("name_head").innerHTML = desc_type;
    document.getElementById("name_head_s").innerHTML = desc_type;
    //arr val
    var wh_arr = [], gm_arr = [], gl_arr = [], dt_arr = [];
    var gl_arr_all = [];
    //html tag val
    var glstats_onload = "<p style=\"padding-top: 2mm\" class=\"blinker\">Loading...</p>";
    var glstats_unload = "<p style=\"padding-top: 2mm;color: red\">*Please select group member.</p>";
    var savestats_onsave = "<span id=\"statspan\" style=\"color: green\" class=\"alignleft blinker\">Saving...</span>";
    var savestats_saved = "<span id=\"statspan\" style=\"color: green\" class=\"alignleft\">Save successfully</span>";
    var savestats_failed = "<span id=\"statspan\" style=\"color: red\" class=\"alignleft\">Save failed.</span>";
    //html stats
    $("#gl-select").prop('disabled', true);
    $("#loag-gl").hide("slow");
    $("#savestats").hide("slow");
    $("#glstats").html(glstats_unload);

//build multiselect
//warehouse
    $('#wh-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400,
        onChange: function (option, checked) {
            // Get selected options.
            if (checked === true) {
                wh_arr.push($(option).val());
            } else if (checked === false) {
                spliceArr(wh_arr, $(option).val());
            }
        },
        onSelectAll: function () {
            //console.log($('#wh-select').val());
            wh_arr = $('#wh-select').val();
        },
        onDeselectAll: function () {
            wh_arr = [];
        },
        onDropdownHide: function () {
            //console.log(wh_arr);
        }
    });
    //group member
    $('#gm-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
//        selectAllValue: 'allin',
        maxHeight: 400,
        onChange: function (option, checked) {
            // Get selected options.
            if (checked === true) {
                gm_arr.push($(option).val());
            } else if (checked === false) {
                spliceArr(gm_arr, $(option).val());
            }
        },
        onSelectAll: function () {
            gm_arr = $('#gm-select').val();
        },
        onDeselectAll: function () {
            gm_arr = [];
        },
        onDropdownHide: function () {
            get_gl(gm_arr);
        }
    });
    //group level   
    $('#gl-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400,
        onChange: function (option, checked) {
            if (checked === true) {
                gl_arr.push($(option).val());
            } else if (checked === false) {
                spliceArr(gl_arr, $(option).val());
            }
        },
        onSelectAll: function () {
            gl_arr = $('#gl-select').val();
        },
        onDeselectAll: function () {
            gl_arr = [];
        },
        onDropdownHide: function () {
            //console.log(gl_arr);
        }
    });
    //delivery terms
    $('#dt-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400,
        onChange: function (option, checked) {
            if (checked === true) {
                dt_arr.push($(option).val());
            } else if (checked === false) {
                spliceArr(dt_arr, $(option).val());
            }
        },
        onSelectAll: function () {
            //console.log($('#dt-select').val());
            dt_arr = $('#dt-select').val();
        },
        onDeselectAll: function () {
            dt_arr = [];
        },
        onDropdownHide: function () {
            //console.log(dt_arr);
        }
    });
//get data to multiselect
    //warehouse
    $.ajax({
        type: 'GET',
        url: 'json/api/_wh_data.jsp',
        dataType: 'json',
        success: function (data) {
            $("#wh-select").multiselect('dataprovider', data);
        }
    });
    //group member
    $.ajax({
        type: 'GET',
        url: 'json/api/_gm_data.jsp',
        dataType: 'json',
        success: function (data) {
            $("#gm-select").multiselect('dataprovider', data);
        }
    });
    //group level
    function get_gl(gm_val) {
        //////console.log(gm_val);
        gl_arr = [];
        gm_vals = concatequates(gm_val);
        ////console.log(gm_vals);
        $.ajax({
            type: 'GET',
            url: 'json/api/_gl_data_spec.jsp',
            dataType: 'json',
            data: {"gm_arr": $.trim(gm_vals)},
            beforeSend: function () {
                $('#gl-select').multiselect('disable');
                if (gm_val !== "") {
                    $("#glstats").html(glstats_onload);
                } else {
                    $("#glstats").html("<span></span>");
                }
            },
            success: function (data) {
                gl_arr_all = data;
                //console.log(gl_arr_all);
                if (data != "") {
                    $("#gl-select").multiselect('dataprovider', data);
                    $("#glstats").html("<span></span>");
                } else {
                    $('#gl-select').multiselect('disable');
                    $("#glstats").html(glstats_unload);
                }

            }
        });
    }
    //contcate double q
    function concatequates(before_val) {
        var after_val = "'" + before_val.join("','") + "'";
        return after_val;
    }

    //delivery terms
    $.ajax({
        type: 'GET',
        url: 'json/api/_dt_data.jsp',
        dataType: 'json',
        success: function (data) {
            $("#dt-select").multiselect('dataprovider', data);
        }
    });

    $('#save_details_btn').on('click', function () {
        $("#_modal_cancle_btn").prop('disabled', false);
        $("#_modal_save_btn").prop('disabled', false);
        $("#savestats").hide("slow");
        var mainObj = {};
        var subObj;
        var data = [];
        var i, j, k, l, m = 1, n = 0;
        if (checkdata() === true) {
            $('#SaveDisplayAddDetails_Modal').modal('show');
            try {
                for (i = 0; i < wh_arr.length; i++) {
                    for (j = 0; j < gm_arr.length; j++) {
                        for (k = 0; k < gl_arr.length; k++) {
                            for (l = 0; l < dt_arr.length; l++) {
                                subObj = new Object();
                                if (gl_check(gm_arr[j], gl_arr[k]) !== undefined) {
                                    subObj["no"] = m;
                                    subObj["ct"] = code_type;
                                    subObj["wh"] = wh_arr[i];
                                    subObj["gm"] = gm_arr[j];
                                    subObj["gl"] = gl_arr[k];
                                    subObj["dt"] = dt_arr[l];
                                    data.push(subObj);
                                    m++;
                                    n++;
                                }
                            }
                        }
                    }
                }
                mainObj = data;
                savedisplay(mainObj, n);
            } catch (e) {
                console.log(e);
            }
        }
    });

//check gl before push to object
    function gl_check(gm, gl) {
        for (var i = 0; i < gl_arr_all.length; i++) {
            for (var j in gl_arr_all[i].children) {
                if (JSON.stringify(gl_arr_all[i].label).substr(1, 1) === gm && gl_arr_all[i].children[j].value === gl) {
                    ////console.log(gm + " - " + gl);
                    return gl_arr_all[i].children[j].value;
                }
            }
        }
    }

    function savedisplay(val, n) {
        var mainObj, specObject;
        var ignore_btn = "<td style=\"text-align: center;width: auto\"><a id=\"ignore_btn\" href=\"#\" style=\"color: red\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>";
        mainObj = val;
        specObject = val;
        var table = $('#save_display_add_sale_types_details_table').DataTable();
        table.destroy();
        table = $('#save_display_add_sale_types_details_table').DataTable({
            data: mainObj,
            dataSrc: "",
            columnDefs: [
                {className: "dt-center", targets: [0]},
                {className: "dt-center", targets: [6], data: null, defaultContent: ignore_btn, orderable: false}
            ],
            columns: [
                {"data": "no"},
                {"data": "ct"},
                {"data": "wh"},
                {"data": "gm"},
                {"data": "gl"},
                {"data": "dt"}
            ]
        });

        $('#save_display_add_sale_types_details_table').on('click', '#ignore_btn', function () {

            var tr = $(this).closest('tr');
            var row = $('#save_display_add_sale_types_details_table').DataTable().row(tr);
            var no = row.data().no;
            specObject = removeByKey(val, {
                key: 'no',
                value: no
            });
            table.row($(this).parents('tr')).remove().draw();
        });

        //Save
        $('#_modal_save_btn').on('click', function () {
            var specObjects = [];
            specObjects = JSON.stringify(specObject);
            try {
                $.ajax({
                    type: "POST",
                    url: "json/api/_input_sale_types_details.jsp",
                    data: {mainObj: specObjects},
                    dataType: "JSON",
                    beforeSend: function () {
                        $("#_modal_cancle_btn").prop('disabled', true);
                        $("#_modal_save_btn").prop('disabled', true);
                        $("#savestats").html(savestats_onsave).show();
                    },
                    success: function (data) {
                        if (data >= 0) {
                            alert("Save successfully!");
                            $("#_modal_cancle_btn").prop('disabled', false);
                            $("#_modal_save_btn").prop('disabled', true);
                            $("#savestats").html(savestats_saved + "<span style=\"color: green;margin-left:1mm\" class=\"alignleft\">" + data + " record, Data duplicate " + (n - data) + " record.</span>");
                            specObject = [];
                        } else {
                            alert("Save failed!");
                            $("#_modal_cancle_btn").prop('disabled', false);
                            $("#_modal_save_btn").prop('disabled', true);
                            $("#savestats").html(savestats_failed);
                            specObject = [];
                        }
                    },
                    failure: function (errMsg) {
                        alert(errMsg);
                        $("#_modal_cancle_btn").prop('disabled', false);
                        $("#_modal_save_btn").prop('disabled', false);
                        $("#savestats").html(savestats_failed);
                        specObject = [];
                    }
                });
            } catch (e) {
                specObjects = [];
            }
        });
    }

    //blink effect
    function blinker() {
        $('.blinker').fadeOut(300);
        $('.blinker').fadeIn(300);
    }
    setInterval(blinker, 600);
    //splice array
    function spliceArr(arr, val) {
        var index = jQuery.inArray(val, arr);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
    //remove array object ByKey
    function removeByKey(array, params) {
        array.some(function (item, index) {
            if (array[index][params.key] === params.value) {
                // found it!
                array.splice(index, 1);
                return true; // stops the loop
            }
            return false;
        });
        return array;
    }
    //checkdata
    function checkdata() {
        if (wh_arr == "") {
            alert("Please select warehouse.");
            $("#wh-select").focus();
            return false;
        } else if (gm_arr == "") {
            alert("Please select group member.");
            $("#gm-select").focus();
            return false;
        } else if (gl_arr == "") {
            alert("Please select group level.");
            $("#gl-select").focus();
            return false;
        } else if (dt_arr == "") {
            alert("Please select delivery term.");
            $("#dt-select").focus();
            return false;
        } else {
            return true;
        }
    }
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
    //previous page 
    $('#cancel_btn').on('click', function () {
        //redirect previous page
        window.history.back();
    });
});
