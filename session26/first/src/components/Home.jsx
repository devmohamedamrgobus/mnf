import img2 from '../image/1.png.webp'

function Home(){
    return (<>
        <div style={{backgroundImage:`url(${img2})`,width:"100%",height:"500px"}}></div>
        <h1 className="container">home page</h1>
    </>)
}

export default Home;