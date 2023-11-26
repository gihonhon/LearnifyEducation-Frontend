"use client";

import { Course, Kelas, Subject } from "@prisma/client";
import { CourseCard } from "../_components/course-card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigRightDashIcon,
  ArrowBigRightIcon,
} from "lucide-react";

type Courses = Course & {
  subjects: Subject | null;
  chapters: { id: string }[];
  progress: number | null;
  kelas: Kelas | null;
};

interface CoursesListProps {
  title: string;
}

export const CoursesList = ({ title }: CoursesListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalPages, setTotalPages] = useState(0);
  const [result, setResult] = useState<Courses[]>([]);
  const fetchSearchCourse = async () => {
    try {
      const response = await axios.get(
        `/api/search/${title}/${currentPage}/${pageSize}`
      );
      const { data, totalCount } = response.data;
      setResult(data);
      setTotalPages(Math.ceil(totalCount / pageSize));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchSearchCourse();
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h1 className="py-2 my-1">Search &apos;{title}&apos;</h1>
        <div className="flex items-center gap-x-2">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <ArrowBigLeft />
          </Button>
          <span className="px-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            <ArrowBigRight />
          </Button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {result.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl!}
              chaptersLength={item.chapters.length}
              progress={item.progress}
              subject={item?.subjects?.name!}
              kelas={item.kelas?.name!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
