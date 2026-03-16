import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const wastageItems = [
  { date: "2026-03-16", item: "Croissants", type: "Product", qty: "5 pcs", reason: "Stale / Unsold", cost: 600 },
  { date: "2026-03-15", item: "Butter", type: "Ingredient", qty: "1.5 kg", reason: "Expired", cost: 825 },
  { date: "2026-03-14", item: "Chocolate Cake", type: "Product", qty: "1 pc", reason: "Damaged", cost: 450 },
  { date: "2026-03-13", item: "Eggs", type: "Ingredient", qty: "12 pcs", reason: "Broken", cost: 84 },
  { date: "2026-03-12", item: "Sourdough Loaf", type: "Product", qty: "3 pcs", reason: "Unsold", cost: 540 },
];

const Wastage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Wastage</h1>
          <p className="text-muted-foreground mt-1">Track what's going to waste. Reduce, save money.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Log Wastage
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <motion.div className="card-bake p-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">This Month</p>
          <p className="text-3xl font-bold font-display text-foreground tabular-nums mt-2">₹2,499</p>
        </motion.div>
        <motion.div className="card-bake p-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Top Wasted Item</p>
          <p className="text-xl font-bold font-display text-foreground mt-2">Butter</p>
        </motion.div>
        <motion.div className="card-bake p-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Top Reason</p>
          <p className="text-xl font-bold font-display text-foreground mt-2">Unsold</p>
        </motion.div>
      </div>

      <motion.div className="card-bake overflow-hidden p-0" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Item</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Quantity</th>
                <th className="px-6 py-4 font-medium">Reason</th>
                <th className="px-6 py-4 font-medium text-right">Cost</th>
              </tr>
            </thead>
            <tbody>
              {wastageItems.map((w, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">{w.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{w.item}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${w.type === "Product" ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground"}`}>
                      {w.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{w.qty}</td>
                  <td className="px-6 py-4 text-muted-foreground">{w.reason}</td>
                  <td className="px-6 py-4 text-right tabular-nums font-semibold text-destructive">₹{w.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Wastage;
