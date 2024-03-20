import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InfoIcon from '@mui/icons-material/Info';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export function Products({ data, id }) {
  const [likeCount, setlikeCount] = useState(0)
  const [dislikeCount, setdislikeCount] = useState(0)
  const navigate = useNavigate();
  const [displaySummary, setdisplaySummary] = useState(false);
  const styleSummary = {
    display: displaySummary == true ? "block" : "none",
  };
  const ratingStyle = {
    color: data.rating > 4 ? "green" : "brown",
  };

  return (
    <>


      <div className="product-card">
        <div className="product-image">
          <img src={data.poster} />
        </div>
        <div className="product-heading">
          <h5>{data.name}-{id}</h5>
          <h4 style={ratingStyle}>⭐{data.rating}</h4>
        </div>

        <div style={{ display: 'flex', flexDirection: "row", gap: "2px" }}>
          <IconButton color="primary">
            {
              displaySummary ? <KeyboardArrowDownIcon fontSize='small' color="primary" onClick={() => setdisplaySummary(!displaySummary)}/> 
              :
              <KeyboardArrowUpIcon fontSize='small' color="primary" onClick={() => setdisplaySummary(!displaySummary)}/>
          
            }
            {/* <KeyboardArrowDownIcon fontSize='small' color="primary" onClick={() => setdisplaySummary(!displaySummary)}/> */}
          </IconButton>

          <IconButton color="primary">
            <InfoIcon fontSize='small' color="primary" onClick={() => {
            return navigate(`/store/${id}`)
          }}/>
            </IconButton>


        </div>


        <div style={styleSummary} className="product-summary">
          <p>{data.summary}</p>
        </div>

        <div className="product-purchase">
          <p>Price: {data.price}</p>
          <Button color="success" variant="outlined">Add to Cart</Button>
        </div>

        <div style={{ display: 'flex', flexDirection: "row", gap: "2px" }}>
          <IconButton size="large">
            <Badge badgeContent={likeCount} color="primary" onClick={() => {
              setlikeCount(likeCount + 1);
            }}>
              <ThumbUpIcon color="primary" />
            </Badge>
          </IconButton>

          <IconButton >
            <Badge badgeContent={dislikeCount} color="error" onClick={() => {
              setdislikeCount(dislikeCount + 1);
            }}>
              <ThumbDownIcon color="error" />
            </Badge>
          </IconButton>
        </div>

      </div>

    </>
  );
}

export function ProductInfo() {
  const { id } = useParams();
  return (
    <>
      <div>Product INFO - {id}</div>
    </>
  )
}