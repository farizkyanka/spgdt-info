import { login } from "@/app/admin/login/action";
import SubmitButton from "./SubmitButton";

export default function LoginCard() {
  return (
    <section className="flex flex-col h-screen w-screen justify-center">
      <div className="flex bg-white rounded-lg border-2 shadow justify-center place-self-center p-2 m-2">
        <form className="flex flex-col p-2" action={login}>
          <label htmlFor="username">Username</label>
          <input
            className="m-2 p-1 border-2 rounded"
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <label htmlFor="password">Password</label>
          <input
            className="m-2 p-1 border-2 rounded"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <SubmitButton>Login</SubmitButton>
        </form>
      </div>
    </section>
  );
}
