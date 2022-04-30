import React, {useMemo} from 'react';

const styles = {
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  margin: '5px',
  borderRadius: '10px',
  fontSize: '1.2em',
  padding: '0.3em',
  listStyle: 'none'
}

const Demolist = (props) => {

    const sortedList = useMemo(() => {
        return props.items.sort((a, b) => a - b);
    }, [props.item])
    console.log(sortedList)

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {
                    sortedList.map(item => <li style={styles} key={item}>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default React.memo(Demolist);
