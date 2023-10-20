"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Kelas {
  KelasID: string;
  Kelas: string;
}

const Menu = () => {
  const router = useRouter();
  const [kelasList, setKelasList] = useState<Kelas[]>([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleDetailsToggle = () => {
    if (!isDetailsOpen) {
      // Fetch data only if details are opened
      axios.get("/api/kelas").then((response) => {
        setKelasList(response.data);
      });
    }
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <ul className="menu menu-horizontal px-1 text-white hidden lg:flex">
      <li className="" tabIndex={0}>
        <details
          className="dropdown"
          open={isDetailsOpen}
          onToggle={handleDetailsToggle}
        >
          <summary className="">Kelas</summary>
          <ul className="grid grid-cols-3 gap-4 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96 text-black">
            <li>
              {kelasList.slice(0, 6).map((kelas) => (
                <a
                  key={kelas.KelasID}
                  onClick={() => router.push(`/kelas/${kelas.KelasID}`)}
                >
                  Kelas {kelas.Kelas}
                </a>
              ))}
            </li>
            <li>
              {kelasList.slice(6, 9).map((kelas) => (
                <a
                  key={kelas.KelasID}
                  onClick={() => router.push(`/kelas/${kelas.KelasID}`)}
                >
                  Kelas {kelas.Kelas}
                </a>
              ))}
            </li>
            <li>
              {kelasList.slice(9).map((kelas) => (
                <a
                  key={kelas.KelasID}
                  onClick={() => router.push(`/kelas/${kelas.KelasID}`)}
                >
                  Kelas {kelas.Kelas}
                </a>
              ))}
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a onClick={() => router.push("/blog")}>Blog</a>
      </li>
    </ul>
  );
};

export default Menu;
