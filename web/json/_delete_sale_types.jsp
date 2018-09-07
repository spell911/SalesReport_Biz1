<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    int del_saletypes;
    String code_sale = request.getParameter("code_sale");
    del_saletypes = Query_Stmt.del_saletypes(code_sale);
    out.println(del_saletypes);
%>
