import React, {Component} from 'react'



export default function Activity(props) {
    return (
      <div>
        <h1>Things I like to do </h1>
        {props.activities.map((activity) => (
          <div key={activity.activity} style={{ display: "flex", justifyContent: "space-between" }}>
            <li >{activity.activity}</li>
            <button onClick={() => props.deleteActivity(activity)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  