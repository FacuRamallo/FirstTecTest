import { render, screen } from '@testing-library/react';
import Card from "./Components/Card";

test('renders Card Propieties', () => {

  const fakeData = {
    id:1,
    name:"pokemonTest",
    imgUrl:"imgPokeTest.jpg",
    key:1
  };
  // jest.mock("./Services/DataService");
  // const MockClass = require("./Services/DataService");
  // const getPkemonsList_Mocked = jest.fn();
  // MockClass.mockimplementation( () => { 
  //   return { getPkemonsList: getPkemonsList_Mocked } 
  // } );

  // const abc = MockClass.getPkemonsList();

  render(<Card id={fakeData.id} name={fakeData.name} imgUrl={fakeData.imgUrl} key={fakeData.key} />);
  
  const linkElement = screen.getByText(/pokemonTest/s);
  expect(linkElement).toBeInTheDocument();
});
