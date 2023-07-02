package com.highradius.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.ResponseStatus;

/**
 * Servlet implementation class DeleteInvoice
 */
@WebServlet("/DeleteInvoice")
public class DeleteInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		long id = Long.parseLong(request.getParameter("idDel"));
		
		InvoiceDaoImpl daoImpl = new InvoiceDaoImpl();
		daoImpl.deleteInvoice(id);
		
		ResponseStatus res = new ResponseStatus("Delete Success");
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Acess-Control-Allow-Methods", "GET");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().append(gson.toJson(res));
		
		
//		PrintWriter pw = response.getWriter();
//		pw.println("<h1>Data at Sl_no "+id+" has been Deleted </h1>");
//		pw.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
