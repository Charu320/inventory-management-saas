import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const orders = [
  { customer: "Priya Sharma", product: "Chocolate Cake (1kg)", qty: 2, source: "Instagram", delivery: "2026-03-17", status: "Preparing" },
  { customer: "Rahul Mehta", product: "Sourdough Loaf", qty: 5, source: "WhatsApp", delivery: "2026-03-16", status: "Ready" },
  { customer: "Sneha Patel", product: "Cupcakes (12pc)", qty: 1, source: "Direct", delivery: "2026-03-16", status: "Delivered" },
  { customer: "Vikram Desai", product: "Croissants", qty: 10, source: "WhatsApp", delivery: "2026-03-18", status: "Pending" },
  { customer: "Anita Roy", product: "Fudge Brownies", qty: 3, source: "Instagram", delivery: "2026-03-17", status: "Preparing" },
  { customer: "Deepak Joshi", product: "Garlic Focaccia", qty: 4, source: "Direct", delivery: "2026-03-19", status: "Pending" },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-muted text-muted-foreground",
  Preparing: "bg-warning/20 text-warning-foreground",
  Ready: "bg-success/20 text-success-foreground",
  Delivered: "bg-secondary text-secondary-foreground",
};

const Orders = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Orders</h1>
          <p className="text-muted-foreground mt-1">All customer orders in one place.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          New Order
        </button>
      </div>

      <motion.div className="card-bake overflow-hidden p-0" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Qty</th>
                <th className="px-6 py-4 font-medium">Source</th>
                <th className="px-6 py-4 font-medium">Delivery</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{o.customer}</td>
                  <td className="px-6 py-4 text-foreground">{o.product}</td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{o.qty}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">{o.source}</span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{o.delivery}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusStyles[o.status]}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Orders;
