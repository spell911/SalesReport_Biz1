<%@page import="Utilities.DBUtils"%>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@page import="java.util.UUID"%>
<%@page import="org.json.JSONObject"%>
<%@page import="org.json.JSONArray"%>
<%@page import="java.sql.ResultSet"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    ResultSet SaleTypes_Table = null;
    int seq = 1;
    String code_sale = request.getParameter("code_sale");
    String wh;
    String gm;
    String gl;
    String dt;
    int typeid;
    JSONArray jsonArr = new JSONArray();
    SaleTypes_Table = Query_Stmt.sel_display_sale_types(code_sale);
    while (SaleTypes_Table.next()) {
        JSONObject json = new JSONObject();
        typeid = SaleTypes_Table.getInt("TypeId");
        wh = SaleTypes_Table.getString("Dwarehouse").trim();
        gm = SaleTypes_Table.getString("Dcusgroup").trim();
        gl = SaleTypes_Table.getString("Dcuslevel").trim();
        dt = SaleTypes_Table.getString("Ddeliveryterms").trim();
        json.put("seq", Integer.toString(seq));
        json.put("typeid", typeid);
        json.put("wh", wh);
        json.put("gm", gm);
        json.put("gl", gl);
        json.put("dt", dt);
        jsonArr.put(json);
        seq++;
    }
    out.println(jsonArr);
    SaleTypes_Table.close();%>