import React from "react";

const Pledgepdf = () => {
  const onButtonClick = () => {
    fetch("specialclub58.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "specialclub58.pdf";
        alink.click();
      });
    });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto md:px-0 p-10">
        <h1 className="my-4 px-4 py-2">Special Club 58 Projects</h1>
        <h3 className="my-4 px-2 py-2">
          Click on below button to download PDF file for the Special Club 58
          projects
        </h3>
        <button onClick={onButtonClick} type="submit" className="home-btn">
          Download PDF
        </button>
      </div>
    </section>
  );
};

export default Pledgepdf;
