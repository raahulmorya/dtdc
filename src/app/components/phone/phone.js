const Contact = () => {
  const phoneNumber = " +91 9015632299"; // Replace with your contact number
  const phoneNumber2 = " +91 9999243614"; // Replace with your contact number

  return (
    <>
        :<a
          href={`tel:${phoneNumber}`}
          style={{ margin: "0px", textDecoration: "none", color: "white" }}
        >
          {phoneNumber}
        </a>/
        <a
          href={`tel:${phoneNumber2}`}
          style={{ margin: "0px", textDecoration: "none", color: "white" }}
        >
          {phoneNumber2}
        </a>
     </>
  );
};

export default Contact;

