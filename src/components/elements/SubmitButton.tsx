import { ReactNode } from "react";

type FooProps = {
  // look here 👇
  children: ReactNode;
};

export default function SubmitButton(props: FooProps) {
  return (
    <button
      className="rounded w-fit place-self-center m-2 p-2 bg-orange-900 text-white"
      type="submit"
    >
      {props.children}
    </button>
  );
}
