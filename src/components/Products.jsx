import Product from "./Product"

const products=[
    {
        id:1,
        name:"piza",
        urlImage:"https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:33,


    },

    
        {
            id:2,
            name:"vegen sald bowl",
            urlImage:
            
            "https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            ,
            
            
         
         


            price:32,
        },

        {
            id:3,
            name:"piza",
            urlImage:"https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price:12
        },  
        
        {
            id:4,
            name:"cool drink",
            urlImage:" https://images.unsplash.com/photo-1603803721487-97009eb7f8db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2wlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",       
            price:38,
        },
        {
            id:5,
            name:"cool drink",
            urlImage:
            "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        
        
           ,
            
            
            price:38,
        },


        {

             
                id:6,
                name:"vegen sald bowl",
                urlImage:
                
                "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                
                
                
                ,
                price:32, 
            
        }
       
       
       
       
       




       
       



    

]







const Products = () => {
  return( 
    <div className="grid">
   {products.map((product)=>(
   
        <Product key={product.id} product={product}/>
   ))}
    </div>
   
       
       
       
       
         
       
  ) ;
   
};

export default Products 











