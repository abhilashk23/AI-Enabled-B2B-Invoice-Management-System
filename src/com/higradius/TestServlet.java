package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import java.util.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class TestServlet
 */
@WebServlet("/TestServlet")
public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
int rowToGet = 11;
		
		try {
			String pageInURL = request.getParameter("page");
			int page = Integer.parseInt(pageInURL) * rowToGet; 
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","2304");
			Statement st = conn.createStatement();
			String query = "SELECT demo_id, name_customer, cust_number, invoice_id, total_open_amount, due_in_date, predicted_date, notes from invoice";
			ResultSet rs = st.executeQuery(query);
			
			ArrayList<PojoClass> data = new ArrayList<>();
			while(rs.next())
			{
				PojoClass inv = new PojoClass();
				inv.setField(rs.getInt("demo_id"));
				inv.setCustomerName(rs.getString("name_customer"));
				inv.setCustomerId(rs.getString("cust_number"));
				inv.setInvoiceId(rs.getString("invoice_id"));
				inv.setInvoiceAmt(rs.getFloat("total_open_amount"));
				inv.setDueDate(rs.getString("due_in_date"));
				inv.setPredictedDate(rs.getString("predicted_date"));
				inv.setNotes(rs.getString("notes"));
				data.add(inv);
			}
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices  = gson.toJson(data);
			response.setContentType("application/json");
			try {
				response.getWriter().write(invoices);
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			conn.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
