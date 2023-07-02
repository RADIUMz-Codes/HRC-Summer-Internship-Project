package com.highradius.implementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.highradius.connection.ConnectionProvider;
// import com.highradius.connection.DatabaseConnection;
import com.highradius.model.Invoice;

public class InvoiceDaoImpl implements InvoiceDao {

//	Filhaal Unused
//    private DatabaseConnection databaseConnection = new DatabaseConnection();
	
	
    @Override
    public List<Invoice> getInvoice() {
//        return databaseConnection.getInvoices();
		List<Invoice> invoices =  new ArrayList<Invoice>();
//        Testing
        try {
			Connection con = ConnectionProvider.createConnection();
			String query = "Select * From hrcdb.h2h_oap Limit 10000";
			Statement stmt = con.createStatement();
			ResultSet rSet = stmt.executeQuery(query);
			while(rSet.next()) {			
				Invoice inv = new Invoice(rSet.getLong(1), rSet.getLong(2), rSet.getInt(3), rSet.getString(4), rSet.getString(5), rSet.getFloat(6), rSet.getString(7), rSet.getLong(8), rSet.getString(9), rSet.getString(10), rSet.getString(11), rSet.getLong(12), rSet.getFloat(13), rSet.getString(14), rSet.getString(15), rSet.getString(16), rSet.getLong(17), rSet.getFloat(18), rSet.getLong(19));
				invoices.add(inv);
			}
//			Closing Connection
			con.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
        return invoices;
    }

    @Override
    public void insertInvoice(Invoice inv) {  
//    	System.out.println(inv.getCompanyCode());
    	try {
//			jdbc code...
    		Connection con = ConnectionProvider.createConnection();
			String query = "INSERT INTO hrcdb.h2h_oap (CUSTOMER_ORDER_ID,SALES_ORG,DISTRIBUTION_CHANNEL,DIVISION,RELEASED_CREDIT_VALUE,PURCHASE_ORDER_TYPE,COMPANY_CODE,ORDER_CREATION_DATE,ORDER_CREATION_TIME,CREDIT_CONTROL_AREA,SOLD_TO_PARTY,ORDER_AMOUNT,REQUESTED_DELIVERY_DATE,ORDER_CURRENCY,CREDIT_STATUS,CUSTOMER_NUMBER,AMOUNT_IN_USD,UNIQUE_CUST_ID) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			
//			Prepared Query
			PreparedStatement  pstm = con.prepareStatement(query);
//			Filling Values
			int i =1;
			pstm.setLong(i++, inv.getCustomerOrderID());
			pstm.setLong(i++,inv.getSalesOrg() );
			pstm.setString(i++, inv.getDistributionChannel());
			pstm.setString(i++ , inv.getDivision());
			pstm.setDouble(i++, inv.getReleasedCreditValue());
			pstm.setString(i++, inv.getPurchaseOrderType());
			pstm.setLong(i++, inv.getCompanyCode());
			pstm.setString(i++, inv.getOrderCreationDate());
			pstm.setString(i++, inv.getOrderCreationTime());
			pstm.setString(i++, inv.getCreditControlArea());
			pstm.setLong(i++, inv.getSoldToParty());
			pstm.setDouble(i++, inv.getOrderAmount());
			pstm.setString(i++, inv.getRequestedDeliveryDate());
			pstm.setString(i++, inv.getOrderCurrency());
			pstm.setString(i++, inv.getCreditStatus());
			pstm.setLong(i++, inv.getCustomerNumber());
			pstm.setDouble(i++, inv.getAmountInUsd());
			pstm.setLong(i++, inv.getUniqueCustNumber());
			
//			Execute
			pstm.executeUpdate();
//			Closing Connection
			
		} catch (Exception e) {
			e.printStackTrace();
		}
        
    }

    @Override
    public void updateInvoice(long id, Invoice invoice) {
        // TODO Auto-generated method stub
    	try {
    		Connection con = ConnectionProvider.createConnection();
    		String query = "UPDATE hrcdb.h2h_oap SET ORDER_CURRENCY = ? , COMPANY_CODE = ?, DISTRIBUTION_CHANNEL = ?, AMOUNT_IN_USD =? WHERE Sl_no = ?";
    		PreparedStatement pstm = con.prepareStatement(query);
//    		pstm.setString(1, invoice.getDivision());
////    		Test
//    		System.out.println(invoice.getDivision());
    		pstm.setString(1, invoice.getOrderCurrency());
    		pstm.setLong(2, invoice.getCompanyCode());
    		pstm.setString(3, invoice.getDistributionChannel());
    		pstm.setDouble(4, invoice.getAmountInUsd());
    		
    		pstm.setLong(5, id);
    		pstm.executeUpdate();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }

    @Override
    public void deleteInvoice(long id) {
        // TODO Auto-generated method stub
    	try {
			Connection con = ConnectionProvider.createConnection();
			String query = "DELETE FROM hrcdb.h2h_oap WHERE Sl_no=?";
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setLong(1, id);
			pstm.executeUpdate();
//			Closing Connection
			con.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

    
}
