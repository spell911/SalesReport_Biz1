$(document).ready(function () {
    var path = window.location.pathname;
    var sale_types = document.getElementById("sale_types_side");
    var input_sale_types = document.getElementById("input_sale_types_side");

    if (path === "/SalesReport_Biz1/sale_types.jsp") {
        sale_types.classList.add("active");
        input_sale_types.classList.remove("active");
    } else if (path === "/SalesReport_Biz1/input_sale_types.jsp") {
        input_sale_types.classList.add("active");
        sale_types.classList.remove("active");
    } else {
        sale_types.classList.add("active");
        input_sale_types.classList.remove("active");
    }
});