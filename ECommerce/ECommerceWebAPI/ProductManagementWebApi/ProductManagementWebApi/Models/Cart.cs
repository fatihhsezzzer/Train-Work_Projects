﻿namespace ProductManagementWebApi.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public List<CartItem> Items { get; set; }  

        public Cart()
        {
            Items = new List<CartItem>();
        }
    }
}
