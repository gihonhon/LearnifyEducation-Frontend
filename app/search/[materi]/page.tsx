import React from "react";

const SearchPage = ({ params }: { params: { materi: string } }) => {
  return <div>{params.materi}</div>;
};

export default SearchPage;
