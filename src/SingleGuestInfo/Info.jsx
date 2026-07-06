export default function Info({ singleGuestInfo, setSingleGuestInfo }) {
  return (
    <>
      <h3>name: {singleGuestInfo.name}</h3>
      <h3>name: {singleGuestInfo.email}</h3>
      <h3>name: {singleGuestInfo.phone}</h3>
      <h3>name: {singleGuestInfo.bio}</h3>
      <h3>name: {singleGuestInfo.job}</h3>
      <button
        onClick={() => {
          setSingleGuestInfo(null);
        }}
      >
        BACK
      </button>
    </>
  );
}
