"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending)
    return <div className="text-center py-20">Loading...</div>;

  if (!session) return null;

  const user = session.user;

  return (
    <div className=" my-50 flex items-center justify-center  px-4">

      <div className="backdrop-blur-lg bg-white/60 border border-white/40 shadow-xl rounded-3xl w-full max-w-md p-8 text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <FaUser className="text-4xl text-gray-500" />
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>

        {/* Email */}
        <p className="text-gray-500 text-sm mt-1">{user.email}</p>

        {/* Info Section */}
        <div className="mt-6 space-y-2 text-left">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status</span>
            <span className="font-medium text-green-600">Active</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Account</span>
            <span className="font-medium">User</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => router.push("/update")}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          Update Profile
        </button>

      </div>
    </div>
  );
}