import React from "react";
import * as cdb from "cdbreact";

export const Footer = () => {
  return (
    <cdb.CDBBox
      display="flex"
      flex="column"
      className="mx-auto py-5"
      style={{ width: "90%", backgroundColor: "red" }}
    >
      <cdb.CDBBox display="flex" justifyContent="between" className="flex-wrap">
        <cdb.CDBBox>
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="logo" width="30px" />
            <span className="ms-3 h5 font-weight-bold">Devwares</span>
          </a>
          <p className="my-3" style={{ width: "250px" }}>
            We are creating High Quality Resources and tools to Aid developers
            during the developement of their projects
          </p>
          <cdb.CDBBox display="flex" className="mt-4">
            <cdb.CDBBtn flat color="dark">
              <cdb.CDBIcon fab icon="facebook-f" />
            </cdb.CDBBtn>
            <cdb.CDBBtn flat color="dark" className="mx-3">
              <cdb.CDBIcon fab icon="twitter" />
            </cdb.CDBBtn>
            <cdb.CDBBtn flat color="dark" className="p-2">
              <cdb.CDBIcon fab icon="instagram" />
            </cdb.CDBBtn>
          </cdb.CDBBox>
        </cdb.CDBBox>
        <cdb.CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: "600" }}>
            Devwares
          </p>
        </cdb.CDBBox>
        <cdb.CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: "600" }}>
            Help
          </p>
        </cdb.CDBBox>
        <cdb.CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: "600" }}>
            Products
          </p>
        </cdb.CDBBox>
      </cdb.CDBBox>
      <small className="text-center mt-5">
        &copy; Devwares, 2020. All rights reserved.
      </small>
    </cdb.CDBBox>
  );
};
