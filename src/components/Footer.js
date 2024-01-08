import React from "react";

const Footer = () => {
  const phoneNumber = "557610657";
  const email = "saba.modebadze328@ens.tsu.ge";

  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <div className="mb-6">
        <p className="text-xl font-semibold">Contact Information:</p>
        <p className="text-lg">Phone Number: {phoneNumber}</p>
        <p className="text-lg">Email: {email}</p>
        <p className="text-lg">Git: https://github.com/modebadzesaba02?tab=repositories</p>
      </div>
      <p className="text-lg">&copy; 2024 Saba Modebadze. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
