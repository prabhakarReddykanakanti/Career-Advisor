export const Login = ({ onClose, onSwitch }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-sm relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
  
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Log In</h2>
  
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email or Mobile Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                placeholder="Enter email or phone"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                placeholder="Enter password"
              />
              <a href="#" className="text-sm text-blue-400 hover:underline mt-1 block text-right">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium"
            >
              Log In
            </button>
          </form>
  
          {/* Create Account Link */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <a
              href="#"
              onClick={onSwitch}
              className="text-blue-400 hover:underline"
            >
              Create a new account
            </a>
          </p>
        </div>
      </div>
    );
  };
  