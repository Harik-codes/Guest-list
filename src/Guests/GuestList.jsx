import SingleGuest from "./SingleGuest";

export default function GuestList({ guests, setSingleGuestInfo }) {
  return (
    <>
      <table>
        <thead>
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
