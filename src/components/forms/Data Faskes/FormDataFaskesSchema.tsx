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
    jumlah: z.coerce.number({ invalid_type_error: "Masukkan nomor saja" }),
  })
);

export const schemaDataFaskes = z.object({
  namaFaskes: z.string().min(1, { message: "Masukkan nama faskes" }),
  kelasFaskes: z.string(),
  alamat: z.object({
    provinsi: z.string({ message: "Provinsi harus dipilih" }),
    kotakabupaten: z.string({ message: "Kota/Kabupaten harus dipilih" }),
    kecamatan: z.string({ message: "Kecamatan harus dipilih" }),
    kelurahan: z.string({ message: "Kelurahan harus dipilih" }),
    jalan: z.string().min(1, { message: "Jalan harus diisi" }),
  }),
  nomorSPGDT: z
    .string()
    .min(9, { message: "Nomor SPGDT harus diisi minimal 9 karakter" }),
  BPJS: z.boolean(),
  fasilitasEmergensi: z.array(z.object({ unit: z.string() })),
  fasilitasTerapi: z.array(z.object({ unit: z.string() })),
  spesialis: schemaSpesialis,
  fasilitasDiagnostik: schemaDiagnostik,
  ruangRawat: schemaRuangRawat,
});

// Form Hook

export type FormTypeDataFaskes = z.infer<typeof schemaDataFaskes>;

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
