package Conn;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class ConnectionUtils {

    private String driverClass = null;
    private String dbUrl = null;
    private String userName = null;
    private String password = null;

    public ConnectionUtils() throws Exception {
        driverClass = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        dbUrl = "jdbc:sqlserver://10.8.10.21:1433;databasename=WienApplication";
        userName = "sa";
        password = "sa";
    }

    public Connection getConnection(String connectionName, String userName, String password, boolean usePool) throws Exception {
        if (usePool) {
            InitialContext init = new InitialContext();
            DataSource ds = (DataSource) init.lookup(connectionName);
            return ds.getConnection(userName, password);

        } else {
            Class.forName(driverClass);
            String dburl = connectionName;
            return DriverManager.getConnection(dburl, userName, password);
        }
    }

    public Connection getDefaultConnection(boolean usePool) throws Exception {
        return getConnection(dbUrl, userName, password, usePool);
    }

}
