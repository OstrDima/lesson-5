function makeBuffer() {
	let bufferValue = "";

	function stringBuffer() {
		return bufferValue;
	}

	stringBuffer.add = function(value) {
		if (isNaN(value))
			bufferValue += value + " ";
		else
			bufferValue += value;
	}
}

var buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");
console.log(buffer.print());

var buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log(buffer1.print());