const TableRow= (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.lastname}</td>
      <td>{props.name}</td>
      
    </tr>

  )

}

export const Friends = (props) => {
  let users = props.function();
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++){
    userRow.push(<TableRow key = {i} index = {i} name = {users[i].name} lastname = {users[i].lastname}/>)

  }

  return (
    <div>
      <h2>Это страница с друзьями</h2>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
            </tr>
          </thead>
          <tbody>
           {userRow}
          </tbody>
        </table>




      </div>



    </div>

  )
};
