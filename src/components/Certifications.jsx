import React from "react";
import Certs from "../data/certs.json";
import LinkC from './LinkC'

export function CertCard({ p }) {
  return (
    <LinkC to={p.link}>
      <img
      className="h-full md:h-full min-w-full md:min-w-full mx-auto bg-transparent rounded-[20px] shadow-lg overflow-hidden  object-cover object-top h-full md:w-48 px-[1px] hover:scale-105 transition duration-200"
      src={p.image}
      alt="Modern building architecture"
      width={400}
    />
    </LinkC>
  );
}
function Certifications() {
  const certsDesc = [...Certs].sort((a, b) => b.id - a.id);
  console.log(certsDesc)
  return (
    <>
      <div className="grid grid-col">
        <div className="py-10 gap-10 grid lg:grid-cols-3 xs:grid-cols-2">
          {certsDesc.map((p, index) => (
            <CertCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
