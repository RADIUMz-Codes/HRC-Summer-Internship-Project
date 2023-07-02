package com.highradius.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

/**
 * Servlet implementation class DisplayServlet
 */
@WebServlet("/DisplayServlet")
public class DisplayServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DisplayServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		InvoiceDaoImpl daoImpl = new InvoiceDaoImpl();
		List<Invoice> allInvoices = daoImpl.getInvoice();
		
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Acess-Control-Allow-Methods", "GET");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().append(gson.toJson(allInvoices));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
//	@Override
//	public void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		 //The following are CORS headers. Max age informs the 
//	    //browser to keep the results of this call for 1 day.
//	    resp.setHeader("Access-Control-Allow-Origin", "*");
//	    resp.setHeader("Access-Control-Allow-Methods", "GET, POST");
//	    resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
//	    resp.setHeader("Access-Control-Max-Age", "86400");
//	    //Tell the browser what requests we allow.
//	    resp.setHeader("Allow", "GET, HEAD, POST, TRACE, OPTIONS");
//	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
