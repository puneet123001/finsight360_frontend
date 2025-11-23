import GoogleButton from "@/components/auth/GoogleButton";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-semibold text-center mb-6 text-black">
            Login to <span className="text-blue-600">FinSight360</span>
          </h1>

          <p className="text-gray-500 text-center mb-6">
            Track your finances smartly & securely
          </p>

          <div className="flex justify-center">
            <GoogleButton />
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
}
