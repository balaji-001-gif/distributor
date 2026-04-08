# Agri-DMS — Agri Distributor Management System

Agri-DMS is a comprehensive Distributor Management System built on the **Frappe Framework** and designed to extend **ERPNext v15**. It manages the complete supply chain from Agriculture Machine Manufacturers to Distributors and end Customers.

## 🚀 Key Features

- **Manufacturer Management**: Manage machine manufacturers, categories, and full product catalogues.
- **Distributor Network**: Detailed distributor profiles with region-based grouping, targets, and credit limits.
- **Sales & Orders**: Complete workflow from Distributor Purchase Orders (DPO) to end Customer Sales.
- **Inventory Tracking**: Real-time stock ledgers for each distributor's yard with GRN and lateral stock transfer support.
- **Commission Engine**: Slab-based and flat-rate commission schemes with automated ledger entries and payout management.
- **ERPNext v15 Bridge**: Seamless background synchronization with ERPNext Suppliers, Customers, Items, Purchase Orders, and Sales Invoices.
- **Advanced Analytics**: Suite of 8 reports covering sales trends, stock levels, and distributor performance.

## 📦 Modules & DocTypes

### 1. Manufacturer Management
- `Manufacturer`, `Machine Category`, `Machine`

### 2. Distributor Management
- `Distributor`, `Region`, `Distributor Target`

### 3. Sales & Orders
- `Distributor Purchase Order`, `Customer Sale`

### 4. Inventory / Stock
- `Distributor Stock`, `Goods Receipt Note (GRN)`, `Stock Transfer`

### 5. Commission & Payouts
- `Commission Scheme`, `Commission Ledger`, `Commission Payout`

## 🛠 Installation

#### 1. Prerequisites
- Frappe Bench installed.
- ERPNext v15 installed on the target site.

#### 2. Get the App
```bash
bench get-app https://github.com/balaji-001-gif/distributor.git
```

#### 3. Install on Site
```bash
bench --site [your-site-name] install-app agri_dms
bench --site [your-site-name] migrate
```

#### 4. Initial Setup (Internal Roles)
Run the role initialization script to create required DMS roles:
```bash
bench --site [your-site-name] execute agri_dms.agri_dms.setup_roles.create_roles
```

## 🔄 ERPNext Integration

The application includes an automated bridge (`doctype_sync.py`) that handles:
- **Manufacturer ↔ Supplier**: Syncs metadata and tax details.
- **Distributor ↔ Customer**: Manages credit limits and territories.
- **DPO ↔ Purchase Order**: Triggers ERPNext PO creation on approval.
- **Sale ↔ Sales Invoice**: Converts DMS sales to accounting entries in ERPNext.
- **Machine ↔ Item**: Mirrors product catalogue for inventory valuation.

## 📄 License
This project is licensed under the MIT License.
