"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending)
    return <div className="text-center py-20">Loading...</div>;

  if (!session) return null; // middleware protects

  const user = session.user;

  return (
    <>

      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-32 rounded-full mx-auto">
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name}
            />
          </div>
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>

        {/* Button */}
        <button
          className="btn bg-green-500 text-white font-semibold hover:bg-blue-500 mt-6"
          onClick={() => router.push("/my-profile/update")}
        >
          Update Information
        </button>
      </div>

    </>
  );
}