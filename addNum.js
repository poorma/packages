// module.exports = function(RED) {
var redmethod = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var a,b;
        node.on('input', function(msg) {
        	if(msg.topic == 'input1'){
        		a = msg.payload;
        	}else if(msg.topic == 'input2'){
        		b = msg.payload;
        	}
            // msg.payload = msg.payload.toLowerCase();
            if(a !=null && b!=null){
	            msg.payload = a+b;
	            node.send(msg);
            }

        });
    }
    RED.nodes.registerType("addNum",LowerCaseNode);

}
module.exports = redmethod;