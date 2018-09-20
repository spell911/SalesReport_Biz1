$(document).ready(function () {
    var path = window.location.pathname;
    console.log(path);
    if (path === "/Wien_SalesReport_Biz1/sale_types.jsp") {
        $("#sale_types_side").addClass("active");
        $("#input_sale_types_side").removeClass("active");
    } else if (path === "/Wien_SalesReport_Biz1/input_sale_types.jsp") {
        $("#sale_types_side").removeClass("active");
        $("#input_sale_types_side").addClass("active");
    } else if (path === "/Wien_SalesReport_Biz1/") {
        $("#sale_types_side").removeClass("active");
        $("#input_sale_types_side").addClass("active");
    } else {
        $("#sale_types_side").addClass("active");
        $("#input_sale_types_side").removeClass("active");
    }
    $('#input_sale_types_side_a').click(function () {
        window.location = './input_sale_types.jsp?';
    });
    $('#sale_types_side_a').click(function () {
        window.location = './sale_types.jsp?';
    });
});