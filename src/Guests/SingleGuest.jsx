export default function SingleGuest({ guest, setSingleGuestInfo }) {
  function handleClick(guest) {
    setSingleGuestInfo(guest);
  }
  return (
    <>
      <tr>
        <td
          onClick={() => {
            handleClick(guest);
          }}
        >
          {guest.name}
        </td>
        <td>{guest.email}</td>
        <td>{guest.phone}</td>
      </tr>
    </>
  );
}
