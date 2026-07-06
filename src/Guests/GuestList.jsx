import SingleGuest from "./SingleGuest";
import "./guestList.css";

export default function GuestList({ guests, setSingleGuestInfo }) {
  return (
    <>
      <table className="list">
        <thead>
          <h1>Guest List</h1>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No:</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => {
            return (
              <SingleGuest
                guest={guest}
                key={guest.id}
                setSingleGuestInfo={setSingleGuestInfo}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
