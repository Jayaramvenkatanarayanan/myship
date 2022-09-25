import React from "react";
import Table from "react-bootstrap/Table";

export default function Dashboard() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Parcel-ID</th>
          <th>Company Name</th>
          <th>Service Provider</th>
          <th>From-Pincode</th>
          <th>To-Pincode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>554-998-898</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>641041</td>
          <td>641001</td>
        </tr>
        <tr>
          <td>2</td>
          <td>554-998-87798</td>
          <td>Otto2</td>
          <td>@mdo</td>
          <td>641041</td>
          <td>641001</td>
        </tr>
        <tr>
          <td>3</td>
          <td>554-998-8779w8</td>
          <td>Otto3</td>
          <td>@mdo</td>
          <td>641041</td>
          <td>641001</td>
        </tr>
      </tbody>
    </Table>
  );
}
