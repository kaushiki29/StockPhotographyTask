import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Cards(props) {
  const imgLink=props.src + "&fit=crop&w=400&h=600"
  return (
    <Card sx={{ minWidth: 275, padding: "10px", margin: "10px" }}>
      <CardContent>
        <img
          src={imgLink}
          alt="Images"
          key={props.key}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{window.open(props.src)}}>View Image</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
