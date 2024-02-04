﻿namespace ProductManagementWebApi.Models
{
    public class ProductAddRequestModel
    {
       
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string SKU { get; set; } 
        public int CategoryId { get; set; }
        public string Image { get; set; }  
    }
}
