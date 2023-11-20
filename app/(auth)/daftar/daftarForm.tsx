"use client";

import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AsStudent from "./_components/as-student";
import AsTeacher from "./_components/as-teacher";

const DaftarForm = () => {
  const router = useRouter();

  return (
    <div className="w-full flex h-screen lg:w-[50%] lg:flex justify-center items-center">
      <div className="p-5 lg:flex h-auto border-2 rounded-md flex flex-col items-center justify-center lg:h-auto lg:flex-col lg:justify-center lg:items-center lg:border-2 lg:rounded-md lg:p-10">
        <h1 className="text-lg p-1 lg:text-2xl lg:font-medium lg:p-2">
          Daftar sekarang!
        </h1>
        <h3 className="p-1 mb-2 text-sm lg:text-base lg:p-2">
          Di Learnify bisa belajar kapan saja kok
        </h3>
        {/** Form Input for Sign In */}
        <Tabs defaultValue="student" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">as Student</TabsTrigger>
            <TabsTrigger value="teacher">as Teacher</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle>Pelajar</CardTitle>
                <CardDescription>
                  Daftar dirimu sebagai pelajar di learnify sekarang!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <AsStudent />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="teacher">
            <Card>
              <CardHeader>
                <CardTitle>Guru</CardTitle>
                <CardDescription>
                  Daftar dirimu sebagai guru di learnify sekarang!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <AsTeacher />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* <div className="flex justify-center w-full">
          <div className="divider w-[50%]">OR</div>
        </div> */}

        <p className="my-2 font-light text-sm">
          sudah memiliki akun?{" "}
          <a
            className="text-blue-600 cursor-pointer"
            onClick={() => router.push("/masuk")}
          >
            Masuk sekarang
          </a>
        </p>
        <p className="my-2 font-light text-sm">
          By sign in or registering you agree with our{" "}
          <a className="text-blue-600 cursor-pointer">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default DaftarForm;
