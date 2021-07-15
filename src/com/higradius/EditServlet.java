package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Types;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public EditServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String fieldValue = request.getParameter("uniqId");
			int field = Integer.parseInt(fieldValue);
			String newInAmt = request.getParameter("inamt");
			float newInvoiceAmt = Float.parseFloat(newInAmt);
			String newNotes = request.getParameter("nn");

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","2304");
			String query = "UPDATE invoice SET total_open_amount = ?, notes = ? WHERE demo_id = ?";

			PreparedStatement st = conn.prepareStatement(query);
			st.setFloat(1, newInvoiceAmt);
			st.setString(2, newNotes);
			st.setInt(3, field);

			st.executeUpdate();
			conn.close();
		}

		catch (Exception e) {

		}
//		response.sendRedirect("http://localhost:8080/Summer_Internship_Backend/");
	}

}
