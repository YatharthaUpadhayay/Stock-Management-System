function Stock({stockID, name, category, quantity, price, expiry}) {
    return (
        <tr>
            <td>{stockID}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{expiry}</td>
        </tr>
    )
}
export default Stock;