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
    String code_sale;
    String desc_sale;
    String from = request.getParameter("from");
    JSONArray jsonArr = new JSONArray();
    SaleTypes_Table = Query_Stmt.sel_saletypes();
    if (from.equals("input_sale_types_table")) {
        while (SaleTypes_Table.next()) {
            JSONObject json = new JSONObject();
            code_sale = SaleTypes_Table.getString("CodeSale").trim();
            desc_sale = SaleTypes_Table.getString("DescSale").trim();
            json.put("seq", Integer.toString(seq));
            json.put("code_sale", code_sale);
            json.put("desc_sale", desc_sale);
            jsonArr.put(json);
            seq++;
        }
    } else {
        while (SaleTypes_Table.next()) {
            JSONObject json = new JSONObject();
            code_sale = SaleTypes_Table.getString("CodeSale").trim();
            desc_sale = SaleTypes_Table.getString("DescSale").trim();
            json.put("seq", Integer.toString(seq));
            json.put("code_sale", code_sale);
            json.put("desc_sale", desc_sale);
            jsonArr.put(json);
            seq++;
        }
    }
    JSONObject jsonob = new JSONObject();
    jsonob.put("data", jsonArr);
//    System.out.print(jsonob);
    out.println(jsonArr);
    SaleTypes_Table.close();%>