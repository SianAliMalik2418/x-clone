"use client";

const NewPostInput = () => {
  return (
    <textarea
      name="newPostInput"
      id="newPostInput"
      cols="30"
      rows="10"
      className="border-b border-gray-400 pb-7 pt-1 outline-none"
      placeholder="What's Happening"
    ></textarea>
  );
};
export default NewPostInput;
