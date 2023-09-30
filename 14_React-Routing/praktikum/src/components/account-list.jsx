import React, { useEffect, useState } from "react";

function AccountList({ payload }) {
  const [accounts, setAccounts] = useState([]);
  const [noDataMessageVisible, setNoDataMessageVisible] = useState(true);

  useEffect(() => {
    if (payload.length > 0) {
      setAccounts(
        payload.map((item, index) => {
          return { ...item, id: index + 1 };
        })
      );
      setNoDataMessageVisible(false);
    } else {
      setNoDataMessageVisible(true);
    }
  }, [payload]);

  return (
    <section className="mx-5">
      <div id="container-fluid">
        <h2 className="fs-3 text-center my-3">List Accounts</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Nationality</th>
              <th scope="col">Languages</th>
            </tr>
          </thead>
          <tbody>
            {/* {accounts.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.address}</td>
                  <td>{item.nationality}</td>
                  <td>
                    {Array.isArray(item.languages)
                      ? item.languages.join(", ")
                      : JSON.stringify(item.languages)}
                  </td>
                </tr>
              );
            })} */}
            {noDataMessageVisible && (
              <tr id="noDataMessage" className="d-table-row d-block">
                <td colSpan={9} className="text-center">
                  No Data is Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mb-5" id="tableForm">
          <input
            type="text"
            placeholder="Enter First Name..."
            className="form-control w-25"
          />
          <button className="btn btn-danger mt-2 me-2" id="delete">
            Deletion
          </button>
          <button className="btn btn-outline-primary mt-2">Search</button>
        </div>
      </div>
    </section>
  );
}

export default AccountList;
