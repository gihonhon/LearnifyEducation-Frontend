"use client";

import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
  userId: string;
  courseId: string;
}

export const CourseEnrollButton = ({
  courseId,
  userId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.post(`/api/courses/${courseId}/assigns/${userId}
      `);
      toast.success("Success Assign ");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  // const onClick = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(`/api/courses/${courseId}/checkout`);
  //     window.location.assign(response.data.url);
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Assign Kursus
    </Button>
  );
};
