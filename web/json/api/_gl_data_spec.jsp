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
    ResultSet GM_DATA = null;
    ResultSet Gl_DATA = null;
    String gm_arr = request.getParameter("gm_arr");
    String value_parent;
    String label_parent;
    String label_children;
    String value_children;
//    System.out.print(gm_arr);
    try {
        GM_DATA = Query_Stmt.sel_group_member_spec(gm_arr);
        JSONArray jsonArrGm = new JSONArray();
        while (GM_DATA.next()) {
            JSONArray jsonArrGl = new JSONArray();
            JSONObject jsonP = new JSONObject();
            value_parent = GM_DATA.getString("CTSTKY").trim();
            label_parent = GM_DATA.getString("CTTX40").trim();
            Gl_DATA = Query_Stmt.sel_group_level_spec(gm_arr);
//        System.out.println(value_parent);
            while (Gl_DATA.next()) {
                JSONObject jsonC = new JSONObject();
                value_children = Gl_DATA.getString("CTSTKY").trim();
                label_children = Gl_DATA.getString("CTTX40").trim();
                if (value_parent.equals(Gl_DATA.getString("OKCUCL").trim())) {
                    jsonC.put("value", value_children);
                    jsonC.put("label", value_children + " - " + label_children);
                    jsonArrGl.put(jsonC);
//                System.out.println(value_parent + " - " + value_children + " - " + label_children + "array: " + jsonArrGl);
                }
                jsonP.put("label", value_parent + " - " + label_parent);
                jsonP.put("children", jsonArrGl);
            }
            jsonArrGm.put(jsonP);
        }
        out.println(jsonArrGm);
        GM_DATA.close();
        Gl_DATA.close();
    } catch (Exception e) {
        System.out.println(e);
    }
%>
