
const base = "http://localhost:3001/customers";

export function getCustomersFetch(queryStr) {
  let url = base + queryStr;
  let result = fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      },
      method: 'GET'
  });

  return result;
}

export function deleteCustomerFetch(id) {
  let url = base+'/'+id;
  let result = fetch(url, {
    credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      },
      method: 'DELETE'
  })
  return result;
}

export function deleteNoteFetch(record) {
  let url = base+'/'+record.id;
  let result = fetch(url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      method: 'PUT',
      body:JSON.stringify(record)
  })
  return result;
}

export function updateFetch(record) {
  let url = base+'/'+record.id;
  let result = fetch(url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      method: 'PUT',
      body:JSON.stringify(record)
  })
  return result;
}
