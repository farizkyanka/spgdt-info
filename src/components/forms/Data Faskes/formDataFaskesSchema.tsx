"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

// schema

const schemaSpesialis = z.array(
  z.object({
    spesialisasi: z.string(),
    sub: z.array(z.object({ sub: z.string() })),
  })
);

const schemaDiagnostik = z.array(
  z.object({
    spesialisasi: z.string(),
    unit: z.array(z.object({ unit: z.string() })),
  })
);

const schemaRuangRawat = z.array(
  z.object({
    ruang: z.string(),
    jumlah: z.coerce.number(),
  })
);

export const schemaDataFaskes = z.object({
  "nama faskes": z.string(),
  "kelas faskes": z.string(),
  alamat: z.object({
    provinsi: z.string(),
    kotakabupaten: z.string(),
    kecamatan: z.string(),
    kelurahan: z.string(),
    jalan: z.string(),
  }),
  "nomor spgdt": z.string(),
  BPJS: z.boolean(),
  "fasilitas emergensi": z.array(z.object({ unit: z.string() })),
  "fasilitas terapi": z.array(z.object({ unit: z.string() })),
  spesialis: schemaSpesialis,
  "fasilitas diagnostik": schemaDiagnostik,
  "ruang rawat": schemaRuangRawat,
});

// Form Hook

export type FormTypeDataFaskes = z.infer<typeof schemaDataFaskes>;

// export const useFormDataFaskes = () =>
//   useForm<FormTypeDataFaskes>({
//     resolver: zodResolver(schemaDataFaskes),
//   });

export function useFormDataFaskes(props?: FormTypeDataFaskes) {
  return useForm<FormTypeDataFaskes>({
    resolver: zodResolver(schemaDataFaskes),
    defaultValues: props,
  });
}

// Form Context

export const FormDataFaskesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const methods = useFormDataFaskes();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const useFormDataFaskesContext = () =>
  useFormContext<FormTypeDataFaskes>();
