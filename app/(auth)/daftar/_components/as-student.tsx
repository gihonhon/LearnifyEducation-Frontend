"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must 8 characters" }),
  imageUrl: z.string(),
  role: z.string(),
});

const AsStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
      role: "STUDENT",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios.post("/api/user", values);
      toast.success("Succes created");
      router.push("/masuk");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="my-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g jhonssy" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
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
        <Button
          className={cn("w-full my-4", isLoading && Loader2)}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Register"}
        </Button>
      </form>
    </Form>
  );
};

export default AsStudent;
