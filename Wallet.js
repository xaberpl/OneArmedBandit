class Wallet {
  constructor(money) {
    let _money = money;

    this.getWalletValue = () => _money;
    this.checkCanPlay = (value) => {
      if (_money >= value && typeof value == Number) {
        return true;
      } else if (_money < value || typeof value !== Number) {
        return false;
      }
    };
    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && isNaN(value) == false) {
        if (type == "+") return (_money += value);
        else if (type == "-") return (_money -= value);
        else {
          throw Error("Invalid type of operation");
        }
      } else {
        throw Error("Invalid number");
      }
    };
  }
}
const wallet = new Wallet(200);
