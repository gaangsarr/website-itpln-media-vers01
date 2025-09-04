import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Spacer untuk navbar fixed */}
      <div className="h-50"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Large 404 */}
            <div className="text-[12rem] sm:text-[16rem] font-black text-[#471396]/5 leading-none select-none mb-8">
              404
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900">
                  Page Not Found
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Oops! The page you're looking for seems to have wandered off.
                  Don't worry, let's get you back on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-50"></div>

      <Footer />
    </div>
  );
}
