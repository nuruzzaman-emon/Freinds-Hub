import React from "react";
import { handleImage, handleStatus } from "../../actions/client/submit/submit";

const ToPost = () => {
  return (
    <div className="my-12">
      <div className="flex justify-center items-center flex-col md:flex-row gap-32">
        <form onSubmit={handleStatus}>
          <div>
            <h2>Add a Status</h2>
            <textarea
              className="textarea"
              placeholder="Write your Status"
              name="status"
              required
            ></textarea>
            <button className="btn btn-xs md:btn-md my-2 btn-primary">
              Add Status
            </button>
          </div>
        </form>
        <form onSubmit={handleImage}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Upload a Photo</legend>
            <input
              type="file"
              accept="image/*"
              multiple
              className="file-input"
              name="photo"
              required
            />
            <button className="btn btn-xs md:btn-md my-2 btn-primary">
              Add Photo
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ToPost;
