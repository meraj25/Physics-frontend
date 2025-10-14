import { cn } from "@/lib/utils";

const DataButton = ({ data, selectedDataId, onClick }) => {
  return (
    <button
                onClick={onClick}
                className={cn("border rounded-full px-4 py-2 transition-colors cursor-pointer", {
                "bg-black text-white": selectedDataId === data.id,
                "bg-white  border-black text-black":
                selectedDataId !== data.id,
         })}
       >
         {data.topic}
       </button>
  );
};

export default DataButton;
