import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const purchases = [
  { date: "2026-03-15", ingredient: "All-Purpose Flour", qty: "50 kg", supplier: "Rajesh Traders", cost: 2500 },
  { date: "2026-03-14", ingredient: "Butter (Unsalted)", qty: "10 kg", supplier: "Amul Dairy", cost: 5500 },
  { date: "2026-03-13", ingredient: "Eggs", qty: "200 pcs", supplier: "Farm Fresh", cost: 1400 },
  { date: "2026-03-12", ingredient: "Cocoa Powder", qty: "5 kg", supplier: "Baker's Hub", cost: 1800 },
  { date: "2026-03-10", ingredient: "Vanilla Extract", qty: "500 ml", supplier: "Baker's Hub", cost: 950 },
  { date: "2026-03-09", ingredient: "Cream Cheese", qty: "8 kg", supplier: "Amul Dairy", cost: 3200 },
];

const Purchases = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Purchases</h1>
          <p className="text-muted-foreground mt-1">Track what you're buying.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Add Purchase
        </button>
      </div>

      <motion.div className="card-bake overflow-hidden p-0" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Ingredient</th>
                <th className="px-6 py-4 font-medium">Quantity</th>
                <th className="px-6 py-4 font-medium">Supplier</th>
                <th className="px-6 py-4 font-medium text-right">Cost</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((p, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">{p.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{p.ingredient}</td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{p.qty}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.supplier}</td>
                  <td className="px-6 py-4 text-right tabular-nums font-semibold text-foreground">₹{p.cost.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Purchases;
