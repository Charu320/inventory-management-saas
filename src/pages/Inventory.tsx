import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";

const ingredients = [
  { name: "All-Purpose Flour", stock: 25, unit: "kg", min: 50, supplier: "Rajesh Traders", status: "low" },
  { name: "Butter (Unsalted)", stock: 8, unit: "kg", min: 15, supplier: "Amul Dairy", status: "low" },
  { name: "Sugar", stock: 40, unit: "kg", min: 20, supplier: "Rajesh Traders", status: "ok" },
  { name: "Eggs", stock: 120, unit: "pcs", min: 50, supplier: "Farm Fresh", status: "ok" },
  { name: "Vanilla Extract", stock: 0.2, unit: "L", min: 0.5, supplier: "Baker's Hub", status: "low" },
  { name: "Cocoa Powder", stock: 5, unit: "kg", min: 3, supplier: "Baker's Hub", status: "ok" },
  { name: "Cream Cheese", stock: 6, unit: "kg", min: 4, supplier: "Amul Dairy", status: "ok" },
  { name: "Yeast", stock: 2, unit: "kg", min: 1, supplier: "Baker's Hub", status: "ok" },
  { name: "Milk", stock: 15, unit: "L", min: 10, supplier: "Amul Dairy", status: "ok" },
  { name: "Baking Powder", stock: 3, unit: "kg", min: 2, supplier: "Baker's Hub", status: "ok" },
];

const StatusBadge = ({ level }: { level: string }) => {
  const styles = level === "low"
    ? "bg-warning/20 text-warning-foreground"
    : level === "out"
    ? "bg-destructive/10 text-destructive"
    : "bg-success/20 text-success-foreground";
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${styles}`}>
      {level === "low" ? "Order Soon" : level === "out" ? "Out" : "In Stock"}
    </span>
  );
};

const Inventory = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Inventory</h1>
          <p className="text-muted-foreground mt-1">Track what's in your kitchen.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Add Ingredient
        </button>
      </div>

      <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 max-w-md">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search ingredients..."
          className="bg-transparent border-none outline-none text-sm w-full font-body text-foreground placeholder:text-muted-foreground"
        />
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
                <th className="px-6 py-4 font-medium">Ingredient</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Unit</th>
                <th className="px-6 py-4 font-medium">Minimum</th>
                <th className="px-6 py-4 font-medium">Supplier</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{item.name}</td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{item.stock}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.unit}</td>
                  <td className="px-6 py-4 tabular-nums text-muted-foreground">{item.min}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.supplier}</td>
                  <td className="px-6 py-4"><StatusBadge level={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Inventory;
