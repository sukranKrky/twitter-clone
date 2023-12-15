export const numberFormat = (value) => {

    let config={}
   if (value >9999){
        config={
        notation:"compact",
        MaximumFractionDigits:1
    }}
  return Intl.NumberFormat("tr", config).format(value);
};



// Küsürlü sayıların formatını degiştirmek için kullanılır.
// 15663 === 14 B olarak gösterir
