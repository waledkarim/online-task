import StoreForm from "./components/forms/StoreForm";

export default function Home() {
  return (
    <div className="h-screen bg-slate-100 pt-5">

      <div className="max-w-4xl mx-auto p-5 rounded-lg bg-white">

        {/* Form er header */}
        <div className="border-b border-b-slate-500">
          <h1 className="font-bold text-2xl text-">
              Create a store
          </h1>
          <p className="text-slate-500 font-medium py-2">
              Add your basic store information and complete the setup
          </p>
        </div>
        
        {/* Form er body */}
        <StoreForm />

      </div>

    </div>
  );
}
