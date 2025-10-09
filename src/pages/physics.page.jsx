import physicsData from "@/data"
import { useState } from "react";
import { useEffect } from "react";

function PhysicsPage() {

    const [selectedCategoryId, setSelectedCategoryId] = useState([]);
    const [selectedCa, setSelectedCategory] = useState([]);

    useEffect(() => {
        setSelectedCategoryId(physicsData);
    }, []);


    console.log(selectedCategoryId);

    return (
        <div className="p-8">
       
        </div>
    )
}

export default PhysicsPage;