import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);
  const [original, setOriginal] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (e) => {
    const img = e.target.files[0];
    if (!img) return;

    setFile(img);
    setOriginal(URL.createObjectURL(img));
    setPreview(null);
  };

  const removeBackground = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://147.93.96.202:8002/remove-bg", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    setPreview(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-8">
      <h1 className="md:text-4xl text-xl font-bold mb-2">Image Background Remover</h1>
      <p className="text-gray-400 mb-6">Upload image → Remove background → Download PNG</p>

      {/* Upload Box */}
      <label className="w-full max-w-md cursor-pointer border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 transition">
        <input type="file" accept="image/*" hidden onChange={handleSelect} />
        <p className="text-lg">📤 Click to upload image</p>
        <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG supported</p>
      </label>

      {/* Action Button */}
      {file && !loading && (
        <button
          onClick={removeBackground}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Remove Background
        </button>
      )}

     {loading && (
  <div className="mt-8 flex flex-col items-center gap-3">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-blue-400 text-sm">AI is removing background…</p>
  </div>
)}


      {/* Preview Section */}
      {(original || preview) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {original && (
            <div>
              <p className="text-center mb-2">Original</p>
              <img src={original} className="rounded-lg shadow-lg max-w-xs" />
            </div>
          )}

          {preview && (
            <div>
              <p className="text-center mb-2">Background Removed</p>
              <img
                src={preview}
                className="rounded-lg shadow-lg max-w-xs bg-[url('https://www.transparenttextures.com/patterns/checkered-pattern.png')]"
              />

              <a
                href={preview}
                download="no-bg.png"
                className="block mt-4 text-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
              >
                Download PNG
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}