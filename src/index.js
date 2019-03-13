// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let ans = {};
    let H,Q,D,N,P;
    if (currency<1) return ans;
            else if (currency>10000) return ans = {error: "You are rich, my friend! We don't have so much coins for exchange"};
                else {
                   H = Math.floor(currency/50);
                   Q = Math.floor((currency-H*50)/25);
                   D = Math.floor((currency-H*50-Q*25)/10);
                   N = Math.floor((currency-H*50-Q*25-D*10)/5);
                   P = Math.floor(currency-H*50-Q*25-D*10-N*5);
                   ans = {"H":H,"Q":Q,"D":D,"N":N,"P":P};
                 
                     for (var key in ans) {
                        if (ans[key]<1) delete ans[key];
                     } 
                    return ans;
                }
}
