import React from "react";
import { upload } from "../store/imageSlice";
import { useSelector, useDispatch } from "react-redux";
import { useMainQuery } from "../services/pix2Code";

const FileUploader = (props) => {
  const { data, error, isLoading } = useMainQuery();
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const dispatch = useDispatch();

  const handleImageUpdate = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    const img = new Image();
    img.onload = function () {
      dispatch(
        upload({
          imageUrl: imageUrl,
          dimensions: {
            width: img.width,
            height: img.height,
            ratio: img.width / img.height,
          },
        })
      );
    };
    img.src = imageUrl;
  };

  return (
    <div>
      {data && data.id}
      <p>Image Url: {imageUrl}</p>
      <label className="btn btn-default">
        <input type="file" onChange={handleImageUpdate} />
      </label>
    </div>
  );
};

export default FileUploader;
