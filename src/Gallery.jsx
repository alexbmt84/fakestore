import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Gallery(props) {
    
    const [likes, setLike] = useState(props.productLikes)

    let addLike = () => {  
      setLike(likes + 1)
    }

    return (
          
        <Card className="w-100">
            <CardHeader shadow={false} floated={false} className="h-96 mt-0">
            <img
                src={props.productImage}
                alt="card-image"
                className="h-full w-full object-contain"
            />
            </CardHeader>

            <CardBody>
            <div className="flex items-center justify-between">
                <Typography color="blue-gray" className="text-md font-bold min-h-[60px] max-h-[60px] ">
                {props.productName}
                </Typography>
            </div>

            <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 mt-5 min-h-[100px] max-h-[100px] overflow-y-scroll"
            >
                {props.productDescription}
            </Typography>
            </CardBody>

            <CardFooter className="pt-0 flex flex-col">
            <Typography color="blue-gray" className="text-2xl font-bold text-center mb-5">
                {props.productPrice}$
                </Typography>
            <Button
                ripple={false}
                fullWidth={true}
                className="bg-gray-800 hover:bg-gray-900 text-base shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
                Order
            </Button>

            <Button
                ripple={false}
                fullWidth={true}
                className="mt-5 text-base bg-gray-800 hover:bg-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                onClick={ () => addLike() }
            >
                {likes}
                <i className="ml-2 fas fa-heart" />
            </Button>
            </CardFooter>
        </Card>
    );
}
