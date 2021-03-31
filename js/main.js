$(document).ready(async () => {
  const data = await fetch("http://localhost:8000/api/owners/", {
    headers: {
      Authorization: "Token 2a0626275cd60fc1d45075ce01e4ffc48666467e",
    },
  });
  const json = await data.json();
  const owners = json.map((owner) => {
    console.log(owner);
    return `
      <tr>
        <th scope="row">${owner.id}</th>
        <td>${owner.first_name}</td>
        <td>${owner.last_name}</td>
      </tr>
    `;
  });
  $("#owners-list").append(owners);
  console.log(data, json);
});
