package com.highradius.model;

public class Invoice {
	private long id;
	private long customerOrderID;
	private long salesOrg;
	private String distributionChannel;
	private String division;
	private float releasedCreditValue;
	private String purchaseOrderType;
    private long  companyCode;
    private String orderCreationDate;
    private String orderCreationTime;
    private String creditControlArea;
    private long soldToParty;
    private float orderAmount;
    private String requestedDeliveryDate;
    private String orderCurrency;
    private String creditStatus;
    private long customerNumber;
    private float amountInUsd;
    private long uniqueCustNumber;
    
    public Invoice() {
//    	Empty
    }
    
	public Invoice(long customerOrderID, long salesOrg, String distributionChannel, String division,
			float releasedCreditValue, String purchaseOrderType, long companyCode, String orderCreationDate,
			String orderCreationTime, String creditControlArea, long soldToParty, float orderAmount,
			String requestedDeliveryDate, String orderCurrency, String creditStatus, long customerNumber,
			float amountInUsd, long uniqueCustNumber) {
		super();
		this.customerOrderID = customerOrderID;
		this.salesOrg = salesOrg;
		this.distributionChannel = distributionChannel;
		this.division = division;
		this.releasedCreditValue = releasedCreditValue;
		this.purchaseOrderType = purchaseOrderType;
		this.companyCode = companyCode;
		this.orderCreationDate = orderCreationDate;
		this.orderCreationTime = orderCreationTime;
		this.creditControlArea = creditControlArea;
		this.soldToParty = soldToParty;
		this.orderAmount = orderAmount;
		this.requestedDeliveryDate = requestedDeliveryDate;
		this.orderCurrency = orderCurrency;
		this.creditStatus = creditStatus;
		this.customerNumber = customerNumber;
		this.amountInUsd = amountInUsd;
		this.uniqueCustNumber = uniqueCustNumber;
	}
	
	
	
	
	public Invoice(long slNo, long customerOrderID, long salesOrg, String distributionChannel, String division,
			float releasedCreditValue, String purchaseOrderType, long companyCode, String orderCreationDate,
			String orderCreationTime, String creditControlArea, long soldToParty, float orderAmount,
			String requestedDeliveryDate, String orderCurrency, String creditStatus, long customerNumber,
			float amountInUsd, long uniqueCustNumber) {
		super();
		this.id = slNo;
		this.customerOrderID = customerOrderID;
		this.salesOrg = salesOrg;
		this.distributionChannel = distributionChannel;
		this.division = division;
		this.releasedCreditValue = releasedCreditValue;
		this.purchaseOrderType = purchaseOrderType;
		this.companyCode = companyCode;
		this.orderCreationDate = orderCreationDate;
		this.orderCreationTime = orderCreationTime;
		this.creditControlArea = creditControlArea;
		this.soldToParty = soldToParty;
		this.orderAmount = orderAmount;
		this.requestedDeliveryDate = requestedDeliveryDate;
		this.orderCurrency = orderCurrency;
		this.creditStatus = creditStatus;
		this.customerNumber = customerNumber;
		this.amountInUsd = amountInUsd;
		this.uniqueCustNumber = uniqueCustNumber;
	}




	public long getSlNo() {
		return id;
	}




	public void setSlNo(long slNo) {
		this.id = slNo;
	}




	public long getCustomerOrderID() {
		return customerOrderID;
	}




	public void setCustomerOrderID(long customerOrderID) {
		this.customerOrderID = customerOrderID;
	}




	public long getSalesOrg() {
		return salesOrg;
	}




	public void setSalesOrg(long salesOrg) {
		this.salesOrg = salesOrg;
	}




	public String getDistributionChannel() {
		return distributionChannel;
	}




	public void setDistributionChannel(String distributionChannel) {
		this.distributionChannel = distributionChannel;
	}




	public String getDivision() {
		return division;
	}




	public void setDivision(String division) {
		this.division = division;
	}




	public float getReleasedCreditValue() {
		return releasedCreditValue;
	}




	public void setReleasedCreditValue(float releasedCreditValue) {
		this.releasedCreditValue = releasedCreditValue;
	}




	public String getPurchaseOrderType() {
		return purchaseOrderType;
	}




	public void setPurchaseOrderType(String purchaseOrderType) {
		this.purchaseOrderType = purchaseOrderType;
	}




	public long getCompanyCode() {
		return companyCode;
	}




	public void setCompanyCode(long companyCode) {
		this.companyCode = companyCode;
	}




	public String getOrderCreationDate() {
		return orderCreationDate;
	}




	public void setOrderCreationDate(String orderCreationDate) {
		this.orderCreationDate = orderCreationDate;
	}




	public String getOrderCreationTime() {
		return orderCreationTime;
	}




	public void setOrderCreationTime(String orderCreationTime) {
		this.orderCreationTime = orderCreationTime;
	}




	public String getCreditControlArea() {
		return creditControlArea;
	}




	public void setCreditControlArea(String creditControlArea) {
		this.creditControlArea = creditControlArea;
	}




	public long getSoldToParty() {
		return soldToParty;
	}




	public void setSoldToParty(long soldToParty) {
		this.soldToParty = soldToParty;
	}




	public float getOrderAmount() {
		return orderAmount;
	}




	public void setOrderAmount(float orderAmount) {
		this.orderAmount = orderAmount;
	}




	public String getRequestedDeliveryDate() {
		return requestedDeliveryDate;
	}




	public void setRequestedDeliveryDate(String requestedDeliveryDate) {
		this.requestedDeliveryDate = requestedDeliveryDate;
	}




	public String getOrderCurrency() {
		return orderCurrency;
	}




	public void setOrderCurrency(String orderCurrency) {
		this.orderCurrency = orderCurrency;
	}




	public String getCreditStatus() {
		return creditStatus;
	}




	public void setCreditStatus(String creditStatus) {
		this.creditStatus = creditStatus;
	}




	public long getCustomerNumber() {
		return customerNumber;
	}




	public void setCustomerNumber(long customerNumber) {
		this.customerNumber = customerNumber;
	}




	public float getAmountInUsd() {
		return amountInUsd;
	}




	public void setAmountInUsd(float amountInUsd) {
		this.amountInUsd = amountInUsd;
	}




	public long getUniqueCustNumber() {
		return uniqueCustNumber;
	}




	public void setUniqueCustNumber(long uniqueCustNumber) {
		this.uniqueCustNumber = uniqueCustNumber;
	}




	@Override
	public String toString() {
		return "Invoice [id=" + id + ", customerOrderID=" + customerOrderID + ", salesOrg=" + salesOrg
				+ ", distributionChannel=" + distributionChannel + ", division=" + division + ", releasedCreditValue="
				+ releasedCreditValue + ", purchaseOrderType=" + purchaseOrderType + ", companyCode=" + companyCode
				+ ", orderCreationDate=" + orderCreationDate + ", orderCreationTime=" + orderCreationTime
				+ ", creditControlArea=" + creditControlArea + ", soldToParty=" + soldToParty + ", orderAmount="
				+ orderAmount + ", requestedDeliveryDate=" + requestedDeliveryDate + ", orderCurrency=" + orderCurrency
				+ ", creditStatus=" + creditStatus + ", customerNumber=" + customerNumber + ", amountInUsd="
				+ amountInUsd + ", uniqueCustNumber=" + uniqueCustNumber + "]";
	}

	

	
	
}
