function calculateTotal() {
    // احصل على قيمة الفيلم وسعره
    const movieSelect = document.getElementById("movie");
    const ticketPrice = +movieSelect.value;
    
    // احصل على عدد التذاكر
    const ticketCount = +document.getElementById("tickets").value;
    
    // حساب التكلفة الإجمالية
    const totalCost = ticketPrice * ticketCount;
    
    // عرض التكلفة الإجمالية
    document.getElementById("total").innerText = `التكلفة الإجمالية: ${totalCost} جنيه`;
}
