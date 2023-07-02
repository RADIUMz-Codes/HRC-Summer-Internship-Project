package com.highradius.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;
import com.highradius.model.ResponseStatus;

/**
 * Servlet implementation class UpdateInvoice
 */
@WebServlet("/UpdateInvoice")
public class UpdateInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		long id = Long.parseLong(request.getParameter("idUp"));
		String ordCurr = request.getParameter("ordCurr");
		long compCode = Long.parseLong(request.getParameter("compCode"));
		String disChan = request.getParameter("disChan");
		float ordAmt = Float.parseFloat(request.getParameter("ordAmt"));
		Invoice iv = new Invoice();
		iv.setOrderCurrency(ordCurr);
		iv.setCompanyCode(compCode);
		iv.setDistributionChannel(disChan);
		iv.setAmountInUsd(ordAmt);
		InvoiceDaoImpl daoImpl = new InvoiceDaoImpl();
		daoImpl.updateInvoice(id, iv);
		
		ResponseStatus res = new ResponseStatus("Edit Success");
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Acess-Control-Allow-Methods", "GET");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().append(gson.toJson(res));
		
		
		
	}

}
