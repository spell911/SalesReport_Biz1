<%@page import="org.json.JSONArray"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    ResultSet GM_DATA = null;
    String value;
    String label;
    GM_DATA = Query_Stmt.sel_group_member();
    JSONArray jsonArr = new JSONArray();
    while (GM_DATA.next()) {
        JSONObject json = new JSONObject();
        value = GM_DATA.getString("CTSTKY").trim();
        label = GM_DATA.getString("CTTX40").trim();
        json.put("value", value);
        json.put("label", value + " - " + label);
        jsonArr.put(json);
    }
    out.println(jsonArr);
%>
