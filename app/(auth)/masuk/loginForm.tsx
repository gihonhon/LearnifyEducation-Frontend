"use client";
// import GoogleSigninButton from "@/components/GoogleSigninButton";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GoogleSigninButton from "@/components/GoogleSigninButton";
import { Button } from "@/components/ui/button";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email required" })
      .email("Invalid Email"),
    password: z.string().min(8, { message: "Password required" }),
  })
  .required();

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const masukData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (masukData?.error) {
        toast.error("Something went happen with auth");
      } else {
        router.push("/");
      }
    } catch (error) {
      toast.error("Something wrong");
    }
  };

  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000" });

  return (
    <div className="w-full flex h-screen lg:w-[50%] lg:flex justify-center items-center">
      <div className="p-5 lg:flex h-auto border-2 rounded-md flex flex-col items-center justify-center lg:h-auto lg:flex-col lg:justify-center lg:items-center lg:border-2 lg:rounded-md lg:p-10">
        <h1 className="text-lg p-1 lg:text-2xl lg:font-medium lg:p-2">
          Masuk Akun
        </h1>
        <h3 className="p-1 text-sm lg:text-base lg:p-2">
          Di Learnify bisa belajar kapan saja kok
        </h3>
        {/** Form Input for Sign In */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g @example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="e.g @example.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4 mb-2">
              Masuk
            </Button>
          </form>
          <Button className="w-[220px] mt-4" onClick={loginWithGoogle}>
            Google
          </Button>
        </Form>

        <p className="my-2 font-light text-sm">
          tidak memilik akun?{" "}
          <a
            className="text-blue-600 cursor-pointer"
            onClick={() => router.push("/daftar")}
          >
            Daftar Sekarang
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

export default LoginForm;
