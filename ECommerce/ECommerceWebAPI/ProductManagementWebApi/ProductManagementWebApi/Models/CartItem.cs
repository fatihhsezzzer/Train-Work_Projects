using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProductManagementWebApi.Models
{
    public class CartItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int CartId { get; set; }
        public int ProductId { get; set; }  // Ürüne ait referans
        public int Quantity { get; set; }
        public DateTime OrderTime { get; set; }



    }
}
