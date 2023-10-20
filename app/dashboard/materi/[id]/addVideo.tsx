// Import necessary modules
"use client";
import React, { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import uploadToSupabaseStorage from "@/lib/uploadToSupabaseStorage";
import axios from "axios";

// Assuming you have a file input in your component
const AddVideo = ({ id }: { id: String }) => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (file) {
      try {
        const fileUrl = await uploadToSupabaseStorage(file);
        await axios
          .post("/api/video", {
            MateriID: id,
            Url_path: `https://evdoeowyehtzevoknscs.supabase.co/storage/v1/object/public/videos/${fileUrl}`,
            Title_Video: videoTitle,
            Short_Desc: shortDesc,
          })
          .then(() => {
            setIsOpen(false);
            setVideoTitle("");
            setShortDesc("");
            setFile(null);
            router.refresh();
          });
      } catch (error) {}
    }
    router.refresh();
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Video</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Video Title</label>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="input input-bordered"
                placeholder="Video Title"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Short Description</label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Short Description"
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
              ></textarea>
              {/* <input
                type="text"
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                className="input input-bordered"
                placeholder="Short Description"
              /> */}
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">File Video</label>
              <input
                onChange={handleFileChange}
                type="file"
                accept="video/*"
                className="file-input file-input-bordered w-full "
              />
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

export default AddVideo;
// {/* <div>
// {/* Your file input */}
// <input type="file" onChange={handleFileChange} />

// {/* Display the file URL if available */}
// {fileUrl && <p>File URL: {fileUrl}</p>}
// </div> */}
