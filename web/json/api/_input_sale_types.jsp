<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    int ins_saletypes;
    String code_sale = request.getParameter("code_sale");
    String desc_sale = request.getParameter("desc_sale");
    ins_saletypes = Query_Stmt.ins_saletypes(code_sale, desc_sale);
    out.println(ins_saletypes);
%>
