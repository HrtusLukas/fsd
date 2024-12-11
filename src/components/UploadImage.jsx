
// import React, { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// // Configure Supabase client
// const supabaseUrl = "YOUR_SUPABASE_URL";
// const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// const UploadImage = () => {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("Please select an image first.");
//       return;
//     }

//     try {
//       setUploading(true);
//       setMessage("");

//       // Generate a unique name for the image
//       const fileName = `${Date.now()}-${file.name}`;

//       // Upload image to Supabase bucket "Images"
//       const { data, error } = await supabase.storage
//         .from("Images")
//         .upload(fileName, file);

//       if (error) {
//         throw error;
//       }

//       setMessage("Image uploaded successfully!");
//       console.log("Uploaded file details:", data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       setMessage("Error uploading image. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
//       <h2>Upload Image</h2>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={uploading} style={{ marginTop: "10px" }}>
//         {uploading ? "Uploading..." : "Upload"}
//       </button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UploadImage;
