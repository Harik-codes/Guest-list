import { useEffect, useState } from "react";
import axios from "axios";
import GuestList from "./Guests/GuestList";
import SingleGuestInfo from "./SingleGuestInfo/SingleGuestInfo";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [singleGuestInfo, setSingleGuestInfo] = useState(null);

  useEffect(() => {
    const secondFunction = async () => {
      const data = await axios.get(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-FTB-ET-WEB-FT/guests",
      );
      console.log(data);
      setGuests(data.data.data);
    };
    secondFunction();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} setSingleGuestInfo={setSingleGuestInfo} />
      <hr />
      <SingleGuestInfo
        singleGuestInfo={singleGuestInfo}
        setSingleGuestInfo={setSingleGuestInfo}
      />
    </>
  );
}
