module.exports=function(RED){
	function Lumos(config){
		RED.nodes.createNode(this,config);
		var node =this;
		node.on('input',function(msg){
			var inputData = msg.payload
				,macid = config.inputLabels[0]
				,ipAddress = config.inputLabels[1];
				msg.payload.macID = macid;
				msg.payload.ipAddress = ipAddress;
				console.log("asdsaddss:::",config);
						if(msg.topic === 'ch1'){

							msg.payload="is triggered to::"+msg.topic;
									msg.topic ='ch1';
							node.send([msg,null]);
											// break;
						}
						if(msg.topic === 'ch2'){

							msg.payload="is triggered to::"+msg.topic;
									msg.topic ='ch2';
											// break;
							node.send([null,msg]);
						}
		})
		node.on('error',function(e){
			console.log("node lumosNode error",e);
		})
		node.on('event',function(e){
			node.send(e.data);
		})
	}
	RED.nodes.registerType("lumosNode",Lumos);
}
