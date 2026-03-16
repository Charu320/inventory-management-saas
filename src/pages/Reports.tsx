import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const consumption = [
  { name: "Flour", used: 120, unit: "kg" },
  { name: "Butter", used: 45, unit: "kg" },
  { name: "Sugar", used: 80, unit: "kg" },
  { name: "Eggs", used: 350, unit: "pcs" },
  { name: "Cocoa", used: 18, unit: "kg" },
];

const wastageByWeek = [
  { week: "W1", cost: 800 },
  { week: "W2", cost: 620 },
  { week: "W3", cost: 450 },
  { week: "W4", cost: 580 },
];

const profitByProduct = [
  { name: "Sourdough", profit: 85 },
  { name: "Choco Cake", profit: 120 },
  { name: "Croissant", profit: 45 },
  { name: "Cupcake", profit: 35 },
  { name: "Brownie", profit: 65 },
];

const Reports = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold font-display text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-1">Understand your bakery's numbers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div className="card-bake p-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-lg font-semibold font-display text-foreground mb-6">Ingredient Consumption (This Month)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={consumption} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 92%)" />
              <XAxis type="number" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} className="text-xs" width={60} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid hsl(35,15%,90%)", fontFamily: "Geist" }} />
              <Bar dataKey="used" fill="hsl(18, 55%, 52%)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="card-bake p-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-lg font-semibold font-display text-foreground mb-6">Wastage Cost by Week</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={wastageByWeek}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 92%)" />
              <XAxis dataKey="week" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `₹${v}`} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid hsl(35,15%,90%)", fontFamily: "Geist" }} formatter={(v: number) => [`₹${v}`, "Cost"]} />
              <Line type="monotone" dataKey="cost" stroke="hsl(0, 65%, 55%)" strokeWidth={2.5} dot={{ fill: "hsl(0, 65%, 55%)", r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="card-bake p-8 lg:col-span-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-lg font-semibold font-display text-foreground mb-6">Profit per Product (₹ per unit)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={profitByProduct}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 92%)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `₹${v}`} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid hsl(35,15%,90%)", fontFamily: "Geist" }} formatter={(v: number) => [`₹${v}`, "Profit"]} />
              <Bar dataKey="profit" fill="hsl(140, 30%, 55%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;
