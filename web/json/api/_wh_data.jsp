<%@page import="org.json.JSONArray"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    ResultSet WH_DATA = null;
    String value;
    String label;
    WH_DATA = Query_Stmt.sel_warehoues();
    JSONArray jsonArr = new JSONArray();
    while (WH_DATA.next()) {
        JSONObject json = new JSONObject();
        value = WH_DATA.getString("MWWHLO").trim();
        label = WH_DATA.getString("MWWHNM").trim();
        json.put("value", value);
        json.put("label", value + " - " + label);
        jsonArr.put(json);
    }
    out.println(jsonArr);
%>
