import React, {useState, useEffect} from 'react';

const FetchingData = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((response) => {
            // console.log(response);
            setData(response);
        });
    }, [id])

  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <h5>{data.title}</h5>
        {/* {
            data.map((post) => {
                return(
                    <h4 key={post.id}>{post.id}</h4>
                )
            })
        } */}
    </div>
  )
}

export default FetchingData;