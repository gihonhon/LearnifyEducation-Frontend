"use client";
import type { Kelas } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

interface SubjectItem {
  SubjectID: string;
  Subject: string;
  KelasID: string;
}

const AddMateri = ({ kelas }: { kelas: Kelas[] }) => {
  const router = useRouter();
  const [materiTitle, setMateriTitle] = useState("");
  const [kelasID, setKelasID] = useState("");
  const [subjectID, setSubjectID] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<SubjectItem[]>([]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/materi", {
      Materi_Title: materiTitle,
      KelasID: kelasID,
      SubjectID: subjectID,
    });

    router.refresh();
    setIsOpen(false);
  };

  const getKelasById = async (id: string) => {
    await axios.get(`/api/kelas/${id}`).then((response) => {
      setSubjects(response.data.subjects);
    });
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Materi</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Materi Title</label>
              <input
                type="text"
                value={materiTitle}
                onChange={(e) => setMateriTitle(e.target.value)}
                className="input input-bordered"
                placeholder="Materi Title"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Kelas</label>
              <select
                value={kelasID}
                onChange={async (e) => {
                  setKelasID(e.target.value);
                  getKelasById(e.target.value);
                }}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select a Kelas
                </option>
                {kelas.map((kelas) => (
                  <option key={kelas.KelasID} value={kelas.KelasID}>
                    {kelas.Kelas}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Subject</label>
              <select
                value={subjectID}
                onChange={(e) => setSubjectID(e.target.value)}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select a Subjcet
                </option>
                {/** map the option */}
                {subjects.map((item) => (
                  <option key={item.SubjectID} value={item.SubjectID}>
                    {item.Subject}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMateri;
