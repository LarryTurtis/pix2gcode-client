import React from "react";
import { upload } from "../store/imageSlice";
import { useSelector, useDispatch } from "react-redux";

const FileUploader = (props) => {
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Image Url: {imageUrl}</p>
      <label className="btn btn-default">
        <input
          type="file"
          onChange={(e) =>
            dispatch(upload(URL.createObjectURL(e.target.files[0])))
          }
        />
      </label>
    </div>
  );
};

export default FileUploader;
