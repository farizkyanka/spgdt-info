import { FormTypeDataFaskes } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import mongoose, { Document, Schema } from "mongoose";

export interface PayloadType extends FormTypeDataFaskes {
  _id: string;
}

export interface IFaskes extends Document {
  namaFaskes: string;
  kelasFaskes: string;
  alamat: {
    provinsi: string;
    kotakabupaten: string;
    kecamatan: string;
    kelurahan: string;
    jalan: string;
  };
  nomorSPGDT: string;
  BPJS: boolean;
  situsWeb: string;
  fasilitasEmergensi: [{ unit: string }];
  spesialis: [
    {
      spesialisasi: string;
      sub: [{ sub: string }];
    }
  ];
  ruangRawat: [{ ruang: string; jumlah: number }];
  fasilitasDiagnostik: [
    {
      spesialisasi: string;
      unit: [{ unit: string }];
    }
  ];
  fasilitasTerapi: [{ unit: string }];
}

const faskesSchema: Schema<IFaskes> = new mongoose.Schema({
  namaFaskes: { type: String, required: true },
  kelasFaskes: { type: String, required: true },
  alamat: {
    provinsi: { type: String, required: true },
    kotakabupaten: { type: String, required: true },
    kecamatan: { type: String, required: true },
    kelurahan: { type: String, required: true },
    jalan: { type: String, required: true },
  },
  nomorSPGDT: { type: String, required: true },
  BPJS: { type: Boolean, required: true },
  situsWeb: { type: String },
  fasilitasEmergensi: [{ unit: String }],
  spesialis: [
    {
      spesialisasi: String,
      sub: [{ sub: String }],
    },
  ],
  ruangRawat: [{ ruang: String, jumlah: Number }],
  fasilitasDiagnostik: [
    {
      spesialisasi: String,
      unit: [{ unit: String }],
    },
  ],
  fasilitasTerapi: [{ unit: String }],
});

const Faskes =
  mongoose.models.Faskes || mongoose.model<IFaskes>("Faskes", faskesSchema);

export default Faskes;
