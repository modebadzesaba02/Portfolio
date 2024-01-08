import React from "react";

const Contact = () => {
  const phoneNumber = "557610657";
  const email = "saba.modebadze328@ens.tsu.ge";

  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Information</h1>
      <div className="text-xl mb-4">
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Contact;
