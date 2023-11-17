export const Image=(props)=>{
    console.log(props)
    return(
        <div id="img">
         <img id="Img-width" src={props.Link}/>
        <h2>{props.Name}</h2>
        </div>


    )
}