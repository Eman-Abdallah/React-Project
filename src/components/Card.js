

export default function card(props){
    return (
        <div class="product-card">
    <div class="product-image">
    <div className="product-image" style={{
        backgroundImage:`url(${props.img})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover' ,
        width:'200px',
        height:'200px'
        }}></div>
  </div>
  <div class="product-details">
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
    <button type="button" className="btn">Buy Now</button>
  </div>
</div>
    )
        
}
