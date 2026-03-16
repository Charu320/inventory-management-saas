import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const products = [
  { name: "Sourdough Loaf", category: "Bread", price: 180 },
  { name: "Chocolate Cake (1kg)", category: "Cakes", price: 850 },
  { name: "Classic Croissant", category: "Pastries", price: 120 },
  { name: "Red Velvet Cupcake", category: "Cupcakes", price: 90 },
  { name: "Fudge Brownies (6pc)", category: "Brownies", price: 350 },
  { name: "Garlic Focaccia", category: "Bread", price: 220 },
  { name: "Blueberry Muffin", category: "Muffins", price: 80 },
  { name: "Cheese Danish", category: "Pastries", price: 140 },
];

const categoryColors: Record<string, string> = {
  Bread: "bg-accent text-accent-foreground",
  Cakes: "bg-primary/10 text-primary",
  Pastries: "bg-warning/20 text-warning-foreground",
  Cupcakes: "bg-success/20 text-success-foreground",
  Brownies: "bg-secondary text-secondary-foreground",
  Muffins: "bg-muted text-muted-foreground",
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

const Products = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Products</h1>
          <p className="text-muted-foreground mt-1">Everything you bake and sell.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {products.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card-bake p-6 cursor-pointer"
          >
            <div className="w-full h-32 rounded-2xl bg-secondary mb-4 flex items-center justify-center">
              <span className="text-3xl">🍞</span>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[p.category] || "bg-muted text-muted-foreground"}`}>
              {p.category}
            </span>
            <h3 className="font-semibold text-foreground font-display">{p.name}</h3>
            <p className="text-lg font-bold text-primary tabular-nums mt-1">₹{p.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
