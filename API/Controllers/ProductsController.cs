using System.Collections.Generic;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] //http://localhost:5239/api/products
public class ProductsController(StoreContext context) : ControllerBase
{
    [HttpGet]
    public  async Task<ActionResult<List<Product>>> GetProducts(){

        return await context.Products.ToListAsync();
    }

[HttpGet("{id}")] //api/products/{id}
    public async Task<ActionResult<Product>> GetProductsByID(int id){

        
         var product = await context.Products.FindAsync(id);
         if(product == null) return NotFound(); 
         return product;
    }

   
}