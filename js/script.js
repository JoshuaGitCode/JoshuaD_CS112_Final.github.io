const divShowMorSales = document.querySelector('#show-more-sales')
const divShowMoreAuction = document.querySelector('#show-more-auction')
// Auction
var gpuCard1 = document.querySelector('#gpuCard1');
var prebuiltCard2 = document.querySelector('#prebuiltCard2');
// Trade
var cpuCard1 = document.querySelector('#cpuCard1');
var desktopCaseCard2 = document.querySelector('#desktopCaseCard2');
// Container 3

var divClick = true
var count = 0;
var countSale = 0;

function hideAuction(){
   count++;
   gpuCard1.style = "display:block ;"
   prebuiltCard2.style = "display:block ;"
   divShowMoreAuction.innerText = "Show less"
   if(count > 1){
    gpuCard1.style = "display:none ;"
    prebuiltCard2.style = "display:none ;"
    count = 0;
    divShowMoreAuction.innerText = "Show More"
   }
}

function hideSale(){
  countSale++;
  cpuCard1.style = "display:block ;"
  desktopCaseCard2.style = "display:block ;"
  divShowMorSales.innerText = "Show less"
  if(countSale > 1){
    cpuCard1.style = "display:none ;"
    desktopCaseCard2.style = "display:none ;"
    countSale = 0;
    divShowMorSales.innerText = "Show More"
  }
}