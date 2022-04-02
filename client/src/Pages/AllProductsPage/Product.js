import styled from 'styled-components';



function Product({
                    className="",
                    productName,
                    quantity,
                    description,
                    userId,
                    createdAt,
                }) {

  return (
    <DIV className={`${className} border  w-20 mb-3 `}>

            <div className="">{productName}</div>

            <div className="">{description}</div>

            <div className="">{quantity}</div>
            <div className="">{userId}</div>
            <div className="">{createdAt}</div>
    </DIV>
  );
}


const DIV=styled.div`
    
 
`;

export default Product;
