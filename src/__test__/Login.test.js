import { render,screen } from "@testing-library/react";
import Login from "../Login";
test('checking component loaded',()=>{
    //steps for testing heading element loaded
    render(<Login/>);//components ah load panna
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
    //intha element nammada html output la irukkitha endratha uruthiseyyum
})

test('checking email & password inputs are empty',()=>{
    render(<Login/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
})