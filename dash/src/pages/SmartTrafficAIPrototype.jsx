export default function SmartTrafficAIPrototype() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold">Smart Traffic AI System</h1>
            <p className="text-gray-400 mt-2">
              AI Traffic Monitoring & Emergency Management Dashboard
            </p>
          </div>

          <div className="bg-green-600 px-4 py-2 rounded-2xl shadow-lg">
            System Status: ACTIVE
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800">
            <h2 className="text-gray-400">Total Vehicles</h2>
            <p className="text-4xl font-bold mt-2">1,248</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800">
            <h2 className="text-gray-400">Traffic Level</h2>
            <p className="text-4xl font-bold mt-2 text-yellow-400">HIGH</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800">
            <h2 className="text-gray-400">Ambulances Detected</h2>
            <p className="text-4xl font-bold mt-2 text-red-400">3</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800">
            <h2 className="text-gray-400">AI Accuracy</h2>
            <p className="text-4xl font-bold mt-2 text-green-400">98%</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Cameras */}
          <div className="lg:col-span-2 bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Live Traffic Cameras</h2>
              <span className="bg-red-600 px-3 py-1 rounded-full text-sm animate-pulse">
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black rounded-2xl h-56 flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <p className="text-xl font-bold">Giporoso Junction</p>
                  <p className="text-red-400 mt-2">Traffic: HEAVY</p>
                  <p className="mt-2">Vehicles: 142</p>
                </div>
              </div>

              <div className="bg-black rounded-2xl h-56 flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <p className="text-xl font-bold">Remera Junction</p>
                  <p className="text-green-400 mt-2">Traffic: NORMAL</p>
                  <p className="mt-2">Vehicles: 48</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Decisions */}
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">AI Decisions</h2>

            <div className="space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-4">
                <h3 className="font-bold text-yellow-400">
                  Traffic Detected
                </h3>
                <p className="text-gray-300 mt-2">
                  Heavy traffic detected at Giporoso.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500 rounded-2xl p-4">
                <h3 className="font-bold text-green-400">
                  Green Light Activated
                </h3>
                <p className="text-gray-300 mt-2">
                  AI increased green light to 90 seconds.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500 rounded-2xl p-4">
                <h3 className="font-bold text-red-400">
                  Ambulance Priority
                </h3>
                <p className="text-gray-300 mt-2">
                  Emergency route opened automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-8 bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Citizen Notifications</h2>

          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-4">
              <p>
                “Heavy traffic at Giporoso. Please use Remera road.”
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500 rounded-2xl p-4">
              <p>
                “Ambulance detected. Temporary traffic control activated.”
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500">
          Smart Traffic AI System - Rwanda Smart City Prototype
        </div>
      </div>
    </div>
  );
}
