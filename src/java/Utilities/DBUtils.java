/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Utilities;

import Conn.*;
import java.sql.*;

/**
 *
 * @author phich.bur
 */
public class DBUtils {

    private Connection conn;
    ConnectionUtils dbConnector;
    ResultSet rs = null;
    Statement stmt = null;

    public DBUtils()
            throws Exception {
        conn = null;
        dbConnector = null;
        dbConnector = new ConnectionUtils();
        conn = dbConnector.getDefaultConnection(false);
    }

    //Sql Stagement
    //user_login
    public ResultSet sel_saletypes()
            throws Exception {
        stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        String sql = "SELECT * FROM Biz1TypeSale ORDER BY SaleTypeID";
        rs = stmt.executeQuery(sql);
        return rs;
    }

    public int ins_saletypes(String code_sale, String desc_sale) throws Exception {
        stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        int ins_item = 0;
        String sql = "INSERT INTO Biz1TypeSale (CodeSale,DescSale,EntryDate) VALUES ('" + code_sale + "','" + desc_sale + "',GETDATE())";
        ins_item = stmt.executeUpdate(sql);
        return ins_item;
    }

    public int del_saletypes(String code_sale) throws Exception {
        stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        int del_item = 0;
        String sql = "DELETE FROM Biz1TypeSale WHERE CodeSale='" + code_sale + "'";
        del_item = stmt.executeUpdate(sql);
        return del_item;
    }

    public int upd_saletypes(String code_sale, String desc_sale) throws Exception {
        stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        int upd_item = 0;
        String sql = "UPDATE Biz1TypeSale SET DescSale ='" + desc_sale + "',Mdate = GETDATE() WHERE CodeSale='" + code_sale + "'";
        upd_item = stmt.executeUpdate(sql);
        return upd_item;
    }

}
