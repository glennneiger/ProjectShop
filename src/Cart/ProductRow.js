import React, { Component } from "react";
import './ProductRow.css';
import image from "../Image/spx2-1.png"
class ProductRow extends Component {

render() {  
   
    return (
                <tr className="ProductRow">
                    <td>
                        <div><img src={image}></img></div>
                    </td>
                    <td>Cây văn phòng</td>
                    <td>300.000d</td>
                    <td><div>1</div></td>
                    <td>300.000d</td>
                    <td>
                        <i class="fas fa-trash-alt"></i>
                        <i class="fas fa-plus-square"></i>
                    </td>
                   
                </tr>
    )
}
}
export default ProductRow
