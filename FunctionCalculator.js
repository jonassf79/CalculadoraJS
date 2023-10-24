let calculator = {
x : parseInt(prompt("ensira o primeiro numero da operação: ")),
y : parseInt(prompt("ensira o segundo numero da operação: ")),
sum : function(){return this.x + this.y},
sub : function(){return this.x - this.y},
mult : function(){return this.x * this.y},
div : function(){return this.x / this.y}
}
alert(calculator.sum())
alert(calculator.mult())