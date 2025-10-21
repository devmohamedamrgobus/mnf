const Card = ({title,price,image,id})=>{
    return (<>
          {id%2 ? <div className="card col-md-3" >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a  className="btn btn-success">{price}</a>
              </div>
            </div>  : <div className="card col-md-3" >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a  className="btn btn-primary">{price}</a>
              </div>
            </div> }
            
    </>)
}

export default Card