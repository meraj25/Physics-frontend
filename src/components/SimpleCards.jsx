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

const SimpleCards = (props) => {
  return (
    <div>
      <div>
        <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center mb-5">{props.topic}</CardTitle>
        <img src={`/assets/images/${props.image}`} alt={props.topic} />
        <CardDescription>Explore the {props.topic} package.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Explore</Button>
      </CardContent>
    </Card>
    </div>
</div>
)
};

export default SimpleCards; 