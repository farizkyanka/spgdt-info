import { ReactNode } from "react";

type FooProps = {
  // look here 👇
  children: ReactNode;
};

export default function RegularButton(props: FooProps) {
  return (
    <button
      className="rounded w-fit place-self-center m-2 p-2 bg-orange-500 text-white"
      type="button"
    >
      {props.children}
    </button>
  );
}
