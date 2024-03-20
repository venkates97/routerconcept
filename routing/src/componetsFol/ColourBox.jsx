import React from 'react'
import { useState } from 'react'

export function ColourBox() {
  const [changecol, setchangecol] = useState("yellow");
  const [collist, setcollist] = useState(["pink", "black"])
  const styles = {
    backgroundColor: changecol,
  }
  return (
    <div>
      <div className="content">
        <input type="text" style={styles} onChange={(e) =>
          setchangecol(e.target.value)


        } />
        <button type="button"
          onClick={() => {
            setcollist([...collist, changecol])
          }

          }
        >Add Colour</button>
      </div>  
      {
        collist.map((ele) => {
          console.log(ele);
          return <CreateElemens col={ele} />
        }
        )
      }


    </div>
  )
}

function CreateElemens({ col }) {
  const styles1 = {
    backgroundColor: col,
    height:"20px",
    width:"150px"
  }
  return (
    <>
      <div style={styles1}>Colour: {col}</div>
    </>
  )

}
export default ColourBox