<%@page import="java.io.BufferedWriter"%>
<%@page import="java.io.File"%>
<%@page import="java.util.Iterator"%>
<%@page import="org.json.JSONArray"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    ResultSet DT_DATA = null;
    String value;
    String label;
    try {
        DT_DATA = Query_Stmt.sel_delivery_terms();
        JSONArray jsonArrDT = new JSONArray();
        while (DT_DATA.next()) {
            JSONObject jsonD = new JSONObject();
            value = DT_DATA.getString("CTSTKY").trim();
            label = DT_DATA.getString("CTPARM").trim();
            int lidx = label.lastIndexOf("00000000000");
            jsonD.put("value", value);
            jsonD.put("label", value + " - " + label.substring(0, lidx).trim());
            jsonArrDT.put(jsonD);
        }
        out.println(jsonArrDT);
        DT_DATA.close();
    } catch (Exception e) {
        System.out.println(e);
    }
%>
