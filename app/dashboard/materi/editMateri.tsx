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

type Materi = {
  MateriID: string;
  Materi_Title: string;
  Kelas: {
    KelasID: string;
    Kelas: string;
  };
  Subject: {
    SubjectID: string;
    Subject: string;
    KelasID: string;
  };
};

const EditMateri = ({ kelas, materi }: { kelas: Kelas[]; materi: Materi }) => {
  const router = useRouter();
  const [materiTitle, setMateriTitle] = useState(materi.Materi_Title);
  const [kelasID, setKelasID] = useState(materi.Kelas.KelasID);
  const [subjectID, setSubjectID] = useState(materi.Subject.SubjectID);
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<SubjectItem[]>([]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/materi/${materi.MateriID}`, {
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
      <button className="btn btn-info" onClick={handleModal}>
        Edit
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Materi:</h3>
          <h3 className="font-bold text-lg">{materi.Materi_Title}</h3>
          <form onSubmit={handleUpdate}>
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

export default EditMateri;
