import { logout } from "./action";

export default async function Logout() {
  return (
    <form action={logout}>
      <button>Sign out</button>
    </form>
  );
}
