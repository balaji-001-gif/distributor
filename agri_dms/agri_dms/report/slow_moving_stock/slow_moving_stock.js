frappe.query_reports["Slow-Moving Stock"] = {
	"filters": [
		{
			"fieldname": "distributor",
			"label": __("Distributor"),
			"fieldtype": "Link",
			"options": "Distributor"
		},
		{
			"fieldname": "threshold_days",
			"label": __("Threshold Days (In Stock For)"),
			"fieldtype": "Int",
			"default": 30
		}
	]
};
