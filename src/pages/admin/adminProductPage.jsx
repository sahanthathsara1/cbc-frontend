import axios from "axios";

export default function AdminProductPage() {
    axios.get("http://localhost:3000/api/products")
        .then((res) => console.log(res))
        .catch((err) => console.error(err));

    return (
        <div>
            <h1>Admin Product Page</h1>
        </div>
    );
}
