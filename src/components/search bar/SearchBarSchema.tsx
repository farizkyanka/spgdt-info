`use client`;

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

export const schemaSearch = z.object({
  payload: z.string(),
});

export const schemaSearchOptions = z.object({
  kelasFaskes: z.string(),
  provinsi: z.string(),
  kotakabupaten: z.string(),
  fasilitasEmergensi: z.string(),
  ruangRawat: z.string(),
  fasilitasDiagnostik: z.string(),
  fasilitasTerapi: z.string(),
  spesialis: z.string(),
  subspesialis: z.string(),
});

export type SearchType = z.infer<typeof schemaSearch>;

export type FormTypeSearchOptions = z.infer<typeof schemaSearchOptions>;

//Form Hook

export function useFormSearchOptions(props?: FormTypeSearchOptions) {
  return useForm<FormTypeSearchOptions>({
    resolver: zodResolver(schemaSearchOptions),
  });
}

//Form Context

export const FormSearchOptionsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const methods = useFormSearchOptions();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const useFormSearchOptionsContext = () =>
  useFormContext<FormTypeSearchOptions>();
