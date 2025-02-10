import { useDispatch, useSelector } from "react-redux"
import { CounterState, decrementLegacy, incrementLegacy } from "./counterReducer";
import { Button, ButtonGroup } from "@mui/material";


export default function ContactPage() {
  
const data = useSelector((state:CounterState) => state.data);

const dispatch = useDispatch();
  return (
    <div>ContactPage the data is {data}
    <ButtonGroup>
      <Button onClick={() => dispatch(decrementLegacy())}>Decrement</Button>
      <Button  onClick={() => dispatch(incrementLegacy())}>Increment</Button>
      <Button  onClick={() => dispatch(incrementLegacy(5))}>Increment By 5</Button>
    </ButtonGroup>
    </div>
  )
}