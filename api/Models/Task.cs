using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Task
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Task title is required")]
        [StringLength(100)]
        public string Title { get; set; }
        [Required(ErrorMessage = "Task description is required")]
        [StringLength(500)]
        public string Description { get; set; }
        [Required(ErrorMessage = "Task priority is required")]
        public DateTime CreatedAt { get; set; }
        [Required(ErrorMessage = "Task priority is required")]
        public DateTime UpdatedAt { get; set; }

        public bool IsCompleted { get; set; }
    }
}