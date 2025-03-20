const SUPABASE_URL = "https://your-project-url.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("dataForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");

  const { data, error } = await supabaseClient.from("your_table").insert([{ name, email }]);

  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Success:", data);
  }
});
