import React from "react";
import { useDropzone } from "react-dropzone";
import upload from "./Assets/upload .png";

export default function Pathology() {
  const [files, setFiles] = React.useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="pathology_analysis">
      <h2>Pathology Analysis</h2>
      <div {...getRootProps()} className={`drag ${isDragActive ? "active" : ""}`}>
        <input {...getInputProps()} />
        <p className="pathologyContent">
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <div>
              {files.length === 0 && <img className="upload_img" src={upload} alt="upload" />}
              <p>
                Drag and Drop files or <span style={{ color: "blue" }}>Browse</span>
                <br />
              </p>
            </div>
          )}
          <p style={{ fontSize: "15px" }}>Supported formats: Any</p>
        </p>

        {/* Display the names of dropped files */}
        {files.length > 0 && (
          <div className="dropped-file-names">
            <h2 style={{ marginLeft: "-95px", marginTop: "-20px" }}>Dropped File Name:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index} style={{ position: "relative",marginTop:"-30px", left: "13px", fontSize: "25px" }}>
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button>Submit</button>
    </div>
  );
}
