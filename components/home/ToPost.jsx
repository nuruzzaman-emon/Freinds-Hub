import React from "react";
import { FaImage, FaPenFancy } from "react-icons/fa";

const ToPost = () => {
  return (
    <div className="min-h-screen bg-base-200 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-2">
            <img
              className="h-42 w-82"
              src="https://res.cloudinary.com/dwfet15kj/image/upload/v1778730931/Friendshub_vpkqsl.png"
              alt=""
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Create a New Post ✨
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-base-content/70 mt-3">
            Share your thoughts and favorite moments with friends.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Status Card */}
          <div className="bg-base-100 shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-base-300 hover:shadow-primary/20 transition duration-300">
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full">
                <FaPenFancy className="text-primary text-xl md:text-2xl" />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Share Your Thoughts
                </h2>

                <p className="text-xs md:text-sm text-base-content/60">
                  Tell everyone what’s on your mind.
                </p>
              </div>
            </div>

            <textarea
              className="textarea textarea-bordered w-full h-32 md:h-40 rounded-2xl text-sm md:text-base focus:outline-none focus:border-primary"
              placeholder="What's happening today?"
            ></textarea>

            <button className="btn btn-primary w-full mt-4 md:mt-5 rounded-2xl text-white text-sm md:text-base">
              Post Status 🚀
            </button>
          </div>

          {/* Upload Photo Card */}
          <div className="bg-base-100 shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-base-300 hover:shadow-secondary/20 transition duration-300">
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <div className="bg-secondary/10 p-3 md:p-4 rounded-full">
                <FaImage className="text-secondary text-xl md:text-2xl" />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold">Upload Photos</h2>

                <p className="text-xs md:text-sm text-base-content/60">
                  Share your memories with beautiful images.
                </p>
              </div>
            </div>

            <div className="border-2 border-dashed border-base-300 rounded-2xl md:rounded-3xl p-5 md:p-8 text-center hover:border-primary transition duration-300">
              <input
                type="file"
                accept="image/*"
                multiple
                className="file-input file-input-bordered w-full"
              />

              <p className="mt-3 md:mt-4 text-xs md:text-sm text-base-content/60">
                Upload JPG, PNG or GIF images
              </p>
            </div>

            <button className="btn btn-secondary w-full mt-4 md:mt-5 rounded-2xl text-white text-sm md:text-base">
              Upload Photo 📸
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToPost;
