import { motion } from "framer-motion";
import { ShoppingBag, Factory, AlertTriangle, Trash2, TrendingUp, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const summaryCards = [
  { label: "Orders Today", value: "24", change: "+12% vs yesterday", icon: ShoppingBag, color: "bg-primary/10 text-primary" },
  { label: "Production Today", value: "18", change: "6 batches running", icon: Factory, color: "bg-success/20 text-success-foreground" },
  { label: "Low Stock Items", value: "3", change: "Flour, Butter, Vanilla", icon: AlertTriangle, color: "bg-warning/20 text-warning-foreground" },
  { label: "Wastage This Month", value: "₹2,450", change: "↓8% from last month", icon: Trash2, color: "bg-destructive/10 text-destructive" },
];

const monthlySales = [
  { month: "Jan", sales: 42000 },
  { month: "Feb", sales: 38000 },
  { month: "Mar", sales: 55000 },
  { month: "Apr", sales: 48000 },
  { month: "May", sales: 62000 },
  { month: "Jun", sales: 58000 },
];

const topProducts = [
  { name: "Sourdough Loaf", value: 35 },
  { name: "Chocolate Cake", value: 25 },
  { name: "Croissants", value: 20 },
  { name: "Cupcakes", value: 12 },
  { name: "Brownies", value: 8 },
];

const PIE_COLORS = [
  "hsl(18, 55%, 52%)",
  "hsl(48, 70%, 68%)",
  "hsl(140, 30%, 65%)",
  "hsl(30, 70%, 68%)",
  "hsl(35, 20%, 75%)",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.2, 0, 0, 1] as const } },
};

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold font-display text-foreground">Good morning, Baker ☀️</h1>
        <p className="text-muted-foreground mt-1">You have 18 batches to prep today.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {summaryCards.map((card) => (
          <motion.div
            key={card.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card-bake p-8 flex flex-col gap-3 cursor-default"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {card.label}
              </span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
            <span className="text-4xl font-bold font-display text-foreground tabular-nums">
              {card.value}
            </span>
            <span className="text-sm text-muted-foreground">{card.change}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <motion.div
          className="card-bake p-8 lg:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold font-display text-foreground">Monthly Sales</h2>
            <div className="flex items-center gap-1 text-sm text-success-foreground bg-success/20 px-3 py-1 rounded-full">
              <TrendingUp className="h-3.5 w-3.5" />
              <span className="font-semibold">+18%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 92%)" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid hsl(35, 15%, 90%)",
                  boxShadow: "0 8px 30px rgb(0 0 0 / 0.06)",
                  fontFamily: "Geist",
                }}
                formatter={(value: number) => [`₹${value.toLocaleString()}`, "Sales"]}
              />
              <Bar dataKey="sales" fill="hsl(18, 55%, 52%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="card-bake p-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
        >
          <h2 className="text-lg font-semibold font-display text-foreground mb-6">Top Products</h2>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={topProducts}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {topProducts.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: "12px", border: "1px solid hsl(35,15%,90%)", fontFamily: "Geist" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {topProducts.map((p, i) => (
              <div key={p.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                  <span className="text-foreground">{p.name}</span>
                </div>
                <span className="text-muted-foreground tabular-nums">{p.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="card-bake p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.35 }}
      >
        <h2 className="text-lg font-semibold font-display text-foreground mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Product</th>
                <th className="pb-4 font-medium">Qty</th>
                <th className="pb-4 font-medium">Source</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {[
                { customer: "Priya Sharma", product: "Chocolate Cake", qty: 2, source: "Instagram", status: "Preparing" },
                { customer: "Rahul Mehta", product: "Sourdough Loaf", qty: 5, source: "WhatsApp", status: "Ready" },
                { customer: "Sneha Patel", product: "Cupcakes (12pc)", qty: 1, source: "Direct", status: "Delivered" },
              ].map((order, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-4 font-medium">{order.customer}</td>
                  <td className="py-4">{order.product}</td>
                  <td className="py-4 tabular-nums">{order.qty}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {order.source}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      order.status === "Ready" ? "bg-success/20 text-success-foreground" :
                      order.status === "Delivered" ? "bg-muted text-muted-foreground" :
                      "bg-warning/20 text-warning-foreground"
                    }`}>
                      {order.status}
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

export default Dashboard;
