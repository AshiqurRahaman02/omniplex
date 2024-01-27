import React, { useState } from 'react'
import CodeEditor from '../../components/collabcraft/CodeEditor';
import Canvas from '../../components/collabcraft/Canvas';


import "../../styles/collabcraft.css"

function Home() {
  const [displayCode, setDisplayCode] = useState(true)

	return (
		<div>
			<button onClick={()=>setDisplayCode((pre)=>!pre)}>Switch</button>
			{displayCode ? <CodeEditor/>:<Canvas/>}
		</div>
	);
}

export default Home
