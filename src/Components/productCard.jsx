export default function ProductCard(props) {
   console.log(props)
   return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <img src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?rs=1&pid=ImgDetMain" ></img>
        <button>add to cart</button>
    </div>
   )



}