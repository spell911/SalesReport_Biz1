<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.json.JSONArray"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    try {
        String dataObj = request.getParameter("mainObj");
        //json pattern
        String strJSON = "[{\"MemberID\":\"1\",\"Name\":\"phich\",\"Tel\":\"9999999999\"}"
                + ",{\"MemberID\":\"2\",\"Name\":\"phich\",\"Tel\":\"9999999999\"}"
                + ",{\"MemberID\":\"3\",\"Name\":\"phich\",\"Tel\":\"9999999999\"}]";

//        System.out.println("_input_sale_types_details : " + dataObj);
        DBUtils dt = new DBUtils();
        int i = dt.ins_TypeDeliveryTermsTemp(dataObj);
        int j = 0;
        if (i > 0) {
            j = dt.ins_TypeDeliveryTerms();
            dt.tru_TypeDeliveryTermsTemp();
        } else {
            dt.tru_TypeDeliveryTermsTemp();
        }
        out.println(j);
    } catch (Exception e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
    out.println();
//    System.out.println("fuck off");
//    System.out.println("INPUT_SALE_TYPES_DETAILS :" + dataObj);
%>
