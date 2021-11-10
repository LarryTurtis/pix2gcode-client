import React from "react";
import { upload } from "../store/imageSlice";
import { zoomToDefault } from "../store/zoomSlice";
import { useSelector, useDispatch } from "react-redux";

const FileUploader = (props) => {
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const dispatch = useDispatch();

  const handleImageUpdate = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    const img = new Image();
    img.onload = function () {
      dispatch(zoomToDefault());
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
    <div className="file-uploader">
      <label className="btn btn-default">
        Image: {imageUrl}
        <input type="file" onChange={handleImageUpdate} />
      </label>
    </div>
  );
};

export default FileUploader;
