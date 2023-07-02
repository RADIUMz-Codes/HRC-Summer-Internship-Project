package com.highradius.connection;

import java.util.ArrayList;
import java.util.List;

import com.highradius.model.Invoice;

public class DatabaseConnection {
	List<Invoice> invoices =  new ArrayList<Invoice>();

	public List<Invoice> getInvoices() {
		return invoices;
	}
	public void addInvoice(Invoice invoice) {
		invoices.add(invoice);
	}
	
}
