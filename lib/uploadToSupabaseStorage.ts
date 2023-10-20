import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is not defined.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to upload a file to Supabase Storage
async function uploadToSupabaseStorage(file: File) {
  try {
    // Get the file name and extension
    const fileName = `${file.name}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("videos") // Replace with your actual storage bucket name
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading to Supabase Storage:", error.message);
      throw new Error("Failed to upload file to storage");
    }

    // Return the URL of the uploaded file
    return data.path;
  } catch (error) {
    console.error("Error in uploadToSupabaseStorage:", error);
    throw error;
  }
}

export default uploadToSupabaseStorage;
