import mongoose, { Document, Schema } from "mongoose";

export type FaskesType = {
  "nama faskes": string;
  "kelas faskes": string;
  alamat: {
    provinsi: string;
    kotakabupaten: string;
    kecamatan: string;
    kelurahan: string;
    jalan: string;
  };
  "nomor spgdt": string;
  BPJS: boolean;
  "fasilitas emergensi": { unit: string }[];
  spesialis: {
    spesialisasi: string;
    sub: { sub: string }[];
  }[];
  "ruang rawat": { ruang: string; jumlah: number }[];
  "fasilitas diagnostik": {
    spesialisasi: string;
    unit: { unit: string }[];
  }[];
  "fasilitas terapi": { unit: string }[];
};

export interface IFaskes extends Document {
  "nama faskes": string;
  "kelas faskes": string;
  alamat: {
    provinsi: string;
    kotakabupaten: string;
    kecamatan: string;
    kelurahan: string;
    jalan: string;
  };
  "nomor spgdt": string;
  BPJS: boolean;
  "fasilitas emergensi": [{ unit: string }];
  spesialis: [
    {
      spesialisasi: string;
      sub: [{ sub: string }];
    }
  ];
  "ruang rawat": [{ ruang: string; jumlah: number }];
  "fasilitas diagnostik": [
    {
      spesialisasi: string;
      unit: [{ unit: string }];
    }
  ];
  "fasilitas terapi": [{ unit: string }];
}

const faskesSchema: Schema<IFaskes> = new mongoose.Schema({
  "nama faskes": { type: String, required: true },
  "kelas faskes": { type: String, required: true },
  alamat: {
    provinsi: { type: String, required: true },
    kotakabupaten: { type: String, required: true },
    kecamatan: { type: String, required: true },
    kelurahan: { type: String, required: true },
    jalan: { type: String, required: true },
  },
  "nomor spgdt": { type: String, required: true },
  BPJS: { type: Boolean, required: true },
  "fasilitas emergensi": [{ unit: String }],
  spesialis: [
    {
      spesialisasi: String,
      sub: [{ sub: String }],
    },
  ],
  "ruang rawat": [{ ruang: String, jumlah: Number }],
  "fasilitas diagnostik": [
    {
      spesialisasi: String,
      unit: [{ unit: String }],
    },
  ],
  "fasilitas terapi": [{ unit: String }],
});

const Faskes =
  mongoose.models.Faskes || mongoose.model<IFaskes>("Faskes", faskesSchema);

export default Faskes;
