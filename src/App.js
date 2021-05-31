import React from 'react';
import { createSum } from './utils';
import { PEOPLE_LIST } from './data';

const styles = {
  root: {
    background: '#fff',
    boxShadow: 'rgb(184 188 194) 0px 2px 8px 0px',
    margin: '20px auto',
    padding: 20,
    width: '500px',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    marginBottom: 15,
  },
  input: {
    borderRadius: 3,
    border: '1px solid #333',
    padding: '10px',
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 5,
    marginRight: 15,
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listHeader: {
    display: 'flex',
    fontWeight: 600,
    letterSpacing: 0.3,
    borderBottom: '1px solid #d5d9d4',
  },
  listItem: {
    display: 'flex',
    borderBottom: '1px solid #d5d9d4',
  },
  listContent: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    padding: 10,
    margin: 0,
  },
  sum: {
    fontWeight: 600,
    borderBottom: '1px solid #000',
    marginBottom: 25,
    paddingBottom: 5,
  }
};

function App() {
  const [sum, setSum] = React.useState(0);
  const [filteredData, setFilteredData] = React.useState(PEOPLE_LIST);

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const name = e.target.name;

    if (searchTerm.length) {
      const filtered = PEOPLE_LIST.filter(people => {
        return people[name].toLowerCase().search(searchTerm.toLowerCase()) !== -1;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(PEOPLE_LIST);
    }
  };

  const fields = [
    {
      label: 'Search by gender:',
      type: 'text',
      placeholder: 'Type the gender',
      name: 'gender',
    },
    {
      label: 'Search by department:',
      type: 'text',
      placeholder: 'Type the department',
      name: 'department',
    },
  ];

  return (
    <main style={styles.root}>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>
          Calculate Validation Number:
        </label>
        <input 
          style={styles.input} 
          type="number"
          placeholder="Type the selected number"
          onChange={e => setSum(createSum(e.target.value))}
        />
      </div>
      <p style={styles.sum}>Sum of Input: {sum}</p>
      {fields.map((field, i) => (
        <div style={styles.fieldContainer} key={i}>
          <label style={styles.label}>
            {field.label}
          </label>
          <input 
            style={styles.input} 
            {...field}
            onChange={onSearch}
          />
        </div>
      ))}
      <ul style={styles.list}>
          <li style={styles.listHeader}>
            <p style={styles.listContent}>Name</p>
            <p style={styles.listContent}>Department</p>
            <p style={styles.listContent}>Gender</p>
          </li>
        {filteredData.length ? filteredData.map((people, i) =>
          <li key={i} style={styles.listItem}>
            <p style={styles.listContent}>{people.name}</p>
            <p style={styles.listContent}>{people.department}</p>
            <p style={styles.listContent}>{people.gender}</p>
          </li>
        )
        : (
          <li>
            <p>No data available...</p>
          </li>
        )}
      </ul>
    </main>
  );
}

export default App;
