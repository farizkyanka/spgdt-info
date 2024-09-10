import { validateRequest } from "@/lib/auth";
import { logout } from "./action";

export default async function Logout() {
  const { user } = await validateRequest();
  return (
    <form
      className={`h-full p-2 m-2 rounded-lg hover:bg-orange-400 flex items-center ${
        !user && "invisible"
      }`}
      action={logout}
    >
      <button>Sign out</button>
    </form>
  );
}
