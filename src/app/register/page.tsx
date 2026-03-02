import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Buat Akun
        </h1>

        <div className="space-y-5">
          <Input placeholder="Nama Lengkap" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}