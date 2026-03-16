import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const recipes = [
  {
    name: "Sourdough Loaf",
    ingredients: [
      { name: "All-Purpose Flour", qty: "500g" },
      { name: "Water", qty: "350ml" },
      { name: "Salt", qty: "10g" },
      { name: "Yeast", qty: "5g" },
    ],
  },
  {
    name: "Chocolate Cake",
    ingredients: [
      { name: "All-Purpose Flour", qty: "300g" },
      { name: "Cocoa Powder", qty: "80g" },
      { name: "Sugar", qty: "250g" },
      { name: "Eggs", qty: "4 pcs" },
      { name: "Butter", qty: "200g" },
      { name: "Milk", qty: "200ml" },
    ],
  },
  {
    name: "Classic Croissant",
    ingredients: [
      { name: "All-Purpose Flour", qty: "500g" },
      { name: "Butter", qty: "300g" },
      { name: "Sugar", qty: "60g" },
      { name: "Yeast", qty: "10g" },
      { name: "Milk", qty: "150ml" },
      { name: "Salt", qty: "10g" },
    ],
  },
  {
    name: "Red Velvet Cupcake",
    ingredients: [
      { name: "All-Purpose Flour", qty: "200g" },
      { name: "Cocoa Powder", qty: "15g" },
      { name: "Butter", qty: "100g" },
      { name: "Cream Cheese", qty: "150g" },
      { name: "Sugar", qty: "200g" },
      { name: "Eggs", qty: "2 pcs" },
    ],
  },
];

const Recipes = () => {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-display text-foreground">Recipes</h1>
        <p className="text-muted-foreground mt-1">What goes into each product.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="space-y-2">
          {recipes.map((r, i) => (
            <motion.button
              key={r.name}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-5 py-4 rounded-xl flex items-center justify-between transition-colors btn-squish ${
                selected === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-medium">{r.name}</span>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </motion.button>
          ))}
        </div>

        <div className="lg:col-span-2">
          {selected !== null && (
            <motion.div
              key={selected}
              className="card-bake p-8"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-xl font-bold font-display text-foreground mb-6">
                {recipes[selected].name}
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border">
                    <th className="pb-3 font-medium">Ingredient</th>
                    <th className="pb-3 font-medium text-right">Quantity (per unit)</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes[selected].ingredients.map((ing) => (
                    <tr key={ing.name} className="border-b border-border last:border-0">
                      <td className="py-4 text-foreground">{ing.name}</td>
                      <td className="py-4 text-right tabular-nums font-medium text-foreground">{ing.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
