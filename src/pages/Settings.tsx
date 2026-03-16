import { motion } from "framer-motion";

const Settings = () => {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold font-display text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your bakery profile.</p>
      </div>

      <motion.div className="card-bake p-8 space-y-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-lg font-semibold font-display text-foreground">Business Info</h2>
        <div className="space-y-4">
          {[
            { label: "Bakery Name", value: "Sweet Crumbs Bakery" },
            { label: "Owner", value: "Amit Kumar" },
            { label: "Phone", value: "+91 98765 43210" },
            { label: "Email", value: "amit@sweetcrumbs.in" },
            { label: "Address", value: "12, MG Road, Bangalore" },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{field.label}</label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
          ))}
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm btn-squish hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </motion.div>
    </div>
  );
};

export default Settings;
