import { 
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter
} from "./ui/card";

import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const SimpleCards = (props) => {
  return (
    
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <Link to={`/${props.path}`}>
        <Card className="w-auto">
      <CardHeader>
        <CardTitle className="text-center mb-5">{props.topic}</CardTitle>
        <div  className="relative h-64 overflow-hidden">
          <img src={`/assets/images/${props.image}`} alt={props.topic} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <CardDescription>Explore the {props.topic} package.</CardDescription>
      </CardHeader>
      <CardContent>
        
       
     
      </CardContent>
    </Card>
    </Link>
    </div>

)
};

export default SimpleCards; 