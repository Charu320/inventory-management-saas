import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const batches = [
  { id: "B-001", product: "Sourdough Loaf", qty: 20, date: "2026-03-16", remaining: 8 },
  { id: "B-002", product: "Chocolate Cake", qty: 10, date: "2026-03-16", remaining: 4 },
  { id: "B-003", product: "Croissants", qty: 50, date: "2026-03-16", remaining: 22 },
  { id: "B-004", product: "Red Velvet Cupcake", qty: 36, date: "2026-03-15", remaining: 0 },
  { id: "B-005", product: "Fudge Brownies", qty: 24, date: "2026-03-15", remaining: 6 },
  { id: "B-006", product: "Blueberry Muffin", qty: 30, date: "2026-03-14", remaining: 0 },
];

const Production = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Production</h1>
          <p className="text-muted-foreground mt-1">Track every batch you bake.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Start Batch
        </button>
      </div>

      <motion.div
        className="card-bake overflow-hidden p-0"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="px-6 py-4 font-medium">Batch ID</th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Qty Produced</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Remaining</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{b.id}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{b.product}</td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{b.qty}</td>
                  <td className="px-6 py-4 text-muted-foreground">{b.date}</td>
                  <td className="px-6 py-4">
                    <span className={`tabular-nums font-semibold ${b.remaining === 0 ? "text-muted-foreground" : "text-foreground"}`}>
                      {b.remaining === 0 ? "Sold out" : b.remaining}
                    </span>
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

export default Production;
