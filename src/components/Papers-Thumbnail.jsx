import { uploadthumbnail } from "@/lib/papers_thumbnail";
import { Input } from "./ui/input";

function PapersInputThumbnail({ onChange, value }) {
  const handleFileChange = async (e) => {

    console.log(e.target.files);
    try {
      if (!e.target.files) {
        return;
      }
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      //const url = "https://via.placeholder.com/150";
      const publicUrl = await uploadthumbnail({ file });

      
     
      onChange(publicUrl);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="file" accept="image/png, image/jpeg, application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default PapersInputThumbnail;
