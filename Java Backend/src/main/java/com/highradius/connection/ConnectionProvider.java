package com.highradius.connection;

import java.sql.Connection;
import java.sql.DriverManager;

// I have made a separate class ConnectionProvider
public class ConnectionProvider {
	static Connection con;
	public static Connection createConnection() {
		try {
//			load the driver
			Class.forName("com.mysql.jdbc.Driver");
//			Create the connection
			String user = "root";
			String password = "Abhishek03$";
			String url = "jdbc:mysql://localhost:3306/hrcdb";
			
			con = DriverManager.getConnection(url, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}
}

