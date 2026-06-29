import "./DashboardPageLoader.css";

function DashboardPageLoader() {
  return (
    <div className="flex flex-col w-full dashboard-skeleton">
      <div className="w-56 h-10 mb-10 skeleton"></div>

      <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
        <div className="p-6 border rounded-lg border-slate-200">
          <div className="w-32 h-5 mb-5 rounded bg-slate-200"></div>

          <div className="w-48 h-12 mb-6 rounded bg-slate-200"></div>

          <div className="w-32 h-4 rounded bg-slate-200"></div>
        </div>

        <div className="p-6 border rounded-lg border-slate-200">
          <div className="w-40 h-5 mb-5 rounded bg-slate-200"></div>

          <div className="w-full h-48 rounded-lg skeleton"></div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-5 border rounded-lg border-slate-200">
            <div className="w-24 h-4 mb-4 rounded bg-slate-200"></div>

            <div className="w-32 h-8 skeleton"></div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="p-6 border rounded-lg border-slate-200">
        <div className="w-48 h-5 mb-6 rounded bg-slate-200"></div>

        {[1, 2, 3, 4, 5].map((row) => (
          <div
            key={row}
            className="grid items-center grid-cols-5 gap-4 py-4 border-b border-slate-100"
          >
            <div className="w-20 h-4 rounded bg-slate-200"></div>

            <div className="w-16 h-4 rounded bg-slate-200"></div>

            <div className="w-24 h-4 rounded bg-slate-200"></div>

            <div className="w-20 h-4 rounded bg-slate-200"></div>

            <div className="w-16 h-4 ml-auto rounded bg-slate-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPageLoader;
