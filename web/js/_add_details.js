$(document).ready(function () {
//build multiselect
    var gm_vals;
    var gl_vals;
    var gl_obj = [];
//warehouse
    $('#wn-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400
    });
    //group member
    $('#gm-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400,
        selectAllValue: 'select-all-value',
        onChange: function (option, checked) {
            // Get selected options.
            gm_vals = $(option).val();
            $.ajax({
                type: 'GET',
                url: 'json/gl_data.txt',
                dataType: 'json',
                success: function (data) {
                    $.each(data, function (key, value) {
                        gl_vals = value.label.substr(0, 1);
                        if (gl_vals === gm_vals) {
                            gl_obj.push(data[key]);
                            $("#gl-select").multiselect('dataprovider', gl_obj);
                        }
                    });
                }
            });
        }
    });

    //group level   
    $('#gl-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        enableClickableOptGroups: true,
        enableCollapsibleOptGroups: true,
        maxHeight: 400
    });
    //delivery terms
    $('#dt-select').multiselect({
        buttonWidth: '100%',
        enableFiltering: true,
        filterBehavior: 'value',
        includeSelectAllOption: true,
        allSelectedText: 'All Selected',
        maxHeight: 400
    });
//get data to multiselect
    //warehouse
    $.ajax({
        type: 'GET',
        url: 'json/wh_data.txt',
        dataType: 'json',
        success: function (data) {
            $("#wn-select").multiselect('dataprovider', data);
        }
    });
    //group member
    $.ajax({
        type: 'GET',
        url: 'json/gm_data.txt',
        dataType: 'json',
        success: function (data) {
            $("#gm-select").multiselect('dataprovider', data);
        }
    });

//    $.ajax({
//        type: 'GET',
//        url: 'json/gl_data.txt',
//        dataType: 'json',
//        success: function (data) {
//            $("#gl-select").multiselect('dataprovider', data);
//        }
//    });

//    var dataJSONobj = [];
//    var dataJSON;
//    $("#gm-select")
//            .change(function () {
//                $("select option:selected").each(function () {
//                    var gm_val = $("#gm-select").val().toString();
//                    //group level
//                    $.ajax({
//                        type: 'GET',
//                        url: 'json/gl_data.txt',
//                        dataType: 'json',
//                        success: function (data) {
//                            dataJSON = JSON.stringify(data);
//                            data.map(function (val) {
//                                var label = JSON.stringify(val.label.substr(0, 1));
////                                alert(typeof gm_val + "gm_val");
////                                alert(typeof label + "label");                                                                                                                                                                    
//                                if (label === gm_val) {
//                                    alert(label);
//                                    return val;
//                                } else {
//                                    alert(label + gm_val);
//                                }
//                            });
//                        }
//                    });
//                });
//            }).change();
});
