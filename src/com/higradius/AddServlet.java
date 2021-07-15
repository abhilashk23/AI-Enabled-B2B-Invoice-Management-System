package com.higradius;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter; 

import java.sql.*;
import java.util.*;
import java.sql.Date;
import java.text.ParseException;
/**
 * Servlet implementation class AddServlet
 */
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		
		
		
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","2304");
			PreparedStatement st = conn.prepareStatement("insert into invoice values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		
			st.setNull(1,Types.NULL);
			st.setNull(2,Types.NULL);
			st.setString(3,request.getParameter("custno"));
			st.setString(4,request.getParameter("custname"));
			st.setNull(5, Types.NULL);
			st.setNull(6, Types.NULL);
			st.setNull(7, Types.NULL);
			st.setDate(8,Date.valueOf(request.getParameter("ddate")));
			st.setNull(9, Types.NULL);
			st.setDouble(10, Double.valueOf(request.getParameter("inamt")));
			st.setNull(11, Types.NULL);
			st.setNull(12, Types.NULL);
			st.setNull(13, Types.NULL);
			st.setNull(14, Types.NULL);
			st.setNull(15, Types.NULL);
			st.setInt(16, Integer.valueOf(request.getParameter("inno")));
			st.setString(17, request.getParameter("subject"));
			
			
			st.executeUpdate();
			
			
			
			st.close();
			conn.close();
			
			PrintWriter out = response.getWriter();
			response.setContentType("text/html; charset=utf-8");
			out.println("<html><body><b>Successfully Inserted"
					+ "</b></body></html>"); 
		} catch (Exception e) {
			e.printStackTrace();
		}
//		response.sendRedirect("http://localhost:8080/Summer_Internship_Backend/");
		
		
	}

}
