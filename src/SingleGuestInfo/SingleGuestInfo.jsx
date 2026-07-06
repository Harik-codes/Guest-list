import Info from "./Info";

export default function SingleGuestInfo({
  singleGuestInfo,
  setSingleGuestInfo,
}) {
  return (
    <>
      {singleGuestInfo ? (
        <Info
          singleGuestInfo={singleGuestInfo}
          setSingleGuestInfo={setSingleGuestInfo}
        />
      ) : (
        <p> </p>
      )}
    </>
  );
}
