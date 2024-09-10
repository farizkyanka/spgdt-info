"use client";

import Spinner from "@/components/elements/Spinner";
import SubmitButton from "@/components/elements/SubmitButton";
import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import FormFaskesField from "@/components/forms/Data Faskes/FormFaskesField";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function FormDataFaskes() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormDataFaskesContext();

  const resetAsyncForm = useCallback(async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/faskes/${params.id}`
    );
    try {
      if (!result.ok) return setIsError(true);
      const data = await result.json();
      reset(data);
      setIsLoading(false);
    } catch (e) {
      JSON.stringify(e);
    }
  }, [reset, params]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  const submitform = async (data: FormTypeDataFaskes) => {
    const sendData = JSON.stringify(data);
    const response = await fetch(`/api/faskes/${params.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: sendData,
    });

    if (response.ok) {
      const responseData = await response.json();
      return router.push(`/content/${responseData._id}`);
    }
  };
  if (isError) {
    return (
      <div className="text-center pt-20 text-red-500">error loading form</div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="text-center pt-40">
          <Spinner />
        </div>
      </div>
    );
  } else if (!isLoading)
    return (
      <main className="flex justify-center pt-20">
        <section className="w-full bg-white m-4 p-2 max-w-screen-lg rounded-lg border-2">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit((data) => {
              submitform(data);
            })}
          >
            <FormFaskesField />
            <button
              disabled={isSubmitting}
              type="submit"
              className=" m-2 p-2 text-xl text-white rounded bg-cyan-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
      </main>
    );
}
